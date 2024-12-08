import mongoose from "mongoose"

const workshopsSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        workshopImg: { type: String, required: true },
        images: { type: [String], required: true },
        video: { type: String, required: true },
        category: { type: String, required: true },
        about: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        date: { type: Number, required: true },
        available: { type: Boolean, default: true },
        slots_booked: {
            type: Map,
            of: [{
                userId: String,
                slotTime: String,
                ticketCount: Number
            }],
            default: {}
        }

    }, { minimize: false }
)

const workshopsModel = mongoose.models.workshops || mongoose.model("workshops", workshopsSchema)

export default workshopsModel
