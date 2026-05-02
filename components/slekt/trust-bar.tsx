export function TrustBar() {
  return (
    <div className="trust-band">
      <span className="trust-item">Finnish EMI licence in progress</span>
      <span className="trust-dot"></span>
      <span className="trust-item">Client funds segregated at tier-1 banks</span>
      <span className="trust-dot"></span>
      <span className="trust-item">From the founder of Narvi Payments</span>
      <span className="trust-dot"></span>
      <span className="trust-item" style={{ color: 'var(--gold)', fontWeight: 500 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" style={{ width: '14px', height: '14px', flexShrink: 0 }}>
          <path d="M44,4 C47,24 64,27 64,44 C64,61 47,64 44,84 C41,64 24,61 24,44 C24,27 41,24 44,4 Z" fill="#F0C040"/>
          <path d="M4,44 C24,41 27,24 44,24 C61,24 64,41 84,44 C64,47 61,64 44,64 C27,64 24,47 4,44 Z" fill="#F0C040" opacity="0.85"/>
          <circle cx="44" cy="44" r="5" fill="#FFE080"/>
        </svg>
        We use this technology to solve real-world problems.
      </span>
    </div>
  )
}
