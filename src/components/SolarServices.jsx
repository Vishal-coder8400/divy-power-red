import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Installation & Commissioning",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 text-green-800" viewBox="0 0 16 16">
        <path d="M9.972 0a.5.5 0 0 0-.445.276L8.242 2.594l-1.354-.738-1.015.562 1.036 1.515-2.07 2.07a.5.5 0 0 0-.141.354v.928L.854 12.146a.5.5 0 1 0 .708.708l4.843-4.843h.928a.5.5 0 0 0 .354-.146l2.07-2.07 1.515 1.036.562-1.015-.738-1.354L13.724.473A.5.5 0 0 0 13.25 0h-3.278z" />
      </svg>
    ),
  },
  {
    title: "EPC (Engineering, Procurement & Construction)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 text-green-800" viewBox="0 0 16 16">
        <path d="M4 0a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1v1.267A2 2 0 0 0 4 10v1H3a2 2 0 0 0 0 4h2a2 2 0 0 0 0-4H5v-1a2 2 0 0 0-1-1.733V6h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
        <path d="M11 6h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2z" />
      </svg>
    ),
  },
  {
    title: "Operations & Maintenance",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 text-green-800" viewBox="0 0 16 16">
        <path d="M3.05 3.05a7 7 0 0 1 9.9 9.9.5.5 0 0 0 .707.707 8 8 0 1 0-11.314 0 .5.5 0 0 0 .707-.707z" />
        <path d="M4.464 4.464a5 5 0 0 1 7.072 7.072.5.5 0 0 0 .707.707 6 6 0 1 0-8.486 0 .5.5 0 0 0 .707-.707z" />
        <path d="M7.5 8a.5.5 0 0 1 .5-.5h.5V7a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1H9V9a.5.5 0 0 1-1 0v-.5h-.5a.5.5 0 0 1-.5-.5z" />
      </svg>
    ),
  },
  {
    title: "Energy Audit & Optimization",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 text-green-800" viewBox="0 0 16 16">
        <path d="M11.3 1a.5.5 0 0 1 .447.724L9.91 6H12.5a.5.5 0 0 1 .39.812l-6 7.5A.5.5 0 0 1 6.5 14v-5H3.5a.5.5 0 0 1-.445-.724l4.5-7.5A.5.5 0 0 1 8 0h3.3z" />
      </svg>
    ),
  },
  {
    title: "Inspection & Safety Compliance",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 text-green-800" viewBox="0 0 16 16">
        <path d="M5.5 8.707l1.646 1.647a.5.5 0 0 0 .708 0L12.207 6.5a.5.5 0 1 0-.708-.708L7.5 9.793 6.207 8.5a.5.5 0 0 0-.707.707z" />
        <path d="M8 0c-.176 0-.35.009-.522.026A7.005 7.005 0 0 0 1 7c0 5.25 4.239 8.017 6.842 8.91a.5.5 0 0 0 .316 0C10.761 15.017 15 12.25 15 7a7.005 7.005 0 0 0-6.478-6.974A7.25 7.25 0 0 0 8 0z" />
      </svg>
    ),
  },
  {
    title: "Consulting & Project Feasibility",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 text-green-800" viewBox="0 0 16 16">
        <path d="M2 2a2 2 0 0 0-2 2v9.793l2.853-2.854A.5.5 0 0 1 3.207 11H14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm3 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
      </svg>
    ),
  },
];

const SolarServices = () => {
  return (
    <section className="py-16 px-4 bg-white mt-[10px] lg:mt-[1px]">
      <div className="max-w-6xl mx-auto text-center ">
        <h2 className="text-green-800 font-bold uppercase text-lg mb-2">Our Services</h2>
        <h1 className="text-4xl font-semibold text-gray-900">Unlock the Potential of the Sun with Solar Energy</h1>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
            <a
              href="#"
              className="mt-3 text-sm text-green-800 font-medium hover:underline"
            >
              Read More
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SolarServices;
