"use client";

import React from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-(--background) px-4">

      <div className="max-w-md w-full text-center bg-white p-8 rounded-xl shadow-md border border-(--border)">

        {/* Icon */}
        <div className="text-5xl mb-4">⚠️</div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-(--primary-dark) mb-2">
          Something went wrong
        </h1>

        {/* Message */}
        <p className="text-sm text-gray-600 mb-6">
          We encountered an unexpected error. Please try again.
        </p>

        {/* Dev error (optional debug info) */}
        {error?.message && (
          <p className="text-xs text-red-500 mb-4">
            {error.message}
          </p>
        )}

        {/* Retry button */}
        <button
          onClick={() => reset()}
          className="bg-(--primary-dark) text-white px-5 py-2 rounded-lg hover:bg-(--primary) transition"
        >
          Try Again
        </button>

      </div>
    </div>
  );
}
