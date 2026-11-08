import Link from "next/link"
import type { CSSProperties, ReactNode } from "react"
import { Silkscreen } from "next/font/google"
import { Mail } from "lucide-react"

/* Shared look for every inner page: black frame, white rounded card, grayscale photo banner */

export const display = Silkscreen({ subsets: ["latin"], weight: ["400", "700"] })

export const INK = "#111111"
export const SOFT = "#ececec"

// ✏️ Put your real email here
export const EMAIL = "your.email@example.com"

export const nav = [
  { href: "/home", label: "home" },
  { href: "/about", label: "about" },
  { href: "/education", label: "education" },
  { href: "/hobbies", label: "hobbies" },
  { href: "/contact", label: "contact" },
]

/* 2rem "inverse corner" so white cut-outs curve smoothly into the photo */
export function Fillet({ at, className }: { at: "100% 100%" | "0% 100%" | "100% 0%"; className: string }) {
  return (
    <span
      aria-hidden
      className={`absolute h-8 w-8 ${className}`}
      style={{ background: `radial-gradient(circle at ${at}, transparent 2rem, #fff calc(2rem + 0.5px))` }}
    />
  )
}

/* Greyscale photo with a grey gradient fallback if the file isn't there yet */
export function Photo({
  src,
  pos = "center",
  hint = true,
  className = "",
  children,
}: {
  src: string
  pos?: string
  hint?: boolean
  className?: string
  children?: ReactNode
}) {
  const style: CSSProperties = {
    backgroundImage: `url(${src}), linear-gradient(135deg, #d9d9d9, #8a8a8a 55%, #2a2a2a)`,
    backgroundPosition: pos,
  }
  return (
    <div className={`relative overflow-hidden bg-cover grayscale contrast-110 ${className}`} style={style}>
      {hint && (
        <span className="pointer-events-none absolute inset-0 grid place-items-center text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
          your photo here
          <br />
          public{src}
        </span>
      )}
      {children}
    </div>
  )
}

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`${display.className} text-[clamp(1.2rem,2vw,1.8rem)] font-bold uppercase leading-[0.98] ${className}`}>{children}</h2>
}

/* ---------- page frame: logo + nav + photo banner + body ---------- */

export function PosterPage({
  active,
  no,
  title,
  subtitle,
  photo = "/me.jpg",
  pos = "center 25%",
  children,
}: {
  active: string
  no: string
  title: string
  subtitle: string
  photo?: string
  pos?: string
  children: ReactNode
}) {
  return (
    <main className="fixed inset-0 z-[60] overflow-y-auto bg-black p-3 font-[family-name:var(--font-jost)] text-[#111] md:overflow-hidden md:p-5">
      <style>{`html, body { overflow: hidden; }`}</style>

      <div className="flex min-h-full flex-col rounded-[2.25rem] bg-white p-3 md:h-full md:min-h-0 md:p-4">
        {/* top bar */}
        <header className="flex items-center justify-between gap-3 pb-3">
          <div className="flex items-center gap-2">
            <Link href="/home" aria-label="Home" className={`${display.className} grid h-11 w-11 shrink-0 place-items-center rounded-full bg-black text-lg text-white`}>
              D
            </Link>
            <nav className="flex items-center gap-0.5 rounded-full p-1 text-[11px] sm:text-sm md:gap-1" style={{ background: SOFT }}>
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={n.href === active ? "page" : undefined}
                  className={`rounded-full px-2 py-1.5 transition sm:px-3 ${n.href === active ? "bg-black text-white" : "hover:bg-white"}`}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
          <a href={`mailto:${EMAIL}`} className="hidden items-center gap-2 text-sm font-semibold md:flex">
            <Mail className="h-4 w-4" />
            {EMAIL}
          </a>
        </header>

        {/* banner */}
        <section className="relative h-52 shrink-0 overflow-hidden rounded-[2.25rem] md:h-auto md:flex-[0_0_36%] md:min-h-0">
          <Photo src={photo} pos={pos} hint={false} className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

          {/* bottom-left cut-out with the section number */}
          <div className="absolute bottom-0 left-0 z-20 rounded-tr-[2rem] bg-white pr-6 pt-3">
            <Fillet at="100% 0%" className="bottom-full left-0" />
            <Fillet at="100% 0%" className="bottom-0 left-full" />
            <span className={`${display.className} text-[clamp(1.6rem,3vw,2.8rem)] font-bold leading-none`}>{no}</span>
          </div>

          <div className="absolute bottom-5 right-6 z-10 text-right text-white md:bottom-7 md:right-10">
            <p className="text-base sm:text-xl md:text-2xl">{subtitle}</p>
            <h1 className={`${display.className} text-[clamp(2rem,6.5vw,5.5rem)] font-bold uppercase leading-[0.95]`}>{title}</h1>
          </div>
        </section>

        {/* body */}
        <div className="px-2 pb-2 pt-5 md:min-h-0 md:flex-1 md:overflow-y-auto md:px-4">{children}</div>
      </div>
    </main>
  )
}