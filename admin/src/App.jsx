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

  const url = "http://localhost:4000"

  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr />

      <div className='flex'>
        <Sidebar/>

          <Routes>
            < Route path='/admin-dashboard' element={<Dashboard url={url}/>} />
            < Route path='/product-add' element={<AddProduct  url={url}/>} />
            < Route path='/product-list' element={<ListProduct url={url}/>} />
            < Route path='/product-order' element={<Order url={url}/>} />
            < Route path='/workshop-add' element={<AddWorkshop url={url}/>} />
            < Route path='/workshop-list' element={<ListWorkshop url={url}/>} />
            < Route path='/workshop-booking' element={<Booking url={url}/>} />
            < Route path='/blogs-add' element={<AddBlogs url={url}/>} />
            < Route path='/blogs-list' element={<ListBlogs url={url}/>} />
            < Route path='/login' element={<AdminLogin url={url}/>} />
          </Routes>
        < RightSidebar />
      </div>
    </div>
  )
}

export default App
