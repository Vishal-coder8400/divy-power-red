import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";
import CallBackSection from "./CallBackSection";
import solarlogo from "../Images/logo2.png";

const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Products", path: "/products" },
  { name: "Work With Us", path: "/workwithus" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#090971] text-white GetfontHomeDash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Call Back Section */}
        <CallBackSection />

        <footer className="pb-6">

          {/* ===== TOP FOOTER ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold border-b border-green-800 pb-1 mb-3">
                Contact Info
              </h3>
              <ul className="space-y-1 text-sm text-[#B0B9D1]">
                <li className="flex items-center gap-2">
                  <FaPhoneAlt /> +91 9310259325
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope /> admin@divypower.com
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope /> info@divypower.com
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope /> sales@divypower.com
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-sm font-semibold border-b border-green-800 pb-1 mb-3">
                Useful Links
              </h3>
              <div className="grid grid-cols-2 gap-1 text-sm text-[#B0B9D1]">
                {routes.map((route) => (
                  <NavLink
                    key={route.name}
                    to={route.path}
                    className="flex items-center gap-1 hover:text-white"
                  >
                    <FaAngleRight /> {route.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Our Solutions */}
            <div>
              <h3 className="text-sm font-semibold border-b border-green-800 pb-1 mb-3">
                Our Solutions
              </h3>
              <ul className="text-sm text-[#B0B9D1] space-y-1">
                {[
                  "Solar Rooftop",
                  "Battery Storage",
                  "Solar Street Lights",
                  "Hybrid Solar Systems",
                  "Solar Water Pump",
                  "EV Charging Stations",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-1 hover:text-white"
                  >
                    <FaAngleRight /> {item}
                  </li>
                ))}
              </ul>

              {/* Social Icons */}
              <div className="flex gap-2 mt-3">
                {[FaFacebookF, FaInstagram, FaDribbble].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="bg-white text-[#00122E] w-7 h-7 rounded-full flex items-center justify-center hover:bg-gray-200"
                  >
                    <Icon size={13} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ===== BOTTOM FOOTER ===== */}
          <div className="border-t border-white/10 pt-6 mt-6">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-4 text-[#B0B9D1] text-xs">

              {/* Left: Logo + Address */}
              <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                <div className="bg-white/90 rounded-full px-3 py-2 shadow-md">
                  <img
                    src={solarlogo}
                    alt="DIVY Power Logo"
                    className="h-8 sm:h-9 object-contain"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <FaMapMarkerAlt className="mt-0.5" />
                  <span>
                    53, Ramte Ram Rd, Ekta Vihar, Arjun Nagar, Nai Basti Dundaher
                    Ghaziabad, Uttar Pradesh 201001
                  </span>
                </div>
              </div>

              {/* Center: Copyright */}
              <div className="text-center">
                © {new Date().getFullYear()} DIVY POWER. All rights reserved.
              </div>

              {/* Right: Privacy Policy */}
              <div
                className="cursor-pointer hover:text-white transition"
                onClick={() => navigate("/privacy")}
              >
                Privacy Policy
              </div>
            </div>
          </div>

        </footer>
      </div>
    </div>
  );
};

export default Footer;
