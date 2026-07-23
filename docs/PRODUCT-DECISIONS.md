# CLOB Product Decisions

This log records decisions that must remain consistent across chats and patches.
The latest explicit Product Owner decision overrides an older conflicting one.

## 2026-07-23 — Dynamic Home / Daily Coaching App

- CLOB is evolving from a Workout App into a `Daily Coaching App`.
- Member login opens one calm Home dashboard that answers: “What should I do
  next?”
- Home is dynamic, not a fixed list of equally weighted widgets.
- The largest Home card is the current `Next Best Action`.
- When real Nutrition data exists, Calories Remaining outranks consumed
  calories and uses these states:
  - more than 250 kcal remaining: normal
  - 101–250 kcal remaining: near target
  - 0–100 kcal remaining: critical
  - below 0: show the amount over target
- Nutrition UI must not appear before the Nutrition data layer provides real
  targets and meal totals.
- Before Nutrition ships, Workout, Weekly Check-in and Perfect Day use the same
  dynamic priority engine.
- Member Home remains visually calm, but the Member bottom navigation stays
  fixed on Home, Workout, Progress and Profile. Real-device use showed that
  removing it made primary destinations feel lost after returning Home.
- `Today's Mission` remains the action model, while Dynamic Home becomes its
  presentation layer. This supersedes the earlier rule that a fixed Mission
  ring must always be the only Home hero.
- Progress must let a member create and edit their own Check-in. A read-only
  Member Progress summary is not acceptable.

## 2026-07-23 — CLOB v2 Product Direction

- CLOB v2 vision: “The most beautiful coaching app for personal trainers.”
- `Today's Mission` is the product core and signature.
- Core principles: Momentum over Information, Beauty with Purpose, Color Leads
  Attention, Celebrate Small Wins and Coach First.
- Every feature must pass the beauty, three-second usability and return-tomorrow
  gates.
- Emotion Design must respond to real time and user state, not random copy.
- D-001 Design System is completed before new Nutrition UI.

## 2026-07-23 — D-001 Design Reset

- The first Patch-011 design package was not applied and is not a design
  baseline.
- Patch-011R supersedes that unshipped package.
- The visual direction is `Athletic Luxury with Momentum`.
- The interface is quiet and neutral by default. Strong color is reserved for
  the next action, active progress and earned reward.
- `Today's Mission` is the only visual hero on Member Today.
- This fixed-hero rule is superseded by the later Dynamic Home decision above.
- Workout, habits and navigation support the mission hierarchy instead of
  competing with it.
- Member Today is the reference screen used to validate D-001 before Nutrition.

## 2026-07-23 — Coach Session

- No automatic Coach Session Timeout.
- A verified Coach session persists across refresh and reopening the PWA.
- The Coach remains signed in until manual Logout.
- Manual Logout clears both the active browser session and persistent Coach
  session.

## 2026-07-23 — Coach Lockout

- Five failed credential attempts trigger a fifteen-minute lockout.
- Lockout is separate from session persistence.
- The UI must not reveal whether Coach ID or Security PIN was incorrect.

## Existing Technical Constraints

- Do not change Member Login or Member PIN flow.
- Do not store a plain-text PIN in client JavaScript.
- Do not rename, move or delete protected Firebase paths without approval.
- Stabilize existing modules before adding new features.
- Deliver small patch ZIPs containing changed files only unless a full recovery
  build is explicitly required.
- Bump the Service Worker cache when changed JavaScript or CSS must refresh in
  the installed PWA.
