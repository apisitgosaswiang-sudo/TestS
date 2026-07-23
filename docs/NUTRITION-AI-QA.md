# Morning Warrior Nutrition + AI QA

Automated regression passed before packaging. The checkboxes below are the
post-deployment acceptance checklist and intentionally remain unchecked until
the published Firebase/App Check environment and real devices are tested.

## Brand

- [ ] The landing page, login, loading screens and trainer entry display
      `Morning Warrior` as the app name and `by CLOB` as the endorsement.
- [ ] Browser title, install name and iOS Home Screen title display
      `Morning Warrior`.
- [ ] The installed icon uses the Morning Warrior mark rather than the former
      C mark.
- [ ] `CLOB` remains the master brand in product documentation.
- [ ] `clob` Firebase paths, storage keys, event names and CSS namespaces remain
      unchanged so existing data stays compatible.

## Member Nutrition

- [ ] Nutrition is the third item in the five-tab member navigation.
- [ ] Home / Workout / Nutrition / Progress / Profile stay visible and active
      state is correct.
- [ ] Trainer target appears for the correct effective date.
- [ ] Calories Remaining updates after add, edit and delete.
- [ ] Protein, Carbs and Fat totals update immediately.
- [ ] A member can log a manual meal without a target.
- [ ] A member can reuse a recent confirmed meal.
- [ ] Trainer feedback appears under the correct meal and date.
- [ ] Duplicate submit is prevented while saving.
- [ ] A local pending meal remains visible if Firebase temporarily fails.

## AI photo flow

- [ ] Opening Nutrition does not call AI.
- [ ] Opening the add sheet does not call AI.
- [ ] Selecting and compressing a photo does not call AI.
- [ ] The AI request only starts after `วิเคราะห์ด้วย AI`.
- [ ] One result contains Calories, Protein, Carbs and Fat.
- [ ] AI values are editable and are not saved until member confirmation.
- [ ] A failed AI request keeps the manual form available.
- [ ] Reanalysis requires confirmation and explains that it uses more quota.
- [ ] Exact same image fingerprint returns cached result without new quota.
- [ ] Member limit stops a fourth new image on the same day.
- [ ] Project limit stops new analyses after 60 total requests.
- [ ] No Gemini API key exists in browser source.
- [ ] App Check is enforced before public testing.

## Trainer

- [ ] Nutrition opens inside Member Detail.
- [ ] Trainer can set Calories and Protein with an effective date.
- [ ] A new target does not rewrite historical meal records.
- [ ] Today totals match the member screen.
- [ ] Trainer can select any of the previous 14 days for review.
- [ ] Trainer edits update the same meal record and mark `updatedBy: trainer`.
- [ ] Trainer feedback is saved against the selected meal and date.
- [ ] Seven-day view labels missing days as `ไม่มีข้อมูล`.
- [ ] Days within ±10% show `ตามเป้าหมาย`.

## Regression

- [ ] Member login and PIN still work.
- [ ] Trainer login and PIN still work.
- [ ] Programs open and save.
- [ ] Packages add, edit and renew.
- [ ] Workout Not Started / In Progress / Completed still work.
- [ ] Progress Check-in edits the same date without duplication.
- [ ] Progress Photos remain separate from metric Check-ins.
- [ ] Weekly Check-in still updates Home tasks.
- [ ] PWA reopens with the newest Service Worker cache.
