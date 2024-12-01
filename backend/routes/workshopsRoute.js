import express from 'express'
import upload from '../middlewares/multer.js'
import { addWorkshops } from '../controller/workshopsController.js'


const workshopsRouter = express.Router()

workshopsRouter.post('/add',
    upload.fields([
        { name: 'workshopImg', maxCount: 1 }, // รองรับปก
        { name: 'images', maxCount: 10 },     // รองรับหลายรูปภาพ
        { name: 'video', maxCount: 1 },      // รองรับวิดีโอ
    ]),  addWorkshops )

export default workshopsRouter