import React from "react";
import {
  FaHandshake,
  FaTools,
  FaChartLine,
  FaIndustry,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

const BecomePartner = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8 text-gray-800">

      {/* ================= TITLE ================= */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-[#090971]">Work With Us, Become a</span>{" "}
          <span className="text-[#739131]">DIVY Solar Partner</span>
        </h1>

        <p className="text-base leading-relaxed text-gray-600">
          Join hands with <strong className="text-[#739131]">DIVY Solar</strong>, one of India’s leading
          solar energy solution providers, and be a part of the clean energy
          revolution. We are actively expanding our dealer and partner network
          across India and are looking for passionate, driven, and
          growth-oriented individuals or businesses to collaborate with us.
        </p>
      </div>

      {/* ================= WHY PARTNER ================= */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold text-center mb-10 text-[#090971]">
          Why Partner with <span className="text-[#739131]">DIVY Solar?</span> 
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <FaHandshake className="text-[#C4302C] text-3xl mb-4" />
            <h4 className="font-semibold mb-2 text-[#090971]">Trusted Brand</h4>
            <p className="text-sm text-gray-600">
              Recognized for quality, innovation, and customer satisfaction.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <FaTools className="text-[#C4302C] text-3xl mb-4" />
            <h4 className="font-semibold mb-2 text-[#090971]">High-Quality Products</h4>
            <p className="text-sm text-gray-600">
              MNRE-approved, efficient, and durable solar panels and systems.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <FaUsers className="text-[#C4302C]  text-3xl mb-4" />
            <h4 className="font-semibold mb-2 text-[#090971]">
              Marketing & Technical Support
            </h4>
            <p className="text-sm text-gray-600">
              Complete training, marketing material, and on-ground support to
              help you succeed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <FaChartLine className="text-[#C4302C]  text-3xl mb-4" />
            <h4 className="font-semibold mb-2 text-[#090971]">Attractive Margins</h4>
            <p className="text-sm text-gray-600">
              Competitive pricing and strong profit potential.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <FaIndustry className="text-[#C4302C]  text-3xl mb-4" />
            <h4 className="font-semibold mb-2 text-[#090971]">Fast-Growing Industry</h4>
            <p className="text-sm text-gray-600">
              Be a part of India’s booming solar sector with massive future
              potential.
            </p>
          </div>
        </div>
      </div>

      {/* ================= WHO CAN JOIN ================= */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold text-center mb-10 text-[#090971]">
          Who Can  <span className="text-[#739131]">Join?</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Solar product dealers or distributors",
            "Electrical contractors and engineers",
            "Entrepreneurs and startups interested in renewable energy",
            "Real estate and infrastructure professionals",
            "NGOs or institutions promoting sustainable energy",
          ].map((item, index) => (
            <span
              key={index}
              className="px-5 py-2 bg-green-50 border border-[#090971] rounded-full text-sm font-medium text-[#090971]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ================= WHAT WE OFFER ================= */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold text-center mb-10 text-[#090971]">
          What We Offer
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 max-w-4xl mx-auto ">
          {[
            "Product supply and logistics support",
            "Installation and technical guidance",
            "Sales training and business consultation",
            "Assistance with government schemes and subsidies",
            "Lead generation and local promotion support",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3  p-4 rounded-lg border shadow-sm bg-[#090971] "
            >
              <FaCheckCircle className="text-[#739131]" />
              <p className="text-sm text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="bg-[#739131] text-white rounded-2xl p-8 text-center max-w-4xl mx-auto">
        <p className="text-base font-bold">
          Ready to Partner with Us?
          <span className="underline ml-2 cursor-pointer">
            Click the Link Below
          </span>
        </p>
      </div>

    </section>
  );
};

export default BecomePartner;
