import React from 'react'
import { fame } from '../assets/fame'

const MyProfile = () => {
  return (
    <div className="">
    <div className="p-6">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        <img
          src={fame.lisa_pic}
          alt="Profile"
          className="w-28 h-28 rounded-full mb-4 object-cover"
        />
        <h2 className="text-xl font-semibold">Lisa Blackpink</h2>
      </div>

      {/* Menu Buttons */}
      <div className="space-y-3">
        <button className="btn btn-primary w-full py-3 px-6 rounded-full">
          My Profile
        </button>
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded-full py-3 px-6 font-medium transition-colors duration-200">
          My Workshop
        </button>
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded-full py-3 px-6 font-medium transition-colors duration-200">
          My Orders
        </button>
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded-full py-3 px-6 font-medium transition-colors duration-200">
          Need Help
        </button>
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded-full py-3 px-6 font-medium transition-colors duration-200">
          Sign out
        </button>
      </div>
    </div>
  </div>
  )
}

export default MyProfile
