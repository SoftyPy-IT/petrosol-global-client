import { Sun, Building2, Ship, Cpu, Truck, Lightbulb } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Solar Energy Solutions",
      desc: "Design, procurement, and large-scale deployment of renewable solar systems for industrial and commercial clients.",
      icon: Sun,
      tag: "Energy",
    },
    {
      title: "Infrastructure Development",
      desc: "End-to-end planning and execution of modern infrastructure projects across global markets.",
      icon: Building2,
      tag: "Infrastructure",
    },
    {
      title: "Ship Handling",
      desc: "Professional vessel coordination, berthing, and marine support services for commercial and industrial fleets.",
      icon: Ship,
      tag: "Maritime",
    },
    {
      title: "Berth Operating",
      desc: "Efficient berth scheduling, cargo coordination, and port operations management for seamless turnarounds.",
      icon: Cpu,
      tag: "Port Ops",
    },
    {
      title: "Logistics & Supply",
      desc: "Integrated global supply chain and logistics solutions ensuring timely, reliable delivery across sectors.",
      icon: Truck,
      tag: "Logistics",
    },
    {
      title: "Consulting & Strategy",
      desc: "Expert advisory in energy, human resources, and terminal management to accelerate sustainable growth.",
      icon: Lightbulb,
      tag: "Advisory",
    },
  ];

  return (
    <section className="relative py-10 overflow-hidden bg-(--background)">

      {/* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--primary-dark) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 z-10">

        {/* Header */}
        <div className="mb-16">

          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border"
            style={{
              background: "rgba(121,174,111,0.12)",
              borderColor: "var(--primary)",
            }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-dark)]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--primary-dark)]"
              style={{ fontFamily: "var(--font-body)" }}>
              What We Offer
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight text-[var(--text-dark)]"
              style={{ fontFamily: "var(--font-heading)", maxWidth: "560px" }}
            >
              Our Professional{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[var(--primary-dark)]">Services</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  style={{ height: "10px" }}
                >
                  <path
                    d="M2,8 Q50,2 100,7 Q150,12 198,5"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="text-sm leading-7 text-[var(--text-dark)] opacity-60 max-w-sm"
              style={{ fontFamily: "var(--font-body)" }}>
              Powering global progress through energy, maritime, infrastructure, and logistics expertise.
            </p>
          </div>

          <div className="mt-10 h-px"
            style={{
              background: "linear-gradient(90deg, var(--primary-dark), var(--primary), transparent)",
            }} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group relative bg-white rounded-2xl p-7 border border-[var(--border)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
                style={{ boxShadow: "0 2px 16px var(--shadow)" }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{ background: "rgba(159,203,152,0.06)" }}
                />
                <div
                  className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ background: "var(--primary-dark)" }}
                />

                <div className="relative flex items-start justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(121,174,111,0.15)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "var(--primary-dark)" }} strokeWidth={1.8} />
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(52,103,57,0.08)",
                      color: "var(--primary-dark)",
                      border: "1px solid rgba(52,103,57,0.18)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {service.tag}
                  </span>
                </div>

                <h3
                  className="text-lg font-semibold mb-3 text-[var(--text-dark)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-sm leading-7 mb-6"
                  style={{ color: "rgba(31,42,31,0.58)", fontFamily: "var(--font-body)" }}
                >
                  {service.desc}
                </p>
                <div
                  className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                  style={{ background: "var(--primary)" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
