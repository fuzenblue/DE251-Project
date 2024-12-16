/DE251-PROJECT
├── /backend                       # โฟลเดอร์ Backend
│   ├── /config
│   │   ├── cloudinary.js          # การตั้งค่า Cloudinary
│   │   ├── mongodb.js             # การตั้งค่า MongoDB
│   ├── /controller
│   │   ├── adminController.js     # ควบคุมการทำงานฝั่ง Admin
│   │   ├── userController.js      # ควบคุมการทำงานฝั่ง User
│   │   ├── workshopsController.js # ควบคุม Workshop
│   ├── /middlewares
│   │   ├── authAdmin.js           # Middleware ตรวจสอบสิทธิ์ Admin
│   │   ├── authUser.js            # Middleware ตรวจสอบสิทธิ์ User
│   │   ├── multer.js              # สำหรับการอัปโหลดไฟล์
│   ├── /models
│   │   ├── bookedModel.js         # Schema การจอง Workshop
│   │   ├── userModel.js           # Schema ผู้ใช้งาน
│   │   ├── workshopsModel.js      # Schema Workshop
│   ├── /routes
│   │   ├── adminRoute.js          # เส้นทาง API ฝั่ง Admin
│   │   ├── userRoute.js           # เส้นทาง API ฝั่ง User
│   │   ├── workshopsRoute.js      # เส้นทาง API Workshop
│   ├── .env                       # ตัวแปร Environment
│   ├── package.json               # รายการ Dependencies
│   ├── package-lock.json          # Lock dependencies
│   ├── server.js                  # ไฟล์หลัก Backend
│   ├── README.md                  # คำอธิบายเกี่ยวกับ Backend
│
├── /admin                         # โฟลเดอร์ Admin
│   ├── /node_modules              # ไฟล์ของ npm modules
│   ├── /public
│   │   ├── logo.png               # โลโก้
│   ├── /src
│   │   ├── /assets                # ไฟล์ภาพ
│   │   ├── /components            # UI Components
│   │   │   ├── Navbar.jsx         # คอมโพเนนต์ Navigation Bar
│   │   │   ├── Sidebar.jsx        # คอมโพเนนต์ Sidebar
│   │   ├── /context
│   │   │   ├── AdminContext.jsx         # จัดการ Context ของ Admin
│   │   │   ├── AppContextProvider.jsx   # ตัวจัดการ Context หลัก
│   │   │   ├── WorkshopContext.jsx      # Context สำหรับ Workshop
│   │   ├── /pages
│   │   │   ├── /WorkshopManagement
│   │   │   │   ├── AdminLogin.jsx       # หน้าเข้าสู่ระบบ Admin
│   │   │   │   ├── Dashboard.jsx        # หน้า Dashboard
│   │   ├── App.jsx                      # ไฟล์หลักของแอป
│   │   ├── index.css                    # ไฟล์ CSS หลัก
│   │   ├── main.jsx                     # Entry point
│   ├── .env                             # ตัวแปร Environment
│   ├── package.json                     # รายการ Dependencies
│   ├── package-lock.json                # Lock dependencies
│   ├── README.md                        # คำแนะนำโปรเจ็กต์
│
├── /frontend                      # โฟลเดอร์ Frontend
│   ├── /node_modules              # ไฟล์ของ npm modules
│   ├── /public
│   │   ├── logo.png               # โลโก้
│   ├── /src
│   │   ├── /assets                # ไฟล์ภาพ
│   │   ├── /components            # UI Components
│   │   ├── /context
│   │   │   ├── AppContext.jsx     # ตัวจัดการ Context หลัก
│   │   ├── /pages
│   │   │   ├── AboutUs.jsx        # หน้าเกี่ยวกับเรา
│   │   │   ├── AllService.jsx     # หน้ารายการบริการ
│   │   │   ├── Blogs.jsx          # หน้าบล็อก
│   │   │   ├── Contact.jsx        # หน้าติดต่อเรา
│   │   │   ├── Home.jsx           # หน้าแรก
│   │   │   ├── Login.jsx          # หน้าเข้าสู่ระบบ
│   │   │   ├── MyBooking.jsx      # หน้าการจองของฉัน
│   │   │   ├── MyProfile.jsx      # หน้าข้อมูลโปรไฟล์
│   │   │   ├── WorkshopInfo.jsx   # หน้าข้อมูล Workshop
│   │   ├── App.jsx                # ไฟล์หลักของแอป
│   │   ├── index.css              # ไฟล์ CSS หลัก
│   │   ├── main.jsx               # Entry point
│   ├── .env                       # ตัวแปร Environment
│   ├── package.json               # รายการ Dependencies
│   ├── package-lock.json          # Lock dependencies
│   ├── README.md                  # คำแนะนำโปรเจ็กต์
│
├── README.md                      # คำแนะนำโปรเจ็กต์หลัก


การติดตั้งโปรเจกต์
ติดตั้ง Dependencies สำหรับทั้ง Frontend และ Backend

ติดตั้ง dependencies สำหรับ Frontend:
ไปที่โฟลเดอร์ frontend แล้วรันคำสั่ง:

npm install
ติดตั้ง dependencies สำหรับ Admin Panel:
ไปที่โฟลเดอร์ admin แล้วรันคำสั่ง:

npm install
ตั้งค่าฐานข้อมูลและ Environment Variables
สร้างไฟล์ .env ใน root directory และเพิ่มค่า:

backend

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_URL=your_cloudinary_connection_string
VITE_BACKEND_URL = your_backend_port

MONGODB_URI = your_mongodb_connection_string
FRONTEND_URL = your_frontend_port
 
CLOUDINARY_NAME = your_cloudinary_name_connection_string
CLOUDINARY_API_KEY = your_cloudinary_connection_string
CLOUDINARY_SECRET_KEY = your_cloudinary_secret_key_connection_string
 
ADMIN_EMAIL = 'admin@pineapple.slice.com'
ADMIN_PASSWORD = 'pineapple_slice_admin'
 
JWT_SECRET = your_jwt_secret
frontend

VITE_BACKEND_URL = your_backend_port
admin

VITE_BACKEND_URL = your_backend_port
รันโปรเจกต์

รัน Frontend:
ไปที่โฟลเดอร์ frontend แล้วรันคำสั่ง:

npm run dev
รัน Backend:
ไปที่โฟลเดอร์ backend แล้วรันคำสั่ง:

npm run server
รัน Admin Panel:
ไปที่โฟลเดอร์ admin แล้วรันคำสั่ง:

npm run dev
หยุดการทำงานของโปรเจกต์
หากต้องการหยุดโปรเจกต์, ให้กด Ctrl + C ใน terminal ที่กำลังรันโปรเจกต์

ตรวจสอบการทำงาน เปิดเบราว์เซอร์แล้วตรวจสอบการทำงานของโปรเจกต์โดยไปที่:

Frontend: http://localhost:5173
Backend: http://localhost:4000
Admin Panel: http://localhost:5174
รหัสผ่านเข้าแอดมิน
Admin Email: admin@pineapple.slice.com
Admin Password: pineapple_slice_admin
website deploy
Frontend: https://pineapple-slice-frontend.onrender.com
Backend: http://localhost:4000](https://pineapple-slice-backend.onrender.com
Admin Panel: http://localhost:5174](https://pineapple-slice-admin.onrender.com
หมายเหตุ: ก่อนเริ่มต้น, ควรติดตั้ง Node.js และ Git ก่อน

Enjoy building the Pineapple Farm Platform! 🍍
