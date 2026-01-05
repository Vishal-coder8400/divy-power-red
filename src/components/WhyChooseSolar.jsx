import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Save on Energy Bills",
    text: "Reduce your monthly electricity costs by up to 50% and protect yourself from rising utility rates with clean, renewable solar energy.",
    icon: "fas fa-dollar-sign",
    bg: "from-[#d6f0fc] to-white",
    iconBg: "bg-[#7fc5f9]",
  },
  {
    title: "Increase Home Value",
    text: "Studies show homes with solar power systems sell for 4.1% more than comparable homes without solar installations.",
    icon: "fas fa-home",
    bg: "bg-[#f7f7f7]",
    iconBg: "bg-[#b7c9d4]",
  },
  {
    title: "Reduce Carbon Footprint",
    text: "The average residential solar system offsets about 100,000 pounds of carbon dioxide in its lifetime – equivalent to planting 50 trees annually.",
    icon: "fas fa-leaf",
    bg: "from-[#d6f0fc] to-white",
    iconBg: "bg-[#7fc5f9]",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const WhyChooseSolar = () => {
  return (
    <div className="bg-white flex justify-center py-16 px-4 font-[Poppins]">
      <div className="max-w-6xl w-full">
        <h2 className="text-center text-gray-700 text-[22px] font-semibold mb-10">
          Why Choose Solar Power
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${
                card.bg.includes("from-") ? `bg-gradient-to-b ${card.bg}` : card.bg
              } rounded-xl p-6 w-full sm:max-w-xs shadow-sm`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <h3 className="text-gray-700 text-lg font-medium mb-3">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{card.text}</p>
              <div
                className={`w-10 h-10 ${card.iconBg} rounded-lg flex items-center justify-center text-white text-xl`}
                aria-label={`${card.title} icon`}
              >
                <i className={card.icon}></i>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSolar;
