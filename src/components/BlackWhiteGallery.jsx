import React from "react";
import { motion } from "framer-motion";

// Import all images
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

// Put them into an array
const allImages = [
  W1, W2, W3, W4, W5, W6, W7, W8,
  W9, W10, W11, W12, W13, W14, W15, W16,
  W17, W18, W19, W20, W21, W22, W23, W24,
  W25, W26, W27, W28, W29, W30, W31, W32,
];

// Generate photo objects automatically
const photos = allImages.map((img, i) => ({
  src: img,
  alt: `Black and white photo number ${i + 1}`, // you can customize alt texts later
  width: 400,
  height: 300,
}));

export default function BlackWhiteGallery() {
  return (
    <div className="bg-white flex justify-center items-center min-h-screen p-4">
      <motion.div
        className="flex space-x-4 max-w-full overflow-x-auto no-scrollbar"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        drag="x"
        dragConstraints={{ left: -300, right: 0 }}
        dragElastic={0.2}
      >
        {photos.map(({ src, alt, width, height }, index) => (
          <motion.img
            key={index}
            src={src}
            alt={alt}
            className="flex-shrink-0 object-cover rounded-xl shadow-md"
            style={{ width: width + "px", height: height + "px" }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
