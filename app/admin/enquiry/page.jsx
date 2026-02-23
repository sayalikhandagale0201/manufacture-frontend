"use client";
import React, { useEffect, useState } from "react";
import Loading from "@/components/Loading";

const EnquiryTable = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/enquiries/admin");
        const data = await res.json();
        setEnquiries(Array.isArray(data) ? data : data.enquiries || []);
      } catch (err) {
        console.error(err);
        setEnquiries([]);
      } finally {
        setLoading(false);
      }
    };
    fetchEnquiries();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="flex-1 min-h-screen p-4 bg-white-50">
      <h1 className="text-2xl font-semibold mb-5">Enquiries</h1>

      {/* Horizontal scroll container */}
      <div className="overflow-x-auto border border-gray-300 rounded-lg bg-white shadow-sm">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Phone</th>
              <th className="px-4 py-2 border">Enquiry Type</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Material</th>
              <th className="px-4 py-2 border">Message</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.length > 0 ? (
              enquiries.map((e) => (
                <tr key={e.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{e.name}</td>
                  <td className="px-4 py-2 border">{e.phone}</td>
                  <td className="px-4 py-2 border">{e.enquiryType || e.enquiry_type}</td>
                  <td className="px-4 py-2 border">{e.email}</td>
                  <td className="px-4 py-2 border">{e.product}</td>
                  <td className="px-4 py-2 border max-w-xs truncate">{e.message}</td>
                  <td className="px-4 py-2 border">
                    {e.date
                      ? new Date(e.date).toLocaleString("en-IN", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })
                      : "-"}
                  </td>
                  <td className="px-4 py-2 border">{e.status || "Pending"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center py-6 text-gray-500">
                  No enquiries found.
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