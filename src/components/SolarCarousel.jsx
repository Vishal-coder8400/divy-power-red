import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import './Home.css'
import PageOne from "./PageOne";


const solarImages = [
  "https://images.pexels.com/photos/30285845/pexels-photo-30285845.jpeg",
  "https://images.pexels.com/photos/4254166/pexels-photo-4254166.jpeg",
  "https://pikwizard.com/pw/medium/699a0ae210de0ebeb9b745be863f842d.jpg",
];

const SolarCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === solarImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? solarImages.length - 1 : prev - 1));
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="w-full  max-w-5xl mx-auto p-6 GetFontSol ">
    
      <PageOne/>

      <div className="relative w-full h-80 md:h-[28rem] md:mt-5 sm:-mt-44  overflow-hidden  ">
        <AnimatePresence>
          <motion.img
            key={solarImages[current]}
            src={solarImages[current]}
            alt="Solar Work"
            className="object-cover w-full h-full rounded-sm"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md transition-all duration-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-5 gap-3">
        {solarImages.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-blue-600 scale-110" : "bg-gray-300"
            }`}
            animate={{ scale: index === current ? 1.3 : 1 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
};

export default SolarCarousel;
