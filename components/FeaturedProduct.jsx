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
    <section className="max-w-7xl mx-auto px-6 mt-32 mb-24">
      {/* HEADING */}
      <div className="text-center mb-16">
        <p className="text-orange-400 font-medium tracking-widest text-sm">
          PREMIUM SELECTION
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
          Featured Products
        </h2>
        <div className="w-24 h-1 bg-orange-600 mx-auto mt-5 rounded-full"></div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
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
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

              {/* IMAGE */}
              <Image
                src={imageUrl}
                alt={item.name}
                width={500}
                height={350}
                className="w-full h-72 object-cover opacity-90 group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 p-6 translate-y-6 group-hover:translate-y-0 transition duration-500">
                <h3 className="text-white text-xl font-semibold">
                  {item.name}
                </h3>

                <p className="text-gray-300 text-sm mt-2 line-clamp-2 max-w-[90%]">
                  {item.description}
                </p>

                <button
                  onClick={() => router.push(`/product/${item.id}`)}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-orange-600 text-white text-sm font-medium rounded-full hover:bg-orange-700 transition"
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
