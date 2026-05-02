export function HeroSection() {
  return (
    <section id="hero">
      <div className="hero-grid-bg"></div>
      <div className="hero-glow"></div>
      <svg className="hero-star-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88">
        <path d="M44,4 C47,24 64,27 64,44 C64,61 47,64 44,84 C41,64 24,61 24,44 C24,27 41,24 44,4 Z" fill="#F0C040"/>
        <path d="M4,44 C24,41 27,24 44,24 C61,24 64,41 84,44 C64,47 61,64 44,64 C27,64 24,47 4,44 Z" fill="#F0C040" opacity="0.85"/>
        <circle cx="44" cy="44" r="5" fill="#FFE080"/>
      </svg>
      <div className="hero-inner">
        <div className="hero-top">
          <div className="hero-eyebrow fade-up">Slekt Capital · Banking 3.0</div>
          <h1 className="fade-up delay-1">Banking was never designed to be <em>AI-native.</em><br />So we are building it from scratch.</h1>
          <p className="hero-body fade-up delay-2">Legacy banks run on 1980s mainframes. The first neobanks moved to the cloud but kept the same mental model. Slekt is something different. A core banking OS where AI isn&apos;t a feature bolted on top — it&apos;s the architecture itself.</p>
        </div>
        <div className="hero-layers-strip fade-up delay-3">
          <div className="hls-card">
            <div className="hls-num">Layer one</div>
            <div className="hls-title">AI writes the infrastructure</div>
            <p className="hls-desc">Integrations, compliance rules, and product features deploy in days, not the years a traditional bank requires.</p>
          </div>
          <div className="hls-card">
            <div className="hls-num">Layer two</div>
            <div className="hls-title">Agents that know your business</div>
            <p className="hls-desc">Specialist AI trained on financial operations: treasury, onboarding, accounting, wealth management — not a generic chatbot over documents.</p>
          </div>
          <div className="hls-card">
            <div className="hls-num">Layer three</div>
            <div className="hls-title">Users build their own bank</div>
            <p className="hls-desc">Need invoicing? A custom report? Build it directly into the platform. The interface is yours to modify. No dev team required.</p>
          </div>
        </div>
        <div className="hero-footnote fade-up delay-4">Legacy and first-gen fintech systems cannot be retrofitted into this. The architecture is incompatible. Slekt has to be built new — and that is exactly what we are doing.</div>
      </div>
    </section>
  )
}
