import express from 'express'
import { addToCart, updateCart, getUserCart } from '../controller/cartController.js'
import authUser from '../middlewares/authUser.js'

const cartRouter = express.Router()

cartRouter.post('/get', authUser, getUserCart)
cartRouter.get('/add-to-cart', authUser, addToCart)
cartRouter.get('/update-cart', authUser, updateCart)

export default cartRouter