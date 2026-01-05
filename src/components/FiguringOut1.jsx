import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reelsData = [
  {
    youtubeId: "ScMzIvxBSi4",
    username: "Riddhi Agarwal",
    caption: "Go Solar, Save Environment",
  },
  {
    youtubeId: "VIDEO_ID_2",
    username: "Kaushlesh Sharma",
    caption: "Source of Renewable Energy",
  },
  {
    youtubeId: "VIDEO_ID_3",
    username: "Divy Power Team",
    caption: "Save Environment With Solar",
  },
  {
    youtubeId: "VIDEO_ID_4",
    username: "Shivam Singh",
    caption: "Go Solar, Save Environment",
  },
  {
    youtubeId: "VIDEO_ID_5",
    username: "Ateesh Kumar",
    caption: "Breaking The Myth About Solar",
  },
];

const FiguringOut1 = () => {
  const scrollRef = useRef(null);
  const playersRef = useRef({});

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = () => {
      reelsData.forEach((item, index) => {
        playersRef.current[index] = new window.YT.Player(`yt-player-${index}`, {
          videoId: item.youtubeId,
          playerVars: {
            autoplay: 0,
            controls: 1,
            mute: 1,
            rel: 0,
            playsinline: 1,
            modestbranding: 1,
          },
        });
      });
    };
  }, []);

  const scrollBy = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto relative">

        <h2 className="text-center text-3xl py-5 font-bold text-[#090971]">
          Breaking the Myth, Switch to <span className="text-[#739131]">Solar</span>
        </h2>


        <button
          onClick={() => scrollBy("left")}
          className="hidden sm:flex absolute top-1/2 -left-8 -translate-y-1/2 bg-[#739131] text-white shadow-lg p-3 rounded-full hover:bg-[#739131] hover:text-white transition z-10"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={() => scrollBy("right")}
          className="hidden sm:flex absolute top-1/2 -right-8 -translate-y-1/2 bg-[#739131] text-white shadow-lg p-3 rounded-full hover:bg-[#739131] hover:text-white transition z-10"
        >
          <ChevronRight />
        </button>

        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide py-4 scroll-smooth"
        >
          {reelsData.map((reel, index) => (
            <div
              key={index}
              className="
                flex-shrink-0 
                w-[70vw] sm:w-[45vw] md:w-[260px]
                bg-white rounded-xl shadow-lg overflow-hidden 
                hover:shadow-2xl transition-all
              "
              onMouseEnter={() => {
                const player = playersRef.current[index];
                if (player?.playVideo) player.playVideo();
              }}
              onMouseLeave={() => {
                const player = playersRef.current[index];
                if (player?.pauseVideo) player.pauseVideo();
              }}
            >
              <div className="relative w-full aspect-[9/16] bg-black">
                <div
                  id={`yt-player-${index}`}
                  className="absolute top-0 left-0 w-full h-full"
                ></div>
              </div>

              <p className="px-3 pt-2 text-[#C4302C] text-sm font-bold">
                {reel.username}
              </p>

              <p className="px-3 pb-3 text-gray-700 text-xs font-semibold">
                Topic: {reel.caption}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {reelsData.map((_, index) => (
            <span
              key={index}
              className="w-2 h-2 bg-orange-500 rounded-full"
            ></span>
          ))}
        </div>

      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default FiguringOut1;
