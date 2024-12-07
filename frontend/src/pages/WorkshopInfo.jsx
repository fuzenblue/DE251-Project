import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx'
import { assets } from '../assets/assets.js'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import WorkshopHeader from '../components/WorkshopHeader.jsx'
import RelatedWorkshops from '../components/RelatedWorkshops.jsx'
import { toast } from 'react-toastify'
import axios from 'axios'

// 10.50

const WorkshopInfo = () => {

    const { workshopId } = useParams()

    const { workshops, currencySymbol, backendUrl, token, getWorkshopsData } = useContext(AppContext)
    const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    const navigate = useNavigate()

    const [workshopInfo, setWorkshopInfo] = useState(null)
    const [workshopSlots, setWorkshopSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')

    // Combined effect for fetching workshop data and available slots
    useEffect(() => {
        const fetchData = async () => {
            const workshopInfo = workshops.find(workshop => workshop._id === workshopId)
            setWorkshopInfo(workshopInfo)

            if (workshopInfo) {
                getAvailableSlots() // fetch available slots if workshop info is available
            }
        }

        fetchData()
    }, [workshops, workshopId])
    

    const getAvailableSlots = () => {
        const today = new Date() // current date
        const newSlots = [] // create a new array for all slots

        for (let i = 0; i < 7; i++) {
            const currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i) // advance to the next day

            const timeSlots = [] // create slots for the current day
            if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
                // Saturday-Sunday
                timeSlots.push(...generateSlots(currentDate, [9, 13, 17], 3)) // 3 time slots
            } else {
                // Monday-Friday
                timeSlots.push(...generateSlots(currentDate, [11, 16], 3)) // 2 time slots
            }

            if (timeSlots.length === 0) {
                timeSlots.push({
                    datetime: currentDate,
                    time: `No available slots on ${currentDate.toLocaleDateString()}`,
                })
            }

            newSlots.push(timeSlots)
        }

        setWorkshopSlots(newSlots) // set the slots data
    }

    // Helper function to generate slots
    const generateSlots = (date, hoursArray, duration) => {
        const slots = []
        const now = new Date() // current time

        hoursArray.forEach(hour => {
            const startTime = new Date(date)
            startTime.setHours(hour, 0, 0, 0)

            const endTime = new Date(startTime)
            endTime.setHours(startTime.getHours() + duration)

            if (startTime >= now) {
                slots.push({
                    datetime: startTime,
                    time: startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    endTime: endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                })
            }
        })

        return slots
    }

    
    const bookWorkshop = async () => {
        if (!token) {
            toast.warn('Login to book Workshop');
            return navigate('/login');
        }
    
        try {
            if (!workshopSlots[slotIndex] || workshopSlots[slotIndex].length === 0 || !workshopSlots[slotIndex][0]) {
                toast.error('Invalid slot selected or no slots available');
                return;
            }
    
            const date = workshopSlots[slotIndex][0].datetime;
    
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
    
            const slotDate = `${day}_${month}_${year}`;
            // console.log(slotDate);
    
            const { data } = await axios.post(backendUrl + '/api/user/book-workshop', { workshopId, slotDate, slotTime }, { headers: { token } });
            if (data.success) {
                toast.success(data.message);
                getWorkshopsData();
                navigate('/my-booking');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message || 'An error occurred');
        }
    };
    

    
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
                                <img src={assets.info_icon} alt='' />
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

                        <div className='flex gap-4 items-center w-full overflow-x-auto m-5'>
                            {workshopSlots.length > 0 && workshopSlots[slotIndex] ? (
                                workshopSlots[slotIndex].map((item, index) => (
                                    item.time.includes('No available slots') ? (
                                        <p className='font-medium text-red-500 px-5 py-2' key={index}>
                                            {item.time}
                                        </p>
                                    ) : (
                                        <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
                                            {item.time} - {item.endTime}
                                        </p>
                                    )
                                ))
                            ) : (
                                <p className='text font-light text-gray-400'>Loading...</p>
                            )}
                        </div>


                        <button onClick={bookWorkshop} disabled={workshopSlots.length === 0 || !workshopSlots[slotIndex]} className='btn btn-primary text-white text-sm font-light px-14 py-3 rounded-full shadow-md'>Book this Workshop</button>
                    </div>
                </div>
            </div>

            <div>
                <RelatedWorkshops workshopId={workshopId} category={workshopInfo?.category} />
            </div>
        </div>
    )
}

export default WorkshopInfo
