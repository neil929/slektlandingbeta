"use client"

import { useInView } from "@/hooks/use-in-view"

const generations = [
  {
    variant: "v1",
    badge: "Banking 1.0",
    era: "Legacy Banks",
    sub: "1980s – 90s · Server-based",
    features: [
      "No customisation, static systems",
      "Bare-minimum features only",
      "No advice, no personalisation",
      "Decades behind on UX",
    ],
  },
  {
    variant: "v2",
    badge: "Banking 2.0",
    era: "First-Gen Fintech",
    sub: "Revolut, Wise · Cloud-native",
    features: [
      "Cloud infrastructure, better UI",
      "Fast integrations, modern UX",
      "Added investing, eSIMs, extras",
      "Still basic banking at the core",
    ],
  },
  {
    variant: "v3",
    badge: "Banking 3.0",
    era: "Slekt Banking OS",
    sub: "AI-native · Fully customisable",
    features: [
      "AI writes and deploys code",
      "Full data and integration flexibility",
      "Specialist AI advisor team",
      "Fully customisable at user level",
      "Connects to Claude · ChatGPT",
    ],
    note: "The previous two generations cannot be converted to this architecture. Slekt is built new, from scratch.",
  },
]

export function GenerationsSection() {
  const { ref, isInView } = useInView()

  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case "v1":
        return {
          bg: "bg-white border-cream-200",
          badge: "bg-cream-200 text-cream-700",
          era: "text-lapis",
          sub: "text-cream-500",
          feat: "text-cream-700",
          dot: "bg-cream-300",
        }
      case "v2":
        return {
          bg: "bg-lapis-100 border-lapis-100",
          badge: "bg-lapis-mid text-white",
          era: "text-lapis",
          sub: "text-cream-500",
          feat: "text-cream-700",
          dot: "bg-lapis-mid",
        }
      case "v3":
        return {
          bg: "bg-lapis border-lapis",
          badge: "bg-teal text-lapis-deep",
          era: "text-white",
          sub: "text-white/35",
          feat: "text-white/55",
          dot: "bg-teal",
        }
      default:
        return {
          bg: "",
          badge: "",
          era: "",
          sub: "",
          feat: "",
          dot: "",
        }
    }
  }

  return (
    <section className="bg-cream-100 py-[72px] px-5 md:py-28 md:px-[60px]" id="banking30">
      <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-teal-dim mb-2.5 flex items-center gap-2.5">
        <span className="block w-[18px] h-px bg-teal" />
        Why now
      </div>
      <h2 className="font-serif text-[clamp(36px,4.2vw,58px)] font-medium tracking-[0.01em] leading-[1.1] mb-[18px] text-lapis">
        Three generations of
        <br />
        <em className="italic text-lapis-mid font-normal">banking technology</em>
      </h2>
      <p className="text-base font-light text-cream-700 max-w-[520px] leading-[1.85] mb-[60px]">
        Legacy and first-gen fintech systems cannot be retrofitted into AI-native architecture. The
        codebase is incompatible. Slekt must be built new — and that is exactly what we are doing.
      </p>

      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-[60px] transition-all duration-[650ms] ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {generations.map((gen, i) => {
          const styles = getVariantStyles(gen.variant)
          return (
            <div
              key={gen.variant}
              className={`rounded-[14px] p-7 md:px-7 md:py-8 relative overflow-hidden border hover:-translate-y-[3px] transition-transform duration-[250ms] ${styles.bg}`}
              style={{ transitionDelay: `${i * 75}ms` }}
            >
              <span
                className={`font-mono text-[9px] tracking-[0.15em] uppercase rounded-[20px] px-[11px] py-[3px] inline-block mb-[18px] ${styles.badge}`}
              >
                {gen.badge}
              </span>
              <div className={`font-serif text-[26px] font-medium mb-1 ${styles.era}`}>
                {gen.era}
              </div>
              <div className={`text-xs font-light mb-[18px] ${styles.sub}`}>{gen.sub}</div>
              {gen.features.map((feat) => (
                <div
                  key={feat}
                  className={`flex items-start gap-[9px] text-[13px] font-light leading-[1.55] mb-[7px] ${styles.feat}`}
                >
                  <span className={`w-[5px] h-[5px] rounded-full shrink-0 mt-[5px] ${styles.dot}`} />
                  {feat}
                </div>
              ))}
              {gen.note && (
                <div className="text-[11px] text-white/[0.22] mt-[18px] pt-3.5 border-t border-white/[0.08] italic leading-[1.65]">
                  {gen.note}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
