import React from "react";

export default function Stats() {
  const stats = [
    {
      number: "10+",
      label: "Years Experience",
    },
    {
      number: "50+",
      label: "Global Projects",
    },
    {
      number: "20+",
      label: "International Partners",
    },
    {
      number: "100%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <section className="bg-[var(--primary-dark)] py-20">

      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {stats.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.08)] transition"
            >

              {/* Number */}
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {item.number}
              </h2>

              {/* Label */}
              <p className="text-sm text-[rgba(255,255,255,0.75)] mt-2">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
