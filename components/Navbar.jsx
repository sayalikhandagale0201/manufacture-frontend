"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { assets } from "@/assets/assets";

const Navbar = () => {
  const router = useRouter();

  const [isAdmin, setIsAdmin] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token && role === "ADMIN") {
      setIsAdmin(true);
    }
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim()) {
      router.push(`/search?q=${query}`);
      setQuery("");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsAdmin(false);
    router.push("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-lg">
      <div className="flex items-center gap-8 px-6 md:px-16 lg:px-32 py-3 text-white">

        {/* LOGO */}
        <div
          className="cursor-pointer text-2xl font-bold tracking-wide text-orange-500"
          onClick={() => router.push("/")}
        >
          DKM ENTERPRISES
        </div>

        {/* MENU LINKS */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-orange-400 transition">Home</Link>
          <Link href="/all-products" className="hover:text-orange-400 transition">Products</Link>
          <Link href="/about" className="hover:text-orange-400 transition">About</Link>
          <Link href="/contact" className="hover:text-orange-400 transition">Contact</Link>
        </div>

        {/* SEARCH */}
        <div className="flex flex-1 max-w-md items-center border rounded-full overflow-hidden shadow-sm bg-slate-800">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 text-sm outline-none bg-transparent text-white placeholder-gray-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
          <button
            onClick={() => query && router.push(`/search?q=${query}`)}
            className="bg-orange-600 px-4 py-2 hover:bg-orange-700 transition"
          >
            <Image
              src={assets.search_icon}
              alt="search"
              className="w-4 h-4"
            />
          </button>
        </div>

        {/* ADMIN SECTION */}
        {isAdmin && (
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/admin/dashboard")}
              className="text-xs border border-orange-500 px-4 py-1.5 rounded-full hover:bg-orange-600 hover:text-white transition"
            >
              Admin Dashboard
            </button>

            <button
              onClick={logout}
              className="text-xs border border-red-500 px-4 py-1.5 rounded-full text-red-400 hover:bg-red-600 hover:text-white transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;