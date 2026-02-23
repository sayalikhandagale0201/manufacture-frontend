import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-10 py-4 bg-white border-t border-gray-200">
      <div className="flex items-center gap-4">
        <span className="text-orange-600 font-bold text-lg hidden md:block">
          DKM Enterprises
        </span>
         

        <div className="hidden md:block h-7 w-px bg-gray-500/60"></div>

        <p className="py-4 text-center text-xs md:text-sm text-gray-500">
          Copyright 2026 © DKM Enterprises. All Rights Reserved.
        </p>

      </div>
      <div className="flex items-center gap-3">
        <a href="#"><Image src={assets.facebook_icon} alt="facebook_icon" /></a>
        <a href="#"><Image src={assets.twitter_icon} alt="twitter_icon" /></a>
        <a href="#"><Image src={assets.instagram_icon} alt="instagram_icon" /></a>
      </div>
    </div>
  );
};

export default Footer;
