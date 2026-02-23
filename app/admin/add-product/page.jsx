"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { assets } from "@/assets/assets";

const AddProduct = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Fasteners");

  // New checkboxes
  const [headerSlider, setHeaderSlider] = useState(false);
  const [featured, setFeatured] = useState(false);
  const [banner, setBanner] = useState(false);

  const [loading, setLoading] = useState(false);

  // Fetch product for edit
  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/products/${productId}`);
        const data = await res.json();

        setName(data.name);
        setDescription(data.description);
        setCategory(data.category);

        // Checkboxes
        setHeaderSlider(data.headerSlider || false);
        setFeatured(data.featured || false);
        setBanner(data.banner || false);

        if (data.imageUrls) {
          const first = data.imageUrls.split(",")[0];
          setPreview(first.startsWith("http") ? first : `http://localhost:8080/uploads/${first}`);
        }
      } catch (err) {
        console.error("Fetch product failed:", err);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      if (file) formData.append("images", file);

      // Append checkboxes
      formData.append("headerSlider", headerSlider);
      formData.append("featured", featured);
      formData.append("banner", banner);

      const url = productId
        ? `http://localhost:8080/api/products/${productId}`
        : `http://localhost:8080/api/products`;
      const method = productId ? "PUT" : "POST";

      const res = await fetch(url, { method, body: formData });
      if (!res.ok) throw new Error("Failed");

      alert(productId ? "Product updated" : "Product added");
      router.push("/admin/product-list");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 min-h-screen pt-0 md:pt-2 px-4 md:px-10">
      <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">

        {/* IMAGE */}
        <div>
          <p className="text-base font-medium">Product Image</p>
          <label className="relative mt-2">
            <input type="file" hidden onChange={handleFileChange} />
            <Image
              src={preview || assets.upload_area}
              alt="Product Image"
              width={120}
              height={120}
              className="cursor-pointer border rounded object-cover"
            />
          </label>
        </div>

        {/* NAME */}
        <div className="flex flex-col gap-1">
          <label>Product Name</label>
          <input
            type="text"
            required
            className="border px-3 py-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* DESCRIPTION */}
        <div className="flex flex-col gap-1">
          <label>Description</label>
          <textarea
            rows={4}
            required
            className="border px-3 py-2 rounded resize-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* CATEGORY */}
        <div className="flex flex-col gap-1">
          <label>Category</label>
          <select
            className="border px-3 py-2 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Fasteners</option>
            <option>Bolts</option>
            <option>Nuts</option>
            <option>Screws</option>
            <option>Alloy Components</option>
          </select>
        </div>

        {/* CHECKBOXES */}
        <div className="flex flex-col gap-2 mt-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={headerSlider}
              onChange={(e) => setHeaderSlider(e.target.checked)}
              className="w-4 h-4"
            />
            Header Slider
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              className="w-4 h-4"
            />
            Featured
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={banner}
              onChange={(e) => setBanner(e.target.checked)}
              className="w-4 h-4"
            />
            Banner
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-8 py-2 bg-orange-600 text-white rounded disabled:opacity-50"
        >
          {loading ? "Saving..." : productId ? "UPDATE PRODUCT" : "ADD PRODUCT"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
