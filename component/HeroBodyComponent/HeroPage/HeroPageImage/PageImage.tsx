"use client";
import Image from "next/image";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const PageImage: React.FC = () => {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const sideImage = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const tl = gsap.timeline();

      // First animation: fade in the main image
      tl.fromTo(
        imageRef.current,
        { opacity: 0, y: 20 }, // Initial state (hidden)
        { opacity: 1, y: 0, duration: 2, ease: "power3.out" } // Final state (visible)
      )
      .fromTo(
        sideImage.current,
        { scale: 0 }, // Initial scale (hidden)
        { scale: 1, duration: 1, ease: "power3.out" }, // Final scale (normal size)
        "-=1" // Start this animation 1 second before the previous animation ends
      ); // Adjust the overlap as needed
    }
  }, []);

  return (
    <div>
      <div ref={imageRef}>
        <Image alt="#" src={"/Screen.svg"} height={1000} width={1000} />
      </div>

      <div
        ref={sideImage}
        className="mb-5/8 translate-y-1/2 translate-x-1/4"
      >
        <Image alt="#" src={"/inCallScreen.svg"} height={350} width={350} />
      </div>
    </div>
  );
};

export default PageImage;
