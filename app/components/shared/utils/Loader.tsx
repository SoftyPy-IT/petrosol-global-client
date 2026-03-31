import React from "react";

export default function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-(--background)">

      <div className="flex flex-col items-center gap-4">

        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-(--primary-light) border-t-(--primary-dark) rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-(--primary-dark) font-medium">
          Loading...
        </p>

      </div>

    </div>
  );
}
