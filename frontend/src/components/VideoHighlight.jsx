import React from 'react'
import { assets } from '../assets/assets'

const VideoHighlight = () => {
  return (
    <div className="mt-6 relative">
      <div className="h-[280px] w-full">
        <video className="h-full w-full object-cover" autoPlay muted loop>
          <source src={assets.video_ads} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <div className="justify-items-center text-center text-white">
          <div className='bg-dark-green w-24 h-8 rounded-full px-16 mb-3'></div>
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-primary">Tropical </span>freshness in <br /> every <span className="text-primary">Pineapple</span>
          </h1>
          <img src={assets.play_icon} alt="" className="mt-4 mx-auto w-12 h-12" />
        </div>
      </div>
    </div>
  )
}

export default VideoHighlight
