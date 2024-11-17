import React from 'react'
import { fame } from '../assets/fame'

const MyProfile = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
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
            <button className="btn btn-primary w-full py-3 px-6 rounded-full">
              My Workshop
            </button>
            <button className="btn btn-primary w-full py-3 px-6 rounded-full">
              My Orders
            </button>
            
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        {/* Your main content goes here */}
      </div>
    </div>
  )
}

export default MyProfile
