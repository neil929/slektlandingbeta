"use client"

import { useInView } from "@/hooks/use-in-view"

const layers = [
  {
    num: "01",
    tag: "Layer one",
    title: "AI writes the infrastructure",
    desc: "Integrations, compliance rules, and product features deploy in days — not the years a traditional bank requires.",
  },
  {
    num: "02",
    tag: "Layer two",
    title: "Agents that know your business",
    desc: "Specialist AI trained on treasury, onboarding, accounting, and wealth management. Not a generic chatbot over documents.",
  },
  {
    num: "03",
    tag: "Layer three",
    title: "Users build their own bank",
    desc: "Need invoicing? A custom report? Build it directly into the platform. The interface is yours to modify. No dev team required.",
  },
]

export function LayersSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="bg-cream-off py-[72px] px-5 md:py-32 md:px-[60px]" id="technology">
      <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-teal-dim mb-3 flex items-center gap-2.5">
        <span className="block w-[18px] h-px bg-teal" />
        Platform architecture
      </div>
      <h2 className="font-serif text-[clamp(36px,4.2vw,58px)] font-medium tracking-[0.01em] leading-[1.1] mb-5 text-lapis">
        We use this technology
        <br />
        to solve <em className="italic text-lapis-mid font-normal">real problems.</em>
      </h2>
      <p className="text-[15px] font-light text-cream-700 max-w-[520px] leading-[1.85] mb-[64px]">
        Slekt is built in three layers. Each enables something no legacy or first-gen fintech can
        provide.
      </p>

      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-3 gap-0.5 transition-all duration-[650ms] ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {layers.map((layer, i) => (
          <div
            key={layer.num}
            className="bg-cream px-10 py-11 border border-cream-200 relative overflow-hidden hover:border-lapis-100 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(29,52,97,0.07)] transition-all duration-[250ms]"
            style={{ transitionDelay: `${i * 75}ms` }}
          >
            <div className="font-serif text-[80px] font-light text-cream-200 leading-none absolute top-4 right-6 pointer-events-none select-none">
              {layer.num}
            </div>
            <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-teal-dim mb-4 flex items-center gap-[7px]">
              <span className="block w-3 h-px bg-teal" />
              {layer.tag}
            </div>
            <h3 className="font-serif text-[26px] font-medium text-lapis leading-[1.2] mb-4">
              {layer.title}
            </h3>
            <p className="text-[14px] font-light text-cream-700 leading-[1.85]">{layer.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
