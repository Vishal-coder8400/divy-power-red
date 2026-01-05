import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  { name: "Ateesh Kumar", role: "TATA Solar Partner", youtubeId: "VIDEO_ID_1" },
  { name: "Shivam Singh", role: "Solar Consultant", youtubeId: "VIDEO_ID_2" },
  { name: "Kaushlesh Sharma", role: "Solar Analyst", youtubeId: "VIDEO_ID_3" },
  { name: "Asha Gupta", role: "Warranty Expert", youtubeId: "VIDEO_ID_4" },
  { name: "Rajeev Arora", role: "Quality Head", youtubeId: "VIDEO_ID_5" },
];

// Duplicate data for infinite loop
const infiniteData = [...teamMembers, ...teamMembers, ...teamMembers];

const HoverVideoCard1 = () => {
  const scrollRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(260); // Adjust card width

  // Scroll by one card
  const scrollBy = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  // Infinite Loop Effect
  const handleInfiniteScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    // When reaching end → teleport to middle copy
    if (container.scrollLeft >= maxScrollLeft - cardWidth) {
      container.scrollLeft = container.scrollWidth / 3 - container.clientWidth;
    }

    // When reaching start → teleport to middle copy
    if (container.scrollLeft <= cardWidth) {
      container.scrollLeft = container.scrollWidth / 3;
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Start in the middle copy
    container.scrollLeft = container.scrollWidth / 3;

    container.addEventListener("scroll", handleInfiniteScroll);
    return () => container.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-center text-2xl lg:text-[30px] font-bold text-[#090971] mb-10 About1">
          Choose DIVY as your <span className="text-[#739131]">Solar Partner</span>
        </h2>

        {/* Left Arrow */}
        <button
          onClick={() => scrollBy("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#739131] text-white shadow-xl p-3 rounded-full z-20 border hover:bg-green-600 hover:text-white transition"
        >
          <ChevronLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scrollBy("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#739131] text-white shadow-xl p-3 rounded-full z-20 border hover:bg-green-600 hover:text-white transition"
        >
          <ChevronRight />
        </button>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth py-6 px-2"
          style={{ scrollbarWidth: "none" }}
        >
          <style>{`::-webkit-scrollbar { display: none; }`}</style>

          {infiniteData.map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[260px] bg-white rounded-3xl shadow-lg border 
              hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* YouTube Short */}
              <div className="relative w-full aspect-[9/16] overflow-hidden">
                <iframe
                  className="w-full h-full rounded-t-3xl"
                  src={`https://www.youtube.com/embed/${member.youtubeId}?enablejsapi=1&playsinline=1&modestbranding=1&controls=0&mute=1`}
                  allow="autoplay; encrypted-media"
                ></iframe>
              </div>

              {/* Info */}
              <div className="px-4 py-3 bg-white">
                <p className="font-semibold text-[#C4302C] text-sm">
                  {member.name}
                </p>
                <p className="text-xs text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverVideoCard1;
