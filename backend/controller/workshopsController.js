import { v2 as cloudinary } from "cloudinary"
import workshopsModel from "../models/workshopsModel.js"

// API to add a workshop
const addWorkshops = async (req, res) => {
    try {
        const { name, category, about, description, price, date, slot_booked } = req.body

        if (!req.files || !req.files.cover_image || !req.files.images || !req.files.video) {
            return res.status(400).json({ message: 'Missing required files' })
        }

        const cover_image = req.files.cover_image[0].path 
        const images = req.files.images.map(file => file.path) 
        const video = req.files.video[0].path

        // Check for required fields
        if (!name || !category || !about || !description || !price || !slot_booked) {
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

        res.json({ success:true, message: 'Workshop Added' })

    } catch (error) {
        console.log(error)
        res.json({ success:false, message: error.message })
    }
}

export { addWorkshops }