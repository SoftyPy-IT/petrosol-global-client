"use client";
import {
  Sun, Building2, Zap, Ship, Leaf, DollarSign, Truck, ArrowUpRight,
} from "lucide-react";

const partners = [
  { name: "Petro Energy Ltd", type: "Energy", accent: "#F59E0B", Icon: Sun },
  { name: "Global Infra Group", type: "Infrastructure", accent: "#3B82F6", Icon: Building2 },
  { name: "SunPower Systems", type: "Solar", accent: "#EF4444", Icon: Zap },
  { name: "Ocean Logistics Co", type: "Maritime", accent: "#0EA5E9", Icon: Ship },
  { name: "GreenTech Solutions", type: "Sustainability", accent: "#10B981", Icon: Leaf },
  { name: "World Infrastructure Bank", type: "Finance", accent: "#8B5CF6", Icon: DollarSign },
  { name: "Delta Port Corp", type: "Port Ops", accent: "#346739", Icon: Truck },
  { name: "Apex Energy Corp", type: "Energy", accent: "#F59E0B", Icon: Zap },
];

const stats = [
  { num: "50+", label: "Partners" },
  { num: "15+", label: "Countries" },
  { num: "$2B+", label: "Projects Delivered" },
  { num: "12", label: "Years Active" },
];

function PartnerCard({ p }: { p: typeof partners[0] }) {
  const { Icon } = p;
  return (
    <div
      className="flex-shrink-0 w-48 bg-white border border-[var(--border)] rounded-2xl p-5 flex flex-col items-center gap-2.5 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-default"
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center"
        style={{ background: `${p.accent}18`, border: `1px solid ${p.accent}28` }}
      >
        <Icon size={18} style={{ color: p.accent }} strokeWidth={1.8} />
      </div>
      <div className="text-center">
        <p className="text-xs font-bold leading-tight text-[var(--text-dark)]"
          style={{ fontFamily: "var(--font-body)" }}>
          {p.name}
        </p>
        <p className="text-[10px] font-semibold uppercase tracking-widest mt-0.5"
          style={{ color: p.accent, fontFamily: "var(--font-body)" }}>
          {p.type}
        </p>
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: typeof partners; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--background), transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--background), transparent)" }} />

      <div
        className="flex gap-4"
        style={{
          width: "max-content",
          animation: `${reverse ? "marquee-r" : "marquee"} ${reverse ? 36 : 28}s linear infinite`,
        }}
      >
        {doubled.map((p, i) => <PartnerCard key={i} p={p} />)}
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <section className="relative bg-[var(--background)] py-10 overflow-hidden">

      {/* Dot texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(var(--primary-dark) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border"
            style={{ background: "rgba(121,174,111,0.14)", borderColor: "var(--primary)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--primary-dark)" }} />
            <span className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "var(--primary-dark)", fontFamily: "var(--font-body)" }}>
              Trusted By
            </span>
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "var(--text-dark)", fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}
          >
            Our Global{" "}
            <span className="relative inline-block" style={{ color: "var(--primary-dark)" }}>
              Partners
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8"
                preserveAspectRatio="none" style={{ height: "8px" }}>
                <path d="M2,6 Q50,1 100,5 Q150,9 198,3"
                  fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 max-w-md mx-auto"
            style={{ color: "rgba(31,42,31,0.55)", fontFamily: "var(--font-body)" }}>
            We collaborate with leading companies and organisations worldwide to deliver
            sustainable energy and infrastructure solutions.
          </p>
        </div>


        {/* Marquee rows */}
        <div className="flex flex-col gap-4">
          <MarqueeRow items={partners.slice(0, 5)} />
          <MarqueeRow items={partners.slice(3)} reverse />
        </div>

      </div>

      {/* Keyframe animations */}
      <style jsx global>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-r {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

    </section>
  );
}
