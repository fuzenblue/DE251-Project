import React from 'react'
import { assets } from '../assets/assets'

const WhyChoose = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center px-4 py-4 lg:py-80 relative bg-slate-100 overflow-hidden">
        {/* content text */}
        <div className="flex flex-col lg:w-2/5 lg:top-36 lg:left-48 lg:right-0 lg:absolute gap-2 text-center lg:text-left bg-light-gray rounded-md z-10 shadow-lg px-3 lg:px-12 py-3 lg:py-6">
          <h3 className="text-lg font-bold text-black lg:mb-4 text-shadow-md">Why Choose Us</h3>
          <h1 className="text-2xl lg:text-4xl font-bold lg:font-semibold text-dark-green mb-2">The best <span className='text-primary'>pineapple</span>  farm <br /> you will ever find!</h1>
          <p className='hidden lg:block text-dark-brown'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

          <div>
            <div className='flex flex-row items-start'>
              <img className='w-[10%] mr-4 mt-4' src={assets.check_icon} alt="" />
              <div className='flex-grow gap-8'>
                <h2 className=" text-3xl lg:text-4xl font-semibold text-primary">Fresh from the</h2>
                <p className='hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </div>
          </div>
        </div>

        {/* image section */}
        <div className="hidden lg:block absolute top-0 right-[-20%] overflow-hidden">
          <img className="w-[75%] object-cover rounded-xl" src={assets.choose_us} alt=""
          />
        </div>
    </div>
  )
}

export default WhyChoose