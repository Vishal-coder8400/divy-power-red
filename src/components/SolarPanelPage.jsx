import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Lap from '../Images/PHOTO-2025-08-18-12-28-23.jpg'



const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

export default function SolarPanelPage() {
    const comingSoonData = [
        {
            title: "Agri PV",
            description: "Coming Soon",
            content: `
Agri-Voltaic (Agri-PV) systems integrate solar energy generation with traditional agriculture, allowing dual use of the same land area. This innovative model enables farmers to continue cultivating crops while solar panels above produce clean, renewable energy. Agri-Voltaics enhances land-use efficiency, improves crop resilience, and promotes sustainable energy production—all without compromising food security.`
        },
        {
            title: "Open Axis",
            description: "Coming Soon",
            content: `
India’s renewable energy landscape is rapidly evolving, and one of the most powerful tools accelerating this transition is Open Access (OA). Open Access in the electricity sector empowers consumers to purchase electricity directly from power generators, bypassing local distribution companies (Discoms). This system offers substantial benefits to industries, commercial establishments, and even large residential communities. Here is a comprehensive guide on Open Access—its definition, rules, state-wise policies, benefits, and implications.`
        },
        {
            title: "Carbon Credit Mechanism",
            description: "Coming Soon",
            content: ` 
The Carbon Credit Mechanism provides financial incentives for reducing greenhouse gas emissions. By switching to renewable energy like solar, businesses can earn tradable carbon credits, which create additional revenue while advancing their sustainability goals. This approach not only offsets unavoidable emissions but also strengthens global efforts against climate change. It’s a win-win for the environment and for organizations seeking to make a lasting impact.`
        },
        {
            title: "Ground Mount/Utility Scale Service",
            description: "Coming Soon",
            content: `  
Ground Mount or Utility Scale solar systems are large-scale installations set up on open land to generate significant amounts of renewable energy. These solar farms are designed for maximum efficiency, often serving industries, utilities, and government projects. By supplying clean power to thousands of homes and businesses, they reduce reliance on fossil fuels while ensuring energy security. With their scalability and cost-effectiveness, they are a cornerstone of achieving future renewable energy targets.`
        }
    ];

    return (
        <>
            <div className="bg-gray-50 text-gray-800 font-sans py-20">
                {/* Header */}
                <motion.header
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="text-center py-10"
                >
                    <h1 className="text-4xl font-bold">Solar Solutions</h1>
                </motion.header>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-16">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-6">
                        {/* Main Image */}
                        <motion.img
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            src="https://divyby.redspace.in/assets/images/updated-images/img%203.png"
                            alt="Solar Panel Installation"
                            className="w-full h-auto rounded shadow"
                        />

                        {/* Intro Text */}
                        <motion.section initial="hidden" animate="visible" variants={fadeUp}>
                            <h2 className="text-2xl font-semibold mb-4">Solar Panel</h2>
                            <p className="text-gray-500">
                                Our solar panels are meticulously engineered to maximize energy conversion, utilizing cutting-edge photovoltaic technology to capture and transform sunlight into electricity with exceptional efficiency. By integrating advanced materials and innovative designs, we ensure each panel operates at peak performance, delivering reliable power while minimizing environmental impact.
                            </p>
                            <p className="mt-4 text-gray-500">
                                Whether you're looking to power a home, a business, or a large-scale industrial operation, our solar solutions are tailored to meet diverse energy needs. Residential users benefit from lower electricity bills and sustainable living, while commercial establishments and industries gain cost-effective alternatives to traditional power sources, reducing dependency on non-renewable energy.
                            </p>
                        </motion.section>

                        {/* Side Image + Paragraph */}
                        <div className="flex items-start gap-6">
                            <motion.img
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp}
                                src={Lap}
                                alt="Solar Panels Field"
                                className="w-[380px] h-[270px] rounded shadow"
                            />
                            <motion.section initial="hidden" animate="visible" variants={fadeUp}>
                                <p className=" text-gray-500">
                                    Longevity and durability are at the core of our solar panel offerings. Built to withstand harsh weather conditions and maintain consistent output over years of use, our panels provide a dependable energy solution. Their robust construction and high-quality components ensure minimal degradation, offering long-lasting power generation with minimal maintenance.
                                </p>
                            </motion.section>
                        </div>

                        <p className="mt-4 text-gray-500">
                            Beyond financial savings, adopting solar energy contributes significantly to environmental preservation. By reducing carbon emissions and reliance on fossil fuels, our panels help create a cleaner, greener future. Investing in solar is not just a smart choice for energy efficiency—it’s a commitment to sustainability and responsible energy consumption.
                        </p>

                        {/* Steps */}
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

                        {/* Coming Soon: One Card → One Content */}
                        {/* Coming Soon: One Card → One Content */}
<motion.section
  initial="hidden"
  animate="visible"
  variants={fadeUp}
  className="mt-12 space-y-8"
>
  <h2 className="text-4xl font-bold text-green-800 mb-6 text-center">
    Coming Soon
  </h2>
  {comingSoonData.map((item, i) => (
    <div key={i} className="space-y-4">
      {/* Title & Short Description */}
      <motion.div
        custom={i}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        <h3 className="text-lg font-semibold text-gray-800">
          {item.title}
        </h3>
       
      </motion.div>

      {/* Long Content */}
      <motion.div
        custom={i}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
      </motion.div>
    </div>
  ))}
</motion.section>

                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="bg-white p-6 rounded shadow">
                            <input type="text" placeholder="Enter Keyword" className="w-full p-2 border border-gray-300 rounded" />
                        </motion.div>

                        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="bg-white p-6 rounded-2xl shadow-md space-y-4">
                            <h3 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-2">Our Products</h3>
                            {["Solar-Pump", "Micro-Inverter", "Earthing", "LA", "Diesel/Petrol Genset"].map((product, i) => (
                                <Link
                                    to={`/${product}`}
                                    key={i}
                                    className="block w-full px-4 py-2 rounded-lg text-green-700 hover:text-white hover:bg-green-600 transition-all duration-200 font-medium"
                                >
                                    {product.replace("-", " ")} &rarr;
                                </Link>
                            ))}
                        </motion.div>

                        <motion.div className="bg-white p-6 rounded shadow text-sm space-y-3">
                            <div className="flex items-start gap-2">
                                <span className="font-bold text-gray-700 w-20">Email:</span>
                                <a href="mailto:Info@divypower.com" className="text-green-700 hover:underline">Info@divypower.com</a>
                            </div>
                        </motion.div>
                    </aside>
                </div>
            </div>
            <Footer />
        </>
    );
}

