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
      <span className="footer-copy">© 2026 Slekt Capital. Finnish EMI Licence in progress. From the founder of Narvi Payments.</span>
    </footer>
  )
}
