export function CtaSection() {
  return (
    <section id="cta" className="section section-gold">
      <div className="cta-glow"></div>
      <div className="container">
        <div className="section-label" style={{ textAlign: 'center' }}>Coming Soon</div>
        <div className="cta-inner">
          <h2>The wealth infrastructure for <em>Europe&apos;s entrepreneurial class.</em></h2>
          <p>We are building something Europe has never had. Be the first to know when it is ready.</p>
          <div className="email-form">
            <input type="email" placeholder="your@company.com" />
            <button type="button">Join the Waitlist</button>
          </div>
          <p className="cta-footnote">No spam. Only launch updates. EU data residency.</p>
        </div>
      </div>
    </section>
  )
}
