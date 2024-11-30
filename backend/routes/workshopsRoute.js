import express from 'express'
import multer from 'multer'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'
import { addWorkshops } from '../controller/workshopsController.js'


const workshopsRouter = express.Router()


workshopsRouter.post('/add',
    upload.single('workshopImg'),
    // upload.fields('images'), 
    // upload.single('video'), 
    addWorkshops)

export default workshopsRouter