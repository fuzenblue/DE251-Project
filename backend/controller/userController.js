import userModel from '../models/userModel.js'
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import { v2 as cloudinary } from 'cloudinary'
import workshopsModel from '../models/workshopsModel.js'
import bookedModel from '../models/BookedModdel.js'

// register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !password || !email) {
      return res.json({ success: false, message: "Missing Details" })
    }

    // validating email format & strong password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter a valid email" })
    }

    if (password.length < 8) {
      return res.json({ success: false, message: "Enter a strong password" })
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    const userData = {
      name,
      email,
      password: hashPassword
    }

    const newUser = new userModel(userData)
    const user = await newUser.save()

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    res.json({ success: true, token })

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })

    if (!user) {
      return res.json({ success: false, message: "User Doesn't exist" })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
      res.json({ success: true, token })

    } else {
      return res.json({ success: false, message: "Invalid credentials" })
    }

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// API to get user profile
const getProfile = async (req, res) => {
  try {
    const userId = req.body.userId
    // console.log(userId)

    const userData = await userModel.findById(userId).select('-password')
    return res.json({ success: true, userData })

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

const updateProfile = async (req, res) => {
  try {

    const { userId, name, first_name, last_name, phone, dob, gender, address } = req.body
    const imageFile = req.file

    if (!name || !phone || !dob || !gender) {
      return res.json({ success: false, message: "Data Missing" })
    }

    await userModel.findByIdAndUpdate(userId, { name, first_name, last_name, phone, address: JSON.parse(address), dob, gender })

    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
      const imageURL = imageUpload.secure_url

      await userModel.findByIdAndUpdate(userId, { image: imageURL })
    }

    res.json({ success: true, message: "Profile Updated" })

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// API to book Workshop
const bookedWorkshop = async (req, res) => {
  try {
    const { userId, workshopId, slotDate, slotTime, ticketCount } = req.body

    if (!slotDate || !slotTime || !ticketCount) {
      return res.json({ success: false, message: "Please select date, time, and ticket count" })
    }

    // Validate the number of tickets (maximum 5 tickets per booking)
    if (ticketCount > 5) {
      return res.json({ success: false, message: "You can book a maximum of 5 tickets per booking" })
    }

    // Check if the selected workshop exists
    const workshopData = await workshopsModel.findById(workshopId)
    if (!workshopData || !workshopData.available) {
      return res.json({ success: false, message: "Workshop not available" })
    }

    let slots_booked = workshopData.slots_booked

    // Format slotDate to ensure consistent structure (add leading 0)
    let day = slotDate.split('_')[0].padStart(2, '0')
    let month = slotDate.split('_')[1].padStart(2, '0')
    let year = slotDate.split('_')[2]
    const formattedSlotDate = `${day}_${month}_${year}`

    // Check if slotDate already has bookings
    if (slots_booked.has(formattedSlotDate)) {
      // Check if the slotTime is already booked
      const bookingsForSlot = slots_booked.get(formattedSlotDate).filter(booking => booking.slotTime === slotTime)
      const totalBookings = bookingsForSlot.reduce((sum, booking) => sum + booking.ticketCount, 0)

      console.log(totalBookings)
      console.log(ticketCount)


      if (totalBookings + ticketCount > 25) {
        return res.json({ success: false, message: "This slot is fully booked" })
      }

      // Add new booking
      slots_booked.get(formattedSlotDate).push({ userId, slotTime, ticketCount })
    } else {
      // If no bookings for the selected date, add a new slot
      slots_booked.set(formattedSlotDate, [{ userId, slotTime, ticketCount }])
    }

    // Update the workshop data with the updated slots booked
    await workshopsModel.findByIdAndUpdate(workshopId, { slots_booked })

    // Retrieve user information
    const userData = await userModel.findById(userId).select('-password')
    if (!userData) {
      return res.json({ success: false, message: "User not found" })
    }

    // Create a new booking
    const bookedData = {
      userId,
      workshopId,
      userData,
      workshopData,
      amount: workshopData.price * ticketCount,
      ticketCount,
      slotTime,
      slotDate: formattedSlotDate,
      date: Date.now(),
    }

    // Save new booking to database
    const newBooked = new bookedModel(bookedData)
    await newBooked.save()

    res.json({ success: true, message: "Booking successful" })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// API to get user booking for frontend my-booking page
const listBooking = async (req, res) => {
  try {
    const { userId } = req.body
    const bookings = await bookedModel.find({ userId })

    res.json({ success: true, bookings })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// API to cancel booking
const cancelBooking = async (req, res) => {
  try {
    const { bookedId, processIdToCancel } = req.body

    // ดึงข้อมูลการจอง
    const booking = await bookedModel.findById(bookedId)
    if (!booking) {
      return res.json({ success: false, message: "Booking not found" })
    }

    const {
      workshopId,
      slotDate,
      slotTime,
      ticketCount,
      userId,
      processId,
    } = booking

    // ดึงข้อมูล workshop 
    const workshop = await workshopsModel.findById(workshopId)
    if (!workshop) {
      return res.json({ success: false, message: "Workshop not found" })
    }

    // สร้างสำเนาของ slots_booked 
    const currentSlotsBooked = workshop.slots_booked ?
      JSON.parse(JSON.stringify(workshop.slots_booked)) :
      {}

    // เงื่อนไขการกรองและยกเลิก slot 
    if (currentSlotsBooked[slotDate]) {
      // กรองเพื่อค้นหา slot ที่ต้องการยกเลิก
      const slotToCancel = currentSlotsBooked[slotDate].find(slot =>
        processIdToCancel ?
          String(slot.processId) === String(processIdToCancel) :
          (String(slot.userId) === String(userId) && slot.slotTime === slotTime)
      )

      if (slotToCancel) {
        // ลบเฉพาะ slot ที่ตรงเงื่อนไข
        currentSlotsBooked[slotDate] = currentSlotsBooked[slotDate].filter(
          slot => slot !== slotToCancel
        )

        // ลบ key วันที่ถ้าไม่มี slots เหลือ
        if (currentSlotsBooked[slotDate].length === 0) {
          delete currentSlotsBooked[slotDate]
        }

        // อัปเดต workshop
        await workshopsModel.findByIdAndUpdate(
          workshopId,
          {
            slots_booked: currentSlotsBooked,
            $inc: {
              remainingSeats: slotToCancel.ticketCount || ticketCount
            }
          }
        )

        // อัปเดตสถานะการจอง
        await bookedModel.findByIdAndUpdate(
          bookedId,
          {
            cancelled: true,
            cancellationReason: processIdToCancel ?
              'Specific process cancellation' :
              'Full booking cancellation'
          }
        )
      }
    }

    res.json({ success: true, message: "Booking cancelled successfully" })

  } catch (error) {
    console.error("Cancellation Error:", error)
    res.json({ success: false, message: error.message })
  }
}


// API to get status payment
const updatePaymentStatus = async (req, res) => {
  try {
    const { bookedId, payment } = req.body;

    if (typeof payment !== 'boolean') {
      return res.json({ success: false, message: "Invalid payment value" });
    }

    const booking = await bookedModel.findById(bookedId);
    if (!booking) {
      return res.json({ success: false, message: "Booking not found" });
    }

    await bookedModel.findByIdAndUpdate(bookedId, { payment });

    res.json({ success: true, message: `Payment status updated to ${payment ? "Paid" : "Unpaid"}` });
  } catch (error) {
    console.error("Payment Update Error:", error);
    res.json({ success: false, message: error.message });
  }
}


export { registerUser, loginUser, getProfile, updateProfile, bookedWorkshop, listBooking, cancelBooking, updatePaymentStatus }