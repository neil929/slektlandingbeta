import Link from "next/link"

export function HeroSection() {
  return (
    <section id="hero">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <div className="hero-inner">
        <div className="hero-top fade-up">
          <p className="hero-eyebrow">Banking 3.0 · AI-Native Platform</p>
          <h1>
            Banking was never designed<br />
            to be <em>AI-native.</em><br />
            So we are building it<br />
            from scratch.
          </h1>
          <p className="hero-body">
            Legacy banks run on 1980s mainframes. The first neobanks moved to the cloud but kept the
            same mental model. Slekt is different — a core banking OS where AI is the architecture itself.
          </p>
          <Link href="#waitlist" className="nav-cta fade-up delay-3" style={{ display: 'inline-block', marginTop: '28px' }}>
            Join the Waitlist
          </Link>
        </div>
        <div className="hero-layers-strip">
          <div className="hls-card">
            <div className="hls-num">Slekt Earn</div>
            <div className="hls-title">2–8% on idle cash</div>
            <p className="hls-desc">EU Gov. Bonds, US Treasuries, Corporate Bonds, Emerging Markets</p>
          </div>
          <div className="hls-card">
            <div className="hls-num">Slekt Pay</div>
            <div className="hls-title">80% cheaper banking</div>
            <p className="hls-desc">Named IBAN, multi-currency, global payments, credit card</p>
          </div>
          <div className="hls-card">
            <div className="hls-num">Slekt Banking OS</div>
            <div className="hls-title">Your AI co-founder</div>
            <p className="hls-desc">Claude + ChatGPT integrated, custom tools, no dev team needed</p>
          </div>
        </div>
        <p className="hero-footnote">
          Finnish EMI licence in progress · Client funds segregated at tier-1 banks · MiFID II compliant
        </p>
      </div>
    </section>
  )
}
