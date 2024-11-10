import React from 'react'
import { assets } from '../assets/assets'

const WhyChoose = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center px-4 py-72 relative bg-slate-100">
        {/* content text */}
        <div className="flex flex-col lg:w-2/5 top-36 left-80 right-0 absolute gap-4 text-center lg:text-left bg-light-gray rounded-md z-10 shadow-lg p-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-green mb-4 text-shadow-md">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            The best pineapple farm you will ever find!
          </p>
        </div>

        {/* image section */}
        <div className="items-end justify-end hidden lg:block absolute right-0 top-0 bg-blue-300">
          <img className="w-1/3 object-cover rounded-xl" src={assets.choose_us} alt=""/>
        </div>
      </div>
    </>
  )
}

export default WhyChoose