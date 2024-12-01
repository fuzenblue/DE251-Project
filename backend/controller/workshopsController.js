import { v2 as cloudinary } from "cloudinary"
import workshopsModel from "../models/workshopsModel.js"


// API to add a workshop
const addWorkshops = async (req, res) => {
    try {
        const { name, category, about, description, price, date, slot_booked } = req.body

        if (!req.files) {
            return res.json({ message: 'No files were uploaded.' })
        }

        const workshopImg = req.files.workshopImg?.[0]
        const images = req.files.images || []
        const video = req.files.video ? req.files.video[0] : null

        // console.log("Workshop Image:", workshopImg)
        // console.log('Images:', images)
        // console.log("req.files.video:", req.files.video)
        // console.log('Video:', video)
        // console.log("Request Files:", req.files)

        // Check for required fields
        if ( !name || !category || !about || !description || !price ) {
            return res.json({ message: "Missing required fields" })
        }

        // Check if files are provided
        if (!workshopImg) {
            return res.json({ message: "Cover image is required" })
        }
        if (images.length === 0) {
            return res.json({ message: 'At least one image is required' })
        }
        if (!video) {
            return res.json({ message: 'Video is required' })
        }
        // if (video.size > 100 * 1024 * 1024) { // 100 MB
        //     throw new Error("Video file exceeds the size limit (100MB)")
        // }


        // upload Image to coludinary
        const coverImageUpload = await cloudinary.uploader.upload(workshopImg.path, {resource_type: "image"})
        const coverImageUrl = coverImageUpload.secure_url

        const otherImageUpload = await Promise.all(
            images.map(async (image) => {
                const uploadResult = await cloudinary.uploader.upload(image.path, { resource_type: "image" });
                return uploadResult.secure_url
            })
        )
        const otherImageUrls = otherImageUpload

        const videoUpload = await cloudinary.uploader.upload(video.path, { resource_type: "video" })
        const videoUrl = videoUpload.secure_url

        // Create a new workshop entry
        const WorkshopsData = {
            name,
            category,
            about,
            description,
            price,
            date: Date.now(),
            workshopImg: coverImageUrl,
            images: otherImageUrls,
            video: videoUrl,
        }

        const newWorkshops = new workshopsModel(WorkshopsData)
        await newWorkshops.save()

        res.json({ success: true, message: "Workshop Added" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { addWorkshops }
