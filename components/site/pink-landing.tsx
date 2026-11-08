"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import type { ReactNode } from "react"
import { Silkscreen } from "next/font/google"
import { ArrowUpRight, Mail } from "lucide-react"

// Pixel-style letters for headings
const display = Silkscreen({ subsets: ["latin"], weight: ["400", "700"] })

const PINK = "#111111" // accent (black)
const SOFT = "#ececec" // light grey
const TEXT = "#111111" // text

/* ✏️ EDIT THESE ------------------------------------------------------------ */
const EMAIL = "dvalmoguerra@gbox.ncf.edu.ph"
const PHOTO_MAIN = "/me-2.jfif" // put your big photo in  public/me.jpg
const PHOTO_SMALL = "/me.jfif" // put a second photo in public/me-2.jpg

const nav = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/education", label: "Education" },
  { href: "/hobbies", label: "Hobbies" },
  { href: "/contact", label: "Contact" },
]

// "Things I love" tiles: change the icon, label, short note, colors and tilt
const loves = [
  { icon: "🎌", label: "Anime", sub: "Shows & manga", tone: "bg-white text-[#111]", rot: -3 },
  { icon: "💻", label: "Coding", sub: "Next.js & React", tone: "bg-[#111] text-white", rot: 2.5 },
  { icon: "🎮", label: "Gaming", sub: "Always player one", tone: "bg-[#111] text-white", rot: -2 },
  { icon: "🎨", label: "Drawing", sub: "Clean & bold", tone: "bg-white text-[#111]", rot: -2.5 },
]

// Social links shown on the dark card
const socials = [
  { label: "GitHub", href: "https://github.com/hatredaserf" },
  { label: "Instagram", href: "https://www.instagram.com/zv.webp/" },
]

// Scrolling strip at the bottom of the card
const tools = ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "HTML & CSS", "JavaScript", "UI Design"]
/* -------------------------------------------------------------------------- */

/* A 2rem "inverse corner" that makes a white block curve smoothly into the photo */
function Fillet({
  at,
  className,
}: {
  at: "100% 100%" | "0% 100%" | "100% 0%"
  className: string
}) {
  return (
    <span
      aria-hidden
      className={`absolute h-8 w-8 ${className}`}
      style={{ background: `radial-gradient(circle at ${at}, transparent 2rem, #fff calc(2rem + 0.5px))` }}
    />
  )
}

/* Photo that falls back to a grey gradient if the file isn't there yet */
function Photo({ src, className = "", children }: { src: string; className?: string; children?: ReactNode }) {
  return (
    <div
      className={`relative overflow-hidden bg-cover bg-center grayscale contrast-110 ${className}`}
      style={{ backgroundImage: `url(${src}), linear-gradient(135deg, #d9d9d9, #8a8a8a 55%, #2a2a2a)` }}
    >
      {children}
    </div>
  )
}

/* A little keyboard key. `press` makes it animate like it's being pressed */
function Key({ children, press = false, dark = false }: { children: ReactNode; press?: boolean; dark?: boolean }) {
  return (
    <kbd
      className={`${display.className} inline-grid h-6 min-w-6 place-items-center rounded-md border-2 border-[#111] bg-white px-1.5 align-middle text-[11px] font-bold leading-none text-[#111] ${
        dark ? "shadow-[0_3px_0_#6b6b6b]" : "shadow-[0_3px_0_#111]"
      } ${press ? "key-press" : ""}`}
    >
      {children}
    </kbd>
  )
}

export function PinkLanding() {
  const router = useRouter()

  // Press Z to jump to the contact page
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Let Ctrl+Z / Cmd+Z keep working as undo
      if (e.key.toLowerCase() !== "z" || e.ctrlKey || e.metaKey || e.altKey) return
      // Don't trigger while typing in a field
      const t = e.target as HTMLElement
      if (t.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(t.tagName)) return
      router.push("/contact")
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [router])

  return (
    <main className="fixed inset-0 z-[60] overflow-y-auto bg-white font-[family-name:var(--font-jost)] md:overflow-hidden">
      <style>{`
        html, body { overflow: hidden; }
        @keyframes tickerMove { to { transform: translateX(-50%); } }
        @keyframes pixFloat { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-6px) rotate(20deg); } }
        @keyframes keyPress {
          0%, 62%, 100% { transform: translateY(0); box-shadow: 0 3px 0 #111; }
          72%, 84% { transform: translateY(3px); box-shadow: 0 0 0 #111; }
        }
        .ticker { animation: tickerMove 22s linear infinite; }
        .pix-float { animation: pixFloat 4s ease-in-out infinite; }
        .key-press { animation: keyPress 2.4s ease-in-out infinite; }
        .sticker { transform: rotate(var(--r, 0deg)); transition: transform .35s cubic-bezier(.3,1.6,.5,1), box-shadow .3s ease; }
        .sticker:hover { transform: rotate(0deg) translate(-2px, -3px) scale(1.04); box-shadow: 6px 6px 0 #111; }
        @media (prefers-reduced-motion: reduce) { .ticker, .pix-float, .key-press { animation: none; } .sticker { transition: none; } }
      `}</style>

      <div className="flex min-h-full flex-col bg-white md:grid md:h-full md:min-h-0 md:grid-rows-[58fr_42fr]">
        {/* ---------------- HERO (edge to edge, square corners) ---------------- */}
        <section className="relative h-[28rem] min-h-0 overflow-hidden md:h-auto">
          <Photo src={PHOTO_MAIN} className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* top-left block: logo + nav pill */}
          <div className="absolute left-0 top-0 z-20 flex items-center gap-2 rounded-br-[2rem] bg-white p-3 pr-5">
            <Fillet at="100% 100%" className="left-full top-0" />
            <Fillet at="100% 100%" className="left-0 top-full" />
            <Link
              href="/home"
              aria-label="Home"
              className={`${display.className} grid h-11 w-11 shrink-0 place-items-center rounded-full text-lg text-white`}
              style={{ background: PINK }}
            >
              D
            </Link>
            <nav className="flex items-center gap-0.5 rounded-full p-1 text-[11px] sm:text-sm md:gap-1" style={{ background: SOFT, color: TEXT }}>
              {nav.map((n, k) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`rounded-full px-2 py-1.5 transition sm:px-3 ${k === 0 ? "text-white" : "hover:bg-white"}`}
                  style={k === 0 ? { background: PINK } : undefined}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* top-center hint: "press z" (clickable, shows on wide screens so it never overlaps the blocks) */}
          <Link
            href="/contact"
            className="absolute left-1/2 top-4 z-20 hidden -translate-x-1/2 items-center gap-2.5 rounded-full border-2 border-[#111] bg-white/90 px-4 py-2 text-xs shadow-[3px_3px_0_#111] backdrop-blur transition hover:-translate-y-0.5 lg:flex"
            style={{ color: TEXT }}
          >
            <span>Need something to work on? Press</span>
            <Key press>Z</Key>
            <span className="-ml-2">.</span>
          </Link>

          {/* top-right block: email */}
          <a
            href={`mailto:${EMAIL}`}
            className="absolute right-0 top-0 z-20 hidden items-center gap-3 rounded-bl-[2rem] bg-white pb-3 pl-7 pr-6 pt-3 md:flex"
            style={{ color: TEXT }}
          >
            <Fillet at="0% 100%" className="right-full top-0" />
            <Fillet at="0% 100%" className="right-0 top-full" />
            <Mail className="h-4 w-4" />
            <span className="leading-tight">
              <span className="block text-sm font-semibold">{EMAIL}</span>
              <span className="block text-[10px] opacity-70">email me for projects</span>
            </span>
          </a>

          {/* bottom-left block: heading (curved corner) */}
          <div className="absolute bottom-0 left-0 z-20 hidden rounded-tr-[2rem] bg-white pb-3 pl-6 pr-10 pt-4 md:block">
            <Fillet at="100% 0%" className="bottom-0 left-full" />
            <Fillet at="100% 0%" className="bottom-full left-0" />
            <h2
              className={`${display.className} text-center text-[clamp(1.5rem,3vw,2.8rem)] font-bold uppercase leading-[1.1]`}
              style={{ color: TEXT }}
            >
              My
              <br />
              story
            </h2>
          </div>

          {/* title */}
          <div className="absolute bottom-5 right-5 z-10 text-right text-white md:bottom-7 md:right-10">
            {/* mobile version of the hint (tap to go to contact) */}
            <Link
              href="/contact"
              className="mb-2 inline-flex items-center gap-2 rounded-full border-2 border-[#111] bg-white/90 px-3 py-1.5 text-[11px] shadow-[2px_2px_0_#111] backdrop-blur md:hidden"
              style={{ color: TEXT }}
            >
              <span>press</span>
              <Key press>Z</Key>
            </Link>
            <h1 className={`${display.className} text-[clamp(1.35rem,4.6vw,4.5rem)] font-bold uppercase leading-[1.05]`}>
              Dzeethan Val
              <br />
              B. Almoguerra
            </h1>
          </div>
        </section>

        {/* ---------------- BOTTOM ROW ---------------- */}
        <section className="grid min-h-0 gap-6 px-5 pb-5 pt-5 md:grid-cols-[28%_26%_1fr] md:gap-8 md:px-10 md:pb-6 md:pt-6">
          {/* about + small photo */}
          <div className="flex min-h-0 flex-col gap-3">
            <p className="text-[11px] leading-relaxed md:text-xs" style={{ color: TEXT }}>
              <p className="text-[11px] leading-relaxed md:text-xs" style={{ color: TEXT }}>
                Code is how I tell stories. I design and build websites that feel bold, playful and a little bit anime, and I&apos;m still figuring out what I can create next.
              </p>
            </p>
            <Photo src={PHOTO_SMALL} className="min-h-40 flex-1 md:min-h-0">
              {/* caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent px-3 pb-3 pt-10 text-white">
                <p className="flex flex-wrap items-center gap-1.5 text-[10px] leading-snug text-white/80 md:text-[11px]">
                  <span>Made a mistake? no problem,</span>
                  <span className="inline-flex items-center gap-1">
                    <Key dark>Ctrl</Key>
                    <Key dark>Z</Key>
                  </span>
                  <span className="-ml-0.5">!</span>
                </p>
                <p className="mt-1.5 text-xs font-semibold leading-snug md:text-sm">
                  Hi I&apos;m Dzeethan, and this?{" "}
                  <span className="underline decoration-white/60 underline-offset-4">Is just the beginning.</span>
                </p>
              </div>
            </Photo>
          </div>

          {/* things I love (sticker tiles) */}
          <div className="flex min-h-0 flex-col gap-3">
            <div className="flex items-start justify-between gap-2">
              <h2
                className={`${display.className} text-[clamp(1.3rem,2.4vw,2.2rem)] font-bold uppercase leading-[0.98]`}
                style={{ color: TEXT }}
              >
                Things
                <br />
                I love
              </h2>
              <Link
                href="/hobbies"
                aria-label="View my hobbies"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-white transition hover:-translate-y-0.5 hover:rotate-12 hover:shadow-[0_10px_24px_-10px_#000]"
                style={{ background: PINK }}
              >
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="grid min-h-44 flex-1 grid-cols-2 grid-rows-2 gap-2.5 md:min-h-0 md:gap-3">
              {loves.map((l) => (
                <Link
                  key={l.label}
                  href="/hobbies"
                  className={`sticker group relative flex min-h-0 flex-col justify-between overflow-hidden rounded-xl border-2 border-[#111] p-2.5 shadow-[3px_3px_0_#111] ${l.tone}`}
                  style={{ ["--r" as string]: `${l.rot}deg` }}
                >
                  {/* pixel dot texture */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-[0.12]"
                    style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "8px 8px" }}
                  />
                  <span className="relative flex items-start justify-between">
                    <span className={`${display.className} text-2xl leading-none grayscale md:text-3xl`}>{l.icon}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-40 transition group-hover:opacity-100" />
                  </span>
                  <span className="relative">
                    <span className={`${display.className} block text-[11px] font-bold uppercase leading-tight md:text-xs`}>{l.label}</span>
                    <span className="mt-0.5 hidden text-[10px] leading-tight opacity-60 [@media(min-height:780px)]:block">{l.sub}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* let's talk card */}
          <div className="relative flex min-h-64 min-w-0 flex-col justify-between gap-3 overflow-hidden rounded-[2rem] bg-[#111] p-5 text-white md:min-h-0 md:p-6">
            {/* pixel dot texture + soft glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{ backgroundImage: "radial-gradient(#ffffff26 1px, transparent 1px)", backgroundSize: "14px 14px" }}
            />
            <div aria-hidden className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

            {/* status row */}
            <div className="relative flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                ONLINE
              </span>
              <span className="pix-float text-xl" aria-hidden>
                ✦
              </span>
            </div>

            {/* heading + copy */}
            <div className="relative">
              <h2 className={`${display.className} text-[clamp(1.2rem,2.2vw,2rem)] font-bold uppercase leading-[1.05]`}>
                Let&apos;s build
                <br />
                something
              </h2>
              <p className="mt-2 hidden max-w-xs text-[11px] leading-relaxed text-white/65 md:text-xs [@media(min-height:780px)]:block">
                Got an idea, a project, or just want to say hi? My inbox is always open.
              </p>
            </div>

            {/* actions */}
            <div className="relative flex flex-wrap items-center gap-2">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-semibold text-black transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_#fff]"
              >
                Say Hello
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-full border border-white/30 px-3.5 py-2 text-xs text-white/85 transition hover:bg-white hover:text-black"
                >
                  {s.label}
                </a>
              ))}
            </div>

            {/* scrolling tools strip */}
            <div
              className="relative -mx-5 overflow-hidden border-t border-white/15 pt-3 md:-mx-6"
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
        </section>
      </div>
    </main>
  )
}