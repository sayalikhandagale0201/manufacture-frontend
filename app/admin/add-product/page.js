export const dynamic = "force-dynamic";

import { Suspense } from "react";
import AddProductClient from "./AddProductClient";

export default function AddProductPage() {
  return (
    <Suspense fallback={<div className="p-10">Loading...</div>}>
      <AddProductClient />
    </Suspense>
  );
}