'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from './style.module.scss'
import {motion, AnimatePresence} from 'framer-motion'
import { background, opacity } from './anim';
import Nav from './nav'
import { FaFacebook,FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa"


export default function Index() {

    const [isActive, setIsActive] = useState(false)

    return (
        <div className={styles.header}>
            <div className={styles.bar}>
                <Link className='text-2xl' href="/">Mark()</Link>
                
                <div onMouseDown={()=>{setIsActive(!isActive)}} className={styles.el}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    <div className={styles.label}>
                        <motion.p variants={opacity} animate= {isActive ? "closed" : "open"}>Menu</motion.p>
                        <motion.p variants={opacity} animate= {!isActive ? "closed" : "open"}>Close</motion.p>
                    </div>
                </div>

                <motion.div variants={opacity} animate= {isActive ? "closed" : "open"} className={styles.shopContainer}>
                    
                    <div className="flex items-center justify-between pr-5 gap-5 text-2xl">
                    <a href="https://web.facebook.com/mark.casuga.37"><FaFacebook /></a>
                    <a href="https://www.instagram.com/hei_its_jm/"><FaInstagram /></a>
                    <FaTwitterSquare />
                    <FaGithub />
                    </div>
                </motion.div>
            </div>
            <motion.div className={styles.background} variants={background} animate={isActive ? "open" : "closed"}></motion.div>
            <AnimatePresence mode='wait'>
            {isActive && <Nav />}
            </AnimatePresence>
            
        </div>
    )
}
