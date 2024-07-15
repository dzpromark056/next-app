import React from 'react';
import { CONTACT } from '../../constants';
import { motion } from "framer-motion";
import Footer from './Footer';
import  { useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion'
const Contact = () => {

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


  return (
    <div className='border-b border-neutral-900 '>
        <h2 className='my-10 text-center text-4xl text-white'>
                Get in Touch
        </h2>
        <div className="text-center tracking-tighter">
        <p className='my-4 text-2xl text-red-600'>This Portfolio Website is not yet Done due to my computer is not Functioning well!</p>          
            <p className='my-4 text-white'>{CONTACT.address}</p>
            <p className="my-4 text-white">{CONTACT.phoneNo}</p>
            <a href="#" className='text-white'>{CONTACT.email}</a>

            <p className='text-white pt-10'>
            © 2024 Vergara&apos;s Corporation. All Rights Reserved.
            </p>
        </div>
        <Footer  scrollProgress={scrollYProgress}/>

    </div>
    
  );
}

export default Contact;
