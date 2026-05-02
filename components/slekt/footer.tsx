export function Footer() {
  return (
    <footer>
      <a href="#" className="footer-logo">
        <svg width="130" height="40" viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="30" fontFamily="Georgia, serif" fontSize="26" fill="#F0C040" fontStyle="italic">Slekt</text>
          <text x="66" y="30" fontFamily="Arial, sans-serif" fontSize="17" fill="rgba(168,192,224,0.5)" fontWeight="300">Capital</text>
        </svg>
      </a>
      <p className="footer-copy">
        © 2026 Slekt Capital Oy · Helsinki, Finland<br />
        MiFID II · Client funds segregated · All investments carry risk.
      </p>
    </footer>
  )
}
