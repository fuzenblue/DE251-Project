import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Welcome = () => {
  return (
    <>
        <div id='welcome' className="flex flex-col items-center px-6 lg:flex-row lg:px-[10%] md:px-8 sm:px-4">
            <div className="w-full lg:w-3/5 text-white text-center lg:text-start mb-6 lg:mb-0 md:mb-1">
                <h3 className='text-base text-dark-green font-medium my-4'>Welcome to Pineapple Farm</h3>
                <h1 className='text-3xl text-dark-brown font-extrabold mb-4 lg:flex lg:flex-col'>
                    Healthy & Quality <span className='text-primary'>Pineapples,</span> Grown with Care
                </h1>
                <Link to="/about">
                    <button className='btn btn-primary font-normal text-white px-[20vw] lg:px-10 rounded-md ml-1'>About Us</button>
                </Link>
            </div>
            <div className="w-full lg:w-4/5 text-dark-brown mt-4 lg:mt-12 mb-2 hidden lg:block md:block">
                <p className='text-center lg:text-start'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p> <br />
                <p className='text-center lg:text-start'>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
            </div>
        </div>

        {/* card */}
        <div className="flex flex-row overflow-x-auto gap-4 px-6 lg:my-6 lg:px-[10%] lg:gap-14">
            <div className="min-h-[160px] flex flex-col rounded-md gap-2 text-center items-center py-4 min-w-[300px] lg:w-1/2"
                style={{ backgroundImage: `url(${assets.welcome_img})`, backgroundSize: 'cover' }}>
            </div>
            <div className="flex flex-col rounded-md gap-2 text-center items-center py-4 px-6 text-white bg-green-yellow min-w-[250px] lg:w-auto">
                <div className='flex flex-row items-center'>
                    <img className='w-28 sm:w-32 lg:w-28 mt-2 lg:mt-4' src={assets.pineapple_icon} alt="" />
                    <h2 className='text-4xl sm:text-5xl lg:text-7xl mt-4 lg:mt-8 font-semibold'>10+</h2>
                </div>
                <p className='mb-2 text-xs sm:text-sm lg:text-base'>Varieties of Pineapples</p>
            </div>
            <div className="flex flex-col rounded-md gap-2 text-center items-center py-4 px-6 text-white bg-green-yellow min-w-[250px] lg:w-auto">
                <div className='flex flex-row items-center'>
                    <img className='w-28 sm:w-36 lg:w-28 mt-2 lg:mt-4' src={assets.pineapple_icon} alt="" />
                    <h2 className='text-4xl sm:text-5xl lg:text-7xl mt-4 lg:mt-8 font-semibold'>31+</h2>
                </div>
                <p className='mb-2 text-xs sm:text-sm lg:text-base'>Acres of Lush Farmland</p>
            </div>
        </div>
    </>
  )
}

export default Welcome
