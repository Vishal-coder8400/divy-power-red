import React from 'react';
import background from "../Images/home.png";
import family from "../Images/j2.png";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



function Homestart() {
    return (
        <div
            className="min-h-screen  2xl:h-[1050px]  flex flex-col relative overflow-hidden -mt-0 sm:-mt-0 lg:-mt-40 bg-[#C4C4C4]"
            style={{

                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <main className="flex flex-col lg:flex-row flex-1 max-w-[1280px] mx-auto w-full px-6 md:px-12 items-center justify-between relative z-10">

                {/* Left Content */}
                <motion.div
                    className="max-w-lg mt-16 md:mt-24 lg:mt-32 text-center lg:text-left z-10 -ml-0 2xl:-ml-28 "
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className="text-black text-sm 2xl:text-lg font-semibold mb-1 -mt-0 md:-mt-16 lg:-mt-16 xl:-mt-16 2xl:-mt-48 ">
                        Is Your Electricity Bill Burning a Hole in Your Wallet?
                    </p>
                    <h1 className="text-[36px] md:text-4xl 2xl:text-[42px] font-extrabold text-[#121827] leading-tight mb-1 ">
                        THEN SWITCH TO <span className="text-[#FD8C4E] italic font-extrabold">SOLAR ENERGY TODAY</span>
                    </h1>
                    <p className="text-gray-600 text-sm 2xl:text-lg font-medium mb-8 leading-relaxed ">
                        Power your <span className="font-semibold">home</span> or business
                        <br />
                        with India’s most trusted solar experts.
                    </p>
                    <Link to="/contact" className="">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#E50C0C]  w-[320px] text-white font-semibold rounded-full py-3 px-8 hover:bg-[#2f6f3a] transition"
                        >
                            Get Free Solar Consultation
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Right Visuals */}
                <motion.div
                    className="relative flex-1 h-[500px]  sm:h-[600px] md:h-[700px] mt-20 md:mt-32"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <motion.img
                        src={background}
                        alt="Solar globe"
                        className="  md:absolute lg:absolute xl:absolute scale-[1.39] 2xl:scale-[1.82] top-[250px] 2xl:top-[290px] "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    />
                </motion.div>

                {/* Family Image */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <img
                        src={family}
                        alt="Smiling family"
                        className="absolute top-[700px] 2xl:top-[850px] left-[1050px] transform -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[300px] md:w-[360px] lg:w-[400px] z-20"
                    />
                </motion.div>

            </main>
        </div>
    );
}

export default Homestart;
