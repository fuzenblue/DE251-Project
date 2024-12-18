import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx'
import CartSummary from '../components/CartSummary.jsx'

const Bag = () => {
  const { products, currencySymbol, cartItem, updateQuantity, userData } = useContext(AppContext)
  const [cartData, setCartData] = useState([])


  useEffect(() => {
    const tempData = products
      .filter((product) => cartItem[product._id])
      .map((product) => ({
        ...product,
        quantity: cartItem[product._id],
      }));

    setCartData(tempData);
  }, [cartItem, products]);


  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white min-h-screen">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-800"><span className='text-primary'>{userData.name}</span> Shopping Cart</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-8">

        {/* Left Column - Cart Items */}
        <div className="md:col-span-2">
          <div>
            <h2 className="text-xl font-semibold text-neutral-700 mb-4 border-b pb-2">Products</h2>
            {cartData.length > 0 ? (
              cartData.map((product) => (
                <div
                  key={product.id}
                  className="grid grid-cols-12 items-center gap-4 py-4 border-b last:border-b-0 hover:bg-neutral-50 transition-colors"
                >
                  <div className="col-span-3 md:col-span-2">
                    <img
                      src={product.productImg}
                      alt={product.name}
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                  </div>
                  <div className="col-span-9 md:col-span-5">
                    <p className="font-medium text-neutral-900">{product.name}</p>
                    <p className="text-neutral-600">
                      {currencySymbol}
                      {product.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="col-span-6 md:col-span-3 flex items-center space-x-2 justify-center">
                    <button
                      onClick={() => updateQuantity(product._id, product.quantity - 1)}
                      className="w-8 h-8 bg-neutral-100 text-neutral-700 rounded-full flex items-center justify-center hover:bg-neutral-200"
                    >
                      -
                    </button>
                    <span className="text-neutral-900 px-2">{product.quantity}</span>
                    <button
                      onClick={() => updateQuantity(product._id, product.quantity + 1)}
                      className="w-8 h-8 bg-neutral-100 text-neutral-700 rounded-full flex items-center justify-center hover:bg-neutral-200"
                    >
                      +
                    </button>
                  </div>

                  <div className="col-span-6 md:col-span-2 mx-4 text-right">
                    <button
                      onClick={() => updateQuantity(product._id, 0)}
                      className="text-red-500 hover:text-red-700 font-medium"
                    >
                      Remove
                    </button>
                  </div>


                </div>
              ))
            ) : (
              <p className="text-neutral-600">Your cart is empty.</p>
            )}
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="space-y-6 md:pt-[2rem]">
          <div className="bg-neutral-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-neutral-700 mb-4 border-b pb-2">
              Order Summary
            </h2>
            <div>
              
              <CartSummary />

              <Link to="/place-order" className="block mt-6">
                <button className="w-full bg-neutral-900 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors">
                  Proceed to Checkout
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Bag