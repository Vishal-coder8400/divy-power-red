import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const feedbacks = [
  {
    id: 1,
    text: `This platform transformed the way we manage solar energy. It's simple, efficient, and the support is incredible.`,
    name: "Priya Sinha",
    rating: 5,
  },
  {
    id: 2,
    text: `Very reliable and user-friendly. I love how intuitive everything is. Highly recommended for clean energy startups!`,
    name: "Raj Mehta",
    rating: 4,
  },
  {
    id: 3,
    text: `Excellent interface and responsive design. I’ve been able to boost productivity with their smart features.`,
    name: "Aditi Sharma",
    rating: 5,
  },
];

export default function CustomerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-[#181818] text-white min-h-screen py-12 px-4 GetFontSol">
      <h1 className="text-center text-4xl font-semibold mb-12">Customer Feedbacks</h1>

      <section className="bg-[#1a1a1a] rounded-xl p-6 max-w-3xl mx-auto text-center shadow-lg border border-green-800">
        <AnimatePresence mode="wait">
          <motion.div
            key={feedbacks[currentIndex].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-green-700 text-3xl mb-4">
              <i className="fas fa-quote-left" />
            </div>

            <p className="italic text-lg leading-relaxed text-gray-200">
              {feedbacks[currentIndex].text}
            </p>

            <div className="text-green-700 mt-6 space-x-1 text-xl">
              {[...Array(feedbacks[currentIndex].rating)].map((_, i) => (
                <i className="fas fa-star" key={i} />
              ))}
              {[...Array(5 - feedbacks[currentIndex].rating)].map((_, i) => (
                <i className="far fa-star" key={i} />
              ))}
            </div>

            <p className="mt-4 text-green-700 font-semibold text-lg">
              — {feedbacks[currentIndex].name}
            </p>
          </motion.div>
        </AnimatePresence>
      </section>

      <div className="flex justify-center mt-8 space-x-2">
        {feedbacks.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-green-700" : "bg-gray-600"
            }`}
          ></span>
        ))}
      </div>
    </main>
  );
}
