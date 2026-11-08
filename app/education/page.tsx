import { PageShell, Card, SectionTitle } from "@/components/site/shell"

// ✏️ Years are estimates, so change them if any are off
const schools = [
  {
    level: "Elementary",
    name: "Claveria North Central School",
    sub: "Where it all started",
    years: "2012 – 2018",
    tone: "bg-white text-[#111]",
    rot: -0.8,
  },
  {
    level: "Junior High School",
    name: "Burias Colleges Inc.",
    sub: "Growing curiosity for tech and design",
    years: "2018 – 2022",
    tone: "bg-[#ececec] text-[#111]",
    rot: 0.8,
  },
  {
    level: "Senior High School",
    name: "Naga College Foundation Inc.",
    sub: "Senior High School (SHS)",
    years: "2022 – 2024",
    tone: "bg-white text-[#111]",
    rot: -0.8,
  },
  {
    level: "College · Now",
    name: "Naga College Foundation Inc.",
    sub: "College of Computer Studies",
    years: "2025 – Present",
    tone: "bg-[#111] text-white",
    rot: 0.8,
    highlights: [""],
  },
]

export default function EducationPage() {
  return (
    <PageShell title={["My", "education"]}>
      <div className="grid gap-8 md:grid-cols-[30%_1fr] md:gap-12">
        <div className="md:sticky md:top-6 md:self-start">
          <SectionTitle>
            Where
            <br />I learn
          </SectionTitle>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#111]/75">
            From elementary to college, and the things I teach myself along the way.
          </p>
        </div>

        <ol className="relative space-y-5 border-l-2 border-[#111] pl-6 md:pl-8">
          {schools.map((s, k) => (
            <li key={s.level} className="relative">
              <span className="absolute -left-[2.05rem] top-6 h-4 w-4 border-2 border-[#111] bg-white md:-left-[2.55rem]" aria-hidden />
              <Card tone={s.tone} rot={s.rot} i={k} className="p-5 md:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] opacity-60">{s.level}</span>
                  <span className="text-[11px] opacity-60">{s.years}</span>
                </div>
                <h3 className="mt-2 text-lg font-bold leading-tight md:text-2xl">{s.name}</h3>
                <p className="mt-1 text-xs font-medium opacity-70 md:text-sm">{s.sub}</p>

                {s.highlights && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.highlights.map((h) => (
                      <span key={h} className="rounded-full border border-white/40 px-3 py-1 text-[11px]">
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </Card>
            </li>
          ))}

          {/* self-study */}
          <li className="relative">
            <span className="absolute -left-[2.05rem] top-6 h-4 w-4 border-2 border-[#111] bg-[#111] md:-left-[2.55rem]" aria-hidden />
            <Card tone="bg-white text-[#111]" rot={-0.8} i={4} className="border-dashed p-5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] opacity-60">Outside class</span>
              <h3 className="mt-2 text-base font-bold leading-tight md:text-lg">Self-study</h3>
              <p className="mt-1 text-xs opacity-75 md:text-sm">
                Learning and building projects with Next.js, React and Tailwind CSS.
              </p>
            </Card>
          </li>
        </ol>
      </div>
    </PageShell>
  )
}