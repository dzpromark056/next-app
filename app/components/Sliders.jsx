import React, { useRef } from 'react'
import Picture1 from '../../public/slider/1.jpg'
import Picture2 from '../../public/slider/2.jpg'
import Picture3 from '../../public/slider/3.jpg'
import Phrase from './Phrase'
import { useScroll, useTransform, motion } from 'framer-motion'


function Sliders() {

const container = useRef(null)
const {scrollYProgress} = useScroll({
    target:container,
    offset: ['start end', 'end start']
})

  return (
    <div className='pt-10 overflow-hidden '>
        
        <div className='h-[100vh] pt-10'>

            <div ref={container}>
                <Slider src={Picture1} left="-55%" progress={scrollYProgress} direction="left"/>
                <Slider src={Picture2} left="-15%" progress={scrollYProgress} direction="right"/>
                <Slider src={Picture3} left="-40%" progress={scrollYProgress} direction="left"/>

            </div>
            <div className='h-[100vh]'>
            </div>
        </div>
    </div>
  )
}

const Slider = ({src, left, progress, direction}) =>{
    const dir = direction == "left" ? -1 : 1;
    const x = useTransform(progress,[0,1],[-250 * dir, 250 * dir])

    return (
        <motion.div className='relative flex whitespace-nowrap' style={{left,x}}>
            <Phrase src={src}/>
            <Phrase src={src}/>
            <Phrase src={src}/>

        </motion.div>
    )
}

export default Sliders