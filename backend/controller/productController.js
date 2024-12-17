import { v2 as cloudinary } from "cloudinary"
import productsModel from "../models/productsModel.js"

// API to add a product
const addProducts = async (req, res) => {
    try {
        const { name, about, description, price } = req.body

        if (!req.files) {
            return res.json({ message: 'No files were uploaded.' })
        }

        const productImg = req.files.productImg?.[0]
        const images = req.files.images || []

        // Check for required fields
        if (!name || !about || !description || !price) {
            return res.json({ message: "Missing required fields" })
        }

        // Check if files are provided
        if (!productImg) {
            return res.json({ message: "Cover image is required" })
        }
        if (images.length === 0) {
            return res.json({ message: 'At least one image is required' })
        }

        // upload Image to cloudinary
        const coverImageUpload = await cloudinary.uploader.upload(productImg.path, { resource_type: "image" })
        const coverImageUrl = coverImageUpload.secure_url

        const otherImageUpload = await Promise.all(
            images.map(async (image) => {
                const uploadResult = await cloudinary.uploader.upload(image.path, { resource_type: "image" });
                return uploadResult.secure_url
            })
        )
        const otherImageUrls = otherImageUpload

        // Create a new product entry
        const ProductsData = {
            name,
            about,
            description,
            price,
            productImg: coverImageUrl,
            images: otherImageUrls,
        }

        const newProducts = new productsModel(ProductsData)
        await newProducts.save()

        res.json({ success: true, message: "Products Added" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get all product
const allProducts = async (req, res) => {
    try {

        const products = await productsModel.find({})
        res.json({ success: true, products })
        // console.log(products)

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const changeAvailability = async (req, res) => {
    try {
        const { productsId } = req.body
        const ProductsData = await productsModel.findById(productsId)
        if (!ProductsData) {
            return res.json({ success: false, message: "Products not found" });
        }
        await productsModel.findByIdAndUpdate(productsId, { available: !ProductsData.available })
        res.json({ success: true, message: 'Availability updated successfully' })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const productsList = async (req, res) => {
    try {
  
      const products = await productsModel.find({})
  
      res.json({ success: true, products })
    } catch (error) {
      console.log(error)
      res.json({ success: false, message: error.message })
    }
  }

export { addProducts, allProducts, changeAvailability, productsList }