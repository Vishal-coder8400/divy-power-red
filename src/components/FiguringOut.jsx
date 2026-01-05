import React from "react";

const teamMembers = [
  {
    name: "Architect",
    role: "Architect",
    image:
      "https://storage.googleapis.com/a1aa/image/249ae767-68b3-4bcd-1521-265ee80c5d7b.jpg",
    reel: "https://www.youtube.com/embed/VIDEO_ID_1",
  },
  {
    name: "Architect",
    role: "Architect",
    image:
      "https://storage.googleapis.com/a1aa/image/ba2e056b-5797-4eaa-d680-7a78a84778c0.jpg",
    reel: "https://www.youtube.com/embed/VIDEO_ID_2",
  },
  {
    name: "Entrepreneur",
    role: "Entrepreneur",
    image:
      "https://storage.googleapis.com/a1aa/image/d8ee8bcd-44eb-4126-73ad-adb857ac13a5.jpg",
    reel: "https://www.youtube.com/embed/VIDEO_ID_3",
  },
  {
    name: "Head of Architect",
    role: "Solar Specialist",
    image:
      "https://storage.googleapis.com/a1aa/image/5b4ec894-2c46-41d5-4e01-bd02f1629da7.jpg",
    reel: "https://www.youtube.com/embed/VIDEO_ID_4",
  },
];

const FiguringOut = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-12 w-full">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-10 text-[#090971]">
          Figuring out with DIVY <span className="text-[#739131]">with Architects</span>
        </h2>

        {/* Cards */}
        <div
          className="
            flex gap-6 pb-2
            overflow-x-auto scrollbar-hide
            md:overflow-x-visible
            md:justify-center
          "
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="
                bg-[#f0f0f0]
                shadow-md 
                rounded-xl 
                p-2 
                w-[180px]
                sm:w-[200px]
                md:w-[220px]
                flex-shrink-0 
                hover:shadow-xl 
                transition-all
              "
            >
              <div className="relative overflow-hidden rounded-lg w-full aspect-[9/16]">
                <iframe
                  src={`${member.reel}?mute=1`}
                  title={member.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                ></iframe>
              </div>

              <p className="mt-2 text-center text-[#C4302C] text-sm font-semibold">
                {member.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FiguringOut;
