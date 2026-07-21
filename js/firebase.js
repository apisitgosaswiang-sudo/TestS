import { firebaseConfig } from "./config.js";

let firebaseReady = false;
let authUser = null;
let database = null;
let dbApi = null;

export async function initializeFirebase() {
  try {
    const [
      { initializeApp },
      { getAuth, signInAnonymously },
      { getDatabase, ref, get, set, update, push }
    ] = await Promise.all([
      import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"),
      import("https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js"),
      import("https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js")
    ]);

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const credential = await signInAnonymously(auth);

    authUser = credential.user;
    database = getDatabase(app);
    dbApi = { ref, get, set, update, push };
    firebaseReady = true;

    window.dispatchEvent(new CustomEvent("clob:firebase-status", {
      detail: { ready: true, uid: authUser.uid }
    }));

    return { ready: true, user: authUser };
  } catch (error) {
    console.warn("Firebase initialization failed:", error);

    window.dispatchEvent(new CustomEvent("clob:firebase-status", {
      detail: { ready: false, error }
    }));

    return { ready: false, error };
  }
}

export function getFirebaseStatus() {
  return { ready: firebaseReady, user: authUser };
}

export async function getMemberByCode(code) {
  if (!firebaseReady || !database || !dbApi) return null;

  try {
    const snapshot = await dbApi.get(
      dbApi.ref(database, `clob/members/${code}`)
    );
    return snapshot.exists() ? snapshot.val() : null;
  } catch (error) {
    console.warn("Could not load member:", error);
    return null;
  }
}

export async function saveMemberActivity(code, payload) {
  if (!firebaseReady || !database || !dbApi) return false;

  try {
    await dbApi.push(
      dbApi.ref(database, `clob/members/${code}/activity`),
      payload
    );
    return true;
  } catch (error) {
    console.warn("Could not save activity:", error);
    return false;
  }
}

export async function saveWorkoutSession(code, sessionId, payload) {
  if (!firebaseReady || !database || !dbApi) return false;

  try {
    await dbApi.set(
      dbApi.ref(database, `clob/workoutSessions/${code}/${sessionId}`),
      payload
    );

    await dbApi.update(
      dbApi.ref(database, `clob/members/${code}`),
      {
        lastWorkoutStatus: payload.status,
        lastWorkoutTitle: payload.title,
        lastWorkoutUpdatedAt: payload.updatedAt
      }
    );

    return true;
  } catch (error) {
    console.warn("Could not save workout session:", error);
    return false;
  }
}


export async function getAllMembers() {
  if (!firebaseReady || !database || !dbApi) return null;

  try {
    const snapshot = await dbApi.get(
      dbApi.ref(database, "clob/members")
    );
    return snapshot.exists() ? snapshot.val() : null;
  } catch (error) {
    console.warn("Could not load members:", error);
    return null;
  }
}

export async function getWorkoutSessions() {
  if (!firebaseReady || !database || !dbApi) return null;

  try {
    const snapshot = await dbApi.get(
      dbApi.ref(database, "clob/workoutSessions")
    );
    return snapshot.exists() ? snapshot.val() : null;
  } catch (error) {
    console.warn("Could not load workout sessions:", error);
    return null;
  }
}


export async function getPrograms() {
  if (!firebaseReady || !database || !dbApi) return null;
  try {
    const snapshot = await dbApi.get(dbApi.ref(database, "clob/programs"));
    return snapshot.exists() ? snapshot.val() : null;
  } catch (error) {
    console.warn("Could not load programs:", error);
    return null;
  }
}

export async function saveProgram(programId, payload) {
  if (!firebaseReady || !database || !dbApi) return false;
  try {
    await dbApi.set(
      dbApi.ref(database, `clob/programs/${programId}`),
      payload
    );
    return true;
  } catch (error) {
    console.warn("Could not save program:", error);
    return false;
  }
}

export async function deleteProgram(programId) {
  if (!firebaseReady || !database || !dbApi) return false;
  try {
    await dbApi.set(
      dbApi.ref(database, `clob/programs/${programId}`),
      null
    );
    return true;
  } catch (error) {
    console.warn("Could not delete program:", error);
    return false;
  }
}

export async function assignProgramToMember(memberCode, payload) {
  if (!firebaseReady || !database || !dbApi) return false;
  try {
    await dbApi.set(
      dbApi.ref(database, `clob/memberPrograms/${memberCode}`),
      payload
    );
    return true;
  } catch (error) {
    console.warn("Could not assign program:", error);
    return false;
  }
}


export async function getExercises() {
  if (!firebaseReady || !database || !dbApi) return null;
  try {
    const snapshot = await dbApi.get(dbApi.ref(database, "clob/exercises"));
    return snapshot.exists() ? snapshot.val() : null;
  } catch (error) {
    console.warn("Could not load exercises:", error);
    return null;
  }
}

export async function saveExercise(exerciseId, payload) {
  if (!firebaseReady || !database || !dbApi) return false;
  try {
    await dbApi.set(dbApi.ref(database, `clob/exercises/${exerciseId}`), payload);
    return true;
  } catch (error) {
    console.warn("Could not save exercise:", error);
    return false;
  }
}

export async function deleteExercise(exerciseId) {
  if (!firebaseReady || !database || !dbApi) return false;
  try {
    await dbApi.set(dbApi.ref(database, `clob/exercises/${exerciseId}`), null);
    return true;
  } catch (error) {
    console.warn("Could not delete exercise:", error);
    return false;
  }
}

export async function getExercisePreferences() {
  if (!firebaseReady || !database || !dbApi || !authUser) return null;
  try {
    const snapshot = await dbApi.get(
      dbApi.ref(database, `clob/exercisePreferences/${authUser.uid}`)
    );
    return snapshot.exists() ? snapshot.val() : null;
  } catch (error) {
    console.warn("Could not load exercise preferences:", error);
    return null;
  }
}

export async function saveExercisePreferences(payload) {
  if (!firebaseReady || !database || !dbApi || !authUser) return false;
  try {
    await dbApi.set(
      dbApi.ref(database, `clob/exercisePreferences/${authUser.uid}`),
      payload
    );
    return true;
  } catch (error) {
    console.warn("Could not save exercise preferences:", error);
    return false;
  }
}
