"use client"

import { useState, useEffect } from "react"
import { submitWaitlist } from "@/app/actions/waitlist"

export function CtaSection() {
  const [loadedAt, setLoadedAt] = useState(0)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    setLoadedAt(Date.now())
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    const formData = new FormData(e.currentTarget)
    formData.set("_t", String(loadedAt))

    const result = await submitWaitlist(formData)

    if (result.error === "spam") {
      setStatus("success") // silently succeed for bots
    } else if (result.error === "duplicate") {
      setErrorMsg("This email is already on the list.")
      setStatus("error")
    } else if (result.error) {
      setErrorMsg(result.error)
      setStatus("error")
    } else {
      setStatus("success")
    }
  }

  return (
    <section id="cta" className="section section-gold">
      <div className="cta-glow"></div>
      <div className="container">
        <div className="section-label" style={{ textAlign: 'center' }}>Coming Soon</div>
        <div className="cta-inner">
          <h2>The wealth infrastructure for <em>Europe&apos;s entrepreneurial class.</em></h2>
          <p>We are building something Europe has never had. Be the first to know when it is ready.</p>

          {status === "success" ? (
            <p className="cta-success">You&apos;re on the list. We&apos;ll be in touch when Slekt launches.</p>
          ) : (
            <form className="waitlist-form" onSubmit={handleSubmit}>
              {/* Honeypot — hidden from humans, visible to bots */}
              <input
                type="text"
                name="website"
                defaultValue=""
                tabIndex={-1}
                autoComplete="off"
                className="form-trap"
                aria-hidden="true"
              />

              <div className="waitlist-fields">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  disabled={status === "loading"}
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  required
                  disabled={status === "loading"}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="your@company.com"
                  required
                  disabled={status === "loading"}
                />
              </div>

              <button type="submit" className="waitlist-btn" disabled={status === "loading"}>
                {status === "loading" ? "Joining…" : "Join the Waitlist"}
              </button>

              {status === "error" && (
                <p className="cta-footnote" style={{ opacity: 1 }}>{errorMsg}</p>
              )}
              {status === "idle" && (
                <p className="cta-footnote">No spam. Only launch updates. EU data residency.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
