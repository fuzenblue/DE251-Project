import React, { useState } from "react";

const PlaceOrder = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const subtotal = 0.0;
  const shippingFee = 10.0;
  const total = subtotal + shippingFee;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
  };

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
              className="w-full px-4 py-3 bg-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full px-4 py-3 bg-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full px-4 py-3 bg-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <input
            type="text"
            name="street"
            value={form.street}
            onChange={handleChange}
            placeholder="Street Address"
            className="w-full px-4 py-3 bg-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full px-4 py-3 bg-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="state"
              value={form.state}
              onChange={handleChange}
              placeholder="State"
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
              className="w-full px-4 py-3 bg-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder="Country"
              className="w-full px-4 py-3 bg-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
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
            <div className="flex justify-between items-center pb-2 border-b">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-neutral-200 rounded-lg"></div>
                <div>
                  <p className="font-medium text-neutral-800">Product Name</p>
                  <p className="text-neutral-600">Quantity: 1</p>
                </div>
              </div>
              <span className="font-semibold">$25.00</span>
            </div>
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
            <div className="flex justify-between">
              <span className="text-neutral-700">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-700">Shipping</span>
              <span>${shippingFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2 mt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Place Order Button */}
          <button
            onClick={handlePlaceOrder}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;