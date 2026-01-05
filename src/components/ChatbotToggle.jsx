import React, { useState, useEffect } from "react";
import ChatbotPopup from "./ChatbotPopup";
import solarch from "../Images/chacha.png";

const messages = [
  "Solar se kharcha nahi, paiso ki bachat hoti hai!",
  "Solar panels se 25 saal tak bijli ka bill lagbhag zero ho sakta hai.",
  "Har mahine ki bijli ki bachat se 5 saal me lagat nikal jaati hai.",
  "Solar se carbon footprint bhi kam hota hai – environment ke liye best!",
  "Surya se bijli – free mein bijli, savings ki guarantee!",
  "Solar chacha bolte hai: Bijli ke bill se chhutkaara paao!",
  "Bijli ka bill kam karo, solar panel lagwao!",
  "Government subsidy ke sath solar aur bhi sasta padta hai!",
  "Renewable energy future ka rasta hai – solar se shuruat karo!",
  "Apne chhat ka istemal karo – solar se kamao aur bachaao!",
];
const ChatbotToggle = () => {
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 4000); // Hide after 4s

      setCurrentMsgIndex((prevIndex) =>
        prevIndex + 1 < messages.length ? prevIndex + 1 : 0
      );
    }, 20000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div className="fixed bottom-1 right-1 flex items-center space-x-3 z-50">
        {showPopup && (
          <div className="animate-scaleUp flex items-center bg-green-800 border-l-4 border-orange-500 text-white px-5 py-4 rounded-xl shadow-2xl text-sm md:text-base font-semibold max-w-sm min-h-[100px]">
            <img
              src={solarch}
              alt="Solar Chacha"
              className="w-16 h-16 mr-4 flex-shrink-0"
            />
            <span className="">
              {messages[currentMsgIndex]}
            </span>
          </div>
        )}
        <button
          onClick={() => setChatbotOpen(true)}
          title="Chat with Solar Assistant"
        >
          {/* <img
            src={solarch}
            className="w-16 h-16 hover:scale-105 transition-transform duration-300"
            alt="Solar Chatbot Icon"
          /> */}
        </button>
      </div>

      {chatbotOpen && <ChatbotPopup onClose={() => setChatbotOpen(false)} />}
    </>
  );
};

export default ChatbotToggle;
