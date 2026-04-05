import { ServicePageData } from "../../__components/TIndustries"
import {
  Lightbulb,
  LineChart,
  Target,
  Users,
  BarChart3,
} from "lucide-react"

export const consultingStrategyData: ServicePageData = {
  slug: "consulting-strategy",

  tag: {
    label: "Consulting & Strategy",
    icon: Lightbulb,
  },

  hero: {
    title: "Strategic Clarity for Business Growth",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80",
    highlight: "Business Transformation",
    description:
      "We help organizations make smarter decisions through data-driven strategy, operational excellence, and long-term growth planning.",

    primaryCta: {
      label: "Book Consultation",
      href: "/contact",
    },

    secondaryCta: {
      label: "View Case Studies",
      href: "/projects",
    },
  },

  highlights: [
    { label: "Clients Served", value: "250+" },
    { label: "Industries Covered", value: "18+" },
    { label: "Strategy Projects", value: "600+" },
    { label: "Success Rate", value: "96%" },
  ],

  overview: {
    title: "Data-Driven Business Strategy",
    subtitle: "Helping companies scale with clarity and confidence",

    description1:
      "Our consulting services focus on aligning business goals with actionable strategies. We analyze markets, operations, and performance to identify growth opportunities.",

    description2:
      "From startups to enterprises, we deliver tailored strategies that improve efficiency, reduce risk, and unlock sustainable growth.",

    benefits: [
      "Data-driven decision making",
      "Market and competitor analysis",
      "Operational efficiency improvement",
      "Digital transformation strategy",
      "Risk assessment and mitigation",
      "Scalable growth frameworks",
    ],
  },

  capabilities: [
    {
      icon: LineChart,
      title: "Business Analytics",
      desc: "Deep analysis of performance metrics to identify growth opportunities.",
    },
    {
      icon: Target,
      title: "Strategic Planning",
      desc: "Long-term business roadmap design aligned with company goals.",
    },
    {
      icon: Users,
      title: "Organizational Consulting",
      desc: "Improve team structure, leadership, and operational efficiency.",
    },
    {
      icon: BarChart3,
      title: "Performance Optimization",
      desc: "Enhancing productivity, profitability, and business outcomes.",
    },
  ],

  process: [
    {
      step: "01",
      title: "Discovery",
      desc: "Understanding business goals, challenges, and current performance.",
    },
    {
      step: "02",
      title: "Analysis",
      desc: "Market research, data evaluation, and competitive benchmarking.",
    },
    {
      step: "03",
      title: "Strategy Design",
      desc: "Developing tailored business strategies and action plans.",
    },
    {
      step: "04",
      title: "Implementation",
      desc: "Executing strategies with clear milestones and KPIs.",
    },
    {
      step: "05",
      title: "Optimization",
      desc: "Continuous improvement and performance refinement.",
    },
  ],

  cta: {
    title: "Ready to Transform Your Business Strategy?",
    description:
      "Let’s build a smarter roadmap for growth, efficiency, and success.",

    button: {
      label: "Start Consultation",
      href: "/contact",
    },
  },
}
