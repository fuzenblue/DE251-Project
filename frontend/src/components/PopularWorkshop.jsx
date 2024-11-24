import React from 'react'
import { assets, card } from '../assets/assets'

const PopularWorkshop = () => {
  return (
    <div className='mt-8'>
        <div className="relative lg:mt-[-15%] px-4 py-auto bg-cover bg-center pb-[13%]" style={{ backgroundImage: `url(${assets.popular_bg})`, backgroundAttachment: 'fixed' }}>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:pl-[10%] md:mx-4 pt-12 md:w-5/6'>
            <div className='order-2 md:order-1 bg-secondary p-4 rounded items-center text-center lg:text-start shadow-md flex flex-col lg:flex-row gap-4'>
              <img className='w-28' src={card.planting_icon} alt="" />
              <div className='flex flex-col text-white'>
                <h2 className='text-2xl font-bold text-white'>Pineapple <br /> Planting Masterclass</h2>
                <p className='text-base font-normal text-white hidden lg:block'>Learn the essentials of planting and harvesting pineapples, and take home your very own pineapple plant!</p>
              </div>
            </div>
            <div className='order-1 md:order-2'>
              <h3 className='text-xl font-bold text-white'>Popular Workshops</h3>
              <h1 className='text-3xl font-bold text-white'>our most popular workshops that you won’t want to miss!</h1>

              <p className='text-2xl font-base font-light text-white'>Spaces are limited, so sign up early to secure your spot in these unforgettable workshops!</p>
              <button>Discover More</button>
            </div>
          </div>
        </div>

        <div className='relative grid grid-cols-1 md:grid-cols-4 px-4 gap-2 mt-[-13%] md:pt-4 md:mx-[8%]'>
          <div></div>
          <div className='bg-dark-green p-4 rounded shadow-md text-center md:w-5/6 justify-items-center'>
            <img className='w-28' src={card.preserve_icon}alt="" />
            <h2 className='text-2xl font-bold text-white'>Pineapple <br /> Preservation <br /> Techniques</h2>
          </div>
          <div className='bg-dark-brown p-4 rounded shadow-md text-center md:w-5/6 justify-items-center'>
            <img className='w-28' src={card.craft_icon} alt="" />
            <h2 className='text-2xl font-bold text-white'>Creative <br /> Pineapple Craft <br /> Workshop</h2>
          </div>
          <div className='bg-green-yellow p-4 rounded shadow-md text-center md:w-5/6 justify-items-center'>
            <img className='w-28' src={card.chef_icon} alt="" />
            <h2 className='text-2xl font-bold text-white'>Pineapple <br /> Cooking <br /> Workshop</h2>
          </div>
        </div>
    </div>
  )
}

export default PopularWorkshop
