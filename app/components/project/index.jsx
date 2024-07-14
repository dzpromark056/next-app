'use client';
import React from 'react'
import styles from './style.module.css';

export default function index({index, title, setModal, description, technology}) {

    return (
        <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={styles.project}>
            <h2 className='p-10 text-white'>{title}</h2>
            <p className='text-sm text-white'>{description}</p>
            <br />
            {technology.map((tech, index)=>(
                <span key={index} className='mb-2 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>{tech}</span>
            ))}
        </div>
    )
}