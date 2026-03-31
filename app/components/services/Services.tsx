
import {
  Sun,
  Building2,
  Ship,
  Cpu,
  Truck,
  Lightbulb,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Solar Energy Solutions",
      desc: "Design and implementation of large-scale renewable solar systems.",
      icon: Sun,
    },
    {
      title: "Infrastructure Development",
      desc: "Modern infrastructure planning and execution globally.",
      icon: Building2,
    },
    {
      title: "Port Operations",
      desc: "Efficient and secure port and logistics management.",
      icon: Ship,
    },
    {
      title: "Terminal Management",
      desc: "Smart terminal operations with optimized systems.",
      icon: Cpu,
    },
    {
      title: "Logistics Services",
      desc: "End-to-end global supply chain solutions.",
      icon: Truck,
    },
    {
      title: "Consulting & Strategy",
      desc: "Expert advisory for energy and infrastructure growth.",
      icon: Lightbulb,
    },
  ];

  return (
    <section className="relative py-24 bg-[var(--background)] overflow-hidden">

      {/* 🔥 Abstract Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--primary-light)] blur-3xl opacity-20 rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--primary)] blur-3xl opacity-20 rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">

          <p className="text-[var(--primary-dark)] font-semibold">
            What We Offer
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mt-2 font-[var(--font-heading)]">
            Our Professional Services
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Delivering innovative energy, infrastructure, and logistics solutions
            to power global progress.
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-lg p-6 rounded-2xl border border-[var(--border)] shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
              >

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[var(--primary-light)] flex items-center justify-center mb-5 group-hover:bg-[var(--primary)] transition">

                  <Icon className="w-6 h-6 text-white" />

                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[var(--primary-dark)]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mt-3 leading-6">
                  {service.desc}
                </p>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[var(--primary-dark)] group-hover:w-full transition-all duration-300 rounded-b-xl"></div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
