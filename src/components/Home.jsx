import React, { Suspense, lazy } from "react";

import DivyRedesign from "../Images/DivyRedesign.png";
import "./Home.css";

const Dashboard = lazy(() => import("./Dashboard"));

import SolarProduct from "./SolarProduct";
import SolarCostCalculator from "./SolarCostCalculator";
import FaqSection from "./FaqSection";
import SolarPortfolio from "./SolarPortfolio";

import ContactForm from "./ContactForm";
import Footer from "./Footer";

import ChatbotToggle from "./ChatbotToggle";
import SolarSolutions from "./SolarSolutions";

import ChatUI1 from "./ChatUI1";

import PageOne from "./PageOne";
import { Link } from "react-router-dom";
import Conversation from "./Conversation";
import HomeStart2 from "./HomeStart2";
import HoverVideoCard1 from "./HoverVideoCard1";
import FiguringOut1 from "./FiguringOut1";
import ExactMatchPage1 from "./ExactMatchPage1";
import FullScreenVideo from "./FullScreenVideo";
import RatingWorks from "./RatingWorks";

function Home() {
  return (
    <div className="relative max-w-full mx-auto overflow-hidden">
      <ChatbotToggle />

      {/* HERO SECTION */}
      <section className="About">
        <FullScreenVideo />
        <HomeStart2 />
      </section>

      {/* CONVERSATION */}
      <section className="About mt-12">
        <Conversation />
      </section>

      <Suspense fallback={<div></div>} />

      {/* SOLAR COST CALCULATOR */}
      <section className="About mt-16">
        <SolarCostCalculator />
      </section>

      {/* SOLAR SOLUTIONS */}
      <section className="About mt-16">
        <SolarSolutions />
      </section>

      {/* CONTACT FORM */}
      <section className="About1 mt-16">
        <ContactForm />
      </section>

      {/* PAGE ONE */}
      <section className="About mt-12">
        <PageOne />
      </section>

      {/* CHAT UI */}
      <section className="About mt-12">
        <ChatUI1 />
      </section>

      {/* SOLAR PRODUCTS */}
      <section className="About  bg-green-800">
        <SolarProduct />
      </section>

      {/* FLOATING IMAGE */}
      {/* <section className="mt-16 animate-float flex justify-center">
        <img src={DivyRedesign} alt="Design" />
      </section> */}

      {/* FIGURING OUT */}
      <section className="About1 mt-4">
        <FiguringOut1 />
      </section>

      {/* OUR CLIENTS */}
      <section className="About1 mt-5">
        <ExactMatchPage1 />
      </section>

      {/* SOLAR RATINGS */}
      <section className="About mt-16">
        <RatingWorks />
      </section>

      {/* FINAL WRAPPER SECTION */}
      <section className="bg-[#f8f7f0] About1 pt-12 pb-0 mt-16">
        {/* SOLAR PROJECTS */}
        <SolarPortfolio />

        {/* HOVER VIDEO */}
        <div className="mt-16">
          <HoverVideoCard1 />
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <FaqSection />
        </div>

        {/* FOOTER — NO EXTRA MARGIN */}
        <div className="mt-20">
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default Home;
