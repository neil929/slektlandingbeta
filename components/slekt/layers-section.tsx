export function LayersSection() {
  return (
    <section className="section" id="technology">
      <div className="container">
        <p className="section-label">Platform architecture</p>
        <h2>We use this technology<br />to solve <em>real problems.</em></h2>
        <div className="tech-grid">
          <div className="tech-intro">
            <p>Slekt is built in three layers. Each enables something no legacy or first-gen fintech can provide.</p>
            <p>Integrations, compliance rules, and product features deploy in days — not the years a traditional bank requires.</p>
          </div>
          <div className="tech-features">
            <div className="tech-feature">
              <div className="tech-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 9L9 2L16 9L9 16Z" stroke="#A8C0E0" strokeWidth="1.4" />
                </svg>
              </div>
              <div className="tech-feature-body">
                <h4>AI writes the infrastructure</h4>
                <p>Integrations, compliance rules, and product features deploy in days — not years.</p>
              </div>
            </div>
            <div className="tech-feature">
              <div className="tech-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7" stroke="#A8C0E0" strokeWidth="1.4" />
                  <path d="M6 9h6M9 6v6" stroke="#A8C0E0" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
              <div className="tech-feature-body">
                <h4>Agents that know your business</h4>
                <p>Specialist AI trained on treasury, onboarding, accounting, and wealth management.</p>
              </div>
            </div>
            <div className="tech-feature">
              <div className="tech-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="4" width="14" height="10" rx="2" stroke="#A8C0E0" strokeWidth="1.4" />
                  <path d="M6 9h6" stroke="#A8C0E0" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
              <div className="tech-feature-body">
                <h4>Users build their own bank</h4>
                <p>Need invoicing? A custom report? Build it directly into the platform. No dev team required.</p>
              </div>
            </div>
            <div className="tech-feature">
              <div className="tech-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 13L7 9L10 12L15 6" stroke="#A8C0E0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="tech-feature-body">
                <h4>Connect to Claude · ChatGPT</h4>
                <p>Full data and integration flexibility. The interface is yours to modify.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
