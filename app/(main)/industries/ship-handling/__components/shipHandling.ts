import { ServicePageData } from "../../__components/TIndustries"
import {
  Anchor,
  Navigation,
  Radio,
  Clock4,
  Ship,
} from "lucide-react"

export const shipHandlingData: ServicePageData = {
  slug: "ship-handling",

  tag: {
    label: "Ship Handling",
    icon: Ship,
  },

  hero: {
    title: "Ship Handling at Every Port Call",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80",
    highlight: "Marine Operations Excellence",
    description:
      "Comprehensive ship handling services including berthing, unberthing, pilotage coordination, and port operations support — executed with precision, safety, and efficiency 24/7.",

    primaryCta: {
      label: "Request Marine Support",
      href: "/contact",
    },

    secondaryCta: {
      label: "View Operations",
      href: "/projects",
    },
  },

  highlights: [
    { label: "Vessels Managed", value: "3,200+" },
    { label: "Ports Operated", value: "18+" },
    { label: "Industry Experience", value: "20+ Years" },
    { label: "Safety Record", value: "99.8%" },
  ],

  overview: {
    title: "Expert Ship Handling & Port Operations",
    subtitle: "Safe, efficient, and coordinated marine vessel management",

    description1:
      "We specialize in professional ship handling services across major commercial ports. Our trained pilots and marine coordinators ensure safe vessel movement from arrival to departure.",

    description2:
      "Through advanced communication systems and real-time coordination, we reduce port delays, improve turnaround efficiency, and maintain strict compliance with international maritime standards.",

    benefits: [
      "Certified marine pilots and port operators",
      "24/7 vessel movement coordination",
      "Integrated communication with port authorities",
      "Real-time vessel tracking and monitoring",
      "Emergency response and risk management",
      "Full compliance with maritime regulations",
    ],
  },

  capabilities: [
    {
      icon: Anchor,
      title: "Berthing & Unberthing",
      desc: "Safe and precise vessel mooring operations supported by tug coordination and experienced pilots.",
    },
    {
      icon: Navigation,
      title: "Vessel Coordination",
      desc: "Efficient scheduling and port traffic management to minimize waiting time and delays.",
    },
    {
      icon: Radio,
      title: "Marine Communication",
      desc: "Continuous VHF communication and coordination with port control and maritime authorities.",
    },
    {
      icon: Clock4,
      title: "Turnaround Optimization",
      desc: "Strategic planning to reduce vessel turnaround time and improve operational efficiency.",
    },
  ],

  process: [
    {
      step: "01",
      title: "Pre-Arrival Notification",
      desc: "Vessel details, ETA, and documentation received and verified.",
    },
    {
      step: "02",
      title: "Berth Planning",
      desc: "Optimal berth allocation based on vessel specifications and port schedule.",
    },
    {
      step: "03",
      title: "Pilot Boarding",
      desc: "Certified pilot boards vessel to ensure safe navigation into port.",
    },
    {
      step: "04",
      title: "Berthing Execution",
      desc: "Tug assistance, mooring operations, and secure vessel positioning.",
    },
    {
      step: "05",
      title: "Operational Reporting",
      desc: "Complete post-operation documentation and compliance reporting.",
    },
  ],

  cta: {
    title: "Need Reliable Ship Handling Services?",
    description:
      "Let’s ensure safe, efficient, and professional vessel operations at every port call.",

    button: {
      label: "Contact Us",
      href: "/contact",
    },
  },
}
