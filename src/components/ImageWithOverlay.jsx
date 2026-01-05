import { motion } from "framer-motion";
import localImage from "../Images/Team.jpg";

const ImageWithOverlay = () => {
  return (
    <div
      className="
        relative w-full overflow-hidden group
        aspect-[16/9]
        md:aspect-[16/7]
        bg-white
      "
    >
      {/* IMAGE */}
      <motion.img
        src={localImage}
        alt="Meet our team"
        className="
          w-full h-full
          object-contain      /* MOBILE: no crop */
          md:object-cover     /* DESKTOP: banner look */
          bg-white            /* ✅ FIX: white instead of black */
        "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-black/50
          flex items-center justify-center
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500
        "
      >
        <motion.h2
          className="text-white text-3xl sm:text-4xl md:text-6xl font-bold text-center px-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Team
        </motion.h2>
      </div>
    </div>
  );
};

export default ImageWithOverlay;
