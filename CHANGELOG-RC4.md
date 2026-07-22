# CLOB v1.0 RC4 — Package Assignment Hotfix

- Fixed Member Detail runtime error caused by binding `#history-tab` when the element does not exist.
- Restored Package tab navigation.
- Added a visible package action button in the current-package card.
- Added `unassigned` package state instead of showing new members as expired.
- Package assignment continues to save through `saveMember()` to Firebase under the member record.
- Bumped service-worker cache to RC4.
