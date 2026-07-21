# Changelog

## 2.4.0 — Customer Foundation Beta
- เพิ่ม Customer Management KPI
- เพิ่มข้อมูลลูกเทรน: phone, goal, coachNote, sessionsTotal, sessionsRemaining
- เพิ่มการค้นหาจากข้อมูลโปรไฟล์
- เพิ่มฐาน modular architecture รุ่นแรก
- เพิ่ม `meta.schemaVersion = 2.4`
- รักษาความเข้ากันได้กับ Firebase data เดิม
- ไม่มี AI Program Assistant และไม่มีระบบสร้างโปรแกรมอัตโนมัติ

## Web Upload Ready Package
- ย้าย `config.js` และ `customers.js` มาไว้ที่โฟลเดอร์หลัก
- ปรับ import paths ให้ทำงานโดยไม่ต้องมีโฟลเดอร์ `src`
- เพิ่มคู่มือ `UPLOAD-GUIDE.md`
