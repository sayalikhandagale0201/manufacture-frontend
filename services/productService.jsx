const BASE_URL = "http://localhost:8080/api/products";

/* =======================
   HEADER SLIDER
======================= */
export async function fetchHeaderSliderProducts() {
  try {
    const res = await fetch(`${BASE_URL}/header-slider`);

    if (!res.ok) {
      throw new Error("Failed to fetch header slider products");
    }

    const data = await res.json();

    // ✅ Always return array
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("HeaderSlider fetch error:", error);
    return [];
  }
}

/* =======================
   BANNER
======================= */
export async function fetchBannerProduct() {
  try {
    const res = await fetch(`${BASE_URL}/banner`);

    if (!res.ok) {
      throw new Error("Failed to fetch banner product");
    }

    return await res.json();
  } catch (error) {
    console.error("Banner fetch error:", error);
    return null;
  }
}

/* =======================
   FEATURED
======================= */
export async function fetchFeaturedProducts() {
  try {
    const res = await fetch(`${BASE_URL}/featured`);

    if (!res.ok) {
      throw new Error("Failed to fetch featured products");
    }

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Featured fetch error:", error);
    return [];
  }
}
