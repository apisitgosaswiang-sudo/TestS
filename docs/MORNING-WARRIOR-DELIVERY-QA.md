# Morning Warrior v2 — Delivery QA

วันที่ตรวจ: 23 กรกฎาคม 2026  
ฐานเปรียบเทียบ: CLOB v2 Patch-011F1  
ชุดส่งมอบ: Nutrition + AI Food Estimation Beta

## ผลอัตโนมัติ

- ผ่าน Brand architecture: Morning Warrior เป็นชื่อแอป, CLOB เป็น Master Brand
- ผ่าน Nutrition data: target, local fallback, pending sync, edit same record และ soft delete
- ผ่าน Nutrition + AI UI: เมนู 5 แท็บ, manual logging, trainer review และไม่มี AI call อัตโนมัติ
- ผ่าน AI quota: 3 ครั้งต่อสมาชิก, 60 ครั้งต่อระบบ, cache ไม่หักซ้ำ และคืนโควตาเมื่อวิเคราะห์ล้มเหลว
- ผ่าน Dynamic Home states: normal, near, critical, over และ Next Best Action
- ผ่าน Patch-011F1/011F2 navigation, route, safe-area และ Service Worker regression
- ผ่าน D-001 Design System regression
- ผ่าน Full smoke test สำหรับ Programs, Packages, member add/edit, route 17 หน้า,
  Progress Check-in, Weekly Check-in และ Offline Programs fallback

## สิ่งที่ยังต้องตรวจหลัง Publish

- การเชื่อม Firebase production จริง
- Firebase AI Logic และ App Check บนโดเมนจริง
- การวิเคราะห์รูปอาหารจริงด้วย `gemini-2.5-flash-lite`
- การติดตั้ง/อัปเดต PWA บนอุปกรณ์จริง
- Layout และ safe area บนโทรศัพท์จริงที่ใช้งาน

รายการใน `NUTRITION-AI-QA.md` เป็น Post-deployment acceptance checklist
จึงยังไม่ถือว่าผ่านจนกว่าจะตรวจบนระบบที่ Publish แล้ว
