"use client"

import { useInView } from "@/hooks/use-in-view"

const steps = [
  {
    num: "1",
    title: "Open the account",
    desc: "Onboard in minutes from your phone or laptop. No paperwork, no branch visit.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="3" stroke="#F0C040" strokeWidth="1.4" />
        <path d="M6 9H12M9 6V12" stroke="#F0C040" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "2",
    title: "Deposit instantly",
    desc: "Add funds to your account instantly.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2V9L13 13" stroke="#F0C040" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="9" cy="9" r="7" stroke="#F0C040" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    num: "3",
    title: "Earn from day one.",
    desc: "Your balance starts earning 2–8% automatically. You choose the risk level. EU government bonds to earn 2% or a bit higher on corporate bonds.",
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
    num: "4",
    title: "Withdraw in seconds.",
    desc: "Move money back to your primary account instantly. Ready to pay salaries, suppliers, or whatever comes next.",
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

const addons = [
  {
    title: "+Add-on Banking",
    desc: "Do also your banking with Slekt. Add your own multi-currency business account, global payments and cards.",
  },
  {
    title: "+Add-on Family OS",
    desc: "Our AI team members do work to build your wealth and help you manage your business. AI built native apps that are fully customizable for your needs.",
  },
]

export function HowItWorksSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="bg-navy py-[72px] px-5 md:py-28 md:px-[60px] relative overflow-hidden" id="how-it-works">
      <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-gold mb-2.5 flex items-center gap-2.5">
        <span className="block w-[18px] h-px bg-gold" />
        Section six
      </div>
      <h2 className="font-serif text-[clamp(36px,4.2vw,58px)] font-medium tracking-[0.01em] leading-[1.1] mb-[18px] text-white">
        How it works
      </h2>
      <p className="text-lg text-mist mb-[60px]">
        Here&apos;s how you go from 0 to earning/wealth
      </p>

      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-4 gap-0.5 transition-all duration-[650ms] ease-out ${
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
              {step.num}
            </div>
            <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-gold mb-3.5">
              Step {step.num}
            </div>
            <div className="w-[38px] h-[38px] rounded-lg bg-gold/15 flex items-center justify-center mb-4">
              {step.icon}
            </div>
            <div className="font-serif text-xl font-medium text-white mb-2">{step.title}</div>
            <p className="text-[13px] font-light text-mist leading-[1.75]">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        {addons.map((addon) => (
          <div
            key={addon.title}
            className="bg-mist/[0.04] border border-mist/10 rounded-xl p-6 hover:border-gold/20 transition-colors"
          >
            <h3 className="font-serif text-lg font-medium text-gold mb-2">{addon.title}</h3>
            <p className="text-[13px] font-light text-mist leading-[1.75]">{addon.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
