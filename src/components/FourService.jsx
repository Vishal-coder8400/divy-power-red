import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './Footer';
const services = [
    {
        label: "Installation & Commissioning",
        path: "Installation_&_Commissioning_(INC)",
        // icon: <FaTools className="text-green-700 text-3xl" />,
    },
    {
        label: "Engineering, Procurement, and Construction",
        path: "Engineering_Procurement_and_Construction_(EPC)",
        // icon: <FaTools className="text-green-700 text-3xl" />,
    },
     {
        label: "Annual Maintenance Contracts (AMC)",
        path: "Annual Maintenance Contracts (AMC)",
        // icon: <FaRecycle className="text-green-700 text-3xl" />,
    },
    {
        label: "Health Check ups",
        path: "Health Check ups",
        // icon: <FaSun className="text-green-700 text-3xl" />,
    },
];

const FourService = () => {
    return (
        <div className="bg-gray-100 text-white min-h-screen GetfontHome mb-2 mt-0 lg:mt-20 md:mt-20 xl:mt-20 2xl:mt-20">


            {/* Services Grid */}
            <section className="max-w-7xl mx-auto px-6 pt-12">
                <h2 className="text-3xl font-bold text-center text-black mb-10"> Our Services</h2>
              
            </section>

            {/* Main Content */}
            <main className="bg-white text-white rounded-xl shadow-lg max-w-4xl mx-auto p-8 mb-16">
                <motion.img
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    src="https://divyby.redspace.in/assets/images/updated-images/img%204%20service.png"
                    alt="Installation"
                    className="rounded-xl mb-6 w-full max-h-[400px] object-cover"
                />

                <h2 className="text-2xl font-bold text-blue-900 mb-4">Annual Maintenance Contracts (AMC)</h2>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    We provide adaptable Annual Maintenance Contract(AMC) packages tailored for solar systems, diesel generators, and a range of other equipment, ensuring uninterrupted performance and long - term reliability.Our proactive approach focuses on preserving efficiency while minimizing operational disruptions, allowing you to enjoy a hassle - free power solution.
                </p>

                <ul className="list-disc pl-6 text-sm mb-4 text-gray-700 marker:text-blue-900">
                    <li>Concise & Professiona</li>
                    <li> Customer-Centric & Reassuring</li>
                    <li>  Technical & Detail-Oriented</li>
                    <li>Marketing & Engaging</li>
                </ul>

                <p className="text-sm text-gray-700 mb-4">
                    With regular check-ups and preventive maintenance, we detect potential issues before they escalate, keeping your systems in peak condition. Our skilled technicians conduct detailed inspections, replacing worn-out components and fine-tuning performance to prevent unnecessary breakdowns.
                </p>

                <h3 className="text-lg font-semibold text-blue-900 ">Our Simple Four Steps</h3>
                <p className="text-sm text-gray-700">
                    In case of unexpected failures, we prioritize swift issue resolution through rapid troubleshooting and expert intervention. From minor adjustments to major repairs, we handle it all with professionalism—so you never have to worry about downtime affecting your operations
                </p>
            </main>
              <section className="max-w-7xl mx-auto px-6 pb-12">
                
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
                        >
                            {service.icon}
                            <h3 className="font-semibold text-lg mt-4 mb-2 text-blue-900">{service.label}</h3>
                            <Link
                                to={`/${service.path}`}
                                className="mt-auto text-blue-900 font-medium hover:underline"
                            >
                                Explore →
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
            <section>
                <Footer/>
            </section>
        </div>
    );
}

export default FourService
