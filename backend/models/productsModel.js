import mongoose from "mongoose"

const productsSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        productImg: { type: String, required: true },
        images: { type: [String], required: true },
        about: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        available: { type: Boolean, default: true },
    },
)

const productsModel = mongoose.models.products || mongoose.model("products", productsSchema)

export default productsModel