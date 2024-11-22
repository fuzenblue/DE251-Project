import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const WorkshopDisplay = () => {
  const { workshops, category_workshop, currencySymbol } = useContext(AppContext)
  const [filterWorkshop, setFilterWorkshop] = useState(workshops)
  const [showFilter, setShowFilter] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('') // เริ่มต้นเป็นค่าว่าง (แสดงทั้งหมด)

  const applyFilter = (category) => {
    if (category === selectedCategory) {
      setSelectedCategory('') // รีเซ็ตเพื่อแสดงทั้งหมด
      setFilterWorkshop(workshops) // แสดงรายการทั้งหมด
    } else {
      setSelectedCategory(category) // เลือกหมวดหมู่ใหม่
      setFilterWorkshop(workshops.filter(workshop => workshop.category === category)) // แสดงเฉพาะหมวดหมู่ที่เลือก
    }
  }
  

  return (
    <div>
      <div className='flex flex-col md:flex-row items-start gap-5 mt-5 mx-5 justify-center'>
        <button className={`flex flex-row w-full justify-start py-2 px-4 border rounded text-sm transition-all md:hidden ${showFilter ? 'bg-primary text-white' : ''}`}
          onClick={() => setShowFilter(prev => !prev)}>
          <img className='mr-4 w-5' src={assets.filter_icon} alt='' />Filters</button>
        
        {/* Filter Categories */}
        <div className={`w-full lg:w-auto md:flex-row flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden lg:flex'}`}>
          {category_workshop.map((category) => (
            <p key={category.category} onClick={() => { setSelectedCategory(category.category);
              applyFilter(category.category)}}
              className={`px-12 py-3 border border-gray-300 shadow-sm rounded-full transition-all cursor-pointer overflow-x-hidden
              ${category.category === selectedCategory ? 'bg-primary text-white border-none' : ''}`}> {category.text} </p>
          ))}
        </div>
      </div>
        

      {/* Workshop List */}
      <div className='flex-1 mt-5 mb-4'>
        <hr className='py-3'/>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {Array.isArray(filterWorkshop) && filterWorkshop.length > 0 ? (
            filterWorkshop.map((workshop) => (
              <Link key={workshop._id} to={`/all-service/${workshop._id}`}>
                <div className='border border-gray-200 rounded-lg p-4 h-[27rem] flex flex-col relative shadow-md hover:shadow-lg hover:translate-y-[-10px] transition-all duration-500'>
                  <div className='relative'>
                    <div className='absolute top-[85%] right-[40%] w-16 h-16 bg-dark-green rounded-full flex items-center justify-center border-4 border-white'>
                      <span className='text-white font-semibold'>{currencySymbol} {workshop.price}</span>
                    </div>

                    <img src={workshop.image} alt='' className='w-full h-[14rem] object-cover rounded-lg'/>
                  </div>
                  <h3 className='text-lg font-semibold mt-8 cursor-pointer hover:text-primary'> {workshop.name}</h3>
                  <h4 className='text-md font-semibold text-gray-500 flex justify-end'>{workshop.category}</h4>
                  <p className='text-sm mt-3 text-dark-brown'>{workshop.about}</p>
                </div>
              </Link>
            ))
          ) : (
            <p className='text-center text-primary'>No workshops found for this category.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default WorkshopDisplay
