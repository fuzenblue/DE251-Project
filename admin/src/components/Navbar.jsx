import React, { useContext, useState } from 'react'
import { admin } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AdminContext } from '../context/AdminContext'

const Navbar = () => {

  const navigate = useNavigate()
  const {aToken, setAToken} = useContext(AdminContext)

  const logout = () => {
    navigate('/')
    aToken && setAToken('')
    aToken && localStorage.removeItem('AToken')
  }


  return (
    <div className="flex items-center justify-between text-xs lg:text-sm py-4 mb-0 border-b border-gray-300">
      {/* Logo Section */}
      <img onClick={() => navigate('/')} className="mx-8 w-32 lg:w-52 cursor-pointer " src={admin.logo} alt="" />

      {/* Profile and Logout */}
      <div className="flex items-center gap-6 cursor-pointer group relative mx-[8%]">

        <img className="w-10 rounded-full" src={admin.profile} alt="Profile" />

        <button onClick={logout} className='btn btn-primary text-white rounded-full px-12 font-light'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
