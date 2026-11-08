"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { EMAIL } from "./poster-ui"

// Opens the visitor's email app with the message filled in (no backend needed)
export function PosterContactForm() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const subject = encodeURIComponent(`Hello from ${name || "your portfolio"}`)
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${encodeURIComponent(message)}`
      }}
      className="flex w-full max-w-md flex-col gap-3"
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        required
        className="rounded-2xl border-2 border-black bg-white px-4 py-3 text-sm outline-none transition focus:bg-[#ececec]"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Tell me about your idea…"
        required
        rows={4}
        className="resize-none rounded-2xl border-2 border-black bg-white px-4 py-3 text-sm outline-none transition focus:bg-[#ececec]"
      />
      <button
        type="submit"
        className="inline-flex w-fit items-center gap-2 rounded-full bg-black px-7 py-3 text-sm text-white transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_#000]"
      >
        send message
        <ArrowUpRight className="h-4 w-4" />
      </button>
    </form>
  )
}
