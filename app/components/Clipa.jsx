"use client"
import React, { useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';

function Clipa() {
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
        <div className='border-b border-teal-900' ref={container}>
            <h1 className='text-white text-center text-3xl py-10 lg:text-5xl'>Hi!</h1>
            <h1 className='text-white text-center text-3xl py-4 lg:text-5xl'>I&apos;m</h1>

            <svg className='mb-40' viewBox='0 0 250 90'>
                <path id='curve' fill="none" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68" />
                <text fill='white' className='text-[6px]' style={{ color: "red" }}>
                    {
                        [...Array(3)].map((_, i) => {
                            return <textPath key={i} ref={ref => texts.current[i] = ref} href='#curve' startOffset={i * 40 + "%"}>FullStack Developer: Jhon Mark Vergara</textPath>
                        })
                    }
                </text>
            </svg>
        </div>
    );
}

export default Clipa;
