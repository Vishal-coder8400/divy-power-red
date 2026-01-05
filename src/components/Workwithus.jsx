import React from 'react';
import Footer from './Footer';
import { motion } from 'framer-motion';

function Workwithus() {
  const teamMembers = [
    {
      name: 'Mark Makana',
      role: 'Solar Specialist',
      image: 'https://storage.googleapis.com/a1aa/image/249ae767-68b3-4bcd-1521-265ee80c5d7b.jpg',
    },
    {
      name: 'John Makana',
      role: 'Solar Specialist',
      image: 'https://storage.googleapis.com/a1aa/image/ba2e056b-5797-4eaa-d680-7a78a84778c0.jpg',
    },
    {
      name: 'Arvvani Joe',
      role: 'Solar Specialist',
      image: 'https://storage.googleapis.com/a1aa/image/d8ee8bcd-44eb-4126-73ad-adb857ac13a5.jpg',
    },
    {
      name: 'Matchine Mue',
      role: 'Solar Specialist',
      image: 'https://storage.googleapis.com/a1aa/image/5b4ec894-2c46-41d5-4e01-bd02f1629da7.jpg',
    },
  ];

  // Variants for the card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: 'spring',
        stiffness: 100,
      },
    }),
  };

  return (
    <>
      <section className="bg-gradient-to-br from-green-50 to-white pt-4 pb-24 -mt-24 GetFontSol">

        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center mt-8">
  Work <span className="text-green-800">with Us</span>
</h2>
          <p className="text-lg text-gray-600 mb-16">Meet our expert solar energy professionals</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-md p-4 cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{ scale: 1.05, boxShadow: '0px 15px 30px rgba(0,0,0,0.2)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative rounded-xl overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-56 object-cover rounded-xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.button
                    aria-label={`Play video for ${member.name}`}
                    className="absolute bottom-3 left-3 bg-green-600 text-white rounded-full p-3 shadow-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="fas fa-play" />
                  </motion.button>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Workwithus;
