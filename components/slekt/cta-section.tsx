"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export function CtaSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async () => {
    if (!email) return
    setStatus("loading")
    setErrorMsg("")

    const { error } = await supabase.from("waitlist").insert([{ email }])

    if (error) {
      if (error.code === "23505") {
        setErrorMsg("You're already on the list!")
      } else {
        setErrorMsg("Something went wrong. Please try again.")
      }
      setStatus("error")
    } else {
      setStatus("success")
      setEmail("")
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
            <p className="cta-footnote" style={{ fontSize: '16px', opacity: 1 }}>You&apos;re on the list. We&apos;ll be in touch when Slekt launches.</p>
          ) : (
            <>
              <div className="email-form">
                <input
                  type="email"
                  placeholder="your@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  disabled={status === "loading"}
                />
                <button type="button" onClick={handleSubmit} disabled={status === "loading"}>
                  {status === "loading" ? "Joining…" : "Join the Waitlist"}
                </button>
              </div>
              {status === "error" && (
                <p className="cta-footnote" style={{ opacity: 1 }}>{errorMsg}</p>
              )}
              {status === "idle" && (
                <p className="cta-footnote">No spam. Only launch updates. EU data residency.</p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
