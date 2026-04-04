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
  const [selectedPhoto, setSelectedPhoto] = useState<TPhoto | null>(null)

  const photos: TPhoto[] = [
    {
      id: "1",
      title: "Team Collaboration",
      shortDescription: "Working together in modern workspace",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
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
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
    },
  ]

  const handleOpen = (photo: TPhoto) => {
    setSelectedPhoto(photo)
    setOpen(true)
  }

  return (
    <>
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => handleOpen(photo)}
            className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer transition-all duration-300"
          >
            {/* IMAGE */}
            <div className="relative w-full aspect-square">
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
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

      {/* MODAL */}
      <ModalContainer open={open} onOpenChange={setOpen}>
        {selectedPhoto && (
          <div className="max-w-2xl w-full">
            {/* IMAGE */}
            <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-4">
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <h2 className="text-xl font-semibold mb-2">
              {selectedPhoto.title}
            </h2>
            <p className="text-gray-600">
              {selectedPhoto.shortDescription}
            </p>
          </div>
        )}
      </ModalContainer>
    </>
  )
}
