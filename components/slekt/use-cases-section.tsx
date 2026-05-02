"use client"

import { useInView } from "@/hooks/use-in-view"

const useCases = [
  {
    title: "Business owner with cash sitting idle",
    desc: (
      <>
        You&apos;ve got €200k in your business account. It&apos;s doing nothing. With Slekt, that money is working from day one, <span className="bg-gold/20 text-gold font-medium px-[5px] py-px rounded">earning 2–5% automatically</span>, pulling back instantly when payroll hits.
      </>
    ),
  },
  {
    title: "The entrepreneur running multiple companies",
    desc: (
      <>
        You&apos;ve got a holding, an operating company, maybe a third entity for a side project. Right now that means three banks, three logins, three sets of statements to reconcile at year-end. <span className="bg-gold/20 text-gold font-medium px-[5px] py-px rounded">Slekt puts them in one place.</span> Move money between entities in seconds. One dashboard. One view of everything.
      </>
    ),
  },
  {
    title: "A founder wearing multiple hats",
    desc: (
      <>
        You&apos;re closing deals, managing the team and handling operations and don&apos;t have the time for finances. Your <span className="bg-gold/20 text-gold font-medium px-[5px] py-px rounded">AI advisor monitors transactions</span>, flags anomalies, forecasts cash flow, and has reports ready when someone asks.
      </>
    ),
  },
]

export function UseCasesSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="bg-deep py-[72px] px-5 md:py-28 md:px-[60px]">
      <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-gold mb-2.5 flex items-center gap-2.5">
        <span className="block w-[18px] h-px bg-gold" />
        Section ten — Use cases
      </div>
      <h2 className="font-serif text-[clamp(36px,4.2vw,58px)] font-medium tracking-[0.01em] leading-[1.1] mb-[18px] text-white">
        If your business holds cash,
        <br />
        <em className="italic text-gold font-normal">Slekt was built for you.</em>
      </h2>
      <p className="text-base font-light text-mist max-w-[520px] leading-[1.85] mb-[60px]">
        You don&apos;t need a treasury department. You need your money working while you&apos;re busy running the business.
      </p>

      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-[650ms] ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {useCases.map((uc, i) => (
          <div
            key={uc.title}
            className="bg-midnight border border-mist/10 rounded-[14px] p-7 md:px-7 md:py-8 relative overflow-hidden group hover:border-royal/30 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(26,79,160,0.15)] transition-all duration-[250ms]"
            style={{ transitionDelay: `${i * 75}ms` }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms]" />
            <div className="font-serif text-[21px] font-medium text-white mb-[9px]">{uc.title}</div>
            <p className="text-[13px] font-light text-mist leading-[1.8]">{uc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
