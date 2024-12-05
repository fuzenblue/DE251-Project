import React, { createContext, useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { AdminContext } from './AdminContext'
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const WorkshopContext = createContext()

const WorkshopContextProvider = (props) => {

  const { backendUrl, aToken } = useContext(AdminContext)

  const [ workshops, setWorkshop ] = useState([])

  const getAllWorkshop = async(aToken) => {
    try {
      
      const { data } = await axios.post(backendUrl + '/api/workshop/all-workshops', {}, {headers: { aToken }})
      if (data.success) {
        setWorkshop(data.workshops)
        
      } else {
        toast.error(data.message || "Failed to fetch workshops")
      }
    } catch (error) {
      console.error(error.response || error.message)
      toast.error(error.response?.data?.message || "An error occurred while fetching workshops")
    }
  }

  const changeAvailability = async (workshopsId) => {
    // console.log('Sending Workshop ID:', workshopsId);  // ตรวจสอบค่าก่อนส่ง
    try {
        const { data } = await axios.post(backendUrl + '/api/workshop/change-availability', { workshopsId })
        // console.log('Response Data:', data);  // ตรวจสอบการตอบกลับจาก API
        if (data.success) {
            toast.success(data.message)
            getAllWorkshop()
        } else {
            toast.error(data.message)
        }
    } catch (error) {
        console.error(error.response || error.message)
        toast.error(error.message)
    }
  }

  const value = {
    workshops,
    getAllWorkshop,
    changeAvailability,
  }


  return (
    <WorkshopContext.Provider value={value}>
      {props.children}
    </WorkshopContext.Provider>
  )
}

export default WorkshopContextProvider 
