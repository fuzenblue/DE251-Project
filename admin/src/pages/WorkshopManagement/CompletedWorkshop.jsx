import React from 'react'
import { useContext } from 'react'
import { WorkshopContext } from '../../context/WorkshopContext'
import { AdminContext } from '../../context/AdminContext'
import { useEffect } from 'react'
import { AppContext } from '../../context/AppContextProvider'
import { admin } from '../../assets/assets.js'

const CompletedWorkshop = () => {

    const { bookeds, setBookeds, getAllBookeds, cancelBooking } = useContext(WorkshopContext)
    const { calculateAge, slotDateFormat, currencySymbol } = useContext(AppContext)
    const { aToken } = useContext(AdminContext)

    useEffect(() => {
        if (aToken) {
            getAllBookeds()
        }
    }, [aToken])

    return (
        <div className="pt-8 px-8 w-full bg-gray-50">
            <h1 className='mb-3 text-lg font-medium'>All Booking</h1>

            <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'>

                <div className='hidden sm:grid sm:grid-cols-[0.5fr_2fr_1fr_3fr_3fr_1fr_1fr_1fr] grid-flow-col py-3 px-8 border-b'>
                    <p>#</p>
                    <p>Patient</p>
                    <p>Age</p>
                    <p>Date & Time</p>
                    <p>Workshop</p>
                    <p>Ticket</p>
                    <p>Amount</p>
                    <p>Action</p>
                </div>

                {bookeds.map((item, index) => (
                    <div className='flex flex-wrap max-sm:gap-3 sm:grid sm:grid-cols-[0.5fr_2fr_1fr_3fr_3fr_1fr_1fr_1fr] items-center text-gray-500 py-3 px-8 border-b hover:bg-orange-50' key={index}>
                        <p className='max-sm-hidden px-2'>{index + 1}</p>

                        <div className='flex items-center gap-2 px-2'>
                            <img className='w-8 h-8 object-cover rounded-full' src={item.userData.image} alt="" /> <p>{item.userData.name}</p>
                        </div>

                        <p className='max-sm:hidden px-2'>{calculateAge(item.userData.dob)}</p>

                        <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>

                        <div className='flex items-center gap-2 px-2'>
                            <img className='w-8 h-8 object-cover rounded-full' src={item.workshopData.workshopImg} alt="" /> <p>{item.workshopData.name}</p>
                        </div>

                        <p>x{item?.workshopData?.slots_booked[item?.slotDate]?.reverse().find((slot) => slot.slotTime === item?.slotTime)?.ticketCount}</p>
                        <p>{currencySymbol}{item.amount}</p>
                        {item.cancelled
                            ? <p className='text-red-400 text-sm font-medium'>Cancelled</p>
                            : <img onClick={() => cancelBooking(item._id)} className='w-8 ml-2 cursor-pointer' src={admin.cancel_icon} alt="" />
                        }

                    </div>
                ))}
            </div>
        </div>
    )
}

export default CompletedWorkshop
