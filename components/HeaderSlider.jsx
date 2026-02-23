"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeaderSlider = () => {
  const router = useRouter();
  const [banners, setBanners] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/api/products/header-slider")
      .then(res => res.json())
      .then(data => setBanners(Array.isArray(data) ? data : []));
  }, []);

  useEffect(() => {
    if (banners.length === 0) return;
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % banners.length),
      4000
    );
    return () => clearInterval(timer);
  }, [banners]);

  if (banners.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 mt-6">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-xl">

        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {banners.map((item) => {
            const img = item.imageUrls?.split(",")[0]?.trim();
            const imageUrl = img?.startsWith("http")
              ? img
              : `http://localhost:8080/uploads/${img}`;

            return (
              <div
                key={item.id}
                className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-8 md:px-16 py-14 items-center"
              >
                {/* LEFT */}
                <div className="text-white space-y-4">
                  <p className="text-orange-400 uppercase tracking-widest text-sm">
                    Industrial Solutions
                  </p>

                  <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                    {item.name}
                  </h1>

                  <p className="text-gray-300 max-w-md">
                    {item.description}
                  </p>

                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() => router.push(`/product/${item.id}`)}
                      className="px-8 py-3 bg-orange-600 hover:bg-orange-700 rounded-full text-sm font-medium"
                    >
                      View Product
                    </button>

                    <button
                      onClick={() => router.push("/all-products")}
                      className="px-8 py-3 border border-white/30 rounded-full text-sm"
                    >
                      Explore
                    </button>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex justify-center md:justify-end">
                  <Image
                    src={imageUrl}
                    alt={item.name}
                    width={380}
                    height={380}
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* DOTS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${
                current === i ? "bg-orange-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeaderSlider;
