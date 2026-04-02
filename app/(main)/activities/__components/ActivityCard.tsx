import Image from "next/image"
import Link from "next/link"
import React from "react"

export type ActivityCardProps = {
  title: string
  image: string
  description: string
  type: string
}

export default function ActivityCard({
  title,
  image,
  description,
  type,
}: ActivityCardProps) {
  return (
    <div className="card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

      {/* Image */}
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="space-y-3">

        {/* Title */}
        <h2 className="text-xl font-heading text-primary-dark">
          {title}
        </h2>

        {/* Divider */}
        <div className="w-10 h-1 bg-primary rounded-full" />

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Footer */}
        <div className="flex justify-end pt-3">

          {/* View Details Button */}
          <Link href={`/activities/${title}`}>
            <button
              className="btn btn-primary text-xs px-4 py-2"
            >
              Explore More
            </button>
          </Link>

        </div>

      </div>
    </div>
  )
}
