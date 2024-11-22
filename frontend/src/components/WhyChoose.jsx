import React from 'react'
import { assets } from '../assets/assets'

const WhyChoose = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row items-center px-6 py-4 lg:py-[340px] relative overflow-hidden'>
        {/* content text */}
        <div className='flex flex-col w-full lg:w-[53%] xl:w-[45%] lg:top-8 lg:left-24 xl:left-44 xl:top-12 lg:right-0 lg:absolute gap-2 text-center lg:text-left bg-light-gray rounded-md z-10 shadow-lg px-3 lg:px-5 xl:px-8 py-3 lg:py-6'>
          <h3 className='text-sm md:text-lg font-bold text-black lg:mb-3'>Why Choose Us</h3>
          <h1 className='text-xl md:text-4xl font-bold lg:font-semibold text-dark-green mb-2'>The best <span className='text-primary'>pineapple</span>  farm <br /> you will ever find!</h1>
          <p className='hidden lg:block text-dark-brown'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

          <div className='block md:flex lg:block'>
            <div className='flex flex-row items-start md:mt-2 gap-2 lg:gap-4'>
              <img className='w-[8%] md:w-[30%] lg:w-[8%] xl:w-[6%] mx-1 mt-1 md:mt-5 lg:mt-4' src={assets.check_icon} alt='' />
              <div className='flex-row gap-8'>
                <h2 className='text-lg text-start lg:text-3xl font-semibold text-dark-brown lg:text-primary'>Fresh from the Farm</h2>
                <p className='hidden lg:block text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </div>
            <div className='flex flex-row items-start mt-2 gap-2 lg:gap-4'>
              <img className='w-[8%] md:w-[25%] lg:w-[8%] xl:w-[6%] mx-1 mt-1 md:mt-5 lg:mt-4' src={assets.check_icon} alt='' />
              <div className='flex-row gap-8'>
                <h2 className='text-lg text-start lg:text-3xl font-semibold text-dark-brown lg:text-primary'>Premium Pineapple Products</h2>
                <p className='hidden lg:block text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </div>
            <div className='flex flex-row items-start mt-2 gap-2 lg:gap-4'>
              <img className='w-[8%] md:w-[20%] lg:w-[8%] xl:w-[6%] mx-1 mt-1 md:mt-5 lg:mt-4' src={assets.check_icon} alt='' />
              <div className='flex-row gap-8'>
                <h2 className='text-lg text-start lg:text-3xl font-semibold text-dark-brown lg:text-primary'>Innovative Agricultural Experiences</h2>
                <p className='hidden lg:block text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </div>
            <div className='flex flex-row items-start mt-2 gap-2 lg:gap-4'>
              <img className='w-[8%] md:w-[20%] lg:w-[8%] xl:w-[6%] mx-1 mt-1 md:mt-5 lg:mt-4' src={assets.check_icon} alt='' />
              <div className='flex-row gap-8'>
                <h2 className='text-lg text-start lg:text-3xl font-semibold text-dark-brown lg:text-primary'>Exclusive Pineapple Farm Tours</h2>
                <p className='hidden lg:block text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </div>
          </div>
        </div>

        {/* image section */}
        <div className='hidden lg:block absolute top-0 lg:right-[-50%] xl:right-[-20%] overflow-hidden'>
          <img className='w-4/6 xl:w-[75%] object-cover rounded-xl' src={assets.choose_us} alt=''/>
        </div>
    </div>
  )
}

export default WhyChoose