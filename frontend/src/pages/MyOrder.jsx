import React, { useContext, useState } from 'react'
import MyProfileSideBar from '../components/MyProfileSideBar'
import { ProfileContext } from '../context/ProfileContext'

const MyOrder = () => {

  const { savedProfile } = useContext(ProfileContext)

  return (
    <div>
      <MyProfileSideBar profile={savedProfile} />
    </div>
  )
}

export default MyOrder
