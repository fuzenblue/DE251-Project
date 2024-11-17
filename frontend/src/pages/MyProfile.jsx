import React, { useState } from 'react';
import MyProfileSideBar from '../components/MyProfileSideBar';

const MyProfile = () => {
  const [profile, setProfile] = useState({
    firstName: 'Lalisa',
    lastName: 'Manobal',
    gender: 'Female',
    email: 'lisa@blackpink.com',
    phone: '+66 123 456 789',
    address: '123 K-Pop Street, Gangnam District, Seoul, South Korea',
    birthdate: '1997-03-27', // ใช้รูปแบบ ISO สำหรับวันที่
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const toggleEdit = () => {
    if (isEditing) {
      // Save changes if needed
      // Example: Make an API call to save the data
      console.log('Saved profile:', profile);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <MyProfileSideBar profile={profile} />

      {/* Main Content Area */}
      <div className="flex-1 p-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Personal Information</h1>

          {/* Information Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="space-y-6">
              {/* Name Section */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                    value={profile.firstName}
                    onChange={handleInputChange}
                    readOnly={!isEditing}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                    value={profile.lastName}
                    onChange={handleInputChange}
                    readOnly={!isEditing}
                  />
                </div>
              </div>

              {/* Gender Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select
                  name="gender"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                  value={profile.gender}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Contact Information */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                  value={profile.email}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                  value={profile.phone}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <textarea
                  name="address"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                  rows="3"
                  value={profile.address}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
              </div>

              {/* Birthdate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Birthdate</label>
                <input
                  type="date"
                  name="birthdate"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                  value={profile.birthdate}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>

              {/* Edit/Save Button */}
              <div className="flex justify-end">
                <button
                  className={`py-2 px-6 rounded-lg font-medium transition-colors duration-200 ${
                    isEditing
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : 'bg-yellow-400 hover:bg-yellow-500 text-gray-800'
                  }`}
                  onClick={toggleEdit}
                >
                  {isEditing ? 'Save Changes' : 'Edit Profile'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
