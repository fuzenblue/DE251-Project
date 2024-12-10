# Pineapple Farm Platform

A platform that combines agricultural tourism with digital convenience, offering workshops, sustainable farming insights, and pineapple-inspired experiences.

---

## การติดตั้งโปรเจกต์  

### Frontend  
```bash
# Create a new project with Vite
npm create vite@latest

# Install required packages
npm install axios react-router-dom react-toastify
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i -D daisyui@latest
```

### Backend  
```bash
# Initialize a Node.js project
npm init

# Install required packages
npm install express mongoose jsonwebtoken bcrypt cors dotenv multer validator nodemon cloudinary
```

### Admin Panel  
```bash
# Create a new project with Vite
npm create vite@latest

# Install required packages
npm install axios react-router-dom react-toastify
npm i -D daisyui@latest
```

---

## ตั้งค่าการเชื่อมต่อฐานข้อมูล  
Make sure to set up your database connection and environment variables in a `.env` file. Example:  
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_URL=your_cloudinary_connection_string
```

---

## รันโปรเจกต์  

### Commands  
- **Frontend**:  
  ```bash
  npm run dev
  ```  

- **Backend**:  
  ```bash
  npm run server
  ```  

- **Admin Panel**:  
  ```bash
  npm run dev
  ```  

## รหัสผ่านเข้าแอดมิน  
- **Admin Email**: `admin@pineapple.slice.com`  
- **Admin Password**: `pineapple_slice_admin`  

Enjoy building the Pineapple Farm Platform! 🍍
