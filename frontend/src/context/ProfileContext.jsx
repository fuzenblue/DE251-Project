import React, { createContext, useState, useContext, useEffect } from 'react'
import { fame } from '../assets/fame'

export const ProfileContext = createContext()

const ProfileContextProvider = (props) => {

  // สร้าง State profile ที่เริ่มต้นเป็น null
  const [profile, setProfile] = useState(null); 
  const [isEditing, setIsEditing] = useState(false);
  const [savedProfile, setSavedProfile] = useState(null); // สามารถเก็บค่าโปรไฟล์ที่บันทึกไว้ได้

  // โหลดโปรไฟล์จาก localStorage หรือใช้ค่าเริ่มต้น
  useEffect(() => {
    const savedProfile = localStorage.getItem('profile')
    const initialProfile = savedProfile
      ? JSON.parse(savedProfile)
      : {
          firstName: 'Lalisa',
          lastName: 'Manobal',
          gender: 'Female',
          email: 'lisa@blackpink.com',
          phone: '+66 123 456 789',
          address: '123 K-Pop Street, Gangnam District, Seoul, South Korea',
          birthdate: '1997-03-27',
          profileImage: fame.lisa_pic,
        };

    setProfile(initialProfile) // ตั้งค่าโปรไฟล์เริ่มต้น
    setSavedProfile(initialProfile) // กำหนดค่าเริ่มต้นสำหรับ savedProfile
  }, [])

  // ฟังก์ชันอัปเดตโปรไฟล์
  const updateProfile = (updatedProfile) => {
    localStorage.setItem('profile', JSON.stringify(updatedProfile)); // บันทึกลง localStorage
    setProfile(updatedProfile); // อัปเดต State
  }

  // ฟังก์ชันเปิด/ปิดโหมดแก้ไขโปรไฟล์
  const toggleEdit = () => {
    if (isEditing) {
      localStorage.setItem('profile', JSON.stringify(profile));
      setSavedProfile(profile); // อัปเดต savedProfile
    }
    setIsEditing(!isEditing);
  };

  const value = {
    profile,
    setProfile,
    isEditing,
    toggleEdit,
    savedProfile,
    updateProfile,
  };

  return (
    <ProfileContext.Provider value={value}>
      {props.children}
    </ProfileContext.Provider>
  );
}

export default ProfileContextProvider