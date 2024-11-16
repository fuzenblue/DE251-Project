import React from 'react'
import ImageServiceCard from './ImageServiceCard.jsx'
import SmallImgServiceCard from './SmallImgServiceCard.jsx'

const DiscoverService = () => {
  return (
    <div className='bg-light-gray items-center text-center py-8 justify-center'>
      <div className='gap-4'>
        <p className='text-sm md:text-lg font-bold text-dark-green lg:mb-3'>Our Farm Services</p>
        <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold lg:font-semibold text-dark-brown mb-4'>Discover the 
          <span className='text-accent'> Best of </span>
            Our <span className='text-primary'>Pineapple</span> Farm
        </h2>
        <div className='flex flex-row justify-center text-start font-light gap-4'>
          <p className='w-full px-[10%] lg:w-1/3 lg:px-0'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
          <p className='hidden lg:block lg:w-1/3'>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Nullam dictum felis eu pede mollis pretium.</p>
        </div>
      </div>

      {/* Image Card */}
      <div className='px-5 py-2'>
        <ImageServiceCard />
      </div>
      <div className='block md:hidden'>
        <SmallImgServiceCard />
      </div>





    </div>
  )
}

export default DiscoverService
