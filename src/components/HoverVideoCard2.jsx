import React, { useRef } from "react";

const reelsData = [
  { role: "Employees Are Our Partners", reel: "https://youtube.com/shorts/xxxx" },
  { role: "25 Years into Energy", reel: "https://youtube.com/shorts/yyyy" },
  { role: "Company is a Group Company", reel: "https://youtube.com/shorts/zzzz" },
  { role: "I Am A Worker Not Owner", reel: "https://youtube.com/shorts/aaaa" },
  { role: "Mission & Vision", reel: "https://youtube.com/shorts/bbbb" },
  { role: "We Believe in Solution", reel: "https://youtube.com/shorts/cccc" },
];

const getEmbedURL = (url) => {
  const match = url.match(/shorts\/([A-Za-z0-9_-]+)/);
  const id = match ? match[1] : null;
  if (!id) return "";
  return `https://www.youtube.com/embed/${id}?mute=1&controls=0&loop=1&playlist=${id}`;
};

const ReelScroller = () => {
  const iframes = useRef([]);

  const handleHover = (index, play) => {
    if (window.innerWidth < 768) return;

    const iframe = iframes.current[index];
    if (!iframe) return;

    iframe.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: play ? "playVideo" : "pauseVideo" }),
      "*"
    );
  };

  return (
    <section className="bg-white py-10 px-4 md:px-10">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#090971] mb-8">
        Our Founder <span className="text-[#739131]">Philosophy</span>
      </h2>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 w-max px-2">

          {reelsData.map((item, index) => (
            <div
              key={index}
              className="
                bg-white rounded-xl overflow-hidden
                shadow-md hover:shadow-xl transition-all duration-300
                flex-shrink-0 cursor-pointer
                w-[46vw] sm:w-[42vw] md:w-[260px] lg:w-[240px]
              "
              onMouseEnter={() => handleHover(index, true)}
              onMouseLeave={() => handleHover(index, false)}
            >
              <div className="relative aspect-[9/16] bg-black">
                <iframe
                  ref={(el) => (iframes.current[index] = el)}
                  src={getEmbedURL(item.reel)}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; encrypted-media"
                ></iframe>
              </div>

              <p className="text-center text-sm font-semibold text-[#C4302C] py-3 px-2">
                {item.role}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ReelScroller;
