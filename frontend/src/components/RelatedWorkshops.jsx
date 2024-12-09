import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

// ยังไม่ได้รวมใน workshop info + ยังไม่ได้เรียบเรียงใหม่ ต้องหาข้อมูลมาใส่ก่อน

const RelatedWorkshops = ({category, workshopId}) => {

    const { workshops, currencySymbol } = useContext(AppContext)
    const navigate = useNavigate()

    const [relWorkshop, setRelWorkshop] = useState([])

    useEffect(() => {
        if (workshops.length > 0 && category) {
            const workshopData = workshops.filter((workshop) => workshop.category === category && workshop._id != workshopId)
            setRelWorkshop(workshopData)
        }

    }, [workshops, category, workshopId])   

  return (
    <div className='flex flex-col items-center gap-4 text-gray-900 my-16 mx-[12%] '>
        <h1 className='text-3xl font-medium'>Top Workshop to Booking</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted Workshop.</p>
        <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {/* ให้แสดงที่แนะนำ 5 workshop ในหมวดเดียวกัน */}
            {relWorkshop.slice(0,5).map((workshops, index) => (
                // {navigate(`/all-service/${workshops._id}`); scrollTo(0,0)} ตั้งให้กดแล้วเลื่อนขึ้นด้านบน
                <div onClick={() => {navigate(`/all-service/${workshops._id}`); scrollTo(3,0)}} 
                     className='border shadow-sm border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='w-full h-[14rem] object-cover' src={workshops.workshopImg} alt="" />
                    <div className='p-4'>
                        <p className='text-gray-900 text-lg font-medium'>{workshops.name}</p>
                        <span className="text-primary font-semibold">{currencySymbol} {workshops.price}</span>
                        <p className='text-gray-600 text-sm'>{workshops.category}</p>
                        <p className='text-gray-900 text-md font-xs'>{workshops.about}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={() => {navigate('/all-service#all-workshop'); scrollTo(0,0)}} className='bg-orange-50 text-gray-600 px-12 py-3 rounded-full mt-5'>more</button>
    </div>
  )
}

export default RelatedWorkshops
