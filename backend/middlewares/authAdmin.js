import jwt from 'jsonwebtoken'

// Admin authentication middleware
const authAdmin = async (req, res, next) => {
    try {
        // รับโทเค็นจาก header
        const { atoken } = req.headers

        if (!atoken) {
            return res.json({ success: false, message: 'Token is required' })
        }

        // ถอดรหัสโทเค็น
        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET)
        
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD ) {
            return res.json({ success:false, message: "Not Authorized, Login Again"})
        }

        next()
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: 'Invalid token' })
    }
}

export default authAdmin
