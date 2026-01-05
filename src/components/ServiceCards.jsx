import React, { useRef } from "react";
import {
  FaTools,
  FaProjectDiagram,
  FaCog,
  FaRecycle,
  FaSolarPanel,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ServiceCards.css";

const services = [
  {
    icon: <FaTools />,
    title: "Installation & Commissioning (INC)",
    description:
      "Divy Power handles the complete installation and commissioning of solar systems, generators, and other power equipment.",
    path: "/Installation_&_Commissioning_(INC)",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Engineering, Procurement, and Construction (EPC)",
    description:
      "They provide turnkey solutions for solar energy projects, including design, procurement of materials, and construction.",
    path: "/Engineering_Procurement_and_Construction_(EPC)",
  },
  {
    icon: <FaCog />,
    title: "Operations & Maintenance (O&M)",
    description:
      "Provides ongoing maintenance to ensure optimal performance of solar panels, generators, and other systems.",
    path: "/Operations_&_Maintenance_(O&M)",
  },
  {
    icon: <FaRecycle />,
    title: "Annual Maintenance Contracts (AMC)",
    description:
      "Divy Power provides AMC services for diesel generators, solar systems, and other equipment to ensure long-term reliability.",
    path: "/Annual_Maintenance_Contracts(AMC)",
  },
  {
    icon: <FaSolarPanel />,
    title: "Health Check ups",
    description:
      "We provide complete care for your car, including expert advice, repairs, and preferred maintenance services.",
    path: "/Health_Check_ups",
  },
];

const ServiceCards = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

const scroll = (direction) => {
  if (!sliderRef.current) return;

  const slider = sliderRef.current;
  const cardWidth = 360; // must match scroll value
  const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

  if (direction === "right") {
    // If at end → go to start
    if (slider.scrollLeft >= maxScrollLeft - 5) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  }

  if (direction === "left") {
    // If at start → go to end
    if (slider.scrollLeft <= 5) {
      slider.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  }
};


  return (
    <section className="service-section">
      <div className="service-wrapper">
        {/* LEFT ARROW */}
        <button className="nav-arrow left" onClick={() => scroll("left")}>
          <FaChevronLeft />
        </button>

        {/* SLIDER */}
        <div className="service-slider" ref={sliderRef}>
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              onClick={() => navigate(service.path)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button className="nav-arrow right" onClick={() => scroll("right")}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default ServiceCards;
