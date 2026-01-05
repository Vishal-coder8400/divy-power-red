import React from "react";
import { motion } from "framer-motion";
import solarg from "../Images/chacha.png";
import didi from "../Images/didi.png";
import "./Home.css";

const chatMessages = [
  {
    name: "Solar Chacha",
    side: "left",
    img: solarg,
    text: "Local jugaad se bijli nahi milti, sirf tension milta hai!\nDivy Solar se paaiye guarantee wali roshni aur chain ka jeevan!",
  },
  {
    name: "Ghar ki Didi",
    side: "right",
    img: didi,
    text: "Haan Chacha! Ab toh EMI pe solar lagwayenge aur bijli ke bill se chutkaara paayenge!",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const chatVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  },
};

const ChatUI3 = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-[#f8f7f0] py-10 px-4 sm:px-6 lg:px-8 GetfontHomeChat"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl GetfontHomeDash text-center text-[#2c3e50] mb-10">
          Chacha Bol Rahe Hain, Solar Lagwao Bhai!
        </h2>

        <div className="flex flex-col gap-y-8 sm:gap-y-10">
          {chatMessages.map((msg, index) => (
            <motion.div
              key={index}
              variants={chatVariants}
              className={`flex flex-col items-${msg.side === "right" ? "end" : "start"} w-full`}
            >
              {/* Chat Bubble */}
              <motion.div
                className={`whitespace-pre-line text-[15px] sm:text-[16px] leading-relaxed font-medium px-5 py-4 rounded-xl shadow-md max-w-full sm:max-w-[70%] border ${
                  msg.side === "right"
                    ? "bg-orange-500 text-white border-orange-300"
                    : "bg-[#4aab3d] text-white border-green-200"
                }`}
                whileHover={{ scale: 1.02 }}
              >
                {msg.text}
              </motion.div>

              {/* Avatar */}
              <motion.div
                initial={{ rotate: -5, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-center mt-3"
              >
                <img
                  src={msg.img}
                  alt={msg.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-full"
                />
                <span className="text-sm sm:text-base text-gray-800 mt-1 GetfontHomeDash">
                  {msg.name}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ChatUI3;
