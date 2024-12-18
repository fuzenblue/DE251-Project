import React, { useContext, useEffect, useState } from "react"
import CartSummary from "../components/CartSummary"
import { AppContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom"

const PlaceOrder = () => {
  const { products, currencySymbol, cartItem, userData } = useContext(AppContext)
  const [cartData, setCartData] = useState([])

  const [form, setForm] = useState({
    firstName: userData.first_name,
    lastName: userData.last_name,
    email: userData.email,
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: userData.phone,
  })

  const navigate = useNavigate()

  const [paymentMethod, setPaymentMethod] = useState("cod")

  useEffect(() => {
    const tempData = products
      .filter((product) => cartItem[product._id])
      .map((product) => ({
        ...product,
        quantity: cartItem[product._id],
      }))

    setCartData(tempData)
  }, [cartItem, products])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Delivery Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-neutral-800 border-b pb-2">
            Delivery Information
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              className="w-full px-4 py-3 bg-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              className="w-full px-4 py-3 bg-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            type="email"
            name="email"
            value={userData.email}
            disabled
            placeholder="Email Address"
            className="w-full px-4 py-3 bg-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="street"
            value={form.street}
            onChange={handleChange}
            placeholder="Street Address"
            required
            className="w-full px-4 py-3 bg-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City"
              required
              className="w-full px-4 py-3 bg-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="state"
              value={form.state}
              onChange={handleChange}
              placeholder="State"
              required
              className="w-full px-4 py-3 bg-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="zipcode"
              value={form.zipcode}
              onChange={handleChange}
              placeholder="Zipcode"
              required
              className="w-full px-4 py-3 bg-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder="Country"
              required
              className="w-full px-4 py-3 bg-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full px-4 py-3 bg-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Right Column: Order Summary */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-neutral-800 border-b pb-2">
            Order Summary
          </h2>

          {/* Order Items */}
          <div className="space-y-4">
            {cartData.length > 0 ? (
              cartData.map((product) => (
                <div
                  key={product._id}
                  className="flex justify-between items-center pb-2 border-b"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-neutral-200 rounded-lg">
                      <img
                        src={product.productImg}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-800">{product.name}</p>
                      <p className="text-neutral-600">Quantity: {product.quantity}</p>
                    </div>
                  </div>
                  <span className="font-semibold">
                    {currencySymbol}
                    {(product.price * product.quantity).toFixed(2)}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-neutral-600">Your order is empty.</p>
            )}
          </div>


          {/* Payment Method */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-neutral-800 border-b pb-2">
              Payment Method
            </h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span>Cash on Delivery</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span>Credit Card</span>
              </label>
            </div>
          </div>

          {/* Order Total */}
          <div className="bg-neutral-100 rounded-lg p-4 space-y-2">
            <CartSummary />
          </div>

          {/* Place Order Button */}
          <button
            onClick={() => navigate('/my-order')}
            className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder