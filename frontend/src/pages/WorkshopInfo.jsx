import React from 'react'

const WorkshopInfo = () => {


  return (
    <div className=' px-5 py-5'>
        {/* Image */}
        <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
                <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" className="w-full" />
            </div>
            <div id="item2" className="carousel-item w-full">
                <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp" className="w-full" />
            </div>
            <div id="item3" className="carousel-item w-full">
                <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp" className="w-full" />
            </div>
            <div id="item4" className="carousel-item w-full">
                <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp" className="w-full" />
            </div>
            <div className="flex  justify-center gap-2 py-2">
                <a href='#item1' className="btn btn-xs">1</a>
                <a href='#item2' className="btn btn-xs">2</a>
                <a href='#item3' className="btn btn-xs">3</a>
                <a href='#item4' className="btn btn-xs">4</a>
            </div>
        </div>

        {/* Info */}
        <div>
            <div>
                <h1>Workshop Title</h1>
                <h3>Price</h3>
            </div>

            <div>
                {/* description */}
                <div>

                </div>
                {/* booking slots */}
                <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
                    <p>Booking slots</p>
                    {/* <div className='flex gap-3 items-center w-full overflow-x-scroll-0 mt-4'>
                    {
                        docSlots.length ? docSlots.map((item, index) => (
                        <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
                            <p>{item[0] && dayOfWeek[item[0].datetime.getDay()]}</p>
                            <p>{item[0] && item[0].datetime.getDate()}</p>
                        </div>
                        )) : (
                        <p className='text-gray-400'>No available slots. Please choose another day or the next available date.</p>
                        )
                    }
                    </div> */}

                    <div className='flex items-center gap-3 w-full overflow-x-scroll-0 mt-4'>
                        {docSlots.length > 0 ? (
                            docSlots[slotIndex].map((item, index) => (
                                item.time.includes("No available slots") ? (
                                    <p className=' font-medium text-red-500 ' key={index}>
                                        {item.time} {/* แสดงข้อความว่าไม่มีช่วงเวลา */}
                                    </p>
                                ) : (
                                    <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
                                        {item.time} - {item.endTime} 
                                    </p>
                                )))) : ( <p className='text font-light text-gray-400'>Loading...</p> )
                        }
                    </div>
                    
                    <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an Appointment</button>
                </div>
            </div>
        </div>

        {/* relate workshop */}
        <div>

        </div>
    </div>
  )
}

export default WorkshopInfo
