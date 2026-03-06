"use client";

import { useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Navbar from "@/components/admin/Navbar";
import Footer from "@/components/admin/Footer";

export default function AdminLayout({ children }) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* MOBILE SIDEBAR OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`
        fixed lg:static z-50 top-0 left-0 h-full
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
        `}
      >
        <Sidebar closeSidebar={() => setSidebarOpen(false)} />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-h-screen">

        {/* NAVBAR */}
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

      </div>
    </div>
  );
}