import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CallBackSection() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleRequestCallBack = () => {
    if (!phoneNumber.trim()) {
      toast.error("Please enter a valid phone number");
      return;
    }

    // 🔔 Simulating a backend request (can be replaced with Axios call)
    console.log("Phone Number Submitted:", phoneNumber);

    toast.success("Request received! We'll call you back shortly.");
    setPhoneNumber(""); // Clear input
  };

  return (
    <div className=" -translate-y-14 rounded-2xl bg-white shadow-lg p-4 mb-3 flex flex-col md:flex-row items-center justify-between gap-3 mt-10">
      <div className="text-center md:text-left">
        <p className="text-xs text-[#090971] font-semibold uppercase">Call us now</p>
        <h2 className="text-lg font-bold text-[#C4302C]">
          Free Consultation by <br />
          Calling <span className="text-gray-800">+91 9310259325</span>
        </h2>
      </div>
      <div className="flex items-center w-full md:w-auto gap-2 translate-x-0 lg:translate-x-72 md:translate-x-72 xl:translate-x-72 2xl:translate-x-72">
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your number"
          className="rounded-xl px-3 py-1.5 border text-black font-bold border-gray-300 w-full md:w-56 text-sm"
        />
        <button
          onClick={handleRequestCallBack}
          className="bg-[#739131] text-white text-sm font-medium px-3 py-1.5 rounded-xl hover:bg-green-700 transition "
        >
          Call Me Back
        </button>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
