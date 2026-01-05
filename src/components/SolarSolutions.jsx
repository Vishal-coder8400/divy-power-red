import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sol from "../Images/Sol.jpg";

const solutionData = [
  {
    title: "Homeowner Solutions",
    content: `
Enjoy reliable, eco-friendly energy at home while cutting down your electricity bills and ensuring your family’s comfort.

• Save up to 80% on monthly electricity costs  
• Battery backup for uninterrupted power during outages  
• Free site survey and customized solar system design  
• Net metering support to earn credits from surplus energy  
• Guidance on government subsidies to reduce upfront costs
    `,
  },
  {
    title: "Business Owner Solutions",
    content: `
Empower your business with solar energy that lowers costs, boosts profits, and strengthens your green image.

• Reduce operational costs with long-term energy savings  
• Scalable systems tailored to your business size and needs  
• Show customers your commitment to a sustainable future  
• Stay productive with battery backup and uninterrupted power  
• Assistance with government incentives and easy financing options
    `,
  },
  {
    title: "Utility-Scale Owner Solutions",
    content: `
Harness the power of solar for large-scale energy production and long-term profitability.

• High-capacity solar farms for maximum energy generation  
• Advanced grid integration and net metering solutions  
• Smart monitoring systems for real-time performance tracking  
• Reduced carbon footprint with renewable, clean energy  
• Support with policy compliance, land use, and subsidy benefits
    `,
  },
  {
    title: "Smart String ESS Solutions",
    content: `
Maximize efficiency and reliability with next-generation Energy Storage Systems (ESS) that keep you powered, always.

• High-efficiency battery storage for consistent power supply  
• Optimized to reduce energy wastage and lower costs  
• Seamless integration with rooftop and utility-scale systems  
• Intelligent load management for peak and off-peak hours  
• Reliable and safe with advanced protection technology
    `,
  },
  {
    title: "Smart Micro-grid Solutions",
    content: `
Build self-sustaining communities and businesses with micro-grids that deliver energy independence and resilience.

• Localized power grids for homes, businesses, and communities  
• Energy independence from unpredictable power cuts  
• Integration with renewable sources like solar and wind  
• Efficient energy distribution with minimal transmission losses  
• Smart monitoring for stable, uninterrupted electricity supply
    `,
  },
];

const dropdownVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto" },
  exit: { opacity: 0, height: 0 },
};

const SolarSolutions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <main className="bg-white text-black max-w-7xl mx-auto p-6 sm:p-10 -mt-16">

      <motion.section
        className="flex flex-col lg:flex-row items-start justify-center gap-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >

        {/* ------------------ LEFT SIDE ------------------ */}
        <motion.div
          className="lg:w-1/2 w-full flex flex-col items-center"
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={Sol}
            alt="Solar"
            className="w-[420px] rounded-2xl shadow-xl object-cover"
          />

          <div className="w-full flex justify-center mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-lg">

              <div className="bg-[#F4F8FF] p-4 rounded-xl shadow-sm text-center">
                <i className="fas fa-percent text-blue-900 text-xl mb-2"></i>
                <p className="text-[14px] font-semibold text-blue-900">0% EMI</p>
              </div>

              <div className="bg-[#F4F8FF] p-4 rounded-xl shadow-sm text-center">
                <i className="fas fa-money-bill-wave text-blue-900 text-xl mb-2"></i>
                <p className="text-[14px] font-semibold text-blue-900">
                  From <br /> ₹1,999/mo
                </p>
              </div>

              <div className="bg-[#F4F8FF] p-4 rounded-xl shadow-sm text-center">
                <i className="fas fa-shield-alt text-blue-900 text-xl mb-2"></i>
                <p className="text-[14px] font-semibold text-blue-900">Govt. Subsidy</p>
              </div>

              <div className="bg-[#F4F8FF] p-4 rounded-xl shadow-sm text-center">
                <i className="fas fa-award text-blue-900 text-xl mb-2"></i>
                <p className="text-[14px] font-semibold text-blue-900">
                  25 Year <br /> Warranty
                </p>
              </div>

            </div>
          </div>
        </motion.div>

        {/* ------------------ RIGHT SIDE ------------------ */}
        <motion.div
          className="lg:w-1/2 w-full bg-white p-6 rounded-3xl shadow-xl border border-gray-200 flex flex-col"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-[34px] font-extrabold leading-tight text-[#090971]">
            We don't believe in just installing Solar
            <br />
            We Believe in Solving Problems
            <br />
            <span className="text-[#739131]">We Engineer Smart Power Solutions.</span>
          </h1>

          <p className="text-gray-600 text-[15px] mt-4 leading-relaxed">
            At DIVY Power, we believe solar isn’t just a product — it’s your power freedom.
            From site assessment to installation and lifelong support, we handle it all.
          </p>

          <div className="border-t border-gray-200 my-6"></div>

          {/* STATS */}
          <div className="flex items-center gap-10 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <i className="fas fa-bolt text-[#C4302C] text-lg"></i>
              </div>
              <div>
                <p className="font-bold text-[20px] text-[#C4302C]">7,220 KWh</p>
                <p className="text-gray-500 text-sm">Systems Installed</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <i className="fas fa-leaf text-[#C4302C] text-lg"></i>
              </div>
              <div>
                <p className="font-bold text-[20px] text-[#C4302C]">15,818,000 KG</p>
                <p className="text-gray-500 text-sm">CO₂ Saved / Year</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mb-6"></div>

          {/* DROPDOWNS */}
          <div className="space-y-3">
            {solutionData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 shadow-sm"
              >
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-[16px] font-semibold text-[#0F172A]"
                >
                  {item.title}
                  <motion.i
                    className={`fas fa-chevron-${openIndex === index ? "up" : "down"}`}
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                  ></motion.i>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      className="px-5 pb-4 text-[15px] text-gray-700 whitespace-pre-line"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default SolarSolutions;
