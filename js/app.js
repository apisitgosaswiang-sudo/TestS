import { initializeFirebase } from "./firebase.js";
import { registerRoute, startRouter } from "./router.js";
import {
  renderLanding,
  renderTrainerLogin,
  renderMemberDashboard,
  renderTrainerPlaceholder,
  renderNotFound
} from "./views.js";

registerRoute("/", renderLanding);
registerRoute("/trainer-login", renderTrainerLogin);
registerRoute("/member", renderMemberDashboard);
registerRoute("/trainer", renderTrainerPlaceholder);
registerRoute("/404", renderNotFound);

startRouter();
initializeFirebase();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.warn("Service worker registration failed:", error);
    });
  });
}
