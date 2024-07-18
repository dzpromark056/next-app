'use client'
import aboutImg from '../../assets/me.jpg'
import { ABOUT_TEXT } from '../../constants'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { useState } from 'react'
import Cursor from './Cursor'
const About = () => {
    const [isHovered, setIsHovered] = useState(false)
  return (
    <div className='border-b border-neutral-900 pb-4 text-white'>
        <h2 className='my-20 text-center text-4xl'>About 
            <span className='text-neutral-500'> Me</span>
        </h2>
        <div className='flex flex-wrap'>
            <motion.div
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x: -100}}
              transition={{duration:0.5}}
            className='w-full lg:w-1/2 lg:p-8 '>
                    <div className='flex items-center justify-center'>
                         <Image width={400}  className='rounded-2xl' src={aboutImg} alt="about" />
                    </div>

            </motion.div>
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.5}}

            className='w-full lg:w-1/2'>
                    <div
                    className="flex justify-center lg:justify-start lg:py-20">
                        <p 
                        onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>setIsHovered(false)}
                        className='mt-40 max-w-xl py-6 leading-1 text-center z-20 sm:mt-5'>
                        {ABOUT_TEXT} </p>
                    </div>
            </motion.div>
        </div>
        <Cursor isHovered={isHovered} />
    </div>
)
}

export default About