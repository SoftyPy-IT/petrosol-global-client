import Container from '@/app/components/shared/utils/Container'
import React from 'react'

export default function Mission_Vision_Goal() {
  const data = [
    {
      title: "Our Goal",
      description:
        "Our goal is to create meaningful solutions that simplify lives, empower users, and deliver consistent value through innovation and technology.",
    },
    {
      title: "Our Vision",
      description:
        "We envision a future where technology seamlessly integrates with everyday life, making processes smarter, faster, and more accessible for everyone.",
    },
    {
      title: "Our Mission",
      description:
        "Our mission is to build high-quality, user-focused products while maintaining integrity, creativity, and a commitment to continuous improvement.",
    },
  ]

  return (
    <section className="relative py-16 overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(var(--primary-dark) 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
        maskImage:
          "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
      }}>

      <Container>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <div
              key={item.title}
              className="card text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Title */}
              <h2 className="text-xl md:text-2xl font-heading text-primary-dark mb-3">
                {item.title}
              </h2>

              {/* Divider */}
              <div className="w-12 h-1 bg-primary mx-auto mb-4 rounded-full" />

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
