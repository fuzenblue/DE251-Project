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

        // Debug: Log raw data
        console.log('Workshops:', workshops.length)
        console.log('Booked:', booked.length)

        const totalRevenue = booked
            .filter((b) => b.payment === true)
            .reduce((acc, curr) => acc + curr.amount, 0)

        // Workshop Popularity Calculation
        const workshopPopularity = {}
        booked.forEach((b) => {
            // Debug: Log current booking
            console.log('Current Booking:', {
                workshopId: b.workshopId,
                workshopData: b.workshopData
            })

            if (b.workshopId) {
                const workshopId = b.workshopId.toString()
                
                // Initialize workshop popularity if not exists
                if (!workshopPopularity[workshopId]) {
                    workshopPopularity[workshopId] = 0
                }

                // Safely calculate tickets
                if (b.workshopData?.slots_booked) {
                    Object.keys(b.workshopData.slots_booked).forEach(slotDate => {
                        const slotsForDate = b.workshopData.slots_booked[slotDate] || []
                        
                        slotsForDate.forEach(slot => {
                            const tickets = slot.ticketCount || 1
                            
                            // Debug: Log ticket calculation
                            console.log(`Workshop ${workshopId} - Slot Date: ${slotDate}, Tickets: ${tickets}`)
                            
                            workshopPopularity[workshopId] += tickets
                        })
                    })
                }
            }
        })

        // Debug: Log workshop popularity
        console.log('Workshop Popularity:', workshopPopularity)

        // Map Popular Workshops
        const popularWorkshops = Object.entries(workshopPopularity)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([id, count]) => {
                const workshop = workshops.find((w) => w._id.toString() === id)
                
                return {
                    workshopName: workshop?.name || "Unknown",
                    count,
                    image: workshop?.workshopImg, 
                }
            })

        // Prepare Dashboard Data
        const dashData = {
            totalWorkshops: workshops.length,
            totalBookings: booked.length,
            totalUsers: users.length,
            latestBookings: booked.reverse().slice(0, 30),
            totalRevenue,
            popularWorkshops,
        }

        // Debug: Log final dashboard data
        console.log('Dashboard Data:', JSON.stringify(dashData, null, 2))

        res.json({ success: true, dashData })
    } catch (error) {
        console.error('Admin Dashboard Error:', error)
        res.status(500).json({ 
            success: false, 
            message: error.message 
        })
    }
}

export { loginAdmin, adminDashboard }
