'use client'

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

  // Split images
  const images = product.imageUrls
    ? product.imageUrls.split(",").map((img) => img.trim())
    : [];

  const firstImage = images.length > 0 ? images[0] : null;

  const imageUrl = firstImage
    ? firstImage.startsWith("http")
      ? firstImage
      : `${API}/uploads/${firstImage}`
    : null;

  // WhatsApp message
  const whatsappMessage = encodeURIComponent(
    `Hello,
I am interested in the following product:

Product: ${product.name}
Category: ${product.category}

Please share more details.`
  );

  return (
    <div className="group border border-white/10 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 hover:shadow-xl hover:shadow-orange-500/20 transition flex flex-col">

      {/* IMAGE */}
      <div className="w-full h-44 flex items-center justify-center bg-slate-800/60 rounded-lg overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={product.name}
            width={200}
            height={200}
            className="object-contain group-hover:scale-105 transition duration-500"
          />
        ) : (
          <span className="text-sm text-gray-400">No Image</span>
        )}
      </div>

      {/* NAME */}
      <h3 className="mt-4 font-medium text-sm text-white line-clamp-2">
        {product.name}
      </h3>

      {/* CATEGORY */}
      <p className="text-gray-400 text-xs mt-1">
        {product.category}
      </p>

      {/* BUTTONS */}
      <div className="mt-4 flex flex-col gap-2">

        {/* VIEW DETAILS */}
        <Link
          href={`/product/${product.id}`}
          className="w-full text-center bg-orange-600 text-white py-2 rounded-md text-sm hover:bg-orange-700 transition"
        >
          View Details
        </Link>

        {/* WHATSAPP */}
        <a
          href={`https://wa.me/919226535686?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-md text-sm hover:bg-green-700 transition"
        >
          <FaWhatsapp />
          Get Quote
        </a>

      </div>
    </div>
  );
};

export default ProductCard;