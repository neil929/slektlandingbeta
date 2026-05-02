"use client"

import { useInView } from "@/hooks/use-in-view"

export function TechnologySection() {
  const { ref, isInView } = useInView()

  return (
    <section className="bg-deep py-[72px] px-5 md:py-28 md:px-[60px]" id="tech">
      <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-gold mb-2.5 flex items-center gap-2.5">
        <span className="block w-[18px] h-px bg-gold" />
        Section 7
      </div>
      <h2 className="font-serif text-[clamp(36px,4.2vw,58px)] font-medium tracking-[0.01em] leading-[1.1] mb-[18px] text-white">
        Technology Under the Hood.
      </h2>
      <p className="text-base font-light text-mist max-w-[620px] leading-[1.85] mb-4">
        Our team has built multiple Fintechs and Neobanking software which our customers loved and the banks hated because it was better than theirs.
      </p>
      <p className="text-lg font-medium text-gold mb-[60px]">
        Our newest one is something even better.
      </p>

      <div
        ref={ref}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-[650ms] ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* For Users */}
        <div className="bg-midnight border border-mist/10 rounded-[14px] p-8">
          <h3 className="font-mono text-[10px] tracking-[0.18em] uppercase text-gold mb-6 flex items-center gap-2">
            <span className="block w-3 h-px bg-gold" />
            For our Users
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-serif text-lg font-medium text-white mb-2">AI cofounders</h4>
              <p className="text-[13px] font-light text-mist leading-[1.75]">
                Your specialised team to help you in everything banking
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium text-white mb-2">AI integration agents</h4>
              <p className="text-[13px] font-light text-mist leading-[1.75]">
                Integrate all your data sources like Stripe and your banks into our App
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium text-white mb-2">AI Native app</h4>
              <p className="text-[13px] font-light text-mist leading-[1.75]">
                Build the tools you need directly on top of our products. No need to wait for our dev team to build the feature for you.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium text-white mb-2">Connect everywhere</h4>
              <p className="text-[13px] font-light text-mist leading-[1.75]">
                Connect Slekt to other platforms like Claude and ChatGPT.
              </p>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="bg-midnight border border-mist/10 rounded-[14px] p-8">
          <h3 className="font-mono text-[10px] tracking-[0.18em] uppercase text-royal mb-6 flex items-center gap-2">
            <span className="block w-3 h-px bg-royal" />
            Our backend Corebanking OS
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-serif text-lg font-medium text-white mb-2">AI native platform</h4>
              <p className="text-[13px] font-light text-mist leading-[1.75]">
                Reimagines how corebanking should work and scale.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium text-white mb-2">AI writes the code at scale</h4>
              <p className="text-[13px] font-light text-mist leading-[1.75]">
                So that we can integrate and deploy features in days rather than years that it takes a traditional bank.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium text-white mb-2">Specialist AI agents</h4>
              <p className="text-[13px] font-light text-mist leading-[1.75]">
                Trained to handle all key tasks with helping with onboarding, AML, transaction monitoring.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium text-white mb-2">Security first</h4>
              <p className="text-[13px] font-light text-mist leading-[1.75]">
                Platform built with security in mind to ensure safety of your data, actions and transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
