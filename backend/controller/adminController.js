import { v2 as cloudinary } from "cloudinary"
import workshopsModel from "../models/workshopsModel.js"
import jwt from 'jsonwebtoken'


// API to add a workshop
const addWorkshops = async (req, res) => {
    try {
        const { name, category, about, description, price, date, slot_booked } = req.body;

        const cover_image = req.files.cover_image ? req.files.cover_image[0].path : null;
        const images = req.files.images ? req.files.images.map(file => file.path) : [];
        const video = req.files.video ? req.files.video[0].path : null;

        // Check for required fields
        if (!name || !category || !about || !description || !price || !date || !slot_booked) {
            return res.json({ message: 'Missing required fields' })
        }

        // Check if files are provided
        if (!cover_image) {
            return res.json({ message: 'Cover image is required' })
        }
        if (images.length === 0) {
            return res.json({ message: 'At least one image is required' })
        }
        if (!video) {
            return res.json({ message: 'Video is required' })
        }


        const coverImageUpload = await cloudinary.uploader.upload(cover_image, { resource_type: "image" });
        const coverImageUrl = coverImageUpload.secure_url;

        const imageUploadPromises = images.map(image =>
            cloudinary.uploader.upload(image, { resource_type: "image" })
        )

        const imageUploads = await Promise.all(imageUploadPromises);
        const imageUrls = imageUploads.map(upload => upload.secure_url);
        const videoUpload = await cloudinary.uploader.upload(video, { resource_type: "video" });
        const videoUrl = videoUpload.secure_url;



        // Create a new workshop entry
        const WorkshopsData = {
            name,
            category,
            about,
            description,
            price,
            date: Date.now(),
            cover_image: coverImageUrl,
            images: imageUrls,
            video: videoUrl
        }

        const newWorkshops = new workshopsModel(WorkshopsData)
        await newWorkshops.save()

        res.json({success:true, message: 'Workshop Added'})

    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message })
    }
}

// API for Admin Login
const loginAdmin = async (req, res) => {
    try {
        
        const { email, password } = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {

            const token = jwt.sign({email, password}, process.env.JWT_SECRET)
            res.json({success:true, token})
            
        } else {
            res.json({success:false, message: "Invalid credentials" })
        }

    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message })
    }
}

export { addWorkshops, loginAdmin }
