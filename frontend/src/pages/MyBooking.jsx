import React, { useContext, useState } from 'react'
import MyProfileSideBar from '../components/MyProfileSideBar'
import { assets } from '../assets/assets'
import { ProfileContext } from '../context/ProfileContext'

const MyBooking = () => {
  
  const { savedProfile } = useContext(ProfileContext)


  return (
    <div className="min-h-screen flex">
    {/* Sidebar */}
    <MyProfileSideBar profile={ savedProfile } /> {/* Pass profile to sidebar */}

    {/* Main Content Area */}
    <div className="flex-1 p-8 bg-gray-50">
      <h2 className="text-left text-2xl font-bold text-gray-800 mb-6">My Orders</h2>
      <div className="flex flex-col gap-4 m-4">
          <div className="flex items-center justify-between mx-8 p-4 border border-gray-300 rounded-lg bg-white">
              <img src={assets.profile_pic} alt="" className="w-12 h-12" />
              {/* Workshop Name */}
              <p className="flex-1 text-sm text-gray-600 mx-4"> workshop1</p>
              {/* Workshop price */}
              <p className="text-gray-700 font-medium">245.00 </p>
              {/* Number of members */}
              <p className="text-gray-600">Items: 3</p>
              {/* Workshop total price */}
              <p className="text-gray-700 font-medium">3 x 245.00 = 735.00</p>
              {/* Workshop Status */}
              <p className="text-sm flex items-center">
                <span className="text-red-500 mr-1">&#x25cf;</span>
                <b>on Booking</b>
              </p>
              <button className="btn btn-outline btn-error btn-sm">get Ticket</button>
          </div>
      </div>
    </div>
  </div>
    
  )
}

export default MyBooking
