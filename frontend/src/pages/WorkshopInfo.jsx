import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx'
import { assets } from '../assets/assets.js'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import WorkshopHeader from '../components/WorkshopHeader.jsx'
import RelatedWorkshops from '../components/RelatedWorkshops.jsx'

const WorkshopInfo = () => {

    const { workshopId } = useParams()
    const { id } = useParams()

    const { workshops, currencySymbol } = useContext(AppContext)
    const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  
    const [ workshopInfo, setWorkshopInfo ] = useState(null)
    const [ workshopSlots, setWorkshopSlots ] = useState([])
    const [ slotIndex, setSlotIndex ] = useState(0)
    const [ slotTime, setSlotTime ] = useState('')
  
    const fetchWorkshopInfo = async () => {
      const workshopInfo = workshops.find(workshops => workshops._id === workshopId)
      setWorkshopInfo(workshopInfo)
    }

    const getAvailableSlots = async () => {
        setWorkshopSlots([]) 
    
        // getting current date 
        let today = new Date()
        
        for (let i = 0; i < 7; i++) {
          // getting date with index
          let currentDate = new Date(today) 
          currentDate.setDate(today.getDate() + i) 
    
          // setting end time of the data with index
          let endTime = new Date() 
          endTime.setDate(today.getDate() + i) 
          endTime.setHours(20, 0, 0, 0) // ตั้งเวลาสิ้นสุด
    
          let timeSlots = [] // สร้างตัวแปรสำหรับเก็บเวลา
          let slotsAdded = 0 // นับจำนวน slots ที่ถูกเพิ่ม
    
          
          let currentSlotStart = new Date() // *********** กำหนดเวลาปัจจุบันสำหรับการเพิ่ม slot ตรงนี ****************** //
          currentSlotStart.setSeconds(0) 
    
          // ปรับเวลาเริ่มต้นสำหรับวันนั้น ๆ 
          if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
              // สำหรับวันอาทิตย์และวันเสาร์ (SUN / SAT) มี 3 ช่วงเวลา
              while (slotsAdded < 3) {
                  let startTime, endTime 
    
                  if (slotsAdded === 0) {
                      startTime = new Date(currentDate) 
                      startTime.setHours(9, 0, 0, 0) 
                      endTime = new Date(startTime) 
                      endTime.setHours(startTime.getHours() + 3) 
    
                      if (startTime >= currentSlotStart && startTime < endTime) {
                          timeSlots.push({
                              datetime: new Date(startTime),
                              time: startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                              endTime: endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                          });
                      }
                  } else if (slotsAdded === 1) {
                      startTime = new Date(currentDate) 
                      startTime.setHours(13, 0, 0, 0) 
                      endTime = new Date(startTime) 
                      endTime.setHours(startTime.getHours() + 3) 
    
                      if (startTime >= currentSlotStart && startTime < endTime) {
                          timeSlots.push({
                              datetime: new Date(startTime),
                              time: startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                              endTime: endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                          });
                      }
                  } else if (slotsAdded === 2) {
                      startTime = new Date(currentDate) 
                      startTime.setHours(17, 0, 0, 0) 
                      endTime = new Date(startTime) 
                      endTime.setHours(startTime.getHours() + 3) 
    
                      if (startTime >= currentSlotStart && startTime < endTime) {
                          timeSlots.push({
                              datetime: new Date(startTime),
                              time: startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                              endTime: endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                          })
                      }
                  }
                  slotsAdded++
              }
          } else {
              // สำหรับวันจันทร์ถึงวันศุกร์ (MON - FRI) มี 2 ช่วงเวลา
              while (slotsAdded < 2) {
                let startTime, endTime 
    
                if (slotsAdded === 0) {
                    startTime = new Date(currentDate) 
                    startTime.setHours(11, 0, 0, 0) 
                    endTime = new Date(startTime) 
                    endTime.setHours(startTime.getHours() + 3) 
                    if (startTime >= currentSlotStart && startTime < endTime) {
                        timeSlots.push({
                            datetime: new Date(startTime),
                            time: startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                            endTime: endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                        }) 
                    }
                } else if (slotsAdded === 1) {
                    startTime = new Date(currentDate) 
                    startTime.setHours(16, 0, 0, 0) 
                    endTime = new Date(startTime) 
                    endTime.setHours(startTime.getHours() + 3) 
    
                    if (startTime >= currentSlotStart && startTime < endTime) {
                        timeSlots.push({
                            datetime: new Date(startTime),
                            time: startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                            endTime: endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                        }) 
                    }
                }
                slotsAdded++ 
              }
              
            }
            
            if (timeSlots.length === 0) {
              timeSlots.push({
                  datetime: currentDate,
                  time: `No available slots on ${currentDate.toLocaleDateString()}`,
              })
            }
          setWorkshopSlots(prev => [...prev, timeSlots]); // เพิ่ม timeSlots ลงใน workshopSlots
        }
    }

    useEffect(() => {
        fetchWorkshopInfo()
    }, [workshops, workshopId])
        
    useEffect(() => {
        getAvailableSlots()
    }, [workshopInfo])

    useEffect(() => {
        console.log(workshopSlots)
    }, [workshops])


    useEffect(() => {
        const workshop = workshops.find(workshop => workshop._id === id);
        setWorkshopInfo(workshop)
      }, [id, workshops])

  return (
    <div className='px-5 py-2'>
        <Breadcrumbs />

        <WorkshopHeader />

        {/* Info */}
        <div className='mx-[4%]'>
            <div className='flex justify-between px-0 md:px-8 gap-4 mt-3'>
                <h1 className='text-3xl text-primary font-semibold'>{workshopInfo?.name}</h1>
                <h3 className='text-3xl text-primary font-semibold hidden md:block'>{currencySymbol}{workshopInfo?.price}</h3>
            </div>

            <div className='flex mt-4 flex-col md:flex-row gap-5'>
                {/* description */}
                <div className='flex-1 rounded-lg'>
                    <div className='max-h-48 md:h-auto overflow-y-scroll xl:overflow-clip'>
                        <p className='flex items-center gap-1 text-lg font-medium text-gray-600 mt-3'>
                            Description about this workshop
                            <img src={assets.info_icon} alt="" />
                        </p>

                        <p className='text-sm text-gray-500 mt-2'>{workshopInfo?.about}</p>
                        <p className='text-sm text-gray-500 mt-2 '>{workshopInfo?.description}</p>
                    </div>

                    <p className='text-gray-500 font-medium mt-10 text-end'>Workshop Price:  
                        <span className='text-gray-600'>  {currencySymbol}{workshopInfo?.price}</span>
                    </p>
                </div>

                {/* booking slots */}
                <div className='w-full md:w-1/2 md:ml-4 font-medium text-gray-700'>
                    <p>Booking slots</p>
                    <div className='flex gap-4 items-center w-full overflow-x-auto m-5'>
                        {
                            workshopSlots.length ? workshopSlots.map((item, index) => (
                            <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
                                <p>{item[0] && dayOfWeek[item[0].datetime.getDay()]}</p>
                                <p>{item[0] && item[0].datetime.getDate()}</p>
                            </div>
                            )) : (
                            <p className='text-gray-400'>No available slots. Please choose another day or the next available date.</p>
                            )
                        }
                    </div>

                    <div className='flex items-center gap-4 w-full overflow-x-auto m-5'>
                        {workshopSlots.length > 0 ? (
                            workshopSlots[slotIndex].map((item, index) => (
                                item.time.includes("No available slots") ? (
                                    <p className='font-medium text-red-500 px-5 py-2' key={index}>
                                        {item.time}
                                    </p>
                                ) : (
                                    <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
                                        {item.time} - {item.endTime} 
                                    </p>
                                )))) : ( <p className='text font-light text-gray-400'>Loading...</p> )
                        }
                    </div>

                    <button className='btn btn-primary text-white text-sm font-light px-14 py-3 rounded-full shadow-md'>Book this Workshop</button>
                </div>
            </div>
        </div>

        {/* Review ยังไม่เขียน*/}
        <div>
            {/* <RatingWorkshop /> */}
        </div>

        {/* relate workshop ยังไม่เขียน */}
        <div>
            <RelatedWorkshops workshopId={workshopId} category={workshopInfo?.category} />
        </div>
    </div>
  )
}

export default WorkshopInfo
