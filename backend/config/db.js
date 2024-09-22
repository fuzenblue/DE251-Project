import mongoose from "mongoose";

    export const connectDB = async () => {
        await mongoose.connect('mongodb+srv://admin:DE251@cluster0.fahxg.mongodb.net/DE251-Project').then(() =>
            console.log("DB Connected"));
    }