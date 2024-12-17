import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { WorkshopContext } from '../context/WorkshopContext'

import { admin } from '../assets/assets.js'
import { AppContext } from '../context/AppContextProvider.jsx'

const Dashboard = () => {

  const { aToken } = useContext(AdminContext)
  const { cancelBooking, dashData, getDashData } = useContext(WorkshopContext)
  const { slotDateFormat } = useContext(AppContext)

  // const [showDetails, setShowDetails] = useState(false)


  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  }, [aToken])

  return dashData && (
    <div className='px-8 w-full bg-gray-50 pt-8 '>
      <div className='m-5'>
        <div className="bg-gradient-to-r from-orange-500 to-indigo-500 text-white p-6 rounded-lg shadow mb-5">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="my-2">Welcome back! Here is your business performance overview.</p>
        </div>


        <div className='px-2 flex flex-wrap gap-3'>
          <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
            <img className='w-14' src={admin.money_icon} alt="" />
            <div>
              <p className='text-xl text-gray-600 font-semibold'>{dashData.totalRevenue}</p>
              <p className='text-gray-400'>Revenue</p>
            </div>
          </div>

          <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
            <img className='w-14' src={admin.workshop_icon} alt="" />
            <div>
              <p className='text-xl text-gray-600 font-semibold'>{dashData.totalWorkshops}</p>
              <p className='text-gray-400'>Workshops</p>
            </div>
          </div>

          <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
            <img className='w-14' src={admin.ticket_icon} alt="" />
            <div>
              <p className='text-xl text-gray-600 font-semibold'>{dashData.totalBookings}</p>
              <p className='text-gray-400'>Booking</p>
            </div>
          </div>

          <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
            <img className='w-14' src={admin.user_icon} alt="" />
            <div>
              <p className='text-xl text-gray-600 font-semibold'>{dashData.totalUsers}</p>
              <p className='text-gray-400'>Member</p>
            </div>
          </div>
        </div>
      </div>

      {/* Last Booking */}
      <div className='mx-5 bg-white'>
        <div className='flex items-center gap-3 px-4 py-4 mt-1 rounded-t border'>
          <img className='w-8' src={admin.pocket_icon} alt="" />
          <p className='font-semibold'>Last Bookings</p>
        </div>

        <div className='pt-4 border border-t-0 max-h-72 overflow-y-scroll'>
          {
            dashData.latestBookings.map((item, index) => (

              <div className='flex items-center px-6 py-3 gap-3 hover:bg-gray-100' key={index}>
                <img className='w-12 h-12 rounded-full object-cover' src={item.workshopData.workshopImg} alt="" />
                <div className='flex-1 text-sm'>
                  <p className='text-gray-600 font-medium'>{item.workshopData.name}</p>
                  <p className='text-gray-800'>{slotDateFormat(item.slotDate)}</p>
                </div>
                <div className='flex-1 text-sm w-4 items-center text-start justify-start'>
                  <p>x{item?.workshopData?.slots_booked[item?.slotDate]?.reverse().find((slot) => slot.slotTime === item?.slotTime)?.ticketCount}</p>
                </div>
                <div className='text-center items-center pr-10'>
                  {item.cancelled
                    ? <p className='text-red-400 text-sm font-medium w-8 pr-8'>Cancelled</p>
                    : <img onClick={() => cancelBooking(item._id)} className='w-8 cursor-pointer' src={admin.cancel_icon} alt="" />
                  }
                </div>

              </div>
            ))
          }
        </div>
      </div>

      {/* Popular Workshop &&  */}
      <div className='px-5 mt-5 grid grid-cols-3 gap-4 mb-8'>
        {/* Popular Workshop */}
        <div className='col-span-1 bg-white rounded-lg border'>
          <div className='flex items-center gap-3 px-4 py-4'>
            <img className='w-8' src={admin.workshop_icon} alt="" />
            <p className='font-semibold'>Popular Workshops</p>
          </div>

          <div className='px-4'>
            {dashData.popularWorkshops.map((item, index) => (
              <div key={index} className='flex items-center py-2 border-b'>
                <img src={item.image} alt={item.workshopName} className='w-12 h-12 rounded-full mr-4' />
                <div>
                  <p className='font-medium'>{item.workshopName}</p>
                  <p className='text-gray-600'>{item.count} bookings</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Membership */}
        <div className='col-span-2 bg-white rounded-lg border max-h-[388px] overflow-y-scroll'>
          <div className='flex items-center gap-3 px-4 py-4'>
            <img className='w-8' src={admin.user_icon} alt="" />
            <p className='font-semibold'>All User</p>
          </div>

          <div className="px-6 space-y-4">
            {[...new Map(dashData.latestBookings.map((booking) => [booking.userData.email, booking])).values(),].map((booking, index) => (
              <div key={index} className="flex items-center space-x-4 border-b pb-2 last:border-b-0">
                <img src={booking.userData?.image} alt='' className="w-12 h-12 rounded-full object-cover" />
                <div className='flex items-center gap-8 px-4 justify-center'>
                  <p className="w-36 font-medium text-gray-800">{booking.userData.name}</p>
                  <p className="w-36 text-sm text-gray-500">{booking.userData.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  )
}

export default Dashboard