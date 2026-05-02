"use client"

import { useInView } from "@/hooks/use-in-view"

export function SecuritySection() {
  const { ref, isInView } = useInView()

  return (
    <section className="bg-frost py-[72px] px-5 md:py-28 md:px-[60px]" id="security">
      <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-royal mb-2.5 flex items-center gap-2.5">
        <span className="block w-[18px] h-px bg-royal" />
        Section eleven — Security and regulation
      </div>
      <p className="text-sm text-mist mb-2">Built on solid ground</p>
      <h2 className="font-serif text-[clamp(36px,4.2vw,58px)] font-medium tracking-[0.01em] leading-[1.1] mb-[18px] text-navy">
        Nordic regulation. Bank-grade segregation.
        <br />
        <em className="italic text-royal font-normal">End-to-end encryption.</em>
      </h2>

      <div
        ref={ref}
        className={`max-w-3xl transition-all duration-[650ms] ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-base font-light text-mist leading-[1.85] mb-6">
          Slekt Capital is currently in the process of obtaining an Investment Services License and a Payments Institution License.
        </p>
        <p className="text-base font-light text-mist leading-[1.85]">
          Slekt founders have built successful Neobanks and end-to-end core banking solutions. We love building amazing banking products for our users.
        </p>
      </div>
    </section>
  )
}
