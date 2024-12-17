import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { ProductContext } from '../../context/ProductContext'
import { useEffect } from 'react'

const ListProduct = () => {

  const { aToken } = useContext(AdminContext)
    const { products, getAllProducts, changeAvailability } = useContext(ProductContext)
  
    useEffect(() => {
      if (aToken) {
        getAllProducts()
      }
    }, [aToken, getAllProducts])

  return (
    <div className="block pt-8 px-8 w-full bg-gray-50 overflow-y-scroll mb-8">
      <h1 className="mb-3 text-lg font-medium">All Product List</h1>

      <div className='w-full flex flex-wrap gap-2 pt-5 gap-y-6'>
        {products.map((item, index) => (
          <div key={index} className='border border-orange-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group bg-white hover:translate-y-[-10px] transition-all duration-200'>
            <img src={item.productImg} alt="" className='w-56 h-56 object-cover '/>
            <div className='p-4'>
              <p className='text-lg font-semibold'>{item.name}</p>
              <p className='text-md font-semibold text-gray-500 flex'>{item.about}</p>
              <div className='mt-2 flex item-center gap-1 text-sm'>
              <input className="checkbox border-orange-400 [--chkbg:theme(colors.dark-brown)] [--chkfg:orange] checked:border-dark-brown"  onChange={() => changeAvailability(item._id)} type="checkbox" checked={item.available} />
                <p>Available</p>
              </div>
            </div>
            
          </div>
        ))}

      </div>
    </div>
  )
}

export default ListProduct
