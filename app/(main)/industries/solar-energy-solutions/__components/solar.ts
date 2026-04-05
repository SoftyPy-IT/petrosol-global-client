import { Sun, TrendingUp, Zap, Globe, Clock } from "lucide-react"
import { ServicePageData } from "../../__components/TIndustries"

export const solarService: ServicePageData = {
  slug: "solar-energy-solutions",

  tag: {
    label: "Solar Energy",
    icon: Sun,
  },

  hero: {
    title: "Industries with Clean Energy",
    image:
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=1920&q=80",
    highlight: "Sustainable Solar Solutions",
    description:
      "End-to-end solar energy solutions — from feasibility analysis and system design to installation, commissioning, and long-term operations.",

    primaryCta: {
      label: "Request Consultation",
      href: "/contact",
    },

    secondaryCta: {
      label: "View Projects",
      href: "/projects",
    },
  },

  highlights: [
    { label: "Projects Delivered", value: "120+" },
    { label: "Installed Capacity", value: "850 MW" },
    { label: "Countries Active", value: "14" },
    { label: "System Uptime", value: "99.2%" },
  ],

  overview: {
    title: "End-to-End Solar Engineering Solutions",
    subtitle: "Reliable, scalable, and cost-efficient solar infrastructure",

    description1:
      "We design and deploy high-performance solar energy systems tailored for industrial, commercial, and utility-scale applications.",

    description2:
      "Our engineering approach ensures maximum efficiency, long-term reliability, and optimized return on investment for every solar project.",

    benefits: [
      "Reduction in energy costs",
      "Clean and renewable energy generation",
      "Reduced dependency on grid power",
      "Scalable system architecture",
      "Low operational maintenance requirements",
      "Improved energy security",
    ],
  },

  capabilities: [
    {
      icon: TrendingUp,
      title: "Feasibility Study",
      desc: "Detailed site evaluation, solar potential analysis, and financial modeling for project viability.",
    },
    {
      icon: Zap,
      title: "Engineering & Design",
      desc: "Advanced PV system design optimized for maximum efficiency and performance.",
    },
    {
      icon: Globe,
      title: "EPC Execution",
      desc: "End-to-end Engineering, Procurement, and Construction of solar infrastructure.",
    },
    {
      icon: Clock,
      title: "Operations & Maintenance",
      desc: "Continuous monitoring, preventive maintenance, and performance optimization.",
    },
  ],

  process: [
    {
      step: "01",
      title: "Consultation",
      desc: "Understanding energy needs and project objectives.",
    },
    {
      step: "02",
      title: "Feasibility Study",
      desc: "Technical and financial assessment of solar viability.",
    },
    {
      step: "03",
      title: "System Design",
      desc: "Engineering optimized solar plant architecture.",
    },
    {
      step: "04",
      title: "Installation & Commissioning",
      desc: "On-site execution and system activation.",
    },
    {
      step: "05",
      title: "Operations & Maintenance",
      desc: "Long-term monitoring and performance management.",
    },
  ],

  cta: {
    title: "Ready to Switch to Solar Energy?",
    description:
      "Let’s build a sustainable and cost-efficient energy future for your business.",

    button: {
      label: "Request Assessment",
      href: "/contact",
    },
  },
}
