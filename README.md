# CLOB Alpha 0.8 — Pack 08 Part 1

ระบบรูป Progress ที่เชื่อม Firebase Storage จริง

## Features

- Member Profile Photo
- Front / Side / Back Progress Photos
- เลือกรูปก่อนอัปโหลด
- Crop 4:5
- ลากรูปเพื่อจัดตำแหน่ง
- Zoom
- แปลงเป็น WebP
- Resize เป็น 1080 × 1350 px
- Quality 80%
- Pending preview
- ยืนยันรูปทั้งหมดก่อน Upload
- Upload progress
- Retry เมื่ออัปโหลดไม่สำเร็จ
- เก็บ URL และ Storage path ใน Realtime Database

## วิธีเข้าใช้งาน

1. Trainer Login
2. Members
3. เลือกสมาชิก
4. กดแท็บ `Photos`
5. เลือก Front / Side / Back
6. Crop แล้วกด `Use Photo`
7. ตรวจรูป
8. กด `Save Photos`
9. ยืนยัน `Upload`

รูปจะยังไม่อัปโหลดทันทีหลังเลือก เพื่อป้องกันการเลือกรูปผิด

## Firebase Storage Path

```text
members/
  {memberCode}/
    profile/
      profile_{timestamp}.webp
    checkins/
      {checkinId}/
        front_{timestamp}.webp
        side_{timestamp}.webp
        back_{timestamp}.webp
```

## Realtime Database Path

```text
clob/
  members/
    {memberCode}/
      profilePhoto
      profilePhotoPath

  progress/
    {memberCode}/
      checkins/
        {checkinId}/
          photos/
```

## Storage Rules

ไฟล์อ้างอิงอยู่ที่:

```text
firebase/storage.rules
```

Rules ต้อง Publish ใน Firebase Console ก่อนทดสอบ

## Install

แตก ZIP แล้วอัปโหลดไฟล์ทั้งหมดทับ Pack07 จากนั้น Commit และรอ Vercel Deploy

หากยังเห็นเวอร์ชันเก่า ให้ Hard Refresh หรือเปิด Incognito
