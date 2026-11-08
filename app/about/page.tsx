import { PageShell, Photo, Card, SectionTitle, Key, PHOTO_SMALL, tools } from "@/components/site/shell"

// ✏️ Edit these
const facts = [
  { icon: "🎓", label: "Studying", value: "College of Computer Studies", tone: "bg-white text-[#111]", rot: -2 },
  { icon: "💻", label: "Building", value: "Next.js & React projects", tone: "bg-[#111] text-white", rot: 2 },
  { icon: "💻", label: "Learning", value: "Coding", tone: "bg-[#ececec] text-[#111]", rot: -1.5 },
  { icon: "🎮", label: "Fueled by", value: "Anime, games & drawing", tone: "bg-white text-[#111]", rot: 2.5 },
]

export default function AboutPage() {
  return (
    <PageShell title={["About", "me"]}>
      <div className="grid gap-8 md:grid-cols-[36%_1fr] md:gap-12">
        {/* photo + caption */}
        <Photo src={"/me-3.jfif"} className="min-h-80 md:min-h-[26rem]">
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent px-4 pb-4 pt-14 text-white">
            <p className="flex flex-wrap items-center gap-1.5 text-[11px] leading-snug text-white/80">
              <span>Made a mistake? no problem,</span>
              <span className="inline-flex items-center gap-1">
                <Key dark>Ctrl</Key>
                <Key dark>Z</Key>
              </span>
              <span className="-ml-0.5">!</span>
            </p>
            <p className="mt-1.5 text-sm font-semibold leading-snug">
              Hi I&apos;m Dzeethan, and this?{" "}
              <span className="underline decoration-white/60 underline-offset-4">Is just the beginning.</span>
            </p>
          </div>
        </Photo>

        {/* text + facts */}
        <div className="flex flex-col gap-6">
          <SectionTitle>
            Hi, I&apos;m
            <br />
            Dzeethan
          </SectionTitle>
          <div className="max-w-xl space-y-3 text-sm leading-relaxed text-[#111]">
            <p>
              I love mixing code with creativity. I build clean, bold and playful things for the web, and I&apos;m always learning something new, from React.
            </p>
            <p>
                Hi, I&apos;m Dzeethan, a Computer Studies student at Naga College Foundation who loves turning ideas into clean, bold and playful things for the web. I build with Next.js, React and Tailwind CSS, and I&apos;m happiest when code and creativity meet. Outside the screen, I&apos;m usually deep into an anime, watching a great movie, sketching characters, or playing games with a good soundtrack. Every project I finish teaches me something new, and honestly, this is just the beginning.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {facts.map((f, k) => (
              <Card key={f.label} tone={f.tone} rot={f.rot} i={k} className="p-3.5">
                <span className="block text-2xl leading-none grayscale">{f.icon}</span>
                <span className="mt-3 block text-[10px] uppercase tracking-[0.2em] opacity-60">{f.label}</span>
                <span className="block text-sm font-semibold leading-snug">{f.value}</span>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* tools */}
      <div className="mt-12">
        <SectionTitle>Tools I use</SectionTitle>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {tools.map((t, k) => (
            <span
              key={t}
              className="rise rounded-full border-2 border-[#111] bg-white px-4 py-1.5 text-xs font-semibold shadow-[2px_2px_0_#111] transition hover:-translate-y-0.5 hover:bg-[#111] hover:text-white"
              style={{ ["--i" as string]: k }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </PageShell>
  )
}