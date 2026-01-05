import React from "react";
import {
  ClipboardDocumentCheckIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";

const steps = [
  { title: "Register Work", Icon: ClipboardDocumentCheckIcon },
  { title: "Inspect Analyze", Icon: MagnifyingGlassIcon },
  { title: "Work Processing", Icon: Cog6ToothIcon },
  { title: "Handover Clients", Icon: InboxIcon },
];

export default function ProcessSteps() {
  return (
    <div className="w-full bg-[#f5fafc] py-16">

      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#090971] mb-12">
        Our Service <span className="text-[#739131]">Process</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {steps.map(({ title, Icon }, index) => (
          <div
            key={index}
            className="
              bg-white 
              border border-[#739131]
              rounded-2xl 
              shadow-md 
              p-8 
              text-center
              hover:shadow-xl
              transition-all
            "
          >
            {/* ICON */}
            <div className="flex justify-center mb-5">
              <Icon className="w-14 h-14 text-[#C4302C]" />
            </div>

            {/* TITLE ONLY → Your original content */}
            <h3 className="text-lg font-bold text-gray-900 tracking-wide">
              {index + 1}. {title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
