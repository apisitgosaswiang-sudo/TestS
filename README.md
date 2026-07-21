# CLOB Pack10 — Beta Trial Data-Safe Release

Pack10 เป็น release สำหรับหยุดเพิ่มฟีเจอร์และเปิดรับผู้ทดลองจริง

## สิ่งที่เพิ่ม

### Member Experience
- Today Dashboard ใหม่
- Today's Workout
- Today's Tasks
- Daily Habits: Water, Steps, Sleep, Cardio
- Habit score
- Member Profile
- Private Beta notice

### Data Safety
- Versioned Firebase path: `clob/v1/memberExperience`
- ไม่มี migration หรือการลบข้อมูลเดิม
- Member Backup ไปที่ `clob/systemBackups`
- Export ข้อมูลสมาชิกเป็น JSON
- Audit Log
- Beta Control สำหรับ Trainer
- Data Safety Contract
- Beta Test Checklist

## วิธีติดตั้ง

1. สำรองโปรเจกต์ Pack09-2 เดิม
2. แตก ZIP นี้และอัปโหลดทับ Pack09-2
3. อัปเดต Firebase Database Rules จาก `firebase/database.rules.json`
4. Deploy เป็น Vercel Preview ก่อน
5. ทดสอบตาม `docs/BETA-TEST-CHECKLIST.md`
6. เข้า Trainer Settings > Beta Control
7. สร้าง Backup สมาชิก
8. Promote ไป Production

## ข้อสำคัญ

Pack09-3A, 3B และ 3C ที่ได้รับก่อนหน้านี้เป็นเอกสารสเปก ไม่ได้ถูกรวมเป็นโค้ด production ใน Pack10 นี้
Pack10 สร้างต่อจาก Pack09-2 ซึ่งเป็นชุดโค้ดล่าสุดที่ใช้งานจริง เพื่อไม่ให้เกิดความเสี่ยงต่อข้อมูลหลัก

หลัง Deploy Pack10 ให้ใช้ Feature Freeze:
- แก้เฉพาะ Bug
- Security
- Data Integrity
- UX เล็กน้อยที่ไม่เปลี่ยน schema
