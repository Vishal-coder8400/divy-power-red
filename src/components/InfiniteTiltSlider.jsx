import React from "react";

// Import all 32 images
import W1 from "../Images/W1.jpg";
import W2 from "../Images/W2.JPG";
import W3 from "../Images/W3.JPG";
import W4 from "../Images/W4.JPG";
import W5 from "../Images/W5.JPG";
import W6 from "../Images/W6.JPG";
import W7 from "../Images/W7.JPG";
import W8 from "../Images/W8.JPG";
import W9 from "../Images/W9.JPG";
import W10 from "../Images/W10.JPG";
import W11 from "../Images/W11.JPG";
import W12 from "../Images/W12.JPG";
import W13 from "../Images/W13.JPG";
import W14 from "../Images/W14.JPG";
import W15 from "../Images/W15.JPG";
import W16 from "../Images/W16.JPG";
import W17 from "../Images/W17.JPG";
import W18 from "../Images/W18.JPG";
import W19 from "../Images/W19.JPG";
import W20 from "../Images/W20.JPG";
import W21 from "../Images/W21.JPG";
import W22 from "../Images/W22.JPG";
import W23 from "../Images/W23.JPG";
import W24 from "../Images/W24.JPG";
import W25 from "../Images/W25.JPG";
import W26 from "../Images/W26.JPG";
import W27 from "../Images/W27.JPG";
import W28 from "../Images/W28.JPG";
import W29 from "../Images/W29.JPG";
import W30 from "../Images/W30.JPG";
import W31 from "../Images/W31.JPG";
import W32 from "../Images/W32.JPG";

const allImages = [
  W1, W2, W3, W4, W5, W6, W7, W8,
  W9, W10, W11, W12, W13, W14, W15, W16,
  W17, W18, W19, W20, W21, W22, W23, W24,
  W25, W26, W27, W28, W29, W30, W31, W32,
];

const row1 = allImages.slice(0, 11);
const row2 = allImages.slice(11, 22);
const row3 = allImages.slice(22, 32);

const SmoothRow = ({ images, reverse = false, speed = 35 }) => {
  return (
    <div className="overflow-hidden w-full py-3 relative">
      <div
        className={`flex gap-5 whitespace-nowrap animate-scroll ${
          reverse ? "animate-scroll-reverse" : ""
        }`}
        style={{ "--speed": `${speed}s` }}
      >
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="
              shrink-0
              w-[150px] h-[100px] 
              sm:w-[180px] sm:h-[120px]
              md:w-[220px] md:h-[150px]
              lg:w-[260px] lg:h-[170px]
              xl:w-[280px] xl:h-[180px]
              bg-neutral-800 rounded-xl overflow-hidden shadow-md
            "
          >
            <img src={src} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function GallerySlider() {
  return (
    <div className="flex justify-center bg-white pt-6 pb-10 px-3">
      <div className="bg-neutral-900 p-4 rounded-2xl shadow-xl border border-gray-700 w-full max-w-[1100px]">
        <h2 className="text-center text-white text-xl sm:text-2xl font-bold mb-6">
          Our Work Gallery
        </h2>

        <div className="space-y-4">
          <SmoothRow images={row1} reverse={false} speed={45} />
          <SmoothRow images={row2} reverse={true} speed={55} />
          <SmoothRow images={row3} reverse={false} speed={50} />
        </div>
      </div>
    </div>
  );
}
