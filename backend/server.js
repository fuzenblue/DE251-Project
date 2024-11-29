import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import workshopsRouter from './routes/workshopsRoute.js'
import userRouter from './routes/userRoute.js'

// server.js

// app config
const app = express()
const port = process.env.PORT || 4000

connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// API endpoint
app.use('/api/admin', adminRouter)
app.use('/api/workshop', workshopsRouter)
app.use('/api/user', userRouter)



app.get('/', (req, res) => {
    res.send('API WORKING')
})

app.listen(port, () => console.log("Server Started", port))