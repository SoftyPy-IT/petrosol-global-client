import Container from '@/app/components/shared/utils/Container'
import Image from 'next/image'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: Props) {
  const { slug } = await params

  const activity = {
    title: "E-commerce Platform",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a",
    description:
      "Currently building a scalable e-commerce system with modern UI and payment integration.",
    content: `
      This project focuses on building a high-performance e-commerce platform
      with modern technologies. The system includes secure payment gateways,
      real-time inventory tracking, and a seamless user experience.

      Our goal is to create a scalable architecture that can handle thousands
      of concurrent users while maintaining fast load times and reliability.

      Future updates will include AI-based product recommendations and
      advanced analytics dashboards.
    `,
    type: "Ongoing",
    category: "E-commerce",
  }

  return (
    <Container className="py-10">
      <div className="max-w-5xl mx-auto">

        {/* 🔥 Image */}
        <div className="relative w-full h-[250px] md:h-[400px] rounded-2xl overflow-hidden mb-8">
          <Image
            src={activity.image}
            alt={activity.title}
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover"
            priority
          />
        </div>

        {/* 🏷 Tags */}
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full">
            {activity.type}
          </span>
          <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
            {activity.category}
          </span>
        </div>

        {/* 📝 Title */}
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          {activity.title}
        </h1>

        {/* 📄 Description */}
        <p className="text-lg text-gray-600 mb-6">
          {activity.description}
        </p>

        {/* 📚 Content */}
        <div className="prose max-w-none text-gray-700 leading-relaxed">
          {activity.content.split("\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

      </div>
    </Container>
  )
}
