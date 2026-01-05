import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../Images/Img1.png";
import solar from "../Images/solar.png";
import solarr from "../Images/solarr.png";



const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function HomeStart2() {
  return (
    <div className="w-full bg-white relative overflow-hidden">

      {/* ================= ABOUT SECTION ================= */}
    <section className="relative max-w-7xl mx-auto px-6 py-10 z-10">

  <div className="grid md:grid-cols-2 gap-10 relative">

    {/* LEFT TEXT */}
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h3 className="text-[#739131] font-bold text-lg mb-3 uppercase">
        ABOUT US
      </h3>

      <h2 className="text-3xl md:text-5xl font-extrabold text-[#090971] leading-tight mb-6">
        We Don’t Just Sell <br /> Solar. We Engineer <br/>Smart <span className="text-[#739131]"> Power Solutions.</span>
      </h2>

      <p className="text-gray-700 mb-4 leading-relaxed text-[15px]">
        At DIVY Power, we believe solar isn’t just a product, it’s your power freedom...
      </p>

      <p className="text-gray-700 mb-4 leading-relaxed text-[15px]">
        We’ve been lighting lives responsibly for over a decade as an authorized partner of Tata Power Solar...
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed text-[15px]">
        With us, you don’t just go solar — you go safe, smart, and sustainable.
      </p>

      {/* STATS */}
      <div className="flex items-center gap-20 mt-8">

        <div className="flex items-center gap-3">
          <div className="text-4xl">
            {/* ICON */}
          </div>
          <div>
            <p className="text-[#C4302C] font-extrabold text-3xl">25+</p>
            <p className="text-sm font-semibold text-gray-700">
              YEARS EXPERIENCE
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-4xl">
            {/* ICON */}
          </div>
          <div>
            <p className="text-[#C4302C] font-extrabold text-3xl">10000+</p>
            <p className="text-sm font-semibold text-gray-700">
              PRODUCTS DELIVERED
            </p>
          </div>
        </div>

      </div>

      <Link
        to="/about"
        className="inline-block bg-[#739131] text-white mt-10 font-semibold px-8 py-3 rounded-full shadow-xl hover:scale-105 transition"
      >
        KNOW MORE
      </Link>
    </motion.div>

    {/* RIGHT IMAGES */}
    <div className="relative w-full min-h-[480px] flex flex-col items-center gap-6 md:block">

      {/* TOP IMAGE */}
      <motion.div
        className="
          relative md:absolute
          md:right-0 md:top-0
          w-[90%] sm:w-[420px]
          aspect-[4/3]
          rounded-xl overflow-hidden
          shadow-xl border-[6px] border-white bg-white
        "
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <img
          src={solar}
          alt="Indian solar engineers discussion"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* BOTTOM IMAGE */}
      <motion.div
        className="
          relative md:absolute
          md:left-10 md:top-44
          w-[90%] sm:w-[420px]
          aspect-[4/3]
          rounded-xl overflow-hidden
          shadow-xl border-[6px] border-white bg-white
        "
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <img
          src={solarr}
          alt="Indian solar technician installation"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

    </div>

  </div>
</section>

{/* ================= CARTOON SECTION – VERSION 1 ================= */}
{/* 
<motion.section
  className="mt-[10px] relative overflow-hidden"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ type: 'spring', stiffness: 60 }}
  viewport={{ once: true }}
>
  
  <div className="relative bg-[#0D443A] h-[380px] flex justify-center items-center p-4">

    <svg className="absolute left-10 bottom-0 opacity-50" width="160" height="160" viewBox="0 0 200 200">
      <path d="M10 180 L80 100 L150 180" stroke="#00FF57" strokeWidth="6" fill="none"/>
    </svg>

    <svg className="absolute right-20 top-10 opacity-60" width="140" height="140" viewBox="0 0 200 200">
      <path d="M40 20 L160 100 L40 180" stroke="#00FF57" strokeWidth="6" fill="none"/>
    </svg>

    <div className="relative text-center z-20">
      <motion.img
        src={img1}
        className="mx-auto -mt-24 mb-6"
        width="400"
        height="300"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      />
      <h1 className="text-white font-semibold text-2xl md:text-3xl -mt-16 leading-tight">
        Still Paying for Electricity?
        <br />
        Let Solar Chacha & Roshni Didi explain why switch to solar
      </h1>
    </div>
  </div>
</motion.section>
*/}


{/* ================= CARTOON SECTION – VERSION 2 ================= */}
{/* 
<motion.section
  className="mt-[70px]"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ type: 'spring', stiffness: 60 }}
  viewport={{ once: true }}
>
  <div className="bg-[#D8FF70] flex justify-center items-center h-[380px] p-4">

    <div className="text-center max-w-4xl w-full">
      <motion.img
        src={img1}
        className="mx-auto -mt-24 mb-6"
        width="400"
        height="300"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      />

      <h1 className="text-[#0A2D15] font-semibold text-2xl md:text-3xl leading-tight -mt-16">
        Still Paying for Electricity?
        <br />
        Let Solar Chacha & Roshni Didi explain why switch to solar
      </h1>
    </div>

  </div>
</motion.section>
*/}



{/* 3rd */}
{/* ================= CARTOON SECTION – SOLAR BACKGROUND FINAL ================= */}
<motion.section
  className="mt-[70px] relative overflow-hidden"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ type: "spring", stiffness: 60 }}
  viewport={{ once: true }}
>

  {/* Background Image */}
  <div
    className="relative h-[450px] bg-cover bg-center flex justify-center items-center p-4"
    style={{
      backgroundImage:
        "url('https://media.wired.com/photos/66f6d9e8edd5b22be7017791/3:2/w_2560%2Cc_limit/GettyImages-1681913304.jpg')",
    }}
  >

    {/* Soft dark overlay for text readability */}
    <div className="absolute inset-0 bg-black/45"></div>

    {/* Cartoon + Text */}
    <div className="relative text-center z-30">

      {/* Bigger Cartoon Size */}
      <motion.img
        src={img1}
        className="mx-auto -mt-28 mb-6 drop-shadow-xl"
        width="420"
        height="320"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 60 }}
      />

      {/* White Text */}
      <h1 className="text-white font-semibold text-2xl md:text-3xl leading-tight drop-shadow-xl -mt-6">
        Still Paying for Electricity?
        <br />
         Let <span className="text-[#C4302C]">Solar Chacha</span> & <span className="text-[#C4302C]">Roshni Didi</span> explain why switch to solar
      </h1>

    </div>

  </div>
</motion.section>


    </div>
  );
}
