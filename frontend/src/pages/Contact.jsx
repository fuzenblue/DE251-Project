import React, { useState } from 'react';

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
      </div>
    </div>
  );
};

export default Contact;
