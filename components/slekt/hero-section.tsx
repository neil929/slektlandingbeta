"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const layers = [
  {
    num: "01",
    tag: "Layer one",
    title: "AI writes the infrastructure",
    desc: "Integrations, compliance rules, and product features deploy in days, not the years a traditional bank requires.",
  },
  {
    num: "02",
    tag: "Layer two",
    title: "Agents that know your business",
    desc: "Specialist AI trained on financial operations: treasury, onboarding, accounting, wealth management — not a generic chatbot over documents.",
  },
  {
    num: "03",
    tag: "Layer three",
    title: "Users build their own bank",
    desc: "Need invoicing? A custom report? Build it directly into the platform. The interface is yours to modify. No dev team required.",
  },
]

export function HeroSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="min-h-screen bg-midnight flex flex-col justify-center px-5 py-20 md:px-[60px] md:py-28 relative overflow-hidden">
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

      <div className="relative z-[1] mb-16">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-gold mb-6 flex items-center gap-3 animate-fade-up">
          <span className="block w-6 h-px bg-gold" />
          Slekt Capital — Banking 3.0
        </p>

        <h1 className="font-serif text-[clamp(36px,5vw,72px)] font-medium text-white tracking-[0.01em] leading-[1.1] max-w-[800px] mb-7 animate-fade-up-delay-1">
          Banking was never <em className="italic text-gold font-normal">AI-native.</em>
          <br />
          So we are building it from scratch.
        </h1>

        <div className="flex gap-3.5 items-center animate-fade-up-delay-2">
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

      {/* Three Layers */}
      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-3 gap-0.5 transition-all duration-[650ms] ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {layers.map((layer, i) => (
          <div
            key={layer.num}
            className="bg-deep p-8 md:px-8 md:py-[38px] border border-mist/10 relative overflow-hidden hover:border-royal/30 hover:-translate-y-[3px] transition-all duration-[250ms]"
            style={{ transitionDelay: `${i * 75}ms` }}
          >
            <div className="font-serif text-[68px] font-light text-mist/10 leading-none absolute top-5 right-6 pointer-events-none">
              {layer.num}
            </div>
            <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-gold mb-3.5 flex items-center gap-[7px]">
              <span className="block w-3 h-px bg-gold" />
              {layer.tag}
            </div>
            <h3 className="font-serif text-2xl font-medium text-white leading-[1.2] mb-3">
              {layer.title}
            </h3>
            <p className="text-[13px] font-light text-mist leading-[1.8]">{layer.desc}</p>
          </div>
        ))}
      </div>

      {/* Closing statement */}
      <p className="text-center text-mist mt-12 max-w-3xl mx-auto text-base leading-relaxed animate-fade-up-delay-3">
        Legacy and first-gen fintech systems cannot be retrofitted into this. The architecture is incompatible. Slekt has to be built new and that is exactly what we are doing.
      </p>
    </section>
  )
}
