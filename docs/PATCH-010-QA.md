# Patch-010 QA — Coach Security

Use a test environment or controlled beta account.

## Coach Login

- [ ] Coach Login starts with Coach ID.
- [ ] A four-digit ID advances to the PIN step without confirming the identity.
- [ ] PIN accepts exactly six numeric digits.
- [ ] Correct credentials open Coach Dashboard.
- [ ] Wrong ID and wrong PIN show the same generic credential error.
- [ ] Error copy does not identify which field was wrong.

## Lockout

- [ ] Attempts one through four remain blocked and show remaining attempts.
- [ ] Attempt five triggers a fifteen-minute lockout.
- [ ] Refresh does not clear the lockout.
- [ ] Closing and reopening the PWA does not clear the lockout.
- [ ] Access is available again after the lock period.

## Session

- [ ] Successful login survives page refresh.
- [ ] Successful login survives closing and reopening the PWA.
- [ ] No automatic logout occurs after fifteen minutes.
- [ ] Manual Logout returns to Home.
- [ ] Opening Coach Login after Logout requires credentials again.

## Regression

- [ ] Member Login is unchanged.
- [ ] Member six-digit PIN is unchanged.
- [ ] Member failed-attempt lockout is unchanged.
- [ ] Programs, Members, Packages, Library and Settings open after Coach Login.
- [ ] No Change Coach PIN menu is visible.
