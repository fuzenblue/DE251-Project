# Pineapple Farm Platform

A platform that combines agricultural tourism with digital convenience, offering workshops, sustainable farming insights, and pineapple-inspired experiences.

---

## การติดตั้งโปรเจกต์  

**ติดตั้ง Dependencies สำหรับทั้ง Frontend และ Backend**

   ### ติดตั้ง dependencies สำหรับ **Frontend**:
   ไปที่โฟลเดอร์ `frontend` (หากมี) แล้วรันคำสั่ง:
   ```bash
   npm install
   ```

   ### ติดตั้ง dependencies สำหรับ **Admin Panel**:
   ไปที่โฟลเดอร์ `admin` (หากมี) แล้วรันคำสั่ง:
   ```bash
   npm install
   ```

**ตั้งค่าฐานข้อมูลและ Environment Variables**
   
   - สร้างไฟล์ `.env` ใน root directory (หรือในโฟลเดอร์ที่มี backend) และเพิ่มค่าต่าง ๆ ที่จำเป็น เช่น:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     CLOUDINARY_URL=your_cloudinary_connection_string
     ```

**ตั้งค่า Tailwind CSS** (ถ้ายังไม่ได้ตั้งค่า)

   - หากใช้ **Tailwind CSS** ใน frontend, ให้รันคำสั่งนี้:
     ```bash
     npx tailwindcss init -p
     ```

**รันโปรเจกต์**

   ### รัน **Frontend**:
   ไปที่โฟลเดอร์ frontend แล้วรันคำสั่ง:
   ```bash
   npm run dev
   ```

   ### รัน **Backend**:
   ไปที่โฟลเดอร์ backend แล้วรันคำสั่ง:
   ```bash
   npm run server
   ```

   ### รัน **Admin Panel**:
   ไปที่โฟลเดอร์ admin แล้วรันคำสั่ง:
   ```bash
   npm run dev
   ```

**หยุดการทำงานของโปรเจกต์**  
   หากต้องการหยุดโปรเจกต์, ให้กด `Ctrl + C` ใน terminal ที่กำลังรันโปรเจกต์

**ตรวจสอบการทำงาน**
   เปิดเบราว์เซอร์แล้วตรวจสอบการทำงานของโปรเจกต์โดยไปที่:
   - **Frontend**: `http://localhost:5173`
   - **Backend**: `http://localhost:4000`  
   - **Admin Panel**: `http://localhost:5174`

---

## รหัสผ่านเข้าแอดมิน  
- **Admin Email**: `admin@pineapple.slice.com`  
- **Admin Password**: `pineapple_slice_admin`

---

**หมายเหตุ**: ก่อนเริ่มต้น, ควรติดตั้ง **Node.js** และ **Git** ก่อน

Enjoy building the Pineapple Farm Platform! 🍍
