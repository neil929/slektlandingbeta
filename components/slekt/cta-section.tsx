"use client"

import { useState } from "react"

export function CtaSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section
      className="min-h-[76vh] flex flex-col justify-center items-center text-center relative overflow-hidden bg-lapis py-20 px-6"
      id="waitlist"
    >
      <svg className="absolute inset-0 pointer-events-none" viewBox="0 0 1200 800" fill="none">
        <circle cx="600" cy="400" r="360" stroke="rgba(0,212,168,0.055)" strokeWidth="1" />
        <circle cx="600" cy="400" r="260" stroke="rgba(0,212,168,0.045)" strokeWidth="1" />
        <circle cx="600" cy="400" r="160" stroke="rgba(201,168,76,0.045)" strokeWidth="1" />
        <circle cx="600" cy="400" r="60" fill="rgba(0,212,168,0.03)" />
      </svg>

      <div className="relative z-[1] flex flex-col items-center">
        <div className="font-mono text-[10px] tracking-[0.20em] uppercase text-teal mb-[22px] flex items-center gap-3">
          <span className="block w-[18px] h-px bg-teal" />
          Coming soon · Be first
          <span className="block w-[18px] h-px bg-teal" />
        </div>

        <h2 className="font-serif text-[clamp(38px,5vw,68px)] font-medium text-white tracking-[0.01em] leading-[1.05] max-w-[720px] mb-[18px]">
          The wealth infrastructure
          <br />
          for Europe&apos;s <em className="italic text-teal font-normal">entrepreneurial class.</em>
        </h2>

        <p className="text-base font-light text-white/[0.42] max-w-[420px] leading-[1.8] mb-11">
          We are building something Europe has never had. Be the first to know when it is ready.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex max-w-[420px] w-full border-[1.5px] border-white/[0.16] rounded-[10px] overflow-hidden mb-3.5"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@company.com"
            required
            className="flex-1 bg-white/[0.06] border-none outline-none px-[18px] py-[15px] font-sans text-sm font-light text-white placeholder:text-white/[0.28]"
          />
          <button
            type="submit"
            className="bg-teal text-lapis-deep border-none cursor-pointer font-sans text-sm font-semibold px-6 py-[15px] whitespace-nowrap hover:bg-[#1FDFB5] transition-colors"
          >
            Join Waitlist
          </button>
        </form>

        <p
          className={`text-[11px] font-mono tracking-[0.06em] transition-colors ${
            submitted ? "text-teal" : "text-white/20"
          }`}
        >
          {submitted
            ? "You are on the list. We will be in touch when Slekt launches."
            : "No spam. Just a launch notification when we are ready."}
        </p>
      </div>
    </section>
  )
}
