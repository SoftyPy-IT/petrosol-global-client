"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import ModalContainer from "../shared/utils/ModalContainer"
import { ChevronLeft, ChevronRight } from "lucide-react"

export interface TPhoto {
  id: string
  title: string
  shortDescription: string
  image: string
}

export default function Photo() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const photos: TPhoto[] = [
    {
      id: "1",
      title: "Team Collaboration",
      shortDescription: "Modern workspace teamwork environment",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
    },
    {
      id: "2",
      title: "Business Meeting",
      shortDescription: "Corporate strategy discussion",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&q=80",
    },
    {
      id: "3",
      title: "Developer Desk",
      shortDescription: "Clean coding workspace setup",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    },
    {
      id: "4",
      title: "Creative Team",
      shortDescription: "Brainstorming session in office",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
    },
    {
      id: "5",
      title: "Startup Culture",
      shortDescription: "Fast-paced innovation environment",
      image: "https://images.unsplash.com/photo-1556761175-7e6c1c0f0f0a?w=1200&q=80",
    },
    {
      id: "6",
      title: "Remote Work",
      shortDescription: "Global distributed team collaboration",
      image: "https://images.unsplash.com/photo-1553877522-1c7f0c1d7f3d?w=1200&q=80",
    },
  ]

  const openModal = (i: number) => {
    setIndex(i)
    setOpen(true)
  }

  const next = () => {
    setIndex((prev) => (prev + 1) % photos.length)
  }

  const prev = () => {
    setIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1))
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

  const current = photos[index]

  return (
    <>
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, i) => (
          <div
            key={photo.id}
            onClick={() => openModal(i)}
            className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
          >
            <div className="relative aspect-square w-full">
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
              <h3 className="text-white font-semibold">{photo.title}</h3>
              <p className="text-gray-200 text-sm">
                {photo.shortDescription}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      <ModalContainer open={open} onOpenChange={setOpen} size="xl">
        <div className="space-y-5">

          {/* IMAGE */}
          <div className="relative w-full aspect-square rounded-xl overflow-hidden">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>

          {/* INFO */}
          <div>
            <h2 className="text-lg font-semibold">{current.title}</h2>
            <p className="text-gray-600">{current.shortDescription}</p>
          </div>

          {/* CONTROLS */}
          <div className="flex items-center justify-between">

            <button
              onClick={prev}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            >
              <ChevronLeft />
            </button>

            {/* DOTS */}
            <div className="flex gap-2">
              {photos.map((_, i) => (
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
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            >
              <ChevronRight />
            </button>
          </div>

        </div>
      </ModalContainer>
    </>
  )
}
