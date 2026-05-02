"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen bg-midnight flex flex-col justify-end px-5 pb-[60px] md:px-[60px] md:pb-20 relative overflow-hidden">
      {/* Decorative circles */}
      <svg
        className="absolute -top-20 -right-[60px] w-[640px] h-[640px] pointer-events-none"
        viewBox="0 0 640 640"
        fill="none"
      >
        <circle cx="560" cy="80" r="300" stroke="rgba(26,79,160,0.12)" strokeWidth="1" />
        <circle cx="560" cy="80" r="210" stroke="rgba(26,79,160,0.15)" strokeWidth="1" />
        <circle cx="560" cy="80" r="130" stroke="rgba(240,192,64,0.12)" strokeWidth="1" />
        <circle cx="560" cy="80" r="60" fill="rgba(240,192,64,0.06)" />
      </svg>

      <div className="relative z-[1]">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-gold mb-6 flex items-center gap-3 animate-fade-up">
          <span className="block w-6 h-px bg-gold" />
          Slekt Capital — Banking 3.0
        </p>

        <h1 className="font-serif text-[clamp(40px,6vw,84px)] font-medium text-white tracking-[0.01em] leading-[1.05] max-w-[860px] mb-7 animate-fade-up-delay-1">
          Banking was never designed
          <br />
          to be <em className="italic text-gold font-normal">AI-native.</em>
          <br />
          So we are building it
          <br />
          from scratch.
        </h1>

        <p className="text-base font-light text-mist max-w-[520px] leading-[1.85] mb-11 animate-fade-up-delay-2">
          Legacy banks run on 1980s mainframes. The first neobanks moved to the cloud but kept the
          same mental model. Slekt is something different. A core banking OS where AI isn&apos;t a feature
          bolted on top, it&apos;s the architecture itself.
        </p>

        <div className="flex gap-3.5 items-center animate-fade-up-delay-3">
          <Link
            href="#waitlist"
            className="bg-gold text-midnight text-sm font-semibold px-[26px] py-[13px] rounded-[9px] inline-flex items-center gap-2 hover:scale-[1.03] hover:shadow-[0_6px_22px_rgba(240,192,64,0.32)] transition-all"
          >
            <ArrowRight className="w-[15px] h-[15px]" />
            Join the Waitlist
          </Link>
          <Link
            href="#how-it-works"
            className="text-mist text-sm font-light inline-flex items-center gap-1.5 pb-0.5 border-b border-mist/30 hover:text-white hover:border-mist transition-colors"
          >
            How it works
          </Link>
        </div>
      </div>

      <div className="absolute bottom-7 right-5 md:right-[60px] font-mono text-[9px] tracking-[0.16em] uppercase text-mist/30 flex flex-col items-center gap-2 animate-fade-up-delay-4">
        Scroll
        <span className="block w-px h-9 bg-gradient-to-b from-mist/30 to-transparent" />
      </div>
    </section>
  )
}
