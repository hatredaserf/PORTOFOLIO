import Link from "next/link"
import type { CSSProperties, ReactNode } from "react"
import { Silkscreen } from "next/font/google"
import { ArrowUpRight, Mail } from "lucide-react"
import { NavPill } from "./nav-pill"

// Pixel-style letters for headings
export const display = Silkscreen({ subsets: ["latin"], weight: ["400", "700"] })

/* ✏️ EDIT THESE ------------------------------------------------------------ */
export const EMAIL = "dvalmoguerra@gbox.ncf.edu.ph"
export const PHOTO_MAIN = "/me-2.jfif"
export const PHOTO_SMALL = "/me.jfif"

export const socials = [
  { label: "GitHub", href: "https://github.com/hatredaserf" },
  { label: "Instagram", href: "https://www.instagram.com/zv.webp/" },
]

export const tools = ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "HTML & CSS", "JavaScript", "UI Design"]
/* -------------------------------------------------------------------------- */

/* A 2rem "inverse corner" that makes a white block curve smoothly into the photo */
export function Fillet({ at, className }: { at: "100% 100%" | "0% 100%" | "100% 0%"; className: string }) {
  return (
    <span
      aria-hidden
      className={`absolute h-8 w-8 ${className}`}
      style={{ background: `radial-gradient(circle at ${at}, transparent 2rem, #fff calc(2rem + 0.5px))` }}
    />
  )
}

/* Photo that falls back to a grey gradient if the file isn't there yet */
export function Photo({ src, className = "", children }: { src: string; className?: string; children?: ReactNode }) {
  return (
    <div
      className={`relative overflow-hidden bg-cover bg-center grayscale contrast-110 ${className}`}
      style={{ backgroundImage: `url(${src}), linear-gradient(135deg, #d9d9d9, #8a8a8a 55%, #2a2a2a)` }}
    >
      {children}
    </div>
  )
}

/* A little keyboard key */
export function Key({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <kbd
      className={`${display.className} inline-grid h-6 min-w-6 place-items-center rounded-md border-2 border-[#111] bg-white px-1.5 align-middle text-[11px] font-bold leading-none text-[#111] ${
        dark ? "shadow-[0_3px_0_#6b6b6b]" : "shadow-[0_3px_0_#111]"
      }`}
    >
      {children}
    </kbd>
  )
}

/* Pixel heading used for section titles */
export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`${display.className} text-[clamp(1.3rem,2.4vw,2.2rem)] font-bold uppercase leading-[0.98] text-[#111] ${className}`}>
      {children}
    </h2>
  )
}

/* Sticker-style card (optional link). `i` staggers the entrance animation */
export function Card({
  children,
  tone = "bg-white text-[#111]",
  rot = 0,
  i = 0,
  href,
  className = "",
}: {
  children: ReactNode
  tone?: string
  rot?: number
  i?: number
  href?: string
  className?: string
}) {
  const cls = `sticker rise group relative block overflow-hidden rounded-xl border-2 border-[#111] shadow-[3px_3px_0_#111] ${tone} ${className}`
  const style = { ["--r" as string]: `${rot}deg`, ["--i" as string]: i } as CSSProperties
  const inner = (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "8px 8px" }}
      />
      <div className="relative h-full">{children}</div>
    </>
  )
  return href ? (
    <Link href={href} className={cls} style={style}>
      {inner}
    </Link>
  ) : (
    <div className={cls} style={style}>
      {inner}
    </div>
  )
}

/* Dark "let's build something" card shown at the bottom of the pages */
function CtaCard() {
  return (
    <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-[#111] p-6 text-white md:mt-14 md:p-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{ backgroundImage: "radial-gradient(#ffffff26 1px, transparent 1px)", backgroundSize: "14px 14px" }}
      />
      <div aria-hidden className="pointer-events-none absolute -right-12 -top-12 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex flex-wrap items-center justify-between gap-6">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to projects
          </span>
          <h2 className={`${display.className} mt-4 text-[clamp(1.4rem,3vw,2.6rem)] font-bold uppercase leading-[1.05]`}>
            Let&apos;s build
            <br />
            something
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_#fff]"
          >
            Say hello
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="rounded-full border border-white/30 px-4 py-2.5 text-xs text-white/85 transition hover:bg-white hover:text-black"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div
        className="relative -mx-6 mt-8 overflow-hidden border-t border-white/15 pt-4 md:-mx-10"
        style={{
          maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        }}
      >
        <div className="ticker flex w-max text-[11px] uppercase tracking-[0.2em] text-white/70">
          {[...tools, ...tools].map((t, k) => (
            <span key={k} className="flex items-center whitespace-nowrap pr-6">
              {t}
              <span className="pl-6" aria-hidden>
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* The shared page layout: photo hero with curved blocks + content area */
export function PageShell({
  title,
  photo = PHOTO_MAIN,
  cta = true,
  children,
}: {
  title: string[]
  photo?: string
  cta?: boolean
  children: ReactNode
}) {
  return (
    <main className="fixed inset-0 z-[60] overflow-y-auto bg-white font-[family-name:var(--font-jost)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <style>{`
        html, body { overflow: hidden; }
        @keyframes tickerMove { to { transform: translateX(-50%); } }
        @keyframes riseIn { from { opacity: 0; translate: 0 18px; } to { opacity: 1; translate: 0 0; } }
        .ticker { animation: tickerMove 22s linear infinite; }
        .rise { animation: riseIn .8s cubic-bezier(.2,.7,.2,1) both; animation-delay: calc(var(--i, 0) * 90ms + 150ms); }
        .sticker { transform: rotate(var(--r, 0deg)); transition: transform .35s cubic-bezier(.3,1.6,.5,1), box-shadow .3s ease; }
        .sticker:hover { transform: rotate(0deg) translate(-2px, -3px) scale(1.03); box-shadow: 6px 6px 0 #111; }
        @media (prefers-reduced-motion: reduce) { .ticker, .rise { animation: none; } .sticker { transition: none; } }
      `}</style>

      {/* HERO */}
      <section className="relative h-[17rem] overflow-hidden sm:h-[20rem] md:h-[24rem]">
        <Photo src={photo} className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* top-left block: logo + nav pill */}
        <div className="absolute left-0 top-0 z-20 flex items-center gap-2 rounded-br-[2rem] bg-white p-3 pr-5">
          <Fillet at="100% 100%" className="left-full top-0" />
          <Fillet at="100% 100%" className="left-0 top-full" />
          <Link
            href="/home"
            aria-label="Home"
            className={`${display.className} grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#111] text-lg text-white`}
          >
            D
          </Link>
          <NavPill />
        </div>

        {/* top-right block: email */}
        <a
          href={`mailto:${EMAIL}`}
          className="absolute right-0 top-0 z-20 hidden items-center gap-3 rounded-bl-[2rem] bg-white pb-3 pl-7 pr-6 pt-3 text-[#111] md:flex"
        >
          <Fillet at="0% 100%" className="right-full top-0" />
          <Fillet at="0% 100%" className="right-0 top-full" />
          <Mail className="h-4 w-4" />
          <span className="leading-tight">
            <span className="block text-sm font-semibold">{EMAIL}</span>
            <span className="block text-[10px] opacity-70">email me for projects</span>
          </span>
        </a>

        {/* bottom-left block: page title */}
        <div className="absolute bottom-0 left-0 z-20 rounded-tr-[2rem] bg-white pb-3 pl-5 pr-8 pt-4 md:pl-6 md:pr-10">
          <Fillet at="100% 0%" className="bottom-0 left-full" />
          <Fillet at="100% 0%" className="bottom-full left-0" />
          <h1 className={`${display.className} text-center text-[clamp(1.4rem,4vw,3.2rem)] font-bold uppercase leading-[1.1] text-[#111]`}>
            {title.map((t, k) => (
              <span key={k} className="block">
                {t}
              </span>
            ))}
          </h1>
        </div>

        {/* name */}
        <p
          className={`${display.className} absolute bottom-5 right-5 z-10 hidden text-right text-[clamp(1rem,2.4vw,2rem)] font-bold uppercase leading-[1.05] text-white sm:block md:bottom-7 md:right-10`}
        >
          Dzeethan Val
          <br />
          B. Almoguerra
        </p>
      </section>

      {/* CONTENT */}
      <div className="mx-auto w-full max-w-6xl px-5 pb-8 pt-8 md:px-10 md:pt-12">
        {children}
        {cta && <CtaCard />}
        <p className="mt-8 text-center text-[11px] tracking-[0.2em] text-[#111]/50">© 2026 DZEETHAN VAL B. ALMOGUERRA</p>
      </div>
    </main>
  )
}