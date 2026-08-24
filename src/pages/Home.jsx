import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomtext from '../components/home/HomeBottomtext'
import HomeBetweentext from '../components/home/HomeBetweentext'


const Home = () => {
  return (
    <div className='overflow-x-hidden text-white'>
      <div className='h-screen z-0 w-screen fixed overflow-hidden' >
      <Video />
      </div>
      <div className='h-screen z-10 w-screen relative flex flex-col justify-between' >
      <HomeHeroText />
      <HomeBetweentext />
      <HomeBottomtext /> 
       </div>
      <div>

      </div>
    </div>
  )
}

export default Home
