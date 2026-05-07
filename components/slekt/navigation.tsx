"use client"

import Link from "next/link"
import { useState } from "react"

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <rect width="24" height="24" rx="3" fill="#0A66C2"/>
    <path d="M7.75 9.5H5.25V18H7.75V9.5ZM6.5 8.5A1.5 1.5 0 1 0 6.5 5.5 1.5 1.5 0 0 0 6.5 8.5ZM18.75 18H16.25V13.75C16.25 12.5 15.75 11.75 14.75 11.75C13.75 11.75 13.25 12.5 13.25 13.75V18H10.75V9.5H13.25V10.75C13.75 9.75 14.75 9.25 16 9.25C17.75 9.25 18.75 10.5 18.75 12.75V18Z" fill="white"/>
  </svg>
)

export function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <Link href="#" className="nav-logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 88">
          <path d="M44,4 C47,24 64,27 64,44 C64,61 47,64 44,84 C41,64 24,61 24,44 C24,27 41,24 44,4 Z" fill="#F0C040"/>
          <path d="M4,44 C24,41 27,24 44,24 C61,24 64,41 84,44 C64,47 61,64 44,64 C27,64 24,47 4,44 Z" fill="#F0C040" opacity="0.85"/>
          <circle cx="44" cy="44" r="5" fill="#FFE080"/>
          <text x="104" y="38" fontFamily="Helvetica Neue,Helvetica,Arial,sans-serif" fontWeight="700" fontSize="22" fill="#FFFFFF" letterSpacing="4">SLEKT</text>
          <rect x="104" y="46" width="116" height="2" rx="1" fill="#F0C040"/>
          <text x="104" y="62" fontFamily="Helvetica Neue,Helvetica,Arial,sans-serif" fontWeight="400" fontSize="10" fill="#A8C0E0" letterSpacing="5">CAPITAL</text>
        </svg>
      </Link>
      <ul className="nav-links">
        <li><Link href="#products">Products</Link></li>
        <li><Link href="#technology">Technology</Link></li>
        <li><Link href="#familyoffice">Family Office</Link></li>
      </ul>
      <div className="nav-actions">
        <a href="https://www.linkedin.com/company/slektcapital/" target="_blank" rel="noopener noreferrer" className="nav-linkedin" aria-label="Follow us on LinkedIn">
          <LinkedInIcon />
        </a>
        <Link href="#cta" className="nav-cta">Join Waitlist</Link>
      </div>
      <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span className="ham-line"></span>
        <span className="ham-line"></span>
        <span className="ham-line"></span>
      </button>
      {open && (
        <div className="nav-mobile-menu">
          <Link href="#products" onClick={() => setOpen(false)}>Products</Link>
          <Link href="#technology" onClick={() => setOpen(false)}>Technology</Link>
          <Link href="#familyoffice" onClick={() => setOpen(false)}>Family Office</Link>
          <a href="https://www.linkedin.com/company/slektcapital/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Follow us on LinkedIn</a>
          <Link href="#cta" className="nav-mobile-cta" onClick={() => setOpen(false)}>Join Waitlist</Link>
        </div>
      )}
    </nav>
  )
}
