import express from "express"
import { adminDashboard, loginAdmin } from "../controller/adminController.js"
import authAdmin from "../middlewares/authAdmin.js"


const adminRouter = express.Router()

adminRouter.post('/login', loginAdmin)
adminRouter.get('/dashboard', authAdmin, adminDashboard)


export default adminRouter

