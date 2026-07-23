# Morning Warrior Product Direction

> `CLOB` is the master brand. `Morning Warrior` is the Trainer app and product
> name under CLOB.
>
> Morning Warrior v2 product decisions are governed by:
>
> - `docs/CLOB-V2-PRODUCT-CONSTITUTION.md`
> - `docs/CLOB-V2-ROADMAP.md`
> - `docs/PRODUCT-DECISIONS.md`
>
> If this legacy roadmap conflicts with an approved Morning Warrior v2
> decision, the Morning Warrior v2 documents take precedence. The filenames
> above retain CLOB because it remains the master brand and technical namespace.

## Vision

Morning Warrior คือแอปสำหรับ Trainer ภายใต้แบรนด์หลัก CLOB
ที่เชื่อม Trainer และ Member เข้าด้วยกัน

> แอปที่ลูกเทรนอยากเปิดทุกวัน และทำให้เทรนเนอร์จัดการทุกอย่างได้จากที่เดียว

## Product Principle

ก่อนเพิ่มฟีเจอร์ ให้ถามว่า:

1. สิ่งนี้ทำให้เทรนเนอร์ทำงานเร็วขึ้นหรือไม่
2. สิ่งนี้ทำให้สมาชิกอยากเปิดแอปและฝึกต่อเนื่องหรือไม่

## Entry Experience

หน้าเว็บหลักต้องแสดงฝั่ง Member ก่อน

- Member Login เป็นปุ่มหลัก
- Trainer Login เป็นปุ่มรอง

## Member Mode

- Today
- Workout
- Progress
- Profile

## Trainer Mode

- Dashboard
- Members
- Programs
- Exercise Library
- Settings

## Roadmap

1. Pack 01 — Foundation
2. Pack 02 — Member Dashboard
3. Pack 03 — Workout Tracking
4. Pack 04 — Trainer Dashboard
5. Pack 05 — Members
6. Pack 06 — Program Builder
7. Pack 07 — Exercise Library
8. Pack 08 — Progress
9. Pack 09 — Package
10. Pack 10 — Production


## Pack 02 Completed

- Member Dashboard
- Today's Workout
- Coach Message
- Weekly Progress
- Weight & Package Overview
- Next Session
- Member Bottom Navigation


## Pack 03 Completed

- Workout Overview
- Exercise Tracker
- Weight / Reps / RPE
- Set Completion
- Auto-fill Previous Weight
- Rest Timer
- Workout Progress
- Finish Workout
- Completed Activity for Trainer Dashboard


## Pack 04 Completed

- Trainer Dashboard
- Member Status Summary
- Completed / In Progress / Not Started
- Need Attention
- Package Expiring
- Recent Activity


## Pack 05 Part 1 Completed

- Black Morning Warrior Logo
- Members List
- Search / Filter / Sort
- Member Detail
- Personal Data
- Package Overview
- Latest Workout


## Pack 06 Completed

- Programs Dashboard
- Program Builder
- Workout Days
- Exercise Blocks
- Sets / Reps / Weight / RPE / Tempo / Rest / Notes
- Exercise Search
- Reorder Exercises
- Assign Program to Member
- Firebase + Local Storage persistence


## Pack 07 Completed

- Coach First greeting on Trainer Dashboard only
- Short UI copy
- Central Exercise Library
- Search and category filters
- Favorites and recent exercises
- Exercise detail
- Add / edit / delete exercise
- Coach Tip
- Video and GIF links
- Program Builder integration
- Firebase and Local Storage persistence


## Pack 08 Part 1 Completed

- Firebase Storage SDK
- Confirm-before-upload photo flow
- 4:5 crop canvas
- Drag and zoom
- WebP compression at 1080 × 1350
- Profile photo upload
- Front / side / back progress photos
- Pending previews
- Multi-photo upload confirmation
- Upload progress and retry
- Realtime Database metadata


## Pack 08 Part 2 Completed

- Progress dashboard per member
- Check-in form
- Weight and body fat
- Skeletal muscle
- Body measurements
- Notes
- Latest metric cards
- Change calculations
- Timeline
- Edit and delete
- Realtime Database and local fallback


## Pack 08 Part 3 Completed

- Weight, body fat and waist charts
- Check-in adherence summary
- Before / after entry point
- Personal records
- Best PR per exercise
- Firebase and local persistence
- Progress UI polish

## Pack 08 Complete


## Pack 09 Part 1 Completed

- Online coaching dashboard
- Dynamic trainer avatar
- Trainer profile settings
- Needs Attention
- Notification center
- Mark all notifications read
- Member navigation


## Pack 09 Part 2 Completed

- Weekly check-in form
- Sleep, stress, energy and hunger
- Workout and nutrition adherence
- Steps and cardio
- Weekly wins and challenges
- Question for coach
- Coach feedback and next-week goal
- Calories and macros adjustment
- Training adjustment
- Review status and timeline


## Pack 10 — Beta Trial Freeze

- Member Today experience
- Daily tasks
- Water, steps, sleep and cardio tracking
- Versioned Pack10 data path
- Member profile and beta data policy
- Trainer Beta Control
- Firebase member backup
- JSON export
- Audit log
- Feature freeze and rollback documentation
