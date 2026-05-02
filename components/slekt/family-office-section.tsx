export function FamilyOfficeSection() {
  return (
    <section className="section section-white" id="family-office">
      <div className="container">
        <div className="fo-comparison-header">
          <p className="section-label">For every business owner</p>
          <h2>Build your own <em>Family Office</em></h2>
          <div className="fo-comparison-intro">
            <p>A traditional family office needs €25M+ in assets, Goldman relationships, and a team of 10. It was designed for the 0.1%.</p>
            <span className="fo-word">Slekt — family · clan · lineage · kin</span>
          </div>
        </div>
        <div className="fo-table">
          <div className="fo-table-head">
            <div className="fo-col-head old">Traditional Family Office</div>
            <div className="fo-col-head new">Slekt</div>
          </div>
          <div className="fo-table-rows">
            <div className="fo-row">
              <div className="fo-cell old">Minimum €25M in assets to access</div>
              <div className="fo-cell new"><strong>No minimum.</strong> Any business with cash to deploy.</div>
            </div>
            <div className="fo-row">
              <div className="fo-cell old">Team of 10 specialists + Goldman relationship</div>
              <div className="fo-cell new"><strong>AI advisor team</strong> built in. No headcount needed.</div>
            </div>
            <div className="fo-row">
              <div className="fo-cell old">Weeks to onboard. Lawyers, paperwork, KYC</div>
              <div className="fo-cell new"><strong>Minutes to onboard</strong> from phone or laptop.</div>
            </div>
            <div className="fo-row">
              <div className="fo-cell old">Bespoke investment products — not accessible to SMEs</div>
              <div className="fo-cell new"><strong>Same products:</strong> Gov. bonds, corporate bonds, emerging markets.</div>
            </div>
            <div className="fo-row">
              <div className="fo-cell old">Annual fees: 0.5–2% of AUM + advisory</div>
              <div className="fo-cell new"><strong>Fraction of the cost.</strong> SaaS model, no AUM fees.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
