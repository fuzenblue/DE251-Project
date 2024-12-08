import React, { useContext, useEffect, useState } from 'react'
import MyProfileSideBar from '../components/MyProfileSideBar'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

// 11.00

const MyBooking = () => {

  const { backendUrl, token, getWorkshopsData } = useContext(AppContext)

  const [bookings, setBookings] = useState([])
  const months = [" ", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
  }

  const getUserBookings = async () => {
    try {

      const { data } = await axios.get(backendUrl + '/api/user/list-booking', { headers: { token } })

      if (data.success) {
        setBookings(data.bookings.reverse())
        console.log(data.bookings)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const cancelBookings = async (bookedId) => {
    try {
      // ส่งข้อมูลที่ต้องการไปที่ backend
      const { data } = await axios.post(backendUrl + '/api/user/cancel-booking', { bookedId }, { headers: { token } })

      if (data.success) {
        toast.success(data.message)
        getUserBookings()  // Ensure this waits before moving on
        getWorkshopsData() // Ensure this waits before moving on
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      getUserBookings()
    }
  }, [token])

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <MyProfileSideBar />

      {/* Main Content Area */}
      <div className="flex-1 p-8 bg-gray-50">
        <h2 className="text-left text-2xl font-bold text-gray-800 mb-6">My Booking</h2>

        <div className="flex flex-col gap-4 m-4">
          {bookings.map((item, index) => (
            <div key={index} className="grid grid-cols[1fr_2fr] gap-4 sm:flex sm:gap-6 py-3 px-3 border border-gray-300 rounded-lg bg-white">
              <div>
                <img src={item.workshopData.workshopImg} alt="" className="w-36 h-36 rounded-lg object-cover" />
              </div>
              <div className='flex-1 text-sm text-zinc-600'>
                <p className='text-lg text-neutral-800 font-semibold'>{item.workshopData.name}</p>
                <p className='text-base'>{item.workshopData.category}</p>
                <p className='text-base mt-4'><span className='text-sm text-neutral-800 font-medium pr-2'>Date & Time:</span>{slotDateFormat(item.slotDate)} at {item.slotTime}</p>
                <p className="text-base"><span className="text-sm text-neutral-800 font-medium pr-2">Total Ticket:</span>{ item?.workshopData?.slots_booked[item?.slotDate]?.reverse().find((slot) => slot.slotTime === item?.slotTime)?.ticketCount }</p>
                <p className='text-base'><span className='text-sm text-neutral-800 font-medium pr-2'>Total Among:</span>{item.amount}</p>
              </div>
              <div></div>
              <div className='flex flex-col gap-2 justify-end'>
                {!item.cancelled && <button className='text-sm text-stone-500 sm:min-w-48 py-2 border rounded hover:bg-green-400 hover:text-white transition-all duration-300'>Pay Online</button>}
                {!item.cancelled && <button className='text-sm text-stone-500 sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Get Ticket</button>}
                {!item.cancelled && <button onClick={() => cancelBookings(item._id)} className='text-sm text-stone-500 sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel Workshop</button>}
                {item.cancelled && <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-700'>Workshop Cancelled</button>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default MyBooking
