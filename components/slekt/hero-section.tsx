import Link from "next/link"
import { ArrowRight } from "lucide-react"

const productHighlights = [
  { name: "Slekt Earn", stat: "2–8%", color: "text-teal", accent: "bg-teal" },
  { name: "Slekt Pay", stat: "80%", color: "text-gold", accent: "bg-gold" },
  { name: "Slekt Banking OS", stat: "AI OS", color: "text-lapis-light", accent: "bg-lapis-light" },
]

export function HeroSection() {
  return (
    <section className="min-h-screen bg-lapis-deep flex flex-col justify-center px-5 pt-24 pb-16 md:px-[60px] md:pt-32 md:pb-20 relative overflow-hidden">
      <svg
        className="absolute top-0 right-0 w-[640px] h-[640px] pointer-events-none"
        viewBox="0 0 640 640"
        fill="none"
      >
        <circle cx="560" cy="80" r="300" stroke="rgba(0,212,168,0.055)" strokeWidth="1" />
        <circle cx="560" cy="80" r="210" stroke="rgba(0,212,168,0.07)" strokeWidth="1" />
        <circle cx="560" cy="80" r="130" stroke="rgba(201,168,76,0.07)" strokeWidth="1" />
        <circle cx="560" cy="80" r="60" fill="rgba(0,212,168,0.04)" />
      </svg>

      <div className="relative z-[1] grid grid-cols-1 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px] gap-14 xl:gap-24 items-center">
        <div>
          <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-teal mb-8 flex items-center gap-3 animate-fade-up">
            <span className="block w-6 h-px bg-teal" />
            Banking 3.0 · AI-Native Platform
          </p>

          <h1 className="font-serif text-[clamp(42px,5.2vw,80px)] font-medium text-white tracking-[0.01em] leading-[1.06] mb-8 animate-fade-up-delay-1">
            Banking was never designed
            <br />
            to be <em className="italic text-teal font-normal">AI-native.</em>
            <br />
            So we are building it
            <br />
            from scratch.
          </h1>

          <p className="text-[15px] font-light text-white/[0.6] max-w-[500px] leading-[1.9] mb-11 animate-fade-up-delay-2">
            Legacy banks run on 1980s mainframes. The first neobanks moved to the cloud but kept the
            same mental model. Slekt is different — a core banking OS where AI is the architecture
            itself.
          </p>

          <div className="flex gap-4 items-center animate-fade-up-delay-3">
            <Link
              href="#waitlist"
              className="bg-teal text-lapis-deep text-sm font-semibold px-7 py-[14px] rounded-[9px] inline-flex items-center gap-2 hover:scale-[1.03] hover:shadow-[0_6px_22px_rgba(0,212,168,0.35)] transition-all"
            >
              <ArrowRight className="w-[15px] h-[15px]" />
              Join the Waitlist
            </Link>
            <Link
              href="#products"
              className="text-white/[0.55] text-sm font-light inline-flex items-center gap-1.5 pb-0.5 border-b border-white/[0.15] hover:text-white hover:border-white/40 transition-colors"
            >
              See how it works ↓
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-3 animate-fade-up-delay-2">
          {productHighlights.map((item) => (
            <div
              key={item.name}
              className="bg-white/[0.04] border border-white/[0.08] rounded-[14px] px-6 py-5 flex items-center gap-5 hover:bg-white/[0.07] hover:border-white/[0.14] transition-all duration-200 group"
            >
              <div className={`w-0.5 self-stretch rounded-full ${item.accent} opacity-50 group-hover:opacity-100 transition-opacity shrink-0`} />
              <div className={`font-serif text-[38px] font-semibold leading-none ${item.color} w-20 shrink-0`}>
                {item.stat}
              </div>
              <div className="font-serif text-[15px] font-medium text-white/75 leading-snug">{item.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-7 right-5 md:right-[60px] font-mono text-[9px] tracking-[0.16em] uppercase text-white/[0.18] flex flex-col items-center gap-2 animate-fade-up-delay-4">
        Scroll
        <span className="block w-px h-9 bg-gradient-to-b from-white/25 to-transparent" />
      </div>
    </section>
  )
}
