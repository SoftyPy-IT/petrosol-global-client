import { LucideIcon } from "lucide-react"

export interface ServicePageData {
  slug: string
  tag: {
    label: string
    icon: LucideIcon
  }

  hero: {
    title: string
    image: string
    highlight: string
    description: string
    primaryCta: {
      label: string
      href: string
    }
    secondaryCta: {
      label: string
      href: string
    }
  }

  highlights: { label: string; value: string }[]

  overview: {
    title: string
    subtitle: string
    description1: string
    description2: string
    benefits: string[]
  }

  capabilities: {
    icon: LucideIcon
    title: string
    desc: string
  }[]

  process: {
    step: string
    title: string
    desc: string
  }[]

  cta: {
    title: string
    description: string
    button: {
      label: string
      href: string
    }
  }
}
