export function FounderSection() {
  return (
    <section className="section section-navy" id="founder">
      <div className="container">
        <div className="section-label">Founder&apos;s Note</div>
        <div className="founder-card">
          <div className="founder-left">
            <div className="founder-photo-wrap">
              <img src="/neil-ambikar.webp" alt="Neil Ambikar" className="founder-photo" />
            </div>
            <div className="founder-identity">
              <div className="founder-name">Neil Ambikar</div>
              <div className="founder-role">Founder, Slekt Capital</div>
              <div className="founder-creds">
                <div className="founder-cred">Previously Founder, Narvi Payments</div>
                <div className="founder-cred">10+ years building regulated fintech</div>
                <div className="founder-cred">Neobanks, payment orchestration, crypto/fiat</div>
              </div>
            </div>
          </div>
          <div className="founder-right">
            <blockquote className="founder-quote">
              &ldquo;We have been building multiple financial startups over the last 10 years. We solved a lot of challenges for our users from launching Neobanks for businesses, payment orchestration platforms, combining crypto with fiat. We were always held back due to regulation and the slow pace of developing technology in the payments space. <em>AI-first platform development is the greatest opportunity we have seen in our careers.</em>&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
