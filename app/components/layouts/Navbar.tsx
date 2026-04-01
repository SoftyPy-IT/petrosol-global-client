"use client";
import { useState } from "react";
import { navLinks } from "./navlinks";
import Link from "next/link";
import logo from "@/public/asset/logo/PetroSol_Global_Logo.png";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-(--background)  border-b border-(--border) sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

        {/* Logo */}
        <div className="text-xl font-bold text-(--primary-dark)">
          <Link href="/">
            <Image src={logo} alt="Logo" width={100} height={100} />
          </Link>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-(--text-dark) hover:text-(--primary-dark) font-medium transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="/contact"
          className="
            hidden md:block
            bg-(--primary-dark)
            text-(--text-light)
            px-5 py-2 rounded-lg
            hover:bg-(--primary)
            transition
          "
        >
          Get Quote
        </a>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-(--primary-dark)"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-(--border) px-4 py-3 space-y-3 bg-white">

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-[var(--text-dark)] hover:text-[var(--primary-dark)]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href="/contact"
            className="
              block text-center
              bg-[var(--primary-dark)]
              text-white py-2 rounded-lg
              hover:bg-[var(--primary)]
              transition
            "
          >
            Get Quote
          </a>
        </div>
      )}
    </div>
  );
}
