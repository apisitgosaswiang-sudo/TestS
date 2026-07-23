# Patch-011F QA — Dynamic Home and Member Progress

## Install

- [ ] Confirm Patch-010 is installed.
- [ ] Do not install Patch-011 or Patch-011R.
- [ ] Copy Patch-011F files into their matching paths.
- [ ] Keep existing Firebase rules and database data.
- [ ] Close and reopen the PWA once after publishing.

## Dynamic Home

- [ ] Member login opens Home directly.
- [ ] Greeting and member name appear immediately.
- [ ] Bottom navigation remains fixed on Home and respects the iPhone safe area.
- [ ] Home is active and opens Home after navigating to another Member tab.
- [ ] Workout, Progress and Profile are reachable directly from Home.
- [ ] An unstarted Workout is the largest card.
- [ ] Start Workout opens the existing Workout flow.
- [ ] An in-progress Workout shows `IN PROGRESS` and resumes.
- [ ] A completed Workout moves the next incomplete mission into the hero.
- [ ] Submitting Weekly Check-in completes the Check-in mission.
- [ ] Completing all required missions shows `Perfect Day`.
- [ ] Latest Weight uses a real Progress Check-in.
- [ ] No Calories or meal data appears before Nutrition is connected.
- [ ] Water and Sleep controls still save.
- [ ] Profile avatar, Progress card and Weekly Check-in open correctly.

## Member Progress

- [ ] `บันทึก Check-in วันนี้` is visible above the summary.
- [ ] The form includes Date, Weight, Body Fat and Waist.
- [ ] Optional fields include Muscle, Chest, Hip, Arm, Thigh and Note.
- [ ] Saving with every measurement empty shows a clear validation message.
- [ ] Saving one or more measurements updates the hero, metrics and Timeline.
- [ ] The button changes to `แก้ไข Check-in วันนี้` after saving today.
- [ ] Editing today updates the existing item and does not create a duplicate.
- [ ] A Timeline item opens its existing values for editing.
- [ ] Photo-only records do not increase the Check-in count.
- [ ] Photo Sets count only saved entries that contain an uploaded photo.
- [ ] Progress Photos still opens and returns to Member Progress.

## Responsive and accessibility

- [ ] Test at 320, 375, 390 and 430 px widths.
- [ ] No horizontal scroll appears.
- [ ] Page content is not hidden behind the fixed bottom navigation.
- [ ] Primary action is visible without searching.
- [ ] The Check-in sheet remains usable with the keyboard open.
- [ ] Inputs use a decimal-friendly mobile keyboard.
- [ ] Focus indicators remain visible.
- [ ] Reduced-motion preference disables non-essential animation.

## Regression

- [ ] Member ID and PIN login are unchanged.
- [ ] Coach ID and PIN login are unchanged.
- [ ] Coach session persists until manual Logout.
- [ ] Programs open and save.
- [ ] Packages create, edit and assign.
- [ ] Adding a Member does not assign a package automatically.
- [ ] Firebase paths and rules are unchanged.
