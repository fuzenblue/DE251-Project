import React from 'react'
import { NavLink } from 'react-router-dom'
import { admin } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className="w-[20%] min-h-screen border border-gray-400 border-t-0 text-md hidden lg:flex">
      <div className="pt-12 pl-5 flex flex-col gap-3">
        <NavLink 
            to="/admin-dashboard" className={({ isActive }) => `flex pl-4 items-center gap-3 p-2 rounded-l-md lg:rounded-tl-3xl pb-4 cursor-pointer 
            ${ isActive ? 'bg-orange-100 border-r-4 border-r-primary py-4' : 'border-r-0'}`}>
            <img src={admin.dashboard_icon} alt="" />
            <p className="hidden lg:block pl-3">Dashboard</p>
        </NavLink>

        <NavLink 
            to="/product-add" className={({ isActive }) => `lg:hidden block pl-4 items-center gap-3 p-2 rounded-l-md lg:rounded-tl-3xl pb-4 cursor-pointer 
            ${ isActive ? 'bg-orange-100 border-r-4 border-r-primary py-4' : 'border-r-0'}`}>
            <img src={admin.add_icon} alt="" />
        </NavLink>

        <NavLink 
            to="/workshop-add" className={({ isActive }) => `lg:hidden block pl-4 items-center gap-3 p-2 rounded-l-md lg:rounded-tl-3xl pb-4 cursor-pointer 
            ${ isActive ? 'bg-orange-100 border-r-4 border-r-primary py-4' : 'border-r-0'}`}>
            <img src={admin.booking_icon} alt="" />
        </NavLink>
        

        {/* Product Management */}
        <div className="collapse collapse-arrow cursor-pointer">
          <input type="checkbox" className="peer" /> {/* ใช้สำหรับเปิด/ปิดเมนู */}
          <div className="collapse-title items-center hidden lg:flex peer-checked:bg-orange-100 ">
            <img src={admin.add_icon} className="" />
            <p className='pl-6'>Product Management</p>
          </div>

          <div className="collapse-content">
            <NavLink
              to="/product-add"
              className={({ isActive }) =>
                `flex items-center p-2 pl-10 rounded-l-md cursor-pointer gap-3 my-2 ${
                  isActive ? 'bg-orange-100 border-r-4 border-r-primary border border-gray-400' : 'border border-gray-400 border-r-0'}`}>
              <p className="hidden lg:block">Add Product</p>
            </NavLink>
            <NavLink
              to="/product-list"
              className={({ isActive }) =>
                `flex items-center p-2 pl-10 rounded-l-md cursor-pointer gap-3 my-2 ${
                  isActive ? 'bg-orange-100 border-r-4 border-r-primary border border-gray-400' : 'border border-gray-400 border-r-0'}`}>
              <p className="hidden lg:block">List of Product</p>
            </NavLink>
            <NavLink
              to="/product-order"
              className={({ isActive }) =>
                `flex items-center p-2 pl-10 rounded-l-md cursor-pointer gap-3 my-2 ${
                  isActive ? 'bg-orange-100 border-r-4 border-r-primary border border-gray-400' : 'border border-gray-400 border-r-0'}`}>
              <p className="hidden lg:block">Order</p>
            </NavLink>
          </div>
        </div>

        {/* Workshop Management */}
        <div className="collapse collapse-arrow cursor-pointer">
          <input type="checkbox" className="peer" /> {/* ใช้สำหรับเปิด/ปิดเมนู */}
          <div className="collapse-title items-center justify-between hidden lg:flex peer-checked:bg-orange-100">
            <img src={admin.booking_icon} className="" />
            <p className='pl-6 xl:pl-0'>Workshop Management</p>
          </div>

          <div className="collapse-content">
            <NavLink
              to="/workshop-add"
              className={({ isActive }) =>
                `flex items-center p-2 pl-10 rounded-l-md cursor-pointer gap-3 my-2 ${
                  isActive ? 'bg-orange-100 border-r-4 border-r-primary border border-gray-400' : 'border border-gray-400 border-r-0'}`}>
              <p className="hidden md:block">Add Workshop</p>
            </NavLink>
            <NavLink
              to="/workshop-list"
              className={({ isActive }) =>
                `flex items-center p-2 pl-10 rounded-l-md cursor-pointer gap-3 my-2 ${
                  isActive ? 'bg-orange-100 border-r-4 border-r-primary border border-gray-400' : 'border border-gray-400 border-r-0'}`}>
              <p className="hidden md:block">List of Workshop</p>
            </NavLink>
            <NavLink
              to="/workshop-booking"
              className={({ isActive }) =>
                `flex items-center p-2 pl-10 rounded-l-md cursor-pointer gap-3 my-2 ${
                  isActive ? 'bg-orange-100 border-r-4 border-r-primary border border-gray-400' : 'border border-gray-400 border-r-0'}`}>
              <p className="hidden md:block">Booking</p>
            </NavLink>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Sidebar
