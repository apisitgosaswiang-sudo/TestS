import {
  getMemberByCode,
  saveMemberSecurity,
  registerMemberPinFailure,
  clearMemberPinFailures,
  resetMemberPinSecurity
} from "./firebase.js";

const PIN_LENGTH = 6;
const PBKDF2_ITERATIONS = 150000;
const MAX_ATTEMPTS = 5;
const LOCK_MS = 15 * 60 * 1000;

function bytesToBase64(bytes) {
  let binary = "";
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary);
}

function base64ToBytes(value) {
  const binary = atob(value);
  return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}

function normalizePin(pin) {
  return String(pin || "").replace(/\D/g, "").slice(0, PIN_LENGTH);
}

export function isValidPin(pin) {
  return /^\d{6}$/.test(String(pin || ""));
}

async function derivePinHash(pin, salt, iterations = PBKDF2_ITERATIONS) {
  if (!globalThis.crypto?.subtle) {
    throw new Error("อุปกรณ์นี้ไม่รองรับการตั้ง PIN อย่างปลอดภัย");
  }

  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(pin),
    "PBKDF2",
    false,
    ["deriveBits"]
  );

  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", hash: "SHA-256", salt, iterations },
    keyMaterial,
    256
  );

  return bytesToBase64(new Uint8Array(bits));
}

export async function getMemberSecurityState(memberCode) {
  const member = await getMemberByCode(memberCode);
  if (!member) return { exists: false, member: null, hasPin: false, lockedUntil: 0 };

  const security = member.security || {};
  return {
    exists: true,
    member,
    security,
    hasPin: Boolean(security.pinHash && security.pinSalt),
    lockedUntil: Number(security.lockedUntil || 0)
  };
}

export async function createMemberPin(memberCode, pin) {
  const normalized = normalizePin(pin);
  if (!isValidPin(normalized)) throw new Error("PIN ต้องเป็นตัวเลข 6 หลัก");

  const salt = crypto.getRandomValues(new Uint8Array(16));
  const pinHash = await derivePinHash(normalized, salt, PBKDF2_ITERATIONS);
  const saved = await saveMemberSecurity(memberCode, {
    pinHash,
    pinSalt: bytesToBase64(salt),
    pinIterations: PBKDF2_ITERATIONS,
    pinCreatedAt: Date.now(),
    failedAttempts: 0,
    lockedUntil: 0
  });

  if (!saved) throw new Error("ไม่สามารถบันทึก PIN ได้ กรุณาตรวจการเชื่อมต่อ");
  return true;
}

export async function verifyMemberPin(memberCode, pin, security) {
  const normalized = normalizePin(pin);
  if (!isValidPin(normalized)) return { ok: false, reason: "invalid" };

  const latestMember = await getMemberByCode(memberCode);
  const latestSecurity = latestMember?.security || security || {};
  const lockedUntil = Number(latestSecurity?.lockedUntil || 0);
  if (lockedUntil > Date.now()) return { ok: false, reason: "locked", lockedUntil };

  const salt = base64ToBytes(latestSecurity.pinSalt);
  const hash = await derivePinHash(
    normalized,
    salt,
    Number(latestSecurity.pinIterations || PBKDF2_ITERATIONS)
  );

  if (hash === latestSecurity.pinHash) {
    await clearMemberPinFailures(memberCode);
    return { ok: true };
  }

  const failure = await registerMemberPinFailure(memberCode, {
    maxAttempts: MAX_ATTEMPTS,
    lockMs: LOCK_MS
  });

  return {
    ok: false,
    reason: failure?.lockedUntil > Date.now() ? "locked" : "invalid",
    lockedUntil: Number(failure?.lockedUntil || 0),
    attemptsRemaining: Math.max(0, MAX_ATTEMPTS - Number(failure?.failedAttempts || 0))
  };
}

export async function trainerResetMemberPin(memberCode) {
  const saved = await resetMemberPinSecurity(memberCode);
  if (!saved) throw new Error("รีเซ็ต PIN ไม่สำเร็จ");
  return true;
}

export function formatLockTime(timestamp) {
  const remaining = Math.max(0, Number(timestamp || 0) - Date.now());
  const minutes = Math.max(1, Math.ceil(remaining / 60000));
  return `${minutes} นาที`;
}
