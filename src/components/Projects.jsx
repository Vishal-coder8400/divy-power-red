import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, projects, iconMap } from "./ProjectData";
import Gallery from "./Gallery";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import BlackWhiteGallery from "./BlackWhiteGallery";
import InfiniteTiltSlider from "./InfiniteTiltSlider";
const SVGAccent = () => (
  <svg
    className="absolute top-2 right-2 w-16 h-16 text-gray-100 opacity-20"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2" />
  </svg>
);

const Projects = () => {
  const [active, setActive] = useState("All");
  const navigate = useNavigate();

  // Split projects
  const exhibitionProjects = projects.filter(p => p.category === "Exhibitions and stalls");
  const filtered = active === "All"
    ? projects.filter(p => p.category !== "Exhibitions and stalls")
    : projects.filter(p => p.category === active);

  const handleClick = () => {
    navigate("/ProjectDetails");
  };

  return (
    <>
      {/* Projects Listing */}
  <section className="min-h-screen px-4 pt-6 pb-10 bg-gradient-to-br from-white to-gray-100 shadow-lg GetFontSol md:px-12 lg:px-20 xl:px-32 2xl:px-52">
  <h1 className="text-5xl font-bold text-center mt-6 text-green-800 mb-10">
    <span className="text-[#090971]">Our </span> <span className="text-[#739131]">Projects</span>
  </h1>

  {/* Filter Buttons */}
  <div className="flex flex-wrap justify-center gap-4 mb-10">
    {categories.map(cat => (
      <button
        key={cat}
        onClick={() => setActive(cat)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border transition duration-300 
          ${active === cat ? "bg-[#739131] text-white" : "bg-gray-100 hover:bg-blue-100 text-gray-700"}`}
      >
        <span className="text-sm font-medium">{cat}</span>
      </button>
    ))}
  </div>

  {/* Main Projects Grid */}
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
    <AnimatePresence>
      {filtered.map(project => (
        <motion.div
          key={project.id}
          layout
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-2xl shadow-md border bg-white p-6 hover:shadow-xl"
        >
          <SVGAccent />
          <img
            src={project.image}
            alt={project.title}
            className="rounded-xl mb-4 w-full h-48 object-cover"
          />
          <div className="flex items-center justify-between mb-3">
            <div className="text-[#C4302C]">{iconMap[project.category]}</div>
            <span className="text-xs  text-[#C4302C] px-2 py-1 rounded-full">
              {project.category}
            </span>
          </div>
          <h2 className="text-lg font-semibold text-[#090971] mb-2">
            {project.title}
          </h2>
        </motion.div>
      ))}
    </AnimatePresence>
  </div>
</section>


     <section className="max-w-7xl mx-auto px-6 pt-12 md:pt-16 pb-16 GetFontSol">
  <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
    Exhibitions and Stalls
  </h2>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
    <AnimatePresence>
      {exhibitionProjects.map(project => (
        <motion.div
          key={project.id}
          layout
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-2xl shadow-md border bg-white p-6 hover:shadow-xl"
        >
          <SVGAccent />

          <img
            src={project.image}
            alt={project.title}
            className="rounded-xl mb-4 w-full h-48 object-cover"
          />

          <div className="flex items-center justify-between mb-3">
            <div className="text-blue-500">{iconMap["All"]}</div>
            <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
              {project.category}
            </span>
          </div>

          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            {project.title}
          </h2>
        </motion.div>
      ))}
    </AnimatePresence>
  </div>
</section>


      {/* Why Choose Us */}
     <section className="max-w-7xl mx-auto px-6 pt-8 md:pt-10 pb-16 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 GetFontSol md:px-12 lg:px-20 xl:px-32">

        <motion.div
          className="flex-shrink-0 w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://storage.googleapis.com/a1aa/image/6d520b5b-2774-4936-d690-f58274af3ff3.jpg"
            alt="Eco Solar Advantage"
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-2">
            <span className="w-6 h-[2px] bg-blue-500 rounded" />
            <span className="text-green-800 text-md font-semibold uppercase tracking-widest">
              Why Choose Us
            </span>
          </div>
          <h1 className="font-montserrat font-semibold text-4xl leading-tight text-gray-900 mb-4">
            We Provide Eco Solar<br />
            Advantage Services<br />
          </h1>
          <p className="text-gray-500 text-sm max-w-md mb-8 leading-relaxed">
            Feasibility Assessments: Conducting comprehensive studies to evaluate
            the viability of hydropower projects based on water resources, terrain,
            and environmental factors.
          </p>
          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.03 }}
            onClick={handleClick}
            className="bg-green-800 text-white text-sm font-normal rounded-full px-8 py-3 w-max hover:bg-green-700 transition"
          >
            View Details
          </motion.button>
        </motion.div>
      </section>

      {/* Exhibitions and Stalls Section */}
    

      {/* Gallery */}
    <section className="max-w-7xl mx-auto px-6 py-12 text-center bg-gray-50 rounded-xl shadow-sm mt-6 mb-10">
        <Gallery />
      </section>
       <section className="mt-6">
        <InfiniteTiltSlider/>
      </section>
      {/* <section>
        <BlackWhiteGallery/>
      </section> */}

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Projects;
