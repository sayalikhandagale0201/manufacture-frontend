import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full px-6 md:px-10 py-4 bg-white border-t border-gray-200">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">

        {/* LEFT */}
        <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
          <span className="text-orange-600 font-bold text-lg">
            DKM Enterprises
          </span>

          <div className="hidden md:block h-6 w-px bg-gray-400"></div>

          <p className="text-xs md:text-sm text-gray-500">
            © 2026 DKM Enterprises. All Rights Reserved.
          </p>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-4">
          <a href="#">
            <Image
              src={assets.facebook_icon}
              alt="facebook"
              width={20}
              height={20}
              className="hover:opacity-70 transition"
            />
          </a>

          <a href="#">
            <Image
              src={assets.twitter_icon}
              alt="twitter"
              width={20}
              height={20}
              className="hover:opacity-70 transition"
            />
          </a>

          <a href="#">
            <Image
              src={assets.instagram_icon}
              alt="instagram"
              width={20}
              height={20}
              className="hover:opacity-70 transition"
            />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;