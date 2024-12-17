import React, { useContext, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Banner from '../components/Banner'

const Product = () => {

  const { products, currencySymbol } = useContext(AppContext)

  const filterProduct = useMemo(() => {
    return products.filter(product => product.available)
  }, [products])


  return (
    <div className="min-h-screen">
      

      <div id='all-product' className='items-center mt-5 text-center'>
        <h2 className='text-accent font-bold text-xl md:text-3xl'>ALL Product</h2>
        <p className='hidden md:flex text-dark-brown font-normal text-md md:mx-[15%]'>Explore a variety of hands-on experiences at our farm, from pineapple planting to eco-friendly crafting. Filter by category, date, or skill level to find the perfect workshop that suits your interests. Join us for an unforgettable learning journey at Pineapple-Slice Farm!</p>

        {/* Product List */}
        <div className='mx-[15%] flex-1 mt-5 mb-4'>
          <hr className='py-3' />
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4' >
            {Array.isArray(filterProduct) && filterProduct.length > 0 ? (
              filterProduct.map((product) => (
                <Link key={product._id} to={`/all-product/${product._id}`} onClick={() => scrollTo(0, 0)}>
                  <div className='bg-white border border-gray-200 rounded-lg p-3 h-[27rem] flex flex-col relative shadow-md hover:shadow-lg hover:translate-y-[-10px] transition-all'>
                    <div className='relative'>
                      <div className='absolute top-[85%] right-[40%] w-16 h-16 bg-dark-green rounded-full flex items-center justify-center border-4 border-white'>
                        <span className='text-white font-semibold'>{currencySymbol} {product.price}</span>
                      </div>

                      <img src={product.productImg} alt='' className='w-full h-[14rem] object-cover rounded-lg' />
                    </div>
                    <h3 className='text-lg font-semibold mt-8 cursor-pointer hover:text-primary'> {product.name}</h3>
                    <p className='text-start text-sm m-3 text-dark-brown'>{product.about}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p className='text-center text-primary'>No products found.</p>
            )}
          </div>
        </div>
      </div>

      <Banner />
    </div>
  )
}

export default Product
