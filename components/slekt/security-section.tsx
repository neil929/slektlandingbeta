"use client"

import { useInView } from "@/hooks/use-in-view"

const securityItems = [
  {
    title: "MiFID II Compliant",
    desc: "Investment Services and Payments Institution licences in progress. MiFID II compliant across the EU.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2L3 5.5V10C3 13.8 6 17.3 10 19C14 17.3 17 13.8 17 10V5.5L10 2Z"
          stroke="#1D3461"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Funds Segregated",
    desc: "Client funds fully segregated at tier-1 European banks. Never co-mingled with operational funds.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="8" width="14" height="10" rx="2" stroke="#1D3461" strokeWidth="1.4" />
        <path d="M6 8V6C6 4 7.8 2 10 2C12.2 2 14 4 14 6V8" stroke="#1D3461" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="10" cy="13" r="1.5" fill="#1D3461" />
      </svg>
    ),
  },
  {
    title: "End-to-End Encrypted",
    desc: "All data encrypted end-to-end with EU data residency. Privacy is architecture, not a setting.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="#1D3461" strokeWidth="1.4" />
        <path d="M6.5 10L9 12.5L13.5 7.5" stroke="#1D3461" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Proven Team",
    desc: "Our founders built successful neobanks and core banking solutions. We have solved the hardest problems in fintech.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 7H17M3 11H17M3 15H11" stroke="#1D3461" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "AI Compliance Built-in",
    desc: "Specialist AI handles onboarding, AML, and transaction monitoring at scale. Compliance automated and auditable.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="7" r="3.5" stroke="#1D3461" strokeWidth="1.4" />
        <path d="M3 18C3 14.7 6.1 12 10 12C13.9 12 17 14.7 17 18" stroke="#1D3461" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "EU Data Residency",
    desc: "All data processed and stored in the European Union under GDPR. Zero exposure to non-EU jurisdictions.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="#1D3461" strokeWidth="1.4" />
        <path d="M10 6V10L13 12" stroke="#1D3461" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
]

export function SecuritySection() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-[72px] px-5 md:py-28 md:px-[60px]" id="security">
      <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-teal-dim mb-2.5 flex items-center gap-2.5">
        <span className="block w-[18px] h-px bg-teal" />
        Regulation & security
      </div>
      <h2 className="font-serif text-[clamp(36px,4.2vw,58px)] font-medium tracking-[0.01em] leading-[1.1] mb-[18px] text-lapis">
        Helsinki regulation.
        <br />
        Bank-grade <em className="italic text-lapis-mid font-normal">segregation.</em>
      </h2>
      <p className="text-base font-light text-cream-700 max-w-[520px] leading-[1.85] mb-[60px]">
        Slekt is obtaining an Investment Services Licence and Payments Institution Licence.
        Built on solid ground from day one.
      </p>

      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-3 gap-4 mt-[60px] transition-all duration-[650ms] ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {securityItems.map((item, i) => (
          <div
            key={item.title}
            className="border border-cream-200 rounded-[13px] p-6 md:px-6 md:py-7 bg-cream-off hover:border-lapis-100 hover:shadow-[0_4px_14px_rgba(29,52,97,0.09)] transition-all duration-200"
            style={{ transitionDelay: `${i * 75}ms` }}
          >
            <div className="w-10 h-10 rounded-[9px] bg-lapis-100 flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <div className="font-serif text-[19px] font-medium text-lapis mb-[7px]">
              {item.title}
            </div>
            <p className="text-[13px] font-light text-cream-700 leading-[1.75]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
