import React from 'react'
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
    <>
      <div className='app'>
        <Navbar />
        <Routes>
          < Route path='/' element={<Home />} />
          < Route path='/cart' element={<Service  />} />
          < Route path='/order' element={<Product />} />
          < Route path='/verify' element={<About />} />
          < Route path='/myorders' element={<Blog />} />
          < Route path='/myorders' element={<Contact />} />
          {/* ถ้าจะเพิ่มหน้าให้เพิ่ม path ด้าย ก้อปตามด้านบนมาได้เลย */}
          
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
