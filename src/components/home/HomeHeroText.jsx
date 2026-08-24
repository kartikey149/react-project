import React from 'react'
import Video  from './Video'
const HomeHeroText = () => {
    return (
        <div className='font-[font1] pt-2 text-center w-full'>
            <div className='text-[9vw] uppercase flex items-center justify-center leading-[9vw]'>L'étincelle</div>
            <div className='text-[9vw] uppercase justify-center leading-[9vw] flex  items-center '>qui
                <div className='h-[9vw] w-[20vw] rounded-full overflow-hidden'>
                    <Video />
                </div>génère
            </div>
            <div className='text-[8vw] uppercase justify-center leading-[9vw] whitespace-nowrap'>la créativité</div>
            
            
           
        </div>
    )
}

export default HomeHeroText

