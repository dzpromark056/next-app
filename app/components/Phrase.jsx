import React from 'react'
import Image from 'next/image'
function Phrase({src}) {
  return (
    <div className='flex px-5 gap-5 items-center text-white '>
        <p className='text-[7.5vw]'>Front End Developer</p>
        <span className='relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden'>
            <Image style={{objectFit:"cover"}} src={src} alt='image' fill />
        </span>
    </div>
  )
}

export default Phrase