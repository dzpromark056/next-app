import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { DiRedis } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { SiExpress } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";


import { FaPython } from "react-icons/fa";

import { animate, motion } from "framer-motion"

const iconVariants = (duration) =>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType: "reverse"
        }
    }
})
import React from 'react'

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 z-10 relative ">
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl text-white'>
        Technologies
        </motion.h2>

        
        <motion.div 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl text-white border-4 border-neutral-800 p-4">
                <TbBrandNextjs className='text-7xl'/>
            </motion.div>


            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className='text-7xl text-green-500'/>
            </motion.div>


            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiRedis className='text-7xl text-red-400'/>
            </motion.div>


            <motion.div 
            variants={iconVariants(7)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div>


            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className='text-7xl text-sky-700'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className='text-7xl text-sky-700'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl text-white border-4 border-neutral-800 p-4">
                <SiExpress className='text-7xl text-grey-300'/>
            </motion.div>
            
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPhp className='text-7xl text-sky-700'/>
            </motion.div>
            
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaLaravel className='text-7xl text-red-700'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTypescript className='text-7xl text-sky-400'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrGraphQl className='text-7xl text-sky-700'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className='text-7xl text-sky-700'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className='text-7xl text-sky-700'/>
            </motion.div>



            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className='text-7xl text-violet-500'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGit className='text-7xl text-orange-700'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaLinux className='text-7xl text-white'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript className='text-7xl text-sky-700'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className='text-7xl text-red-700'/>
            </motion.div>
        </motion.div>
        <div className='absolute inset-x-0 bottom-0 h-96 overflow-hidden'>
            <div className='absolute left-1/2 -translate-x-1/2 bottom-0
             translate-y-1/2 h-[50px] w-full bg-rose-500/30 blur-3xl'>
            </div>
            <div className='absolute left-1/2 -translate-x-1/2 bottom-0
             translate-y-1/2 h-[75px] w-2/3 bg-rose-500/30 blur-3xl'>
            </div>
        </div>
    </div>
  )
}

export default Technologies