import React, { useContext } from 'react'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import AdminLogin from './pages/AdminLogin.jsx'

import Dashboard from './pages/Dashboard.jsx'

import AddWorkshop from './pages/WorkshopManagement/AddWorkshop.jsx'
import ListWorkshop from './pages//WorkshopManagement/ListWorkshop.jsx'
import Booking from './pages/WorkshopManagement/Booking.jsx'


import { AdminContext } from './context/AdminContext.jsx'
import AddProduct from './pages/ProductManagement/AddProduct.jsx'
import ListProduct from './pages/ProductManagement/ListProduct.jsx'
import Orders from './pages/ProductManagement/Orders.jsx'


function App() {

  const { aToken } = useContext(AdminContext)

  return aToken ? (
    <div>
        <ToastContainer/>
        <div>
            <Navbar />
            <div className='flex'>
              <Sidebar />
              <Routes>
                < Route path='/' element={<Dashboard />} />
                < Route path='/admin-dashboard' element={<Dashboard />} />
                < Route path='/workshop-add' element={<AddWorkshop />} />
                < Route path='/workshop-list' element={<ListWorkshop />} />
                < Route path='/workshop-booking' element={<Booking />} />

                < Route path='/product-add' element={<AddProduct />} />
                < Route path='/product-list' element={<ListProduct />} />
                < Route path='/product-orders' element={<Orders />} />

              </Routes>
            </div>
      </div>
    </div>
  ) : (
    <>
      <AdminLogin />
      <ToastContainer/>
    </>
  )
}

export default App
