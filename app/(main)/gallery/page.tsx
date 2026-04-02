"use client"
import Container from '@/app/components/shared/utils/Container'
import SectionHeader from '@/app/components/shared/utils/SectionHeader'
import { useState } from 'react'

export default function page() {

  const [tab, setTab] = useState("photo")

  return (
    <Container className='py-10'>
      <div className='mb-10'>
        <SectionHeader
          title="Gallery"
          description="Explore our gallery of projects and events."
        />
      </div>
      <div>
        <div className='flex items-center gap-5'>
          <button onClick={() => setTab("photo")} className={`px-4 py-2 rounded-lg border border-theme text-sm
          hover:bg-primary transition ${tab === "photo" ? "bg-primary text-white" : ""}`}>
            Photo
          </button>
          <button onClick={() => setTab("video")} className={`px-4 py-2 rounded-lg border border-theme text-sm
          hover:bg-primary transition ${tab === "video" ? "bg-primary text-white" : ""}`}>
            Video
          </button>
        </div>
      </div>
    </Container>
  )
}
