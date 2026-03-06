'use client'

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 px-6 md:px-16 lg:px-32">
        {children}
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Layout;