// components/SocialIcons.jsx
import React, { useEffect, useState } from 'react';
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa6';

const iconStyle = `w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg backdrop-blur-md`;

const SocialIcons = () => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowIcons(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Left Side Icons - Facebook, Twitter (X), LinkedIn */}
      <div
        className={`flex fixed top-1/2 left-3 -translate-y-1/2 flex-col  gap-44 lg:gap-16 md:gap-16 xl:gap-16 2xl:gap-16 z-[9999] transition-opacity duration-500 ${
          showIcons ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <a
          href="https://www.facebook.com/divypowerpvtltd/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconStyle} bg-blue-600`}
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://x.com/DivyPower"
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconStyle} bg-black`}
          aria-label="Twitter"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.linkedin.com/company/divy-power-private-limited/?originalSubdomain=in"
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconStyle} bg-blue-700`}
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
      </div>

      {/* Right Side Icons - WhatsApp, Instagram, YouTube */}
      <div
        className={`flex fixed top-1/2 right-3 -translate-y-1/2 flex-col gap-44 lg:gap-16 md:gap-16 xl:gap-16 2xl:gap-16 z-[9999] transition-opacity duration-500 ${
          showIcons ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <a
          href="https://wa.me/919310259325"
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconStyle} bg-green-500`}
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.instagram.com/divy.power/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconStyle} bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600`}
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/@divypower4791"
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconStyle} bg-red-600`}
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
      </div>
    </>
  );
};

export default SocialIcons;
