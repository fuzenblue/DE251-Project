import express from 'express'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'
import { addWorkshops, allWorkshop, bookedsAdmin, bookingCancel, changeAvailability, workshopList } from '../controller/workshopsController.js'


const workshopsRouter = express.Router()

workshopsRouter.post('/add',
    upload.fields([
        { name: 'workshopImg', maxCount: 1 },
        { name: 'images', maxCount: 10 },
        { name: 'video', maxCount: 1 },
    ]), addWorkshops)

workshopsRouter.post('/all-workshops', allWorkshop)
workshopsRouter.post('/change-availability', changeAvailability)
workshopsRouter.get('/list-workshops', workshopList)
workshopsRouter.get('/bookings', bookedsAdmin)
workshopsRouter.post('/cancel-booking', bookingCancel)

export default workshopsRouter