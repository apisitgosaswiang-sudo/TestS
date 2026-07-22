# CLOB v1.0 RC2

## Fixed
- Firebase initializes before the first route renders. This prevents Programs from opening before Firebase is ready.
- Programs no longer inject demo programs when Firebase is empty.
- Programs route and trainer navigation are connected on Dashboard, Members, Programs, Library and Settings.
- Trainer Settings now includes Home and Logout controls.
- Trainer can assign a predefined monthly coaching package to a member or use a custom package.
- Package selection fills price, dates, renewal and included features.
- Member can add or change their profile photo.
- Member can submit their own Weekly Update.
- Member can upload Front / Side / Back photos from the Weekly Update flow.
- Trainer progress photos remain read-only.

## Data safety
- Existing protected Firebase paths were not renamed or deleted.
- Package fields remain nested under the existing member package object.
- Weekly updates continue using the existing onlineCoaching weeklyCheckins path.
