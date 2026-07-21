# วิธีอัปโหลดขึ้น GitHub ผ่านหน้าเว็บ

แพ็กเกจนี้จัดทุกไฟล์ไว้ที่โฟลเดอร์หลักแล้ว จึงไม่ต้องอัปโหลดโฟลเดอร์ `src`.

1. แตกไฟล์ ZIP
2. เปิด Repository `TestS`
3. เลือก **Add file → Upload files**
4. เลือกไฟล์ทั้งหมดในโฟลเดอร์นี้ หรือกด `Ctrl + A` แล้วลากลงหน้า GitHub
5. ตรวจสอบว่ามีไฟล์ต่อไปนี้ครบ
   - `index.html`
   - `style.css`
   - `app.js`
   - `firebase.js`
   - `config.js`
   - `customers.js`
   - `README.md`
   - `CHANGELOG.md`
6. ใส่ข้อความ Commit เช่น `Release V2.4.0 customer foundation`
7. กด **Commit changes**
8. รอ Vercel Deploy แล้วรีเฟรชเว็บไซต์

## หมายเหตุ

โครงสร้างยังแยกโค้ดเป็นโมดูล แต่เก็บไฟล์โมดูลไว้ที่ระดับหลักเพื่อให้ใช้งานกับ GitHub Web Upload ได้ง่าย.
