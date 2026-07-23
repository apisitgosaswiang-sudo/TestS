# CLOB v2 Patch-010 — Coach Security Stabilization

## Fixed

- Coach ID is collected before the six-digit Security PIN without confirming
  whether that ID exists.
- Invalid credential responses no longer reveal whether Coach ID or PIN was
  incorrect.
- PBKDF2-SHA256 verification with Salt remains in place.
- Local and Firebase failed-attempt state now uses the stricter active lock.
- Five failed credential attempts trigger a fifteen-minute lockout.
- Coach login persists across refresh and reopening the PWA.
- Coach sessions have no automatic timeout and end only through manual Logout.
- Manual Logout clears both persistent and tab-level Coach session state.
- Removed the unused legacy Trainer Dashboard import from the active app entry.

## Product governance

- Added the CLOB v2 Product Constitution.
- Added the CLOB v2 Roadmap.
- Added a persistent Product Decisions log.

## Unchanged

- Member Login and Member PIN flow
- Member lockout behavior
- Firebase database paths and schema
- Coach profile-photo paths
- Programs, Packages, Exercise Library and Workout data
