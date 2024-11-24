import React, { useEffect } from 'react'
import Header from '../components/HomeHeader'
import Banner from '../components/Banner'
import Welcome from '../components/Welcome'
import WhyChoose from '../components/WhyChoose'
import Service from '../components/DiscoverService'
import Workshop from '../components/PopularWorkshop'
import Blogs from '../components/OurBlog'
import VideoHighlight from '../components/VideoHighlight'
import { useLocation } from 'react-router-dom'


const Home = () => {

  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [location])

  return (
    <div className='min-h-[340px]'>
      <Header />
      <Banner />
      <Welcome />
      <WhyChoose />
      <Service />
      <Workshop />
      <Blogs />
      <VideoHighlight />
    </div>
  )
}

export default Home
