import express from "express"
import { bookedWorkshop, cancelBooking, getProfile, listBooking, loginUser, registerUser, updateProfile } from '../controller/userController.js'
import authUser from "../middlewares/authUser.js"
import upload from "../middlewares/multer.js"

const userRouter = express.Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)

userRouter.get("/get-profile", authUser, getProfile)
userRouter.post("/update-profile", upload.single('image'), authUser, updateProfile)

userRouter.post("/book-workshop", authUser, bookedWorkshop)
userRouter.get("/list-booking", authUser, listBooking)
userRouter.post("/cancel-booking", authUser, cancelBooking)

export default userRouter