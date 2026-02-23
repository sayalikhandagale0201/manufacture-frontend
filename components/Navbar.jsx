"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { assets } from "@/assets/assets";

const Navbar = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role"); // "ADMIN" or "USER"

    setIsLoggedIn(!!token);
    setIsAdmin(role === "ADMIN");
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
    setIsLoggedIn(false);
    setIsAdmin(false);
    router.push("/login");
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

        {/* RIGHT */}
        <div className="flex items-center gap-6">

          {/* ADMIN DASHBOARD */}
          {isAdmin && (
            <button
              onClick={() => router.push("/admin")}
              className="text-xs border border-orange-500 px-4 py-1.5 rounded-full hover:bg-orange-600 hover:text-white transition"
            >
              Dashboard
            </button>
          )}

          {/* ACCOUNT */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex flex-col text-left leading-tight"
            >
              <span className="text-xs text-gray-300">
                {isLoggedIn ? "Hello," : "Welcome"}
              </span>
              <span className="text-sm font-medium">
                {isLoggedIn ? "Account" : "Sign in"}
              </span>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-44 bg-slate-800 border border-gray-700 rounded shadow-lg text-white">
                {!isLoggedIn ? (
                  <>
                    <Link
                      href="/login"
                      className="block px-4 py-2 hover:bg-orange-600 transition"
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="block px-4 py-2 hover:bg-orange-600 transition"
                    >
                      Register
                    </Link>
                  </>
                ) : (
                  <>
                    
                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-600 transition"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
