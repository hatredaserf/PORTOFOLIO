"use client"

import { useState, type FormEvent } from "react"
import { ArrowUpRight } from "lucide-react"

const EMAIL = "dvalmoguerra@gbox.ncf.edu.ph"

const field =
  "w-full rounded-xl border-2 border-[#111] bg-white px-4 py-3 text-sm text-[#111] shadow-[3px_3px_0_#111] outline-none transition placeholder:text-[#111]/40 focus:-translate-y-0.5 focus:shadow-[5px_5px_0_#111]"

export function ContactForm() {
  const [sent, setSent] = useState(false)

  // Opens the visitor's email app with everything filled in
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const name = String(f.get("name") ?? "")
    const email = String(f.get("email") ?? "")
    const message = String(f.get("message") ?? "")
    const subject = encodeURIComponent(`Hello from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="block">
        <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.2em]">Your name</span>
        <input name="name" required placeholder="Jane Doe" className={field} />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.2em]">Your email</span>
        <input name="email" type="email" required placeholder="jane@email.com" className={field} />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.2em]">Message</span>
        <textarea name="message" required rows={5} placeholder="Tell me about your idea..." className={`${field} resize-none`} />
      </label>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-[#111] px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_#000]"
      >
        Send message
        <ArrowUpRight className="h-4 w-4" />
      </button>
      {sent && <p className="text-xs text-[#111]/60">Opening your email app... if nothing happens, write to {EMAIL}.</p>}
    </form>
  )
}