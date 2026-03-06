import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[60vh] md:min-h-[70vh] gap-4">

      {/* Spinner */}
      <div className="animate-spin rounded-full 
        h-12 w-12 
        sm:h-14 sm:w-14 
        md:h-16 md:w-16 
        lg:h-20 lg:w-20 
        border-4 border-gray-200 border-t-orange-500">
      </div>

      {/* Optional text */}
      <p className="text-sm md:text-base text-gray-500">
        Loading...
      </p>

    </div>
  );
};

export default Loading;