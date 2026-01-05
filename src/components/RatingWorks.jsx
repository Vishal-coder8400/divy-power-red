import React, { useRef } from "react";

const testimonials = [
  {
    feedback: "Excellent service with homely touch…! All the best..!!",
    name: "GOOD YEAR",
    role: "1 MWP",
  },
  {
    feedback:
      "Fully Dependable. Well Planned, Secure Execution, Trusted and Commanded. Best Managed - Fully Responsive – we got remitted the Subsidy at early time. Good Partner – Heartily Wishes-",
    name: "HINDU Education Society – Sonipat – Haryana",
    role: "800 KWp",
  },
  {
    feedback:
      "Out standing service Support with instant decision is Edge of them. They know the Art to satisfied the every concern in corporate.",
    name: "BKT",
    role: "1000 KWp",
  },
  {
    feedback:
      "Technical patienceful EPC. Supply and installations. This ‘T’&’D’ combination works with full determination even though during hardship.",
    name: "Skylark Group",
    role: "1450 KWp - 9 Locations",
  },
  {
    feedback:
      "Recommendable supplier..!! Our Experience for – 450 KW solar - 5 locations.",
    name: "Bal Bharati Group of Education",
    role: "450 KW",
  },
  {
    feedback:
      "Technical and Supportive installation – we are getting maximum generation in our area.",
    name: "O.S Cool Home – Kundali – Haryana",
    role: "100 KWp",
  },
  {
    feedback:
      "CARE with advisable capabilities. Humbled! With modern tools and solutions",
    name: "Orient Syntax – Bhiwadi – Rajasthan",
    role: "1000 KWp",
  },
  {
    feedback:
      "Technical Expert Team, Timely Execution with full synchronised support with Govt’ dept.",
    name: "Hargobind COLD – Markanda – Haryana",
    role: "150 KW",
  },
  {
    feedback:
      "Very well Connected at every step – with Strong Tech. capabilities. Our MD is very impressed.",
    name: "R.K. Rayon",
    role: "100 KWp – Roof Top",
  },
];

const RatingWorks = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="GetFontSol relative bg-[#090971] rounded-[40px_0_40px_0] max-w-[1200px] mx-auto mt-10 px-6 py-12 md:py-16 md:px-12 overflow-hidden text-white">

      {/* Heading */}
      <div className="relative z-10 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide">
          Solar Ratings
        </h2>
        <p className="mt-2 text-base md:text-lg font-medium">
          What Our Satisfied Customers Say About Us
        </p>
      </div>

      {/* Testimonials */}
      <div
        ref={scrollRef}
        className="relative z-10 flex gap-6 overflow-x-auto pb-6 md:pb-8 snap-x snap-mandatory scrollbar-hide"
      >
        {testimonials.map((item, index) => (
          <article
            key={index}
            className="bg-white text-gray-800 rounded-tl-[40px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[40px] flex-shrink-0 p-8 shadow-lg relative 
              w-[85%] sm:w-[70%] md:w-[45%] lg:w-[30%] snap-center"
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 left-6 text-[#5bc1c9]">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.17 6.17a4 4 0 0 1 0 5.66L5.76 13.24l-1.41-1.41 1.41-1.41a2 2 0 0 0 0-2.83 2 2 0 0 0-2.83 0L1 8.83 2.41 10.24l1.41-1.41a4 4 0 0 1 5.66 0z" />
              </svg>
            </div>

            <p className="text-sm leading-relaxed text-gray-600 italic mb-6">
              "{item.feedback}"
            </p>

            <footer className="mt-6">
              <p className="font-semibold text-gray-900">{item.name}</p>
              <p className="text-[#C4302C] text-sm">{item.role}</p>
            </footer>
          </article>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-8 right-8 flex space-x-3 z-20">
        <button
          onClick={() => scroll("left")}
          className="w-10 h-10 rounded-md bg-[#739131] flex items-center justify-center"
        >
          ‹
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-10 h-10 rounded-md bg-[#739131] flex items-center justify-center"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default RatingWorks;
