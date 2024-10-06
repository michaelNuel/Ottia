'use client'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollAnimate = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Register the plugin
      gsap.registerPlugin(ScrollTrigger);

      // Set up the animation
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play pause resume reset",
        },
        opacity: 1,
        duration: 2,
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ opacity: 0, height: '100vh', backgroundColor: 'blue' }}
    >
      Scroll to Animate
    </section>
  );
};

export default ScrollAnimate;
