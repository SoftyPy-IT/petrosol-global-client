"use client"

import Photo from '@/app/components/gallery/Photo'
import Video from '@/app/components/gallery/Video'
import Container from '@/app/components/shared/utils/Container'
import LoadMore from '@/app/components/shared/utils/LoadMore'
import SectionHeader from '@/app/components/shared/utils/SectionHeader'
import { useState } from 'react'

export default function Page() {
  const [tab, setTab] = useState<"photo" | "video">("photo")

  return (
    <Container className="py-10">
      {/* Header */}
      <div className="mb-10">
        <SectionHeader
          title="Gallery"
          description="Explore our gallery of projects and events."
        />
      </div>

      {/* 🔥 Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex bg-gray-100 p-1 rounded-full shadow-sm">

          <button
            onClick={() => setTab("photo")}
            className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300
              ${tab === "photo"
                ? "bg-primary text-white shadow"
                : "text-gray-600 hover:text-primary"
              }`}
          >
            Photos
          </button>

          <button
            onClick={() => setTab("video")}
            className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300
              ${tab === "video"
                ? "bg-primary text-white shadow"
                : "text-gray-600 hover:text-primary"
              }`}
          >
            Videos
          </button>

        </div>
      </div>

      {/* 🔥 Content */}
      <div className="mt-6">
        {tab === "photo" && <div>
          <Photo />
          <LoadMore />
        </div>}
        {tab === "video" && <div>
          <Video />
          <LoadMore />
        </div>}
      </div>

    </Container>
  )
}
