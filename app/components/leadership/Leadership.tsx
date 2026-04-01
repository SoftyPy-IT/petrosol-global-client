"use client";

import { User2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";

export default function Leadership() {
  const leaders = [
    {
      name: "Mr H M Saif Ali Khan",
      role: "Chairman",
      desc: "Provides strategic leadership and long-term vision, ensuring strong corporate governance and sustainable organizational growth.",
    },
    {
      name: "Mr Mahfuzur Rahman",
      role: "Managing Director",
      desc: "Leads overall business operations, driving execution excellence, operational efficiency, and sustainable business expansion.",
    },
    {
      name: "Mr Fakir Selim",
      role: "Director",
      desc: "Oversees strategic initiatives and contributes to high-level decision-making for organizational development and growth.",
    },
    {
      name: "Mr Azizur Rahman",
      role: "Director",
      desc: "Supports corporate governance and plays a key role in shaping business strategy and long-term value creation.",
    },
    {
      name: "Mr Md Asraful Arafin",
      role: "Director",
      desc: "Contributes to operational strategy and ensures alignment between business planning and execution across departments.",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-white">

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--primary-dark) 1px, transparent 1px)`,
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 z-10">

        {/* Header */}
        <div className="mb-16">

          <div
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border"
            style={{
              background: "rgba(121,174,111,0.12)",
              borderColor: "var(--primary)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-dark)]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--primary-dark)]">
              Leadership Team
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

            <h2
              className="text-4xl md:text-5xl font-bold leading-tight text-[var(--text-dark)]"
              style={{ fontFamily: "var(--font-heading)", maxWidth: "560px" }}
            >
              Meet Our{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[var(--primary-dark)]">
                  Leadership
                </span>
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

            <p
              className="text-sm leading-7 text-[var(--text-dark)] opacity-60 max-w-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Our leadership team brings together decades of experience in
              strategy, operations, and innovation to drive sustainable global growth.
            </p>
          </div>

          <div
            className="mt-10 h-px"
            style={{
              background:
                "linear-gradient(90deg, var(--primary-dark), var(--primary), transparent)",
            }}
          />
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          speed={3000}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {leaders.map((leader, i) => (
            <SwiperSlide key={i}>
              <div className="group relative bg-white rounded-2xl p-7 border hover:shadow-md transition">

                {/* Avatar + Role */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-green-100">
                    <User2 className="w-6 h-6 text-green-700" />
                  </div>

                  <span className="text-xs font-semibold uppercase px-3 py-1 rounded-full bg-green-50 text-green-800">
                    {leader.role}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold mb-2 text-[var(--text-dark)]">
                  {leader.name}
                </h3>

                {/* Description */}
                <p className="text-sm leading-6 text-gray-600">
                  {leader.desc}
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
