export function SecuritySection() {
  return (
    <section className="section" id="security">
      <div className="container">
        <p className="section-label">Regulation & security</p>
        <h2>Helsinki regulation.<br />Bank-grade <em>segregation.</em></h2>
        <div className="security-grid">
          <div className="security-text">
            <p>Slekt is obtaining an Investment Services Licence and Payments Institution Licence in Finland. Built on solid ground from day one.</p>
            <p>All client funds are fully segregated at tier-1 European banks. Never co-mingled with operational funds.</p>
          </div>
          <div className="security-badges">
            <div className="security-badge">
              <div className="badge-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L3 5.5V10C3 13.8 6 17.3 10 19C14 17.3 17 13.8 17 10V5.5L10 2Z" stroke="#A8C0E0" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="badge-label">MiFID II Compliant</div>
                <div className="badge-sub">Investment Services Licence in progress</div>
              </div>
            </div>
            <div className="security-badge">
              <div className="badge-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="8" width="14" height="10" rx="2" stroke="#A8C0E0" strokeWidth="1.4" />
                  <path d="M6 8V6C6 4 7.8 2 10 2C12.2 2 14 4 14 6V8" stroke="#A8C0E0" strokeWidth="1.4" strokeLinecap="round" />
                  <circle cx="10" cy="13" r="1.5" fill="#A8C0E0" />
                </svg>
              </div>
              <div>
                <div className="badge-label">Funds Segregated</div>
                <div className="badge-sub">Held at tier-1 European banks</div>
              </div>
            </div>
            <div className="security-badge">
              <div className="badge-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="7" stroke="#A8C0E0" strokeWidth="1.4" />
                  <path d="M6.5 10L9 12.5L13.5 7.5" stroke="#A8C0E0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="badge-label">End-to-End Encrypted</div>
                <div className="badge-sub">EU data residency, GDPR compliant</div>
              </div>
            </div>
            <div className="security-badge">
              <div className="badge-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="7" r="3.5" stroke="#A8C0E0" strokeWidth="1.4" />
                  <path d="M3 18C3 14.7 6.1 12 10 12C13.9 12 17 14.7 17 18" stroke="#A8C0E0" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="badge-label">Proven Team</div>
                <div className="badge-sub">10 years building fintech infrastructure</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
