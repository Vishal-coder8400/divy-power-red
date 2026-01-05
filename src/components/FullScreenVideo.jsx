import React from "react";
import SL from '../Images/SL.JPG'

const FullScreenVideo = ({ mode = "cover" }) => {
  return (
    <div className="w-full h-[260px] md:h-screen xl:h-screen 2xl:h-screen lg:h-screen relative overflow-hidden bg-black">
      <video
        className={`absolute top-0 left-0 w-full h-full 
          ${mode === "cover" ? "object-cover" : "object-contain"} 
          md:object-cover`}
        src="https://res.cloudinary.com/du6297ykk/video/upload/f_auto,q_auto/w_1920/v1755777863/Dji_0029_4_pa58sv.webm"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster={SL}
      />
    </div>
  );
};

export default FullScreenVideo;

