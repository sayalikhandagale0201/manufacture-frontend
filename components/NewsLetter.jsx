"use client";

import { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch("http://localhost:8080/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const text = await res.text();
      setMessage(text);
      setEmail("");
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (

    <section className="bg-[#E6E9F2] py-20 mt-16">

      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-xl relative">

        {/* ORANGE GLOW */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 py-20 px-6 text-center">
          <p className="text-orange-400 font-medium tracking-widest text-sm">
            STAY CONNECTED
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-white mt-3">
            Get Product Updates & Quotations
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            DKM Enterprises is a trusted supplier of steel and alloy products.
            Subscribe to receive new product launches, availability updates and
            quotation details.
          </p>

          {/* INPUT */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your business email"
              className="w-full h-12 px-4 rounded-md bg-slate-900/70 border border-white/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500"
            />

            <button
              onClick={handleSubscribe}
              disabled={loading}
              className="h-12 px-8 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Get Updates"}
            </button>
          </div>

          {/* MESSAGE */}
          {message && (
            <p className="mt-4 text-sm text-orange-400">{message}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
