import React, { useContext, useState } from 'react'
import MyProfileSideBar from '../components/MyProfileSideBar'
import { assets } from '../assets/assets'
import { ProfileContext } from '../context/ProfileContext'

const MyBooking = () => {
  
  const { savedProfile } = useContext(ProfileContext)


  return (
    <div className="p-6 bg-gray-50">
      <MyProfileSideBar profile={savedProfile} />
      <h2 className="text-left text-2xl font-bold text-gray-800 mb-6">My Orders</h2>
      <div className="flex flex-col gap-4">
          <div
            className="flex items-center justify-between p-4 border border-gray-300 rounded-lg bg-white">
            <img src={assets.profile_pic} alt="" className="w-12 h-12" />
            <p className="flex-1 text-sm text-gray-600 mx-4"> workshop1 x 1 people</p>
            <p className="text-gray-700 font-medium">245.00</p>
            <p className="text-gray-600">Items: 1</p>
            <p className="text-sm flex items-center">
              <span className="text-red-500 mr-1">&#x25cf;</span>
              <b>on Booking</b>
            </p>
            <button className="btn btn-outline btn-error btn-sm">Track Order</button>
          </div>
      </div>
    </div>
  )
}

export default MyBooking
