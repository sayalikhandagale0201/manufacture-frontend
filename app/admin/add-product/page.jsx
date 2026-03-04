"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { assets } from "@/assets/assets";

export default function AddProductClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "Fasteners",
    headerSlider: false,
    featured: false,
    banner: false,
  });

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch product if editing
  useEffect(() => {
    if (!productId) return;

    async function fetchProduct() {
      try {
        const res = await fetch(
          `http://localhost:8080/api/products/${productId}`
        );
        const data = await res.json();

        setForm({
          name: data.name || "",
          description: data.description || "",
          category: data.category || "Fasteners",
          headerSlider: data.headerSlider || false,
          featured: data.featured || false,
          banner: data.banner || false,
        });

        if (data.imageUrls) {
          const first = data.imageUrls.split(",")[0];
          setPreview(
            first.startsWith("http")
              ? first
              : `http://localhost:8080/uploads/${first}`
          );
        }
      } catch (err) {
        console.error("Fetch failed:", err);
      }
    }

    fetchProduct();
  }, [productId]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleFileChange(e) {
    const selected = e.target.files?.[0];
    if (!selected) return;
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      if (file) formData.append("images", file);

      const url = productId
        ? `http://localhost:8080/api/products/${productId}`
        : `http://localhost:8080/api/products`;

      const method = productId ? "PUT" : "POST";

      const res = await fetch(url, { method, body: formData });

      if (!res.ok) throw new Error("Request failed");

      alert(productId ? "Product Updated" : "Product Added");
      router.push("/admin/product-list");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex-1 min-h-screen px-4 md:px-10 py-6">
      <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">

        {/* Image */}
        <div>
          <p className="font-medium">Product Image</p>
          <label className="relative mt-2 block w-[120px]">
            <input type="file" hidden onChange={handleFileChange} />
            <Image
              src={preview || assets.upload_area}
              alt="Preview"
              width={120}
              height={120}
              className="border rounded cursor-pointer object-cover"
            />
          </label>
        </div>

        {/* Name */}
        <div>
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="border px-3 py-2 rounded w-full"
          />
        </div>

        {/* Description */}
        <div>
          <label>Description</label>
          <textarea
            rows={4}
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            className="border px-3 py-2 rounded w-full resize-none"
          />
        </div>

        {/* Category */}
        <div>
          <label>Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          >
            <option>Fasteners</option>
            <option>Bolts</option>
            <option>Nuts</option>
            <option>Screws</option>
            <option>Alloy Components</option>
          </select>
        </div>

        {/* Checkboxes */}
        <div className="flex flex-col gap-2">
          {["headerSlider", "featured", "banner"].map((field) => (
            <label key={field} className="flex items-center gap-2">
              <input
                type="checkbox"
                name={field}
                checked={form[field]}
                onChange={handleChange}
              />
              {field}
            </label>
          ))}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-8 py-2 bg-orange-600 text-white rounded disabled:opacity-50"
        >
          {loading
            ? "Saving..."
            : productId
            ? "UPDATE PRODUCT"
            : "ADD PRODUCT"}
        </button>
      </form>
    </div>
  );
}