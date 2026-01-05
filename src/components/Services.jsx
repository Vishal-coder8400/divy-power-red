import React, { useState } from "react";
import { motion } from "framer-motion";
import solar from "../Images/Solar3.jpg";
import localImage from "../Images/Sv.JPG";
import {
  FaTools,
  FaSolarPanel,
  FaCog,
  FaProjectDiagram,
  FaRecycle,
} from "react-icons/fa";
import Footer from "./Footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ServiceCards from "./ServiceCards";

const services = [
  {
    icon: <FaTools className="text-3xl sm:text-4xl text-green-800" />,
    title: "Installation & Commissioning (INC)",
    description:
      "Divy Power handles the complete installation and commissioning of solar systems, generators, and other power equipment.",
    path: "/Installation_&_Commissioning_(INC)",
  },
  {
    icon: <FaProjectDiagram className="text-3xl sm:text-4xl text-green-800" />,
    title: "Engineering, Procurement, and Construction (EPC)",
    description:
      "They provide turnkey solutions for solar energy projects, including design, procurement of materials, and construction.",
    path: "/Engineering_Procurement_and_Construction_(EPC)",
  },
  {
    icon: <FaCog className="text-3xl sm:text-4xl text-green-800" />,
    title: "Operations & Maintenance (O&M)",
    description:
      "Provides ongoing maintenance to ensure optimal performance of solar panels, generators, and other systems.",
    path: "/Operations_&_Maintenance_(O&M)",
  },
  {
    icon: <FaRecycle className="text-3xl sm:text-4xl text-green-800" />,
    title: "Annual Maintenance Contracts (AMC)",
    description:
      "Divy Power provides AMC services for diesel generators, solar systems, and other equipment to ensure long-term reliability.",
    path: "/Annual_Maintenance_Contracts(AMC)",
  },
  {
    icon: <FaSolarPanel className="text-3xl sm:text-4xl text-green-800" />,
    title: "Health Check ups",
    description:
      "We provide complete care for your car, including expert advice, repairs, and preferred maintenance services.",
    path: "/Health_Check_ups",
  },
];

export default function Services() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      toast.error("Please fill out all required fields.", { autoClose: 3000 });
      setLoading(false);
      return;
    }

    try {
      await axios.post("https://solar-6.onrender.com/api/contact", {
        name,
        email,
        phoneNo: phone,
        message,
      });

      toast.success("Message sent successfully!", { autoClose: 3000 });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong. Try again.", { autoClose: 3000 });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>


      <ToastContainer />
      <main className="bg-white">

      
        {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
  <motion.h1
    className="text-2xl sm:text-4xl md:text-5xl About1 text-green-800 text-center leading-tight"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <span className="text-[#090971] ">Our Green</span> <span className="text-[#739131]">Services</span>
  </motion.h1>

  <motion.img
    src={localImage}
    alt="banner"
    className="w-full h-[360px] object-cover mt-8"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  />
</section>


        {/* SERVICES TIMELINE */}
      {/* SERVICES TIMELINE */}

<section className="w-full px-4 sm:px-6 lg:px-8 mt-3 sm:mt-16 md:mt-3 bg-gradient-to-b from-[#f9fffb] to-[#f1f5f9]">
  <ServiceCards />
</section>



        {/* CONTACT SECTION */}

        <section
          id="contact"
          className="bg-gradient-to-br from-white to-gray-100 w-full px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Left Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 relative rounded-xl overflow-hidden lg:-mt-8"
              >
                <img
                  src={solar}
                  alt="Solar panels"
                  className="rounded-xl w-full h-auto object-cover"
                  loading="lazy"
                />
                {/* subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </motion.div>

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 lg:-mt-8"
              >
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#090971] mb-2 mt-0">
                  Write Here <span className="text-[#739131]">Below?</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  For your energy needs, we’ll do everything—advice, design,
                  installation, and maintenance. Many customers choose us for our experience.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    className="border border-gray-300 rounded-full py-3 px-5 focus:ring-2 focus:ring-green-800 outline-none"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    className="border border-gray-300 rounded-full py-3 px-5 focus:ring-2 focus:ring-green-800 outline-none"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone *"
                  className="border w-full border-gray-300 rounded-full py-3 px-5 focus:ring-2 focus:ring-green-800 outline-none mb-6"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject (optional)"
                  className="border w-full border-gray-300 rounded-full py-3 px-5 focus:ring-2 focus:ring-green-800 outline-none mb-6"
                  value={formData.subject}
                  onChange={handleChange}
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message *"
                  className="w-full border border-gray-300 rounded-2xl py-3 px-5 focus:ring-2 focus:ring-green-800 outline-none mb-6"
                  value={formData.message}
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full text-white rounded-full py-3 font-semibold transition ${
                    loading
                      ? "bg-[#739131] cursor-not-allowed"
                      : "bg-[#739131] hover:bg-[#739131]"
                  }`}
                >
                  {loading ? "Submitting..." : "SUBMIT NOW"}
                </button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>

     <div className="mt-20">
       <Footer />
     </div>
    </>
  );
}
