import mongoose from "mongoose"

const workshopsSchema = new mongoose.Schema({
    name: {type:String, require:true},
    cover_image: {type:String, require:true},
    images: {type:Array, require:true},
    image: {type:String, require:true},
    category: {type:String, require:true},
    about: {type:String, require:true},
    description: {type:String, require:true},
    price: {type:Number, require:true},

    date: {type:Number, require:true},
    slot_booked: {type:Object, default:{}},
}, {minimize:false})

const workshopsModel = mongoose.models.workshops || mongoose.model("workshops", workshopsSchema)

export default workshopsModel