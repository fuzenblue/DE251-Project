import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { workshops } from '../assets/assets'
import { Link } from 'react-router-dom';

const WorkshopDisplay = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-[13%]">
        {workshops.map((workshop) => (
            <Link key={workshop._id} to={`/workshop_info/${workshop._id}`} >
            <div className="border rounded-lg p-4 hover:shadow-lg">
                <img src={workshop.image} alt={workshop.name} className="w-full h-48 object-cover rounded-lg" />
                <h3 className="text-lg font-semibold mt-2 cursor-pointer hover:text-primary">{workshop.name}</h3>
                <p className="text-sm text-gray-500">{workshop.about}</p>
                <p className="text-blue-600 hover:underline mt-2 inline-block">View Details</p>
            </div>
            </Link>
        ))}
    </div>

  )
}


export default WorkshopDisplay
