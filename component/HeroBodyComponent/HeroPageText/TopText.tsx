'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TopText = () => {
  const containerRef = useRef(null); // Reference to the container

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // GSAP animation to slide in from the left
      gsap.fromTo(
        containerRef.current,
        { x: -200, opacity: 0 },  // Initial position (off-screen to the left)
        { x: 0, opacity: 1, duration: 1.5, ease: 'power3.out' } // Final position (visible)
      );
    }
  }, []);

  return (
    <div
      ref={containerRef} // Apply ref to the container div
      className='bg-blue-100 px-2 py-2 rounded-xl w-80 flex gap-2 align-middle'
    >
      <div className='bg-gray-700 p-1 rounded-lg'>
        <h3 className='text-xs text-white'>Aug 4th</h3>
      </div>
      <div className='mt-1'>
        <h3 className='text-xs font-semibold'>
          {`in SF? Join Our in-Person onboardings >`}
        </h3>
      </div>
    </div>
  );
};

export default TopText;
