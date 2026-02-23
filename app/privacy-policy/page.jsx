"use client";

import React from "react";
import Layout from "@/components/Layout"; 

const PrivacyPolicy = () => {
  return (
    <Layout>
    <div className="px-6 md:px-16 lg:px-32 py-16">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At <strong>DKM ENTERPRISES</strong>, we value your privacy and are committed
        to protecting your personal information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        1. Information We Collect
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Name, email, phone number, address</li>
        <li>Payment info via secure gateways</li>
        <li>Technical data (IP, browser, cookies)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Order processing</li>
        <li>Customer support</li>
        <li>Marketing (if opted in)</li>
        <li>Security & legal compliance</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
      <p>
        Email us at <strong>privacy@dkm.com</strong>
      </p>
    </div>
    </Layout>
  );
};

export default PrivacyPolicy;