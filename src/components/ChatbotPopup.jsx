import React from "react";

function ChatbotPopup({ onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 GetfontHomeChat"
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white rounded-lg shadow-lg w-96 max-w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          aria-label="Close Chatbot"
        >
          ✕
        </button>

        <h2 className="text-xl GetfontHomeChat mb-4">🤖 ChatBot</h2>
        <p>Hi! How can I help you today?</p>
        {/* Add chatbot UI here */}
      </div>
    </div>
  );
}

export default ChatbotPopup;
