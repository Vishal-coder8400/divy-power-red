import React, { useEffect, useState } from "react";
import MessageBubble2 from "./MessageBubble2";
import solarChachaImg from "../Images/chacha.png";
import roshniDidiImg from "../Images/didi.png";
import './Home.css';

const conversationData = [
  {
    sender: "chacha",
    text: "DIVY believe in Solution Based Approach, Doing Common things, Uncommonly Well",
  },
  {
    sender: "roshni",
    text: "We don’t just install solar. We make it easy, accessible, trustworthy and a little magical.",
  },
  {
    sender: "chacha",
    text: "Har ghar ko roshan karna hai. Yeh sirf kaam nahi, zimmedaari hai.",
  },
  {
    sender: "roshni",
    text: "Aur Divy Solar ne yeh zimmedaari dil se nibhayi.",
  },
];

const ChatUI = () => {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentIndex < conversationData.length) {
      setIsTyping(true);
      const typingTimeout = setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [...prev, conversationData[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 1800);
      return () => clearTimeout(typingTimeout);
    }
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-7xl flex items-start  justify-between space-x-2 sm:space-x-4">
        {/* Left Avatar - Solar Chacha */}
        <div className="w-[160px] hidden sm:flex justify-center mt-24">
          <img
            src={solarChachaImg}
            alt="Chacha"
            className="w-[170px] h-[170px] "
          />
        </div>

        {/* Chat Bubble Container */}
        <div className="flex-1 bg-[#f8f7f0] wp rounded-xl p-4 sm:p-6 space-y-4 shadow-lg">
          {messages.map((msg, i) => (
            <MessageBubble2
              key={i}
              sender={msg.sender}
              text={msg.text}
              avatar={msg.sender === "chacha" ? solarChachaImg : roshniDidiImg}
            />
          ))}
          {isTyping && currentIndex < conversationData.length && (
            <MessageBubble2
              sender={conversationData[currentIndex].sender}
              typing={true}
              avatar={
                conversationData[currentIndex].sender === "chacha"
                  ? solarChachaImg
                  : roshniDidiImg
              }
            />
          )}
        </div>

        {/* Right Avatar - Roshni Didi */}
         <div className="w-[140px] hidden sm:flex justify-center mt-24">
          <img
            src={roshniDidiImg}
            alt="Chacha"
            className="w-[170px] h-[170px] "
          />
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
