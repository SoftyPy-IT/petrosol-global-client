"use client"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { navLinks } from "./navlinks"
import Link from "next/link"
import Image from "next/image"
import logo from "@/public/asset/logo/logo-without-bg.png"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="w-full bg-(--background) border-b border-(--border) sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo" width={70} height={70} />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  font-medium transition
                  ${isActive
                    ? "text-(--primary-dark) border-b-2 border-(--primary-dark)"
                    : "text-(--text-dark) hover:text-(--primary-dark)"
                  }
                `}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:block bg-(--primary-dark) text-(--text-light) px-5 py-2 rounded-lg hover:bg-(--primary) transition"
        >
          Get In Touch
        </Link>

        {/* Mobile */}
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
          {navLinks.map((link) => {
            const isActive = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block font-medium ${isActive
                    ? "text-(--primary-dark) font-bold"
                    : "text-(--text-dark)"
                  }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
