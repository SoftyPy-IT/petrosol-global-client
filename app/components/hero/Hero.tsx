import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-(--background)">

      <div className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* ================= LEFT CONTENT ================= */}
        <div>

          <p className="text-[var(--primary-dark)] font-semibold mb-3">
            Energy • Infrastructure • Global Solutions
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--text-dark)]">
            Powering the Future of <br />
            <span className="text-[var(--primary-dark)]">
              Sustainable Energy
            </span>
          </h1>

          <p className="mt-6 text-[var(--text-dark)]/80 text-base leading-7">
            PetroSol Global delivers world-class solutions in solar energy,
            infrastructure development, port operations, and logistics —
            building a smarter and greener future worldwide.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="/projects"
              className="bg-[var(--primary-dark)] text-white px-6 py-3 rounded-lg hover:bg-[var(--primary)] transition"
            >
              Explore Projects
            </a>

            <a
              href="/contact"
              className="border border-[var(--primary-dark)] text-[var(--primary-dark)] px-6 py-3 rounded-lg hover:bg-[var(--primary-dark)] hover:text-white transition"
            >
              Contact Us
            </a>

          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 text-center">

            <div>
              <h3 className="text-2xl font-bold text-[var(--primary-dark)]">10+</h3>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[var(--primary-dark)]">50+</h3>
              <p className="text-sm text-gray-600">Global Projects</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[var(--primary-dark)]">20+</h3>
              <p className="text-sm text-gray-600">Partners</p>
            </div>

          </div>

        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative">

          <div className="rounded-2xl overflow-hidden shadow-lg border border-[var(--border)]">

            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
              alt="Energy Infrastructure"
              className="w-full h-full object-cover"
            />

          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-md border border-[var(--border)]">

            <p className="text-sm text-gray-600">Active Projects</p>
            <p className="text-xl font-bold text-[var(--primary-dark)]">24/7 Global Operations</p>

          </div>

        </div>

      </div>

    </section>
  );
}
