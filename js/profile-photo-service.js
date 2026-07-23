import {
  getFirebaseStatus,
  saveCoachProfilePhoto,
  saveMemberProfilePhoto,
  uploadImage
} from "./firebase.js";

const OWNER_CONFIG = {
  member: {
    storageRoot: "members",
    save: (ownerId, upload) => saveMemberProfilePhoto(ownerId, upload)
  },
  coach: {
    // Compatibility path: current production Storage rules already permit
    // authenticated uploads below /members/{memberId}/**. Keeping coach
    // profile files in a reserved subfolder lets Coach and Member use the
    // same proven upload flow without weakening rules or colliding with IDs.
    storageRoot: "members/_coaches",
    save: (ownerId, upload) => saveCoachProfilePhoto(ownerId, upload)
  }
};

function normalizeOwnerId(ownerId) {
  return String(ownerId || "").trim();
}

function validateRequest({ ownerType, ownerId, blob }) {
  const config = OWNER_CONFIG[ownerType];
  const id = normalizeOwnerId(ownerId);

  if (!config) throw new Error("Unsupported profile owner type.");
  if (!id) throw new Error("Profile owner ID is missing.");
  if (!(blob instanceof Blob) || blob.size <= 0) {
    throw new Error("Profile photo is invalid.");
  }

  const contentType = blob.type || "image/webp";
  if (!["image/webp", "image/jpeg", "image/png"].includes(contentType)) {
    throw new Error("Profile photo must be WEBP, JPEG or PNG.");
  }

  return { config, id };
}

function storageErrorMessage(error) {
  const code = String(error?.code || "");
  if (code === "storage/unauthorized") {
    return "Firebase Storage ไม่อนุญาตให้อัปโหลด กรุณาตรวจ Firebase Authentication และ Storage Rules แล้วลองใหม่";
  }
  if (code === "storage/retry-limit-exceeded") {
    return "การอัปโหลดใช้เวลานานเกินไป กรุณาตรวจอินเทอร์เน็ตแล้วลองใหม่";
  }
  return error?.message || "อัปโหลดรูปโปรไฟล์ไม่สำเร็จ";
}

function imageExtension(blob) {
  if (blob.type === "image/jpeg") return "jpg";
  if (blob.type === "image/png") return "png";
  return "webp";
}

export async function uploadProfilePhoto({
  ownerType,
  ownerId,
  blob,
  onProgress = () => {}
}) {
  const { config, id } = validateRequest({ ownerType, ownerId, blob });
  const status = getFirebaseStatus();

  if (!status.ready || !status.user) {
    throw new Error("Firebase Authentication ยังไม่พร้อม กรุณาปิดและเปิดแอปใหม่แล้วลองอีกครั้ง");
  }

  const path = `${config.storageRoot}/${id}/profile/profile_${Date.now()}.${imageExtension(blob)}`;

  try {
    const upload = await uploadImage(path, blob, onProgress);
    const saved = await config.save(id, upload);
    if (!saved) {
      throw new Error("อัปโหลดสำเร็จ แต่บันทึกลิงก์รูปลงฐานข้อมูลไม่สำเร็จ");
    }

    return upload;
  } catch (error) {
    throw new Error(storageErrorMessage(error));
  }
}
