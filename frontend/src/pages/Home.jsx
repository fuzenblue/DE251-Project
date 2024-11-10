import React from 'react'
import Header from '../components/HomeHeader'
import Banner from '../components/Banner'
import Welcome from '../components/Welcome'
import WhyChoose from '../components/WhyChoose'
import Product from '../components/BestSellProduct'
import Service from '../components/DiscoverService'
import Workshop from '../components/PopularWorkshop'
import Blogs from '../components/OurBlog'
import VideoHighlight from '../components/VideoHighlight'


const Home = () => {
  return (
    <div className='min-h-[340px]'>
      <Header />
      <Banner />
      <Welcome />
      <WhyChoose />
      <Product />
      <Service />
      <Workshop />
      <Blogs />
      <VideoHighlight />
    </div>
  )
}

export default Home
