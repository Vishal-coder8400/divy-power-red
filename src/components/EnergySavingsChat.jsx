import React, { useEffect, useState } from "react";
import solarChachaImg from "../Images/chacha.png";
import roshniDidiImg from "../Images/didi.png";
import "./Home.css";

const conversationData = [
  { sender: "roshni", text: "Mera bijli ka bill iss baar bhi ₹3500 aa gaya" },
  {
    sender: "chacha",
    text: "Beti, is desh mein har family agle 5 saal mein ₹3 lakh se zyada sirf bijli mein gawa degi. Aur milta kya hai? Power cut aur mehenga bijli.",
  },
  { sender: "roshni", text: "Toh phir hum karein kya? Bijli toh chahiye na." },
  {
    sender: "chacha",
    text: "Isiliye toh keh raha hoon. Chhat pe jo suraj chamak raha hai, woh muft hai. Solar laga lo. Apni bijli khud banao. Har din jo paisa jaa raha hai, woh bachao.",
  },
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
    <section className="w-full bg-[#f5f7f9] py-16 flex justify-center">
      {/* CARD */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl px-6 py-8">

        {/* TITLE */}
        <h2 className="text-center text-2xl font-bold text-[#0f2a44] mb-10">
          Energy Savings Discussion
        </h2>

        {/* CHAT */}
        <div className="space-y-8">
          {messages.map((msg, i) => (
            <ChatBubble
              key={i}
              sender={msg.sender}
              text={msg.text}
              avatar={msg.sender === "chacha" ? solarChachaImg : roshniDidiImg}
            />
          ))}

          {isTyping && currentIndex < conversationData.length && (
            <ChatBubble
              sender={conversationData[currentIndex].sender}
              typing
              avatar={
                conversationData[currentIndex].sender === "chacha"
                  ? solarChachaImg
                  : roshniDidiImg
              }
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Conversation;
