"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const ALL_TAGS = ["All", "Energy", "Infrastructure", "Logistics", "Sustainability", "Technology"];

const projects = [
  {
    title: "Solar Power Plant – Dhaka",
    desc: "Large-scale solar energy installation for sustainable power generation across industrial zones.",
    tag: "Energy",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
  },
  {
    title: "Chittagong Port Expansion",
    desc: "Modernization and expansion of port infrastructure, berth systems, and logistics networks.",
    tag: "Infrastructure",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
  },
  {
    title: "Industrial Terminal System",
    desc: "Smart terminal management system for efficient and automated cargo handling operations.",
    tag: "Logistics",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
  {
    title: "Green Energy Initiative",
    desc: "Renewable energy transition project for industrial zones cutting carbon output by 40%.",
    tag: "Sustainability",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
  },
  {
    title: "Global Supply Chain Network",
    desc: "Optimized logistics network connecting multiple countries with real-time tracking.",
    tag: "Logistics",
    img: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=600&q=80",
  },
  {
    title: "Smart Infrastructure System",
    desc: "AI-powered infrastructure monitoring and predictive maintenance platform.",
    tag: "Technology",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  },
];

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");
  const swiperRef = useRef<any>(null);

  const filtered = activeTag === "All" ? projects : projects.filter((p) => p.tag === activeTag);

  // Reset swiper to first slide when filter changes
  useEffect(() => {
    swiperRef.current?.swiper?.slideTo(0);
  }, [activeTag]);

  return (
    <section className="relative bg-white py-10 overflow-hidden">

      {/* Dot texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.09]"
        style={{
          backgroundImage: "radial-gradient(var(--primary-dark) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border"
            style={{ background: "rgba(121,174,111,0.12)", borderColor: "var(--primary)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--primary-dark)" }} />
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "var(--primary-dark)", fontFamily: "var(--font-body)" }}
            >
              Our Work
            </span>
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "var(--text-dark)", fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}
          >
            Featured{" "}
            <span className="relative inline-block" style={{ color: "var(--primary-dark)" }}>
              Projects
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
                style={{ height: "8px" }}
              >
                <path
                  d="M2,6 Q50,1 100,5 Q150,9 198,3"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p
            className="mt-4 text-sm leading-7 max-w-xl mx-auto"
            style={{ color: "rgba(31,42,31,0.55)", fontFamily: "var(--font-body)" }}
          >
            A showcase of our global energy, infrastructure, and logistics projects
            delivering long-term value and innovation.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className="px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase border transition-all duration-200"
              style={{
                fontFamily: "var(--font-body)",
                background: activeTag === tag ? "var(--primary-dark)" : "transparent",
                borderColor: activeTag === tag ? "var(--primary-dark)" : "var(--border)",
                color: activeTag === tag ? "#fff" : "rgba(31,42,31,0.55)",
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Swiper */}
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: true }}
          breakpoints={{
            560: { slidesPerView: 2 },
            860: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: "48px" }}
          key={activeTag} // re-mount on filter change
        >
          {filtered.map((project, i) => (
            <SwiperSlide key={i}>
              <div className="group bg-white rounded-2xl overflow-hidden border border-(--border) shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 h-full flex flex-col">

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(31,42,31,0.5) 0%, transparent 60%)" }} />
                  <span
                    className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                    style={{ background: "var(--primary-dark)", color: "#fff", fontFamily: "var(--font-body)" }}
                  >
                    {project.tag}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-5">
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ color: "var(--text-dark)", fontFamily: "var(--font-heading)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-xs leading-7 flex-1"
                    style={{ color: "rgba(31,42,31,0.55)", fontFamily: "var(--font-body)" }}
                  >
                    {project.desc}
                  </p>

                  {/* Bottom accent bar on hover */}
                  <Link href={`/activities/${i}`}>
                    <div className="mt-4 pt-4 border-t border-(--border) flex items-center justify-between">
                      <button
                        className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-gap duration-200"
                        style={{ color: "var(--primary-dark)", fontFamily: "var(--font-body)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                      >
                        View Details <ArrowUpRight size={12} />
                      </button>
                    </div>
                  </Link>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* Swiper pagination custom styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: var(--primary-light) !important;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background: var(--primary-dark) !important;
          width: 20px !important;
          border-radius: 4px !important;
          transition: width 0.3s ease !important;
        }
      `}</style>

    </section>
  );
}
