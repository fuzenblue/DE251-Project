import React, { useContext, useState, useEffect } from "react";
import MyProfileSideBar from "../components/MyProfileSideBar";
import { AppContext } from "../context/AppContext";
import { fame } from "../assets/fame";
import axios from "axios";
import { toast } from "react-toastify";
// 9.56

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext);

  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState(false)

  const updateUserProfileData = async () => {

    try {
      
      const formData = new FormData()

      formData.append('name', userData.name)
      formData.append('first_name', userData.first_name)
      formData.append('last_name', userData.last_name)
      formData.append('dob', userData.dob)
      formData.append('gender', userData.gender)
      formData.append('address', JSON.stringify(userData.address))
      formData.append('phone', userData.phone)

      image && formData.append('image', image)

      const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, {headers: {token}})

      if (data.success) {

        toast.success(data.message)
        await loadUserProfileData()
        setIsEditing(false)
        setImage(false)

      } else {
        toast.error(data.message)
        console.log(error)
        toast.error(error.message)
      }

    } catch (error) {
      console.log(error)
    }

  }

  return userData && (
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <MyProfileSideBar />

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
                <div className="flex flex-col justify-center items-center mb-6">
                    {
                      isEditing
                      ? <>
                          <div className="flex w-36 h-36 rounded-full overflow-x-hidden">
                            <img src={image ? URL.createObjectURL(image) : userData.image} className="w-36 h-36 rounded-full object-cover" alt="" />
                            {/* <img src={userData.image} alt="Profile" className="w-36 h-36 rounded-full object-cover" /> */}
                          </div>
                          <input type="file" accept="image/*" hidden id="image" onChange={e => setImage(e.target.files[0])}/>
                          <label htmlFor="image" className="mt-3 btn btn-outline-black cursor-pointer text-primary">Edit Image</label>
                        </>
                      : <img src={userData.image} alt="Profile" className="w-36 h-36 rounded-full object-cover" />
                    }
                </div>

                <div className="flex gap-4 items-center">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                  {
                    isEditing
                      ? <input className="w-full px-4 py-2 border rounded-lg" disabled value={userData.name} type="text" onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))} />
                      : <p className="w-full px-4 py-2 border rounded-lg bg-gray-50">{userData.name}</p>
                  }
                </div>

                {/* Name Section */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    {
                      isEditing
                        ? <input className="w-full px-4 py-2 border rounded-lg" value={userData.first_name} type="text" onChange={(e) => setUserData((prev) => ({ ...prev, first_name: e.target.value }))} />
                        : <p className="w-full px-4 py-2 border rounded-lg">{userData.first_name}</p>
                    }
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    {
                      isEditing
                        ? <input className="w-full px-4 py-2 border rounded-lg" value={userData.last_name} type="text" onChange={(e) => setUserData((prev) => ({ ...prev, last_name: e.target.value }))} />
                        : <p className="w-full px-4 py-2 border rounded-lg">{userData.last_name}</p>
                    }
                  </div>
                </div>

                {/* Other fields (Birthdate, Gender, etc.) */}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Birthdate</label>
                    {
                      isEditing
                        ? <input className="w-full px-4 py-2 border rounded-lg" value={userData.dob} type="date" onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value })) } />
                        : <p className="w-full px-4 py-2 border rounded-lg" >{userData.dob}</p>
                    }
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                    {
                      isEditing
                        ? <select name="gender" className="w-full px-4 py-2 border rounded-lg" value={userData.gender} onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Other">Other</option>
                          </select>
                        : <p className="w-full px-4 py-2 border rounded-lg" >{userData.gender}</p>
                    }
                    
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  {
                    isEditing
                      ? <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-2 border rounded-lg"
                      value={userData.email}
                      onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
                      disabled />
                      : <p className="w-full px-4 py-2 border rounded-lg bg-slate-50" >{userData.email}</p>
                  }
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <div>
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <input className='w-full px-4 py-2 border rounded-lg' required name='address' type="text" placeholder='Address' value={userData.address.address} onChange={(e) => setUserData((prev) => ({...prev, address: {...prev.address, address: e.target.value}}))} readOnly={!isEditing}/>
                      <input className='w-full px-4 py-2 border rounded-lg' required name='street' type="text" placeholder='Street' value={userData.address.street} onChange={(e) => setUserData((prev) => ({...prev, address: {...prev.address, street: e.target.value}}))} readOnly={!isEditing}/>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <input className='w-full px-4 py-2 border rounded-lg' required name='city' type="text" placeholder='City' value={userData.address.city} onChange={(e) => setUserData((prev) => ({...prev, address: {...prev.address, city: e.target.value}}))} readOnly={!isEditing}/>
                      <input className='w-full px-4 py-2 border rounded-lg' required name='stat ' type="text" placeholder='State' value={userData.address.state} onChange={(e) => setUserData((prev) => ({...prev, address: {...prev.address, state: e.target.value}}))} readOnly={!isEditing}/>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-3">
                        <input className='w-full px-4 py-2 border rounded-lg' required name='country' type="text" placeholder='Country' value={userData.address.country} onChange={(e) => setUserData((prev) => ({...prev, address: {...prev.address, country: e.target.value}}))} readOnly={!isEditing}/>
                        <input className='w-full px-4 py-2 border rounded-lg' required name='zipcode' type="text" placeholder='Zip code' value={userData.address.zipcode} onChange={(e) => setUserData((prev) => ({...prev, address: {...prev.address, zipcode: e.target.value}}))} readOnly={!isEditing}/>
                    </div>
                    <div className='col-span-2'>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input type="tel" name="phone" className="w-full px-4 py-2 border rounded-lg" value={userData.phone} onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))} readOnly={!isEditing} />
                    </div>
                  </div>
                </div>

                {/* Edit/Save Button */}
                <div className="mt-10 flex justify-end">
                      {
                        isEditing
                          ? <button className="`py-2 px-6 bg-green-500 hover:bg-green-600 text-white btn rounded-lg" onClick={updateUserProfileData}>Save Profile</button>
                          : <button className="`py-2 px-6 bg-orange-400 hover:bg-orange-500 text-white btn rounded-lg" onClick={() => setIsEditing(true)}>Edit Profile</button>
                      }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default MyProfile;
