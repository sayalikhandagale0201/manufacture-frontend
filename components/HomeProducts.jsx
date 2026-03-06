"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const API_BASE = "http://localhost:8080";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/products`);
        const data = await res.json();

        const normalProducts = Array.isArray(data)
          ? data.filter((p) => !p.headerSlider && !p.featured)
          : [];

        setProducts(normalProducts.slice(0, 8));
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* HEADING */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold text-slate-900">
          Popular Products
        </h2>
        <div className="w-24 h-1 bg-orange-600 mx-auto mt-3"></div>
      </div>

      {/* EMPTY STATE */}
      {products.length === 0 && (
        <p className="text-center text-gray-500">
          No products available
        </p>
      )}

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => {
          const img = product.imageUrls?.split(",")[0]?.trim();

          const imageUrl =
            img && img.startsWith("http")
              ? img
              : `${API_BASE}/uploads/${img}`;

          return (
            <Link
              key={product.id || index}
              href={`/product/${product.id}`}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 shadow-lg hover:shadow-orange-500/20 transition"
            >
              {/* ORANGE GLOW */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

              {/* IMAGE */}
              <div className="relative z-10 bg-slate-800/60 rounded-lg m-4 p-4 flex justify-center">
                <Image
                  src={imageUrl || "/placeholder.png"}
                  alt={product.name || "Product"}
                  width={180}
                  height={180}
                  className="object-contain group-hover:scale-105 transition duration-500"
                  priority={index < 2}
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