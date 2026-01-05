// components/FaqSection.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is solar energy and how does it work?",
    answer:
      "Solar energy is power from the sun. Solar panels capture sunlight and convert it into electricity using photovoltaic (PV) cells.",
  },
  {
    question: "How much energy can I expect to generate from solar panels?",
    answer:
      "The amount depends on your location, roof orientation, panel efficiency, and sunlight hours.",
  },
  {
    question: "Can solar panels work during cloudy or rainy weather?",
    answer:
      "Yes, they still generate power—just at reduced efficiency. Modern panels can function under diffused light.",
  },
  {
    question: "How long do solar panels last?",
    answer:
      "Most solar panels last 25–30 years with minimal maintenance, often still producing electricity beyond that.",
  },
];

const Solarabout = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 flex flex-col md:flex-row md:items-start md:space-x-12">
  {/* Left Image */}
  <div className="md:w-1/2 flex justify-center md:justify-start md:sticky md:top-20">
    <img
      alt="Solar panels installed in a field with a clear sky at sunset"
      className="rounded-lg w-full max-w-md object-cover"
      src="https://storage.googleapis.com/a1aa/image/e26e09fe-5dfa-43ac-7811-3a13b62b268d.jpg"
      width={600}
      height={350}
    />
  </div>

  {/* Right FAQ */}
  <section className="GetFontSol md:w-1/2 mt-10 md:mt-0">
    <h2 className="text-2xl GetFontDash text-gray-800 mb-4 text-center md:text-left">
      About <span className="text-green-800 rounded-lg">Solar</span>
    </h2>
    <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center md:text-left">
      Some General Questions?
    </h2>

    <div className="space-y-4">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-md shadow-sm p-6 transition-all"
        >
          <button
            onClick={() => toggle(index)}
            className="flex items-center justify-between w-full text-left font-semibold text-gray-900"
          >
            <span>{item.question}</span>
            <span
              className={`flex items-center justify-center w-7 h-7 rounded-full text-lg transition-all ${
                openIndex === index
                  ? "bg-green-800 text-white"
                  : "bg-green-800 text-white"
              }`}
            >
              {openIndex === index ? "−" : "+"}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.p
                key="content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3 text-gray-700 text-sm leading-relaxed max-w-prose overflow-hidden"
              >
                {item.answer}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  </section>
</main>

  );
};

export default Solarabout;
