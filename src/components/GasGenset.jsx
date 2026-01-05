import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';

const GasGenset = () => {
    return (
        <>
            <div className="bg-gray-50 text-gray-800 font-sans py-20">
                <header className="text-center py-10">
                    <h1 className="text-4xl font-bold">Solar Solutions</h1>
                </header>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-16">
                    <div className="md:col-span-2 space-y-6">
                        <img
                            src="https://divyby.redspace.in/assets/images/updated-images/gas%201.jpg"
                            alt="Solar Panel Installation"
                            className="w-full h-auto rounded shadow"
                        />

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Gas Genset</h2>
                            <p className=' text-gray-500'>
                                Our gas-powered gensets provide a dependable and environmentally friendly solution for backup power needs, ensuring uninterrupted electricity during outages. Designed to run on natural gas or LPG, these generators offer a cleaner alternative to traditional diesel-powered systems, significantly reducing emissions and promoting sustainable energy consumption. Whether for homes, businesses, or industrial setups, they deliver reliable power while maintaining efficiency
                            </p>
                            <p className="mt-4 text-gray-500">
                                Efficiency is a key advantage of our gas gensets, as they provide stable and consistent energy output with optimized fuel consumption. Natural gas and LPG are readily available and cost-effective energy sources, making these gensets an economically viable option for those looking to lower operational expenses. Their ability to adapt to various applications ensures flexibility, whether for emergency backup, continuous power supply, or hybrid energy solutions.
                            </p>
                        </section>

                        <img
                            src="https://divyby.redspace.in/assets/images/updated-images/gas%202.jpg"
                            alt="Solar Panels Field"
                            className="w-full h-auto rounded shadow"
                        />

                        <section>

                            <p className=' text-gray-500'>
                                Built with durable materials and precision engineering, our lightning arrestors are crafted to withstand extreme environmental conditions while maintaining superior functionality. Whether installed on rooftops, power grids, or industrial facilities, they provide a robust safety net against nature’s volatile forces. With proper placement and installation, these devices enhance system reliability and reduce maintenance costs.
                            </p>
                            <p className="mt-4 text-gray-500">
                                At Divy Power, we prioritize safety and efficiency, delivering lightning protection solutions tailored to diverse energy needs. Our LAs not only safeguard infrastructure but also promote uninterrupted power flow, ensuring seamless operation even during storms. With our expertly designed lightning arrestors, you can trust that your electrical systems remain secure against one of nature’s most formidable threats.
                            </p>

                        </section>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                            {["STEP ONE", "STEP TWO", "STEP THREE"].map((step, i) => (
                                <div key={i} className="bg-white p-6 rounded shadow text-center">
                                    <div className="text-green-600 text-2xl font-bold">0{i + 1}</div>
                                    <div className="mt-2 font-semibold">{step}</div>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Tactical services through market web services
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <aside className="space-y-8">
                        <div className="bg-white p-6 rounded shadow">
                            <input
                                type="text"
                                placeholder="Enter Keyword"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
                            <h3 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-2">Our Products</h3>
                            {[
                                "Solar-pannel",
                                "Solar-Pump",
                                "Micro-Inverter",
                                "Earthing",
                                "LA",
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
                        </div>

                        <div className="bg-white p-6 rounded shadow text-center">
                            <img src="https://divyby.redspace.in/assets-2/images/cta/03.jpg" />
                            <p className="text-xl font-semibold">(986)-2549.215</p>
                            <p className="text-sm text-gray-600">Mon–Fri 7:00 am–9:00 pm</p>
                            <p className="text-sm text-gray-600">24/7 Service Available</p>
                            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded">Call us Now</button>
                        </div>

                        <div className="bg-white p-6 rounded shadow text-sm space-y-3">
                            <div className="flex items-start gap-2">
                                <span className="font-bold text-gray-700 w-20">Email:</span>
                                <a href="mailto:info@example.com" className="text-green-700 hover:underline">
                                    info@example.com
                                </a>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="font-bold text-gray-700 w-20">Phone:</span>
                                <a href="tel:+011234567890" className="text-green-700 hover:underline">
                                    (+01) 123 456 7890
                                </a>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="font-bold text-gray-700 w-20">Address:</span>
                                <span>1212 Paint Valley Road, East USA</span>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="font-bold text-gray-700 w-20">Hours:</span>
                                <span>Mon–Sat: 8:00 - 18:00<br />Sunday: CLOSED</span>
                            </div>
                        </div>

                    </aside>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default GasGenset