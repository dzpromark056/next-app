import React from 'react'
import styles from './style.module.scss'
import {motion} from 'framer-motion'
import { height } from '../anim'
import Body from './body'
import Footer from './footer'
import { useState } from 'react'
import Image from './image'
function Index() {
  const links = [
    {
        title: 'Home',
        href: '/',
        src: 'home.png'
    },
    {
        title: 'technologies',
        href: '/shop',
        src: 'technologies.jpg'
    },
    {
        title: 'Experience',
        href: '/lookbook',
        src: 'experience.jpg'
    },
    {
        title: 'Contact',
        href: '/contact',
        src: 'contact.jpg'
    }
]

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0})


  return (
    <motion.div className={styles.nav} variants={height} initial="initial" animate="enter" exit="exit">
       <div className={styles.wrapper}>
          <div className={styles.container}>
              <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
              <Footer />
          </div>
          <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive}/>
       </div>
    </motion.div>
  )
}

export default Index