"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const API_URL = "https://manufacture-backend-oksf.onrender.com";

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/api/products`);
      if (!res.ok) throw new Error("Failed to fetch products");

      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [API_URL]);

  const deleteProduct = async (id) => {
    const ok = confirm("Are you sure you want to delete this product?");
    if (!ok) return;

    try {
      const res = await fetch(`${API_URL}/api/products/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete product");

      fetchProducts();
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete product");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-3 sm:p-6">
      <h1 className="text-lg sm:text-2xl font-semibold mb-4">All Products</h1>

      <div className="bg-white border rounded-lg overflow-hidden">
        {/* DESKTOP HEADER */}
        <div className="hidden md:grid grid-cols-12 px-4 py-3 border-b text-sm font-medium text-gray-600">
          <div className="col-span-7">Product</div>
          <div className="col-span-3">Category</div>
          <div className="col-span-2 text-right">Action</div>
        </div>

        {/* PRODUCTS */}
        {products.map((product) => {
          const images = product.imageUrls
            ? product.imageUrls.split(",").map((img) => img.trim())
            : [];

          return (
            <div
              key={product.id}
              className="border-b last:border-b-0 hover:bg-gray-50 p-3 md:p-4"
            >
              {/* MOBILE VIEW */}
              <div className="flex gap-3 md:hidden">
                <div className="w-14 h-14 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                  {images.length > 0 ? (
                    <Image
                      src={images[0]}
                      alt={product.name}
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-xs text-gray-400">No Image</span>
                  )}
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">
                    {product.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{product.category}</p>

                  <div className="flex gap-2 mt-3 flex-wrap">
                    <Link
                      href={`/product/${product.id}`}
                      className="bg-orange-500 text-white text-xs px-3 py-1 rounded"
                    >
                      View
                    </Link>

                    <button
                      onClick={() =>
                        router.push(`/admin/add-product?id=${product.id}`)
                      }
                      className="bg-blue-500 text-white text-xs px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="bg-red-500 text-white text-xs px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>

              {/* DESKTOP VIEW */}
              <div className="hidden md:grid grid-cols-12 items-center">
                <div className="col-span-7 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                    {images.length > 0 ? (
                      <Image
                        src={images[0]}
                        alt={product.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-xs text-gray-400">No Image</span>
                    )}
                  </div>

                  <p className="text-sm font-medium text-gray-800">{product.name}</p>
                </div>

                <div className="col-span-3 text-sm text-gray-600">{product.category}</div>

                <div className="col-span-2 flex justify-end gap-2">
                  <Link
                    href={`/product/${product.id}`}
                    className="bg-orange-500 text-white text-xs px-3 py-1 rounded hover:bg-orange-600"
                  >
                    View
                  </Link>

                  <button
                    onClick={() =>
                      router.push(`/admin/add-product?id=${product.id}`)
                    }
                    className="bg-blue-500 text-white text-xs px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-600"
                  >
                    Del
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {products.length === 0 && (
          <p className="text-center py-6 text-gray-500 text-sm">
            No products found
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductListPage;