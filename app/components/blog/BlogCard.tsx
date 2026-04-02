import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';

interface BlogCardProps {
  post: {
    title: string;
    desc: string;
    date: string;
    read: string;
    cat: string;
    img: string;
    author: string;
    avatarColor: string;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div
      className="group flex flex-col bg-(--background) border border-(--border) rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
    >

      {/* Image */}
      <div className="relative h-48 overflow-hidden shrink-0">
        <Image
          src={post.img}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(31,42,31,0.45) 0%, transparent 55%)" }} />
        <span
          className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
          style={{ background: "var(--primary-dark)", color: "#fff", fontFamily: "var(--font-body)" }}
        >
          {post.cat}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Meta */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[11px] font-semibold tracking-wide"
            style={{ color: "rgba(31,42,31,0.4)", fontFamily: "var(--font-body)" }}>
            {post.date}
          </span>
          <span className="w-1 h-1 rounded-full" style={{ background: "rgba(31,42,31,0.25)" }} />
          <span className="text-[11px]" style={{ color: "rgba(31,42,31,0.4)", fontFamily: "var(--font-body)" }}>
            {post.read}
          </span>
        </div>

        <h3
          className="text-base font-bold leading-snug mb-2 group-hover:text-(--primary-dark) transition-colors"
          style={{ color: "var(--text-dark)", fontFamily: "var(--font-heading)" }}
        >
          {post.title}
        </h3>

        <p className="text-xs leading-7 flex-1"
          style={{ color: "rgba(31,42,31,0.55)", fontFamily: "var(--font-body)" }}>
          {post.desc}
        </p>

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-(--border) flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
              style={{ background: post.avatarColor, fontFamily: "var(--font-body)" }}
            >
              {post.author.split(" ").map((w) => w[0]).join("")}
            </div>
            <span className="text-[11px] font-semibold"
              style={{ color: "rgba(31,42,31,0.55)", fontFamily: "var(--font-body)" }}>
              {post.author}
            </span>
          </div>

          <Link href={`/blog/${post.title}`}>
            <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 group-hover:gap-2"
              style={{ color: "var(--primary-dark)", fontFamily: "var(--font-body)" }}>
              Read More <ArrowUpRight size={12} />
            </div>
          </Link>
        </div>
      </div>

    </div>
  )
}
