import React from "react"
import Managing_Body_Card from "./Managing_Body_Card"
import Container from "@/app/components/shared/utils/Container"

export default function Managing_Body() {
  const members = [
    {
      priority_index: 1,
      name: "Mr H M Saif Ali Khan",
      role: "Chairman",
      description: "Provides strategic leadership and overall direction for the organization.",
    },
    {
      priority_index: 1,
      name: "Mr Mahfuzur Rahman",
      role: "Managing Director",
      description: "Oversees company operations and ensures business goals are achieved.",
    },
    {
      priority_index: 2,
      name: "Mr Fakir Selim",
      role: "Director",
      description: "Contributes to decision-making and organizational governance.",
    },
    {
      priority_index: 2,
      name: "Mr Azizur Rahman",
      role: "Director",
      description: "Supports strategic planning and policy implementation.",
    },
    {
      priority_index: 2,
      name: "Mr Md Asraful Arafin",
      role: "Director",
      description: "Assists in guiding company direction and growth initiatives.",
    },
  ]

  const first = members.filter(m => m.priority_index === 1)
  const second = members.filter(m => m.priority_index === 2)

  return (
    <section className="relative py-16 overflow-hidden bg-(--background)">

      {/* 🔥 Background Pattern (same as Services) */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--primary-dark) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <Container className="relative z-10 space-y-12">

        {/* 🔹 Header */}
        <div className="text-center space-y-4">

          {/* Small Tag */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border"
            style={{
              background: "rgba(121,174,111,0.12)",
              borderColor: "var(--primary)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-dark)]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--primary-dark)]">
              Leadership
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-4xl md:text-5xl font-bold text-[var(--text-dark)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Managing{" "}
            <span className="text-[var(--primary-dark)]">Body</span>
          </h2>

          {/* Description */}
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Meet the leadership team guiding our vision and driving organizational success.
          </p>

          {/* Gradient Divider */}
          <div
            className="mx-auto mt-6 h-px w-40"
            style={{
              background:
                "linear-gradient(90deg, var(--primary-dark), var(--primary), transparent)",
            }}
          />
        </div>

        {/* 🔹 Level 1 */}
        <div className="flex flex-wrap justify-center gap-6">
          {first.map((member) => (
            <Managing_Body_Card key={member.name} {...member} />
          ))}
        </div>

        {/* 🔹 Level 2 */}
        <div className="flex flex-wrap justify-center gap-6">
          {second.map((member) => (
            <Managing_Body_Card key={member.name} {...member} />
          ))}
        </div>

      </Container>
    </section>
  )
}
