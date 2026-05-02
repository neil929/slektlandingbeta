export function LayersSection() {
  return (
    <section className="section section-alt" id="technology">
      <div className="container">
        <div className="section-label">Section 07 — Technology Under the Hood</div>
        <div className="tech-grid">
          <div className="tech-intro">
            <h2>Built different from the <em>ground up.</em></h2>
            <br />
            <p>Our team has built multiple Fintechs and Neobanking software which our customers loved and the banks hated because it was better than theirs.</p>
            <p>Our newest one is something even better.</p>
            <p>Slekt is built on an AI native platform.</p>
          </div>
          <div className="tech-features">
            <div className="tech-feature">
              <div className="tech-icon">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 3v9l4 4"/></svg>
              </div>
              <div className="tech-feature-body">
                <h4>AI co-founders for users</h4>
                <p>Specialised team to help you in everything banking. AI integration agents to connect all your data sources like Stripe and your banks into our App.</p>
              </div>
            </div>
            <div className="tech-feature">
              <div className="tech-icon">
                <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12h8M12 8v8"/></svg>
              </div>
              <div className="tech-feature-body">
                <h4>AI native app platform</h4>
                <p>Build the tools you need directly on top of our products. No need to wait for our dev team. Connect Slekt to Claude and ChatGPT.</p>
              </div>
            </div>
            <div className="tech-feature">
              <div className="tech-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <div className="tech-feature-body">
                <h4>AI native corebanking OS</h4>
                <p>Reimagines how corebanking should work and scale. AI writes code at scale so we can integrate and deploy features in days rather than years.</p>
              </div>
            </div>
            <div className="tech-feature">
              <div className="tech-icon">
                <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div className="tech-feature-body">
                <h4>Security by design</h4>
                <p>Specialist AI agents trained to handle all key tasks — onboarding, AML, transaction monitoring. Platform built with security in mind to ensure safety of your data, actions and transactions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
