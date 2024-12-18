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
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Place Order
      </h1>
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-700">Delivery Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full px-4 py-3 bg-white shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full px-4 py-3 bg-white shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full px-4 py-3 bg-white shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="street"
          value={form.street}
          onChange={handleChange}
          placeholder="Street Address"
          className="w-full px-4 py-3 bg-white shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full px-4 py-3 bg-white shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="State"
            className="w-full px-4 py-3 bg-white shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="zipcode"
            value={form.zipcode}
            onChange={handleChange}
            placeholder="Zipcode"
            className="w-full px-4 py-3 bg-white shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="Country"
            className="w-full px-4 py-3 bg-white shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full px-4 py-3 bg-white shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-700">Cart Totals</h2>
        <div className="space-y-2 mt-4 text-gray-600">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping Fee</span>
            <span>${shippingFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-gray-800 border-t pt-4 mt-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-700">Payment Method</h2>
        <div className="mt-4">
          <label className="flex items-center space-x-2 text-gray-700">
            <input
              type="radio"
              name="paymentMethod"
              id="cod"
              defaultChecked
              className="w-4 h-4 text-blue-500"
            />
            <span>Cash on Delivery</span>
          </label>
        </div>
      </div>
      <div className="mt-10 text-center">
        <button
          onClick={handlePlaceOrder}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
