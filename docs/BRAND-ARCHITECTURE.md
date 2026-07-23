# CLOB / Morning Warrior Brand Architecture

**CLOB** is the master brand. **Morning Warrior** is the product and app name
for the Trainer online system.

App-facing surfaces:

- Browser title and metadata
- PWA install name and iOS Home Screen title
- Landing, login, loading and trainer wordmarks
- App icon
- Member data-export product label and filename
- Current product, Nutrition and QA documentation

Use **Morning Warrior by CLOB** where the relationship or ownership should be
explicit, while keeping **Morning Warrior** as the primary app name.

The following CLOB identifiers intentionally remain unchanged:

- Manifest `id`, start URL and scope
- Firebase root path `clob`
- Local Storage and Session Storage keys prefixed with `clob_`
- Browser event names prefixed with `clob:`
- CSS classes and custom properties prefixed with `clob-` or `--clob-`
- Historical patch filenames and changelogs

Keeping those identifiers stable preserves the installed PWA identity, existing
member data, login sessions, offline fallbacks and compatibility with Patch-011F1.
They also remain consistent with CLOB as the master brand.
