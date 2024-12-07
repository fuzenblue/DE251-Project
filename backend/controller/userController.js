import userModel from '../models/userModel.js'
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import {v2 as cloudinary} from 'cloudinary'
import workshopsModel from '../models/workshopsModel.js'
import bookedModel from '../models/BookedModdel.js'

// register user
const registerUser = async (req, res) => {

    try {

        const { name, email, password } = req.body

        if (!name || !password || !email) {
            return res.json({ success: false, message: "Missing Details" })
        }

        // validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Enter a valid email" })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Enter a strong password" })
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt);

        const userData = {
            name,
            email,
            password: hashPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// login user
const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "User Doesn't exist" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.json({ success: true, token })

        } else {
            return res.json({ success: false, message: "Invalid credentials" })
        }

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get user profile
const getProfile = async (req, res) => {

    try {
        const userId = req.body.userId
        // console.log(userId)

        const userData = await userModel.findById(userId).select('-password')
        return res.json({ success: true, userData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const updateProfile = async (req, res) => {
    try {

        const { userId, name, first_name, last_name, phone, dob, gender, address } = req.body
        const imageFile = req.file

        if (!name || !phone || !dob || !gender) {
            return res.json({ success: false, message: "Data Missing" })
        }

        await userModel.findByIdAndUpdate(userId, { name, first_name, last_name, phone, address: JSON.parse(address), dob, gender })

        if (imageFile) {
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
            const imageURL = imageUpload.secure_url

            await userModel.findByIdAndUpdate(userId, {image: imageURL})
        }

        res.json({success:true, message:"Profile Updated"})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to book Workshop
const bookedWorkshop = async(req, res) => {
    try {

        const { userId, workshopId, slotDate, slotTime } = req.body

        const workshopData = await workshopsModel.findById(workshopId)
        if (!workshopData.available) {
            return res.json({success:false, message:'Workshop not available'})
        }

        let slots_booked = workshopData.slots_booked

        // Check for slot availability
        if (slots_booked[slotDate]) {
            if (slots_booked[slotDate].includes(slotTime)) {
                return res.json({success:false, message:'Workshop not available'})
            } else {
                slots_booked[slotDate].push(slotTime)
            }
        } else {
            slots_booked[slotDate] = []
            slots_booked[slotDate].push(slotTime)
        }

        const userData = await userModel.findById(userId).select('-password')

        delete workshopData.slots_booked

        const bookedData = {
            userId,
            workshopId,
            userData,
            workshopData,
            amount:workshopData.price,
            slotTime, slotDate,
            date: Date.now()
        }

        const newBooked = new bookedModel(bookedData)
        await newBooked.save()

        // save new slot data in workshopData
        await workshopsModel.findByIdAndUpdate(workshopId, {slots_booked})
        res.json({success: true, message:"Booked True"})
        
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


export { registerUser, loginUser, getProfile, updateProfile, bookedWorkshop }