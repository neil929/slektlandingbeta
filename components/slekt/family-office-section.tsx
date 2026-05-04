export function FamilyOfficeSection() {
  return (
    <section className="section section-white" id="familyoffice">
      <div className="container">
        <div className="section-label">Build Your Own Family Office</div>
        <div className="fo-comparison-header">
          <div className="fo-comparison-intro">
            <h2>Build your own <em>Family Office</em></h2>
            <p>A traditional Family Office requires at least €25 million in assets, dozens of staff, and relationships with top-tier banks like Goldman Sachs. It was never designed for you. It was designed for the 0.1%</p>
            <p>Every hard-working business owner deserves the best advice, tools and financial products to build wealth.</p>
            <span className="fo-word">Slekt (Noun) — means family, clan, lineage, kin in Nordic languages</span>
          </div>
        </div>
        <div className="fo-table">
          <div className="fo-table-head">
            <div className="fo-col-head old">Traditional Family Office</div>
            <div className="fo-col-head new">Slekt Capital
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" style={{ width: '14px', height: '14px', display: 'inline-block', verticalAlign: 'middle', marginLeft: '6px' }}>
                <path d="M44,4 C47,24 64,27 64,44 C64,61 47,64 44,84 C41,64 24,61 24,44 C24,27 41,24 44,4 Z" fill="#F0C040"/>
                <path d="M4,44 C24,41 27,24 44,24 C61,24 64,41 84,44 C64,47 61,64 44,64 C27,64 24,47 4,44 Z" fill="#F0C040" opacity="0.85"/>
                <circle cx="44" cy="44" r="5" fill="#FFE080"/>
              </svg>
            </div>
          </div>
          <div className="fo-table-rows">
            <div className="fo-row">
              <div className="fo-cell old">€25M+ minimum assets required</div>
              <div className="fo-cell new"><strong>No minimum.</strong> Earn a real rate on your cash from day one on any balance.</div>
            </div>
            <div className="fo-row">
              <div className="fo-cell old">10+ staff, high overhead costs</div>
              <div className="fo-cell new"><strong>AI advisors</strong> — the same level of expertise and support, zero headcount cost.</div>
            </div>
            <div className="fo-row">
              <div className="fo-cell old">Separate banks per entity, manual reconciliation at year-end</div>
              <div className="fo-cell new"><strong>All accounts in one place.</strong> Open accounts for all your companies and children. Move money between entities in seconds.</div>
            </div>
            <div className="fo-row">
              <div className="fo-cell old">Opaque processes, data shared across advisors and institutions</div>
              <div className="fo-cell new"><strong>Privacy by default.</strong> End-to-end encrypted. EU data residency. Your financial life is yours.</div>
            </div>
          </div>
        </div>
        <div className="slekt-statement">
          The Slekt platform acts as your own family office to help you build wealth without the costs associated with traditional advisors, banks and Investment houses.
        </div>
      </div>
    </section>
  )
}
