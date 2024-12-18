import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const ProductInfo = () => {
  const { products, currencySymbol, addToCart } = useContext(AppContext)

  const { productId } = useParams()
  const [productData, setProductData] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const fetchProductData = async () => {
    const selectedProduct = products.find((item) => item._id === productId)
    if (selectedProduct) {
      setProductData(selectedProduct)
    }
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  const handleImageNavigation = (direction) => {
    if (direction === 'left') {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? productData.images.length - 1 : prevIndex - 1))
    } else {
      setCurrentImageIndex((prevIndex) => (prevIndex === productData.images.length - 1 ? 0 : prevIndex + 1))
    }
  }

  return (
    productData ? (
      <div className="min-h-screen py-12 px-6 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Product Image */}
          <div className="relative flex justify-center items-center">
            <button
              className="absolute left-4 lg:left-6 text-white hover:text-gray-300 transition-colors"
              onClick={() => handleImageNavigation('left')}
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <img src={productData.images[currentImageIndex]} alt={productData.name} className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg transition-transform transform" />
            <button className="absolute right-4 lg:right-6 text-white hover:text-gray-300 transition-colors" onClick={() => handleImageNavigation('right')} aria-label="Next image">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Product Details */}
          <div className="flex flex-col space-y-6 my-8">
            <div>
              <h1 className="text-3xl lg:text-4xl font-semibold text-primary">{productData.name}</h1>
              <p className="text-lg lg:text-xl text-gray-700 my-4 mb-8">{productData.about}</p>

              <p className="text-3xl font-semibold text-end">price: <span className='px-2 text-primary '>{currencySymbol}{productData.price}</span></p>
            </div>

            <div className="flex justify-center items-center space-x-6 border-t pt-2">
              {/* Add to Cart Button */}
              <button onClick={() => addToCart(productData._id)} className="bg-primary text-white py-4 rounded-lg mt-4 w-full hover:bg-primary-dark transition-colors focus:outline-none">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-8 lg:mt-12 max-w-5xl mx-auto text-gray-600">
          <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900">Description</h3>
          <p className="ml-4 mt-2 font-light text-lg lg:text-xl leading-relaxed">{productData.description}</p>
        </div>
      </div>
    ) : (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <p className="text-lg text-gray-500">Product not found.</p>
      </div>
    )
  )
}

export default ProductInfo