"use server"

import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function submitWaitlist(formData: FormData) {
  // Honeypot — bots fill this, humans don't
  const trap = formData.get("website") as string
  if (trap) return { error: "spam" }

  // Timing — bots submit instantly, humans take a few seconds
  const loadedAt = parseInt(formData.get("_t") as string || "0")
  if (!loadedAt || Date.now() - loadedAt < 3000) return { error: "spam" }

  const name = (formData.get("name") as string || "").trim()
  const company = (formData.get("company") as string || "").trim()
  const email = (formData.get("email") as string || "").trim()

  if (!name || !email) return { error: "Please fill in your name and email." }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) return { error: "Please enter a valid email address." }

  const { error } = await supabase
    .from("waitlist")
    .insert([{ name, company, email }])

  if (error) {
    if (error.code === "23505") return { error: "duplicate" }
    return { error: "Something went wrong. Please try again." }
  }

  return { success: true }
}
