import React, { createContext, useState, useContext } from 'react'
import { fame } from '../assets/fame'
export const ProfileContext = createContext()

const ProfileContextProvider = (props) => {
    const loadProfile = () => {
        const savedProfile = localStorage.getItem('profile')
        return savedProfile
            ? JSON.parse(savedProfile)
            : {
                firstName: 'Lalisa',
                lastName: 'Manobal',
                gender: 'Female',
                email: 'lisa@blackpink.com',
                phone: '+66 123 456 789',
                address: '123 K-Pop Street, Gangnam District, Seoul, South Korea',
                birthdate: '1997-03-27',
                profileImage: null,  // Add default profile image property
        }
    }

    const [profile, setProfile] = useState(loadProfile)
    const [savedProfile, setSavedProfile] = useState(profile)
    const [isEditing, setIsEditing] = useState(false)

    const toggleEdit = () => {
        if (isEditing) {
          // Save profile to localStorage and update savedProfile
          localStorage.setItem('profile', JSON.stringify(profile));
          setSavedProfile(profile); // Update sidebar with the saved profile
        }
        setIsEditing(!isEditing);
    };

    const value = {
        profile,
        setProfile,
        isEditing,
        toggleEdit,
        savedProfile,
    }

    return (
        <ProfileContext.Provider value={value}>
            {props.children}
        </ProfileContext.Provider>
    )
}

export default ProfileContextProvider
