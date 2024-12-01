import { v2 as cloudinary } from "cloudinary"
import workshopsModel from "../models/workshopsModel.js"

// API to add a workshop
const addWorkshops = async (req, res) => {
    try {
        const { name, category, about, description, price, date, slot_booked } = req.body

        // ตรวจสอบว่าไฟล์ได้รับการอัปโหลดมาหรือไม่
        if (!req.files) {
            return res.status(400).json({ message: 'No files were uploaded.' });
        }

        const workshopImg = req.files.workshopImg?.[0]    // รูปภาพปก
        const images = req.files.images || []             // รูปภาพอื่น ๆ
        const video = req.files.video ? req.files.video[0] : null  // วิดีโอ

        // ตรวจสอบข้อมูลที่จำเป็น
        if (!name || !category || !about || !description || !price) {
            return res.json({ message: "Missing required fields" })
        }

        // ตรวจสอบไฟล์ที่จำเป็น
        if (!workshopImg) {
            return res.json({ message: "Cover image is required" })
        }
        if (images.length === 0) {
            return res.json({ message: 'At least one image is required' })
        }
        if (!video) {
            return res.json({ message: 'Video is required' })
        }
        if (video.size > 100 * 1024 * 1024) {  // ตรวจสอบขนาดวิดีโอไม่เกิน 100MB
            throw new Error("Video file exceeds the size limit (100MB)");
        }

        // อัปโหลดรูปภาพปก
        const coverImageUpload = await cloudinary.uploader.upload(workshopImg.path, {resource_type: "image"})
        const coverImageUrl = coverImageUpload.secure_url

        // อัปโหลดรูปภาพอื่น ๆ
        const otherImageUpload = await Promise.all(
            images.map(async (image) => {
                const uploadResult = await cloudinary.uploader.upload(image.path, { resource_type: "image" });
                return uploadResult.secure_url; // เก็บ URL ของแต่ละรูป
            })
        );
        const otherImageUrls = otherImageUpload; // เก็บ URL ทุกไฟล์ในอาร์เรย์

        // อัปโหลดวิดีโอ
        const videoUpload = await cloudinary.uploader.upload(video.path, { resource_type: "video" })
        const videoUrl = videoUpload.secure_url

        // สร้างข้อมูล workshop ใหม่
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

        res.json({ success: true, message: "Workshop Added", data: WorkshopsData })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { addWorkshops }
