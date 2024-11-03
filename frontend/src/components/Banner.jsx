import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className="flex w-full flex-col lg:flex-row mt-4 gap-2">
        <div className="card card-side rounded-xl flex h-32 flex-grow items-start px-4 bg-dark-green text-white">
            <img className="w-20 h-full" src={assets.delivery_truck} alt="" />
            <div className=" card-body flex flex-col justify-center p-4">
                <h1 className='text-2xl font-extrabold'>Free Delivery</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
        </div>
        <div className="card card-side rounded-xl flex h-32 flex-grow items-start px-4 bg-dark-green text-white">
            <img className="w-16 h-full" src={assets.like_icon} alt="" />
            <div className=" card-body flex flex-col justify-center p-4">
                <h1 className='text-2xl font-extrabold'>Quality Standard</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
        </div>
        <div className="card card-side rounded-xl flex h-32 flex-grow items-start px-4 bg-dark-green text-white">
            <img className="w-16 h-full" src={assets.new_product_icon} alt="" />
            <div className=" card-body flex flex-col justify-center p-4">
                <h1 className='text-2xl font-extrabold'>Pineapple Products</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
        </div>
    </div>
  )
}

export default Banner
