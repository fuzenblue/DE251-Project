import React from 'react'
import { admin } from '../assets/assets'

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <img className='logo' src={admin.logo} alt="" />
        <img className='profile' src={admin.logo} alt="" />
      </div>
    </div>
  )
}

export default Navbar
