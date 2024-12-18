import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const ProductInfo = () => {
  const { products, currencySymbol, addToCart } = useContext(AppContext)
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const selectedProduct = products.find(p => p._id === productId)
    setProduct(selectedProduct)
  }, [productId, products])

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity })
    }
  }

  const handleQuantityChange = (delta) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + delta, 1))
  }

  const handleImageNavigation = (direction) => {
    if (direction === 'left') {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? product.images.length - 1 : prevIndex - 1))
    } else {
      setCurrentImageIndex((prevIndex) => (prevIndex === product.images.length - 1 ? 0 : prevIndex + 1))
    }
  }

  return (
    product ? (
      <div className="min-h-screen py-16 px-6 lg:px-16 bg-gray-50">
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
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
            <button
              className="absolute right-4 lg:right-6 text-white hover:text-gray-300 transition-colors"
              onClick={() => handleImageNavigation('right')}
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between space-y-1">
            <div>
              <h1 className="text-3xl lg:text-4xl font-semibold text-primary">{product.name}</h1>
              <p className="text-lg lg:text-xl text-gray-700 mt-4 p-1">{product.about}</p> 
            </div>

            {/* Price and Quantity Section */}
            <div className="flex justify-between items-center mt-4">
              {/* Price - Chased to the Left */}
              <span className="text-3xl font-semibold text-accent">
                {currencySymbol}{product.price}
              </span>

              {/* Quantity Selector - Chased to the Right */}
              <div className="flex items-center space-x-3">
                <button
                  className="w-12 h-12 text-2xl font-bold text-gray-800 rounded-full border-2 border-gray-300 hover:bg-gray-100"
                  onClick={() => handleQuantityChange(-1)}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="text-2xl font-semibold text-gray-900">{quantity}</span>
                <button
                  className="w-12 h-12 text-2xl font-bold text-gray-800 rounded-full border-2 border-gray-300 hover:bg-gray-100"
                  onClick={() => handleQuantityChange(1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              className="bg-primary text-white py-3 rounded-lg mt-4 w-full hover:bg-primary-dark transition-colors focus:outline-none"
              onClick={handleAddToCart}
              aria-label="Add product to cart"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product Description (repeated) */}
        <div className="mt- lg:mt-12 max-w-4xl mx-auto text-gray-600">
          <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900">Description</h3>
          <p className="mt-2 text-lg lg:text-xl leading-relaxed">{product.description}</p>
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
