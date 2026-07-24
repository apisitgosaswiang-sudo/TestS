# Morning Warrior v2 — Combined Hotfix 6

วันที่: 24 กรกฎาคม 2026

## แก้ไขในรอบนี้

1. Workout History ใช้งานจริงจากหน้า Member Detail พร้อม Empty State
2. Dynamic Home แสดงแคลอรีคงเหลือและโปรตีนที่เหลือชัดเจน
3. เพิ่มเมนูลบสมาชิก พร้อมยืนยันชื่อ และล้างข้อมูลที่ผูกกับสมาชิก
4. Member Detail เปลี่ยนเป็น Trainer Overview: Workout, เวลา, Nutrition, Weight และ Body Metrics
5. Weekly Check-in ส่งสำเร็จเฉพาะเมื่อ Firebase บันทึกสำเร็จ และขึ้น Waiting Review / Notification
6. เทรนเนอร์กำหนด เปลี่ยน และนำ Program ออกจากสมาชิกได้
7. เปิดหน้า Workout ไม่สร้าง Session อัตโนมัติ; Session 0 เซตยกเลิกได้
8. Check-in ทั้งสองโหมดใช้ memberCode + weekStart + check-in ID ชุดเดียวกันและป้องกันข้อมูลซ้ำ

## การป้องกัน Regression

- คงไฟล์และการตั้งค่า Nutrition AI จาก Full Hotfix 5
- ไม่เปลี่ยน Firebase project หรือโครง rules เดิม
- เพิ่ม service-worker cache version เป็น `combined-hotfix-6`

