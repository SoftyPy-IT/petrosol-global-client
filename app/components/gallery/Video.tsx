"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import ModalContainer from "../shared/utils/ModalContainer"
import { ChevronLeft, ChevronRight } from "lucide-react"

export interface TVideo {
  id: string
  title: string
  shortDescription: string
  videoUrl: string // YouTube link
  thumbnail: string
}

export default function Video() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const videos: TVideo[] = [
    {
      id: "1",
      title: "Project Overview",
      shortDescription: "Introduction to our latest project.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
    },
    {
      id: "2",
      title: "Development Process",
      shortDescription: "How we build modern applications.",
      videoUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      thumbnail:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80",
    },
    {
      id: "3",
      title: "Team Collaboration",
      shortDescription: "Behind the scenes teamwork.",
      videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
      thumbnail:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
    },
  ]

  const openModal = (i: number) => {
    setIndex(i)
    setOpen(true)
  }

  const next = () => {
    setIndex((prev) => (prev + 1) % videos.length)
  }

  const prev = () => {
    setIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1))
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!open) return

      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [open])

  const current = videos[index]

  return (
    <>
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((video, i) => (
          <div
            key={video.id}
            onClick={() => openModal(i)}
            className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer transition"
          >
            {/* Thumbnail */}
            <div className="relative w-full h-[220px]">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-black text-xl">
                  ▶
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-4 bg-white">
              <h2 className="text-lg font-semibold">{video.title}</h2>
              <p className="text-sm text-gray-500">
                {video.shortDescription}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      <ModalContainer open={open} onOpenChange={setOpen} size="xl" title={current.title}>
        <div className="space-y-5">

          {/* YOUTUBE IFRAME */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <iframe
              src={current.videoUrl}
              title={current.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* INFO */}
          <div>
            <p className="text-gray-600">{current.shortDescription}</p>
          </div>

          {/* CONTROLS */}
          <div className="flex items-center justify-between">

            <button
              onClick={prev}
              className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            >
              <ChevronLeft />
            </button>

            {/* DOTS */}
            <div className="flex gap-2">
              {videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition ${i === index ? "bg-black scale-125" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </ModalContainer>
    </>
  )
}
