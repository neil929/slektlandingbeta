export function GenerationsSection() {
  return (
    <section className="section section-white" id="banking30">
      <div className="container">
        <p className="section-label">Why now</p>
        <h2>Three generations of <em>banking technology</em></h2>
        <div className="generations">
          <div className="gen-card gen-1">
            <span className="gen-badge">Banking 1.0</span>
            <h3>Legacy Banks</h3>
            <p className="gen-period">1980s – 90s · Server-based</p>
            <ul className="gen-attrs">
              <li>No customisation, static systems</li>
              <li>Bare-minimum features only</li>
              <li>No advice, no personalisation</li>
              <li>Decades behind on UX</li>
            </ul>
          </div>
          <div className="gen-card gen-2">
            <span className="gen-badge">Banking 2.0</span>
            <h3>First-Gen Fintech</h3>
            <p className="gen-period">Revolut, Wise · Cloud-native</p>
            <ul className="gen-attrs">
              <li>Cloud infrastructure, better UI</li>
              <li>Fast integrations, modern UX</li>
              <li>Added investing, eSIMs, extras</li>
              <li>Still basic banking at the core</li>
            </ul>
          </div>
          <div className="gen-card gen-3">
            <span className="gen-badge">Banking 3.0</span>
            <h3>Slekt Banking OS</h3>
            <p className="gen-period">AI-native · Fully customisable</p>
            <ul className="gen-attrs">
              <li>AI writes and deploys code</li>
              <li>Full data and integration flexibility</li>
              <li>Specialist AI advisor team</li>
              <li>Fully customisable at user level</li>
              <li>Connects to Claude · ChatGPT</li>
            </ul>
            <p className="gen-note">The previous two generations cannot be converted to this architecture. Slekt is built new, from scratch.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
