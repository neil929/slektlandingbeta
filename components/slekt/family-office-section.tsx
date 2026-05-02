"use client"

import { useInView } from "@/hooks/use-in-view"

const items = [
  {
    num: "01",
    title: "Earn a real rate on cash",
    desc: "Government bonds, corporate bonds, higher-yield options. You pick the risk. 2–8% from day one.",
  },
  {
    num: "02",
    title: "All accounts in one place",
    desc: "Open accounts for all your companies and family members. Move money seamlessly within your group.",
  },
  {
    num: "03",
    title: "Your AI advisory team",
    desc: "Specialist agents act as your CFO, wealth advisor, and tax helper — the support level reserved for large family offices.",
  },
  {
    num: "04",
    title: "Privacy by default",
    desc: "End-to-end encrypted. EU data residency. Your financial life is yours. Helsinki-regulated, MiFID II.",
  },
]

export function FamilyOfficeSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="bg-frost py-[72px] px-5 md:py-28 md:px-[60px]" id="family-office">
      <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-royal mb-2.5 flex items-center gap-2.5">
        <span className="block w-[18px] h-px bg-royal" />
        For every business owner
      </div>
      <h2 className="font-serif text-[clamp(36px,4.2vw,58px)] font-medium tracking-[0.01em] leading-[1.1] mb-[18px] text-navy">
        Build your own
        <br />
        <em className="italic text-royal font-normal">Family Office</em>
      </h2>
      <p className="text-base font-light text-mist max-w-[520px] leading-[1.85] mb-[60px]">
        A traditional family office needs €25M+ in assets, Goldman relationships, and a team of 10.
        It was designed for the 0.1%.
      </p>

      <div
        ref={ref}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-start transition-all duration-[650ms] ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div>
          <div className="bg-navy text-white inline-block px-6 py-4 rounded-[11px] mb-9">
            <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-mist/50 mb-1">
              The name
            </p>
            <div className="font-serif text-[26px] font-normal italic text-gold leading-[1.1]">
              Slekt
            </div>
            <div className="text-xs text-mist/60 mt-1">
              family · clan · lineage · kin
              <br />
              <span className="font-mono text-[9px] tracking-[0.1em] opacity-60">
                IN NORDIC LANGUAGES
              </span>
            </div>
          </div>

          <p className="font-serif text-2xl font-normal italic text-navy/70 leading-[1.5] max-w-[320px] mb-7">
            &ldquo;Every hard-working business owner deserves the best advice, tools and products to
            build wealth.&rdquo;
          </p>

          <div className="p-[22px] bg-gold/15 border border-gold/40 rounded-[11px]">
            <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-gold mb-[7px]">
              Previously reserved for
            </div>
            <div className="font-serif text-xl font-medium text-navy mb-2">
              Old money. Goldman clients.
              <br />
              €25M+ only.
            </div>
            <p className="text-xs font-light text-navy/70 leading-[1.7]">
              Slekt gives every founder and entrepreneur the same investment products and AI advisors
              — without the gatekeeping.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {items.map((item, i) => (
            <div
              key={item.num}
              className="flex gap-[18px] items-start p-[22px] bg-white border border-mist/30 rounded-[11px] hover:border-royal/40 hover:translate-x-1 transition-all duration-200"
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              <div className="font-serif text-[32px] font-semibold text-mist/30 leading-none shrink-0 w-11">
                {item.num}
              </div>
              <div>
                <div className="font-serif text-[19px] font-medium text-navy mb-[5px]">
                  {item.title}
                </div>
                <p className="text-[13px] font-light text-mist leading-[1.75]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
