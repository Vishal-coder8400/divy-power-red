import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Lap from '../Images/PHOTO-2025-08-18-12-26-39.jpg'
import LA from '../Images/LA.jpg';



const La = () => {
    return (
        <>
            <div className="bg-gray-50 text-gray-800 font-sans py-20">
                <header className="text-center py-10">
                    <h1 className="text-4xl font-bold text-[#090971]">Safety <span className="text-[#739131]">Solutions</span></h1>
                </header>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-16">
                    <div className="md:col-span-2 space-y-6">
                        <img
                            src={LA}
                            alt="Solar Panel Installation"
                            className="w-full h-auto rounded shadow"
                        />

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-[#090971]">Lightning Arrestor  <span className="text-[#739131]">(LA)</span></h2>
                            <p className=' text-gray-500'>
                                Our lightning arrestors (LAs) provide essential protection against the destructive forces of lightning strikes, ensuring the safety and longevity of electrical systems and equipment. Designed to efficiently redirect lightning energy into the ground, our LAs serve as a critical defense mechanism, preventing severe damage caused by sudden electrical surges and voltage spikes.
                            </p>
                            <p className="mt-4 text-gray-500">
                                Lightning strikes can lead to power disruptions, equipment failure, and even fire hazards, making reliable protection indispensable for residential, commercial, and industrial setups. Our high-performance LAs act as a shield, minimizing the risks associated with unpredictable weather conditions and preserving the integrity of sensitive electronic devices. Their advanced technology ensures quick response and effective energy dispersion upon impact.
                            </p>
                        </section>

                        <img
                            src={Lap}
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
                                <div key={i} className="bg-[#090971] text-white p-6 rounded shadow text-center">
                                    <div className="text-white text-2xl font-bold">0{i + 1}</div>
                                    <div className="mt-2 font-semibold">{step}</div>
                                    <p className="text-sm text-white mt-1">
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
                                className="w-full p-2 border border-[#090971] rounded"
                            />
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
                            <h3 className="text-2xl font-bold text-[#090971] border-b pb-2 mb-2">Our <span className="text-[#739131]">Products</span></h3>
                            {[
                                "Solar-pannel",
                                "Solar-Pump",
                                "Micro-Inverter",
                                "Earthing",

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
                        </div>


                        <div className="bg-[#090971] text-white p-6 rounded shadow text-sm space-y-3">
                            <div className="flex items-start gap-2">
                                <span className="font-bold text-white w-20">Email:</span>
                                <a href="mailto:info@example.com" className="text-white hover:underline">
                                    Info@divypower.in
                                </a>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="font-bold text-white w-20">Phone:</span>
                                <a href="tel:+011234567890" className="text-white hover:underline">


                                    +91 9310259325
                                </a>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="font-bold text-white w-20">Address:</span>
                                <span>53, Ramte Ram Rd, Ekta Vihar, Arjun Nagar,
                                    Nai Basti Dundaher Ghaziabad,
                                    Uttar Pradesh 201001</span>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="font-bold text-white w-20">Hours:</span>
                                <span>Mon–Sat: 10:00 - 6:00<br /></span>
                            </div>
                        </div>

                    </aside>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default La


