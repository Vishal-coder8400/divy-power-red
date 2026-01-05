import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "./Footer";


const services = [
    {
        label: "Engineering, Procurement, and Construction",
        path: "Engineering_Procurement_and_Construction_(EPC)",
        // icon: <FaTools className="text-green-700 text-3xl" />,
    },
    {
        label: "Operations & Maintenance",
        path: "Operations_&_Maintenance_(O&M)",
        // icon: <FaCogs className="text-green-700 text-3xl" />,
    },
    {
        label: "Annual Maintenance Contracts (AMC)",
        path: "Annual_Maintenance_Contracts(AMC)",
        // icon: <FaRecycle className="text-green-700 text-3xl" />,
    },
    {
        label: "Health Check ups",
        path: "Health_Check_ups",
        // icon: <FaSun className="text-green-700 text-3xl" />,
    },
];

const InstallationServiceAltLayout = () => {
    return (
        <div className="bg-gray-100 text-white min-h-screen GetfontHome mb-2 mt-0 lg:mt-20 md:mt-20 xl:mt-20 2xl:mt-20">


            {/* Services Grid */}
            <section className="max-w-7xl mx-auto px-6 pt-12 pb-2">
                <h2 className="text-3xl font-bold text-center text-black mb-10"> Our Services</h2>
                {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                </div> */}
            </section>

            {/* Main Content */}
            <main className="bg-white text-white rounded-xl shadow-lg max-w-4xl mx-auto p-8 mb-16">
                <motion.img
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    src="https://divyby.redspace.in/assets/images/updated-images/img%201%20service.png"
                    alt="Installation"
                    className="rounded-xl mb-6 w-full max-h-[400px] object-cover"
                />

                <h2 className="text-2xl font-bold text-blue-900 mb-4">Health Check ups</h2>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    At Divy Power, we manage the complete installation and commissioning of solar systems,
                    generators, and energy equipment. Our team ensures every part is installed and tested correctly,
                    so your system performs seamlessly from day one.
                </p>

                <ul className="list-disc pl-6 text-sm mb-4 text-gray-700 marker:text-blue-900">
                    <li>Creating a Balanced and Nutritious Setup</li>
                    <li>The Importance of System Hydration (Cooling & Maintenance)</li>
                    <li>Connection Between Clean Energy & Mental Peace</li>
                    <li>Getting Reliable Energy Without Interruptions</li>
                </ul>

                <p className="text-sm text-gray-700 mb-4">
                    We ensure high performance, safety, and long-term dependability through precise site evaluation,
                    custom system configuration, rigorous quality checks, and operational guidance.
                </p>

                <h3 className="text-lg font-semibold text-blue-900 ">Our Simple Four Steps</h3>
                <p className="text-sm text-gray-700">
                    Whether you're installing at home, at a factory, or a corporate site,
                    Divy Power ensures minimal downtime and maximum efficiency. We’re committed
                    to making sustainable energy easy, accessible, and reliable.
                </p>
            </main>
              <section className="max-w-7xl mx-auto px-6 pb-12">
                {/* <h2 className="text-3xl font-bold text-center text-white mb-10">🔧 Our Services</h2> */}
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
};

export default InstallationServiceAltLayout;

