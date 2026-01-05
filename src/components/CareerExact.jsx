import React, { useState } from "react";
import CareerApplyModal from "./CareerApplyModal"; // adjust path

// keep all your existing imports and code ABOVE

const CareersExact = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* YOUR EXISTING PAGE */}
      <div className="w-full bg-[#f6f9fc]">
        {/* --- all your existing code remains SAME --- */}

        {/* JOIN CTA */}
        <section className="pb-16">
          <div className="max-w-3xl mx-auto bg-[#eef3f7] rounded-xl text-center p-8 shadow">
            <h3 className="text-2xl font-bold mb-4">
              Join the <span className="text-green-700">DIVY Family</span>
            </h3>

            <button
              onClick={() => setOpen(true)}
              className="bg-blue-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition"
            >
              Submit Your Resume
            </button>
          </div>
        </section>
      </div>

      {/* MODAL */}
      <CareerApplyModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default CareersExact;
