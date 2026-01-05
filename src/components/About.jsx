import React from "react";
import { motion } from "framer-motion";
import ProcessSteps from "./ProcessSteps";
import ExpertTeam from "./ExpertTeam";
import FiguringOut from "./FiguringOut";
import SolarCards from "./SolarCards";
import ContactCards from "./ContactCards";
import Footer from "./Footer";
import CompanySection from "./CompanySection";
import ChatUI4 from "./ChatUI4";
import sunImage from "../Images/didi.png";
import sunPhoto from "../Images/chacha.png";
import ScrollStackingCards from "./ScrollStackingCards";
import "./ScrollStackingCards.css";
import HoverVideoCard2 from "./HoverVideoCard2";
import HoverVideoCard3 from "./HoverVideoCard3";
import "./Home.css";
import HoverVideoCard from "./HoverVideoCard";
import ImageWithOverlay from "./ImageWithOverlay";
import IndiaPresence from "./IndiaPresence";

const aboutUsContent = [
  {
    heading: "Not Just Selling Solar We are a Partner in Your Journey",
    subheading:
      "At Divy Power Pvt. Ltd., we don’t just sell solar panels. We listen, understand, and build solutions.",
    points: [
      "Every home, business, or factory has a unique energy we begin by understanding yours",
      "Our approach is not sales-driven, it’s solution-focused.",
      "We help you avoid costly mistakes caused by all solar kits.",
      "We design systems that fit your life, not force you to adapt to them.",
    ],
    img: "https://storage.googleapis.com/a1aa/image/b08acab3-6b8b-47a9-3cc6-092bfccc4ded.jpg",
    alt: "Team discussing solar design solution on paper with panels in background",
  },
  {
    heading: "What If You Delay Solar? The Hidden Cost of Waiting",
    subheading:
      "We believe in honesty – waiting to switch to solar can cost more than you think.",
    points: [
      "Every electricity bill is money lost that could’ve been saved.",
      "Electricity prices are rising, and power cuts are more frequent.",
      "Delaying solar means losing not just money, but energy independence.",
      "Going solar isn’t just smart, it’s urgent and we help you act now.",
    ],
    img: "https://storage.googleapis.com/a1aa/image/a6bb9ba5-9710-4d97-6623-f283a7ce4df1.jpg",
    alt: "Clock with electric cables symbolizing urgency",
  },
  {
    heading: "Powering Every Home from Rooftops to Rural Villages",
    subheading:
      "We deliver energy solutions for everyone—from high-rises to rural India",
    points: [
      "No terrain or challenge is too complex we deliver where it’s needed.",
      "Our systems are designed to endure Indian conditions: dust, heat, and rain.",
      "Be it a home, farm, or school our mission is to light it up, cleanly and reliably.",
      "We believe clean energy is a right, not a luxury.",
    ],
    img: "https://storage.googleapis.com/a1aa/image/72f5a45b-2e30-45fc-b276-a06c6a12a64e.jpg",
    alt: "Solar panels on rooftops and rural homes",
  },
  {
    heading: "A Legacy You Can Rely On",
    subheading:
      "With over 25 years in the energy sector, trust is not claimed – it’s earned.",
    points: [
      "We’ve grown with the solar industry and bring decades of expertise.",
      "Our systems are known for longevity and reliability.",
      "We focus on doing what’s right, not just what sells.",
      "Our client relationships last because we deliver consistent results.",
    ],
    img: "https://storage.googleapis.com/a1aa/image/a6bb9ba5-9710-4d97-6623-f283a7ce4df1.jpg",
    alt: "Old and new solar projects representing legacy and evolution",
  },
  {
    heading: "Creating Real Change Through Government Collaborations",
    subheading:
      "We don’t just talk about impact – we create it, in partnership with the Government.",
    points: [
      "As a UPNEDA-approved vendor, we drive solar adoption at scale.",
      "We power not just homes, but hospitals, schools, and public infrastructure.",
      "We empower communities to control their energy future.",
      "We act on our mission to build a better, solar-powered India.",
    ],
    img: "https://storage.googleapis.com/a1aa/image/72f5a45b-2e30-45fc-b276-a06c6a12a64e.jpg",
    alt: "Government officials and solar technicians inspecting installation",
  },
];

export default function About() {
  return (
    <div className="bg-white text-black w-full About">

      {/* ===== BANNER (EXACT DIVYPOWER STYLE) ===== */}
      <ImageWithOverlay />

      {/* ===== CHAT UI (NO TOP GAP) ===== */}
      <section className="w-full">
        <ChatUI4 />
      </section>

      {/* ===== SCROLL STACKING CARDS ===== */}
    {/* ===== SCROLL STACKING CARDS ===== */}
<div className="-mt-[140px] sm:-mt-[120px] md:-mt-[200px] lg:-mt-[550px] 2xl:-mt-[700px] mb-24">
  <ScrollStackingCards content={aboutUsContent} />
</div>
z

      {/* ===== COMPANY SECTION ===== */}
      <section
        className="
          -mt-[120px]
          sm:-mt-[180px]
          md:-mt-[230px]
          lg:-mt-[290px]
          w-full
        "
      >
        <CompanySection />
      </section>

      <section className="w-full mt-8">
        <HoverVideoCard2 />
      </section>

      <section className="w-full mt-12">
        <ProcessSteps />
      </section>

      <section className="w-full mt-1">
        <HoverVideoCard3 />
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-white py-8 px-4 sm:px-6 lg:px-8 w-full About">
        <div className="bg-[#090971] shadow-xl overflow-x-hidden p-5 sm:p-8 md:p-12 w-full">
          <div className="flex flex-col items-center justify-center gap-3 mb-6 text-center">
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <img
                src={sunPhoto}
                alt="Chacha"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
              />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                Why Choose Us <br className="sm:hidden" />
                as Your Solar Partner?
              </h2>
              <img
                src={sunImage}
                alt="Didi"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
              />
            </div>
          </div>

          <div className="text-gray-800 text-sm sm:text-base md:text-lg space-y-4">
            <p className="text-center sm:text-left text-white">
              At <strong>Divy Power Pvt. Ltd.,</strong> we don't just install solar
              systems — we build{" "}
              <span className="text-white font-semibold">
                lasting energy partnerships
              </span>.
            </p>

            <ul className="list-disc list-inside space-y-3 text-white">
              <li><strong>Committed to quality, accountability, and long-term service.</strong></li>
              <li><strong>Post-installation support:</strong> real-time monitoring.</li>
              <li><strong>Certified engineers & government-approved materials.</strong></li>
              <li><strong>MNRE-approved & UPNEDA-certified.</strong></li>
              <li><strong>Proven track record across India.</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-2 w-full">
        <FiguringOut />
      </section>

      <section className="mt-2 w-full">
        <IndiaPresence />
      </section>

      <section className="mt-2 w-full">
        <SolarCards />
      </section>

      <section className="mt-10 w-full">
        <Footer />
      </section>

    </div>
  );
}
