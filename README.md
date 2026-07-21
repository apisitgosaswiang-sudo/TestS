# CLOB Alpha 0.7 — Pack 07

Pack 07 เพิ่ม Exercise Library แบบจัดการข้อมูลได้จริง และเชื่อมกับ Program Builder

## Dashboard

คำทักทายในหน้า Trainer Dashboard เปลี่ยนเป็น:

```text
Good Morning,
Coach First
```

คำว่า Coach First ใช้เฉพาะส่วนทักทายเท่านั้น  
ส่วนอื่นใช้ข้อความสั้นและตรงความหมาย

## Exercise Library

- Search Exercise
- All / Favorites / Recent
- Filter by Category
- Exercise Detail
- Primary Muscle
- Secondary Muscles
- Equipment
- Level
- Coach Tip
- Video URL
- GIF URL
- Add Exercise
- Edit Exercise
- Delete Exercise
- Favorite
- Recent Viewed
- Local Storage fallback
- Firebase sync

## Categories

- Squat
- Hinge
- Push
- Pull
- Lunge
- Core
- Carry
- Rotation
- Isolation
- Mobility
- Cardio

## Program Builder

ปุ่ม Add Exercise จะโหลดข้อมูลจาก Exercise Library กลาง  
ท่าที่เพิ่มใหม่จึงสามารถนำไปใช้ใน Program Builder ได้

## Install

1. แตก ZIP
2. อัปโหลดไฟล์ทั้งหมดทับ Repository เดิม
3. Commit
4. รอ Vercel Deploy
5. Hard Refresh หรือเปิด Incognito หากยังเห็นไฟล์เก่า

## Trainer PIN

```text
0409
```

## Firebase Paths

```text
clob/
  exercises/
    {exerciseId}/
  exercisePreferences/
    {anonymousUid}/
      favorites/
      recent/
```

## Pack 08

Progress & Analytics

- Weight
- Body Fat
- Measurements
- Photos
- PR
- Charts
