import React, { useState } from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../Loader";
import "react-toastify/dist/ReactToastify.css";

function CareerForm() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Position, setPosition] = useState("");
  const [message, setMessage] = useState("");
  const [CV, setCv] = useState(null); // UI only
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send mail to HR
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          firstName: FirstName,
          lastName: LastName,
          email: email,
          phone: Phone,
          position: Position,
          message: message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Confirmation mail to user
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONFIRM_TEMPLATE_ID,
        {
          firstName: FirstName,
          email: email,
          position: Position,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Application submitted successfully!");

      // Reset form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setPosition("");
      setMessage("");
      setCv(null);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-white py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#090971] text-center">
          Get a chance to Work <span className="text-[#739131]">with Us</span>.
        </h2>


        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone No
              </label>
              <input
                type="tel"
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Position
            </label>
            <select
              value={Position}
              onChange={(e) => setPosition(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
            >
              <option value="">Select a position</option>
              <option>Sales executive</option>
              <option>Sales manager</option>
              <option>Operation manager</option>
              <option>Service engineer</option>
              <option>Service manager</option>
              <option>Pre-sales executive</option>
              <option>HR Manager</option>
              <option>Purchase Manager</option>
            </select>
          </div>

          <div>
            <textarea
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us something about yourself"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none"
            />
          </div>

          {/* CV upload (UI only – EmailJS free plan can't attach) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload your CV (PDF, DOCX)
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setCv(e.target.files[0])}
              className="block w-full text-sm"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#739131] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#739131] transition"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default CareerForm;
