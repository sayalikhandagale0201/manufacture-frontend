"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { assets } from "@/assets/assets";

const SideBar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Add Product", path: "/admin/add-product", icon: assets.add_icon },
    { name: "Product List", path: "/admin/product-list", icon: assets.product_list_icon },
    { name: "Enquiries", path: "/admin/enquiry", icon: assets.order_icon },
  ];

  return (
    <div className="md:w-64 w-16 border-r min-h-screen text-base border-gray-300 py-4 flex flex-col bg-white">
      
      {/* Company branding at top */}
      <div className="flex items-center justify-center md:justify-start px-4 mb-6">
        <span className="text-xl font-bold text-orange-600 md:block hidden">
          DKM Enterprises
        </span>
      </div>

      {/* Menu items */}
      {menuItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link href={item.path} key={item.name} passHref>
            <div
              className={`flex items-center py-3 px-4 gap-3 cursor-pointer transition-colors duration-200
                ${
                  isActive
                    ? "bg-orange-100 text-orange-600 border-r-4 border-orange-600"
                    : "hover:bg-orange-50 hover:text-orange-600 border-white text-gray-700"
                } rounded-md mx-2 mb-1`}
            >
              <Image
                src={item.icon}
                alt={`${item.name.toLowerCase()}_icon`}
                className={`w-7 h-7 ${isActive ? "filter brightness-110" : ""}`}
              />
              <p className="md:block hidden font-medium">{item.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SideBar;
