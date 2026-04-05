"use client"
import { useState } from "react"
import ProjectCard from "./ProjectCard"

export type TActivity = {
  title: string
  image: string
  description: string
  type: string
  category: string
}

export default function Activity() {
  const activities: TActivity[] = [
    {
      title: "E-commerce Platform",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a",
      description:
        "Currently building a scalable e-commerce system with modern UI and payment integration.",
      type: "Ongoing",
      category: "E-commerce",
    },
    {
      title: "Company Website",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      description:
        "Corporate website development with dynamic content and SEO optimization.",
      type: "Ongoing",
      category: "Website",
    },
    {
      title: "Mobile App",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      description:
        "Cross-platform mobile application currently in development phase.",
      type: "Under Development",
      category: "Mobile App",
    },
    {
      title: "AI Integration System",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      description:
        "Future project focusing on AI-powered automation and analytics.",
      type: "Planned",
      category: "AI",
    },
  ]

  const tabs = ["Ongoing", "Under Development", "Planned"]
  const [activeTab, setActiveTab] = useState("Ongoing")

  const filteredActivities = activities.filter(
    (item) => item.type === activeTab
  )

  return (
    <div className="py-12 space-y-10">

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm border transition-all duration-300
              ${activeTab === tab
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-600 border-theme hover:border-primary"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredActivities.map((activity) => (
          <ProjectCard key={activity.title} item={activity} />
        ))}
      </div>

    </div>
  )
}
