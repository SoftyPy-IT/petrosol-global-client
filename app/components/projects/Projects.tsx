import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Solar Power Plant - Dhaka",
      desc: "Large-scale solar energy installation for sustainable power generation.",
      tag: "Energy",
    },
    {
      title: "Chittagong Port Expansion",
      desc: "Modernization and expansion of port infrastructure and logistics systems.",
      tag: "Infrastructure",
    },
    {
      title: "Industrial Terminal System",
      desc: "Smart terminal management system for efficient cargo handling.",
      tag: "Logistics",
    },
    {
      title: "Green Energy Initiative",
      desc: "Renewable energy transition project for industrial zones.",
      tag: "Sustainability",
    },
    {
      title: "Global Supply Chain Network",
      desc: "Optimized logistics network connecting multiple countries.",
      tag: "Global",
    },
    {
      title: "Smart Infrastructure System",
      desc: "AI-powered infrastructure monitoring and management system.",
      tag: "Technology",
    },
  ];

  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">

          <p className="text-[var(--primary-dark)] font-semibold">
            Our Work
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mt-2">
            Featured Projects
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A showcase of our global energy, infrastructure, and logistics projects
            delivering long-term value and innovation.
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[var(--background)] p-6 rounded-xl border border-[var(--border)] shadow-sm hover:shadow-md transition"
            >

              {/* Image placeholder */}
              <div className="h-40 rounded-lg bg-[var(--primary-light)] mb-4 flex items-center justify-center text-white font-semibold">
                Project Image
              </div>

              {/* Tag */}
              <span className="text-xs px-3 py-1 rounded-full bg-[var(--primary-dark)] text-white">
                {project.tag}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[var(--primary-dark)] mt-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-2 leading-6">
                {project.desc}
              </p>

              {/* Button */}
              <button className="mt-4 text-sm text-[var(--primary-dark)] font-medium hover:text-[var(--primary)] transition">
                View Details →
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
