import { motion } from 'framer-motion';
import e1 from "../Images/e1.JPG";
import e2 from "../Images/e2.JPG";
import e3 from "../Images/e3.JPG";
import e4 from "../Images/e4.JPG";
import e5 from "../Images/e5.JPG";
import e6 from "../Images/e6.jpg";
import e7 from "../Images/e7.jpg";
import e8 from "../Images/e8.JPG";

const images = [
  { src: e1, alt: "People walking near solar panels and wind turbine" },
  { src: e2, alt: "Engineer with clipboard near solar panels" },
  { src: e3, alt: "Close-up of solar panels with wind turbine" },
  { src: e4, alt: "Person looking at solar panels and wind turbine" },
  { src: e5, alt: "Person looking at solar panels and wind turbine" },
  { src: e6, alt: "Person looking at solar panels and wind turbine" },
  { src: e7, alt: "Person looking at solar panels and wind turbine" },
  { src: e8, alt: "Person looking at solar panels and wind turbine" },
];

const Gallery = () => {
  return (
    <main className="p-4 md:p-6 max-w-7xl mx-auto md:px-12 lg:px-20 xl:px-32">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative rounded-xl overflow-hidden group h-40 sm:h-48 md:h-56"
             // FAST hover speed
  // whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.12, ease: "easeOut" }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:brightness-110"
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
