import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'

import Dashboard from './pages/Dashboard.jsx'
import AddProduct from './pages/ProductManagement/AddProduct.jsx'
import ListProduct from './pages/ProductManagement/ListProduct.jsx'
import Order from './pages/ProductManagement/Order.jsx'

import AddWorkshop from './pages/WorkshopManagement/AddWorkshop.jsx'
import ListWorkshop from './pages//WorkshopManagement/ListWorkshop.jsx'
import Booking from './pages/WorkshopManagement/Booking.jsx'

import AddBlogs from './pages/BlogManagement/AddBlogs.jsx'
import ListBlogs from './pages/BlogManagement/ListBlogs.jsx'

function App() {


  return (
    <div>
      <div className='sticky top-0 z-50 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)]'>
        <div className='mx-5 sm:mx-[10%] '>
          <Navbar />
        </div>
        <Sidebar />
      </div>
      <Routes>
        < Route path='/' element={<Dashboard />} />
        < Route path='/product-add' element={<AddProduct  />} />
        < Route path='/product-list' element={<ListProduct />} />
        < Route path='/product-order' element={<Order />} />
        < Route path='/workshop-add' element={<AddWorkshop />} />
        < Route path='/workshop-list' element={<ListWorkshop />} />
        < Route path='/workshop-booking' element={<Booking />} />
        < Route path='/blogs-add' element={<AddBlogs />} />
        < Route path='/blogs-list' element={<ListBlogs />} />
      </Routes>
    </div>
  )
}

export default App
