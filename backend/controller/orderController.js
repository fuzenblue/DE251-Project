import orderModel from '../models/orderModel.js'
import userModel from '../models/userModel.js'

// Placing order using COD Method
const placeOrder = async (req, res) => {

    try {

        const { userId, items, amount, address } = req.body
        if (!userId || !items || !amount || !address) {
            return res.json({ success: false, message: "Missing required fields" })
        }


        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, { cartData: {} })
        res.json({ success: true, message: "Order Place" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// Placing order using Card Method
const placeOrderCard = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body

        if (!userId || !items || !amount || !address) {
            return res.json({ success: false, message: "Missing required fields" })
        }

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Card",
            payment: true,
            date: Date.now(),
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, { cartData: {} })

        res.json({ success: true, message: "Order placed successfully with Card Payment" })
    } catch (error) {
        console.error(error)
        res.json({ success: false, message: error.message })
    }
}


// All Order data for Admin panel
const allOrders = async (req, res) => {
    try {

        const orders = await orderModel.find().sort({ date: -1 })
        res.json({ success: true, orders })
    } catch (error) {
        console.error(error)
        res.json({ success: false, message: "Failed to fetch orders." })
    }
}


// User Order data for Frontend
const userOrders = async (req, res) => {
    try {

        const { userId } = req.body

        const orders = await orderModel.find({ userId })
        res.json({ success: true, orders })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// update order status from Admin panel
const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body

        if (!orderId || !status) {
            return res.json({ success: false, message: "Missing required fields" })
        }

        const order = await orderModel.findById(orderId)
        if (!order) {
            return res.json({ success: false, message: "Order not found" })
        }

        order.status = status
        await order.save()

        res.json({ success: true, message: "Order status updated successfully!" })
    } catch (error) {
        console.error(error)
        res.json({ success: false, message: "Failed to update order status." })
    }
}



export { placeOrder, placeOrderCard, allOrders, userOrders, updateStatus }