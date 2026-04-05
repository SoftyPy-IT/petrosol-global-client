import Container from "@/app/components/shared/utils/Container"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { ServicePageData } from "./TIndustries"
import CountUp from "./CountUp"

export default function Industries({
  data,
}: {
  data: ServicePageData
}) {
  const {
    tag,
    hero,
    highlights,
    overview,
    capabilities,
    process,
    cta,
  } = data

  return (
    <main style={{ background: "var(--background)" }}>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ background: `url(${hero.image})` }}
      >

        <div className="absolute inset-0" style={{ background: "rgba(0, 0, 0, 0.5)" }} />

        <Container>
          <div className="relative py-28 md:py-36 max-w-3xl">

            {/* Tag pill */}
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-7 border"
              style={{
                background: "rgba(125,211,252,0.1)",
                borderColor: "rgba(125,211,252,0.3)",
                color: "var(--primary-light)",
              }}
            >
              <tag.icon className="w-3.5 h-3.5" />
              {tag.label}
            </div>

            <h1
              className="font-heading text-5xl md:text-7xl font-bold leading-[1.1] mb-6"
              style={{ color: "var(--text-light)" }}
            >
              {hero.title}
              <br />
              <span style={{ color: "var(--primary-light)" }}>{hero.highlight}</span>
            </h1>

            <p
              className="text-lg max-w-xl mb-10 leading-relaxed" style={{ color: "var(--text-light)" }}
            >
              {hero.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg transition-all text-sm hover:opacity-90 btn-primary"
              >
                {hero.primaryCta.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all text-sm border btn-secondary"
              >
                View Projects
              </Link>
            </div>

          </div>
        </Container>
      </section>

      {/* STATS */}
      <section
        style={{
          background: "var(--background)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {highlights.map(({ label, value }, i) => {
              const match = value.match(/^(\d+)(.*)$/)

              const number = match ? Number(match[1]) : 0
              const suffix = match ? match[2] : value

              return (
                <div
                  key={label}
                  className={`px-8 py-10 text-center ${i < 3 ? "border-r border-(--border)" : ""}`}
                >
                  <p
                    className="text-3xl font-bold mb-1"
                    style={{ color: "var(--primary-dark)" }}
                  >
                    <CountUp value={number} suffix={suffix} />
                  </p>

                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--text-dark)", opacity: 0.5 }}
                  >
                    {label}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>


      {/* OVERVIEW */}
      <section className="py-24" style={{ background: "var(--background)" }}>
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>
              <p
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-7 border"
                style={{
                  background: "var(--primary)",
                  borderColor: "var(--primary)",
                  color: "var(--text-light)",
                }}
              >
                Overview
              </p>
              <h2
                className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-6"
                style={{ color: "var(--text-dark)" }}
              >
                {overview.title}
                <br />{overview.subtitle}
              </h2>
              <p
                className="leading-relaxed mb-5 text-sm"
                style={{ color: "var(--text-dark)", opacity: 0.65 }}
              >
                {overview.description1}
              </p>
              <p
                className="leading-relaxed text-sm"
                style={{ color: "var(--text-dark)", opacity: 0.65 }}
              >
                {overview.description2}
              </p>
            </div>

            {/* Benefits card */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: "white",
                border: "1px solid var(--border)",
                boxShadow: "0 4px 24px var(--shadow)",
              }}
            >
              <p
                className="text-sm font-semibold mb-6"
                style={{ color: "var(--text-dark)" }}
              >
                What you get
              </p>
              <ul className="space-y-3.5">
                {overview.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: "var(--text-dark)", opacity: 0.75 }}
                  >
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 shrink-0"
                      style={{ color: "var(--primary-dark)" }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </Container>
      </section>

      {/* CAPABILITIES */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          background: "white",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-[0.08]"
          style={{
            backgroundImage: `repeating-linear-gradient(
        -45deg,
        var(--primary-dark) 0px,
        var(--primary-dark) 0.5px,
        transparent 0.5px,
        transparent 4px
      )`,
          }}
        />

        {/* Glow Effect */}
        <div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-15 z-0"
          style={{
            background:
              "radial-gradient(circle, var(--primary-light), transparent 65%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <Container>
            {/* Header */}
            <div className="text-center mb-16">
              <p
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-2 border"
                style={{
                  background: "var(--primary)",
                  borderColor: "var(--primary)",
                  color: "var(--text-light)",
                }}
              >
                Capabilities
              </p>

              <h2
                className="font-heading text-4xl md:text-5xl font-bold"
                style={{ color: "var(--text-dark)" }}
              >
                What We Deliver
              </h2>
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl p-6 transition-all duration-300 cursor-default hover:-translate-y-1"
                  style={{
                    background: "var(--background)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(52,103,57,0.1)" }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: "var(--primary-dark)" }}
                    />
                  </div>

                  <h3
                    className="font-semibold text-sm leading-snug mb-2"
                    style={{ color: "var(--text-dark)" }}
                  >
                    {title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-dark)", opacity: 0.55 }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </section>
      {/* PROCESS */}
      <section className="py-24" style={{ background: "var(--background)" }}>
        <Container>
          <div className="text-center mb-16">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "var(--primary)" }}
            >
              How It Works
            </p>
            <h2
              className="font-heading text-4xl md:text-5xl font-bold"
              style={{ color: "var(--text-dark)" }}
            >
              Our Process
            </h2>
          </div>

          <div className="relative">
            {/* Desktop connector line */}
            <div
              className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px"
              style={{ background: "var(--border)" }}
            />

            <div className="grid md:grid-cols-5 gap-10">
              {process.map(({ step, title, desc }) => (
                <div key={step} className="flex flex-col items-center text-center">
                  <div
                    className="w-14 h-14 rounded-full font-bold text-sm flex items-center justify-center mb-4 z-10 shrink-0"
                    style={{
                      background: "var(--primary-dark)",
                      color: "var(--text-light)",
                      boxShadow: "0 4px 16px rgba(52,103,57,0.3)",
                    }}
                  >
                    {step}
                  </div>
                  <h3
                    className="font-semibold text-sm mb-2"
                    style={{ color: "var(--text-dark)" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--text-dark)", opacity: 0.55 }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>


      {/* CTA */}
      <section className="py-20" style={{ background: "var(--primary-dark)" }}>
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h2
                className="font-heading text-4xl md:text-5xl font-bold mb-3"
                style={{ color: "var(--text-light)" }}
              >
                {cta.title}
              </h2>
              <p
                className="max-w-md text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {cta.description}
              </p>
            </div>
            <Link
              href={cta.button.href}
              className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all shrink-0 text-sm hover:opacity-90"
              style={{ background: "var(--primary-light)", color: "var(--primary-dark)" }}
            >
              {cta.button.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  )
}
