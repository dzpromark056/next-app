import React from 'react'
import { useState, useEffect ,useRef} from 'react'
import gsap from 'gsap'
function Cursor({isHovered}) {
    const colors = [
        "#c32d27",
        "#f5c63f",
        "#457ec4",
        "#356fdb"
    ]

    const delay = isHovered ? 0.015 : 0.005
    const size = isHovered ? 300 : 40
    const circles = useRef([]);
    const mouse = useRef({
        x:0,
        y:0
    })
    const delayedMouse = useRef({
        x:0,
        y:0
    })
    const manageMouseMove = (e) =>{
        const {clientX, clientY} = e;
        mouse.current ={
            x:clientX,
            y:clientY
        }
        moveCircle(mouse.current.x, mouse.current.y)
    }
    
    const lerp = (x,y,a) => x * (1 - a) + y *  a

    const moveCircle = (x,y) =>{
        circles.current.forEach((circle,i)=>{
            gsap.set(circle,{x,y, xPercent: -50, yPercent:-50})

        })
    }

    const animate = () =>{
        const { x, y } = delayedMouse.current

        delayedMouse.current = {
            x: lerp(x, mouse.current.x, 0.075),
            y: lerp(y, mouse.current.y, 0.075 )
        }

        moveCircle(delayedMouse.current.x, delayedMouse.current.y)
        window.requestAnimationFrame(animate)
    }
   
    useEffect(()=>{
        animate()
        window.addEventListener('mousemove',manageMouseMove)

        return () => window.removeEventListener('mousemove',manageMouseMove)
    },[])
  return (
    <>
    {
        colors.map((color,i, array  )=>{
            return <div 
            ref={ref => circles.current[i] = ref}
            key={color}
            className='mix-blend-difference pointer-events-none'
            style={{height:size,width:size,borderRadius:'50%',backgroundColor:color,position:'fixed',top:0, left:0,pointerEvents:"none",filter:`blur(${isHovered ? 30: 2}px)`,
            transition:`height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out, transform ${(array.length - 1 )* delay}s linear`
        }}
        >
    
        </div>      
        })
    }
    </>
    

)
}

export default Cursor