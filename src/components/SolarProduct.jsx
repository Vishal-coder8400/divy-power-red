import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { GiSolarPower, GiLightningSpanner, GiGasPump } from "react-icons/gi";
import { Link } from "react-router-dom";

const products = [
  {
    title: "Solar Solutions",
    icon: <GiSolarPower className="text-[#C4302C] text-5xl" />,
    features: ["Solar Panel", "Solar Pump", "Micro Inverter"],
  },
  {
    title: "Safety Solution",
    icon: <GiLightningSpanner className="text-[#C4302C] text-5xl" />,
    features: ["Earthing", "Lightning Arrester (LA)"],
  },
  {
    title: "Genset Solutions",
    icon: <GiGasPump className="text-[#C4302C] text-5xl" />,
    features: ["Diesel/Petrol Genset"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.4 },
  }),
};

const SolarProducts = () => {
  return (
    <section className="w-full bg-white px-4 pt-0 pb-0 mt-[-3rem] sm:mt-0 mb-0 relative overflow-hidden">

      {/* margin-collapse blocker */}
      <div className="h-px"></div>

      <div
        className="
          w-full max-w-[1400px] mx-auto
          bg-gradient-to-b from-[#f8fff9] to-[#e3f8e9]
          rounded-2xl
          p-8 md:p-12
        "
      >
        {/* Heading */}
        <div className="text-center mb-10 mt-0">
          <p className="text-[#C4302C] text-sm font-bold tracking-wide">
            OUR PRODUCT
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#090971] mt-4">
            Harness The Power Of The Sun With <span className="text-[#739131]">Solar Energy!</span> 
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="
                bg-white
                p-6 md:p-8
                rounded-2xl
                shadow-md
                border-2 border-[#739131]
                hover:shadow-xl
                transition-all duration-200
                h-full
                flex flex-col justify-between
              "
            >
              <div>
                <div className="mb-6">{product.icon}</div>

                <h3 className="text-xl font-bold text-[#005F60] mb-5">
                  {product.title}
                </h3>

                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-gray-800 text-sm md:text-base"
                    >
                      <FaCheckCircle className="text-[#739131] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/LA"
                className="
                  block w-full text-center
                  bg-[#739131] text-white
                  py-3 rounded-lg
                  text-sm md:text-base
                  font-semibold shadow-md
                  hover:bg-[#739131] transition
                "
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolarProducts;