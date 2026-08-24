import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const arr = [
  'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
  'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
  'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
  'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
  'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
  'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
  'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
  'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6',
]

const Agence = () => {
  const containerRef = useRef(null)
  const imageRef = useRef(null)

  useGSAP(
    () => {
      
      ScrollTrigger.refresh()

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 0',
        end: 'bottom 100%',
        scrub: true,
        onUpdate: (self) => {
          const index = Math.min(
            Math.floor(self.progress * arr.length),
            arr.length - 1
          )
          if (imageRef.current) {
            imageRef.current.src = arr[index]
          }
        },
      })
    },
    { scope: containerRef }
  )

  return (
    
/* 
      1. Overall container controls total scroll duration (h-[250vh])
      <div className='relative w-screen h-[250vh] overflow-x-hidden z-10'>
        
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="absolute h-[20vw] w-[12vw] top-[10vh] left-[30vw] rounded-3xl overflow-hidden">
            <img
              ref={imageRef}
              src={arr[0]}
              alt="Team member"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="z-20 -mt-[100vh] pt-[15vh]">
          <div className="text-[19vw] uppercase leading-[17vw] text-center font-[font2] w-full">
            <h1>
              Soixan7e
              <br />
              Douze
            </h1>
          </div>

          <div className="text-[1.8vw] w-full px-5 mt-[20vh] pb-[20vh]">
            <p className="pl-[55vw]">
              Notre curiosité nourrit notre créativité. On reste humbles et on dit
              non aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
          </div>
        </div>

        <div className='sticky h-[20vw] w-[15vw] ml-[30vw] mt-[15vw]'>
          <img className='w-full h-full object-cover rounded-3xl' src={arr[0]} alt="Team member" />
        </div>

        <div className='relative text-[20vw] leading-[18vw] text-center mt-[25vw] font-[font2] w-full z-10'>
          <h1 className='uppercase'>
            Soixan7e
            <br />
            Douze
          </h1>
        </div>

        <div className='text-[2vw] w-full'>
          <p className="pl-[55vw]">
            Notre curiosité nourrit notre créativité. On reste humbles et on dit
            non aux gros egos, même le vôtre. Une marque est vivante. Elle a des
            valeurs, une personnalité, une histoire. Si on oublie ça, on peut
            faire de bons chiffres à court terme, mais on la tue à long terme.
            C’est pour ça qu’on s’engage à donner de la perspective, pour
            bâtir des marques influentes.
          </p>
        </div>

      </div> 
    */
     
      <div ref={containerRef} className='relative w-full h-[250vh]'>
      <div className='sticky top-[18vw] z-0 h-[20vw] w-[15vw] ml-[30vw]'>
        <img
          ref={imageRef}
          className='w-full h-full object-cover rounded-3xl'
          src={arr[0]}
          alt="Team member"
        />
      </div>

     
      <div className='relative z-10 mt-[12vw]'>
        <div className='text-[20vw] leading-[18vw] text-center font-[font2] w-full'>
          <h1 className='uppercase'>
            Soixan7e
            <br />
            Douze
          </h1>
        </div>

        <div className='text-[2vw] w-full mt-[20vh] pb-[20vh]'>
          <p className="pl-[55vw]">
            Notre curiosité nourrit notre créativité. On reste humbles et on dit
            non aux gros egos, même le vôtre. Une marque est vivante. Elle a des
            valeurs, une personnalité, une histoire. Si on oublie ça, on peut
            faire de bons chiffres à court terme, mais on la tue à long terme.
            C’est pour ça qu’on s’engage à donner de la perspective, pour
            bâtir des marques influentes.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Agence