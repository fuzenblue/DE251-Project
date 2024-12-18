import express from 'express'
import { addToBag, updateBag, getUserBag } from '../controller/bagController.js'
import authUser from '../middlewares/authUser.js'

const bagRouter = express.Router()

bagRouter.post('/get', authUser, getUserBag)
bagRouter.get('/add-to-bag', authUser, addToBag)
bagRouter.get('/update-bag', authUser, updateBag)

export default bagRouter