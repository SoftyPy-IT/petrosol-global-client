import React from "react";

export default function Blog() {
  const posts = [
    {
      title: "The Future of Renewable Energy in Infrastructure",
      desc: "How solar and wind energy are reshaping global infrastructure development.",
      date: "Jan 12, 2026",
    },
    {
      title: "Smart Logistics in Global Supply Chains",
      desc: "Digital transformation in logistics and port management systems.",
      date: "Dec 28, 2025",
    },
    {
      title: "Sustainable Energy Projects Around the World",
      desc: "A look into major renewable energy projects driving global impact.",
      date: "Dec 10, 2025",
    },
  ];

  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">

          <p className="text-[var(--primary-dark)] font-semibold">
            Latest Insights
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mt-2">
            News & Blog
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore industry insights, company updates, and global energy trends.
          </p>

        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-[var(--background)] border border-[var(--border)] rounded-xl p-6 shadow-sm hover:shadow-md transition group"
            >

              {/* Date */}
              <p className="text-xs text-gray-500 mb-2">
                {post.date}
              </p>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[var(--primary-dark)] group-hover:text-[var(--primary)] transition">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-3 leading-6">
                {post.desc}
              </p>

              {/* Read More */}
              <button className="mt-5 text-sm font-medium text-[var(--primary-dark)] hover:text-[var(--primary)] transition">
                Read More →
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
