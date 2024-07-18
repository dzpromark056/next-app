import {EXPERIENCES} from '../../constants'
import { motion } from "framer-motion"
import Cursor from './Cursor'
import { useState } from 'react'

const Experience = () => {
    const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="border-b border-neutral-900 pb-4 h-screen ">
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className='my-20 text-center text-4xl text-white'>Experience
        </motion.h2>


        <div>
            {EXPERIENCES.map((experience, index)=>(
                <div 
                
                key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:.7}}
                    className="w-full lg:w-1/4 ">
                        <p 
                        onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>setIsHovered(false)}

                        className='mb-2 text-center z-20 mt-10 text-sm text-neutral-400'>{experience.year}</p>
                    </motion.div>
                    <motion.div 
                     whileInView={{opacity:1, x:0}}
                     initial={{opacity:0, x:100}}
                     transition={{duration:1}}
                    className="w-full max-w-xl lg:w-1/2 text-justify ">
                        <h6 className='mb-2 font-semibold '>
                            {experience.role} - <span className='text-sm  text-purple-400'>
                            {experience.company}
                            </span>
                        </h6>
                        <p
                        onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>setIsHovered(false)}
                        
                        className=' mb-4 text-neutral-400 '>
                            {experience.description}
                        </p>
                        {experience.technologies.map((tech, index)=>(
                            <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2
                            py-1 text-sm font-medium text-purple-800'>{tech}</span>
                        ))}
                    </motion.div>
                </div>
               
            ))}
        </div>
        <Cursor isHovered={isHovered}/>
    </div>
  )
}

export default Experience