import React from "react";

export default function About() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* ================= IMAGE ================= */}
        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
            alt="About PetroSol Global"
            className="rounded-2xl shadow-lg border border-[var(--border)] w-full h-full object-cover"
          />

          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-[var(--primary-dark)] text-white p-4 rounded-xl shadow-md">
            <p className="text-sm">Trusted Company</p>
            <p className="text-lg font-bold">Global Standards</p>
          </div>

        </div>

        {/* ================= CONTENT ================= */}
        <div>

          <p className="text-[var(--primary-dark)] font-semibold mb-3">
            About PetroSol Global
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] leading-tight">
            Building Sustainable Infrastructure for a
            <span className="text-[var(--primary-dark)]"> Better Future</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-7">
            PetroSol Global is a leading energy and infrastructure company
            specializing in solar energy solutions, port operations,
            terminal management, and logistics services. We are committed to
            delivering innovation, sustainability, and long-term value across
            global markets.
          </p>

          <p className="mt-4 text-gray-600 leading-7">
            With a strong international presence, we focus on building
            reliable systems that power industries and support global growth.
          </p>

          {/* Features */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="p-4 rounded-lg border border-[var(--border)]">
              <h4 className="font-semibold text-[var(--primary-dark)]">
                Innovation
              </h4>
              <p className="text-sm text-gray-600">
                Advanced energy and infrastructure solutions.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-[var(--border)]">
              <h4 className="font-semibold text-[var(--primary-dark)]">
                Sustainability
              </h4>
              <p className="text-sm text-gray-600">
                Eco-friendly and long-term focused projects.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-[var(--border)]">
              <h4 className="font-semibold text-[var(--primary-dark)]">
                Global Reach
              </h4>
              <p className="text-sm text-gray-600">
                Operations across multiple countries.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-[var(--border)]">
              <h4 className="font-semibold text-[var(--primary-dark)]">
                Reliability
              </h4>
              <p className="text-sm text-gray-600">
                Trusted by international partners.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
