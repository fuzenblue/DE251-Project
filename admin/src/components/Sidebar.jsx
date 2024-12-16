import React from 'react'
import { NavLink } from 'react-router-dom'
import { admin } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className="w-[20%] min-h-screen border border-gray-400 border-t-0 text-md hidden lg:flex">
      <div className="pt-12 pl-5 flex flex-col gap-3">
        <div>
          <NavLink
            to="/admin-dashboard" className={({ isActive }) => `flex pl-4 items-center gap-3 p-4 rounded-l-md pb-4 cursor-pointer 
            ${isActive ? 'bg-orange-100 border-r-4 border-r-primary' : 'border-r-0'}`}>
            <img src={admin.dashboard_icon} alt="" />
            <p className="hidden lg:block pl-3">Dashboard</p>
          </NavLink>
        </div>

        <div>
          <div className="collapse-title items-center justify-between hidden lg:flex peer-checked:bg-orange-100">
            <img src={admin.booking_icon} className="" />
            <p className='pl-6'>Workshop Management</p>
          </div>
          <div className='pl-12'>
            <NavLink
              to="/workshop-add"
              className={({ isActive }) =>
                `flex items-center p-2 pl-10 rounded-l-md cursor-pointer gap-3 my-2 ${isActive ? 'bg-orange-100 border-r-4 border-r-primary border border-gray-400' : 'border border-gray-400 border-r-0'}`}>
              <p className="hidden md:block">Add Workshop</p>
            </NavLink>
            <NavLink
              to="/workshop-list"
              className={({ isActive }) =>
                `flex items-center p-2 pl-10 rounded-l-md cursor-pointer gap-3 my-2 ${isActive ? 'bg-orange-100 border-r-4 border-r-primary border border-gray-400' : 'border border-gray-400 border-r-0'}`}>
              <p className="hidden md:block">List of Workshop</p>
            </NavLink>
            <NavLink
              to="/workshop-booking"
              className={({ isActive }) =>
                `flex items-center p-2 pl-10 rounded-l-md cursor-pointer gap-3 my-2 ${isActive ? 'bg-orange-100 border-r-4 border-r-primary border border-gray-400' : 'border border-gray-400 border-r-0'}`}>
              <p className="hidden md:block">Booking</p>
            </NavLink>
            <NavLink
              to="/workshop-completed"
              className={({ isActive }) =>
                `flex items-center p-2 pl-10 rounded-l-md cursor-pointer gap-3 my-2 ${isActive ? 'bg-orange-100 border-r-4 border-r-primary border border-gray-400' : 'border border-gray-400 border-r-0'}`}>
              <p className="hidden md:block">Completed</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
