# CLOB Alpha 0.2 — Pack 02

Pack 02 เพิ่ม Member Dashboard แบบใช้งานได้ต่อจาก Pack 01

## ฟีเจอร์ใหม่

- Member Home แบบ Mobile-first
- Good Morning / Afternoon / Evening
- Today's Workout
- Coach Message
- Start Workout button
- Weekly Progress
- น้ำหนักล่าสุดและแนวโน้ม
- Package days / sessions left
- Next Session
- Bottom Navigation
- โหลดข้อมูลจาก Firebase Realtime Database เมื่อมีข้อมูล
- ใช้ข้อมูล Demo อัตโนมัติเมื่อยังไม่มีข้อมูลใน Firebase

## วิธีอัปโหลด

1. แตกไฟล์ ZIP
2. เลือกไฟล์และโฟลเดอร์ทั้งหมดภายใน `clob-pack02`
3. อัปโหลดทับไฟล์ทั้งหมดใน GitHub Repository `clob`
4. Commit changes
5. รอ Vercel Deploy

## รหัสทดสอบ

### Member Dashboard แบบมีข้อมูลครบ
`12345`

### Member รหัสอื่น
กรอกตัวเลข 5 หลักใดก็ได้ ระบบจะแสดงค่าเริ่มต้น

### Trainer
PIN `0409`

## Firebase Data Path ที่รองรับ

```text
clob/
  members/
    12345/
      name
      greetingName
      coachName
      coachMessage
      workout/
      week/
      weight/
      package/
      nextSession/
```

ตัวอย่างข้อมูลอยู่ที่:

`data/member-demo.json`

## หมายเหตุสำคัญ

ปุ่ม Start Workout ใน Pack 02 จะบันทึกเวลาเริ่มลง Local Storage และพยายามเขียน Activity ไป Firebase

หน้าบันทึก Weight / Reps / RPE รายเซตจะเพิ่มใน Pack 03
