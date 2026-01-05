import React, { useEffect, useState } from "react";
import MessageBubble from "./MessageBubble";
import solarChachaImg from "../Images/chacha.png";
import roshniDidiImg from "../Images/didi.png";
import "./Home.css";

const conversationData = [
  { sender: "roshni", text: "Mera bijli ka bill iss baar bhi ₹3500 aa gaya" },
  { sender: "chacha", text: "Beti, is desh mein har family agle 5 saal mein ₹3 lakh se zyada sirf bijli mein gawa degi. Aur milta kya hai? Power cut aur mehenga bijli." },
  { sender: "roshni", text: "Toh phir hum karein kya? Bijli toh chahiye na." },
  { sender: "chacha", text: "Isiliye toh keh raha hoon. Chhat pe jo suraj chamak raha hai, woh muft hai. Solar laga lo. Apni bijli khud banao. Har din jo paisa jaa raha hai, woh bachao." },
];

const Conversation = () => {
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
    <div className="w-full bg-[#090971] flex flex-col items-center p-6"> 
      {/* FIXED: removed min-h-screen */}
      
      <div className="wp w-full max-w-3xl bg-[#075e44] rounded-2xl p-4 space-y-3 overflow-y-auto shadow-lg">
        {messages.map((msg, i) => (
          <MessageBubble
            key={i}
            sender={msg.sender}
            text={msg.text}
            avatar={msg.sender === "chacha" ? solarChachaImg : roshniDidiImg}
          />
        ))}

        {isTyping && currentIndex < conversationData.length && (
          <MessageBubble
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
    </div>
  );
};

export default Conversation;
