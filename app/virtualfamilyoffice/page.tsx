import type { Metadata } from 'next'
import styles from './vfo.module.css'

export const metadata: Metadata = {
  title: 'Virtual Family Office — Slekt Capital',
  description: 'Institutional-grade wealth management built for the founder generation. From €1M in assets — banking, investments, and fund structures in one platform.',
}

export default function VirtualFamilyOfficePage() {
  return (
    <>
      <nav className={styles.vfoNav}>
        <a href="https://slekt.ai" className={styles.navLogo}>Slekt<span> ✦</span> Capital</a>
        <ul className={styles.navLinks}>
          <li><a href="https://slekt.ai">Home</a></li>
          <li><a href="#pillars">What We Offer</a></li>
          <li><a href="#who">Who It&apos;s For</a></li>
          <li><a href="https://slekt.ai">Platform</a></li>
        </ul>
        <span className={styles.navBadge}>By Invitation</span>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGridBg}></div>
        <div className={styles.heroGlow}></div>
        <div className={styles.heroGlowGold}></div>

        <div className={styles.heroEyebrow}>Virtual Family Office</div>

        <h1 className={styles.heroHeadline}>
          Old wealth had<br />
          Rothschild.<br />
          <em>New wealth has Slekt.</em>
        </h1>

        <p className={styles.heroSub}>
          Institutional-grade wealth management, finally built for the founder generation.
        </p>

        <div className={styles.heroDivider}></div>

        <div className={styles.heroStats}>
          <div>
            <div className={styles.heroStatValue}>€<span>75</span>T</div>
            <div className={styles.heroStatLabel}>Generational wealth transfer underway</div>
          </div>
          <div>
            <div className={styles.heroStatValue}><span>2–10</span>%</div>
            <div className={styles.heroStatLabel}>Target annual returns on managed assets</div>
          </div>
          <div>
            <div className={styles.heroStatValue}>€<span>1</span>M+</div>
            <div className={styles.heroStatLabel}>Minimum assets under management</div>
          </div>
        </div>

      </section>

      {/* STATEMENT */}
      <div className={styles.statement}>
        <div className={styles.statementLabel}>The Gap</div>
        <p className={styles.statementText}>
          Modern entrepreneurs — digital founders, crypto-native investors — have built <strong>real wealth</strong> with no institutional infrastructure around it. Traditional family offices cost €500k per year and serve dynasties, not founders. <strong>Slekt changes that.</strong>
        </p>
      </div>

      {/* WHAT IS A VFO */}
      <section className={styles.vfoSection} id="vfo">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionNumber}>01</div>
          <h2 className={styles.sectionTitle}>What is a<br /><em>Virtual Family Office?</em></h2>
        </div>

        <div className={styles.compareGrid}>
          <div className={styles.compareCol}>
            <div className={styles.compareColLabel}>Traditional Family Office</div>
            <div className={styles.compareItem}>Reserved for €50M+ dynasties</div>
            <div className={styles.compareItem}>€200k–€500k annual advisory fees</div>
            <div className={styles.compareItem}>Opaque, layered fee structures</div>
            <div className={styles.compareItem}>Complex onboarding, months of delay</div>
            <div className={styles.compareItem}>No digital interface — relationship-only</div>
            <div className={styles.compareItem}>Ignores crypto &amp; digital assets</div>
          </div>
          <div className={styles.compareColHighlight}>
            <div className={styles.compareColLabel}>Slekt Virtual Family Office</div>
            <div className={styles.compareItemHighlight}>From €1M in assets — built for founders</div>
            <div className={styles.compareItemHighlight}>0.25–1% annual fee on AUM, nothing more</div>
            <div className={styles.compareItemHighlight}>Full transparency, real-time dashboard</div>
            <div className={styles.compareItemHighlight}>Digital onboarding in days, not months</div>
            <div className={styles.compareItemHighlight}>Modern platform — always accessible</div>
            <div className={styles.compareItemHighlight}>Crypto-native from the ground up</div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className={styles.pillarsSection} id="pillars">
        <div className={styles.pillarsInner}>
          <div className={styles.pillarsHeader}>
            <div className={styles.pillarsEyebrow}>Three Pillars</div>
            <h2 className={styles.pillarsTitle}>Your complete<br />financial infrastructure</h2>
          </div>

          <div className={styles.pillarsGrid}>
            <div className={styles.pillar}>
              <div className={styles.pillarNumber}>01 / The Vault</div>
              <div className={styles.pillarName}>Banking &amp;<br />Payments</div>
              <div className={styles.pillarSubtitle}>Financial Operating System</div>
              <p className={styles.pillarDesc}>Your business and personal accounts, unified. Multi-currency IBANs, SEPA Instant, global FX, and crypto on/off-ramp — all under one roof.</p>
              <ul className={styles.pillarFeatures}>
                <li>Multi-currency IBAN — business &amp; personal</li>
                <li>SEPA Instant, Faster Payments, SWIFT</li>
                <li>USDT, USDC &amp; BTC on/off ramp</li>
                <li>FX at institutional rates (0.5–2%)</li>
              </ul>
            </div>

            <div className={styles.pillar}>
              <div className={styles.pillarNumber}>02 / The Portfolio</div>
              <div className={styles.pillarYield}>2–10%</div>
              <div className={styles.pillarName}>Investment<br />Management</div>
              <div className={styles.pillarSubtitle}>Curated Returns, No Complexity</div>
              <p className={styles.pillarDesc}>Five to ten rigorously curated products — from safe European government bonds to higher-yield alternatives. Selected by investment committee, not algorithm.</p>
              <ul className={styles.pillarFeatures}>
                <li>European &amp; US government bonds</li>
                <li>Money market funds with instant liquidity</li>
                <li>Higher-yield bond portfolios (EM, Brazil)</li>
                <li>Tokenised asset-backed investments</li>
                <li>Custom risk allocation per client</li>
              </ul>
            </div>

            <div className={styles.pillar}>
              <div className={styles.pillarNumber}>03 / The Office</div>
              <div className={styles.pillarName}>Structures<br />&amp; Vehicles</div>
              <div className={styles.pillarSubtitle}>Institutional Architecture</div>
              <p className={styles.pillarDesc}>The layer that used to require a law firm, a Swiss banker, and three advisors. SPVs, AIFs, holding structures — built for modern wealth.</p>
              <ul className={styles.pillarFeatures}>
                <li>Special Purpose Vehicles (SPVs)</li>
                <li>Alternative Investment Funds (AIFs)</li>
                <li>Swiss AMC — own ISIN, 7–10% target</li>
                <li>AIFC fund structures (Kazakhstan)</li>
                <li>Multi-jurisdictional holding companies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className={styles.forSection} id="who">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionNumber}>02</div>
          <h2 className={styles.sectionTitle}>Who it&apos;s<br /><em>built for</em></h2>
        </div>

        <div className={styles.forGrid}>
          <div className={styles.forCard}>
            <div className={styles.forType}>New Entrepreneur</div>
            <div className={styles.forName}>The Digital<br />Founder</div>
            <p className={styles.forDesc}>Built a SaaS, sold a company, or grown a profitable business. Significant wealth, but no time or infrastructure to manage it properly.</p>
            <div className={styles.forRange}>Assets: <strong>€1M – €20M</strong></div>
          </div>

          <div className={styles.forCard}>
            <div className={styles.forType}>Crypto-Native Investor</div>
            <div className={styles.forName}>The Web3<br />Wealth Builder</div>
            <p className={styles.forDesc}>Significant crypto holdings seeking trusted, asset-backed returns. Wants institutional credibility alongside digital-native flexibility.</p>
            <div className={styles.forRange}>Portfolio: <strong>€500k – €10M</strong></div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className={styles.getSection}>
        <div className={styles.getInner}>
          <div className={styles.pillarsHeader}>
            <div className={styles.pillarsEyebrow}>The Experience</div>
            <h2 className={styles.pillarsTitle}>What your family office<br />actually delivers</h2>
          </div>

          <div className={styles.getGrid}>
            <div className={styles.getItem}>
              <div className={styles.getIcon}>◈</div>
              <div>
                <div className={styles.getContentTitle}>One dashboard. All of it.</div>
                <p className={styles.getContentDesc}>Your business accounts, personal investments, and custom fund structures visible in a single, clean interface. No spreadsheets. No monthly PDF reports.</p>
              </div>
            </div>

            <div className={styles.getItem}>
              <div className={styles.getIcon}>◇</div>
              <div>
                <div className={styles.getContentTitle}>Transparent fees. Nothing hidden.</div>
                <p className={styles.getContentDesc}>0.25–1% annually on assets under management. On-ramp, off-ramp, and execution fees disclosed upfront. No layered advisory charges or trailing commissions.</p>
              </div>
            </div>

            <div className={styles.getItem}>
              <div className={styles.getIcon}>◆</div>
              <div>
                <div className={styles.getContentTitle}>Multi-jurisdictional by design.</div>
                <p className={styles.getContentDesc}>Finland, UAE, Switzerland, and Kazakhstan. Flexible onboarding regardless of where your business is registered or where you reside.</p>
              </div>
            </div>

            <div className={styles.getItem}>
              <div className={styles.getIcon}>○</div>
              <div>
                <div className={styles.getContentTitle}>Instant liquidity, always.</div>
                <p className={styles.getContentDesc}>Unlike traditional wealth structures that lock capital for years, Slekt products maintain bank-like liquidity. Your money works. And you can access it.</p>
              </div>
            </div>

            <div className={styles.getItem}>
              <div className={styles.getIcon}>●</div>
              <div>
                <div className={styles.getContentTitle}>Crypto-native, fiat-capable.</div>
                <p className={styles.getContentDesc}>Fund via USDT, USDC, or BTC. Receive returns in EUR or stablecoin. Convert at institutional rates. No more parallel systems for digital and traditional assets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className={styles.manifesto}>
        <blockquote className={styles.manifestoQuote}>
          &ldquo;Your family built something real.<br />
          It deserves to <em>grow across generations</em> —<br />
          not sit idle on a business account.&rdquo;
        </blockquote>
        <div className={styles.manifestoAttr}>Slekt Capital — Helsinki, 2025</div>
      </section>

      {/* FOOTER */}
      <footer className={styles.vfoFooter}>
        <div className={styles.footerLogo}>Slekt<span> ✦</span> Capital</div>
        <div className={styles.footerRight}>slekt.ai · Virtual Family Office · © 2026 Slekt Capital</div>
      </footer>
    </>
  )
}
