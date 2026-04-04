import Image from "next/image"

export interface TVideo {
  id: string
  title: string
  shortDescription: string
  videoUrl: string
  thumbnail: string
}

export default function Video() {
  const videos: TVideo[] = [
    {
      id: "1",
      title: "Project Overview",
      shortDescription: "Introduction to our latest project.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
    },
    {
      id: "2",
      title: "Development Process",
      shortDescription: "How we build modern applications.",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
      thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80",
    },
    {
      id: "3",
      title: "Team Collaboration",
      shortDescription: "Behind the scenes teamwork.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {videos.map((video) => (
        <div
          key={video.id}
          className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
        >
          {/* Thumbnail */}
          <div className="relative w-full h-[220px] bg-black">
            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-500 w-full h-full"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
              <button className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-black text-xl">
                ▶
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 bg-white">
            <h2 className="text-lg font-semibold text-gray-800">
              {video.title}
            </h2>
            <p className="text-sm text-gray-500">
              {video.shortDescription}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
