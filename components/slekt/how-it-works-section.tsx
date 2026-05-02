"use client"

import { useInView } from "@/hooks/use-in-view"

const steps = [
  {
    num: "Step 01",
    bg: "1",
    title: "Open the account",
    desc: "Onboard in minutes from phone or laptop. No paperwork, no branch visit.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="3" stroke="#F0C040" strokeWidth="1.4" />
        <path d="M6 9H12M9 6V12" stroke="#F0C040" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "Step 02",
    bg: "2",
    title: "Deposit instantly",
    desc: "Add funds immediately. No waiting periods, no minimum holding times.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2V9L13 13" stroke="#F0C040" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="9" cy="9" r="7" stroke="#F0C040" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    num: "Step 03",
    bg: "3",
    title: "Earn from day one",
    desc: "Your balance earns 2–8% automatically. You choose the risk: EU government bonds to emerging markets.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M2 12L6 8L9 11L13 5L17 9"
          stroke="#F0C040"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    num: "Step 04",
    bg: "4",
    title: "Withdraw in seconds",
    desc: "Move money back instantly. Ready for payroll, suppliers, or whatever comes next. No lock-in.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 2V14M4 10L9 15L14 10"
          stroke="#F0C040"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

export function HowItWorksSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="bg-navy py-[72px] px-5 md:py-28 md:px-[60px] relative overflow-hidden" id="how-it-works">
      <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-gold mb-2.5 flex items-center gap-2.5">
        <span className="block w-[18px] h-px bg-gold" />
        How it works
      </div>
      <h2 className="font-serif text-[clamp(36px,4.2vw,58px)] font-medium tracking-[0.01em] leading-[1.1] mb-[18px] text-white">
        From zero to earning
        <br />
        in <em className="italic text-gold font-normal">four steps</em>
      </h2>

      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-4 gap-0.5 mt-[60px] transition-all duration-[650ms] ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {steps.map((step, i) => (
          <div
            key={step.num}
            className="bg-mist/[0.06] border border-mist/10 p-7 md:px-7 md:py-8 relative overflow-hidden hover:bg-mist/[0.1] transition-colors duration-200"
            style={{ transitionDelay: `${i * 75}ms` }}
          >
            <div className="font-serif text-[80px] font-bold text-mist/[0.06] leading-none absolute -bottom-2 right-3.5 pointer-events-none">
              {step.bg}
            </div>
            <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-gold mb-3.5">
              {step.num}
            </div>
            <div className="w-[38px] h-[38px] rounded-lg bg-gold/15 flex items-center justify-center mb-4">
              {step.icon}
            </div>
            <div className="font-serif text-xl font-medium text-white mb-2">{step.title}</div>
            <p className="text-[13px] font-light text-mist leading-[1.75]">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
