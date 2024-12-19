import express from "express"
import { placeOrder, placeOrderCard, allOrders, userOrders, updateStatus } from '../controller/orderController.js'
import authAdmin from '../middlewares/authAdmin.js'
import authUser from '../middlewares/authUser.js'

const orderRouter = express.Router()

// Admin Feature
orderRouter.post('/list', authAdmin, allOrders)
orderRouter.post('/status', authAdmin, updateStatus)

// Payment Feature
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/place-card', authUser, placeOrderCard)

// User Feature
orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter