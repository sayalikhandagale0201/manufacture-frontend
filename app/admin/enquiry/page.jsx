"use client";
import React, { useEffect, useState } from "react";
import Loading from "@/components/Loading";

const EnquiryTable = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const res = await fetch(`${API_URL}/api/enquiries/admin`);
        if (!res.ok) {
          console.error("Failed to fetch enquiries:", res.status);
          setEnquiries([]);
          return;
        }

        const data = await res.json();
        setEnquiries(Array.isArray(data) ? data : data?.enquiries || []);
      } catch (err) {
        console.error("Error fetching enquiries:", err);
        setEnquiries([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, [API_URL]);

  if (loading) return <Loading />;

  return (
    <div className="flex-1 min-h-screen p-3 sm:p-6 bg-gray-50">
      <h1 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Enquiries</h1>

      <div className="w-full overflow-x-auto border border-gray-200 rounded-lg bg-white shadow-sm">
        <table className="min-w-[900px] w-full text-xs sm:text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 sm:px-4 py-2 border">Name</th>
              <th className="px-3 sm:px-4 py-2 border">Phone</th>
              <th className="px-3 sm:px-4 py-2 border">Type</th>
              <th className="px-3 sm:px-4 py-2 border">Email</th>
              <th className="px-3 sm:px-4 py-2 border">Material</th>
              <th className="px-3 sm:px-4 py-2 border">Message</th>
              <th className="px-3 sm:px-4 py-2 border">Date</th>
              <th className="px-3 sm:px-4 py-2 border">Status</th>
            </tr>
          </thead>

          <tbody>
            {enquiries.length > 0 ? (
              enquiries.map((e) => (
                <tr key={e.id} className="hover:bg-gray-50">
                  <td className="px-3 sm:px-4 py-2 border whitespace-nowrap">{e.name}</td>
                  <td className="px-3 sm:px-4 py-2 border whitespace-nowrap">{e.phone}</td>
                  <td className="px-3 sm:px-4 py-2 border whitespace-nowrap">{e.enquiryType || e.enquiry_type}</td>
                  <td className="px-3 sm:px-4 py-2 border">{e.email}</td>
                  <td className="px-3 sm:px-4 py-2 border">{e.product}</td>
                  <td className="px-3 sm:px-4 py-2 border max-w-[200px] truncate">{e.message}</td>
                  <td className="px-3 sm:px-4 py-2 border whitespace-nowrap">
                    {e.date
                      ? new Date(e.date).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })
                      : "-"}
                  </td>
                  <td className="px-3 sm:px-4 py-2 border whitespace-nowrap">{e.status || "Pending"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center py-6 text-gray-500">
                  No enquiries found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnquiryTable;