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
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold text-center mb-6">Place Order</h1>

      {/* Delivery Information */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Delivery Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="text"
          name="street"
          value={form.street}
          onChange={handleChange}
          placeholder="Street"
          className="w-full px-4 py-2 border rounded-md"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="text"
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="State"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="zipcode"
            value={form.zipcode}
            onChange={handleChange}
            placeholder="Zipcode"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="Country"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      {/* Cart Totals */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Cart Totals</h2>
        <div className="flex justify-between py-2 border-b">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span>Shipping Fee</span>
          <span>${shippingFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-2 border-b font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Payment Method */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Payment Method</h2>
        <div className="flex items-center space-x-4">
          <input type="radio" name="paymentMethod" id="cod" defaultChecked />
          <label htmlFor="cod" className="text-gray-700">
            Cash on Delivery
          </label>
        </div>
      </div>

      {/* Place Order Button */}
      <div className="mt-8 text-center">
        <button
          onClick={handlePlaceOrder}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
