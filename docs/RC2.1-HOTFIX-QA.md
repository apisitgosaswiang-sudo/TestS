# CLOB v1.0 RC2.1 Hotfix QA

## Scope
- Programs navigation and dynamic routes
- Program local/Firebase loading fallback
- Package assignment and Firebase write feedback

## Automated checks performed
- JavaScript syntax check for all `js/*.js` and `sw.js`
- Module import path existence check
- Route registration consistency check
- ZIP integrity check

## Manual production checks required after deploy
1. Trainer login
2. Open Programs from Dashboard, Members, Library and Settings
3. Create and save a Program
4. Refresh and confirm the Program remains
5. Open a Member > Package
6. Select a package and save
7. Refresh and confirm package data remains
8. Sign in as the member and confirm package visibility

Firebase and Storage writes require the deployed site and live Firebase rules; they cannot be fully proven by static checks alone.
