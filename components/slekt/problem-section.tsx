"use client"

import { useInView } from "@/hooks/use-in-view"

export function ProblemSection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-[72px] px-5 md:py-28 md:px-[60px] bg-midnight">
      <div
        className={`max-w-4xl mx-auto transition-all duration-[650ms] ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-medium text-white text-center leading-[1.15] mb-12">
          Europe has no wealth infrastructure for the new entrepreneurial class.
        </h2>

        <div className="space-y-4 mb-14">
          <div className="flex gap-5 items-start p-6 rounded-xl bg-deep border border-mist/10">
            <span className="font-serif text-3xl font-semibold text-gold leading-none shrink-0 w-8">1</span>
            <p className="text-white text-base leading-relaxed">
              <span className="text-gold font-semibold">€3.56 trillion</span> sits in European business accounts earning no interest. That is €50+ billion in interest. Businesses have a right to earn money on their hard earned cash.
            </p>
          </div>

          <div className="flex gap-5 items-start p-6 rounded-xl bg-deep border border-mist/10">
            <span className="font-serif text-3xl font-semibold text-gold leading-none shrink-0 w-8">2</span>
            <p className="text-white text-base leading-relaxed">
              Banks only provide high-quality banking services to large companies.
            </p>
          </div>

          <div className="flex gap-5 items-start p-6 rounded-xl bg-deep border border-mist/10">
            <span className="font-serif text-3xl font-semibold text-gold leading-none shrink-0 w-8">3</span>
            <p className="text-white text-base leading-relaxed">
              Building wealth for your family and children is reserved in Europe for &quot;Old Money&quot; who have access to large old banks and family offices with 10+ staff.
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg md:text-xl text-mist mb-6 leading-relaxed max-w-2xl mx-auto">
            Slekt is changing this. Welcome to our all-in-one AI native platform that provides you with cutting-edge banking services, investment products and a team of AI advisors to rival big family offices.
          </p>
          <p className="font-serif text-2xl md:text-3xl italic text-gold">
            Start growing your business and wealth with Slekt.
          </p>
        </div>
      </div>
    </section>
  )
}
