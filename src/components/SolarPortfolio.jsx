import { motion, AnimatePresence } from "framer-motion";
import { categories, projects, iconMap } from "./ProjectData";
import { useState } from "react";

const SolarPortfolio = () => {
  const [active, setActive] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  const visibleProjects = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  const handleFilterChange = (cat) => {
    setActive(cat);
    setVisibleCount(3);
  };

  return (
    <section
      className="
        px-4 py-16 
        md:px-12 lg:px-20 xl:px-32 2xl:px-52 
        bg-gradient-to-br from-[#F7FAFF] to-[#EEF3F9]
        rounded-t-[40px]
        shadow-inner
      "
    >

      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#090971] mb-4">
        Our Solar <span className="text-[#739131]">Projects</span>
      </h2>
      <p className="text-center text-gray-600 mb-12 text-sm md:text-base">
        Explore the projects we delivered with trust, quality & excellence.
      </p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilterChange(cat)}
            className={`
              flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 
              border backdrop-blur-sm shadow-sm
              ${
                active === cat
                  ? "bg-[#739131] text-white border-green-800 shadow-md scale-105"
                  : "bg-white text-gray-700 hover:bg-green-50 hover:border-green-300"
              }
            `}
          >
            <span className="text-sm font-semibold">{cat}</span>
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              className="
                relative overflow-hidden rounded-3xl 
                bg-white shadow-lg border border-gray-100
                hover:shadow-2xl hover:-translate-y-2
                transition-all duration-300
              "
            >

              {/* Image */}
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-52 object-cover 
                    transition-transform duration-500 
                    hover:scale-110
                  "
                />
              </div>

              {/* Card Info */}
              <div className="p-6">

                {/* Category & Icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className="text-green-700 text-xl">
                    {iconMap[project.category]}
                  </div>

                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#090971] mb-2 leading-snug">
                  {project.title}
                </h3>

                {project.kwp !== "N/A" && (
                  <p className="text-sm text-[#C4302C]">{project.kwp} KWp</p>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* See More */}
      {hasMore && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="
              px-7 py-3 rounded-full text-white text-sm font-semibold 
              bg-[#739131] hover:bg-[#739131] shadow-md 
              transition-transform duration-300 hover:scale-105
            "
          >
            Load More Projects
          </button>
        </div>
      )}
    </section>
  );
};

export default SolarPortfolio;
