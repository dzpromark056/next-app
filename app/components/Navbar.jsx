import React from 'react'
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa";

function Navbar() {
  return (

        <div className='flex items-center justify-between '>
                <div className='p-5 lg:p-5'>
                    <h3 className='text-3xl font-thin text-white'>Mark()</h3>
                </div>
                <div className='flex items-center justify-between text-white gap-4 text-2xl px-5'>
                    <a href="https://web.facebook.com/mark.casuga.37"><FaFacebook /></a>
                    <a href="https://www.instagram.com/hei_its_jm/"><FaInstagram /></a>
                    <FaTwitterSquare />
                    <FaGithub />
                </div>
        </div>

    
    
  )
}

export default Navbar