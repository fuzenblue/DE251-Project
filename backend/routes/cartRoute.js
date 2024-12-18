import express from 'express'
import { addToCart, updateCart, getUserCart } from '../controller/cartController.js'
import authUser from '../middlewares/authUser.js'

const cartRouter = express.Router()

cartRouter.post('/get', authUser, getUserCart)
cartRouter.get('/add', authUser, addToCart)
cartRouter.get('/update', authUser, updateCart)

export default cartRouter