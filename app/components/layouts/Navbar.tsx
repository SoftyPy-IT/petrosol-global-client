"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import logo from "@/public/asset/logo/logo-without-bg.png"
import { navLinks, isNavLinkActive, type NavLink } from "./navlinks"
import Container from "../shared/utils/Container"
import NavItem from "./NavItem"
import MobileNavItem from "./MobileNavItem"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="w-full bg-(--background) border-b border-(--border) sticky top-0 z-50">
      <Container className="flex justify-between items-center  py-2">

        {/* Logo */}
        <Link href="/" aria-label="Go to homepage">
          <Image src={logo} alt="Company logo" width={60} height={60} priority />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex gap-1 items-center">
          {navLinks.map((link, index) => (
            <NavItem key={link.href ?? index} link={link} pathname={pathname} />
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-(--primary-dark) text-(--text-light) px-5 py-2 rounded-lg hover:bg-(--primary) transition-colors font-medium text-sm"
        >
          Get In Touch
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-(--primary-dark) hover:bg-gray-100 transition"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          role="menu"
          className="md:hidden border-t border-(--border) px-4 py-4 space-y-2 bg-white shadow-md"
        >
          {navLinks.map((link, index) => (
            <MobileNavItem
              key={link.href ?? index}
              link={link}
              pathname={pathname}
              onClose={() => setOpen(false)}
            />
          ))}

          <div className="pt-3 border-t border-gray-100">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-(--primary-dark) text-(--text-light) px-5 py-2.5 rounded-lg font-medium text-sm"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
