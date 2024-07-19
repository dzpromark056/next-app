import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link'
import { translate,blur } from '../../anim'
import {motion} from 'framer-motion'
function Index({links, selectedLink, setSelectedLink}) {
    
    const getchar = (title) =>{
        let chars = []
        title.split("").forEach((char, index)=>{
            chars.push(
                <motion.span custom={[index * 0.02, (title.length - index) * 0.01]} variants={translate} initial="initial" animate="enter" exit="exit"  key={`c_${index}`}>
                    {char}
                </motion.span>
            )
        })
        return chars;
    }
  return (
    <div className={styles.body}>
        {
            links.map((link, index)=>{
                const {title, href} = link
                return <Link
                onMouseOver={()=>{setSelectedLink({isActive: true, index:index})}}
                onMouseLeave={()=> {setSelectedLink({isActive:false, index})}}
                href={href} key={index}>
                    <motion.p variants={blur} initial="initial" animate={selectedLink.isActive && selectedLink.index != index ? "open" : "closed"}>
                        {getchar(title)}
                    </motion.p>
                </Link>
            })
        }
    </div>
  )
}

export default Index