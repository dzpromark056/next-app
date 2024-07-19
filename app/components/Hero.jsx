import React from 'react'
import Image from 'next/image'
import { HERO_CONTENT } from '@/constants'
import profilePic from '../../assets/prp.jpg'
import {motion} from 'framer-motion'
import Cursor from './Cursor'
import { useState } from 'react'
const container = (delay) =>({
  hidden:{x:-100, opacity:0},
  visible:{
      x:0,
      opacity:1,
      transition:{duration:0.5, delay}
  }
})
function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className='border-b border-neutral-teal-900 py-10'>
        <div className='h-[20vh]'></div>
        <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 flex flex-col items-center text-white text-center lg:text-left'>
                        <motion.h1
                        onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>setIsHovered(false)}

                        variants={container(0)} 
                        initial="hidden"
                        animate="visible"
                        className="mx-8 pb-16 text-6xl font-thin tracking-tight   lg:mt-16 lg:text-8xl">
                            Jhon Mark
                        </motion.h1>
                        <motion.span
                        variants={container(0.5)} 
                        initial="hidden"
                        animate="visible"
                        className="mx-8 bg-gradient-to-r from-pink-300 via-slate-500 
                        to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                        Full Stack Developer
                        </motion.span>
                        <motion.p
                        onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>setIsHovered(false)}

                        variants={container(1)} 
                        initial="hidden"
                        animate="visible"
                        className='mx-8 my-2 max-w-xl py-6 font-light tracking-lighter'>
                        {HERO_CONTENT}
                        </motion.p>

                        <motion.a 
                        variants={container(1.5)} 
                        initial="hidden"
                        animate="visible"

                        href="/jhonmarkvergara-resume.docx"
                        download
                        className="mx-8 mt-3  inline-block rounded bg-gray-500 px-3 py-3 text-white text-sm font-semibold hover:bg-blue-700 transition-colors md: mb-10"
                        >
                        Download My Resume
                         </motion.a>                        
                </div>

                <motion.div
                initial={{x:100, opacity:0}}
                animate={{x:0, opacity:1}}
                width={500}
                transition={{duration:1, delay:1.2}}
                className='w-full lg:w-1/3 items-center justify-center m-10'>
                <Image 
               
               style={{borderRadius:"40px"}}     
               src={profilePic} alt="image"  />

                </motion.div>
        </div>
      <Cursor isHovered={isHovered}/>
    </div>
  )
}

export default Hero