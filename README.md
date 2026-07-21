# CLOB Alpha 0.9 — Pack 09 Part 2

Weekly Check-in + Coach Review สำหรับระบบ Online Coaching

## Features

### Weekly Check-in
- Week Start
- Weight
- Body Fat
- Sleep
- Stress
- Energy
- Hunger
- Workout Adherence
- Nutrition Adherence
- Average Steps
- Cardio Minutes
- Wins This Week
- Challenges
- Question for Coach

### Coach Review
- Coach Feedback
- Goal for Next Week
- Calories
- Protein
- Carbs
- Fat
- Training Adjustment
- Mark as Reviewed
- Review Status
- Review preview ใน Timeline

### Dashboard / Member Integration
- เพิ่มแท็บ `Weekly` ใน Member Detail
- Waiting Review card เปิดหน้า Weekly Check-in
- Weekly Summary
- Submitted / Reviewed / Average Score

## Realtime Database Path

```text
clob/
  onlineCoaching/
    {memberCode}/
      weeklyCheckins/
        {checkinId}/
      reviews/
        {checkinId}/
```

## Install

1. แตก ZIP
2. อัปโหลดไฟล์ทั้งหมดทับ Pack09 Part 1
3. Commit ไป GitHub
4. รอ Vercel Deploy
5. เข้า Members
6. เลือกสมาชิก
7. กดแท็บ `Weekly`

## Pack09 Roadmap

- Part 1: Dashboard + Dynamic Avatar + Notifications
- Part 2: Weekly Check-in + Coach Review
- Part 3: Coaching Plan + Adherence + Dashboard data
