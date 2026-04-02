import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import BlogCard from "./BlogCard";

const posts = [
  {
    title: "The Future of Renewable Energy in Infrastructure",
    desc: "How solar and wind energy are reshaping global infrastructure development and creating new investment opportunities.",
    date: "Jan 12, 2026",
    read: "5 min read",
    cat: "Energy",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
    author: "A. Rahman",
    avatarColor: "#346739",
  },
  {
    title: "Smart Logistics in Global Supply Chains",
    desc: "Digital transformation in logistics and port management systems is driving unprecedented efficiency gains worldwide.",
    date: "Dec 28, 2025",
    read: "4 min read",
    cat: "Logistics",
    img: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=600&q=80",
    author: "S. Islam",
    avatarColor: "#0EA5E9",
  },
  {
    title: "Sustainable Energy Projects Around the World",
    desc: "A look into major renewable energy projects driving global impact and accelerating the transition away from fossil fuels.",
    date: "Dec 10, 2025",
    read: "6 min read",
    cat: "Sustainability",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
    author: "M. Hossain",
    avatarColor: "#F59E0B",
  },
];

export default function Blog() {
  return (
    <section className="relative bg-white py-10 overflow-hidden">

      {/* Dot texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(var(--primary-dark) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 z-10">

        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-5 mb-11">
          <div className="max-w-lg">
            <div
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border"
              style={{ background: "rgba(121,174,111,0.12)", borderColor: "var(--primary)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--primary-dark)" }} />
              <span className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "var(--primary-dark)", fontFamily: "var(--font-body)" }}>
                Latest Insights
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{ color: "var(--text-dark)", fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}
            >
              News &amp;{" "}
              <span className="relative inline-block" style={{ color: "var(--primary-dark)" }}>
                Blog
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8"
                  preserveAspectRatio="none" style={{ height: "8px" }}>
                  <path d="M2,6 Q50,1 100,5 Q150,9 198,3"
                    fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <p className="mt-3 text-sm leading-7"
              style={{ color: "rgba(31,42,31,0.55)", fontFamily: "var(--font-body)" }}>
              Explore industry insights, company updates, and global energy trends from PetroSol Global.
            </p>
          </div>

          <Link href="/blog">
            <button
              className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase border rounded-lg px-4 py-2.5 transition-all duration-200 whitespace-nowrap self-end"
              style={{
                color: "var(--primary-dark)",
                borderColor: "var(--primary)",
                background: "transparent",
                fontFamily: "var(--font-body)",
              }}

            >
              All Articles <ArrowUpRight size={13} />
            </button>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post, i) => {
            return (
              <BlogCard
                key={i}
                post={post}
              />
            );
          })}
        </div>

        {/* Bottom rule */}
        <div className="mt-12 h-px"
          style={{ background: "linear-gradient(90deg, var(--primary-dark), var(--primary), transparent)" }} />

      </div>
    </section>
  );
}
