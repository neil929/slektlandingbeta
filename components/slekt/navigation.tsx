"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { SlektLogo } from "./slekt-logo"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3.5 md:px-[60px] md:py-[18px] backdrop-blur-[16px] transition-all duration-300 ${
        scrolled
          ? "bg-cream/[0.97] border-b border-cream-200"
          : "bg-cream/90 border-b border-transparent"
      }`}
    >
      <Link href="#" className="flex items-center gap-[11px]">
        <div className="w-9 h-9 bg-teal rounded-lg flex items-center justify-center shrink-0">
          <SlektLogo className="w-5 h-5" />
        </div>
        <span className="font-serif text-[21px] font-medium text-lapis leading-none">
          Slekt <em className="font-light italic text-lapis-mid">Capital</em>
        </span>
      </Link>

      <div className="hidden md:flex gap-7">
        <Link href="#products" className="text-[13px] text-cream-700 hover:text-lapis transition-colors">
          Products
        </Link>
        <Link href="#family-office" className="text-[13px] text-cream-700 hover:text-lapis transition-colors">
          Family Office
        </Link>
        <Link href="#technology" className="text-[13px] text-cream-700 hover:text-lapis transition-colors">
          Technology
        </Link>
        <Link href="#security" className="text-[13px] text-cream-700 hover:text-lapis transition-colors">
          Security
        </Link>
      </div>

      <Link
        href="#waitlist"
        className="bg-lapis text-white text-[13px] font-medium px-5 py-2.5 rounded-lg hover:bg-lapis-mid hover:scale-[1.02] transition-all"
      >
        Join Waitlist
      </Link>
    </nav>
  )
}
