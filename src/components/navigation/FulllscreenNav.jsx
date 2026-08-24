import React from 'react'

const FulllscreenNav = () => {
    return (
        <div className='h-screen w-screen bg-amber-400 absolute py-40 text-white'>
            <div >
                <div className='link border-t-3 border-white border-b-3'>
                    <h1 className='relative  text-[8vw]  font-[font1] leading-[0.8] uppercase pt-4 text-center'>
                        Projects
                        
                            <div className='absolute whitespace-nowrap flex items-center overflow-auto overflow-y-hidden h-[8vw] top-0'>
                                <h1>pour toit vour</h1>
                                <img className='h-[5vw] shrink-0 w-[12vw] rounded-full' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b'></img>
                                 <h1>pour toit vour</h1>
                                <img className='h-[5vw] shrink-0 w-[12vw] rounded-full' src='https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c'></img>
                            </div>
                        
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default FulllscreenNav
