"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Banner = () => {
  const [banner, setBanner] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/products/banner");
        if (!res.ok) return;
        const data = await res.json();
        setBanner(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBanner();
  }, []);

  if (!banner) return null;

  const firstImage = banner.imageUrls?.split(",")[0]?.trim() || "";
  const imageUrl = firstImage.startsWith("http")
    ? firstImage
    : `http://localhost:8080/uploads/${firstImage}`;

  return (
    <section className="max-w-7xl mx-auto px-6 mt-24">

      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-xl">

        {/* Decorative glow */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-8 md:px-16 py-14">

          {/* LEFT CONTENT */}
          <div className="text-white space-y-4">
            <p className="uppercase tracking-widest text-sm text-orange-400">
              Featured Industrial Product
            </p>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              {banner.name}
            </h1>

            <p className="text-gray-300 max-w-md text-sm md:text-base">
              {banner.description}
            </p>

            <div className="flex gap-4 pt-4">
              <button
                onClick={() => router.push(`/product/${banner.id}`)}
                className="px-8 py-3 bg-orange-600 hover:bg-orange-700 rounded-full text-sm font-medium transition"
              >
                View Details
              </button>

              <button
                onClick={() => router.push("/all-products")}
                className="px-8 py-3 border border-white/30 hover:border-white rounded-full text-sm font-medium transition"
              >
                Explore Products
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <Image
              src={imageUrl}
              alt={banner.name}
              width={360}
              height={360}
              className="object-contain drop-shadow-2xl hover:scale-105 transition duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
