'use client'

import ProductCard from "@/components/ProductCard";
import { useAppContext } from "@/context/AppContext";
import Layout from "@/components/Layout"; 

const AllProducts = () => {
  const { products } = useAppContext();

  return (
    <Layout>
    <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-orange-400 font-medium tracking-widest text-sm">
          OUR COLLECTION
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
          All Products
        </h1>
        <div className="w-24 h-1 bg-orange-600 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-xl border border-white/10"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition"></div>
            <ProductCard product={product} theme="dark" />
          </div>
        ))}
      </div>
    </section>
    </Layout>
  );
};

export default AllProducts;