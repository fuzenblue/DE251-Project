import workshopsModel from "../models/WorkshopsModel.js"

// API to add a workshop
const addWorkshops = async (req, res) => {
    try {
        const { name, category, about, description, price, date, slot_booked } = req.body;

        // ตรวจสอบว่า `cover_image` มีไฟล์ไหมและดึง path ของไฟล์
        const cover_image = req.files.cover_image ? req.files.cover_image[0].path : null;

        // ตรวจสอบว่า `images` มีไฟล์ไหม และถ้ามีให้ใช้ `map` เพื่อดึง path ของไฟล์
        const images = req.files.images ? req.files.images.map(file => file.path) : [];

        // ตรวจสอบว่า `video` มีไฟล์ไหมและดึง path ของไฟล์
        const video = req.files.video ? req.files.video[0].path : null;

        // สร้าง workshop ใหม่ในฐานข้อมูล
        const newWorkshop = new workshopsModel({
            name,
            cover_image,
            images,
            video,
            category,
            about,
            description,
            price,
            slot_booked
        });

        // บันทึกข้อมูล
        await newWorkshop.save();

        res.status(201).json({ message: 'Workshop added successfully', workshop: newWorkshop });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding workshop', error: error.message });
    }
}

export { addWorkshops }