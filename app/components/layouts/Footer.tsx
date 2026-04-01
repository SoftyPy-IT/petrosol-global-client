import { navLinks } from "./navlinks";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "@/public/asset/logo/PetroSol Global Logo_with_bg.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Projects", href: "/projects" },
    { label: "Partners", href: "/partners" },
    { label: "Career", href: "/career" },
    { label: "Contact", href: "/contact" },
  ];

  const contactInfo = {
    address: "Dhaka, Bangladesh",
    email: "info@petrosolglobal.com",
    phone: "+880 1XXX-XXXXXX",
  };

  return (
    <footer className="relative bg-(--text-dark) text-(--text-light) overflow-hidden" >

      {/* 🔥 TOP GRADIENT LINE */}
      <div className="h-1 w-full bg-linear-to-r from-(--primary-light) via-(--primary) to-(--primary-dark)"></div>

      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* ================= COMPANY ================= */}
        <div>
          <Link href="/" className="text-xl font-bold mb-4 bg-white">
            <Image src={logo} alt="Logo" width={200} height={200} className="rounded-lg" />
          </Link>

          <p className="text-sm text-white/70 leading-6 pt-4">
            A global energy and infrastructure company delivering innovative
            solutions in solar energy, logistics, and terminal operations.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 text-lg text-white/80">
            <a href="#" className="hover:text-(--primary-light) transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-(--primary-light) transition">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-(--primary-light) transition">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* ================= NAV LINKS ================= */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>

          <ul className="space-y-2 text-white/70">
            {navLinks.slice(0, 6).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-(--primary-light) transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= COMPANY LINKS ================= */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>

          <ul className="space-y-2 text-white/70">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-(--primary-light) transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <ul className="space-y-3 text-sm text-white/70">

            <li className="flex items-center gap-2">
              <MapPin size={16} />
              {contactInfo.address}
            </li>

            <li className="flex items-center gap-2">
              <Mail size={16} />
              {contactInfo.email}
            </li>

            <li className="flex items-center gap-2">
              <Phone size={16} />
              {contactInfo.phone}
            </li>

          </ul>
        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center text-sm text-white/60 gap-3">

          <p>
            © {new Date().getFullYear()} PetroSol Global. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-(--primary-light)">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-(--primary-light)">
              Terms & Conditions
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}
