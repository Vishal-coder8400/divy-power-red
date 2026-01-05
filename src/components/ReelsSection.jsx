import React, { useEffect, useState } from "react";

const reelsData = [
  {
    id: 1,
    title: "Smart Home Automation",
    desc: "Control your entire home with smart technology and voice commands.",
    img: "https://images.unsplash.com/photo-1545209463-e2825498edbf?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Sustainable Building",
    desc: "Eco-friendly materials and solar panels for a greener future.",
    img: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Modern Minimalist Design",
    desc: "Clean lines and functional spaces designed for simplicity.",
    img: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Outdoor Living Spaces",
    desc: "Create relaxing patios and gardens that extend your living area.",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    title: "Luxury Interiors",
    desc: "Experience elegance with high-end finishes and premium furniture.",
    img: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    title: "Smart Security Systems",
    desc: "Advanced security for your peace of mind 24/7.",
    img: "https://plus.unsplash.com/premium_photo-1668078530961-32f4a1107791?w=800&auto=format&fit=crop&q=60",
  },
];

// Utility to shuffle array
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const ReelsSection = () => {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    setReels(shuffleArray(reelsData));
  }, []);

  return (
    <section className="bg-[#f8f7f0] py-14 px-4 GetFontSol">
      <div className="max-w-7xl mx-auto bg-[#090971] rounded-[40px] overflow-hidden relative shadow-lg">
        {/* Background overlay */}
        {/* <img
          src="https://storage.googleapis.com/a1aa/image/f3495049-9e31-4d2e-4b33-9ff40415d344.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        /> */}

        <div className="relative px-6 md:px-10 py-12 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Left Text */}
          <div className="text-white max-w-md space-y-5">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight GetFontSol">
              Discover Inspiring <br />
              Solars Innovations <br /> Reels
            </h1>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
            >
              More About Us <i className="fas fa-arrow-right" />
            </a>
          </div>

          {/* Right Reels Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reels.map(({ id, title, desc, img }) => (
              <div
                key={id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition transform hover:scale-[1.03]"
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full h-[200px] sm:h-[180px] lg:h-[150px] object-cover"
                />
                <div className="p-5 text-center flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-[16px] font-bold text-[#090971] mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{desc}</p>
                  </div>
                  <button className="bg-[#739131] text-black font-semibold rounded-full px-5 py-2 inline-flex items-center justify-center gap-2 hover:bg-[#739131] transition">
                    <span className="text-white">Get Quote</span>
                    <i className="fas fa-arrow-right text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;
