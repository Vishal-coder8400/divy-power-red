import React from "react";
import didiImg from "../Images/didi.png";

const BreakTheMyth = () => {
  return (
    <div className="bg-[#f8f7f0] w-full px-4 sm:px-6 md:px-12  md:-mt-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Section - Text */}
        <div className="text-center lg:text-left max-w-xl sm:-mt-0 -mt-6">
          <p className="text-green-600 font-semibold tracking-widest text-sm sm:text-base uppercase mb-2">
            BREAK THE MYTH
          </p>
          <h1 className="text-black text-2xl sm:text-3xl font-sans font-semibold leading-snug">
            Solar Se Bachat Hoti Hai, Kharcha Nahi
          </h1>
        </div>

        {/* Right Section - Button then Image */}
        <div className="flex flex-row items-center md:pt-28  lg:items-end gap-4">
          <button
            type="button"
            className="bg-[#4aab3d] text-white text-base GetfontHomeDash rounded-lg px-8 py-3"
          >
            Lagwane ke paise kahan se laayein?
          </button>

          <img
            src={didiImg}
            alt="Roshni Didi"
            className="w-[120px] h-[140px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default BreakTheMyth;
