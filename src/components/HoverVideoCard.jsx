import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const reelsData = [
  { videoId: "y6120QOlsfU" },
  { videoId: "aqz-KE-bpKQ" },
  { videoId: "ScMzIvxBSi4" },
  { videoId: "hTWKbfoikeg" },
  { videoId: "M7FIvfx5J10" },
  { videoId: "CduA0TULnow" },
  { videoId: "fJ9rUzIMcZQ" },
  { videoId: "kXYiU_JCYtU" }
];

const HoverVideoCard = () => {
  const containerRef = useRef(null);
  const iframeRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollInterval = useRef(null);

  const getYouTubeURL = (id) =>
    `https://www.youtube.com/embed/${id}?enablejsapi=1&mute=1&controls=0&rel=0&playsinline=1&modestbranding=1`;

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    if (!container) return;

    const card = container.children[index];
    if (card) {
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const startAutoScroll = () => {
    stopAutoScroll();
    scrollInterval.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % reelsData.length;
        scrollToIndex(next);
        return next;
      });
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (scrollInterval.current) clearInterval(scrollInterval.current);
  };

  const playVideo = (index) => {
    const iframe = iframeRefs.current[index];
    if (!iframe) return;
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: "playVideo" }),
      "*"
    );
  };

  const pauseVideo = (index) => {
    const iframe = iframeRefs.current[index];
    if (!iframe) return;
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: "pauseVideo" }),
      "*"
    );
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  return (
    <section className="relative w-full px-4 py-0 bg-gradient-to-b from-[#f6faff] to-[#ffffff]">
      <h2 className="text-center text-3xl font-extrabold text-[#090971] mb-3">
        Stories Of Change We're  <span className="text-[#739131]">Proud Of</span>
      </h2>
      <p className="text-center text-lg text-gray-700 mb-10">
        Our client belived in us and so can you,See how solar changed their lives.
      </p>

      {/* Reels Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory gap-6 px-2 hide-scrollbar"
        style={{ scrollBehavior: "smooth" }}
      >
        {reelsData.map((reel, index) => (
          <motion.div
            key={index}
            className="
              snap-start flex-shrink-0 
              w-[70vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] xl:w-[18vw]
              max-w-[260px] 
              h-[420px] 
              rounded-3xl bg-black overflow-hidden shadow-lg border border-gray-200 
              hover:shadow-2xl transition-all duration-300
            "
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onMouseEnter={() => {
              stopAutoScroll();
              playVideo(index);
            }}
            onMouseLeave={() => {
              pauseVideo(index);
              startAutoScroll();
            }}
          >
            <iframe
              ref={(el) => (iframeRefs.current[index] = el)}
              src={getYouTubeURL(reel.videoId)}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
            ></iframe>
          </motion.div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {reelsData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-[#C4302C] scale-125" : "bg-gray-300"
            }`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>

  <p className="mt-10 text-[#739131] text-lg font-semibold text-center whitespace-normal md:whitespace-nowrap">
  Aap kis cheez ka intezaar kar rahe hain? Aaj hi contact karein Divy Power ko — Trust bhi, Bachat bhi!
</p>


      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default HoverVideoCard;
