// import React, { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import {
//   FaMapMarkerAlt, FaClock, FaPhoneAlt, FaFacebookF,
//   FaInstagram, FaTwitter, FaLinkedinIn
// } from 'react-icons/fa';
// import { FiSearch } from 'react-icons/fi';
// import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
// import { GiSolarPower } from 'react-icons/gi';
// import solarlogo from '../Images/logo3.png'

// const navLinks = [
//   { name: 'Home', path: '/' },
//   { name: 'About', path: '/about' },
//   { name: 'Services', path: '/services' },
//   { name: 'Projects', path: '/projects' },
//   { name: 'Products', path: '/products' },
//   { name: 'Work With Us', path: '/workwithus' },
//   { name: 'Contact', path: '/contact' },
// ];

// const Navbar2 = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);

//   return (
//     <div className="w-full sticky top-0 z-50 bg-gray-900 shadow-md">
//       {/* Top Info */}
//       {/* <div className="flex justify-between items-center px-4 md:px-8 py-2 text-sm text-gray-600 border-b">
//         <div className="flex items-center gap-4 flex-wrap">
//           <div className="flex items-center gap-1">
//             <FaMapMarkerAlt className="text-green-600" />
//             <span>53, Ramte Ram Rd, Ekta Vihar, Arjun Nagar,
//               Nai Basti Dundaher Ghaziabad,
//               Uttar Pradesh 201001</span>
//           </div>

//         </div>
//         <div className="hidden md:flex gap-4 text-lg">
//           <FaFacebookF className="hover:text-green-600 cursor-pointer" />
//           <FaInstagram className="hover:text-green-600 cursor-pointer" />
//           <FaTwitter className="hover:text-green-600 cursor-pointer" />
//           <FaLinkedinIn className="hover:text-green-600 cursor-pointer" />
//         </div>
//       </div> */}

//       {/* Main Nav */}
//       <div className="flex justify-between items-center px-4 md:px-8 py-4 relative">
//         {/* Logo */}
//         <div className="flex items-center gap-2">

//           <Link to="/" className="flex items-center gap-2">
//             {/* <GiSolarPower className="text-gray-900 text-3xl" />
//             <span className="text-xl font-bold text-gray-900 tracking-wide">DIVY POWER</span> */}
//             <img src={solarlogo} className=' w-12 ' />
//           </Link>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex gap-6 text-base font-medium text-gray-100">
//           {navLinks.map(link => (
//             <NavLink
//               key={link.name}
//               to={link.path}
//               className={({ isActive }) =>
//                 isActive ? 'text-orange-500 font-semibold' : 'hover:text-orange-500'
//               }
//             >
//               {link.name}
//             </NavLink>
//           ))}
//         </div>

//         {/* Right Tools */}
//         <div className="flex items-center gap-4">
//           {/* Call Info */}
//           <div className="hidden md:flex items-center gap-2">
//             <div className="bg-white p-2 rounded-full">
//               <FaPhoneAlt className="text-green-800" />
//             </div>
//             <div className="text-sm">
//               <p className="text-gray-100 font-medium">Requesting A Call:</p>
//               <p className="font-bold text-gray-100">+91 9310259325</p>
//             </div>
//           </div>

//           {/* Get a Quote Button */}
//           {/* <button className="hidden md:flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
//             Get a quote →
//           </button> */}

//           {/* Search Toggle */}


//           {/* Mobile Hamburger */}
//           <button className="md:hidden text-2xl text-gray-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
//           </button>
//         </div>
//       </div>

//       {/* Search Input */}
//       {showSearch && (
//         <div className="w-full px-4 md:px-8 pb-3 transition-all duration-300 ease-in-out">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//         </div>
//       )}

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden px-6 bg-gray-900 shadow-md overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] py-4' : 'max-h-0'
//           }`}
//       >
//         {navLinks.map(link => (
//           <NavLink
//             key={link.name}
//             to={link.path}
//             className="block py-2 text-base font-medium text-gray-100 hover:text-green-600"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             {link.name}
//           </NavLink>
//         ))}
//         {/* <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded w-full">
//           Get a quote →
//         </button> */}
//       </div>
//     </div>
//   );
// };

// export default Navbar2;

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import solarlogo from '../Images/logo3.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Products', path: '/products' },
  { name: 'Work With Us', path: '/workwithus' },
  { name: 'Contact', path: '/contact' },
];

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50  py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-[#03132B] text-white rounded-full px-5 md:px-8 py-3 shadow-md transition-all duration-300">

        {/* Logo Section */}
        <div className="flex items-center h-12">
          <Link to="/" className="flex items-center">
            <img
              src={solarlogo}
              alt="Logo"
              className="w-12 h-12 object-contain pt-[1px]"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center gap-6 text-base font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-[#C4302C] font-semibold underline underline-offset-4'
                  : 'hover:text-[#C4302C] transition duration-200'
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Call + Toggle Section */}
        <div className="flex items-center gap-4">
          {/* Call Info (Desktop) */}
          <a href="tel:+919310259325" className="flex items-center gap-2 ">
            <div className="bg-white p-2 rounded-full">
              <FaPhoneAlt className="text-[#739131]" />
            </div>
            <div className="text-sm text-white">
              <p className="font-medium">Requesting A Call:</p>
              <p className="font-bold">+91 9310259325</p>
            </div>
          </a>



          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 mt-2 rounded-xl px-6 py-4 shadow-lg transition-all duration-300 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="block text-base font-medium text-white hover:text-[#C4302C]"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Divider */}
          <div className="border-t border-gray-700 my-3"></div>

          {/* Mobile Call Info */}
          <div className="flex items-center gap-2">
            <div className="bg-white p-2 rounded-full">
              <FaPhoneAlt className="text-[#C4302C]" />
            </div>
            <div className="text-sm text-white">
              <p className="font-medium">Requesting A Call:</p>
              <p className="font-bold">+91 9310259325</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar2;
