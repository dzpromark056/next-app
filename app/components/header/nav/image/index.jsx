import React from 'react'
import styles from './style.module.scss'
import {motion} from 'framer-motion'
import { opacity } from '../../anim'
import Image from 'next/image'
function Index({src, isActive}) {
  return (
    <motion.div className={styles.imageContainer} variants={opacity} animate={isActive ? "open" : "closed"}>
        <Image 
        src={`/imagess/${src}`}
        fill={true}
        alt='image'
        />
    </motion.div>
  )
}

export default Index