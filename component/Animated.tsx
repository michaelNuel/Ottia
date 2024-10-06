'use client'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Animated = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    // Ensure GSAP runs only on the client-side
    if (typeof window !== 'undefined') {
      gsap.to(boxRef.current, { rotation: 360, duration: 2 });
    }
  }, []);

  return (
    <div>
      <h1>My GSAP Animation</h1>
      <div
        ref={boxRef}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'blue',
        }}
      >
        Animate me!
      </div>
    </div>
  );
};

export default Animated;
