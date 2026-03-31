import React from "react";

export default function Partners() {
  const partners = [
    "Petro Energy Ltd",
    "Global Infra Group",
    "SunPower Systems",
    "Ocean Logistics Co",
    "GreenTech Solutions",
    "World Infrastructure Bank",
  ];

  return (
    <section className="bg-[var(--background)] py-24">

      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">

          <p className="text-[var(--primary-dark)] font-semibold">
            Trusted By
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mt-2">
            Our Global Partners
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We collaborate with leading companies and organizations worldwide
            to deliver sustainable energy and infrastructure solutions.
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">

          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white border border-[var(--border)] rounded-xl p-6 flex items-center justify-center text-center shadow-sm hover:shadow-md transition group"
            >

              {/* Logo placeholder */}
              <div className="text-sm font-semibold text-[var(--primary-dark)] group-hover:text-[var(--primary)] transition">
                {partner}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
