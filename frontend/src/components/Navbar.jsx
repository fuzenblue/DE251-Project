import React, { useState } from 'react'
import {assets} from '../assets/assets' 
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
      <ul className='hidden md:flex items-start gap-6 font-medium'>
        <NavLink to='/'>
            <li className='py-2'>HOME</li>
            <hr className='border-none outline-none h-1 rounded bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/all-service'>
            <li className='py-2'>SERVICE</li>
            <hr className='border-none outline-none h-1 rounded bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/all-product'>
            <li className='py-2'>PRODUCT</li>
            <hr className='border-none outline-none h-1 rounded bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
            <li className='py-2'>ABOUT</li>
            <hr className='border-none outline-none h-1 rounded bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/blogs'>
            <li className='py-2'>BLOG</li>
            <hr className='border-none outline-none h-1 rounded bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
            <li className='py-2'>CONTACT</li>
            <hr className='border-none outline-none h-1 rounded bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {/* Login / Sign up Button */}
        {
            token 
            ? <div className='flex items-center gap-1 cursor-pointer group relative'>
                <img className='w-10 rounded-full' src={assets.profile_pic} alt="" />
                <img className='w-5' src={assets.dropdown_icon} alt="" />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p> 
                        <p onClick={() => navigate('my-order')} className='hover:text-black cursor-pointer'>My Order</p>
                        <p onClick={() => navigate('my-booking')} className='hover:text-black cursor-pointer'>My Booking</p> <hr />
                        <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>
            </div> // if login
            : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light md:block'>Create Account</button>
        }

        <img onClick={() => setShowMenu(true)} className='mt-3 w-8 md:hidden' src={assets.menu_icon} alt="" />
        {/* Mobile Menu */}
        <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-40' src={assets.logo} alt="" />
            <img className='w-5' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-4 px-5 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/all-service'><p className='px-4 py-2 rounded inline-block'>SERVICE</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/all-product'><p className='px-4 py-2 rounded inline-block'>PRODUCT</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/blogs'><p className='px-4 py-2 rounded inline-block'>BLOG</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
