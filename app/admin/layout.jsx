"use client";
import Sidebar from "@/components/admin/Sidebar";
import Navbar from "@/components/admin/Navbar";
import Footer from "@/components/admin/Footer";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-white-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-auto p-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
}  