import React from 'react'
import { assets } from '../assets/assets'

const BestSellProduct = () => {
  return (
    <div className='bg-blue-200 my-2 px-[8%] py-4 items-center'>
      <div className='items-center text-center mb-2'>
        <p className='text-dark-green text-xs font-semibold'>Our Product</p>
        <h2 className='text-dark-brown text-lg font-semibold'>Best Seller Product You Might Love</h2>
      </div>

      <div className='flex flex-row gap-3 overflow-x-scroll items-center text-center'>
        <div className='rounded-lg px-20 py-28 hidden md:block' style={{ backgroundImage: `url(${assets.promo_card})`, backgroundSize: 'fill' }}>
          <h3>Discover Our <span>product</span></h3>
          <p>Taste the difference today!</p>
          <button className='btn btn-primary text-sm font-light text-white rounded-md'>Shop Now</button>
        </div>

        <div className='bg-purple-300 rounded-lg px-20 py-28'>
          <img src="" alt="Product 1" />
          <div>
            <h3 className='text-dark-brown font-semibold'>Product 1</h3>
            <button className='btn btn-primary text-sm font-light text-white rounded-full px-5'>Order Now</button>
          </div>
        </div>
        <div className='bg-purple-300 rounded-lg px-20 py-28'>
          <img src="" alt="Product 1" />
          <div>
            <h3 className='text-dark-brown font-semibold'>Product 1</h3>
            <button className='btn btn-primary text-sm font-light text-white rounded-full px-5'>Order Now</button>
          </div>
        </div>
        <div className='bg-purple-300 rounded-lg px-20 py-28'>
          <img src="" alt="Product 1" />
          <div>
            <h3 className='text-dark-brown font-semibold'>Product 1</h3>
            <button className='btn btn-primary text-sm font-light text-white rounded-full px-5'>Order Now</button>
          </div>
        </div>
        <div className='bg-purple-300 rounded-lg px-20 py-28'>
          <img src="" alt="Product 1" />
          <div>
            <h3 className='text-dark-brown font-semibold'>Product 1</h3>
            <button className='btn btn-primary text-sm font-light text-white rounded-full px-5'>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestSellProduct
