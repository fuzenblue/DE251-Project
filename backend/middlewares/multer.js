import multer from 'multer'

// สร้าง storage สำหรับกำหนดชื่อไฟล์และตำแหน่งที่บันทึก
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        // ระบุโฟลเดอร์ที่ต้องการบันทึกไฟล์
        callback(null, path.join(__dirname, '../uploads')); 
    },
    filename: function (req, file, callback) {
        // กำหนดชื่อไฟล์ (ตัวอย่างใช้ชื่อเดิมของไฟล์)
        callback(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })

export default upload