import React from "react";

/* Icons */
import delhiIcon from "../delhi_final.png";
import HaryanaIcon from "../delhi_final.png";
import UPIcon from "../uttar_pradesh_final.png";

/* Map */
import indiaMap from "../mapnew.png";

export default function IndiaPresence() {
  const locations = [
      { name: "Delhi", icon: delhiIcon },
      { name: "Uttar Pradesh", icon: UPIcon },
    { name: "Haryana", icon: HaryanaIcon },
  ];

  return (
    <section className="w-full py-12 flex flex-col items-center">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#090971] mb-6 text-center">
        Our Solar Program’s Presence <span className="text-[#739131]">Across India</span>
      </h2>

      {/* Map */}
      <div className="w-full flex justify-center mb-6">
        <img
          src={indiaMap}
          alt="India Map"
          className="w-[60%] md:w-[35%] lg:w-[28%] object-contain"
        />
      </div>

      {/* Icons Section */}
     {/* Icons Section */}
<div className="flex items-center justify-center gap-16 md:gap-24 mt-2">
  {locations.map((item) => (
    <div key={item.name} className="flex flex-col items-center">

      {/* Uniform Icon Wrapper */}
      <div className="h-20 w-20 flex items-center justify-center mb-2">
        <img
          src={item.icon}
          alt={item.name}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Name */}
      <p className="text-lg font-semibold text-gray-800">{item.name}</p>
    </div>
  ))}
</div>

    </section>
  );
}
