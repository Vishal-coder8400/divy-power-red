import React, { useState } from "react";
import solarg from "../Images/SolarChahaFront.png";
import axios from "axios";
import Loader from "../Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [billFile, setBillFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phoneNo", phoneNo);
      formData.append("message", message);
      formData.append("billFile", billFile);

      await axios.post("https://solar-6.onrender.com/api/senddata", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
   <main className="px-4 sm:px-8 md:px-16 py-10 bg-gradient-to-b from-[#dff4ff] to-[#e8fff4] -mt-16">
  <ToastContainer position="top-right" autoClose={3000} />
      <ToastContainer position="top-right" autoClose={3000} />

      {/* TOP HEADING */}
      <h2 className="text-center text-[32px] md:text-[40px] font-extrabold text-[#090971] mb-12">
        Contact with Solar <span className="text-[#739131]">Chacha</span>
      </h2>

      {/* MAIN SECTION */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-16">

        {/* LEFT — WHITE FORM CARD EXACT LIKE SCREENSHOT */}
        <form
          onSubmit={handelSubmit}
          className="bg-white w-full md:w-[55%] rounded-[28px] p-10 shadow-xl border border-gray-200"
        >

          {/* FORM HEAD */}
          <h3 className="text-[28px] font-bold text-center text-[#090971]">
            Get Your Best Solar  <span className="text-[#739131]">Solution</span>
          </h3>
          <p className="text-center text-gray-600 mt-2 mb-8 text-[15px]">
            Bijli ka bill bhejiye and Solar Chacha se janiye apne <br />
            rooftop ke liye Best Solar Solution
          </p>

          {/* INPUT FIELDS */}
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-3xl py-3 px-6 border border-gray-300 mb-4 focus:outline-none"
          />

          <input
            type="tel"
            placeholder="Your Phone Number"
            required
            value={phoneNo}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-3xl py-3 px-6 border border-gray-300 mb-4 focus:outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-3xl py-3 px-6 border border-gray-300 mb-4 focus:outline-none"
          />

          <textarea
            rows={4}
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-3xl py-3 px-6 border border-gray-300 mb-4 resize-none focus:outline-none"
          ></textarea>

          {/* FILE UPLOAD */}
          <div className="flex items-center gap-4 mb-6">
            <label className="bg-gray-200 rounded-full px-6 py-2 cursor-pointer text-gray-800 font-medium shadow-sm">
              Upload Your Bijli Bill
              <input
                type="file"
                onChange={(e) => setBillFile(e.target.files[0])}
                className="hidden"
              />
            </label>
            <span className="text-gray-600 text-sm">
              {billFile ? billFile.name : "No file chosen"}
            </span>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full bg-[#739131] text-white py-4 rounded-full font-bold text-lg shadow-lg flex items-center justify-center gap-3 hover:opacity-95 transition"
          >
            {loading ? <Loader /> : "SUBMIT NOW"}
            <i className="fas fa-arrow-right"></i>
          </button>
        </form>

        {/* RIGHT SIDE — SOLAR CHACHA + CONTACT INFO */}
        <div className="flex flex-col items-center md:items-start w-full md:w-[45%]">

          {/* IMAGE */}
          <img
            src={solarg}
            alt="Solar Chacha"
            className="w-[260px] md:w-[300px] mx-auto mb-6"
          />

          {/* CONTACT DETAILS */}
          <div className="text-[#0F172A] text-[18px] space-y-6">

            <p className="flex items-center gap-4">
              <i className="fas fa-phone-alt text-[22px] text-[#739131]"></i>
              +91 9310259325
            </p>

            <p className="flex items-start gap-4 leading-relaxed">
              <i className="fas fa-map-marker-alt text-[22px] mt-1 text-[#739131]"></i>
              53, Ramte Ram Rd, Ekta Vihar, Arjun Nagar, <br />
              Nai Basti Dundaher Ghaziabad, <br />
              Uttar Pradesh 201001
            </p>

            <p className="flex items-center gap-4">
              <i className="fas fa-envelope text-[22px] text-[#739131]"></i>
              sales@divypower.com
            </p>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
