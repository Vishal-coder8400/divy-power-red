import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import D1 from '../Images/d1.jpg'
import D2 from '../Images/d2.jpg'
import D3 from '../Images/d3.jpg'
import D4 from '../Images/d4.jpg'

import D5 from '../Images/d5.jpg'
import D6 from '../Images/d6.jpg'


const images = [
 D1,D2,D3,D4,D5,D6
];

const ImageSlider = () => {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  const scrollToIndex = (i) => {
    if (sliderRef.current) {
      const childWidth = sliderRef.current.clientWidth;
      sliderRef.current.scrollTo({
        left: i * childWidth,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    const newIndex = (index + 1) % images.length;
    setIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (index - 1 + images.length) % images.length;
    setIndex(newIndex);
    scrollToIndex(newIndex);
  };

  // Auto scroll every 6 seconds
  useEffect(() => {
    const autoScroll = setInterval(handleNext, 6000);
    return () => clearInterval(autoScroll);
  }, [index]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg mt-10">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-in-out overflow-hidden scroll-smooth"
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i}`}
            className="w-full flex-shrink-0 object-cover h-64 sm:h-80 md:h-96"
          />
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-black"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white rounded-full p-2 hover:bg-black"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ImageSlider;
