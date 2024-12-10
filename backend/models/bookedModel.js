import mongoose from "mongoose";

const bookedSchema = new mongoose.Schema({
    userId: { type: String, require: true },
    workshopId: { type: String, require: true },
    slotDate: { type: String, require: true },
    slotTime: { type: String, require: true },
    userData: { type: Object, require: true },
    workshopData: { type: Object, require: true },
    amount: { type: Number, require: true },
    date: { type: Number, require: true },
    cancelled: { type: Boolean, default: false },
    payment: { type: Boolean, default: false },
    isCompleted: { type: Boolean, default: false }
})

const bookedModel = mongoose.models.booked || mongoose.model("booked", bookedSchema)

export default bookedModel
