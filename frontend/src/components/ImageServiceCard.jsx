import React from 'react'
import { Link } from 'react-router-dom'
import { card } from '../assets/assets'


const ImageServiceCard = () => {

  return (
    <div className='hidden md:flex justify-center items-center w-full pt-5'>
      <div className='grid grid-rows-3 grid-flow-col w-3/4 gap-0'>
        {/* Workshop Card */}
        <div className='row-span-3 flex items-start justify-center relative'>
          <Link to='/all-service#all-workshop'>
            <img className='object-contain w-full' src={card.workshop_card} alt='Image 01' />
          </Link>
          <div className='absolute flex flex-col items-center justify-center top-[40%] xl:top-[50%] left-5'>
            <h1 className='md:text-4xl lg:text-5xl font-semibold mb-2 text-light-gray hover:text-primary'>Workshop</h1>
          <Link to='/all-service#all-workshop'>
            <button className='btn btn-primary font-normal text-white px-8 xl:px-16 hover:btn-outline'><p>Discover More</p></button>
          </Link>
          </div>
        </div>

        {/* Pineapple Products and Café */}
        <div className='col-span-2 grid grid-cols-2 gap-0'>
          <div className='relative flex justify-center'>
            <Link to='/all-service#product-deli'>
              <img className='object-contain w-full' src={card.product_card} alt='Image 04' />
            </Link>
            <div className='absolute flex items-center justify-center bottom-5 right-5'>
              <h2 className='md:text-3xl lg:text-5xl font-semibold text-end text-light-gray hover:text-primary-content'>Pineapple <br /> Products</h2>
            </div>
          </div>
          <div className='relative flex justify-center'>
            <Link to='/all-service#cafe-section'>
              <img className='object-contain w-full' src={card.cafe_card} alt='Image 04' />
            </Link>
            <div className='absolute flex items-center justify-center top-5 right-8'>
              <h2 className='md:text-3xl lg:text-4xl font-semibold text-end text-light-gray hover:text-primary'>Café & Restaurant</h2>
            </div>
          </div>
        </div>

        {/* Product Delivery Service */}
        <div className='row-span-2 col-span-2 flex items-start justify-center relative'>
          <Link to='/all-service#product-deli'>
            <img className='object-contain w-full' src={card.delivery_card} alt='Image 04' />
          </Link>
          <div className='absolute items-end justify-end top-5 right-8'>
            <h2 className='md:text-3xl lg:text-4xl font-semibold text-light-gray hover:text-primary'>Product Delivery Service</h2>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ImageServiceCard
