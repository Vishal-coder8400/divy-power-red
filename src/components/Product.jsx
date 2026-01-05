import React from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Genset1 from "../Images/Genset.jpg";
import Micro from "../Images/Micro.jpg";
import SolarP from "../Images/SolarP.jpg";
import LL1 from "../Images/LL1.jpg";
import LA from "../Images/LA.jpg";
import LL2 from "../Images/LL2.jpg";
import LL3 from "../Images/LL3.jpg";
import LL4 from "../Images/LL4.jpg";
import LL5 from "../Images/LL5.jpg";
import Ev from "../Images/Ev.jpg";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

function Product() {
  const solarData = [
    {
      title: "SOLAR PANEL",
      description:
        "Our solar panels efficiently convert sunlight into electricity, ensuring long-lasting performance and reduced environmental impact for homes, businesses, and industries.",
      image: SolarP,
      to: "/Solar-pannel",
    },
    {
      title: "SOLAR PUMP",
      description:
        "Divy Power’s solar pumps offer an efficient, eco-friendly solution for water needs in remote and rural areas—ideal for irrigation, water supply, and livestock, with low maintenance and long-lasting performance.",
      image: LL5,
      to: "/Solar-Pump",
    },
    {
      title: "MICRO INVERTER",
      description:
        "Our compact, reliable micro inverters optimize solar performance by converting energy per panel, ensuring maximum output even with shading—ideal for homes and businesses seeking top solar returns.",
      image: Micro,
      to: "/Micro-Inverter",
    },
  ];

  const saftyData = [
    {
      title: "Earthing",
      description:
        "Divy Power provides high-quality earthing solutions to protect against shocks, fires, and equipment damage—ensuring safety for homes, businesses, and industrial setups.",
      image:
        "https://divyby.redspace.in/assets/images/updated-images/img%20earthing.png",
      to: "/Earthing",
    },
    {
      title: "Lightning Arrestor (LA)",
      description:
        "Our lightning arrestors provide strong protection by safely redirecting lightning strikes, ensuring your electrical systems and infrastructure stay secure from unpredictable hazards.",
      image: LA,
      to: "/LA",
    },
  ];

  const Genset = [
    {
      title: "Diesel/Petrol Genset",
      description:
        "Our diesel and petrol gensets provide reliable, high-performance power for homes, businesses, and remote sites—built for durability, efficiency, and dependable backup in any situation.",
      image: Genset1,
      to: "/Diesel/Petrol Genset",
    },
  ];

  const gasificationData = [
    { title: "Green Hydrogen", description: "Coming Soon", image: LL3 },
    {
      title: "CBG (Compressed Biogas)",
      description: "Coming Soon",
      image: LL1,
    },
    { title: "Bio Diesel", description: "Coming Soon", image: LL2 },
    { title: "EV Charging", description: "Coming Soon", image: Ev },
    { title: "Home Automation", description: "Coming Soon", image: LL4 },
  ];

  return (
    <div className="overflow-x-hidden">
      <div className="flex items-center justify-center">
        <div>
         <section className="relative pt-6 pb-12 sm:pt-8 sm:pb-16 md:pt-10 md:pb-20 text-center bg-gradient-to-br from-white to-gray-100 GetFontSol max-w-7xl mx-auto">
            {/* Heading */}
            <div className="relative z-10">
              <motion.h1
                className="text-5xl sm:text-6xl font-bold text-black mb-2"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
               <span className="text-[#090971]"> Our</span> <span className="text-[#739131]">Products</span>
              </motion.h1>
            </div>

            {/* Solar Solutions */}
            <motion.section
              className="pt-4 pb-12 sm:pt-6 sm:pb-16 md:pt-8 md:pb-20 px-4 sm:px-6 bg-gradient-to-br from-white to-gray-100"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {/* Section Heading */}
              <motion.div
                className="max-w-7xl mx-auto text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl text-[#090971] text-start font-bold">
                  Solar Solutions
                </h2>
              </motion.div>

              {/* Card Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {solarData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-black rounded-2xl overflow-hidden shadow-md hover:shadow-2xl flex flex-col"
                    variants={cardVariants}
                  >
                    {/* Image wrapper with fixed aspect ratio */}
                    <div className="w-full aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-[#090971]">{item.title}</h3>
                        <p className="text-sm text-gray-700">
                          {item.description}
                        </p>
                      </div>
                      <div className="mt-6 flex justify-center">
                        <Link
                          to={item.to}
                          className="flex items-center justify-center gap-2 bg-[#739131] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#739131] transition"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
            {/* Safety Solutions */}
            <motion.section
              className="bg-[#090971] rounded-sm py-20 text-white"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div
                className="max-w-7xl mx-auto text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl text-white font-bold">
                  Safety Solutions
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {saftyData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white text-black rounded-2xl overflow-hidden shadow-md flex flex-col"
                    variants={cardVariants}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-[#090971]">{item.title}</h3>
                        <p className="text-sm text-gray-700">
                          {item.description}
                        </p>
                      </div>
                      <div className="mt-6 flex justify-center">
                        <Link
                          to={item.to}
                          className="flex items-center justify-center gap-2 bg-[#739131] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#739131] transition"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Genset Solutions */}
            <motion.section
              className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div
                className="max-w-7xl mx-auto text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl text-[#090971] font-bold">
                  Genset Solutions
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                {Genset.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white text-black rounded-2xl overflow-hidden shadow-md hover:shadow-2xl flex flex-col"
                    variants={cardVariants}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-60 w-full object-cover"
                    />
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-[#090971]">{item.title}</h3>
                        <p className="text-sm text-gray-900">
                          {item.description}
                        </p>
                      </div>
                      <div className="mt-6 flex justify-center">
                        <Link
                          to={item.to}
                          className="flex items-center justify-center gap-2 bg-[#739131] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#739131] transition"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Gasification Section */}
            <motion.section
              className="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div
                className="max-w-7xl mx-auto text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-[#090971] text-5xl font-bold">COMING SOON</h2>
                <h2 className="text-4xl mt-10 text-[#739131] font-bold">
                  Gasification
                </h2>
              </motion.div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {gasificationData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white text-black rounded-2xl overflow-hidden shadow-md hover:shadow-2xl flex flex-col"
                    variants={cardVariants}
                  >
                    {/* Image Section */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-44 sm:h-52 md:h-60 object-cover"
                    />

                    {/* Text Section */}
                    <div className="p-6 flex-1 flex flex-col justify-between text-center">
                      <h3 className="text-lg font-bold mb-2 text-[#090971]">{item.title}</h3>
                      <p className="text-sm text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </section>
        </div>
      </div>

      <section className="mt-16">
        <Footer />
      </section>
    </div>
  );
}

export default Product;
