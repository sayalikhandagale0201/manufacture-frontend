"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/products");
        const data = await res.json();

        const normalProducts = Array.isArray(data)
          ? data.filter((p) => !p.headerSlider && !p.featured)
          : [];

        setProducts(normalProducts.slice(0, 8));
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* HEADING */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold text-slate-900">
          Popular Products
        </h2>
        <div className="w-24 h-1 bg-orange-600 mx-auto mt-3"></div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => {
          const firstImage =
            product.imageUrls?.split(",")[0]?.trim() || "/placeholder.png";

          return (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 shadow-lg hover:shadow-orange-500/20 transition"
            >
              {/* ORANGE GLOW */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

              {/* IMAGE */}
              <div className="relative z-10 bg-slate-800/60 rounded-lg m-4 p-4 flex justify-center">
                <Image
                  src={firstImage}
                  alt={product.name}
                  width={180}
                  height={180}
                  className="object-contain group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* DETAILS */}
              <div className="relative z-10 px-4 pb-5">
                <h3 className="text-sm font-medium text-white line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-xs text-gray-400 mt-1">
                  {product.category}
                </p>

                <div className="mt-4 inline-flex items-center gap-2 text-orange-400 text-xs font-medium">
                  View Details →
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default HomeProducts;
