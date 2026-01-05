import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const CareerApplyModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    try {
      // 1️⃣ Send mail to HR
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // 2️⃣ Send confirmation mail to user
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONFIRM_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Application submitted successfully!");
      form.reset();
      onClose();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-lg rounded-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">Apply for Job</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <input name="firstName" placeholder="First Name" required className="border p-2 rounded" />
            <input name="lastName" placeholder="Last Name" required className="border p-2 rounded" />
          </div>

          <input name="email" type="email" placeholder="Email" required className="border p-2 rounded w-full" />
          <input name="phone" placeholder="Phone" required className="border p-2 rounded w-full" />

          <select name="position" required className="border p-2 rounded w-full">
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

          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about yourself"
            required
            className="border p-2 rounded w-full"
          />

          {/* 🔥 THIS IS WHERE FILE INPUT BELONGS */}
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            required
            className="w-full"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-700 text-white w-full py-2 rounded font-semibold"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CareerApplyModal;
