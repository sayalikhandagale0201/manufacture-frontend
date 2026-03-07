'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const router = useRouter();
  const API = process.env.NEXT_PUBLIC_API_URL; // backend URL from environment
  const currency = process.env.NEXT_PUBLIC_CURRENCY || "₹";

  /* ================= STATE ================= */
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [userData, setUserData] = useState(null);
  const [isadmin, setIsadmin] = useState(true);

  /* ================= PRODUCTS ================= */
  const fetchProductData = async () => {
    try {
      const res = await fetch(`${API}/api/products`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  /* ================= USER ================= */
  const fetchUserData = async () => {
    try {
      const res = await fetch(`${API}/api/users/me`);
      const data = await res.json();
      setUserData(data);
    } catch (error) {
      console.error("User not logged in");
    }
  };

  /* ================= CART ================= */
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const updateCartQuantity = (itemId, quantity) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (quantity <= 0) delete updated[itemId];
      else updated[itemId] = quantity;
      return updated;
    });
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce((a, b) => a + b, 0);
  };

  const getCartAmount = () => {
    let total = 0;
    for (let id in cartItems) {
      const product = products.find((p) => p.id == id);
      if (product) total += product.offerPrice * cartItems[id];
    }
    return total;
  };

  /* ================= INIT ================= */
  useEffect(() => {
    fetchProductData();
    // fetchUserData(); // enable after login
  }, []);

  /* ================= NOTIFICATION PERMISSION ================= */
  useEffect(() => {
    if ("Notification" in window) Notification.requestPermission();
  }, []);

  /* ================= PROVIDER ================= */
  const value = {
    currency,
    router,
    products,
    cartItems,
    userData,
    isadmin,
    setIsadmin,

    addToCart,
    updateCartQuantity,
    getCartCount,
    getCartAmount,

    fetchProductData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};