import Image from "next/image"

export interface TPhoto {
  id: string
  title: string
  shortDescription: string
  image: string
}

export default function Photo() {
  const photos: TPhoto[] = [
    {
      id: "1",
      title: "Photo 1",
      shortDescription: "Short description 1",
      image: "https://images.unsplash.com/photo-1506744038136-479a7ea3ef70",
    },
    {
      id: "2",
      title: "Photo 2",
      shortDescription: "Short description 2",
      image: "https://images.unsplash.com/photo-1506744038136-479a7ea3ef70",
    },
    {
      id: "3",
      title: "Photo 3",
      shortDescription: "Short description 3",
      image: "https://images.unsplash.com/photo-1506744038136-479a7ea3ef70",
    },
    {
      id: "4",
      title: "Photo 4",
      shortDescription: "Short description 4",
      image: "https://images.unsplash.com/photo-1506744038136-479a7ea3ef70",
    },
    {
      id: "5",
      title: "Photo 5",
      shortDescription: "Short description 5",
      image: "https://images.unsplash.com/photo-1506744038136-479a7ea3ef70",
    },
    {
      id: "6",
      title: "Photo 6",
      shortDescription: "Short description 6",
      image: "https://images.unsplash.com/photo-1506744038136-479a7ea3ef70",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
        >
          {/* Image */}
          <div className="relative w-full h-[220px]">
            <Image
              src={photo.image}
              alt={photo.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Overlay */}
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
  )
}
