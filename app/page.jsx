'use client'
import React from "react";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      
      {/* Parent Container with responsive padding */}
      <div className="px-4 sm:px-6 md:px-16 lg:px-32">

        {/* Header Slider */}
        <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] mb-8">
          <HeaderSlider />
        </div>

        {/* Home Products Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <HomeProducts />
          </div>
        </section>

        {/* Featured Product Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeaturedProduct />
          </div>
        </section>

        {/* Banner Section */}
        <section className="mb-12">
          <Banner />
        </section>

        {/* Newsletter Section */}
        <section className="mb-12">
          <NewsLetter />
        </section>

      </div>

      <Footer />
    </>
  );
};

export default Home;