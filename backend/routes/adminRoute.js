import express from "express"
import { addWorkshops, loginAdmin } from "../controller/adminController.js"
import upload from "../middlewares/multer.js"
import authAdmin from "../middlewares/authAdmin.js"

const adminRouter = express.Router()

// ใช้ upload.fields() แทน upload.single()
adminRouter.post('/workshop-add', authAdmin,upload.fields([
    { name: 'cover_image', maxCount: 1 }, { name: 'images', maxCount: 5 }, { name: 'video', maxCount: 1 }
]), addWorkshops)

adminRouter.post('/login', loginAdmin)


export default adminRouter
