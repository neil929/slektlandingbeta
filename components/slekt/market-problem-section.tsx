export function MarketProblemSection() {
  return (
    <section className="section section-white" id="problem">
      <div className="container">
        <div className="problem-intro">
          <p className="section-label">The Problem</p>
          <h2>Your business cash is<br /><em>working against you.</em></h2>
        </div>
        <div className="problem-cols">
          <div className="problem-col first">
            <div className="problem-col-num">01 — Idle Cash</div>
            <p className="problem-col-title">Billions sit at 0%</p>
            <p className="problem-col-body">European businesses hold over €2 trillion in current accounts earning near-zero interest. Your bank profits from your money. You get nothing.</p>
          </div>
          <div className="problem-col">
            <div className="problem-col-num">02 — Banking Costs</div>
            <p className="problem-col-title">Legacy fees, modern world</p>
            <p className="problem-col-body">FX markups, wire fees, account maintenance — banks charge 3–7× more than they should. First-gen fintechs added layers but kept the model.</p>
          </div>
          <div className="problem-col">
            <div className="problem-col-num">03 — No Intelligence</div>
            <p className="problem-col-title">Data without insight</p>
            <p className="problem-col-body">Your transactions, cashflow, investments — all in different systems. No bank gives you an AI advisor. That service is reserved for the 0.1%.</p>
          </div>
        </div>
        <div className="slekt-statement">
          <strong>Slekt</strong> is the first banking OS designed from scratch for AI — giving every business owner the treasury desk, investment products, and AI advisors previously reserved for Goldman Sachs clients.
        </div>
      </div>
    </section>
  )
}
