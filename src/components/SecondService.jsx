import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "./Footer";
// import { FaTools, FaCogs, FaRecycle, FaSun } from "react-icons/fa";

const services = [
  {
    label: "Installation & Commissioning",
    path: "Installation_&_Commissioning_(INC)",
    // icon: <FaTools className="text-green-700 text-3xl" />,
  },
  {
    label: "Operations & Maintenance",
    path: "Operations_&_Maintenance_(O&M)",
    // icon: <FaCogs className="text-green-700 text-3xl" />,
  },
  {
        label: "Annual Maintenance Contracts (AMC)",
        path: "Annual Maintenance Contracts (AMC)",
        // icon: <FaRecycle className="text-green-700 text-3xl" />,
    },
    {
        label: "Health Check ups",
        path: "Health Check ups",
        // icon: <FaSun className="text-green-700 text-3xl" />,
    },
];

const SecondService = () => {
  return (
    <div className="bg-gray-100 text-white min-h-screen GetfontHome mb-2 mt-0 lg:mt-0 md:mt-0 xl:mt-0 2xl:mt-0">
    

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 pt-5">
        <h2 className="text-3xl font-bold text-center text-[#090971] mb-10">Our <span className="text-[#739131]">Services</span></h2>
        {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
            >
              {service.icon}
              <h3 className="font-semibold text-lg mt-4 mb-2 text-blue-900">{service.label}</h3>
              <Link
                to={`/${service.path}`}
                className="mt-auto text-blue-900 font-medium hover:underline"
              >
                Explore →
              </Link>
            </motion.div>
          ))}
        </div> */}
      </section>

      {/* Main Content */}
      <main className="bg-white text-white rounded-xl shadow-lg max-w-4xl mx-auto p-8 mb-16">
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          src="https://divyby.redspace.in/assets/images/updated-images/img%202%20service.png"
          alt="Installation"
          className="rounded-xl mb-6 w-full max-h-[400px] object-cover"
        />

        <h2 className="text-2xl font-bold text-[#090971] mb-4">Engineering, Procurement & Construction</h2>
        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
          We offer end-to-end EPC solutions for solar energy projects—handling everything from
          design and planning to material sourcing and construction. Our turnkey approach ensures
          your project is on-time, efficient, and built to last.
        </p>

        <ul className="list-disc pl-6 text-sm mb-4 text-gray-700 marker:text-[#090971]">
          <li>Smart Design with Site-Specific Engineering</li>
          <li>Quality Procurement from Trusted Vendors</li>
          <li>On-Time Construction with Expert Supervision</li>
          <li>Turnkey Solutions for Seamless Execution</li>
        </ul>

        <p className="text-sm text-gray-700 mb-4">
          We source only the highest-quality solar panels, inverters, and components to ensure long-term
          performance, reliability, and safety in every installation.
        </p>

        <h3 className="text-lg font-semibold text-[#090971] ">Our Simple Four Steps</h3>
        <p className="text-sm text-gray-700">
          Our team ensures smooth execution with expert supervision, minimal delays, and strict
          quality control—from planning to power-up.
        </p>
      </main>
       <section className="max-w-7xl mx-auto px-6 pb-12">
        {/* <h2 className="text-3xl font-bold text-center text-white mb-10">🔧 Our Services</h2> */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-[#090971] p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
            >
              {service.icon}
              <h3 className="font-semibold text-lg mt-4 mb-2 text-white">{service.label}</h3>
              <Link
                to={`/${service.path}`}
                className="mt-auto text-white font-medium hover:underline"
              >
                Explore →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
};

export default SecondService;

