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

const Earthing = () => {
    return (
        <>
            <div className="bg-gray-50 text-gray-800 font-sans py-0">
                <motion.header
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="text-center py-10"
                >
                    <h1 className="text-4xl font-bold text-[#090971]">Safety <span className="text-[#739131]">Solutions</span></h1>
                </motion.header>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-16">
                    <div className="md:col-span-2 space-y-6">
                        <motion.img
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            src="https://divyby.redspace.in/assets/images/updated-images/Earthing%202.jpg"
                            alt="Solar Panel Installation"
                            className="w-full h-auto rounded shadow"
                        />

                        <motion.section
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                        >
                            <h2 className="text-2xl font-semibold mb-4 text-[#090971]">Earthing</h2>
                            <p className=' text-gray-500'>
                               At Divy Power, we understand the critical role of earthing in safeguarding electrical systems. Our high-quality earthing solutions are designed to provide a safe and efficient path for electrical faults, preventing hazardous incidents such as shocks, fires, and equipment failures. With precise engineering and premium materials, we ensure that your electrical infrastructure remains secure and reliable.
                            </p>
                            <p className="mt-4 text-gray-500">
                                Proper earthing is essential for homes, businesses, and industrial facilities, helping to maintain stability in power distribution and protect appliances from sudden voltage fluctuations. Our systems effectively channel excess electricity into the ground, mitigating the risk of electrical surges and ensuring uninterrupted functionality of sensitive equipment. By implementing advanced grounding techniques, we create a safer environment for occupants and operators.
                            </p>
                        </motion.section>

                        <motion.img
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            src="https://divyby.redspace.in/assets/images/updated-images/img2%20%20earthing.png"
                            alt="Solar Panels Field"
                            className="w-full h-auto rounded shadow"
                        />

                        <motion.section
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                        >
                            <p className=' text-gray-500'>
                               Meeting stringent safety and industry standards, our earthing solutions are built for long-term durability and efficiency. We use high-grade conductors, robust grounding rods, and expertly designed layouts to enhance conductivity and minimize resistance. Whether for residential buildings or large-scale industrial plants, our installations are tailored to provide optimal protection and compliance with regulatory requirements.
                            </p>
                            <p className="mt-4 text-gray-500">
                                Beyond technical excellence, we focus on delivering cost-effective and maintenance-friendly earthing systems. Our solutions not only enhance safety but also contribute to the longevity of electrical equipment, reducing repair costs and downtime. With Divy Power’s expertise, customers can enjoy peace of mind knowing their electrical systems are reinforced with dependable and high-performance earthing solutions.
                            </p>
                        </motion.section>

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
                            <h3 className="text-2xl font-bold text-[#090971] border-b pb-2 mb-2">Our <span className="text-[#739131]">Products</span></h3>
                            {[
                                "Solar-pannel",
                                "Solar-Pump",
                                "Micro-Inverter",
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

                        

                    </aside>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Earthing;

