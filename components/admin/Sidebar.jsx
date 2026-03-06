"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { assets } from "@/assets/assets";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Add Product", path: "/admin/add-product", icon: assets.add_icon },
    { name: "Product List", path: "/admin/product-list", icon: assets.product_list_icon },
    { name: "Enquiries", path: "/admin/enquiry", icon: assets.order_icon },
  ];

  return (
    <aside className="w-16 md:w-64 bg-white border-r border-gray-200 min-h-screen sticky top-0 flex flex-col">

      {/* BRAND */}
      <div className="flex items-center justify-center md:justify-start px-4 py-4 border-b">
        <span className="text-lg md:text-xl font-bold text-orange-600 hidden md:block">
          DKM Enterprises
        </span>
      </div>

      {/* MENU */}
      <nav className="flex flex-col gap-1 p-2">

        {menuItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link key={item.name} href={item.path}>
              <div
                className={`flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer transition-all
                ${
                  isActive
                    ? "bg-orange-100 text-orange-600 border-r-4 border-orange-600"
                    : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={22}
                  height={22}
                />

                <span className="hidden md:block text-sm font-medium">
                  {item.name}
                </span>
              </div>
            </Link>
          );
        })}

      </nav>
    </aside>
  );
};

export default Sidebar;