import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const MicroInverter = () => {
  return (
    <>
      <div className="bg-gray-50 text-gray-800 font-sans py-20">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center py-10"
        >
          <h1 className="text-4xl font-bold text-[#090971]">Solar <span className="text-[#739131]">Solutions</span></h1>
        </motion.header>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-16">
          <div className="md:col-span-2 space-y-6">
            <motion.img
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              src="https://divyby.redspace.in/assets/images/updated-images/Inverter%20img-min.jpg"
              alt="Solar Panel Installation"
              className="w-full h-auto rounded shadow"
            />

            <motion.section initial="hidden" animate="visible" variants={fadeUp}>
              <h2 className="text-2xl font-semibold mb-4 text-[#090971]">Micro <span className="text-[#739131]">Inverter</span></h2>
              <p className=' text-gray-500'>
                Our micro inverters are engineered to enhance the efficiency and reliability of your solar panel system, providing a cutting-edge solution for energy conversion. Unlike conventional inverters that process power for an entire solar array, micro inverters operate individually on each panel, ensuring that every module functions at peak performance. This decentralized approach eliminates energy losses caused by shading or varying panel efficiency, making them an ideal choice for maximizing solar output.
              </p>
              <p className="mt-4 text-gray-500">
                By optimizing energy conversion at the panel level, our micro inverters significantly improve the overall productivity of your system. Even if some panels are partially shaded or experience efficiency variations, the rest continue to generate power without disruption. This makes them particularly beneficial for installations in areas with unpredictable sunlight exposure or complex roof layouts, ensuring maximum energy yield throughout the day.
              </p>
            </motion.section>
          <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-6">
  <motion.img
    initial="hidden"
    animate="visible"
    variants={fadeUp}
    src="https://divyby.redspace.in/assets/images/updated-images/inverter%201.png"
    alt="Solar Panels Field"
    className="
      w-full
      sm:max-w-[420px]
      lg:w-[380px]
      h-auto
      max-h-[270px]
      rounded
      shadow
      object-cover
    "
  />

  <motion.section
    initial="hidden"
    animate="visible"
    variants={fadeUp}
    className="w-full"
  >
    <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
      Reliability is a core feature of our micro inverters, built with advanced
      technology to withstand diverse environmental conditions. Their durable
      design ensures long-term performance while reducing the risks associated
      with a single point of failure—common in traditional centralized inverter
      systems. With built-in monitoring capabilities, users can track real-time
      energy production, allowing for proactive maintenance and efficiency
      adjustments.
    </p>
  </motion.section>
</div>

            <p className="mt-4 text-gray-500">
              Perfect for homeowners and businesses alike, our micro inverters offer a scalable and cost-effective solar solution. Whether you’re installing a residential system to lower electricity bills or implementing a commercial setup for sustainable energy use, micro inverters ensure the highest return on investment. Their ability to provide consistent power output, along with superior adaptability, makes them a smart choice for those looking to optimize their solar energy potential.
            </p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
            >
              {["STEP ONE", "STEP TWO", "STEP THREE"].map((step, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="bg-[#090971] text-white p-6 rounded shadow text-center"
                >
                  <div className="text-white text-2xl font-bold">0{i + 1}</div>
                  <div className="mt-2 font-semibold">{step}</div>
                  <p className="text-sm text-white mt-1">
                    Tactical services through market web services
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <aside className="space-y-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="bg-white p-6 rounded shadow"
            >
              <input
                type="text"
                placeholder="Enter Keyword"
                className="w-full p-2 border border-[#090971] rounded"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="bg-white p-6 rounded-2xl shadow-md space-y-4"
            >
              <h3 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-2">Our Products</h3>
              {[
                "Solar-pannel",
                "Solar-Pump",
                "Earthing",
                "LA",
                "Diesel/Petrol Genset",
              ].map((product, i) => (
                <Link
                  to={`/${product}`}
                  key={i}
                  className="block w-full px-4 py-2 rounded-lg text-[#C4302C] hover:text-white hover:bg-[#739131] transition-all duration-200 font-medium"
                >
                  {product.replace("-", " ")} &rarr;
                </Link>
              ))}
            </motion.div>



            <motion.div className="bg-white p-6 rounded shadow text-sm space-y-3">
              <div className="flex items-start gap-2">
                <span className="font-bold text-[#090971] w-20">Email:</span>
                <a href="mailto:info@example.com" className="text-[#C4302C] hover:underline">
                  Info@divypower.com

                </a>
              </div>


            </motion.div>

          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MicroInverter;
