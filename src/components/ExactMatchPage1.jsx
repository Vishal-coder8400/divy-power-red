import React from "react";

import L1 from '../Images/P1.jpg';
import L2 from '../Images/P2.png';
import L3 from '../Images/P3.png';
import L4 from '../Images/P4.jpg';
import L5 from '../Images/P5.png';
import L6 from '../Images/P6.png';
import L7 from '../Images/P7.jpg';
import L8 from '../Images/P8.png';

const logos = [L1, L2, L3, L4, L5, L6, L7, L8];

export default function ExactMatchPage1() {
  return (
    <div className="About1 pt-1 pb-0">

      {/* Heading */}
      <h2 className="lg:text-[30px] xl:text-[30px] 2xl:text-[30px] text-2xl font-bold text-center text-[#090971] mb-6">
        Our Client<span className="text-[#739131]">s</span>
      </h2>

      {/* Animated Logos */}
      <div className="overflow-hidden pt-4 pb-5 sm:pt-6 sm:pb-0">
        <div
          className="flex space-x-10 px-4 sm:px-8 animate-scroll"
          style={{
            animation: "scroll 20s linear infinite",
            whiteSpace: "nowrap",
          }}
        >
          {[...logos, ...logos].map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 h-[120px] flex items-center justify-center"
            >
              <img
                src={src}
                alt={`Logo ${idx}`}
                className="h-[90px] w-[120px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>

    </div>
  );
}
