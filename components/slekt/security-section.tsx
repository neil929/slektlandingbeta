export function SecuritySection() {
  return (
    <section className="section section-navy" id="security">
      <div className="container">
        <div className="section-label">Security &amp; Regulation</div>
        <div className="security-grid">
          <div className="security-text">
            <h2>Nordic regulation. Bank-grade segregation. <em>End-to-end encryption.</em></h2>
            <br />
            <p>Slekt Capital is currently in the process of obtaining an Investment Services License and a Payments Institution License.</p>
            <p>Slekt founders have built successful Neobanks and end-to-end core banking solutions. We love building amazing banking products for our users.</p>
          </div>
          <div className="security-badges">
            <div className="security-badge">
              <div className="badge-icon">
                <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <div className="badge-label">🇫🇮 Finnish EMI Licence</div>
                <div className="badge-sub">Investment Services License in progress</div>
              </div>
            </div>
            <div className="security-badge">
              <div className="badge-icon">
                <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-4 0v2M8 12h.01M12 12h.01M16 12h.01"/></svg>
              </div>
              <div>
                <div className="badge-label">Client funds segregated</div>
                <div className="badge-sub">Held at tier-1 banks — fully protected</div>
              </div>
            </div>
            <div className="security-badge">
              <div className="badge-icon">
                <svg viewBox="0 0 24 24"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
              </div>
              <div>
                <div className="badge-label">End-to-end encrypted</div>
                <div className="badge-sub">EU data residency. Privacy by default.</div>
              </div>
            </div>
            <div className="security-badge">
              <div className="badge-icon">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <div>
                <div className="badge-label">Founded by Narvi Payments team</div>
                <div className="badge-sub">10+ years building regulated fintech in Europe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
