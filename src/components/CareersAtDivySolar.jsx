
import React,{useState} from "react";
import {
  FaLeaf,
  FaChartLine,
  FaLightbulb,
  FaUsers,
  FaHeart,
  FaRocket,
  FaCogs,
  FaUserCheck,
  FaChevronRight,
} from "react-icons/fa";
import solarsun from "../Images/solarsun.png"; // right-side icon
import CareerApplyModal from "./CareerApplyModal";

const CareersExact = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className="w-full bg-[#f6f9fc]">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[320px] md:h-[380px] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1509391366360-2e959784a276')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Join Our Team – Careers
          </h1>
          <p className="text-sm md:text-lg opacity-90">
            We're building the future with talented people like you. Explore our
            open positions below.
          </p>
        </div>
      </section>

      {/* ================= CAREERS AT DIVY ================= */}
      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#090971]">
              Careers at <span className="text-[#739131]">DIVY Solar</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At <strong className="text-[#090971]">DIVY Solar</strong>, we are not just building solar systems — we’re
              building a sustainable future. We believe in the power of clean
              energy and the people behind it. If you're passionate about
              renewable energy, innovation, and making a real impact, you've
              come to the right place.
            </p>
          </div>

          {/* RIGHT ICON */}
          <div className="flex justify-center">
            <img
              src={solarsun}
              alt="solar"
              className="w-[250px]"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY + WHO ================= */}
     <section className="bg-white border-t py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* WHY WORK */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#090971]">
              Why Work with <span className="text-[#739131]">DIVY Solar?</span>
            </h3>

            <ul className="space-y-5">
              <li className="flex gap-4">
                <FaLeaf className="text-green-600 text-xl mt-1" />
                <p>
                  <strong className="text-[#090971]">Purpose-Driven Work:</strong> Contribute to India's
                  transition toward a greener tomorrow.
                </p>
              </li>

              <li className="flex gap-4">
                <FaChartLine className="text-green-600 text-xl mt-1" />
                <p>
                  <strong className="text-[#090971]">Growth Opportunities:</strong> Learn, grow, and
                  advance in a fast-growing solar industry.
                </p>
              </li>

              <li className="flex gap-4">
                <FaLightbulb className="text-green-600 text-xl mt-1" />
                <p>
                  <strong className="text-[#090971]">Innovative Culture:</strong> Work with passionate
                  minds and cutting-edge technology.
                </p>
              </li>

              <li className="flex gap-4">
                <FaUsers className="text-green-600 text-xl mt-1" />
                <p>
                  <strong className="text-[#090971]">Inclusive Environment:</strong> We value ideas,
                  collaboration, and diversity.
                </p>
              </li>
            </ul>
          </div>

          {/* WHO WE'RE LOOKING FOR */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#090971]">
              Who We're  <span className="text-[#739131]">Looking For</span>
            </h3>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex gap-3">
                <FaHeart className="text-[#C4302C] text-xl mt-1" />
                <p>Passionate about clean energy and sustainability</p>
              </div>

              <div className="flex gap-3">
                <FaRocket className="text-[#C4302C] text-xl mt-1" />
                <p>Self-motivated and eager to grow</p>
              </div>

              <div className="flex gap-3">
                <FaCogs className="text-[#C4302C] text-xl mt-1" />
                <p>Technically sound and solution-oriented</p>
              </div>

              <div className="flex gap-3">
                <FaUserCheck className="text-[#C4302C] text-xl mt-1" />
                <p>Ready to take initiative and lead with integrity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section className="bg-[#f6f9fc] py-14">
        <h2 className="text-center text-2xl font-bold mb-8 text-[#090971]">
          Open Positions
        </h2>

        <div className="max-w-4xl mx-auto px-6 grid sm:grid-cols-2 gap-4">
          {[
  "Sales executive",
  "Sales manager",
  "Operation manager",
  "Service engineer",
  "Service manager",
  "Pre-sales executive",
  "HR Manager",
  "Purchase Manager",
]
.map((role, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-[#090971] text-white border rounded-lg px-5 py-3 hover:shadow transition"
            >
              <span className="font-medium">{role}</span>
              <FaChevronRight className="text-white" />
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Didn't find a role that suits you? Don't worry — we'd still love to
          hear from you.
        </p>
      </section>

      {/* ================= JOIN CTA ================= */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto bg-[#eef3f7] rounded-xl text-center p-8 shadow">
          <h3 className="text-2xl font-bold mb-4 text-[#090971]">
            Join the <span className="text-[#739131]">DIVY Family</span>
          </h3>

          {/* ✅ BUTTON OPENS MODAL */}
          <button
            onClick={() => setOpen(true)}
            className="bg-[#739131] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#739131] transition"
          >
            Submit Your Resume
          </button>

          <p className="text-sm text-gray-600 mt-4">
            Send your resume to{" "}
            <span className="text-[#090971] font-medium">
              careers@divysolar.com
            </span>{" "}
            or fill out the form below.
            <br />
            We aim to build something meaningful, together.
          </p>
        </div>
      </section>

        {/* ================= APPLY MODAL ================= */}
      <CareerApplyModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />

    </div>
  );
};

export default CareersExact;



