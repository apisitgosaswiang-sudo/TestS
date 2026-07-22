# CLOB v1.0 RC3 Stabilization QA

## Included fixes
- Programs normalize missing `days` and `exercises` arrays before render/save.
- Program save/duplicate/archive/assign now reports Firebase write failure instead of silently succeeding.
- Member package assignment preserves catalog and billing cycle, writes Firebase first, then updates local cache.
- Firebase is the source of truth when connected; localStorage is used only when Firebase is unavailable.
- Firebase connection status is shown again when returning to Landing, plus a global warning banner on app pages.
- Image processing falls back from WebP to JPEG for older Safari.
- Root `database.rules.json` is valid JSON and matches `firebase/database.rules.json`.
- Combined Realtime Database rules include both `clob` and `workoutTrackerData` paths.

## Static checks performed
- JSON parse for all `.json` files.
- JavaScript syntax checks for all `.js` files.
- ES module import targets verified.
- ZIP integrity verified.

## Manual production checks still required
1. Trainer login and open Programs.
2. Create, edit, save, refresh and reopen a Program.
3. Open a Member, assign each package type, refresh and verify values.
4. Confirm the same member/package from a second device.
5. Upload profile and weekly progress photos on current iPhone Safari.
6. Publish the combined Firebase rules only after comparing with production rules.
