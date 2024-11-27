import React from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import AdminLogin from './pages/AdminLogin.jsx'

import Dashboard from './pages/Dashboard.jsx'
import AddProduct from './pages/ProductManagement/AddProduct.jsx'
import ListProduct from './pages/ProductManagement/ListProduct.jsx'
import Order from './pages/ProductManagement/Order.jsx'

import AddWorkshop from './pages/WorkshopManagement/AddWorkshop.jsx'
import ListWorkshop from './pages//WorkshopManagement/ListWorkshop.jsx'
import Booking from './pages/WorkshopManagement/Booking.jsx'

import AddBlogs from './pages/BlogManagement/AddBlogs.jsx'
import ListBlogs from './pages/BlogManagement/ListBlogs.jsx'
import RightSidebar from './components/RightSidebar.jsx';

function App() {


  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr />

      <div className='flex'>
        <Sidebar/>

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
            < Route path='/login' element={<AdminLogin />} />
          </Routes>
        < RightSidebar />
      </div>
    </div>
  )
}

export default App
