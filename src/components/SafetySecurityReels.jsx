import React from "react";

const safetyVideos = [
  { name: "Lal Singh - Safety & Security", shortId: "" },
  { name: "Lal Singh - Team Safety", shortId: "" },
  { name: "Kaushlesh Singh - Precautions", shortId: "" },
  { name: "Kaushlesh - Employee Safety", shortId: "" },
  { name: "Rajeev Arora - Safety & Benefits", shortId: "" },
  { name: "Asha - Employee Safety", shortId: "" },
  { name: "Riddhi - Team Safety", shortId: "" },
];

const SafetySecurityReels = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-12 w-full">
      <div className="max-w-[100%] mx-auto">

        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-[#090971] mb-8">
          Safety and Security <span className="text-[#739131]">at DIVY</span>
        </h2>

        {/* Same layout as before — 3 cards on mobile, flex row on desktop */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:flex md:justify-center gap-4">
          {safetyVideos.map((item, index) => (
            <div
              key={index}
              className="bg-[#787878] shadow-md p-2 rounded-lg hover:shadow-lg transition-all 
                         w-full sm:w-full md:w-[180px] flex-shrink-0"
            >
              <div className="relative overflow-hidden rounded-lg">

                {/* YouTube Shorts Same Size As Old Video Cards */}
                <iframe
                  src={`https://www.youtube.com/embed/${item.shortId}`}
                  title={item.name}
                  className="w-full aspect-[9/16] rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

              </div>

              {/* OPTIONAL: NAME BELOW CARD (uncomment if needed) */}
              {/* <p className="mt-2 text-[10px] text-white text-center">{item.name}</p> */}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SafetySecurityReels;
