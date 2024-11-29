import React, { useContext, useEffect } from 'react';
import MyProfileSideBar from '../components/MyProfileSideBar';
import { fame } from '../assets/fame';
import { ProfileContext } from '../context/ProfileContext';

const MyProfile = () => {

  const { profile, isEditing, toggleEdit, setProfile, savedProfile } = useContext(ProfileContext)
  

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProfile({ ...profile, [name]: value })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const updatedProfile = { ...profile, profileImage: imageUrl };
  
      // บันทึกข้อมูลลง localStorage และอัปเดต state
      localStorage.setItem('profile', JSON.stringify(updatedProfile));
      setProfile(updatedProfile);
    }
  }
  
  // เมื่อโหลดหน้าเว็บใหม่, ดึงข้อมูลจาก localStorage
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('profile'));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);  


  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <MyProfileSideBar profile={ savedProfile } /> {/* Pass profile to sidebar */}

      {/* Main Content Area */}
      <div className="flex-1 p-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 flex items-center space-x-2">
            <img src={fame.info_icon} alt="Info Icon" className="w-6 h-6" />
            <span>Personal Information</span>
          </h1>

          {/* Information Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="space-y-6">
              {/* Profile Image Section */}
              <div className="flex justify-center items-center mb-6">
                <div className="w-28 h-28 rounded-full overflow-hidden">
                  <img
                    src={ profile?.profileImage || ''}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {isEditing && (
                <div className="flex justify-center mt-2">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="profileImage"
                    onChange={handleImageChange}
                  />
                  <label
                    htmlFor="profileImage"
                    className="btn btn-outline-black cursor-pointer text-primary"
                  >
                    Edit Image
                  </label>
                </div>
              )}

              {/* Name Section */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={profile?.firstName}
                    onChange={handleInputChange}
                    readOnly={!isEditing}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={profile?.lastName}
                    onChange={handleInputChange}
                    readOnly={!isEditing}
                  />
                </div>
              </div>

              {/* Other fields (Birthdate, Gender, etc.) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Birthdate</label>
                <input
                  type="date"
                  name="birthdate"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  value={profile?.birthdate}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select
                  name="gender"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  value={profile?.gender}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  value={profile?.email}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <div>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <textarea className='textarea textarea-bordered border-gray-200 textarea-xs w-full rounded-lg focus:ring-2 focus:ring-primary focus:border-primary' required name='address' type="textarea" placeholder='Address' />
                    <input className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary' required name='street' type="text" placeholder='Street' />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <input className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary' required name='city' type="text" placeholder='City' />
                    <input className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary' required name='stat ' type="text" placeholder='State' />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                      <input className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary' required name='country' type="text" placeholder='Country' />
                      <input className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary' required name='zipcode' type="text" placeholder='Zip code' />
                  </div>
                    <div className='col-span-2'>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input type="tel" name="phone" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" value={profile?.phone} onChange={handleInputChange} readOnly={!isEditing} />
                    </div>
                </div>
              </div>

              {/* Edit/Save Button */}
              <div className="flex justify-end">
                <button
                  className={`py-2 px-6 rounded-lg font-medium transition-colors duration-200 ${isEditing ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-primary hover:bg-yellow-500 text-gray-800'}`}
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
