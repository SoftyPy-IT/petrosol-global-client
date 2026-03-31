import Image from "next/image";

export default function About() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">

      {/* 🔥 TOP SVG SHAPE */}
      <div className="absolute top-0 left-0 w-full -z-10">
        <svg
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="rgba(121,174,111,0.15)"
            d="M0,160L80,165.3C160,171,320,181,480,165.3C640,149,800,107,960,112C1120,117,1280,171,1360,197.3L1440,224V0H0Z"
          ></path>
        </svg>
      </div>

      {/* 🔥 BOTTOM SVG SHAPE */}
      <div className="absolute bottom-0 left-0 w-full -z-10">
        <svg
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="rgba(52,103,57,0.08)"
            d="M0,96L80,117.3C160,139,320,181,480,186.7C640,192,800,160,960,144C1120,128,1280,128,1360,128L1440,128V320H0Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* ================= IMAGE ================= */}
        <div className="relative h-[400px] md:h-[500px]">

          <Image
            src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
            alt="About PetroSol Global"
            fill
            className="rounded-2xl shadow-lg border border-[var(--border)] object-cover"
          />

          {/* Floating Badge */}
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

          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] leading-tight font-[var(--font-heading)]">
            Building Sustainable Infrastructure for a
            <span className="text-[var(--primary-dark)]"> Better Future</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-7">
            PetroSol Global is a leading energy and infrastructure company
            specializing in solar energy solutions, port operations,
            terminal management, and logistics services.
          </p>

          <p className="mt-4 text-gray-600 leading-7">
            We are committed to innovation, sustainability, and delivering
            long-term value across global markets.
          </p>

          {/* Features */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="p-4 rounded-lg bg-white border border-[var(--border)] shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-[var(--primary-dark)]">
                Innovation
              </h4>
              <p className="text-sm text-gray-600">
                Advanced energy and infrastructure solutions.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white border border-[var(--border)] shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-[var(--primary-dark)]">
                Sustainability
              </h4>
              <p className="text-sm text-gray-600">
                Eco-friendly and long-term focused projects.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white border border-[var(--border)] shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-[var(--primary-dark)]">
                Global Reach
              </h4>
              <p className="text-sm text-gray-600">
                Operations across multiple countries.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white border border-[var(--border)] shadow-sm hover:shadow-md transition">
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
