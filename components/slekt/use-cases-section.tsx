export function UseCasesSection() {
  return (
    <section className="section section-white" id="use-cases">
      <div className="container">
        <div className="use-cases-header">
          <p className="section-label">Who it is for</p>
          <h2>If your business holds cash,<br /><em>Slekt was built for you</em></h2>
          <p>You do not need a treasury department. You need your money working while you run the business.</p>
        </div>
        <div className="use-cases-grid">
          <div className="use-case">
            <div className="use-case-tag">Business Owner</div>
            <h3>Business owner with idle cash</h3>
            <p>You have €200k sitting doing nothing. Your bank offers 0.1% if you are lucky. With Slekt, that money earns 2–5% automatically, pulling back instantly when payroll hits.</p>
          </div>
          <div className="use-case">
            <div className="use-case-tag">Multiple Entities</div>
            <h3>Entrepreneur with multiple entities</h3>
            <p>Holding, operating company, side project — three banks, three logins, three sets of statements. Slekt puts them in one place. Move money between entities in seconds.</p>
          </div>
          <div className="use-case">
            <div className="use-case-tag">Founder</div>
            <h3>Founder wearing multiple hats</h3>
            <p>You are closing deals and managing the team. Your AI advisor monitors transactions, flags anomalies, forecasts cash flow, and has board-ready reports ready when asked.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
