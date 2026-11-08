import { PageShell, Card, SectionTitle, display } from "@/components/site/shell"

// ✏️ Edit the icons, titles and text
const hobbies = [
  { icon: "🎌", title: "Anime", text: "Shows and manga that inspire the look and feel of everything I make.", tone: "bg-white text-[#111]", rot: -2.5 },
  { icon: "💻", title: "Coding", text: "Building clean, bold interfaces with Next.js, React and Tailwind CSS.", tone: "bg-[#111] text-white", rot: 2 },
  { icon: "🎮", title: "Gaming", text: "Always player one: co-op nights, challenges and great soundtracks.", tone: "bg-[#ececec] text-[#111]", rot: -1.5 },
  { icon: "🎨", title: "Drawing", text: "Sketching characters and ideas with clean lines and bold shapes.", tone: "bg-white text-[#111]", rot: 2.5 },
  { icon: "💻", title: "Movies", text: "Watching movies that i like.", tone: "bg-[#111] text-white", rot: -2 },
  { icon: "✦", title: "More soon", text: "Always collecting new things to love. Check back later.", tone: "bg-[#ececec] text-[#111]", rot: 1.5 },
]

export default function HobbiesPage() {
  return (
    <PageShell title={["My", "hobbies"]}>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <SectionTitle>
          Things
          <br />I love
        </SectionTitle>
        <p className="max-w-sm text-sm leading-relaxed text-[#111]/75">
          When I&apos;m not coding, you&apos;ll probably find me doing one of these.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {hobbies.map((h, k) => (
          <Card key={h.title} tone={h.tone} rot={h.rot} i={k} className="min-h-48 p-5">
            <div className="flex h-full min-h-40 flex-col justify-between gap-6">
              <span className={`${display.className} text-4xl leading-none ${h.icon === "あ" || h.icon === "✦" ? "" : "grayscale"}`}>{h.icon}</span>
              <div>
                <h3 className={`${display.className} text-sm font-bold uppercase`}>{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-80">{h.text}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </PageShell>
  )
}