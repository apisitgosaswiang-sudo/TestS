const STORAGE_KEY = "clob_online_coaching_state";

const DEFAULT_STATE = {
  notifications: [
    {
      id: "n1",
      type: "overdue",
      title: "Check-in overdue",
      message: "Mint is 2 days overdue.",
      memberCode: "10001",
      createdAt: Date.now() - 7200000,
      read: false
    },
    {
      id: "n2",
      type: "review",
      title: "Waiting for review",
      message: "Bank submitted a weekly check-in.",
      memberCode: "10002",
      createdAt: Date.now() - 3600000,
      read: false
    },
    {
      id: "n3",
      type: "inactive",
      title: "Member inactive",
      message: "Jane has no workout activity for 5 days.",
      memberCode: "10003",
      createdAt: Date.now() - 1800000,
      read: true
    }
  ]
};

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
    waitingForReview: waitingForReview || 5,
    overdue: overdue || 2,
    dueToday: dueToday || 8
  };
}
