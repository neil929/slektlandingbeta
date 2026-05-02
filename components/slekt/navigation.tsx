import Link from "next/link"

export function Navigation() {
  return (
    <nav>
      <Link href="#" className="nav-logo">
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
          <text x="0" y="30" fontFamily="Georgia, serif" fontSize="26" fill="#F0C040" fontStyle="italic">Slekt</text>
          <text x="62" y="30" fontFamily="Arial, sans-serif" fontSize="17" fill="rgba(168,192,224,0.55)" fontWeight="300"> Capital</text>
        </svg>
      </Link>

      <ul className="nav-links">
        <li><Link href="#products">Products</Link></li>
        <li><Link href="#family-office">Family Office</Link></li>
        <li><Link href="#technology">Technology</Link></li>
        <li><Link href="#security">Security</Link></li>
      </ul>

      <Link href="#waitlist" className="nav-cta">
        Join the Waitlist
      </Link>
    </nav>
  )
}
