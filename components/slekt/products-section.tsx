export function ProductsSection() {
  return (
    <section className="section" id="products">
      <div className="container">
        <p className="section-label">Three products</p>
        <h2 className="products-headline">One platform. <em>Three ways to win.</em></h2>
        <div className="product-cols">
          <div className="product-col first">
            <div className="pc-tag">Slekt Earn</div>
            <div className="pc-name">2–8% on your cash</div>
            <p className="pc-tagline">EU Gov. Bonds · US Treasuries · Emerging Markets</p>
            <p className="pc-desc">Earn a real return on your business cash. Choose your risk. Your money works from day one.</p>
            <ul className="pc-list">
              <li>EU Government Bonds</li>
              <li>US Treasuries</li>
              <li>Corporate Bonds</li>
              <li>Emerging Markets</li>
            </ul>
          </div>
          <div className="product-col">
            <div className="pc-tag">Slekt Pay</div>
            <div className="pc-name">80% cheaper banking</div>
            <p className="pc-tagline">Named IBAN · Multi-currency · Credit Card</p>
            <p className="pc-desc">Named IBAN, multi-currency account, credit card, and global payments — 80% cheaper than your bank.</p>
            <ul className="pc-list">
              <li>Named IBAN</li>
              <li>Multi-currency accounts</li>
              <li>Global payments</li>
              <li>Credit Card</li>
            </ul>
          </div>
          <div className="product-col">
            <div className="pc-tag">Slekt Banking OS</div>
            <div className="pc-name">Your AI co-founder</div>
            <p className="pc-tagline">Claude · ChatGPT · Custom Tools</p>
            <p className="pc-desc">Integrate everything, connect to Claude and ChatGPT, build custom tools. No dev team needed.</p>
            <ul className="pc-list">
              <li>AI Advisors</li>
              <li>Custom Apps</li>
              <li>Claude · ChatGPT</li>
              <li>Auto Reports</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
