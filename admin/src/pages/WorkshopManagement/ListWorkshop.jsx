import React from 'react'
import { admin } from '../../assets/assets'
import { workshops } from '../../../../frontend/src/assets/assets'

const ListWorkshop = () => {
  return (
    <div className="list add flex flex-col w-[60%] p-5 bg-base-100 rounded-lg shadow-md pb-24">
      <p className="text-lg font-semibold mb-4">All Workshop List</p>

      <div className="list-table w-full">
        {/* Table Header */}
        <div className="list-table-format title grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-4 p-3 bg-gray-100 rounded font-bold text-gray-600">
          <span>Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span>Action</span>
        </div>

        {/* Workshops */}
        {workshops.map((workshop) => (
          <div key={workshop._id}
               className="grid grid-cols-[0.5fr_1.5fr_1fr_0.8fr_0.4fr] items-center gap-4 p-3 border-b border-gray-200 hover:bg-gray-50">
            <img src={workshop.image} alt={workshop.name} className="w-12 h-12 rounded object-cover" />
            <p>{workshop.name}</p>
            <p>{workshop.category}</p>
            <p>${workshop.price}</p>
            <a href="/"><img className='w-8' src={admin.edit_icon}/></a>
          </div>
        ))}
      </div>
    </div>

  )
}

export default ListWorkshop
