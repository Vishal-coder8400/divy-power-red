import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const CompanySection = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const [showVideo, setShowVideo] = useState(false);

  const contentMap = {
    mission: {
      text: "At Divy Power Pvt. Ltd., our mission is to make clean, renewable energy accessible to everyone...",
      img: "https://storage.googleapis.com/a1aa/image/a118e549-6b03-4f16-1f35-7a306d7e772d.jpg",
      note: "We are driven by purpose — to energize every corner sustainably.",
    },
    vision: {
      text: "We envision a future where every home and business uses clean solar energy...",
      img: "https://storage.googleapis.com/a1aa/image/a118e549-6b03-4f16-1f35-7a306d7e772d.jpg",
      note: "Our vision powers a cleaner tomorrow.",
    },
    why: {
      text: "At Divy Power Pvt. Ltd., we don’t just install solar systems — we build lasting energy partnerships...",
      img: "https://storage.googleapis.com/a1aa/image/a118e549-6b03-4f16-1f35-7a306d7e772d.jpg",
      note: "We are trustworthy — we don’t disappear after installation.",
    },
  };

  const activeContent = contentMap[activeTab];

  const tabStyle = (tab) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
      activeTab === tab
        ? "bg-[#739131] text-white shadow"
        : "bg-white text-green-800 border border-green-600 hover:bg-green-100"
    }`;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#090971] mb-14">
          Our <span className="text-[#739131]">Company</span>
        </h2>


        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="https://storage.googleapis.com/a1aa/image/b08acab3-6b8b-47a9-3cc6-092bfccc4ded.jpg"
              alt="Solar panels"
              className="w-full max-w-[460px] rounded-2xl shadow-xl object-cover"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-start"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#090971] mb-5 leading-snug">
              Produce Your Own <br />
              <span className="text-[#739131]">Clean Energy</span> <br />
              Save The Environment
            </h3>

            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-4">
              {["mission", "vision", "why"].map((key) => (
                <button
                  key={key}
                  className={tabStyle(key)}
                  onClick={() => setActiveTab(key)}
                >
                  {key === "mission"
                    ? "Our Mission"
                    : key === "vision"
                    ? "Our Vision"
                    : "Why Choose Us?"}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="text-gray-700 text-sm sm:text-base leading-relaxed"
              >
                <p className="mb-6">{activeContent.text}</p>

                {/* VIDEO + NOTE */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowVideo(true)}
                    className="w-14 h-14 rounded-full bg-[#C4302C] shadow-lg flex items-center justify-center hover:scale-105 transition"
                  >
                    <FaPlay className="text-white text-xl" />
                  </button>

                  <p className="text-black text-sm sm:text-base">
                    {activeContent.note}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full max-w-3xl aspect-video">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-6 -right-6 text-white bg-[#C4302C] w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-[#C4302C] transition"
              >
                <IoClose size={20} />
              </button>

              <iframe
                src="https://res.cloudinary.com/dlkwlywps/video/upload/v1755670732/Divy_Bbe_About_page_video_okuiui.mp4"
                allow="autoplay"
                title="Divy Power Video"
                className="w-full h-full rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CompanySection;
