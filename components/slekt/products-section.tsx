"use client"

import { useInView } from "@/hooks/use-in-view"

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
          Section 4
        </div>
        <h2 className="font-serif text-[clamp(36px,4.2vw,58px)] font-medium tracking-[0.01em] leading-[1.1] mb-[60px] text-white">
          Three key products combined into
          <br />
          <em className="italic text-gold font-normal">Slekt Capital</em>
        </h2>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-3 gap-6 transition-all duration-[650ms] ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Slekt Earn */}
          <div className="bg-deep border border-mist/10 rounded-[14px] p-8 relative overflow-hidden group hover:border-gold/30 transition-all duration-[250ms]">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms]" />
            <div className="font-serif text-[44px] font-semibold text-gold leading-none mb-2">2–8%</div>
            <h3 className="font-serif text-[22px] font-medium text-white mb-4">Earn on your business current account</h3>
            <p className="text-mist text-sm leading-relaxed mb-6">Choose your risk and return</p>
            <ul className="space-y-2">
              {["European government Bonds", "US treasury Bonds", "Tier-1 Bank guaranteed assets", "Corporate Bonds", "Emerging markets bonds"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[13px] text-mist">
                  <span className="w-[5px] h-[5px] rounded-full bg-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Slekt Pay */}
          <div className="bg-deep border border-mist/10 rounded-[14px] p-8 relative overflow-hidden group hover:border-royal/30 transition-all duration-[250ms]">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-royal opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms]" />
            <div className="font-serif text-[44px] font-semibold text-royal leading-none mb-2">80%</div>
            <h3 className="font-serif text-[22px] font-medium text-white mb-4">Slekt Pay</h3>
            <p className="text-mist text-sm leading-relaxed">
              Get a named IBAN account, credit card, multi-currency account and global payments 80% cheaper than your existing bank.
            </p>
          </div>

          {/* Slekt Banking OS */}
          <div className="bg-deep border border-mist/10 rounded-[14px] p-8 relative overflow-hidden group hover:border-mist/30 transition-all duration-[250ms]">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-mist opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms]" />
            <div className="font-mono text-sm text-mist/60 mb-2">AI-Native</div>
            <h3 className="font-serif text-[22px] font-medium text-white mb-4">Slekt Banking OS</h3>
            <p className="text-mist text-sm leading-relaxed mb-6">
              Our revolutionary AI-built banking operating system is your AI co-founder to help you manage your business.
            </p>
            <ul className="space-y-3">
              <li className="text-[13px] text-mist leading-relaxed">
                <span className="text-white font-medium">Integrate everything.</span> Connect to your accounts, integrate all your banks and payments into us via our AI agent. No more waiting for developers.
              </li>
              <li className="text-[13px] text-mist leading-relaxed">
                <span className="text-white font-medium">Use Slekt with Claude, ChatGPT.</span>
              </li>
              <li className="text-[13px] text-mist leading-relaxed">
                <span className="text-white font-medium">Your personal CFO, wealth advisor, treasury advisor, tax helper.</span> Board-ready reports, cash-flow that doesn&apos;t surprise you.
              </li>
              <li className="text-[13px] text-mist leading-relaxed">
                <span className="text-white font-medium">AI native apps</span> - modify or build your own apps. Need an invoicing tool? Build it right into our platform and have your invoicing and banking in one place. Need specialised reports? Build them how you like them.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
