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
  const [bookeds, setBookeds] = useState([])

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
      toast.error(error.message)
    }
  }

  const changeAvailability = async (workshopsId) => {

    try {
        const { data } = await axios.post(backendUrl + '/api/workshop/change-availability', { workshopsId }, {headers: { aToken }})

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

  const getAllBookeds = async () => {

    try {
      const { data } = await axios.get(backendUrl + '/api/workshop/bookings', {headers: { aToken }})

      if (data.success) {
        setBookeds(data.bookeds)
        console.log(data.bookeds)
        
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.error(error.response || error.message)
      toast.error(error.message)
    }
  }

  
  const cancelBooking = async (bookedId) => {
    try {
      
      const { data } = await axios.post(backendUrl + '/api/workshop/cancel-booking', {bookedId}, {headers: { aToken }})
      if (data.success) {
        toast.success(data.message)
        getAllBookeds()
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
    bookeds, setBookeds,
    getAllBookeds,
    cancelBooking,
  }


  return (
    <WorkshopContext.Provider value={value}>
      {props.children}
    </WorkshopContext.Provider>
  )
}

export default WorkshopContextProvider 
