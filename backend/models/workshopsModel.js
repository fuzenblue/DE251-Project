import mongoose from "mongoose";

// กำหนด schema สำหรับ workshops
const workshopsSchema = new mongoose.Schema({
    name: { type: String, required: true },    // ใช้ 'required' แทน 'require'
    cover_image: { type: String, required: true },
    images: { type: [String], required: true }, // แก้ไขให้ images เป็น Array ของ String
    video: { type: String, required: true },
    category: { type: String, required: true },
    about: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },

    // ใช้ Object สำหรับการจัดเก็บข้อมูลของ slot_booked
    slot_booked: { type: Object, default: {} },
}, { minimize: false });

// ถ้ามี workshopsModel อยู่แล้วใน Mongoose ใช้ตัวนั้นเลย, ถ้าไม่มีก็สร้างใหม่
const workshopsModel = mongoose.models.workshops || mongoose.model("workshops", workshopsSchema);

export default workshopsModel;