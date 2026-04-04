import Container from '@/app/components/shared/utils/Container'
import Image from 'next/image'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: Props) {
  const { slug } = await params

  const post = {
    title: "The Future of Renewable Energy in Infrastructure",
    desc: "How solar and wind energy are reshaping global infrastructure development and creating new investment opportunities.",
    content: `
Renewable energy is transforming the way infrastructure is built across the globe.

Governments and private organizations are investing heavily in solar, wind, and hydro projects.

These technologies not only reduce carbon emissions but also create long-term economic benefits.

The future of infrastructure is sustainable, efficient, and powered by clean energy.
    `,
    date: "Jan 12, 2026",
    read: "5 min read",
    category: "Energy",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
    author: "A. Rahman",
  }

  return (
    <Container className="py-10">
      <div>

        {/* 🔥 HERO IMAGE (FIXED) */}
        <div className="relative w-full h-[280px] md:h-[420px] rounded-2xl overflow-hidden mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
            priority
          />
        </div>

        {/* 🏷 CATEGORY */}
        <span className="inline-block mb-3 px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
          {post.category}
        </span>

        {/* 📝 TITLE */}
        <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
          {post.title}
        </h1>

        {/* 📅 META */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.read}</span>
          <span>•</span>
          <span>By {post.author}</span>
        </div>

        {/* 📄 DESCRIPTION */}
        <p className="text-lg text-gray-600 mb-6">
          {post.desc}
        </p>

        {/* 📚 CONTENT */}
        <div className="space-y-4 text-gray-700 leading-relaxed">
          {post.content.split("\n").map((para, i) =>
            para.trim() ? <p key={i}>{para}</p> : null
          )}
        </div>

      </div>
    </Container>
  )
}
