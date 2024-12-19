import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext.jsx"
import { assets } from "../assets/assets.js"
import Breadcrumbs from "../components/Breadcrumbs.jsx"
import RelatedWorkshops from "../components/RelatedWorkshops.jsx"
import { toast } from "react-toastify"
import axios from "axios"


const WorkshopInfo = () => {
  const { workshops, currencySymbol, backendUrl, token, getWorkshopsData } = useContext(AppContext)
  const navigate = useNavigate()

  const { workshopId } = useParams()
  const [workshopInfo, setWorkshopInfo] = useState(null)

  const [activeIndex, setActiveIndex] = useState(0)
  const [ticketCount, setTicketCount] = useState(1)

  const [workshopSlots, setWorkshopSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const dayOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

  const fetchWorkshopInfo = async () => {
    const workshopInfo = workshops.find(workshop => workshop._id === workshopId)
    setWorkshopInfo(workshopInfo)
    // console.log(workshopInfo)
  }

  const getAvailableSlots = async () => {
    setWorkshopSlots([])

    // getting current date
    let today = new Date()

    for (let i = 0; i < 7; i++) {
      // Getting the current date (index-based)
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      // Determine if it's a weekend (Saturday or Sunday)
      let isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6

      // Define the time slots based on the day type
      let hours = isWeekend ? [9, 13, 17] : [11, 16]
      let timeSlots = []

      hours.forEach(hour => {
        // Set the start time for the slot
        let startTime = new Date(currentDate)
        startTime.setHours(hour, 0, 0, 0)

        if (currentDate.toDateString() === today.toDateString() && startTime <= new Date()) {
          return // Skip this slot
        }

        // Calculate the end time (e.g., 4 hours after start)
        let endTime = new Date(startTime)
        endTime.setMinutes(startTime.getMinutes() + 180)

        // Add the time slot
        timeSlots.push({
          datetime: startTime,
          time: startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          endTime: endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        })
      })

      // Save the time slots to the workshop slots
      setWorkshopSlots(prev => [...prev, timeSlots])
    }
  }

  const bookWorkshop = async (ticketCount) => {
    if (!token) {
      toast.warn("Login to book Workshop")
      return navigate("/login")
    }

    try {
      const workshopPrice = workshopInfo?.price
      if (workshopPrice === 0) {
        console.error("Workshop price is missing or undefined")
        return
      }

      const totalPrice = ticketCount * workshopPrice
      // console.log("Ticket:", ticketCount, "Total:", totalPrice)

      if (!workshopSlots[slotIndex] || !workshopSlots[slotIndex][0]) {
        toast.error("Workshop slots not available")
        return
      }
      if (!slotTime) {
        toast.error("Please select a slot time")
        return
      }

      const date = new Date(workshopSlots[slotIndex][0].datetime)
      let day = date.getDate().toString().padStart(2, "0")
      let month = (date.getMonth() + 1).toString().padStart(2, "0")
      let year = date.getFullYear()
      const slotDate = `${day}_${month}_${year}`

      // console.log("Booking request:", { workshopId, slotDate, slotTime, ticketCount })

      const { data } = await axios.post(backendUrl + "/api/user/book-workshop", { workshopId, slotDate, slotTime, ticketCount }, { headers: { token } })

      if (data.success) {
        toast.success(data.message)

        getWorkshopsData()
        navigate("/my-booking")

      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.error(error.response?.data)
      toast.error(error.message)
    }
  }


  useEffect(() => {
    fetchWorkshopInfo()
  }, [workshops, workshopId])

  useEffect(() => {
    getAvailableSlots()
  }, [workshopId])

  useEffect(() => {
    console.log(workshopSlots)
  }, [workshopSlots])


  return (
    workshopInfo && (
      <div className="px-5 py-2">
        <Breadcrumbs />

        {/* Workshop Image and Video */}
        <div className="relative carousel pb-2 grid grid-cols-1 md:grid-cols-3">
          <div className="px-4 col-span-1">
            {workshopInfo?.video ? (
              <video
                className="rounded-xl w-full h-full object-cover"
                autoPlay
                muted
                loop
                controls
              >
                <source src={workshopInfo.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : null}
          </div>

          <div className="relative col-span-2">
            <div className="carousel w-full h-full pt-2 items-center max-h-[400px] overflow-hidden">
              {/* Carousel items */}
              {Array.isArray(workshopInfo?.images) &&
                workshopInfo?.images.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-item w-full h-full ${activeIndex === index ? "block" : "hidden"
                      }`}
                  >
                    <img
                      src={image}
                      alt={`image ${index + 1}`}
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </div>
                ))}
            </div>

            {/* Navigation dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
              {Array.isArray(workshopInfo?.images) &&
                workshopInfo?.images.map((_, i) => (
                  <button
                    key={i}
                    className={`w-4 h-1 rounded-2xl transition-all ${activeIndex === i ? "bg-white w-8" : "bg-white/50"
                      }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
            </div>

            {/* Previous and Next buttons */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
              <button
                className="btn btn-circle btn-primary"
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === 0 ? workshopInfo?.images.length - 1 : prev - 1
                  )
                }
              >
                {" "}
                ❮{" "}
              </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
              <button
                className="btn btn-circle btn-primary"
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === workshopInfo?.images.length - 1 ? 0 : prev + 1
                  )
                }
              >
                {" "}
                ❯{" "}
              </button>
            </div>
          </div>
        </div>

        {/* Workshop Details */}
        <div className="mx-[4%]">
          <div className="flex justify-between px-0 md:px-8 gap-4 mt-3">
            <h1 className="text-3xl text-primary font-semibold">
              {workshopInfo?.name}
            </h1>
            <h3 className="text-3xl text-primary font-semibold hidden md:block">
              {currencySymbol}
              {workshopInfo?.price}
            </h3>
          </div>

          <div className="flex mt-4 flex-col md:flex-row gap-5">
            {/* description */}
            <div className="flex-1 rounded-lg">
              <div className="max-h-48 md:max-h-auto overflow-y-scroll">
                <p className="flex items-center gap-1 text-lg font-medium text-gray-600 mt-3">
                  Description about this workshop{" "}
                  <img src={assets.info_icon} alt="" />
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  {workshopInfo?.about}
                </p>
                <p className="text-sm text-gray-500 mt-2 ">
                  {workshopInfo?.description}
                </p>
              </div>

              <p className="text-gray-500 font-medium mt-10 text-end">
                Workshop Price:
                <span className="text-gray-600">
                  {" "}
                  {currencySymbol}
                  {workshopInfo?.price}
                </span>
              </p>
            </div>

            {/* booking slots */}
            <div className="w-full md:w-1/2 md:ml-4 font-medium text-gray-700">
              <p>Booking slots</p>

              {/* Slot Date */}
              <div className="flex gap-4 items-center w-full overflow-x-auto m-5">
                {
                  [...Array(7)].map((_, index) => {
                    const today = new Date()
                    const targetDate = new Date()
                    targetDate.setDate(today.getDate() + index)

                    const day = dayOfWeek[targetDate.getDay()]

                    return (
                      <div
                        key={index}
                        onClick={() => setSlotIndex(index)}
                        className={`text-center py-6 min-w-16 rounded-full cursor-pointer 
                        ${slotIndex === index
                            ? "bg-primary text-white"
                            : "text-gray-400 border border-gray-300"
                          }`}
                      >
                        <p>{day}</p>
                        <p>{targetDate.getDate()}</p>
                      </div>
                    )
                  })
                }
              </div>


              {/* Slot Time */}
              <div className="m-5">
                {workshopSlots.length &&
                  workshopSlots[slotIndex] &&
                  workshopSlots[slotIndex].length > 0 ? (
                  <div className="flex gap-4 items-center w-full overflow-x-auto">
                    {workshopSlots[slotIndex].map((item, index) => (
                      <p
                        onClick={() => setSlotTime(item.time)}
                        className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime
                          ? "bg-primary text-white"
                          : "text-gray-400 border border-gray-300"
                          }`}
                        key={index}
                      >
                        {item.time} - {item.endTime}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="px-5 py-2 text-red-500 text-md font-medium">
                    Workshop are not available today.
                  </p>
                )}
              </div>

              <div className="flex items-center gap-4 m-5">
                <label className="text-sm font-light text-gray-700">
                  Ticket:
                </label>
                <select
                  value={ticketCount}
                  onChange={(e) => setTicketCount(parseInt(e.target.value))}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                >
                  {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              <button onClick={() => bookWorkshop(ticketCount)} disabled={workshopSlots[slotIndex]?.length === 0}
                className={`btn text-sm font-light px-14 py-3 rounded-full shadow-md ${workshopSlots[slotIndex]?.length > 0
                  ? "btn-primary text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}>
                Book this Workshop
              </button>

              {/* <button onClick={bookWorkshop} className="btn btn-primary text-white text-sm font-light px-14 py-3 rounded-full shadow-md">Book this Workshop</button> */}
            </div>
          </div>
        </div>

        <div>
          <RelatedWorkshops
            workshopId={workshopId}
            category={workshopInfo?.category}
          />
        </div>
      </div>
    )
  )
}

export default WorkshopInfo