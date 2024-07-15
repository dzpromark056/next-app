import React from 'react'
import { useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import {motion} from 'framer-motion'
function Footer({scrollProgress}) {

    const container = useRef();
    const texts = useRef([]);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    });

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (e) => {
            texts.current.forEach((text, i) => {
                text.setAttribute('startOffset', -40 + (i * 40) + (e * 40) + "%");
            });
        });

        return () => {
            unsubscribe();
        };
    }, [scrollYProgress]);

    const y = useTransform(scrollProgress, [0,1],[-700,0])
  return (
  <div className='h-[200px]  overflow-hidden bg-black'>  
    <motion.div style={{y}} className='h-full  flex  items-center justify-center  gap-5'>
        {
            [...Array(5)].map((_,i)=>{
                return <img className='h-[80px] w-[80px]' key={i + 'i'} src={`/media/${i +1}.jpg`} alt="" />
            })
        }
    </motion.div>
  </div>
  )
}

export default Footer