"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { SlektLogo } from "./slekt-logo"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-[16px] transition-all duration-300 ${
        scrolled
          ? "bg-midnight/95 border-b border-mist/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-3.5 md:px-[60px] md:py-[18px]">
        <Link href="#" className="flex items-center gap-[11px]">
          <div className="w-9 h-9 bg-navy rounded-lg flex items-center justify-center shrink-0">
            <SlektLogo className="w-5 h-5" variant="light" />
          </div>
          <span className="font-serif text-[21px] font-medium text-white leading-none">
            Slekt <em className="font-light italic text-mist">Capital</em>
          </span>
        </Link>

        <div className="hidden md:flex gap-7">
          <Link href="#products" className="text-[13px] text-mist hover:text-white transition-colors">
            Products
          </Link>
          <Link href="#family-office" className="text-[13px] text-mist hover:text-white transition-colors">
            Family Office
          </Link>
          <Link href="#technology" className="text-[13px] text-mist hover:text-white transition-colors">
            Technology
          </Link>
          <Link href="#security" className="text-[13px] text-mist hover:text-white transition-colors">
            Security
          </Link>
        </div>

        <Link
          href="#waitlist"
          className="hidden md:inline-block bg-gold text-midnight text-[13px] font-semibold px-5 py-2.5 rounded-lg hover:bg-gold/90 hover:scale-[1.02] transition-all"
        >
          Join Waitlist
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-deep/95 backdrop-blur-md border-t border-mist/10 py-4 px-5">
          <div className="flex flex-col gap-4">
            <Link href="#products" className="text-mist hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Products
            </Link>
            <Link href="#family-office" className="text-mist hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Family Office
            </Link>
            <Link href="#technology" className="text-mist hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Technology
            </Link>
            <Link href="#security" className="text-mist hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
              Security
            </Link>
            <Link
              href="#waitlist"
              className="bg-gold text-midnight px-5 py-2.5 rounded-lg font-semibold text-sm text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
