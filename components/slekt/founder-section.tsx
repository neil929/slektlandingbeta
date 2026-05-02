"use client"

import { useInView } from "@/hooks/use-in-view"

export function FounderSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="bg-midnight py-[72px] px-5 md:py-28 md:px-[60px] relative overflow-hidden">
      <svg
        className="absolute inset-0 pointer-events-none opacity-[0.14]"
        viewBox="0 0 1200 600"
        fill="none"
      >
        <circle cx="1100" cy="300" r="360" stroke="rgba(26,79,160,0.3)" strokeWidth="1" />
        <circle cx="1100" cy="300" r="240" stroke="rgba(240,192,64,0.3)" strokeWidth="1" />
        <circle cx="1100" cy="300" r="120" stroke="rgba(26,79,160,0.3)" strokeWidth="1" />
      </svg>

      <div
        ref={ref}
        className={`max-w-[720px] relative z-[1] transition-all duration-[650ms] ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-gold mb-7 flex items-center gap-2.5">
          <span className="block w-[18px] h-px bg-gold" />
          Section nine — Founder&apos;s note
        </div>

        <div className="font-serif text-[clamp(20px,2.5vw,28px)] font-normal text-mist leading-[1.6] mb-9 border-l-[3px] border-gold pl-7 space-y-6">
          <p>
            We have been building multiple financial startups over the last 10 years. We have solved a lot of challenges for our users from launching Neobanks for businesses, payment orchestration platforms, combining crypto with fiat.
          </p>
          <p>
            We were always held back due to regulation and the slow pace of developing technology in the payments space.
          </p>
          <p className="text-white">
            AI-first platform development is the greatest opportunity we have seen in our careers to truly revolutionize banking and wealth management and have allowed every business to have their own personalised bank and tools that can be fully customized and meet their needs.
          </p>
        </div>

        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-royal flex items-center justify-center font-serif text-lg font-semibold text-midnight shrink-0">
            N
          </div>
          <div>
            <div className="font-serif text-[17px] font-medium text-white">Neil Ambikar</div>
            <div className="text-[11px] text-mist/50 mt-0.5 font-mono tracking-[0.07em]">
              Founder · Slekt Capital
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
