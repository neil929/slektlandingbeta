interface SlektLogoProps {
  className?: string
}

export function SlektLogo({ className }: SlektLogoProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M9 14c0 0 6-4 15-4s15 4 15 4"
        stroke="#1D3461"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M5 22c0 0 8-6 19-6s19 6 19 6"
        stroke="#1D3461"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <circle cx="24" cy="35" r="8" fill="#1D3461" />
      <circle cx="24" cy="35" r="4" fill="#00D4A8" />
    </svg>
  )
}
