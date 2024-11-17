import React from 'react'
import ServiceHeader from '../components/ServiceHeader'
import ImageServiceCard from '../components/ImageServiceCard'
import SmallImgServiceCard from '../components/SmallImgServiceCard'
import WorkshopDisplay from '../components/WorkshopDisplay'

const AllService = () => {
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

      <div>
        <h2>ALL WORKSHOP</h2>
        <p>Explore a variety of hands-on experiences at our farm, from pineapple planting to eco-friendly crafting. Filter by category, date, or skill level to find the perfect workshop that suits your interests. Join us for an unforgettable learning journey at Pineapple-Slice Farm!</p>
        <div>
            category
        </div>
        <div>
            <WorkshopDisplay />
        </div>
      </div>

      <div className='bg-dark-green'>
        <h2>Product Delivery Service</h2>
        <div>
            card*3
        </div>
      </div>

      <div>
        <div>
            <h2>Café & Restaurant</h2>
            <p>Enjoy delicious meals and drinks featuring fresh pineapple and other farm-to-table ingredients at our cozy café.</p>

            <div>
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
        <div>
            <img src="" alt="" />
        </div>
      </div>

    </div>
  )
}

export default AllService
