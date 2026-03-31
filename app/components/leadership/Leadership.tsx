import React from "react";

export default function Leadership() {
  const leaders = [
    {
      name: "John Doe",
      role: "Chief Executive Officer",
      desc: "Leading global strategy and company vision with over 15 years of experience in energy and infrastructure.",
    },
    {
      name: "Sarah Khan",
      role: "Chief Operations Officer",
      desc: "Oversees operations, logistics, and project execution across international markets.",
    },
    {
      name: "Michael Lee",
      role: "Head of Engineering",
      desc: "Expert in large-scale infrastructure design and sustainable energy systems.",
    },
  ];

  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">

          <p className="text-[var(--primary-dark)] font-semibold">
            Our Leadership
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mt-2">
            Meet the Team Behind Our Success
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our experienced leadership team drives innovation, strategy, and global growth
            across all our operations.
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-[var(--background)] p-6 rounded-xl border border-[var(--border)] shadow-sm hover:shadow-md transition text-center group"
            >

              {/* Avatar placeholder */}
              <div className="w-20 h-20 mx-auto rounded-full bg-[var(--primary-light)] mb-4 flex items-center justify-center text-white text-xl font-bold group-hover:bg-[var(--primary)] transition">
                👤
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-[var(--primary-dark)]">
                {leader.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-gray-500">
                {leader.role}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-3 leading-6">
                {leader.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
