import React from 'react';
import { CONTACT } from '../../constants';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
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
        
    </div>
  );
}

export default Contact;
