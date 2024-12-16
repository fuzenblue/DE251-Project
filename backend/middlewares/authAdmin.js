import jwt from 'jsonwebtoken'

// Admin authentication middleware
const authAdmin = async (req, res, next) => {
    try {

        const { atoken } = req.headers
        if (!atoken) {
            return res.json({ success: false, message: 'Token is required' })
        }

        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET)
        if (token_decode.email !== process.env.ADMIN_EMAIL) {
            return res.json({ success: false, message: "Not Authorized, Login Again" })
        }

        next()
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: 'Invalid token' })
    }
}

export default authAdmin
