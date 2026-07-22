const STORAGE_KEY = "clob_online_coaching_state";

const DEFAULT_STATE = { notifications: [] };

export function loadOnlineCoachingState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      ...DEFAULT_STATE,
      ...stored,
      notifications: Array.isArray(stored.notifications)
        ? stored.notifications
        : DEFAULT_STATE.notifications
    };
  } catch {
    return structuredClone(DEFAULT_STATE);
  }
}

export function saveOnlineCoachingState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function markNotificationRead(notificationId) {
  const state = loadOnlineCoachingState();
  const item = state.notifications.find((entry) => entry.id === notificationId);
  if (item) item.read = true;
  saveOnlineCoachingState(state);
  return state;
}

export function markAllNotificationsRead() {
  const state = loadOnlineCoachingState();
  state.notifications = state.notifications.map((item) => ({ ...item, read: true }));
  saveOnlineCoachingState(state);
  return state;
}

export function getDashboardSummary(members = [], checkins = []) {
  const activeClients = members.filter((member) => member.status !== "inactive").length || members.length;
  const waitingForReview = checkins.filter((item) => item.reviewStatus === "submitted").length;
  const overdue = checkins.filter((item) => item.reviewStatus === "overdue").length;
  const dueToday = checkins.filter((item) => item.reviewStatus === "due").length;

  return {
    activeClients,
    waitingForReview,
    overdue,
    dueToday
  };
}
