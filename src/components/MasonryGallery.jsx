import React from "react";

import T1 from "../Images/T1.JPG";
import T2 from "../Images/T2.jpg";
import T3 from "../Images/T3.JPG";
import T4 from "../Images/T4.JPG";
import T5 from "../Images/T5.JPG";
import T6 from "../Images/T6.JPG";
import T7 from "../Images/T7.jpg";
import T8 from "../Images/T8.JPG";
import T9 from "../Images/T9.jpg";
import T10 from "../Images/T10.JPG";
import T11 from "../Images/T11.JPG";
import T12 from "../Images/T12.JPG";
import T13 from "../Images/T13.JPG";
import T14 from "../Images/T14.jpg";
import T15 from "../Images/T15.jpg";
import T16 from "../Images/T16.JPG";
import T17 from "../Images/T17.JPG";
import T18 from "../Images/T18.JPG";

const solarImages = [
  T1, T2, T3, T4, T5, T6, T7, T8, T9,
  T10, T11, T12, T13, T14, T15, T16, T17, T18
];

const MasonryGallery = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#090971] mb-10">
          Solar <span className="">Gallery</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {solarImages.map((img, index) => (
            <div
              key={index}
              className="
                relative w-full aspect-square rounded-2xl overflow-hidden
                border-4 border-white shadow-md hover:shadow-xl transition-all duration-300
              "
            >
              {/* Blurred Background */}
              <img
                src={img}
                alt="bg"
                className="
                  absolute inset-0 w-full h-full object-cover blur-xl
                  scale-110 opacity-60 brightness-110
                "
              />

              {/* Light overlay */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

              {/* Main Image */}
              <img
                src={img}
                alt={`Solar Panel ${index}`}
                className="
                  relative z-10 w-full h-full object-contain p-2
                  transition-transform duration-500 hover:scale-105
                "
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasonryGallery;
