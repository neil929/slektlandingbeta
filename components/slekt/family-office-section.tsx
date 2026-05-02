"use client"

import { useInView } from "@/hooks/use-in-view"

const items = [
  {
    num: "1",
    title: "Earn a real rate on your cash.",
    desc: "Government bonds, corporate bonds, higher-yield options. You pick the risk. Your cash doesn't sit idle anymore.",
  },
  {
    num: "2",
    title: "Manage all accounts in one place.",
    desc: "Open accounts for all your companies and children in one place. Move money seamlessly within your group.",
  },
  {
    num: "3",
    title: "Your team",
    desc: "Our specially trained AI agents act as your advisors, providing you with the same level of support previously reserved for large family offices and corporates.",
  },
  {
    num: "4",
    title: "Privacy by default.",
    desc: "End-to-end encrypted. EU data residency. Your financial life is yours.",
  },
]

export function FamilyOfficeSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="bg-frost py-[72px] px-5 md:py-28 md:px-[60px]" id="family-office">
      <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-royal mb-2.5 flex items-center gap-2.5">
        <span className="block w-[18px] h-px bg-royal" />
        Section five
      </div>
      <h2 className="font-serif text-[clamp(36px,4.2vw,58px)] font-medium tracking-[0.01em] leading-[1.1] mb-[18px] text-navy">
        Build your own
        <br />
        <em className="italic text-royal font-normal">Family Office</em>
      </h2>
      <p className="text-base font-light text-mist max-w-[580px] leading-[1.85] mb-4">
        A traditional Family Office requires at least €25 million in assets, dozens of staff, and relationships with top-tier banks like Goldman Sachs.
      </p>
      <p className="text-lg font-medium text-navy mb-4">
        It was never designed for you. It was designed for the 0.1%
      </p>
      <p className="text-base font-light text-mist max-w-[580px] leading-[1.85] mb-[60px]">
        Every hard-working business owner deserves the best advice, tools and financial products to build wealth.
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
              (Noun) - means family, clan, lineage, kin
              <br />
              <span className="font-mono text-[9px] tracking-[0.1em] opacity-60">
                IN NORDIC LANGUAGES
              </span>
            </div>
          </div>

          <p className="font-serif text-xl font-normal text-navy/70 leading-[1.5] max-w-[400px]">
            The Slekt platform acts as your own family office to help you build wealth without the costs associated with traditional advisors, banks and investment houses.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {items.map((item, i) => (
            <div
              key={item.num}
              className="flex gap-[18px] items-start p-[22px] bg-white border border-mist/30 rounded-[11px] hover:border-royal/40 hover:translate-x-1 transition-all duration-200"
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              <div className="font-serif text-[32px] font-semibold text-gold leading-none shrink-0 w-8">
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
