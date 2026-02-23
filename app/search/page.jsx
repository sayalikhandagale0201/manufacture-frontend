"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!query) return;

    fetch(`http://localhost:8080/api/products/search?q=${query}`)
      .then(res => res.json())
      .then(data => setProducts(Array.isArray(data) ? data : []));
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 bg-slate-900 min-h-screen text-white">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-400">
        Search results for "{query}"
      </h1>

      {products.length === 0 && (
        <p className="text-gray-400">No products found</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(product => {
          const firstImg = product.imageUrls?.split(",")[0] || "/placeholder.png";
          return (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-orange-500/50 transition cursor-pointer">
                
                {/* IMAGE */}
                <div className="bg-slate-700 flex items-center justify-center p-3">
                  <Image
                    src={firstImg}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>

                {/* DETAILS */}
                <div className="p-4">
                  <h3 className="font-semibold text-white line-clamp-2">{product.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{product.category}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
