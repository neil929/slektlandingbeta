"use client"

import { useInView } from "@/hooks/use-in-view"

const products = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 10c0-3.5 3-7 7-7s7 3 7 7"
          stroke="#F0C040"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M1 10c0-5 4-9 9-9s9 4.5 9 9"
          stroke="#F0C040"
          strokeWidth="1"
          strokeLinecap="round"
          opacity=".45"
        />
        <circle cx="10" cy="15" r="3" fill="#F0C040" />
        <circle cx="10" cy="15" r="1.5" fill="#0B1B38" />
      </svg>
    ),
    iconBg: "bg-gold/10",
    yield: "2–8%",
    yieldColor: "text-gold",
    name: "Slekt Earn",
    desc: "Earn a real return on your business cash. Choose your risk. Your money works from day one.",
    tags: ["EU Gov. Bonds", "US Treasuries", "Corporate Bonds", "Emerging Markets"],
    accentColor: "bg-gold",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="6" width="16" height="10" rx="2.5" stroke="#1A4FA0" strokeWidth="1.5" />
        <path d="M6 6V5C6 3.9 6.9 3 8 3H12C13.1 3 14 3.9 14 5V6" stroke="#1A4FA0" strokeWidth="1.5" />
        <circle cx="10" cy="11" r="1.8" fill="#1A4FA0" />
      </svg>
    ),
    iconBg: "bg-royal/10",
    yield: "80%",
    yieldColor: "text-royal",
    name: "Slekt Pay",
    desc: "Named IBAN, multi-currency account, credit card, and global payments — 80% cheaper than your bank.",
    tags: ["Named IBAN", "Multi-currency", "Global Payments", "Credit Card"],
    accentColor: "bg-royal",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M4 16L7.5 12L10 15L15 9L19 13"
          stroke="#A8C0E0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="4.5" r="2.5" stroke="#A8C0E0" strokeWidth="1.5" />
      </svg>
    ),
    iconBg: "bg-mist/15",
    yield: "AI OS",
    yieldColor: "text-mist",
    name: "Slekt Banking OS",
    desc: "Your AI co-founder. Integrate everything, connect to Claude and ChatGPT, build custom tools. No dev team needed.",
    tags: ["AI Advisors", "Custom Apps", "Claude · ChatGPT", "Auto Reports"],
    accentColor: "bg-mist",
  },
]

export function ProductsSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="bg-midnight py-[72px] px-5 md:py-28 md:px-[60px] relative overflow-hidden" id="products">
      <svg
        className="absolute inset-0 pointer-events-none opacity-25"
        viewBox="0 0 1000 700"
        fill="none"
      >
        <circle cx="120" cy="600" r="280" stroke="rgba(26,79,160,0.15)" strokeWidth="1" />
        <circle cx="120" cy="600" r="180" stroke="rgba(240,192,64,0.12)" strokeWidth="1" />
      </svg>

      <div className="relative z-[1]">
        <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-gold mb-2.5 flex items-center gap-2.5">
          <span className="block w-[18px] h-px bg-gold" />
          Three products
        </div>
        <h2 className="font-serif text-[clamp(36px,4.2vw,58px)] font-medium tracking-[0.01em] leading-[1.1] mb-[18px] text-white">
          One platform.
          <br />
          <em className="italic text-gold font-normal">Three ways to win.</em>
        </h2>
        <p className="text-base font-light text-mist max-w-[520px] leading-[1.85] mb-[60px]">
          Earn on idle cash. Bank globally. Manage everything with AI — at a fraction of the current
          cost.
        </p>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-px bg-mist/5 mt-[60px] transition-all duration-[650ms] ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {products.map((product, i) => (
            <div
              key={product.name}
              className="bg-midnight p-9 md:px-9 md:py-11 border border-mist/[0.08] relative overflow-hidden group hover:bg-deep hover:border-mist/15 transition-all duration-[250ms]"
              style={{ transitionDelay: `${i * 75}ms` }}
            >
              <div
                className={`absolute top-0 left-0 right-0 h-0.5 ${product.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms]`}
              />
              <div
                className={`w-10 h-10 rounded-[9px] flex items-center justify-center mb-[22px] ${product.iconBg}`}
              >
                {product.icon}
              </div>
              <div className={`font-serif text-[44px] font-semibold leading-none mb-[5px] ${product.yieldColor}`}>
                {product.yield}
              </div>
              <div className="font-serif text-[21px] font-medium text-white mb-3">{product.name}</div>
              <p className="text-[13px] font-light text-mist leading-[1.75] mb-5">
                {product.desc}
              </p>
              <div className="flex flex-wrap gap-[5px]">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] bg-mist/[0.08] rounded px-2 py-[3px] text-mist/60 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
