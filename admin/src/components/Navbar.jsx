import React, { useState } from 'react'
import { admin } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()
  const [token, setToken] = useState(true) // State to manage token (or user session)


  return (
    <div className="flex items-center justify-between text-xs lg:text-sm py-4 mb-0 border-b border-gray-300">
      {/* Logo Section */}
      <img onClick={() => navigate('/')} className="mx-8 w-32 lg:w-52 cursor-pointer " src={admin.logo} alt="" />

      {/* Profile and Dropdown Section */}
      <div className="flex items-center gap-1 cursor-pointer group relative mx-[8%]">

        <img className="w-10 rounded-full" src={admin.profile} alt="Profile" />
        <img className="w-5" src={admin.dropdown_icon} alt="Dropdown Icon" />

        {/* Dropdown Menu */}
        <div className="absolute top-14 right-0 text-sm lg:text-base font-medium text-gray-600 z-20 hidden group-hover:block">
          <div className="min-w-48 bg-stone-50 rounded shadow-lg flex flex-col gap-4 p-4">
            <p onClick={() => { setToken(false) 
                navigate('/login') // Redirect to login page after logout 
                }} className="hover:text-black cursor-pointer">Logout</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
