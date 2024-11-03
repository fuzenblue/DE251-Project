import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()

  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* ----- Left Section ----- */}
        <div>
          <img className='mb-5 w-56' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <br />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quo necessitatibus voluptas iusto sit, obcaecati dolor? Et, voluptas.</p>
        </div>

        {/* ----- Center Section ----- */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li onClick={() => navigate('/')} className='cursor-pointer'>Home</li>
            <li onClick={() => navigate('/all-service')} className='cursor-pointer'>Service</li>
            <li onClick={() => navigate('/all-product')} className='cursor-pointer'>Product</li>
            <li onClick={() => navigate('/about')} className='cursor-pointer'>About us</li>
            <li onClick={() => navigate('/blogs')} className='cursor-pointer'>Blog</li>
            <li onClick={() => navigate('/contact')} className='cursor-pointer'>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* ----- Right Section ----- */}
        <div>
          <p className='text-xl font-medium mb-5'>CONTACT</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+66-123-4567</li>
            <li>pineapple-slice@farm.com</li>
          </ul>
        </div>
      </div>

      {/* ----- Copyright Text ----- */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright © 2024 Pineapple-Slice Group - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
