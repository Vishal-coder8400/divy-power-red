import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaPhoneAlt,
  FaTools,
  FaProjectDiagram,
  FaCog,
  FaRecycle,
  FaStethoscope,
  FaHandshake,
  FaGasPump,
  FaBriefcase,
  FaUserTie,
} from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { MdSolarPower, MdMemory } from "react-icons/md";
import { GiLightningTrio, GiGroundSprout, GiWaterDrop } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import solarlogo from "../Images/logo2.png";

// Navigation Links
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "/services", // ✅ parent clickable
    dropdown: [
      { name: "Installation & Commissioning (INC)", path: "/Installation_&_Commissioning_(INC)", icon: <FaTools className="text-[#C4302C]"/> },
      { name: "Engineering, Procurement, and Construction (EPC)", path: "/Engineering_Procurement_and_Construction_(EPC)", icon: <FaProjectDiagram className="text-[#C4302C]"/> },
      { name: "Operations & Maintenance (O&M)", path: "/Operations_&_Maintenance_(O&M)", icon: <FaCog className="text-[#C4302C]"/> },
      { name: "Annual Maintenance Contracts (AMC)", path: "/Annual_Maintenance_Contracts(AMC)", icon: <FaRecycle className="text-[#C4302C]"/> },
      { name: "Health Check ups", path: "/Health_Check_ups", icon: <FaStethoscope className="text-[#C4302C]"/> },
    ],
  },
  { name: "Projects", path: "/projects" },
  {
    name: "Products",
    path: "/products", // ✅ parent clickable
    dropdown: [
      { name: "SOLAR PANEL", path: "/Solar-pannel", icon: <MdSolarPower className="text-[#C4302C]"/> },
      { name: "SOLAR PUMP", path: "/solar-pump", icon: <GiWaterDrop className="text-[#C4302C]" /> },
      { name: "MICRO INVERTER", path: "/micro-inverter", icon: <MdMemory className="text-[#C4302C]"/> },
      { name: "Earthing", path: "/earthing", icon: <GiGroundSprout className="text-[#C4302C]"/> },
      { name: "Lightning Arrestor (LA)", path: "/LA", icon: <GiLightningTrio className="text-[#C4302C]"/> },
      { name: "Diesel/Petrol Genset", path: "/Diesel/Petrol%20Genset", icon: <FaGasPump className="text-[#C4302C]"/> },
    ],
  },
  {
    name: "Work With Us",
    path: "/workwithus", // ✅ parent clickable
    dropdown: [
      { name: "Become our Dealer", path: "/workwithus", icon: <FaHandshake className="text-[#C4302C]"/> },
      { name: "Become Our Individual Partner", path: "/become-partner", icon: <FaUserTie className="text-[#C4302C]"/> },
      { name: "Add Our Services to Your Existing Business", path: "/add-our-services", icon: <FaBriefcase className="text-[#C4302C]"/> },
    ],
  },
  { name: "Career", path: "/career" },
  { name: "Contact", path: "/contact" },
];

export default function SolarLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Sticky navbar effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > -10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setDesktopDropdown(null);
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  }, [location.pathname]);

  // Close desktop dropdown if mouse leaves menu
  const closeDropdownOnOutsideHover = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.relatedTarget)) {
      setDesktopDropdown(null);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}
      onMouseLeave={closeDropdownOnOutsideHover}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-3">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={solarlogo} alt="Logo" className="w-12 h-12 object-contain" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-base font-medium">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setDesktopDropdown(link.name)} // desktop hover
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 cursor-pointer ${
                      isActive
                        ? "text-[#739131] font-semibold"
                        : "hover:text-[#739131]"
                    }`
                  }
                >
                  {link.name}
                  <IoIosArrowDown className="text-sm" />
                </NavLink>
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-[#739131] font-semibold" : "hover:text-[#739131]"
                }
              >
                {link.name}
              </NavLink>
            )
          )}
        </nav>

        {/* Call Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="tel:+919310259325" className="hidden md:flex items-center gap-2">
            <div className="bg-white p-2 rounded-full shadow">
              <FaPhoneAlt className="text-green-800" />
            </div>
            <div className="text-sm text-black">
              <p className="font-medium">Requesting A Call:</p>
              <p className="font-bold">+91 9310259325</p>
            </div>
          </a>
          {/* Mobile menu button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(true)}
          >
            <HiOutlineMenu />
          </button>
        </div>
      </div>

      {/* Desktop Dropdown */}
      <AnimatePresence>
        {desktopDropdown && (
          <motion.div
            ref={dropdownRef}
            key={desktopDropdown}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg z-40"
          >
            <div className="max-w-7xl mx-auto px-5 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {navLinks
                .find((l) => l.name === desktopDropdown)
                ?.dropdown?.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.path}
                    className="flex items-start gap-4 p-5 hover:bg-gray-100 rounded-xl transition"
                  >
                    <span className="text-3xl text-green-700">{sub.icon}</span>
                    <p className="font-semibold text-gray-900">{sub.name}</p>
                  </Link>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 flex flex-col"
          >
            {/* Top Bar with Logo + Close */}
            <div className="flex justify-between items-center p-5 border-b">
             <Link to={"/"}>
               <img src={solarlogo} alt="Logo" className="w-12 h-12 object-contain" />
             </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl"
              >
                <HiOutlineX />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name}>
                    <button
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === link.name ? null : link.name
                        )
                      }
                      className="flex justify-between items-center w-full text-lg font-semibold py-2"
                    >
                      {link.name}
                      <IoIosArrowDown
                        className={`transition-transform ${
                          mobileDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileDropdown === link.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="pl-4 space-y-2"
                        >
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="block py-1 text-gray-600 text-base"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block text-lg font-semibold py-2"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
