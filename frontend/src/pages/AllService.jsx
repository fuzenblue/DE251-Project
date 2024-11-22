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
        <h2 className='text-accent font-bold text-xl md:text-lg'>ALL WORKSHOP</h2>
        <p className='hidden md:flex text-dark-brown font-normal text-md md:mx-[15%]'>Explore a variety of hands-on experiences at our farm, from pineapple planting to eco-friendly crafting. Filter by category, date, or skill level to find the perfect workshop that suits your interests. Join us for an unforgettable learning journey at Pineapple-Slice Farm!</p>

        <div className="mx-[12%]">
            <WorkshopDisplay />
        </div>
      </div>

      <div id='product-deli' className='bg-dark-green p-4 lg:p-8'>
        <h2 className='font-semibold text-center text-white text-xl mb-6'>Product Delivery Service</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-2 md:mx-[12%]'>

          <div className='bg-cover bg-center p-5 text-white flex flex-col items-center' 
               style={{ backgroundImage: `url(${card.fresh_card})` }}>

            <img src={card.fresh_icon} alt='Icon' className='w-24 h-auto' />
            <h2 className='text-lg font-bold'>Lorem ipsum dolor sit.</h2>
            <p className='hidden md:block text-sm text-center mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita modi cum dicta rerum maxime!</p>
          </div>

          <div className='bg-cover bg-center p-5 text-white flex flex-col items-center' 
               style={{ backgroundImage: `url(${card.eco_card})` }}>

            <img src={card.eco_icon} alt='Icon' className='w-24 h-auto' />
            <h2 className='text-lg font-bold'>Lorem ipsum dolor sit.</h2>
            <p className='hidden md:block text-sm text-center mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita modi cum dicta rerum maxime!</p>
          </div>

          <div className='bg-cover bg-center p-5 text-white flex flex-col items-center' 
               style={{ backgroundImage: `url(${card.deli_card})` }}>

            <img src={card.deli_icon} alt='Icon' className='w-24 h-auto' />
            <h2 className='text-lg font-bold'>Lorem ipsum dolor sit.</h2>
            <p className='hidden md:block text-sm text-center mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita modi cum dicta rerum maxime!</p>
          </div>
        </div>
      </div>


      <div id='cafe-section'>
        <div>
            <h2>Café & Restaurant</h2>
            <p>Enjoy delicious meals and drinks featuring fresh pineapple and other farm-to-table ingredients at our cozy café.</p>

            <div>
                <img src='' alt='' />
                <img src='' alt='' />
            </div>
        </div>
        <div>
            <img src='' alt='' />
        </div>
      </div>

    </div>
  )
}

export default AllService
