'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        if (data.imageUrls) {
          const imgs = data.imageUrls.split(",");
          setActiveImage(imgs[0]);
        }
      });
  }, [id]);

  if (!product) {
    return (
      <p className="p-10 text-center text-orange-400">
        Loading...
      </p>
    );
  }

  const images = product.imageUrls ? product.imageUrls.split(",") : [];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* LEFT - IMAGES */}
      <div>
        <div className="border rounded-2xl bg-slate-900 flex items-center justify-center h-96 relative">
          {activeImage && (
            <Image
              src={activeImage}
              alt={product.name}
              width={400}
              height={400}
              className="object-contain transition-transform duration-500 hover:scale-105"
            />
          )}
        </div>

        {/* THUMBNAILS */}
        <div className="flex gap-3 mt-4 flex-wrap">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(img)}
              className={`w-20 h-20 border rounded-2xl cursor-pointer flex items-center justify-center
                ${activeImage === img ? "border-orange-600" : "border-gray-600/40"}`}
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

      {/* RIGHT - DETAILS */}
      <div className="flex flex-col justify-start gap-6">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-400">
            {product.name}
          </h1>
          <p className="text-gray-300 font-medium text-lg">
            {product.category}
          </p>
          <p className="text-gray-400 leading-relaxed mt-2">
            {product.description}
          </p>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href={`https://wa.me/919226535686?text=Hello, I am interested in ${product.name}`}
            target="_blank"
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