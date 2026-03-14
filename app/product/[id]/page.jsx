'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const [loading, setLoading] = useState(true);

  const API_URL = "https://manufacture-backend-oksf.onrender.com";

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/api/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");

        const data = await res.json();
        setProduct(data);

        if (data.imageUrls) {
          const imgs = data.imageUrls.split(",").map(img => img.trim());
          setActiveImage(imgs[0]);
        }
      } catch (err) {
        console.error("Error loading product:", err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, API_URL]);

  if (loading) {
    return (
      <p className="p-10 text-center text-orange-400">Loading...</p>
    );
  }

  if (!product) {
    return (
      <p className="p-10 text-center text-red-500">
        Product not found.
      </p>
    );
  }

  const images = product.imageUrls
    ? product.imageUrls.split(",").map(img => img.trim())
    : [];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* LEFT IMAGE */}
      <div>
        <div className="border rounded-2xl bg-gray-100 dark:bg-slate-900 flex items-center justify-center h-96 relative">
          {activeImage ? (
            <Image
              src={activeImage}
              alt={product.name}
              width={400}
              height={400}
              className="object-contain transition-transform duration-500 hover:scale-105"
            />
          ) : (
            <p className="text-gray-400">No Image Available</p>
          )}
        </div>

        {/* THUMBNAILS */}
        <div className="flex gap-3 mt-4 flex-wrap">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(img)}
              className={`w-20 h-20 border rounded-2xl cursor-pointer flex items-center justify-center overflow-hidden
                ${activeImage === img ? "border-orange-600" : "border-gray-400"}`}
            >
              <Image
                src={img}
                alt={`thumb-${index}`}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT DETAILS */}
      <div className="flex flex-col gap-6">

        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-400">
            {product.name}
          </h1>

          <p className="text-gray-500 font-medium text-lg">
            {product.category}
          </p>

          <p className="text-gray-400 leading-relaxed mt-2">
            {product.description}
          </p>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href={`https://wa.me/919226535686?text=Hello, I am interested in ${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 text-white px-6 py-3 rounded-2xl text-center hover:bg-green-700 transition font-medium"
          >
            📱 Get Quote on WhatsApp
          </a>

          <a
            href="tel:+919226535686"
            className="flex-1 bg-orange-600 text-white px-6 py-3 rounded-2xl text-center hover:bg-orange-700 transition font-medium"
          >
            📞 Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;