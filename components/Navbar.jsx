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
  const [menuOpen, setMenuOpen] = useState(false);

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

      <div className="flex items-center justify-between px-5 md:px-12 lg:px-20 py-3 text-white">

        {/* LOGO */}
        <div
          className="cursor-pointer text-lg md:text-xl font-bold tracking-wide text-orange-500"
          onClick={() => router.push("/")}
        >
          DKM ENTERPRISES
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-orange-400">Home</Link>
          <Link href="/all-products" className="hover:text-orange-400">Products</Link>
          <Link href="/about" className="hover:text-orange-400">About</Link>
          <Link href="/contact" className="hover:text-orange-400">Contact</Link>
        </div>

        {/* SEARCH DESKTOP */}
        <div className="hidden md:flex flex-1 max-w-md mx-6 items-center border rounded-full overflow-hidden bg-slate-800">
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
              width={16}
              height={16}
            />
          </button>
        </div>

        {/* ADMIN */}
        {isAdmin && (
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => router.push("/admin/dashboard")}
              className="text-xs border border-orange-500 px-3 py-1 rounded-full hover:bg-orange-600 transition"
            >
              Dashboard
            </button>

            <button
              onClick={logout}
              className="text-xs border border-red-500 px-3 py-1 rounded-full text-red-400 hover:bg-red-600 hover:text-white transition"
            >
              Logout
            </button>
          </div>
        )}

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden px-5 pb-6 space-y-4 text-white bg-slate-900">

          <Link href="/" className="block">Home</Link>
          <Link href="/all-products" className="block">Products</Link>
          <Link href="/about" className="block">About</Link>
          <Link href="/contact" className="block">Contact</Link>

          {/* MOBILE SEARCH */}
          <div className="flex items-center border rounded-full overflow-hidden bg-slate-800 mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 text-sm outline-none bg-transparent"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
            <button
              onClick={() => query && router.push(`/search?q=${query}`)}
              className="bg-orange-600 px-4 py-2"
            >
              <Image
                src={assets.search_icon}
                alt="search"
                width={16}
                height={16}
              />
            </button>
          </div>

          {isAdmin && (
            <div className="flex flex-col gap-3 pt-4">
              <button
                onClick={() => router.push("/admin/dashboard")}
                className="border border-orange-500 px-4 py-2 rounded-full text-sm"
              >
                Admin Dashboard
              </button>

              <button
                onClick={logout}
                className="border border-red-500 px-4 py-2 rounded-full text-sm text-red-400"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;