import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Service from './pages/AllService.jsx'
import Product from './pages/Products.jsx'
import About from './pages/AboutUs.jsx'
import Blog from './pages/Blogs.jsx'
import Contact from './pages/Contact.jsx'

const App = () => {




  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        < Route path='/' element={<Home />} />
        < Route path='/all-service' element={<Service  />} />
        < Route path='/all-product' element={<Product />} />
        < Route path='/about' element={<About />} />
        < Route path='/blogs' element={<Blog />} />
        < Route path='/contact' element={<Contact />} />
        {/* ถ้าจะเพิ่มหน้าให้เพิ่ม path ด้าย ก้อปตามด้านบนมาได้เลย */}
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
