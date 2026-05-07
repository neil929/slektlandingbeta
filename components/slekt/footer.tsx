export function Footer() {
  return (
    <footer>
      <a href="#" className="footer-logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 88">
          <path d="M44,4 C47,24 64,27 64,44 C64,61 47,64 44,84 C41,64 24,61 24,44 C24,27 41,24 44,4 Z" fill="#F0C040"/>
          <path d="M4,44 C24,41 27,24 44,24 C61,24 64,41 84,44 C64,47 61,64 44,64 C27,64 24,47 4,44 Z" fill="#F0C040" opacity="0.85"/>
          <circle cx="44" cy="44" r="5" fill="#FFE080"/>
          <text x="104" y="38" fontFamily="Helvetica Neue,Helvetica,Arial,sans-serif" fontWeight="700" fontSize="22" fill="#FFFFFF" letterSpacing="4">SLEKT</text>
          <rect x="104" y="46" width="116" height="2" rx="1" fill="#F0C040"/>
          <text x="104" y="62" fontFamily="Helvetica Neue,Helvetica,Arial,sans-serif" fontWeight="400" fontSize="10" fill="#A8C0E0" letterSpacing="5">CAPITAL</text>
        </svg>
      </a>
      <div className="footer-social">
        <a href="https://www.linkedin.com/company/slektcapital/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Slekt Capital on LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>
      <span className="footer-copy">© 2026 Slekt Capital. Finnish EMI Licence in progress. From the founder of Narvi Payments.</span>
    </footer>
  )
}
