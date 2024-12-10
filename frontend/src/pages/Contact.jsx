import React, { useState } from 'react';
import { fame } from "../assets/fame";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-12">
        <div className="absolute inset-0">
          <img
            src=  {fame.cont_head} // Replace with the image URL you want to use
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-center">
          <h1 className="text-5xl font-bold text-white">
            <span className="text-orange-500">Contact Us</span>
          </h1>
          <p className="text-xl text-white mt-4">
            Have questions or want to get in touch? We're here to help!
          </p>
          <a
            href="#contact-form"
            className="inline-block mt-6 px-8 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-1 gap-8">
        {/* Contact Information Section */}
        <div className="bg-white shadow-xl rounded-lg p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">ติดต่อเรา</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span role="img" aria-label="email" className="text-blue-500 text-3xl">📧</span>
              <div>
                <p className="text-gray-600 font-medium">อีเมล</p>
                <p className="text-gray-800">Pineappleslice@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span role="img" aria-label="phone" className="text-green-500 text-3xl">📞</span>
              <div>
                <p className="text-gray-600 font-medium">โทรศัพท์</p>
                <p className="text-gray-800">+66 123 456 7890</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span role="img" aria-label="location" className="text-red-500 text-3xl">📍</span>
              <div>
                <p className="text-gray-600 font-medium">ที่อยู่</p>
                <p className="text-gray-800">Prachuap Khiri Khan, Thailand</p>
              </div>
            </div>
          </div>

          {/* Google Maps Embed Section */}
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26785.123456789!2d99.791202!3d11.781157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c0bb3eab3be0af%3A0xcdfef4b7a5b9e0f1!2sPrachuap%20Khiri%20Khan!5e0!3m2!1sen!2sth!4v1635759565262!5m2!1sen!2sth"
              width="100%"
              height="300"
              style={{ border: 'none', borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>

        {/* Contact Form Section */}
        <div id="contact-form" className="bg-white shadow-xl rounded-lg p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
