import React from 'react'
import { assets } from '../assets/assets'

const ServiceHeader = () => {
  return (
      <div className='flex flex-col md:flex-row mx-[10%] '>
        <div className='flex flex-col w-full md:w-1/3 text-start pl-0 md:pl-24 gap-4 py-4'>
            <h1 className='text-4xl lg:text-8xl font-bold text-accent'>SERVICE</h1>
            <p className='text-md text-dark-brown'> This section features cards for each service provided at the farm, allowing users to explore different activities and experiences. Each card will lead to its respective component for more details. The services displayed include</p>
        </div>
        <div className='hidden md:flex items-end w-2/3 xl:mt-[-5%] xl:mb-[-10%]'>
            <img className='w-full items-end object-cover' src={assets.service_img} alt="" />
        </div>
      </div>
  )
}

export default ServiceHeader
