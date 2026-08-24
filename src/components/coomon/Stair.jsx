import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const Stair = (props) => {

  const currpath = useLocation().pathname

  const pageref = useRef(null)
  const stairp = useRef(null)
  useGSAP(() => {
    const t1 = gsap.timeline()
    t1.to(stairp.current,
      {
        display: 'block'
      })
    t1.from('.stair', {
      height: 0,
      stagger: { amount: -0.25 }
    })
    t1.to('.stair',
      {
        y: '100%',
        stagger: { amount: -0.25 }
      })
    t1.to(stairp.current,
      {
        display: 'none'
      })
    t1.to('.stair', {
      y: '0%',
    })
    gsap.from(pageref.current, {
      opacity: 0,
      delay: 1.4,
      scale: 1.2
    })
  },
    [currpath])

  return (
    <div>

      {/* STAIRS */}
      <div
        ref={stairp}
        className='h-screen w-full fixed z-20 top-0 left-0'
      >
        <div className='h-screen w-full flex'>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
        </div>
      </div>

      {/* PAGE */}
      <div ref={pageref}>
        {props.children}
      </div>

    </div>
  )
}

export default Stair