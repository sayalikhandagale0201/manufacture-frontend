import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b sticky top-0 z-40">
      <div className="flex items-center justify-between px-4 md:px-8 py-3">

        {/* LEFT LOGO */}
        <div className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-bold text-orange-600">
            DKM Enterprises
          </span>
        </div>

        {/* RIGHT ACTION */}
        <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 md:px-6 rounded-full text-xs md:text-sm transition">
          Logout
        </button>

      </div>
    </header>
  );
};

export default Navbar;