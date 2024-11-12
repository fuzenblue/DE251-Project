import React from 'react'
import { assets, card } from '../assets/assets'

const DiscoverService = () => {
  return (
    <div className='bg-gray-300 items-center text-center py-4 justify-center'>
      <div>
        <p>Our Farm Services</p>
        <h2>Discover the 
          <span>Best of </span>
            Our <span>Pineapple</span> Farm
        </h2>
        <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Nullam dictum felis eu pede mollis pretium.</p>
      </div>

      {/* Image Card */}

      <div className='hidden md:block'>
        <div class="grid grid-rows-3 grid-flow-col w-3/4 gap-0">
          <div class="row-span-3 flex items-start justify-center">
            <img class="object-contain" src={card.workshop_card} alt="Image 01" />
          </div>

          <div class="col-span-2 grid grid-cols-2 gap-0">
            <div class="flex items-center justify-center">
              <img class="object-contain" src={card.product_card} alt="Image 04" />
            </div>
            <div class="flex items-center justify-center">
              <img class="object-contain" src={card.cafe_card} alt="Image 04" />
            </div>
          </div>

          <div class="row-span-2 col-span-2 flex items-start justify-center ">
            <img class="object-contain" src={card.delivery_card}  alt="Image 04" />
          </div>
        </div>
      </div>






      {/* <div class="grid grid-rows-3 grid-flow-col m-10 w-3/4 gap-0">
        <div class="row-span-3 flex items-center justify-center p-0">
          <img class="w-full  object-cover" src={card.workshop_card} width="116" height="290" alt="Image 01" />
        </div>

        <div class="col-span-2 grid grid-cols-2 gap-0">
          <div class="flex items-center justify-center">
            <img class="w-full object-cover" src={card.product_card} width="232" height="155" alt="Image 04" />
          </div>
          <div class="flex items-center justify-center">
            <img class="w-full  object-cover" src={card.cafe_card} width="232" height="155" alt="Image 04" />
          </div>
        </div>

        <div class="row-span-2 col-span-2 flex items-center justify-center">
          <img class="w-full  object-cover" src={card.delivery_card} width="40" height="10" alt="Image 04" />
        </div>
      </div> */}


    </div>
  )
}

export default DiscoverService
