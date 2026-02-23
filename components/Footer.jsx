import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-gray-300">

      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row justify-between gap-10 px-6 md:px-16 lg:px-32 py-16">

        {/* LEFT: COMPANY INFO */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <h2 className="text-white font-semibold text-lg tracking-wide">
            DKM ENTERPRISES
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            DKM ENTERPRISES is a trusted supplier of steel fasteners and alloy
            products including bolts, nuts, rods, plates, sheets, and channels,
            ensuring quality & industrial standards.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 text-lg mt-2">
            <a className="hover:text-orange-500 transition"><FaFacebookF /></a>
            <a className="hover:text-orange-500 transition"><FaInstagram /></a>
            <a
              href="https://wa.me/919226535686"
              target="_blank"
              className="hover:text-orange-500 transition"
            >
              <FaWhatsapp />
            </a>
            <a className="hover:text-orange-500 transition"><FaYoutube /></a>
          </div>
        </div>

        {/* CENTER: LINKS */}
        <div className="w-full md:w-1/3">
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-orange-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-orange-400">About</Link></li>
            <li><Link href="/products" className="hover:text-orange-400">Products</Link></li>
            <li><Link href="/contact" className="hover:text-orange-400">Contact</Link></li>
          </ul>
        </div>

        {/* RIGHT: CONTACT */}
        <div className="w-full md:w-1/3 flex flex-col gap-3 text-sm">
          <h3 className="text-white font-semibold">Contact Us</h3>

          <p>
            <span className="text-gray-400">Phone:</span>{" "}
            <span className="text-orange-400">+91 92265 35686</span>
          </p>

          <p>
            <span className="text-gray-400">Email:</span>{" "}
            <span className="text-orange-400">info@ashdipitsolutions.in</span>
          </p>

          <p className="text-gray-400 leading-relaxed">
            304/2, Nehru Nagar Rd,<br />
            Atma Nagar, Kharalwadi,<br />
            Pimpri Colony, Pune – 411018
          </p>

          <a
            href="https://www.google.com/maps?q=304/2,+Nehru+Nagar+Rd,+Pune"
            target="_blank"
            className="inline-flex items-center gap-2 text-orange-400 hover:underline"
          >
            <FaMapMarkerAlt />
            Open in Google Maps
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 px-6 md:px-16 lg:px-32 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© 2026 DKM ENTERPRISES. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="/privacy-policy" className="hover:text-orange-400">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-orange-400">
            Terms
          </Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
