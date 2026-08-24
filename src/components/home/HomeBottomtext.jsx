import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomtext = () => {
  return (
    <div>
         <div className='font-[font1] flex items-center justify-center w-full'>
                <Link className='text-[7vw] sm:text-5xl md:text-6xl lg:text-[5vw] hover:border-green-400 hover:text-green-400 px-10  m-[0.5vw] border border-2 rounded-full uppercase ' to='/agence'>Agence</Link>
                <Link className='text-[7vw] sm:text-5xl md:text-6xl lg:text-[5vw]  hover:border-green-400 hover:text-green-400 px-10   m-[0.5vw]  border border-2 rounded-full uppercase' to='/projects'>Projects</Link>
            </div>
    </div>
  )
}

export default HomeBottomtext
