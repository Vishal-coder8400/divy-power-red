import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Pro1 from "../Images/Pro1.jpg";
import Pro2 from "../Images/Pro2.jpg"
import Pro3 from "../Images/Pro3.png";
import Footer from "./Footer";


const ProjectDetails = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    return (
        <>
            <div className="bg-gray-50 text-gray-800 font-sans py-20">
                <motion.header
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="text-center py-10"
                >
                    <h1 className="text-4xl font-bold">Projects details</h1>
                </motion.header>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-16">
                    <div className="md:col-span-2 space-y-6">
                        <motion.img
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            src={Pro1}
                            alt="Solar Panel Installation"
                            className="w-full h-auto rounded shadow"
                        />

                        <motion.section
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                        >
                            <h2 className="text-2xl font-semibold mb-4">Our Projects & Milestones</h2>
                            <p>
                               At Divy Power, our mission is not just to install solar systems, but to create a lasting impact through sustainable energy solutions. With over a decade of experience, we've partnered with the government to deliver innovative and eco-friendly energy solutions that change lives and reduce environmental footprints.
                            </p>
                            <p className="mt-4">
                                One of our standout achievements is the Net-Zero Village project in Kumheera, where we transformed an entire community by providing them with clean, renewable solar energy. This groundbreaking project boasts an installed capacity of over 7,220 kW, reducing more than 158 million kg of CO₂ emissions. The solar power generated has also led to a remarkable 158 million+ units of energy produced annually, saving the community over ₹12.6 crore in electricity costs each year. This project is a shining example of how solar power can benefit both the environment and the economy, creating sustainable and self-sufficient communities.
                            </p>
                        </motion.section>

                        <motion.img
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            src={Pro3}
                            alt="Solar Panels Field"
                            className="w-full h-auto rounded shadow"
                        />

                        <motion.section
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                        >
                            <p>
                               Looking ahead, we are focused on expanding our reach by introducing smarter grid solutions that ensure more efficient energy distribution and creating more solar-powered zones across regions. We are also passionate about spreading solar awareness through specialized training modules, especially in Tier-2 and Tier-3 cities, helping more communities understand and benefit from solar technology.
                            </p>
                            <p className="mt-4">
                               At Divy Power, we are committed to more than just energy, we are creating a future where solar power fuels the progress of communities, businesses, and industries. With every project, we are not just providing electricity; we are empowering the future with clean, sustainable energy for generations to come.
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
                                    className="bg-white p-6 rounded shadow text-center"
                                >
                                    <div className="text-green-600 text-2xl font-bold">0{i + 1}</div>
                                    <div className="mt-2 font-semibold">{step}</div>
                                    <p className="text-sm text-gray-600 mt-1">
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
                                className="w-full p-2 border border-gray-300 rounded"
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
                                "Micro-Inverter",
                                "Earthing",
                                "LA",
                                "Gas-Genset",
                                "Diesel/Petrol Genset",
                            ].map((product, i) => (
                                <Link
                                    to={`/${product}`}
                                    key={i}
                                    className="block w-full px-4 py-2 rounded-lg text-green-700 hover:text-white hover:bg-green-600 transition-all duration-200 font-medium"
                                >
                                    {product.replace("-", " ")} &rarr;
                                </Link>
                            ))}
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="bg-white p-6 rounded shadow text-center"
                        >
                            <img src={Pro2} />
                            <p className="text-xl font-semibold">+91 9310259325</p>
                            <p className="text-sm text-gray-600">Mon–Sat 10:00 am–6:00 pm</p>
                            <p className="text-sm text-gray-600">24/7 Service Available</p>
                            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded">
                                <a href="tel:+919310259325">
                                    Call us Now
                                </a>
                            </button>
                        </motion.div>

                        <motion.div className="bg-white p-6 rounded shadow text-sm space-y-3">
                            <div className="flex items-start gap-2">
                                <span className="font-bold text-gray-700 w-20">Email:</span>
                                <a href="mailto:info@example.com" className="text-green-700 hover:underline">
                                    info@divypower.com
                                </a>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="font-bold text-gray-700 w-20">Phone:</span>
                                <a href="tel:+919310259325" className="text-green-700 hover:underline">
                                    +91 9310259325
                                </a>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="font-bold text-gray-700 w-20">Address:</span>
                                <span>53,Ramte Ram Rd,Ghaziabad,
Uttar Pradesh 201001</span>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="font-bold text-gray-700 w-20">Hours:</span>
                                <span>Mon–Sat: 10:00 am - 6:00 pm<br /></span>
                            </div>
                        </motion.div>

                    </aside>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProjectDetails
