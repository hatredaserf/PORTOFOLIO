import { ArrowUpRight } from "lucide-react"
import { PageShell, Card, SectionTitle, EMAIL, socials } from "@/components/site/shell"
import { ContactForm } from "@/components/site/contact-form"

export default function ContactPage() {
  return (
    <PageShell title={["Let's", "talk"]} cta={false}>
      <div className="grid gap-10 md:grid-cols-[1fr_1.15fr] md:gap-14">
        {/* left: info */}
        <div className="flex flex-col gap-6">
          <SectionTitle>
            Say
            <br />
            hello
          </SectionTitle>
          <p className="max-w-sm text-sm leading-relaxed text-[#111]/75">
            Got an idea, a project, or just want to say hi? My inbox is always open.
          </p>

          <div className="space-y-3">
            <Card href={`mailto:${EMAIL}`} tone="bg-[#111] text-white" rot={-1.5} i={0} className="p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <span className="block text-[10px] uppercase tracking-[0.2em] opacity-60">Email</span>
                  <span className="block truncate text-sm font-semibold">{EMAIL}</span>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 opacity-60 transition group-hover:opacity-100" />
              </div>
            </Card>

            {socials.map((s, k) => (
              <Card key={s.label} href={s.href} tone={k % 2 ? "bg-white text-[#111]" : "bg-[#ececec] text-[#111]"} rot={k % 2 ? 1.5 : -1} i={k + 1} className="p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.2em] opacity-60">Find me on</span>
                    <span className="block text-sm font-semibold">{s.label}</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 opacity-60 transition group-hover:opacity-100" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* right: form */}
        <div className="rounded-[2rem] border-2 border-[#111] bg-[#ececec] p-6 shadow-[6px_6px_0_#111] md:p-8">
          <ContactForm />
        </div>
      </div>
    </PageShell>
  )
}