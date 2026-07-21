import { getMemberByCode, saveMemberCheckIn } from "./firebase.js";

const DEMO_MEMBERS = {
  "12345": {
    code: "12345",
    name: "Apisit",
    greetingName: "Apisit",
    coachName: "Coach A",
    coachMessage: "วันนี้เน้นฟอร์ม ไม่ต้องรีบ พักเซตละ 90 วินาที 💪",
    workout: {
      title: "Upper Body A",
      duration: 45,
      exercises: 6,
      status: "ready"
    },
    week: {
      completed: 2,
      target: 3
    },
    weight: {
      current: 78.2,
      change: -0.8,
      unit: "kg"
    },
    package: {
      daysLeft: 18,
      totalSessions: 12,
      sessionsLeft: 7
    },
    nextSession: {
      label: "ครั้งถัดไป",
      date: "พฤหัสบดี",
      time: "18:30"
    }
  }
};

const DEFAULT_MEMBER = {
  name: "Member",
  greetingName: "Member",
  coachName: "Coach",
  coachMessage: "พร้อมเริ่มการฝึกวันนี้แล้วหรือยัง?",
  workout: {
    title: "Today's Workout",
    duration: 45,
    exercises: 5,
    status: "ready"
  },
  week: {
    completed: 0,
    target: 3
  },
  weight: {
    current: 0,
    change: 0,
    unit: "kg"
  },
  package: {
    daysLeft: 0,
    totalSessions: 0,
    sessionsLeft: 0
  },
  nextSession: {
    label: "ครั้งถัดไป",
    date: "ยังไม่กำหนด",
    time: ""
  }
};

export async function loadMember(code) {
  const remote = await getMemberByCode(code);
  if (remote) {
    return normalizeMember(code, remote);
  }

  return normalizeMember(code, DEMO_MEMBERS[code] || DEFAULT_MEMBER);
}

function normalizeMember(code, source) {
  return {
    code,
    name: source.name || DEFAULT_MEMBER.name,
    greetingName: source.greetingName || source.name || DEFAULT_MEMBER.greetingName,
    coachName: source.coachName || DEFAULT_MEMBER.coachName,
    coachMessage: source.coachMessage || DEFAULT_MEMBER.coachMessage,
    workout: { ...DEFAULT_MEMBER.workout, ...(source.workout || {}) },
    week: { ...DEFAULT_MEMBER.week, ...(source.week || {}) },
    weight: { ...DEFAULT_MEMBER.weight, ...(source.weight || {}) },
    package: { ...DEFAULT_MEMBER.package, ...(source.package || {}) },
    nextSession: { ...DEFAULT_MEMBER.nextSession, ...(source.nextSession || {}) }
  };
}

export async function recordWorkoutStart(code, workoutTitle) {
  const payload = {
    type: "workout_started",
    workoutTitle,
    timestamp: Date.now()
  };

  localStorage.setItem(
    `clob_last_workout_start_${code}`,
    JSON.stringify(payload)
  );

  await saveMemberCheckIn(code, payload);
  return payload;
}
