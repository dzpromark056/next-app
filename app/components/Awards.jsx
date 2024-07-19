import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'

function Awards() {
  return (
    <div className='border-b border-teal-950 pb-10 text-white'>
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:100}}
        transition={{duration:1.5}}
        className='text-center text-4xl py-10'>Awards/Certificates

        </motion.h1>
        <div className='flex flex-wrap py-10'>
                <motion.div
                 whileInView={{opacity:1, x:0}}
                 initial={{opacity:0, x: -100}}
                 transition={{duration:0.5}}
                className='w-full lg:w-1/2'>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src='/media/humanex.jpg' alt='image' className='py-5' width={500} height={300}/>
                            <p className='text-1xl text-center'>Finalist Philippine Startup Challenge 8 pitching competition Region1.</p>
                        </div>            
                </motion.div>
                <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:0.5}}
                className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center justify-center'>
                            <Image src='/media/file.png' alt='image' width={500} height={300}/>
                            <p className='text-1xl text-center'>Research Symposium.</p>
                    </div>
                </motion.div>
        </div>
    </div>
  )
}

export default Awards