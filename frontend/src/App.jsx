import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Service from './pages/AllService.jsx'
import About from './pages/AboutUs.jsx'
import Blog from './pages/Blogs.jsx'
import Contact from './pages/Contact.jsx'
import MyProfile from './pages/MyProfile.jsx'
import MyBooking from './pages/MyBooking.jsx'
import WorkshopInfo from './pages/WorkshopInfo.jsx'
import Login from './pages/Login.jsx'
import ProductInfo from './pages/ProductInfo.jsx'

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Bag from './pages/Bag.jsx'
import MyOrder from './pages/MyOrder.jsx'
import MyProduct from './pages/Product.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'

const App = () => {

  return (
    <div>
      <div className='sticky top-0 z-50 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)]'>
        <ToastContainer />
        <div className='mx-5 sm:mx-[10%] '>
          <Navbar />
        </div>
      </div> 
      <Routes>
        < Route path='/' element={<Home />} />

        < Route path='/all-product' element={<MyProduct />} />
        < Route path='/all-service' element={<Service  />} />

        < Route path='/about' element={<About />} />
        < Route path='/blogs' element={<Blog />} />
        < Route path='/contact' element={<Contact />} />
        
        < Route path='/my-bag' element={<Bag />} />
        < Route path='/my-profile' element={<MyProfile />} />
        < Route path='/my-booking' element={<MyBooking />} />
        < Route path='/my-order' element={<MyOrder />} />

        < Route path='/all-product/:productId' element={<ProductInfo />} />
        < Route path='/all-service/:workshopId' element={<WorkshopInfo />} />

        < Route path='/place-order' element={<PlaceOrder />} />

        < Route path='/login' element={<Login />} />
      </Routes>
      <div className='mx-5 sm:mx-[10%]'>
        <Footer/>
      </div>
    </div>
  )
}

export default App
