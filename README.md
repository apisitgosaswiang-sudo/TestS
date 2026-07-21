# Workout Tracker V2.4.0 — Customer Foundation Beta

เวอร์ชันทดสอบแรกของระบบบริหารลูกเทรนสำหรับ Personal Trainer โดยระบบช่วยจัดการข้อมูล แต่ไม่สร้างหรือเลือกโปรแกรมแทนเทรนเนอร์

## ฟีเจอร์หลัก

- Customer Management
- ค้นหาลูกเทรนด้วยชื่อ รหัส เบอร์โทร หรือเป้าหมาย
- จำนวนครั้งทั้งหมดและจำนวนครั้งคงเหลือ
- เป้าหมายและ Coach Note
- สถานะแพ็กเกจและวันคงเหลือ
- รองรับข้อมูลเดิมจาก V2.3.x
- Database schema version 2.4
- Firebase Anonymous Authentication และ Realtime Database

## โครงสร้างไฟล์

- `index.html` — หน้าเว็บหลัก
- `style.css` — รูปแบบหน้าจอ
- `app.js` — การทำงานหลักของแอป
- `firebase.js` — การเชื่อมต่อ Firebase
- `config.js` — เวอร์ชันและค่าคงที่ของระบบ
- `customers.js` — โมดูลข้อมูลลูกเทรน
- `UPLOAD-GUIDE.md` — วิธีอัปโหลดผ่าน GitHub Web

แพ็กเกจนี้ไม่มีโฟลเดอร์ย่อย เพื่อให้อัปโหลดผ่านหน้าเว็บ GitHub ได้โดยตรง.
