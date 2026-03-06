import { Suspense } from "react";
import SearchClient from "./SearchClient";

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <p className="text-lg animate-pulse">Loading search results...</p>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <SearchClient />
    </Suspense>
  );
}