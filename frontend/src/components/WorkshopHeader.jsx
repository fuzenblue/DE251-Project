import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx'

const WorkshopHeader = () => {
    const { workshopId } = useParams()
    const { id } = useParams()

    const { workshops } = useContext(AppContext)
    const [ workshopInfo, setWorkshopInfo ] = useState(null)
    const [activeIndex, setActiveIndex] = useState(0)

    // ฟังก์ชันในการค้นหาข้อมูล workshop
    const fetchWorkshopInfo = async () => {
        const workshopInfo = workshops.find(workshops => workshops._id === workshopId)
        setWorkshopInfo(workshopInfo)
    }


    useEffect(() => {
        fetchWorkshopInfo()
    }, [workshops, workshopId])

    useEffect(() => {
        const workshop = workshops.find(workshop => workshop._id === id)
        setWorkshopInfo(workshop)
      }, [id, workshops])


    return (
        <div className='flex flex-col md:flex-row gap-4 h-[20rem] md:h-[26rem]'>
            {/* Image and Video */}
            <div className="relative carousel pb-2 grid grid-cols-1 md:grid-cols-3">
                <div className='px-4 col-span-1'>
                    {workshopInfo?.video ? (
                        <video className="rounded-xl w-full h-full object-cover" autoPlay muted loop controls>
                            <source src={workshopInfo.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : null}
                </div>

                <div className="relative col-span-2">
                    <div className="carousel w-full h-full pt-2 items-center max-h-[400px] overflow-hidden">
                        {/* Carousel items */}
                        {Array.isArray(workshopInfo?.images) && workshopInfo?.images.map((image, index) => (
                            <div key={index} className={`carousel-item w-full h-full ${activeIndex === index ? "block" : "hidden"}`}>
                                <img src={image} alt={`image ${index + 1}`} className="w-full h-full rounded-xl object-cover" />
                            </div>
                        ))}
                    </div>


                    {/* Navigation dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                        {Array.isArray(workshopInfo?.images) && workshopInfo?.images.map((_, i) => (
                            <button key={i} className={`w-4 h-1 rounded-2xl transition-all ${ activeIndex === i ? "bg-white w-8" : "bg-white/50" }`} onClick={() => setActiveIndex(i)} />
                        ))}
                    </div>

                    {/* Previous and Next buttons */}
                    <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
                        <button className="btn btn-circle btn-primary" onClick={() => setActiveIndex((prev) => (prev === 0 ? workshopInfo?.images.length - 1 : prev - 1))} > ❮ </button>
                    </div>
                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
                        <button className="btn btn-circle btn-primary" onClick={() => setActiveIndex((prev) => (prev === workshopInfo?.images.length - 1 ? 0 : prev + 1))} > ❯ </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default WorkshopHeader
