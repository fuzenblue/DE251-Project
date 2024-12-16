import { v2 as cloudinary } from "cloudinary"
import workshopsModel from "../models/workshopsModel.js"
import bookedModel from "../models/bookedModel.js"

// API to add a workshop
const addWorkshops = async (req, res) => {
  try {
    const { name, category, about, description, price } = req.body

    if (!req.files) {
      return res.json({ message: 'No files were uploaded.' })
    }

    const workshopImg = req.files.workshopImg?.[0]
    const images = req.files.images || []
    const video = req.files.video ? req.files.video[0] : null

    // Check for required fields
    if (!name || !category || !about || !description || !price) {
      return res.json({ message: "Missing required fields" })
    }

    // Check if files are provided
    if (!workshopImg) {
      return res.json({ message: "Cover image is required" })
    }
    if (images.length === 0) {
      return res.json({ message: 'At least one image is required' })
    }
    if (!video) {
      return res.json({ message: 'Video is required' })
    }
    if (video.size > 100 * 1024 * 1024) { // 100 MB
      throw new Error("Video file exceeds the size limit (100MB)")
    }

    // upload Image to cloudinary
    const coverImageUpload = await cloudinary.uploader.upload(workshopImg.path, { resource_type: "image" })
    const coverImageUrl = coverImageUpload.secure_url

    const otherImageUpload = await Promise.all(
      images.map(async (image) => {
        const uploadResult = await cloudinary.uploader.upload(image.path, { resource_type: "image" });
        return uploadResult.secure_url
      })
    )
    const otherImageUrls = otherImageUpload

    const videoUpload = await cloudinary.uploader.upload(video.path, { resource_type: "video" })
    const videoUrl = videoUpload.secure_url

    // Create a new workshop entry
    const WorkshopsData = {
      name,
      category,
      about,
      description,
      price,
      date: Date.now(),
      workshopImg: coverImageUrl,
      images: otherImageUrls,
      video: videoUrl,
    }

    const newWorkshops = new workshopsModel(WorkshopsData)
    await newWorkshops.save()

    res.json({ success: true, message: "Workshop Added" })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// API to get all workshop
const allWorkshop = async (req, res) => {
  try {

    const workshops = await workshopsModel.find({})
    res.json({ success: true, workshops })
    // console.log(workshops)

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

const changeAvailability = async (req, res) => {
  try {
    const { workshopsId } = req.body
    // console.log('Received Workshop ID in Backend:', workshopsId)
    const workshopData = await workshopsModel.findById(workshopsId)
    if (!workshopData) {
      return res.json({ success: false, message: "Workshop not found" });
    }
    await workshopsModel.findByIdAndUpdate(workshopsId, { available: !workshopData.available })
    res.json({ success: true, message: 'Availability updated successfully' })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

const workshopList = async (req, res) => {
  try {

    const workshops = await workshopsModel.find({})

    res.json({ success: true, workshops })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// API to get all booking list
const bookedsAdmin = async (req, res) => {
  try {

    const bookeds = await bookedModel.find({})
    res.json({ success: true, bookeds })

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

// API for booking cancel
const bookingCancel = async (req, res) => {
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

export { addWorkshops, allWorkshop, changeAvailability, workshopList, bookedsAdmin, bookingCancel }
