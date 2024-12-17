import express from 'express'
import upload from '../middlewares/multer.js'
import { addProducts, allProducts, changeAvailability, productsList } from '../controller/productController.js'


const productsRouter = express.Router()

productsRouter.post('/add',
    upload.fields([
        { name: 'productImg', maxCount: 1 },
        { name: 'images', maxCount: 10 },
    ]), addProducts)

productsRouter.post('/all-products', allProducts)
productsRouter.post('/change-availability', changeAvailability)
productsRouter.get('/list-products', productsList)

export default productsRouter