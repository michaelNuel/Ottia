"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const BottomText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Animation to gradually fade in the text with gsap
    if (typeof window !== "undefined") {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 }, // Initial state (hidden)
        { opacity: 1, y: 0, duration: 2, ease: "power3.out" } // Final state (visible)
      );
    }
  }, []);
  return (
    <div  ref={textRef}className=" flex-col gap-3 mt-3">
      <div className="mb-10 mr-20 ">
        <h3 className="text-sm  text-gray-700 font-semibold">
          Powerful, Flexible and data-driven, Ottia makes it easy to build the
          exact CRM your buisness needs.
        </h3>
      </div>

      <div className="flex gap-3"> 
          <div>
            <button className="border rounded-md bg-orange-500 px-7 py-4"> 
              <h3 className="text-sm font-bold">Get App</h3>
            </button>
          </div>
          <div>
            <button className="border rounded-md bg-black text-white px-7 py-4">
              <h3 className="text-sm font-bold">Try Demo</h3>
            </button>
          </div>
      </div>
    </div>
  );
};

export default BottomText;
