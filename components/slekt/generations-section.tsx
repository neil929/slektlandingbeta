export function GenerationsSection() {
  return (
    <section className="section section-white" id="generations">
      <div className="container">
        <div className="section-label">Section 08 — Three Generations of Banking Technology</div>
        <h2 style={{ marginBottom: '48px' }}>Where <em>Banking 3.0</em> begins.</h2>
        <div className="generations">
          <div className="gen-card gen-1">
            <span className="gen-badge">Banking 1.0</span>
            <h3>Legacy banking systems</h3>
            <div className="gen-period">Built 1980–1990</div>
            <ul className="gen-attrs">
              <li>Server-based, very static</li>
              <li>Bare minimum banking features</li>
              <li>In-person advice</li>
              <li>Cannot be modernised</li>
            </ul>
            <p className="gen-note">Old legacy banking systems built on 80s/90s architecture. Deeply embedded, impossible to change.</p>
          </div>
          <div className="gen-card gen-2">
            <span className="gen-badge">Banking 2.0</span>
            <h3>First-generation fintechs</h3>
            <div className="gen-period">Revolut, Wise — 2010s</div>
            <ul className="gen-attrs">
              <li>Cloud-based, modern UX/UI</li>
              <li>Faster integrations</li>
              <li>Added services — eSIMs, investments</li>
              <li>Still basic banking features</li>
            </ul>
            <p className="gen-note">Took a cloud approach. Better UX. But still not AI-native — and cannot be retrofitted.</p>
          </div>
          <div className="gen-card gen-3">
            <span className="gen-badge">Banking 3.0</span>
            <h3>Slekt Banking OS</h3>
            <div className="gen-period">Next Generation — Now</div>
            <ul className="gen-attrs">
              <li>AI native — not retrofitted</li>
              <li>Expert advisor team built-in</li>
              <li>Full flexibility — user-level customisation</li>
              <li>AI writes and deploys features in days</li>
            </ul>
            <p className="gen-note" style={{ color: 'rgba(240,192,64,0.5)' }}>Slekt is building something completely new. The old systems cannot be changed to this. It has to be built from scratch.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
