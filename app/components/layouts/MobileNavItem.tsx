"use client"

import { useState } from "react"
import { NavLink, isNavLinkActive } from "./navlinks"
import Link from "next/link"

export default function MobileNavItem({
  link,
  pathname,
  onClose,
}: {
  link: NavLink
  pathname: string
  onClose: () => void
}) {
  const [expanded, setExpanded] = useState(false)

  const active = isNavLinkActive(link, pathname)

  if (link.children) {
    return (
      <div>
        {/* Parent Button */}
        <button
          onClick={() => setExpanded((p) => !p)}
          className={`flex justify-between items-center w-full py-2 text-sm font-semibold transition ${active
              ? "text-(--primary-dark)"
              : "text-(--text-dark)"
            }`}
          aria-expanded={expanded}
        >
          {link.label}

          <svg
            className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""
              }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Children */}
        {expanded && (
          <div className="pl-3 mt-1 space-y-1 border-l-2 border-(--primary-dark)/20 ml-1">
            {link.children.map((child) => {
              const childActive = pathname === child.href 

              if (!child.href) return null

              return (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onClose}
                  className={`block py-1.5 text-sm transition-colors ${childActive
                      ? "text-(--primary-dark) font-semibold"
                      : "text-(--text-dark) hover:text-(--primary-dark)"
                    }`}
                  aria-current={childActive ? "page" : undefined}
                >
                  {child.label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  if (!link.href) return null

  return (
    <Link
      href={link.href}
      onClick={onClose}
      className={`block py-2 text-sm font-medium transition-colors ${active
          ? "text-(--primary-dark) font-semibold"
          : "text-(--text-dark)"
        }`}
      aria-current={active ? "page" : undefined}
    >
      {link.label}
    </Link>
  )
}
