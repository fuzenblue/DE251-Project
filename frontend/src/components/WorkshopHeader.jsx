import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext.jsx';

const WorkshopHeader = () => {
    const { workshopId } = useParams()
    const { id } = useParams()

    const { workshops } = useContext(AppContext)
    const [ workshopInfo, setWorkshopInfo ] = useState(null)

    // ฟังก์ชันในการค้นหาข้อมูล workshop
    const fetchWorkshopInfo = async () => {
        const workshopInfo = workshops.find(workshops => workshops._id === workshopId)
        setWorkshopInfo(workshopInfo)
    }

    useEffect(() => {
        fetchWorkshopInfo()
    }, [workshops, workshopId])

    useEffect(() => {
        const workshop = workshops.find(workshop => workshop._id === id);
        setWorkshopInfo(workshop)
      }, [id, workshops])

    return (
        <div className='flex flex-col md:flex-row gap-5'>
            {/* Image */}
            <div className='relative carousel w-full h-[22rem] md:h-[26rem] lg:h-[30rem]'>
                {workshopInfo ? (
                    [workshopInfo.image1, workshopInfo.image2, workshopInfo.image3, workshopInfo.image4, workshopInfo.image5].map((image, index) => (
                    <div key={index} id={`slide${index + 1}`} className='carousel-item relative w-full'>
                    <img
                        src={image}
                        className='w-full object-cover rounded-md'
                        alt={`workshop-image-${index}`}
                    />
                    <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
                        <a href={`#slide${index === 0 ? 5 : index}`} className='btn btn-circle btn-primary text-white bg-opacity-70'>
                        ❮
                        </a>
                        <a href={`#slide${index === 4 ? 1 : index + 2}`} className='btn btn-circle btn-primary text-white bg-opacity-70'>
                        ❯
                        </a>
                    </div>
                    </div>
                ))
                ) : (
                <div>Loading...</div> 
                )}
            </div>
        </div>
    )
}

export default WorkshopHeader
