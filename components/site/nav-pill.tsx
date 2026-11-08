"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const nav = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/education", label: "Education" },
  { href: "/hobbies", label: "Hobbies" },
  { href: "/contact", label: "Contact" },
]

export function NavPill() {
  const pathname = usePathname()
  return (
    <nav className="flex items-center gap-0.5 rounded-full bg-[#ececec] p-1 text-[11px] text-[#111] sm:text-sm md:gap-1">
      {nav.map((n) => {
        const on = pathname === n.href || pathname.startsWith(n.href + "/")
        return (
          <Link
            key={n.href}
            href={n.href}
            className={`rounded-full px-2 py-1.5 transition sm:px-3 ${on ? "bg-[#111] text-white" : "hover:bg-white"}`}
          >
            {n.label}
          </Link>
        )
      })}
    </nav>
  )
}