"use client"

import { useInView } from "@/hooks/use-in-view"

export function FounderSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="bg-lapis-deep py-[72px] px-5 md:py-28 md:px-[60px] relative overflow-hidden">
      <svg
        className="absolute inset-0 pointer-events-none opacity-[0.14]"
        viewBox="0 0 1200 600"
        fill="none"
      >
        <circle cx="1100" cy="300" r="360" stroke="rgba(0,212,168,0.3)" strokeWidth="1" />
        <circle cx="1100" cy="300" r="240" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
        <circle cx="1100" cy="300" r="120" stroke="rgba(0,212,168,0.3)" strokeWidth="1" />
      </svg>

      <div
        ref={ref}
        className={`max-w-[680px] relative z-[1] transition-all duration-[650ms] ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-teal mb-7 flex items-center gap-2.5">
          <span className="block w-[18px] h-px bg-teal" />
          {"Founder's note"}
        </div>

        <p className="font-serif text-[clamp(24px,2.8vw,36px)] font-normal italic text-white/70 leading-[1.5] mb-9 border-l-[3px] border-teal pl-7">
          We have been building financial startups for 10 years. AI-first development is the
          greatest opportunity we have seen to truly revolutionise banking — and allow every
          business to have its own personalised bank.
        </p>

        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal to-lapis-mid flex items-center justify-center font-serif text-lg font-semibold text-white shrink-0">
            N
          </div>
          <div>
            <div className="font-serif text-[17px] font-medium text-white">Neil Ambikar</div>
            <div className="text-[11px] text-white/35 mt-0.5 font-mono tracking-[0.07em]">
              Founder · Slekt Capital · Previously Narvi Payments
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
