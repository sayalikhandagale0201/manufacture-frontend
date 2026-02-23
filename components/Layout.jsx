'use client'
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;