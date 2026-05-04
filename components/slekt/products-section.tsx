export function ProductsSection() {
  return (
    <section className="section section-navy" id="products">
      <div className="container">
        <div className="section-label">Solution</div>
        <h2 className="products-headline">Three key products combined into <em>Slekt Capital</em></h2>
        <div className="product-cols">
          <div className="product-col first">
            <div className="pc-tag">Product 01</div>
            <div className="pc-name">Slekt Earn</div>
            <div className="pc-tagline">Earn 2% to 8% on your business current account</div>
            <p className="pc-desc">Choose your risk and return. Your capital works from day one.</p>
            <ul className="pc-list">
              <li>European government Bonds</li>
              <li>US treasury Bonds</li>
              <li>Tier-1 Bank guaranteed assets</li>
              <li>Corporate Bonds</li>
              <li>Emerging markets bonds</li>
            </ul>
          </div>
          <div className="product-col">
            <div className="pc-tag">Product 02</div>
            <div className="pc-name">Slekt Pay</div>
            <div className="pc-tagline">Global payments 80% cheaper</div>
            <p className="pc-desc">Get a named IBAN account, credit card, multi-currency account and global payments 80% cheaper than your existing bank.</p>
            <ul className="pc-list">
              <li>Named IBAN account</li>
              <li>Credit card</li>
              <li>Multi-currency account</li>
              <li>Global payments</li>
            </ul>
          </div>
          <div className="product-col">
            <div className="pc-tag">Product 03</div>
            <div className="pc-name">Slekt Banking OS</div>
            <div className="pc-tagline">Your AI co-founder</div>
            <p className="pc-desc">Our revolutionary AI-built banking operating system helps you manage your business.</p>
            <ul className="pc-list">
              <li>Integrate everything — connect all your banks and payments via AI agent</li>
              <li>Use Slekt with Claude, ChatGPT</li>
              <li>Your personal CFO, wealth advisor, treasury advisor, tax helper</li>
              <li>AI native apps — fully customizable for your needs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
