import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const HomeHeader = () => {

  return (
    <div className='relative min-w-[340px] py-16 sm:py-36 px-5 md:px-10 lg:px-5 overflow-hidden flex items-center justify-center'>
        <div className='absolute inset-0 bg-no-repeat bg-cover' 
            style={{ backgroundImage: `url(${assets.header_img})`, filter: 'blur(0px)', zIndex: '0' }} />

        <div className='header-contents flex flex-col items-center text-center gap-4 z-10 sm:z-0 animate-fadeIn'>
            <h2 className='text-[max(4.5vw,30px)] md:text-4xl lg:text-5xl text-white font-semibold'>
                Experience the Taste of <span className='text-primary bg-primary-content'>Freshness</span>
            </h2>
            <p className='text-white text-base font-light hidden md:block'>
                Discover the joy of farm life with our delicious pineapples, engaging workshops, and unique products. Join us for a taste of nature!
            </p>
            <Link to={'/#welcome'}>
                <button className='btn btn-primary text-white px-10 py-3 rounded-full font-light'>
                    Discover Now
                </button>
            </Link>
        </div>
    </div>

  )
}

export default HomeHeader
