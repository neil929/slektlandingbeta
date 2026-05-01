"use client"

import { useInView } from "@/hooks/use-in-view"

const useCases = [
  {
    icon: "💼",
    title: "Business owner with idle cash",
    desc: (
      <>
        You have €200k sitting doing nothing. Your bank offers 0.1% if you are lucky. With Slekt,
        that money <span className="bg-teal-pale text-teal-dim font-medium px-[5px] py-px rounded">earns 2–5% automatically</span>,
        pulling back instantly when payroll hits.
      </>
    ),
  },
  {
    icon: "🏢",
    title: "Entrepreneur with multiple entities",
    desc: (
      <>
        Holding, operating company, side project — three banks, three logins, three sets of
        statements.{" "}
        <span className="bg-teal-pale text-teal-dim font-medium px-[5px] py-px rounded">
          Slekt puts them in one place.
        </span>{" "}
        Move money between entities in seconds.
      </>
    ),
  },
  {
    icon: "⚡",
    title: "Founder wearing multiple hats",
    desc: (
      <>
        You are closing deals and managing the team. Your{" "}
        <span className="bg-teal-pale text-teal-dim font-medium px-[5px] py-px rounded">
          AI advisor monitors transactions
        </span>
        , flags anomalies, forecasts cash flow, and has board-ready reports ready when asked.
      </>
    ),
  },
  {
    icon: "👨‍👩‍👧",
    title: "Building wealth for your family",
    desc: (
      <>
        Traditional family offices serve the 0.1%. Slekt gives you the same investment products and
        AI advisors{" "}
        <span className="bg-teal-pale text-teal-dim font-medium px-[5px] py-px rounded">
          at a fraction of the cost
        </span>{" "}
        — for every founder building generational wealth.
      </>
    ),
  },
]

export function UseCasesSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="bg-cream-off py-[72px] px-5 md:py-28 md:px-[60px]">
      <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-teal-dim mb-2.5 flex items-center gap-2.5">
        <span className="block w-[18px] h-px bg-teal" />
        Who it is for
      </div>
      <h2 className="font-serif text-[clamp(36px,4.2vw,58px)] font-medium tracking-[0.01em] leading-[1.1] mb-[18px] text-lapis">
        If your business holds cash,
        <br />
        <em className="italic text-lapis-mid font-normal">Slekt was built for you</em>
      </h2>
      <p className="text-base font-light text-cream-700 max-w-[520px] leading-[1.85] mb-[60px]">
        You do not need a treasury department. You need your money working while you run the
        business.
      </p>

      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-[60px] transition-all duration-[650ms] ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {useCases.map((uc, i) => (
          <div
            key={uc.title}
            className="bg-white border border-cream-200 rounded-[14px] p-7 md:px-7 md:py-8 relative overflow-hidden group hover:border-lapis-100 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(29,52,97,0.09)] transition-all duration-[250ms]"
            style={{ transitionDelay: `${i * 75}ms` }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-teal opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms]" />
            <div className="text-[26px] mb-3.5">{uc.icon}</div>
            <div className="font-serif text-[21px] font-medium text-lapis mb-[9px]">{uc.title}</div>
            <p className="text-[13px] font-light text-cream-700 leading-[1.8]">{uc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
