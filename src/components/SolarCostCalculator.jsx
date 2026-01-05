import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SolarCostCalculator = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ bill: "" });
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e) => {
    setFormData({ bill: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://solar-6.onrender.com/api/submit", {
        bill: formData.bill,
      });
      setResults(res.data);
      setShowResults(true);
      toast.success("Calculation successful!");
      setFormData({ bill: "" });
    } catch (err) {
      toast.error("Please provide valid Electricity Bill");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="bg-[#F5F4EF] py-16 px-6 md:px-14 lg:px-20 GetFontSol"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* TOP HEADING */}
      <motion.div className="text-center" variants={itemVariants}>
        {/* <p className="inline-block bg-white shadow-md px-6 py-2 rounded-full text-[#005F60] font-semibold text-sm md:text-base">
          Aaj hi Solar Lagwao, environment bachao aur agle 5 saal me 3 lakh se
          jyada apne electricity bills par bhi Bachao
        </p> */}
      </motion.div>


      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        
        {/* LEFT SECTION */}
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#090971] leading-snug mb-4">
            Power Your Home <br />
            With <span className="text-[#739131]">Solar</span>
          </h1>

          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Discover how affordable solar can be. Enter your details to get your
            personalized cost estimate and start saving!
          </p>

          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="text-[#739131] text-xl">🌱</span>
              <p className="text-gray-700 text-base">
                Reduce your carbon footprint
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#739131] text-xl">⚡</span>
              <p className="text-gray-700 text-base">Lock in energy savings</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#739131] text-xl">🏡</span>
              <p className="text-gray-700 text-base">
                Maximize your roof potential
              </p>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <div>
              <h3 className="text-[#C4302C] text-3xl font-bold">2500+</h3>
              <p className="text-gray-600 text-xs tracking-wide">
                SYSTEMS INSTALLED
              </p>
            </div>
            <div>
              <h3 className="text-[#C4302C] text-3xl font-bold">45%</h3>
              <p className="text-gray-600 text-xs tracking-wide">
                AVG. SAVINGS
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CALCULATOR (SHIFTED DOWN USING mt-10) */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-3xl shadow-xl p-10 border border-gray-200 w-full max-w-2xl mt-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* LEFT INPUT SIDE */}
            <div>
              <h3 className="text-[22px] font-bold text-[#0F172A] leading-snug">
                Monthly Electricity Bill
              </h3>
              <p className="text-gray-500 text-sm mt-1 mb-5">
                Enter bill to see savings.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="border border-gray-300 rounded-xl px-4 py-3 bg-[#F7F7F7] flex items-center mb-4">
                  <span className="text-gray-500 text-lg">₹</span>
                  <input
                    type="text"
                    name="bill"
                    placeholder="e.g., 3000"
                    value={formData.bill}
                    onChange={handleChange}
                    className="w-full ml-3 bg-transparent outline-none text-gray-700 text-base"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#739131] hover:bg-[#739131] transition font-semibold text-white rounded-xl py-3 text-base shadow-md"
                >
                  {loading ? "Calculating..." : "Calculate Savings"}
                </button>
              </form>
            </div>

            {/* RIGHT CIRCLE SIDE */}
            <div className="flex flex-col items-center">
              <h4 className="text-[16px] font-semibold text-[#0F172A] mb-3">
                Electricity Saved
              </h4>

              <div className="relative w-40 h-40 mb-4">
                <svg className="w-full h-full">
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    stroke="#E5E7EB"
                    strokeWidth="12"
                    fill="transparent"
                  ></circle>

                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    stroke="#739131"
                    strokeWidth="12"
                    fill="transparent"
                    strokeLinecap="round"
                    strokeDasharray="377"
                    strokeDashoffset="94"
                    transform="rotate(-90 80 80)"
                  ></circle>
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-[#0F172A]">
                    75%
                  </span>
                  <span className="text-gray-500 text-sm">Saved</span>
                </div>
              </div>

              <div className="text-sm space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#739131] rounded-full"></span>
                  <p className="text-gray-600">Solar Power</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
                  <p className="text-gray-600">Grid Power</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* GREEN BUTTON */}
      <div className="flex justify-center mt-12">
        <Link
          to="/contact"
          className="px-10 py-3 bg-[#739131] hover:bg-[#739131] text-white font-semibold rounded-full shadow-md inline-block"
        >
          Adhik jaankari ke liye click krein
        </Link>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </motion.div>
  );
};

export default SolarCostCalculator;
