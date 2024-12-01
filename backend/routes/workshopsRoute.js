import express from 'express'
import upload from '../middlewares/multer.js'
import { addWorkshops } from '../controller/workshopsController.js'


const workshopsRouter = express.Router()

workshopsRouter.post('/add',
    upload.fields([
        { name: 'workshopImg', maxCount: 1 }, 
        { name: 'images', maxCount: 10 }, 
        { name: 'video', maxCount: 1 }, 
    ]),  addWorkshops )

export default workshopsRouter