import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className="flex flex-row px-[10%] py-6 lg:px-[10%] bg-dark-green gap-6 overflow-x-auto overflow-y-hidden sm:gap-4 md:gap-6 sm:overflow-x-hidden">
        <div className="flex flex-col sm:flex-row w-[460px] items-center sm:items-start px-4 text-white sm:mb-0 mb-4 sm:mr-4">
            <img className="w-20 sm:w-16 h-auto sm:h-full mb-2 sm:mb-0" src={assets.delivery_truck} alt="" />
            <div className="card-body flex flex-col justify-center p-4 lg:text-start text-center">
                <h1 className='text-2xl font-extrabold'>Free Delivery</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row w-[460px] items-center sm:items-start px-4 text-white sm:mb-0 mb-4 sm:mr-4">
            <img className="w-16 sm:w-16 h-auto sm:h-full mb-2 sm:mb-0" src={assets.like_icon} alt="" />
            <div className="card-body flex flex-col justify-center p-4 lg:text-start text-center">
                <h1 className='text-2xl font-extrabold'>Quality Standard</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row w-[460px] items-center sm:items-start px-4 text-white sm:mb-0 mb-4">
            <img className="w-16 sm:w-16 h-auto sm:h-full mb-2 sm:mb-0" src={assets.new_product_icon} alt="" />
            <div className="card-body flex flex-col justify-center p-4 lg:text-start text-center">
                <h1 className='text-2xl font-extrabold'>Pineapple Products</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
        </div>
    </div>
  )
}

export default Banner
