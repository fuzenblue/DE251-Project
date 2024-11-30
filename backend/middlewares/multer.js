import multer from 'multer'

const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, file.originalname)
    }
})


// ชั่วโมงที่ 5.24
const upload = multer({ storage: storage })

export default upload