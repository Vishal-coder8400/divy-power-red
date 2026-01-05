import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import faqImage from "../Images/j1.png"; // your Indian-style FAQ image

const faqData = {
  General: [
    {
      question: "What makes Divy Power different from other solar companies?",
      answer:
        "We are an authorized partner of Tata Power Solar with over a decade of experience in premium solar installations.",
    },
    {
      question: "Do you provide complete solar project solutions?",
      answer:
        "Yes, we handle everything: site survey, design, installation, approvals, and handover.",
    },
    {
      question: "Sarkari subsidy kaise milti hai?",
      answer:
        "Subsidy online apply karna hota hai ya approved vendor ke through. Hum aapki poori madad karte hain.",
    },
    {
      question: "Can I get a customized solar solution for my home or business?",
      answer:
        "Bilkul! Hum aapke load, location aur budget ke according solar system design karte hain.",
    },
    {
      question: "What is included in your AMC?",
      answer:
        "AMC me regular cleaning, system health check-up, performance tracking aur panel inspection shamil hain.",
    },
    {
      question: "How safe are your solar systems?",
      answer:
        "Divy Power UL-certified components use karta hai aur high standard safety practices follow karta hai.",
    },
    {
      question: "What is the lifespan of a solar panel system?",
      answer:
        "Solar panels approx 25–30 saal tak chal sakte hain proper maintenance ke saath.",
    },
    {
      question: "Do you provide gensets along with solar systems?",
      answer: "Haan, hum Diesel/Petrol aur Gas gensets bhi provide karte hain.",
    },
    {
      question: "How long does it take to install a solar system?",
      answer:
        "Ghar ke liye 2–5 din, commercial systems me size ke hisaab se installation ka time hota hai.",
    },
    {
      question: "Do solar systems work during cloudy weather or at night?",
      answer:
        "Cloudy weather me production kam hota hai, raat ko solar kaam nahi karta (battery system required).",
    },
  ],

  "Solar Maintenance": [
    {
      question: "Can Solar projects damage my roof?",
      answer:
        "Divy Power non-penetrating structures aur waterproofing solutions use karta hai, jisse roof safe rehti hai.",
    },
    {
      question: "Do I need to clean my Solar plant?",
      answer:
        "Haan, panel ko mahine me 1–2 baar soft brush ya cloth se clean karna chahiye.",
    },
  ],

  "Solar Economics": [
    {
      question: "How much does a solar plant cost?",
      answer:
        "Cost system ke size, structure aur components par depend karta hai. Hum multiple budget options dete hain.",
    },
    {
      question: "Are financing options available?",
      answer:
        "Divy Power EMI aur collateral-free loan facility provide karta hai tie-up banks ke through.",
    },
  ],
};

const TabsFAQ = () => {
  const tabs = Object.keys(faqData);
  const [activeTab, setActiveTab] = useState("General");
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-white py-16 px-4 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#090971] mb-12 leading-tight">
          Frequently Asked <span className="text-[#739131]">Questions</span>
        </h2>

        {/* Tabs */}
        <div className="flex border-b pb-2 mb-10 overflow-x-auto gap-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setOpenIndex(null); }}
              className={`px-6 py-2 rounded-t-lg font-semibold text-base transition-all duration-200 
                ${
                  activeTab === tab
                    ? "text-white bg-[#090971] shadow-md"
                    : "text-gray-600 hover:text-[#090971]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left FAQs */}
          <div className="space-y-6">
            {faqData[activeTab].map((item, index) => (
              <div
                key={index}
                className="border-b pb-4"
              >
                <div
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <h3 className="text-lg md:text-xl font-medium text-[#0F172A]">
                    {item.question}
                  </h3>

                  {openIndex === index ? (
                    <Minus size={22} className="text-blue-700" />
                  ) : (
                    <Plus size={22} className="text-blue-700" />
                  )}
                </div>

                {openIndex === index && (
                  <p className="text-gray-600 mt-3 text-base leading-relaxed">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Image with Indian Round Background */}
          <div className="relative flex justify-center items-start">
            <div className="absolute top-10 right-10 w-60 h-60 bg-blue-100 rounded-full -z-10"></div>
            <img
              src={faqImage}
              alt="FAQ Expert"
              className="w-[300px] md:w-[380px] lg:w-[420px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TabsFAQ;
