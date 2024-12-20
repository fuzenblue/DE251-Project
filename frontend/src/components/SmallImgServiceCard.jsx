import React from 'react'
import { Link } from 'react-router-dom'
import { card } from '../assets/assets'

const SmallImgServiceCard = () => {
    
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2'>
        {/* Workshop */}
        <div className='relative'>
            <Link to='/all-service#all-workshop'>
                <img className='object-cover w-full max-h-32' src={card.workshop_card} alt='Workshop' />
                <div className='absolute inset-0 flex flex-col items-center justify-center'>
                    <h1 className='text-3xl font-semibold text-white hover:text-primary'>Workshop</h1>
                </div>
            </Link>
        </div>

        {/* Pineapple Products */}
        <div className='relative'>
            <Link to='/all-product'>
                <img className='object-cover w-full max-h-32' src={card.product_card} alt='Pineapple Products' />
                <div className='absolute inset-0 flex flex-col items-center justify-center'>
                    <h1 className='text-3xl font-semibold text-white hover:text-primary'>Pineapple Products</h1>
                </div>
            </Link>
        </div>

        {/* Café & Restaurant */}
        <div className='relative'>
            <Link to='/all-service#cafe-section'>
                <img className='object-cover w-full max-h-32' src={card.cafe_sm} alt='Café & Restaurant' />
                <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30'>
                    <h1 className='text-3xl font-semibold text-white hover:text-primary'>Café & Restaurant</h1>
                </div>
            </Link>
        </div>

        {/* Product Delivery Service */}
        <div className='relative'>
            <Link to='/all-service#product-deli'>
                <img className='object-cover w-full max-h-32' src={card.delivery_sm} alt='Product Delivery Service' />
                <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30'>
                    <h1 className='text-3xl font-semibold text-white hover:text-primary'>Product Delivery Service</h1>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default SmallImgServiceCard
