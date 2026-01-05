import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Diesel = () => {
    return (
        <>
            <div className="bg-gray-50 text-gray-800 font-sans py-0">
                <header className="text-center py-10">
                    <h1 className="text-4xl font-bold text-[#090971]">Genset <span className="text-[#739131]">Solutions</span></h1>
                </header>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-16">
                    <div className="md:col-span-2 space-y-6">
                        <img
                            src="https://divyby.redspace.in/assets/images/updated-images/genset%201.jpg"
                            alt="Solar Panel Installation"
                            className="w-full h-auto rounded shadow"
                        />

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-[#090971]">Diesel/Petrol <span className="text-[#739131]">Genset</span></h2>
                            <p className=' text-gray-500'>
                                Our diesel and petrol gensets provide robust and high-performance power solutions for critical situations, ensuring uninterrupted electricity supply when it matters most. Designed to withstand challenging conditions, these gensets are ideal for homes, businesses, and remote locations that require dependable backup power. With advanced engineering and superior fuel efficiency, they deliver reliable energy with minimal operational costs.
                            </p>
                            <p className="mt-4 text-gray-500">
                                Built for long-lasting durability, our gensets feature high-quality components that enhance their lifespan and performance. Their sturdy construction ensures consistent functionality, even in demanding environments where power stability is crucial. Whether facing extreme weather, remote operations, or emergency outages, our generators offer peace of mind by delivering power when needed.
                            </p>
                        </section>

                        <img
                            src="https://divyby.redspace.in/assets/images/updated-images/genset%202.jpg"
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
                                "LA",
                               
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

                       

                        
                    </aside>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Diesel

