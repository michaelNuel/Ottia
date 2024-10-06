'use client'
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const MainText = () => {
    const textRef = useRef(null);

    useEffect(() => {
        // Animation to gradually fade in the text with gsap
        if (typeof window !== 'undefined') {
          gsap.fromTo(
            textRef.current, 
            { opacity: 0, y: 20 }, // Initial state (hidden)
            { opacity: 1, y: 0, duration: 2, ease: 'power3.out' } // Final state (visible)
          );
        }
      }, []);
  return (
    <div className=' mt-1'>
      <h3 ref={textRef} className='font-bold text-customLarge'>
        Customer relationship magic to work.
      </h3>
    </div>
  )
}

export default MainText
