import React, { useState, useEffect } from "react";

// Different popup messages
const popupMessages = [
  "Kya aap jaante hai? Solar se kharcha nahi, paison ki bachat hoti hai!",
  "Solar energy se bijli ka bill lagbhag ₹0 tak ho sakta hai!",
  "Solar panels ghar ki value ko bhi badhate hain!",
  "Ek bar invest kariye, 25 saal tak free bijli paiye!",
  "Solar lagwane par sarkar bhi subsidy deti hai!",
  "Environment friendly hai – CO2 emission mein kami!",
  "Solar se business ka kharcha bhi kam ho jata hai!",
  "Solar panel maintenance bahut hi kam hota hai!",
  "Solar ek smart investment hai, na ki kharcha!",
  "Solar chacha kehte hain – Paisa bachao, Solar lagao!"
];

const PopupRotator = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) =>
        (prevIndex + 1) % popupMessages.length
      );
      setShowPopup(true);
    }, 4000); // every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Hide popup after 5 seconds
  useEffect(() => {
    if (showPopup) {
      const timeout = setTimeout(() => setShowPopup(false), 5000);
      return () => clearTimeout(timeout);
    }
  }, [currentMessageIndex, showPopup]);

  return (
    <>
      {showPopup && (
        <div className="fixed bottom-10 right-10 w-96 max-w-[90%] bg-yellow-100 text-black px-6 py-4 rounded-xl shadow-2xl border-2 border-yellow-400 z-50 text-lg font-semibold animate-bounce GetfontHomeChat">
          {popupMessages[currentMessageIndex]}
        </div>
      )}
    </>
  );
};

export default PopupRotator;
