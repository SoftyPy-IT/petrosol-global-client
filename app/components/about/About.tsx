import Image from "next/image";
import { Layers } from "lucide-react";

export default function About() {
  const features = [
    { title: "Innovation", desc: "Advanced energy and infrastructure solutions." },
    { title: "Sustainability", desc: "Eco-friendly and long-term focused projects." },
    { title: "Global Reach", desc: "Operations across multiple countries." },
    { title: "Reliability", desc: "Trusted by international partners." },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white">

      {/* Wave — top */}
      <div className="absolute top-0 left-0 w-full -z-10 pointer-events-none">
        <svg viewBox="0 0 1440 160" className="w-full" style={{ height: "80px" }} preserveAspectRatio="none">
          <path fill="rgba(121,174,111,0.13)"
            d="M0,80L80,85C160,91,320,101,480,90C640,79,800,47,960,50C1120,53,1280,91,1360,107L1440,122V0H0Z" />
        </svg>
      </div>

      {/* Wave — bottom */}
      <div className="absolute bottom-0 left-0 w-full -z-10 pointer-events-none">
        <svg viewBox="0 0 1440 160" className="w-full" style={{ height: "80px" }} preserveAspectRatio="none">
          <path fill="rgba(52,103,57,0.07)"
            d="M0,48L80,58C160,69,320,91,480,93C640,96,800,80,960,72C1120,64,1280,64,1360,64L1440,64V160H0Z" />
        </svg>
      </div>

      {/* Dot texture */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(var(--primary-dark) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 60% 70% at 80% 50%, black 30%, transparent 80%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-14 items-center z-10">

        {/* ── IMAGE COLUMN ── */}
        <div className="relative">

          {/* Top-left stat chip */}
          <div className="absolute -top-5 -left-5 z-20 bg-white border border-[var(--border)] rounded-2xl px-4 py-3 shadow-md flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(121,174,111,0.15)" }}>
              <Layers size={16} style={{ color: "var(--primary-dark)" }} strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-lg font-bold leading-none" style={{ color: "var(--primary-dark)", fontFamily: "var(--font-heading)" }}>10+</p>
              <p className="text-[11px] mt-0.5 tracking-wide uppercase" style={{ color: "rgba(31,42,31,0.5)", fontFamily: "var(--font-body)" }}>
                Countries Served
              </p>
            </div>
          </div>

          {/* Main image */}
          <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-[var(--border)] shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80"
              alt="PetroSol Global operations"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom-right floating badge */}
          <div
            className="absolute -bottom-5 -right-5 z-20 rounded-2xl p-4 shadow-lg"
            style={{ background: "var(--primary-dark)", minWidth: "175px" }}
          >
            <p className="text-[11px] uppercase tracking-widest opacity-70 text-white"
              style={{ fontFamily: "var(--font-body)" }}>
              Trusted Company
            </p>
            <p className="text-lg font-bold text-white mt-0.5"
              style={{ fontFamily: "var(--font-heading)" }}>
              Global Standards
            </p>
          </div>

        </div>

        {/* ── CONTENT COLUMN ── */}
        <div className="pt-4 md:pt-0">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border"
            style={{ background: "rgba(121,174,111,0.12)", borderColor: "var(--primary)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--primary-dark)" }} />
            <span className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "var(--primary-dark)", fontFamily: "var(--font-body)" }}>
              About Us
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight mb-5"
            style={{ color: "var(--text-dark)", fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}
          >
            Building Sustainable Infrastructure for a{" "}
            <span className="relative inline-block" style={{ color: "var(--primary-dark)" }}>
              Better Future
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 9"
                preserveAspectRatio="none" style={{ height: "9px" }}>
                <path d="M2,7 Q50,1 100,6 Q150,11 198,4"
                  fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          {/* Body */}
          <p className="text-sm leading-7 mb-3" style={{ color: "rgba(31,42,31,0.6)", fontFamily: "var(--font-body)" }}>
            PetroSol Global is a leading energy and infrastructure company specialising in solar energy solutions, supply chain management, ship handling, berth operating, human resources, and terminal operating management.
          </p>
          <p className="text-sm leading-7" style={{ color: "rgba(31,42,31,0.6)", fontFamily: "var(--font-body)" }}>
            We are committed to innovation, sustainability, and delivering long-term value across global markets — partnering with governments, port authorities, and enterprises worldwide.
          </p>

          {/* Divider */}
          <div className="my-6 h-px"
            style={{ background: "linear-gradient(90deg, var(--primary-dark), var(--primary), transparent)" }} />

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((f, i) => (
              <div key={i}
                className="relative bg-white border border-[var(--border)] rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden"
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 w-[3px] h-full rounded-l-xl"
                  style={{ background: "var(--primary)" }} />
                <h4 className="text-sm font-bold mb-1 pl-1" style={{ color: "var(--primary-dark)", fontFamily: "var(--font-body)" }}>
                  {f.title}
                </h4>
                <p className="text-xs leading-relaxed pl-1" style={{ color: "rgba(31,42,31,0.55)", fontFamily: "var(--font-body)" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
