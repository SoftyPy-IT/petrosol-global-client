import { Anchor, Navigation, Radio, Clock4, Truck, Boxes } from "lucide-react"
import { ServicePageData } from "../../__components/TIndustries"

export const logisticsSupplyChainData: ServicePageData = {
  slug: "logistics-supply-chain",

  tag: {
    label: "Logistics & Supply Chain",
    icon: Truck,
  },

  hero: {
    title: "Global Logistics Flow",
    image:
      "https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=1920&q=80",
    highlight: "Supply Chain Excellence",
    description:
      "End-to-end logistics and supply chain solutions covering freight management, port operations, warehousing, and global distribution networks with precision and efficiency.",

    primaryCta: {
      label: "Request Logistics Support",
      href: "/contact",
    },

    secondaryCta: {
      label: "View Operations",
      href: "/projects",
    },
  },

  highlights: [
    { label: "Shipments Managed", value: "5,000+" },
    { label: "Global Routes", value: "40+" },
    { label: "Years Experience", value: "15+" },
    { label: "On-Time Delivery", value: "97%" },
  ],

  overview: {
    title: "Integrated Supply Chain Solutions",
    subtitle: "Optimizing logistics from origin to destination",
    description1:
      "We provide fully integrated logistics solutions across sea, land, and air transport networks. Our systems ensure efficient cargo movement, reduced delays, and optimized cost structures.",

    description2:
      "With real-time tracking, advanced coordination systems, and global partnerships, we ensure complete visibility and control over your supply chain operations.",

    benefits: [
      "End-to-end supply chain visibility",
      "Multimodal transport coordination (sea, air, land)",
      "Advanced warehouse and inventory management",
      "Customs clearance and compliance support",
      "Real-time shipment tracking systems",
      "Cost-efficient global distribution network",
    ],
  },

  capabilities: [
    {
      icon: Boxes,
      title: "Freight & Cargo Management",
      desc: "Efficient handling of bulk, containerized, and specialized cargo across global routes.",
    },
    {
      icon: Navigation,
      title: "Route Optimization",
      desc: "Smart logistics planning to reduce transit time and operational costs.",
    },
    {
      icon: Radio,
      title: "Real-Time Tracking",
      desc: "Live shipment monitoring and communication across all transit points.",
    },
    {
      icon: Clock4,
      title: "Delivery Management",
      desc: "On-time delivery assurance with coordinated last-mile execution.",
    },
  ],

  process: [
    {
      step: "01",
      title: "Order Planning",
      desc: "Cargo requirements analyzed and logistics plan created.",
    },
    {
      step: "02",
      title: "Cargo Booking",
      desc: "Transport mode selected and shipment scheduled.",
    },
    {
      step: "03",
      title: "Handling & Transit",
      desc: "Cargo movement through ports, warehouses, and transport networks.",
    },
    {
      step: "04",
      title: "Distribution",
      desc: "Regional delivery and last-mile logistics execution.",
    },
    {
      step: "05",
      title: "Final Delivery",
      desc: "Confirmation, documentation, and delivery closure.",
    },
  ],

  cta: {
    title: "Optimize Your Supply Chain Today",
    description:
      "Let’s build a faster, smarter, and more reliable logistics network for your business.",

    button: {
      label: "Get Started",
      href: "/contact",
    },
  },
}
