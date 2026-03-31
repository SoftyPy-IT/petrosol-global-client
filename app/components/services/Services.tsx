import React from "react";

export default function Services() {
  const services = [
    {
      title: "Solar Energy Solutions",
      desc: "Design and implementation of large-scale renewable solar energy systems.",
    },
    {
      title: "Infrastructure Development",
      desc: "Modern infrastructure planning and execution for global projects.",
    },
    {
      title: "Port Operations",
      desc: "Efficient and secure port management and logistics handling.",
    },
    {
      title: "Terminal Management",
      desc: "Smart terminal operations with optimized performance systems.",
    },
    {
      title: "Logistics Services",
      desc: "End-to-end supply chain and transportation solutions worldwide.",
    },
    {
      title: "Consulting & Strategy",
      desc: "Expert advisory for energy and infrastructure investments.",
    },
  ];

  return (
    <section className="bg-[var(--background)] py-24">

      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">

          <p className="text-[var(--primary-dark)] font-semibold">
            What We Offer
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mt-2">
            Our Professional Services
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We deliver world-class energy and infrastructure solutions designed
            to power global growth and sustainability.
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-[var(--border)] shadow-sm hover:shadow-md transition group"
            >

              {/* Icon placeholder */}
              <div className="w-12 h-12 rounded-lg bg-[var(--primary-light)] flex items-center justify-center mb-4 group-hover:bg-[var(--primary)] transition">
                ⚙️
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[var(--primary-dark)]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-2 leading-6">
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
