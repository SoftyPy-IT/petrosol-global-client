import { Anchor, Navigation, Radio, Clock4 } from "lucide-react";
import { ServicePageData } from "../../__components/TIndustries";

export const berthOperatingData: ServicePageData = {
  slug: "berth-operating",
  tag: {
    label: "Berth Operating",
    icon: Anchor,
  },
  hero: {
    title: "Precision at Every Port Call",
    image:
      "https://images.unsplash.com/photo-1707508537017-a63c14ca350c?auto=format&fit=crop&w=1920&q=80",
    highlight: "Berth Operating Excellence",
    description:
      "Professional vessel coordination, berthing, and marine support services for commercial and industrial fleets — delivered with safety-first precision around the clock.",
    primaryCta: {
      label: "Request Marine Services",
      href: "/contact",
    },
    secondaryCta: {
      label: "View Projects",
      href: "/projects",
    },
  },
  highlights: [
    { label: "Vessels Handled", value: "3,200+" },
    { label: "Ports Covered", value: "18" },
    { label: "Years Experience", value: "20+" },
    { label: "Incident-Free Rate", value: "99.8%" },
  ],
  overview: {
    title: "Precision at Every Port Call",
    subtitle: "Professional vessel coordination and marine support services",
    description1:
      "We deliver safe, efficient, and reliable ship handling services across all major ports. Our certified marine pilots and coordination teams ensure smooth vessel movements from arrival to departure.",
    description2:
      "With 24/7 operations and advanced communication systems, we minimize port stays and maximize fleet efficiency while maintaining the highest safety standards.",
    benefits: [
      "Licensed marine pilots and certified handlers",
      "24/7 operational coverage across all berths",
      "Full coordination with port and customs authorities",
      "Real-time vessel tracking and status updates",
      "Emergency response and incident management",
      "Comprehensive post-call reporting and documentation",
    ],
  },
  capabilities: [
    {
      icon: Anchor,
      title: "Berthing & Unberthing",
      desc: "Precision mooring operations with certified pilots and tug coordination for vessels of all sizes and classes.",
    },
    {
      icon: Navigation,
      title: "Vessel Coordination",
      desc: "Real-time traffic management, port entry scheduling, and inter-agency liaison to minimize waiting time.",
    },
    {
      icon: Radio,
      title: "Marine Communications",
      desc: "24/7 VHF radio watch, vessel tracking, and emergency coordination with port authorities and coast guard.",
    },
    {
      icon: Clock4,
      title: "Turnaround Management",
      desc: "End-to-end turnaround planning to reduce port stay duration and maximize fleet operational efficiency.",
    },
  ],
  process: [
    { step: "01", title: "Pre-Arrival Notice", desc: "Vessel details, ETA, cargo manifest, and clearance documents received." },
    { step: "02", title: "Berth Allocation", desc: "Berth assigned based on vessel size, cargo type, and port schedule." },
    { step: "03", title: "Pilot Boarding", desc: "Licensed pilot boards at anchorage for safe port entry and navigation." },
    { step: "04", title: "Berthing Operations", desc: "Tug assistance, mooring lines secured, and gangway deployed." },
    { step: "05", title: "Post-Call Report", desc: "Full operation report issued covering times, resources, and compliance." },
  ],
  cta: {
    title: "Ready for Seamless Port Operations?",
    description: "Let’s coordinate your next vessel movement with precision and safety.",
    button: {
      label: "Get in Touch",
      href: "/contact",
    },
  },
}
