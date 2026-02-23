'use client'
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const images = product.imageUrls
    ? product.imageUrls.split(",").map((img) => img.trim())
    : [];

  // WhatsApp Enquiry Message
  const whatsappMessage = encodeURIComponent(
    `Hello,\nI am interested in the following product:\n\nProduct: ${product.name}\nCategory: ${product.category}\nPlease share more details.`
  );

  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition flex flex-col">

      {/* IMAGE */}
      <div className="w-full h-40 md:h-48 flex items-center justify-center bg-gray-100 rounded">
        {images.length > 0 ? (
          <Image
            src={images[0]}
            alt={product.name}
            width={200}
            height={200}
            className="object-contain"
          />
        ) : (
          <span className="text-sm text-gray-400">No Image</span>
        )}
      </div>

      {/* NAME & CATEGORY */}
      <h3 className="mt-3 font-medium text-sm truncate">{product.name}</h3>
      <p className="text-gray-500 text-xs">{product.category}</p>

      {/* ACTION BUTTONS */}
      <div className="mt-4 flex flex-col gap-2">
        {/* View Details */}
        <Link
          href={`/product/${product.id}`}
          className="w-full text-center bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition"
        >
          View Details
        </Link>

        {/* WhatsApp Get Quote */}
        <a
          href={`https://wa.me/919226535686?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          <FaWhatsapp />
          Get Quote
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
