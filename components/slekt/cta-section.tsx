"use client"

import { useState } from "react"

export function CtaSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section id="waitlist" className="section section-gold">
      <div className="cta-inner">
        <p className="section-label">Coming soon · Be first</p>
        <h2>The wealth infrastructure<br />for Europe&apos;s <em>entrepreneurial class.</em></h2>
        <p>We are building something Europe has never had. Be the first to know when it is ready.</p>
        <form className="email-form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@company.com"
            required
          />
          <button type="submit">Join Waitlist</button>
        </form>
        <p className="cta-footnote">
          {submitted
            ? "You are on the list. We will be in touch when Slekt launches."
            : "No spam. Just a launch notification when we are ready."}
        </p>
      </div>
    </section>
  )
}
