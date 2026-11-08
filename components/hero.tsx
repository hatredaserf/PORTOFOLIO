import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Mail } from "lucide-react";

const BLUE = "#1f6fc5";
const ORANGE = "#f08a5d";
const GREEN = "#22b14c";
const YELLOW = "#f2b84b";

// ✏️ Edit these
const skills = [
    { label: "Next.js", color: BLUE },
    { label: "React", color: ORANGE },
    { label: "TypeScript", color: GREEN },
    { label: "Tailwind", color: YELLOW },
    { label: "UI Design", color: BLUE },
];

function Spark({ color, className = "" }: { color: string; className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
            <path d="M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z" fill={color} />
        </svg>
    );
}

export function Hero() {
    return (
        <section className="fixed inset-x-0 bottom-0 top-14 isolate flex items-center justify-center overflow-hidden bg-[#faf6ea] text-[#1a1a1a] md:top-16">
            {/* lock the page: no scrolling on this screen */}
            <style>{`html, body { overflow: hidden; }`}</style>
            {/* soft colour glows */}
            <div aria-hidden className="pointer-events-none absolute -left-24 top-8 -z-10 h-96 w-96 rounded-full bg-[#1f6fc5]/15 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -right-20 top-32 -z-10 h-96 w-96 rounded-full bg-[#f08a5d]/20 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-64 w-64 rounded-full bg-[#f2b84b]/20 blur-3xl" />

            {/* dotted grid that fades out toward the edges */}
            <div
                aria-hidden
                className="absolute inset-0 -z-10 opacity-40 [background-image:radial-gradient(#00000030_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
            />

            {/* floating sparkles */}
            <Spark color={BLUE} className="absolute left-[12%] top-[22%] hidden h-6 w-6 animate-pulse md:block" />
            <Spark color={ORANGE} className="absolute right-[14%] top-[30%] hidden h-5 w-5 animate-pulse md:block" />
            <Spark color={GREEN} className="absolute bottom-[22%] left-[18%] hidden h-4 w-4 animate-pulse md:block" />
            <div aria-hidden className="absolute right-[20%] top-[14%] hidden h-4 w-4 rounded-full border-2 md:block" style={{ borderColor: YELLOW }} />

            <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-6 text-center">
                <Badge
                    variant="outline"
                    className="mb-6 gap-2 rounded-full border-black/20 bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1a1a1a] backdrop-blur"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22b14c] opacity-70" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22b14c]" />
                    </span>
                    
                </Badge>

                <h1 className="max-w-4xl text-[clamp(2.25rem,min(7.5vw,9.5vh),4.5rem)] font-extrabold leading-[0.98] tracking-tight">
                    Hi, Need Something
                    <br />
                    to work on press{" "}
                    <span className="relative inline-block text-[#1f6fc5]">
                        Z.
                        <svg viewBox="0 0 200 16" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full" aria-hidden>
                            <path
                                d="M2 10 C20 2 30 14 50 8 S80 2 100 9 S140 14 160 7 S190 4 198 8"
                                fill="none"
                                stroke={ORANGE}
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>{" "}
                    
                </h1>

                <p className="mt-6 max-w-xl font-[family-name:var(--font-playfair)] text-lg leading-relaxed text-black/65">
                    Made a mistake? no problem, Ctrl Z! Hi I'm Dzeethan, and this? Is just the beginning.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <Link
                        href="/about"
                        className={cn(
                            buttonVariants({ size: "lg" }),
                            "group h-12 rounded-full bg-[#1f6fc5] px-8 text-white shadow-[0_14px_30px_-14px_#1f6fc5] transition hover:-translate-y-0.5 hover:bg-[#1a5fa8]"
                        )}
                    >
                        About me
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="/contact"
                        className={cn(
                            buttonVariants({ variant: "outline", size: "lg" }),
                            "h-12 rounded-full border-black bg-transparent px-8 transition hover:-translate-y-0.5 hover:bg-black hover:text-white"
                        )}
                    >
                        <Mail className="mr-2 size-4" />
                        Get in touch
                    </Link>
                </div>

                {/* skill pills */}
                <ul className="mt-8 flex max-w-xl flex-wrap items-center justify-center gap-2.5">
                    {skills.map((s) => (
                        <li
                            key={s.label}
                            className="flex items-center gap-2 rounded-full border border-black/15 bg-white/60 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] backdrop-blur"
                        >
                            <span className="h-2 w-2" style={{ background: s.color }} />
                            {s.label}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}