import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import logo from "@/public/asset/logo/image.png";
import Image from "next/image";
import Container from "../shared/utils/Container";

const navLinks = [
  { label: "Activities", href: "/activities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

const contactInfo = [
  {
    icon: <MapPin size={14} />,
    label: "Address",
    value: "42 Jabbar Tower,  (Level-6), Gulshan-1, Dhaka, Bangladesh",
  },
  {
    icon: <Mail size={14} />,
    label: "Email",
    value: "petrosolgloballtd@gmail.com",
  },
  {
    icon: <Phone size={14} />,
    label: "Phone",
    value: "+880 1XXX-XXXXXX",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1f2a1f] text-white relative">

      {/* TOP ACCENT LINE */}
      <div className="h-[2px] w-full bg-linear-to-r from-[--primary-dark] via-[--primary] to-[--primary-light]" />

      <Container className="py-14">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr]">

          {/* BRAND */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image src={logo} alt="PetroSol Logo" width={80} height={80} />
            </Link>

            <p className="text-[14px] text-white/60 leading-relaxed max-w-[280px] mb-6">
              Delivering innovative solutions in energy, infrastructure, and logistics with a strong focus on sustainability and global impact.
            </p>

            <div className="flex gap-3">
              {[
                { icon: <FaFacebookF />, label: "Facebook" },
                { icon: <FaLinkedinIn />, label: "LinkedIn" },
                { icon: <FaTwitter />, label: "Twitter" },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-md border border-white/15 flex items-center justify-center text-white/60 transition-all duration-300 hover:bg-[--primary] hover:text-white hover:border-[--primary]"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="font-heading text-xs tracking-widest text-[--primary-light] uppercase mb-6">
              Usefull Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/60 hover:text-[--primary-light] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-heading text-xs tracking-widest text-[--primary-light] uppercase mb-6">
              Others
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link?.label}>
                  <Link
                    href={link?.href || "/"}
                    className="text-[14px] text-white/60 hover:text-[--primary-light] transition-colors"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-heading text-xs tracking-widest text-[--primary-light] uppercase mb-6">
              Contact
            </h3>

            <ul className="space-y-5">
              {contactInfo.map(({ icon, label, value }) => (
                <li key={label} className="flex gap-3">
                  <div className="p-3 flex items-center justify-center rounded-md bg-[--primary]/10 text-[--primary] border border-[--primary]/30">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-white/40">
                      {label}
                    </p>
                    <p className="text-[14px] text-white/70">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>

      {/* DIVIDER */}
      <div className="border-t border-white/10" />

      {/* BOTTOM BAR */}
      <Container className="py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-white/40 text-[13px]">

        <p>
          © {new Date().getFullYear()} PetroSol Global. All rights reserved.
        </p>

        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-[--primary-light] transition">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[--primary-light] transition">
            Terms & Conditions
          </Link>
        </div>

      </Container>
    </footer>
  );
}
