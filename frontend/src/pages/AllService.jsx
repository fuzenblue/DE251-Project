import React, { useEffect } from 'react'
import ServiceHeader from '../components/ServiceHeader'
import ImageServiceCard from '../components/ImageServiceCard'
import SmallImgServiceCard from '../components/SmallImgServiceCard'
import WorkshopDisplay from '../components/WorkshopDisplay'
import { useLocation } from 'react-router-dom'
import { card } from '../assets/assets'

const AllService = () => {

  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  return (
    <div>
      <ServiceHeader />

      {/* Image Card */}
      <div className='px-5 pt-2'>
        <ImageServiceCard />
      </div>
      <div className='block md:hidden'>
        <SmallImgServiceCard />
      </div>

      <div id='all-workshop' className='items-center mt-5 md:mt-[-14%] text-center'>
        <h2 className='text-accent font-bold text-xl md:text-3xl'>ALL WORKSHOP</h2>
        <p className='hidden md:flex text-dark-brown font-normal text-md md:mx-[15%]'>Explore a variety of hands-on experiences at our farm, from pineapple planting to eco-friendly crafting. Filter by category, date, or skill level to find the perfect workshop that suits your interests. Join us for an unforgettable learning journey at Pineapple-Slice Farm!</p>

        <div className="mx-[12%]">
            <WorkshopDisplay />
        </div>
      </div>

      <div id='product-deli' className='bg-dark-green p-4 lg:p-8 mt-[-30px]'>
        <h2 className='font-semibold text-center text-white text-4xl mb-6'>Product Delivery Service</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-2 md:mx-[12%]'>

          <div className='bg-cover bg-center p-5 text-white flex flex-col items-center' 
               style={{ backgroundImage: `url(${card.fresh_card})` }}>

            <img src={card.fresh_icon} alt='Icon' className='w-24 h-auto' />
            <h2 className='text-2xl pt-2 font-bold'>Fresh from the Farm</h2>
            <p className='hidden md:block font-light text-sm text-center mt-2'>Harvested and packed at peak freshness for your enjoyment</p>
          </div>

          <div className='bg-cover bg-center p-5 text-white flex flex-col items-center' 
               style={{ backgroundImage: `url(${card.eco_card})` }}>

            <img src={card.eco_icon} alt='Icon' className='w-24 h-auto' />
            <h2 className='text-2xl pt-2 font-bold'>Eco-Friendly Packaging</h2>
            <p className='hidden md:block font-light text-sm text-center mt-2'>Delivered in sustainable packaging, straight from the farm</p>
          </div>

          <div className='bg-cover bg-center p-5 text-white flex flex-col items-center' 
               style={{ backgroundImage: `url(${card.deli_card})` }}>

            <img src={card.deli_icon} alt='Icon' className='w-24 h-auto' />
            <h2 className='text-2xl pt-2 font-bold'>Doorstep Delivery</h2>
            <p className='hidden md:block font-light text-sm text-center mt-2'>Convenient and quick delivery right to your home</p>
          </div>
        </div>
      </div>

      <div id='cafe-section' className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-6 bg-white mx-[10%]">
        {/* Section Left */}
        <div className="col-span-2 space-y-4">
          <h2 className="md:px-4 xl:px-8 text-3xl md:text-6xl font-bold text-dark-green">Café & Restaurant</h2>
          <p className="md:px-4 xl:px-12 text-base md:text-lg text-orange-600 capitalize">
            Enjoy delicious meals and drinks featuring fresh pineapple <br /> and other farm-to-table ingredients at our cozy café.
          </p>
          {/* Left Images */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            <img src={card.cafe_img_l} alt=""/>
            <img src={card.cafe_img_c} alt=""/>
          </div>
        </div>

        {/* Section Right */}
        <div className='hidden md:flex'>
          <img src={card.cafe_img_r} alt="Drinks" className="w-full" />
        </div>

        {/* Small size Device */}
        <div className='w-[120%] grid grid-cols-3 md:hidden'>
          <img src={card.cafe_img_l} alt="" />
          <img src={card.cafe_img_c} alt="" />
          <img src={card.cafe_img_r} alt="" className='w-[80%]' />
        </div>
      </div>


    </div>
  )
}

export default AllService
