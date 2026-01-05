import React from "react";
import { AiOutlineSwap } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";
import { motion } from "framer-motion";

const features = [
  {
    icon: <AiOutlineSwap className="text-4xl text-[#C4302C]" />,
    title: "Free Consultation & Feasibility Check",
    description:
      "Solar energy is derived from the sun, a virtually unlimited source, making it one of the most sustainable energy options.",
  },
  {
    icon: <IoStatsChart className="text-4xl  text-[#C4302C]" />,
    title: "Govt. Approved Installations with Subsidy Guidance",
    description:
      "Installing solar panels can increase your property's value and attract eco-conscious buyers.",
  },
  {
    icon: <BsGlobe className="text-4xl  text-[#C4302C]" />,
    title: "High-Efficiency Panels with 25 Years Warranty",
    description:
      "Enjoy benefits like tax credits, subsidies, and rebates when switching to solar energy.",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const PageOne = () => {
  return (
    <section className="py-12 px-4 bg-[#f8f7f0]">
      {/* Top Feature Cards */}
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              variants={fadeUpVariant}
              custom={index}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Feature Icons Section */}
     <motion.section
  className="hidden mt-20 mx-4 sm:mx-10"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {[
      ["fas fa-shield-alt", "Turnkey Solutions", "Warranty Assurance"],
      ["fas fa-star", "Certified Partners", "Solar Specialists"],
      ["fas fa-hand-holding-usd", "Flexible", "Financing Options"],
      ["fas fa-headphones-alt", "24/7 Support", "Any time of the day"],
      ["fas fa-lightbulb", "End-to-End Guidance", "Efficient solar solution"],
    ].map(([icon, title, subtitle], i) => (
      <motion.div
        key={title}
        className="bg-white p-6 shadow-md rounded-md flex flex-col items-center text-center hover:shadow-lg transition-all"
        variants={fadeUpVariant}
        custom={i}
      >
        <i className={`${icon} text-green-700 text-4xl mb-4`}></i>
        <p className="font-semibold text-[14px] mb-1 text-[#1f2937]">
          {title}
        </p>
        <p className="text-[12px] text-gray-600 font-semibold">
          {subtitle}
        </p>
      </motion.div>
    ))}
  </motion.div>
</motion.section>

    </section>
  );
};

export default PageOne;
