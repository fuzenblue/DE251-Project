import express from "express";
import { addWorkshops } from "../controller/adminController.js";
import upload from "../middlewares/multer.js";

const adminRouter = express.Router();

// ใช้ upload.fields() แทน upload.single()
adminRouter.post('/workshop-add', upload.fields([
    { name: 'cover_image', maxCount: 1 },    // กำหนดฟิลด์ cover_image สำหรับ 1 ไฟล์
    { name: 'images', maxCount: 5 },         // กำหนดฟิลด์ images สำหรับสูงสุด 5 ไฟล์
    { name: 'video', maxCount: 1 }           // กำหนดฟิลด์ video สำหรับ 1 ไฟล์
]), addWorkshops);

export default adminRouter;
