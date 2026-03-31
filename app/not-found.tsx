import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-(--background) px-4">

      <div className="text-center">

        {/* Icon */}
        <div className="text-6xl mb-4">🔍</div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-(--primary-dark) mb-2">
          404 - Page Not Found
        </h1>

        {/* Message */}
        <p className="text-sm text-gray-600 mb-6">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block bg-(--primary-dark) text-white px-6 py-2 rounded-lg hover:bg-(--primary) transition"
        >
          Go Home
        </Link>

      </div>
    </div>
  );
}
