# CLOB Alpha 0.9 — Pack 09 Part 1

Online Coaching Dashboard + Dynamic Trainer Avatar

## Features

### Dynamic Trainer Avatar
- ดึงอักษรตัวแรกจากชื่อ Coach อัตโนมัติ
- `Coach First` แสดง `F`
- รองรับภาษาอังกฤษและภาษาไทย
- ตัดคำว่า `Coach` ออกก่อนหาอักษร
- รองรับรูปโปรไฟล์ ถ้ามีรูปจะแสดงรูปก่อน
- เปลี่ยนชื่อใน Trainer Profile แล้ว Avatar เปลี่ยนตามทันที
- ใช้ utility กลาง `getAvatarInitial()`

### Online Coaching Dashboard
- Check-ins Due
- Waiting for Review
- Overdue
- Active Clients
- Needs Attention
- Notifications
- Mark all notifications as read
- กดรายการเพื่อเปิด Member Detail

### Trainer Profile
- เปลี่ยนชื่อ Coach
- ใส่ Profile Photo URL
- ใส่อีเมล
- Preview Avatar แบบ Dynamic

## วิธีใช้งาน

1. แตก ZIP
2. อัปโหลดไฟล์ทั้งหมดทับ Pack08 Part 3
3. Commit ไป GitHub
4. รอ Vercel Deploy
5. เปิด Trainer Dashboard
6. กด Avatar เพื่อแก้ชื่อ Coach

## Dynamic Avatar Examples

```text
Coach First -> F
Coach Alice -> A
สมชาย -> ส
```

## Pack09 Roadmap

- Part 1: Dashboard + Dynamic Avatar + Notifications
- Part 2: Weekly Check-in + Coach Review
- Part 3: Coaching Plan + Adherence + UI Polish
