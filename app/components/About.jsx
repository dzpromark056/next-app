import aboutImg from '../../assets/me.jpg'
import { ABOUT_TEXT } from '../../constants'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { useState, useEffect } from 'react'
const About = () => {
    const [mousePosition, setMousePosition] = useState({
        x:0,
        y:0
    })
    const [cursorVariant, setCursorVariant] = useState("default")

    useEffect(()=>{
        const mousemove = (e) =>{
             setMousePosition({
                x: e.clientX,
                y: e.clientY
             })
        }
        window.addEventListener('mousemove',mousemove);
        return ()=>{
            window.removeEventListener('mousemove', mousemove)
        }
    },[])

        const variants = {
            default:{
                x:mousePosition.x,
                y:mousePosition.y
            },
            text:{
                height:150,
                width:150,
                x:mousePosition.x - 75,
                y:mousePosition.y - 75,
                backgroundColor: "yellow",
                mixBlendMode:"difference"
            }
        }
        const textEnter = () =>{setCursorVariant("text")}
        const textLeave = () =>{setCursorVariant("default")}

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
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave}
                        className='mt-40 max-w-xl py-6 leading-1 text-center sm:mt-5'>
                        <h1 className='py-4 text-3xl'>Hover Here</h1>
                        {ABOUT_TEXT} </p>
                    </div>
            </motion.div>
        </div>
        <motion.div 

        style={{height:'32px',width:'32px',borderRadius:'50%',backgroundColor:'white',position:'fixed',top:0, left:0,pointerEvents:"none"}}
                variants={variants}
        animate={cursorVariant}
        >

        </motion.div>
    </div>
)
}

export default About