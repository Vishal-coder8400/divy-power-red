import React from "react";
import { motion } from "framer-motion";

export default function Ctpage() {
  const testimonials = [
    {
      feedback: "Excellent service with homely touch…! All the best..!!",
      name: "GOOD YEAR",
      role: "1 MWP",
    },
    {
      feedback:
        "Fully Dependable. Well Planned, Secure Execution, Trusted and Commanded. Best Managed - Fully Responsive – we got remitted the Subsidy at early time. Good Partner – Heartily Wishes-",
      name: "HINDU Education Society – Sonipat – Haryana",
      role: "800 KWp",
    },
    {
      feedback:
        "Out standing service Support with instant decision is Edge of them. They know the Art to satisfied the every concern in corporate.",
      name: "BKT",
      role: "1000 KWp",
    },
    {
      feedback:
        "Technical patienceful EPC. Supply and installations. This ‘T’&’D’ combination works with full determination even though during hardship.",
      name: "Skylark Group",
      role: "1450 KWp - 9 Locations",
    },
    {
      feedback:
        "Recommendable supplier..!! Our Experience for – 450 KW solar - 5 locations.",
      name: "Bal Bharati Group of Education",
      role: "450 KW",
    },
    {
      feedback:
        "Technical and Supportive installation – we are getting maximum generation in our area.",
      name: "O.S Cool Home – Kundali – Haryana",
      role: "100 KWp",
    },
    {
      feedback:
        "CARE with advisable capabilities. Humbled! With modern tools and solutions",
      name: "Orient Syntax – Bhiwadi – Rajasthan",
      role: "1000 KWp",
    },
    {
      feedback:
        "Technical Expert Team, Timely Execution with full synchronised support with Govt’ dept.",
      name: "Hargobind COLD – Markanda – Haryana",
      role: "150 KW",
    },
    {
      feedback:
        "Very well Connected at every step – with Strong Tech. capabilities. Our MD is very impressed.",
      name: "R.K. Rayon",
      role: "100 KWp – Roof Top",
    },
  ];

  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="bg-[#f8f7f0] h-[470px] text-white px-4 py-10 GetfontHomeDash -mt-[430px] overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center px-4 mb-12">
        {/* <p className="text-green-800 font-semibold mb-2 uppercase tracking-widest">
          Testimonials
        </p> */}
        <h3 className="lg:text-[30px] xl:text-[30px] 2xl:text-[30px] text-2xl text-green-800 font-bold">
          What Our Happy Customers Say
        </h3>
      </div>

      {/* Scrolling Cards */}
      <div className="overflow-hidden h-[400px]">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loopTestimonials.map((t, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ffffff",
                color: "#000000",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
              }}
              className="min-w-[300px] max-w-sm bg-[#e8f5e9] p-6 rounded-2xl shadow-md text-black transition-all duration-300 cursor-pointer mt-5"
            >
              <div className="flex mb-2 text-yellow-400 text-lg">{"⭐".repeat(5)}</div>
              <p className="text-gray-700 italic mb-4 line-clamp-4">"{t.feedback}"</p>
              <p className="font-semibold text-[16px]">{t.name}</p>
              <p className="text-green-800 text-sm font-medium">{t.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
