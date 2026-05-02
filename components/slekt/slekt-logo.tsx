interface SlektLogoProps {
  className?: string
  variant?: "light" | "dark"
}

export function SlektLogo({ className, variant = "light" }: SlektLogoProps) {
  const strokeColor = variant === "light" ? "#F0C040" : "#0D2B5E"
  
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M9 14c0 0 6-4 15-4s15 4 15 4"
        stroke={strokeColor}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M5 22c0 0 8-6 19-6s19 6 19 6"
        stroke={strokeColor}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <circle cx="24" cy="35" r="8" fill={strokeColor} />
      <circle cx="24" cy="35" r="4" fill={variant === "light" ? "#0B1B38" : "#FFFFFF"} />
    </svg>
  )
}
