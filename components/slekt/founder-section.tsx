export function FounderSection() {
  return (
    <section className="section section-alt" id="founder">
      <div className="container">
        <p className="section-label">{"Founder's note"}</p>
        <div className="founder-card">
          <div className="founder-left">
            <div className="founder-photo-wrap">
              <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,#1A4FA0,#0D2B5E)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Georgia, serif', fontSize: '36px', color: '#F0C040' }}>
                N
              </div>
            </div>
            <div className="founder-name">Neil Ambikar</div>
            <p className="founder-role">Founder · Slekt Capital</p>
            <div className="founder-creds">
              <div className="founder-cred">Previously Narvi Payments</div>
              <div className="founder-cred">10 years in fintech</div>
              <div className="founder-cred">Helsinki, Finland</div>
            </div>
          </div>
          <div className="founder-right">
            <blockquote className="founder-quote">
              We have been building financial startups for 10 years. AI-first development is the
              greatest opportunity we have seen to truly revolutionise banking — and allow every
              business to have its own <em>personalised bank.</em>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
