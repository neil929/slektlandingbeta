"use client"

import { useInView } from "@/hooks/use-in-view"

const generations = [
  {
    variant: "v1",
    badge: "Banking 1.0",
    era: "Old legacy banking systems",
    sub: "Built 80s/90s · Server-based",
    features: [
      "Very static with no change",
      "Bare minimum banking features",
      "No advice or ability to customise anything",
    ],
  },
  {
    variant: "v2",
    badge: "Banking 2.0",
    era: "First generation fintechs",
    sub: "Revolut, Wise · Cloud-native",
    features: [
      "Cloud approach, modern technology",
      "Faster integration and better UX/UI",
      "Adding user friendly services like eSIMs, investments",
      "But still basic banking features",
    ],
  },
  {
    variant: "v3",
    badge: "Banking 3.0",
    era: "Slekt Banking OS",
    sub: "Next Generation · AI-native",
    features: [
      "Full flexibility on user experience and personal feel",
      "Acts first as a team of expert advisors which also does banking",
      "Full flexibility on integrations and data management",
      "The entire app can be re-written at user level to be fully customisable",
      "No more just choosing between night and day mode",
    ],
    note: "The old banking systems cannot be changed to modern versions cause they are so bad, and the current fintech ones cannot be changed to AI native. Slekt is building something completely new.",
  },
]

export function GenerationsSection() {
  const { ref, isInView } = useInView()

  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case "v1":
        return {
          bg: "bg-white border-mist/30",
          badge: "bg-mist/30 text-navy",
          era: "text-navy",
          sub: "text-mist",
          feat: "text-mist",
          dot: "bg-mist/60",
        }
      case "v2":
        return {
          bg: "bg-frost border-royal/20",
          badge: "bg-royal text-white",
          era: "text-navy",
          sub: "text-mist",
          feat: "text-mist",
          dot: "bg-royal",
        }
      case "v3":
        return {
          bg: "bg-navy border-navy",
          badge: "bg-gold text-midnight",
          era: "text-white",
          sub: "text-mist/50",
          feat: "text-mist/70",
          dot: "bg-gold",
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
    <section className="bg-frost py-[72px] px-5 md:py-28 md:px-[60px]" id="banking30">
      <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-royal mb-2.5 flex items-center gap-2.5">
        <span className="block w-[18px] h-px bg-royal" />
        Section 8
      </div>
      <h2 className="font-serif text-[clamp(36px,4.2vw,58px)] font-medium tracking-[0.01em] leading-[1.1] mb-[60px] text-navy">
        Three generations of
        <br />
        <em className="italic text-royal font-normal">Banking technology.</em>
      </h2>

      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-3 gap-3.5 transition-all duration-[650ms] ease-out ${
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
                className={`font-mono text-[9px] tracking-[0.15em] uppercase rounded-[20px] px-[11px] py-[3px] inline-block mb-[18px] font-medium ${styles.badge}`}
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
                <div className="text-[11px] text-mist/40 mt-[18px] pt-3.5 border-t border-mist/15 italic leading-[1.65]">
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
