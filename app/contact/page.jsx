"use client";
import { useState } from "react";
import Layout from "@/components/Layout";



const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    enquiryType: "",
    email: "",
    product: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("http://localhost:8080/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit enquiry");

      setFormData({
        name: "",
        phone: "",
        enquiryType: "",
        email: "",
        product: "",
        message: "",
      });

      setSuccess("Enquiry submitted successfully!");
    } catch (err) {
      console.error(err);
      setSuccess("Failed to submit enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl p-8 md:p-10 grid md:grid-cols-2 gap-8">

        {/* LEFT */}
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-orange-400">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg">
            Send us your requirement for materials, specifications or quotation.
            Our team will contact you shortly.
          </p>
        </div>

        {/* RIGHT */}
        <div>
          {success && (
            <p
              className={`mb-4 text-sm ${
                success.includes("successfully")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {success}
            </p>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="input-style"
            />

            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-style"
            />

            <select
              name="enquiryType"
              required
              value={formData.enquiryType}
              onChange={handleChange}
              className="input-style"
            >
              <option value="">Select Enquiry Type</option>
              <option value="Individual Buyer">Individual Buyer</option>
              <option value="Trader / Dealer">Trader / Dealer</option>
              <option value="Manufacturer">Manufacturer</option>
              <option value="Contractor / Fabricator">
                Contractor / Fabricator
              </option>
            </select>

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="input-style"
            />

            <input
              type="text"
              name="product"
              placeholder="Material "
              value={formData.product}
              onChange={handleChange}
              className="input-style"
            />

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="input-style resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-2 rounded-full transition"
            >
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>
          </form>
        </div>
      </div>

      {/* reusable input style */}
      <style jsx>{`
        .input-style {
          border: 1px solid #475569;
          background: #334155;
          color: white;
          padding: 10px 12px;
          border-radius: 8px;
          outline: none;
        }
        .input-style::placeholder {
          color: #94a3b8;
        }
        .input-style:focus {
          border-color: #f97316;
          box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.4);
        }
      `}</style>
    </div>
    </Layout>
  );
};

export default Contact;
