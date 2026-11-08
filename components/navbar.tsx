"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const BLUE = "#1f6fc5";

const navItems = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Education", href: "/education" },
  { name: "Hobbies", href: "/hobbies" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // "/" redirects to /home, so treat both as Home
  const isActive = (href: string) =>
    pathname === href || (href === "/home" && pathname === "/");

  return (
    <header className="sticky top-0 z-50 w-full bg-[#faf6ea]/90 backdrop-blur">
      <div className="flex h-14 items-center justify-between px-6 md:h-16 md:px-11">
        {/* Logo / name */}
        <Link
          href="/home"
          onClick={() => setOpen(false)}
          className="font-[family-name:var(--font-playfair)] text-[15px] leading-tight text-[#1a1a1a] md:text-lg"
        >
          Dzeethan Val
          <br />
          Almoguerra
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 font-[family-name:var(--font-jost)] text-[11px] font-medium uppercase tracking-[0.28em] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`border-b pb-0.5 transition hover:text-[#1f6fc5] ${
                isActive(item.href) ? "border-black" : "border-transparent"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="grid h-9 w-9 place-items-center border border-black md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="flex flex-col bg-[#faf6ea] px-6 pb-2 font-[family-name:var(--font-jost)] shadow-xl md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between border-b border-black/10 py-3 text-sm uppercase tracking-[0.25em] ${
                isActive(item.href) ? "font-bold" : ""
              }`}
            >
              {item.name}
              {isActive(item.href) && (
                <span className="h-2 w-2" style={{ background: BLUE }} />
              )}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}