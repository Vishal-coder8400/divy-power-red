import React from "react";
import { motion } from "framer-motion";

const MessageBubble = ({ sender, text, typing, avatar }) => {
  const isChacha = sender === "chacha";
  const isRight = sender === "roshni"; // Right align for Roshni Didi

  return (
    <motion.div
      className={`flex w-full mb-4 ${isRight ? "justify-end" : "justify-start"}`}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {!isRight && avatar && (
        <motion.img
          src={avatar}
          alt="avatar"
          className="w-10 h-10 mr-2 rounded-full object-cover shadow-md"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      )}

      <div className="relative max-w-[75%]">
        <motion.div
          className={`px-4 py-3 rounded-2xl text-sm sm:text-base shadow-xl whitespace-pre-line
            ${isRight ? "bg-white text-black rounded-br-none" : "bg-[#C4302C] text-white rounded-bl-none"}
          `}
          layout
        >
          {typing ? (
            <div className="flex flex-col">
              <p className="mb-1 text-xs italic text-black">
                {isRight ? "Roshni Didi is typing..." : "Solar Chacha is typing..."}
              </p>
              <div className="flex space-x-1 items-center h-5">
                <motion.span
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                />
                <motion.span
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                />
                <motion.span
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                />
              </div>
            </div>
          ) : (
            text
          )}
        </motion.div>

        {/* Chat pointer tail */}
        <div
          className={`absolute w-3 h-3 bg-inherit
            ${isRight
              ? "bottom-0 right-0 translate-x-1/2 translate-y-1/2 rotate-45"
              : "bottom-0 left-0 -translate-x-1/2 translate-y-1/2 rotate-45"}
          `}
        />
      </div>

      {isRight && avatar && (
        <motion.img
          src={avatar}
          alt="avatar"
          className="w-10 h-10 ml-2 rounded-full object-cover shadow-md"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      )}
    </motion.div>
  );
};

export default MessageBubble;
