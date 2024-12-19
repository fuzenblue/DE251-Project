import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const ProductHeader = () => {

    return (
        <div className='mx-auto md:mx-44 my-6 rounded-lg relative min-w-[340px] py-16 sm:py-36 px-8 md:px-10 lg:px-5 overflow-hidden flex items-center justify-center'>
            <div className='absolute inset-0 bg-no-repeat bg-cover'
                style={{ backgroundImage: `url(${assets.product_header})`, filter: 'blur(0.8px)', zIndex: '0' }} />

            <div className='header-contents flex flex-col items-center text-center gap-4 z-10 sm:z-0 animate-fadeIn'>
                <h2 className='text-[max(4.5vw,30px)] md:text-4xl lg:text-5xl text-white font-semibold'>
                    Explore Our <span className='text-primary bg-primary-content'>Exclusive Products</span>
                </h2>
                <p className='text-white text-base font-light hidden md:block'>
                    Dive into our unique collection of premium products crafted with care and love. Shop now and bring nature's best to your doorstep!
                </p>
                <Link to={'/all-product#all-product'}>
                    <button className='btn btn-primary text-white px-10 py-3 rounded-full font-light'>
                        Shop Now
                    </button>
                </Link>
            </div>
        </div>

    )
}

export default ProductHeader
