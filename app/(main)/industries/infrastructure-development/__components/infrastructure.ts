import { ServicePageData } from "../../__components/TIndustries"
import { MapPin, Layers, ShieldCheck, BarChart3 } from "lucide-react"

export const infrastructureData: ServicePageData = {
  slug: "infrastructure-development",

  tag: {
    label: "Infrastructure",
    icon: MapPin,
  },

  hero: {
    title: "Building the Backbone",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1920&q=80",
    highlight: "Infrastructure Excellence",
    description:
      "We deliver complex infrastructure projects at scale — from highways and bridges to industrial parks and utility networks.",
    primaryCta: {
      label: "Contact Us",
      href: "/contact",
    },
    secondaryCta: {
      label: "View Projects",
      href: "/projects",
    },
  },

  highlights: [
    { label: "Projects Completed", value: "200+" },
    { label: "Total Value Delivered", value: "$4.2B+" },
    { label: "Engineers On Staff", value: "340" },
    { label: "On-Time Delivery", value: "94%" },
  ],

  overview: {
    title: "Infrastructure That Powers Growth",
    subtitle: "Engineering large-scale systems for national development",
    description1:
      "We specialize in delivering end-to-end infrastructure solutions with precision, safety, and sustainability at the core of every project.",
    description2:
      "Our teams combine civil engineering expertise with modern project management systems to ensure reliable execution across global standards.",

    benefits: [
      "Turnkey delivery from concept to commissioning",
      "Multidisciplinary in-house engineering teams",
      "Proven track record across 28+ countries",
      "Strict HSE compliance on all projects",
      "Real-time monitoring and reporting systems",
      "Lifecycle asset management support",
    ],
  },

  capabilities: [
    {
      icon: MapPin,
      title: "Planning & Feasibility",
      desc: "Environmental studies, regulatory approvals, cost modeling, and site analysis.",
    },
    {
      icon: Layers,
      title: "Civil & Structural Engineering",
      desc: "Roads, bridges, foundations, and complex structural systems built to global standards.",
    },
    {
      icon: ShieldCheck,
      title: "Utility Infrastructure",
      desc: "Integrated power, water, and telecom systems with smart monitoring capabilities.",
    },
    {
      icon: BarChart3,
      title: "Project Management",
      desc: "End-to-end PMO services ensuring cost control, scheduling, quality, and risk mitigation.",
    },
  ],

  process: [
    {
      step: "01",
      title: "Site Assessment",
      desc: "Geotechnical surveys, environmental studies, and feasibility analysis.",
    },
    {
      step: "02",
      title: "Design & Feasibility",
      desc: "Concept design, engineering planning, and stakeholder approvals.",
    },
    {
      step: "03",
      title: "Engineering & Procurement",
      desc: "Detailed engineering and contractor mobilization.",
    },
    {
      step: "04",
      title: "Construction",
      desc: "Execution of civil works, structures, and utility systems.",
    },
    {
      step: "05",
      title: "Handover",
      desc: "Testing, commissioning, inspection, and final delivery.",
    },
  ],

  cta: {
    title: "Ready to Build Infrastructure at Scale?",
    description:
      "Let’s collaborate on your next infrastructure development project.",
    button: {
      label: "Get in Touch",
      href: "/contact",
    },
  },
}
