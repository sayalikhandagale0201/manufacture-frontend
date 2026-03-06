import { Suspense } from "react";
import AddProduct from "./AddProduct";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
      <AddProduct />
    </Suspense>
  );
}