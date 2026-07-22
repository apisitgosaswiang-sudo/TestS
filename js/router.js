const routes = new Map();
const patternRoutes = [];
let started = false;

export function registerRoute(path, renderer) {
  routes.set(path, renderer);
}

export function registerPatternRoute(pattern, renderer) {
  patternRoutes.push({ pattern, renderer });
}

export function navigate(path) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (window.location.hash !== `#${normalized}`) {
    window.location.hash = normalized;
  } else {
    renderCurrentRoute();
  }
}

export function renderCurrentRoute() {
  const path = window.location.hash.replace(/^#/, "") || "/";
  const exact = routes.get(path);
  if (exact) {
    exact();
    return;
  }

  for (const { pattern, renderer } of patternRoutes) {
    const match = path.match(pattern);
    if (match) {
      renderer(...match.slice(1).map((value) => decodeURIComponent(value)));
      return;
    }
  }

  routes.get("/404")?.();
}

function bindGlobalNavigation() {
  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-route], [data-trainer-route]");
    if (!target) return;
    const route = target.dataset.route || target.dataset.trainerRoute;
    if (!route) return;
    event.preventDefault();
    navigate(route);
  });
}

export function startRouter() {
  if (started) return;
  started = true;
  bindGlobalNavigation();
  window.addEventListener("hashchange", renderCurrentRoute);
  renderCurrentRoute();
}
