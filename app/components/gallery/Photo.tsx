"use client"

import Image from "next/image"
import { useState } from "react"
import ModalContainer from "../shared/utils/ModalContainer"

export interface TPhoto {
  id: string
  title: string
  shortDescription: string
  image: string
}

export default function Photo() {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const photos: TPhoto[] = [
    {
      id: "1",
      title: "Team Collaboration",
      shortDescription: "Working together in modern workspace",
      image: "https://images.unsplash.com/photo-1522071820081-4636c8a6c1c3?w=1200&q=80",
    },
    {
      id: "2",
      title: "Business Meeting",
      shortDescription: "Corporate discussion and planning",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&q=80",
    },
    {
      id: "3",
      title: "Technology Desk",
      shortDescription: "Modern developer workspace setup",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    },
    {
      id: "4",
      title: "Office Culture",
      shortDescription: "Creative teamwork environment",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
    },
    {
      id: "5",
      title: "Startup Life",
      shortDescription: "Fast-paced innovation culture",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80",
    },
    {
      id: "6",
      title: "Global Team",
      shortDescription: "Remote collaboration worldwide",
      image: "https://images.unsplash.com/photo-1553877522-1c7f0c1d7f3d?w=1200&q=80",
    },
  ]

  const openModal = (index: number) => {
    setCurrentIndex(index)
    setOpen(true)
  }

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length)
  }

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? photos.length - 1 : prev - 1
    )
  }

  const currentPhoto = photos[currentIndex]

  return (
    <>
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => openModal(index)}
            className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer transition-all duration-300"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
              <h2 className="text-white text-lg font-semibold">
                {photo.title}
              </h2>
              <p className="text-gray-200 text-sm">
                {photo.shortDescription}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL LIGHTBOX */}
      <ModalContainer open={open} onOpenChange={setOpen}>
        <div className="relative max-w-3xl w-full">

          {/* ❌ CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 z-10 w-9 h-9 bg-black/70 text-white rounded-full flex items-center justify-center hover:bg-black transition"
          >
            ✕
          </button>

          {/* 🖼 IMAGE */}
          <div className="relative w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden">
            <Image
              src={currentPhoto.image}
              alt={currentPhoto.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* 📄 CONTENT */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold">
              {currentPhoto.title}
            </h2>
            <p className="text-gray-600">
              {currentPhoto.shortDescription}
            </p>
          </div>

          {/* ⬅️➡️ NAVIGATION */}
          <div className="flex items-center justify-between mt-6">

            <button
              onClick={prev}
              className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            >
              ← Prev
            </button>

            {/* Pagination dots */}
            <div className="flex gap-2">
              {photos.map((_, i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition ${i === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-gray-300"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            >
              Next →
            </button>

          </div>
        </div>
      </ModalContainer>
    </>
  )
}
