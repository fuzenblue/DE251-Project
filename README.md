# Pineapple Farm Platform

A platform that combines agricultural tourism with digital convenience, offering workshops, sustainable farming insights, and pineapple-inspired experiences.

---

## การติดตั้งโปรเจกต์  

**ติดตั้ง Dependencies สำหรับทั้ง Frontend และ Backend**

   ### ติดตั้ง dependencies สำหรับ **Frontend**:
   ไปที่โฟลเดอร์ `frontend` แล้วรันคำสั่ง:
   ```bash
   npm install
   ```

   ### ติดตั้ง dependencies สำหรับ **Admin Panel**:
   ไปที่โฟลเดอร์ `admin` แล้วรันคำสั่ง:
   ```bash
   npm install
   ```

## ตั้งค่าฐานข้อมูลและ Environment Variables 
   
   - สร้างไฟล์ `.env` ใน root directory และเพิ่มค่า:

     **backend**
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     FRONTEND_URL = your_frontend_port
      
     CLOUDINARY_NAME = your_cloudinary_name_connection_string
     CLOUDINARY_API_KEY = your_cloudinary_connection_string
     CLOUDINARY_SECRET_KEY = your_cloudinary_secret_key_connection_string
      
     ADMIN_EMAIL = 'admin@pineapple.slice.com'
     ADMIN_PASSWORD = 'pineapple_slice_admin'

     ```

     **frontend**
     ```env
     VITE_BACKEND_URL = your_backend_port
     ```

     **admin**
     ```env
     VITE_BACKEND_URL = your_backend_port
     ```

---
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

## website deploy
   - **Frontend**: https://pineapple-slice-frontend.onrender.com
   - **Backend**: https://pineapple-slice-backend.onrender.com
   - **Admin Panel**: https://pineapple-slice-admin.onrender.com

---

**หมายเหตุ**: ก่อนเริ่มต้น, ควรติดตั้ง **Node.js** และ **Git** ก่อน

Enjoy building the Pineapple Farm Platform! 🍍

---
Slide: https://www.canva.com/design/DAGY0fHM7N0/sLhFH6iJ15X28xC67hycbg/edit
