# วิธีอัปโหลด CLOB Recovery Build v1.0

## วิธีที่ปลอดภัยที่สุด
ใช้ GitHub Desktop หรือ VS Code:

1. ดาวน์โหลดและแตก ZIP นี้
2. สำรอง Repository เดิม
3. ลบไฟล์ของเว็บเดิมในโฟลเดอร์โปรเจกต์บนเครื่อง
4. คัดลอกไฟล์และโฟลเดอร์จาก Recovery Build ทั้งหมดลงไป
5. Commit: `Deploy CLOB Recovery Build v1.0`
6. Push
7. รอ Vercel Deploy สำเร็จ

วิธีนี้ทำให้ไฟล์เก่าที่อยู่ผิดตำแหน่งถูกลบออกด้วย

## ถ้าอัปโหลดผ่าน GitHub Web
GitHub Web จะเพิ่ม/ทับไฟล์ แต่จะไม่ลบไฟล์เก่าให้อัตโนมัติ

หลังอัปโหลด ให้หน้า Root เหลือ:

- assets/
- css/
- data/
- docs/
- firebase/
- js/
- README.md
- RECOVERY-BUILD.txt
- index.html
- manifest.json
- sw.js
- vercel.json

ไฟล์ JavaScript ห้ามอยู่ Root เช่น `members.js`, `firebase.js`, `workout.js`
ไฟล์ CSS ห้ามอยู่ Root เช่น `style.css`, `app.css`

## หลัง Deploy
1. เปิด URL พร้อม query ใหม่ เช่น `/?recovery=1`
2. บน iPhone ให้ปิดแท็บเก่าและเปิดใหม่
3. หากยังเห็นหน้าเก่า ให้ล้าง Website Data ของโดเมน หรือเปิดใน Private Tab
4. ตรวจว่า URL `/js/app.js` แสดง JavaScript ได้
5. ตรวจว่า URL `/index.html` เริ่มด้วย `<!doctype html>`

## ข้อมูล Firebase
Recovery Build ไม่ลบ ย้าย หรือเปลี่ยนชื่อข้อมูล Firebase เดิม
