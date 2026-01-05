import React from "react";

import L1 from '../Images/L1.png';
import L2 from '../Images/L2.png';
import L3 from '../Images/L3.png';
import L4 from '../Images/L4.png';

const logos = [L1, L2, L3, L4];

export default function ExactMatchPage() {
  return (
    <div className="min-h-screen About1">
      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl mt-28 font-bold text-center pt-10 text-red-500">
        Our Partners
      </h2>

      {/* Centered Logos */}
      <div className="overflow-hidden py-10 sm:py-16 -mt-16">
        <div className="flex justify-center flex-wrap gap-6 sm:gap-10 px-4 sm:px-8">
          {logos.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Logo ${idx}`}
              className="h-[100px] w-[120px] object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
