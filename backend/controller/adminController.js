import jwt from 'jsonwebtoken'
import workshopsModel from '../models/workshopsModel.js'
import userModel from '../models/userModel.js'
import bookedModel from '../models/bookedModel.js'
import orderModel from '../models/orderModel.js'
import productModel from '../models/productsModel.js'

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
        const products = await productModel.find({})
        const orders = await orderModel.find({})

        const totalRevenue = [
            ...booked.filter((b) => b.payment === true),
            ...orders.filter((o) => o.payment === true),
        ].reduce((acc, curr) => acc + curr.amount, 0)


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

        const productPopularity = {};

        // ตรวจสอบว่า orders เป็นอาร์เรย์
        if (!Array.isArray(orders)) {
            console.error("Orders is not an array or undefined:", orders);
            return res.status(500).json({ success: false, message: "Invalid orders data" });
        }

        // วนลูป orders เพื่อสร้าง productPopularity
        orders.forEach((order) => {
            // ตรวจสอบว่า items เป็นอาร์เรย์
            if (!Array.isArray(order.items)) {
                console.warn(`Invalid items for order ${order._id}:`, order.items);
                return; // ข้าม order ที่ไม่มี items
            }

            order.items.forEach((item) => {
                if (!productPopularity[item._id]) {
                    productPopularity[item._id] = 0;
                }
                productPopularity[item._id] += item.quantity;
            });
        });

        // สร้าง popularProducts
        const popularProducts = Object.entries(productPopularity)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([id, count]) => {
                const product = products.find((p) => p._id.toString() === id);
                return {
                    productName: product?.name || "Unknown",
                    count,
                    image: product?.productImg,
                };
            });



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
            totalProduct: products.length,
            totalOrders: booked.length + orders.length,
            totalUsers: users.length,
            latestBookings: [...booked, ...orders]
                .sort((a, b) => b.date - a.date)
                .slice(0, 30),
            totalRevenue,
            popularWorkshops,
            popularProducts,
            users,
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
