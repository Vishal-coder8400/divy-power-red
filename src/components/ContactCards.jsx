import React from 'react';
import { motion } from 'framer-motion';

const ContactCards = () => {
  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8 GetFontSol -mt-[150px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Call Card */}
        <motion.div
          className="relative flex-1 rounded-2xl overflow-hidden min-h-[180px] bg-[#16151a] text-white flex items-center px-4 sm:px-6 md:px-10 shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <img
            src="https://storage.googleapis.com/a1aa/image/5db77e55-7c83-4e38-0659-a0e042ad4a70.jpg"
            alt="Call background"
            className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
          />
          <div className="relative flex items-center gap-4 sm:gap-5 w-full z-10">
            <div className="flex-shrink-0 rounded-full bg-[#1a191f] w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
              <i className="fas fa-phone-alt text-white text-lg sm:text-xl" />
            </div>
            <div className="flex flex-col">
            <a href="tel:+919310259325">
              <span className="text-green-500 text-sm sm:text-base font-medium mb-1">
                Call Us For Service
              </span>
              <br/>
              <span className="font-bold text-lg sm:text-2xl">
                +91 9310259325
              </span>
              <br/>
              <span className="text-gray-300 text-sm sm:text-base mt-1">
                Available 24/7 to assist you
              </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Mail Card */}
        <motion.div
          className="relative flex-1 rounded-2xl overflow-hidden min-h-[180px] bg-green-800 text-white flex items-center px-4 sm:px-6 md:px-10 shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src="https://storage.googleapis.com/a1aa/image/ae3eebf4-48a4-4978-88cd-7569620b8f25.jpg"
            alt="Mail background"
            className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
          />
          <div className="relative flex items-center gap-4 sm:gap-5 w-full z-10">
            <div className="flex-shrink-0 rounded-full bg-white w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
              <i className="fas fa-envelope text-green-800 text-lg sm:text-xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-sm sm:text-base font-medium mb-1">
                Mail Us Anytime
              </span>
              <span className="font-bold text-lg sm:text-2xl">
               info@divypower.com 
              </span>
              <span className="text-white text-sm sm:text-base mt-1">
                We're available 24/7 for your queries
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactCards;
