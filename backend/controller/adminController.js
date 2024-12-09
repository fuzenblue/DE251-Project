import jwt from 'jsonwebtoken'
import workshopsModel from '../models/workshopsModel.js'
import userModel from '../models/userModel.js'
import bookedModel from '../models/bookedModdel.js'

// API for Admin Login
const loginAdmin = async (req, res) => {
    try {

        const { email, password } = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {

            const token = jwt.sign({ email, password }, process.env.JWT_SECRET)
            res.json({ success: true, token })

        } else {
            res.json({ success: false, message: "Invalid credentials" })
        }

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get dashboard data for admin panel
const adminDashboard = async (req, res) => {
    try {
        const workshops = await workshopsModel.find({})
        const users = await userModel.find({})
        const booked = await bookedModel.find({})

        const totalRevenue = booked.filter((b) =>
            (b.cancelled === false && b.payment === true) || (b.cancelled === true && b.payment === true)
        ).reduce((acc, curr) => acc + curr.amount, 0)

        const workshopPopularity = {}
        booked.forEach((b) => {
            if (!workshopPopularity[b.workshopId]) {
                workshopPopularity[b.workshopId] = 0
            }
            workshopPopularity[b.workshopId] += 1;
        }) 

        const popularWorkshops = Object.entries(workshopPopularity).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([id, count]) => ({workshopId: id, count}))

        const dashData = {
            totalWorkshops: workshops.length,
            totalBookings: booked.length,
            totalUsers: users.length,
            latestBookings: booked.reverse().slice(0, 10),
            totalRevenue,
            popularWorkshops,
        }

        console.log("Top 5 Popular Workshops:", popularWorkshops)
        console.log("Workshop Popularity:", workshopPopularity)
        console.log("Total Revenue: ", totalRevenue)
        console.log("Popular Workshops: ", popularWorkshops)

        res.json({ success: true, dashData })
    } catch (error) {
        console.error(error)
        res.json({ success: false, message: error.message })
    }
}


export { loginAdmin, adminDashboard }
