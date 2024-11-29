import express from 'express'
import multer from 'multer'
import authAdmin from '../middlewares/authAdmin.js'
import { addWorkshops } from '../controller/workshopsController.js'


const workshopsRouter = express.Router()


// ตั้งค่า multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // โฟลเดอร์ที่เก็บไฟล์
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
    }
})

const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024 // จำกัดขนาดไฟล์ 10 MB
    }
})

// ใช้ upload.fields() แทน upload.single()
workshopsRouter.post('/add', authAdmin, upload.fields([
    { name: 'cover_image', maxCount: 1 },
    { name: 'images', maxCount: 10 },
    { name: 'video', maxCount: 1 }
]), addWorkshops)


export default workshopsRouter