"use client"

import { useState, useRef } from "react"
import { NavLink, isNavLinkActive } from "./navlinks"
import Link from "next/link"

export default function NavItem({
  link,
  pathname,
}: {
  link: NavLink
  pathname: string
}) {
  const active = isNavLinkActive(link, pathname)
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }

  const handleLinkClick = () => {
    setOpen(false)
  }

  // ================= DROPDOWN =================
  if (link.children?.length) {
    return (
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Parent Button */}
        <button
          className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-all duration-200 ${active
              ? "text-(--primary-dark)"
              : "text-(--text-dark) hover:text-(--primary-dark) hover:bg-gray-50"
            }`}
          aria-haspopup="true"
          aria-expanded={open}
        >
          {link.label}

          {/* Arrow */}
          <svg
            className={`w-3.5 h-3.5 mt-0.5 opacity-60 transition-transform duration-200 ${open ? "rotate-180" : ""
              }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown */}
        <div
          className={`
            absolute left-0 top-full pt-2 min-w-[250px] z-50
            transition-all duration-200 ease-out
            ${open
              ? "opacity-100 visible translate-y-0 pointer-events-auto"
              : "opacity-0 invisible translate-y-1 pointer-events-none"
            }
          `}
          role="menu"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-xl s
          hadow-xl border border-gray-100 py-2 overflow-hidden">

            {link.children.map((child) => {
              const childActive = pathname === child.href


              if (!child.href) return null

              return (
                <Link
                  key={child.href}
                  href={child.href}
                  role="menuitem"
                  onClick={handleLinkClick}
                  className={`
                    group/item flex flex-col px-4 py-2.5 mx-1 border-l-2
                    transition-all duration-150
                    ${childActive
                      ? "bg-(--primary-dark)/10 border-(--primary-dark)"
                      : "border-transparent hover:bg-gray-50"
                    }
                  `}
                >
                  <span
                    className={`text-sm font-medium ${childActive
                        ? "text-(--primary-dark)"
                        : "text-gray-800 group-hover/item:text-(--primary-dark)"
                      }`}
                  >
                    {child.label}
                  </span>

                  {child.description && (
                    <span className="text-xs text-gray-500 mt-0.5">
                      {child.description}
                    </span>
                  )}
                </Link>
              )
            })}

          </div>
        </div>
      </div>
    )
  }

  if (!link.href) return null

  return (
    <Link
      href={link.href}
      className={`px-3 py-2 text-sm font-medium transition-all duration-200 ${active
          ? "text-(--primary-dark) border-b border-(--primary-dark)"
          : "text-(--text-dark) hover:text-(--primary-dark) hover:bg-gray-50"
        }`}
      aria-current={active ? "page" : undefined}
    >
      {link.label}
    </Link>
  )
}
