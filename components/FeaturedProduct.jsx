"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:8080/api/products/featured")
      .then((res) => res.json())
      .then((data) => setProducts(Array.isArray(data) ? data : []));
  }, []);

  if (products.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-28 mb-16 md:mb-24">
      
      {/* HEADING */}
      <div className="text-center mb-12 md:mb-16">
        <p className="text-orange-400 font-medium tracking-widest text-xs sm:text-sm">
          PREMIUM SELECTION
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-3">
          Featured Products
        </h2>

        <div className="w-20 sm:w-24 h-1 bg-orange-600 mx-auto mt-4 md:mt-5 rounded-full"></div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {products.map((item) => {
          const img = item.imageUrls?.split(",")[0]?.trim();
          const imageUrl = img?.startsWith("http")
            ? img
            : `http://localhost:8080/uploads/${img}`;

          return (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-xl border border-white/10"
            >
              {/* ORANGE GLOW */}
              <div className="absolute -top-20 -right-20 w-56 h-56 sm:w-64 sm:h-64 bg-orange-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

              {/* IMAGE */}
              <div className="relative w-full h-56 sm:h-64 md:h-72">
                <Image
                  src={imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover opacity-90 group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 p-5 sm:p-6 translate-y-4 sm:translate-y-6 group-hover:translate-y-0 transition duration-500">
                
                <h3 className="text-white text-lg sm:text-xl font-semibold">
                  {item.name}
                </h3>

                <p className="text-gray-300 text-sm mt-2 line-clamp-2 max-w-[90%]">
                  {item.description}
                </p>

                <button
                  onClick={() => router.push(`/product/${item.id}`)}
                  className="mt-4 sm:mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 text-white text-sm font-medium rounded-full hover:bg-orange-700 transition"
                >
                  View Details →
                </button>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProduct;