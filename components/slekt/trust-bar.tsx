export function TrustBar() {
  return (
    <div className="bg-navy py-[13px] px-5 md:px-[60px] flex items-center gap-5 md:gap-9 flex-wrap">
      <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-mist/70 flex items-center gap-2">
        <span className="text-base">🇫🇮</span> Finnish EMI licence in progress
      </div>
      <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-mist/70 flex items-center gap-2">
        <span className="w-[5px] h-[5px] rounded-full bg-gold shrink-0" />
        Client funds segregated at tier-1 banks
      </div>
      <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-mist/70 flex items-center gap-2">
        <span className="w-[5px] h-[5px] rounded-full bg-gold shrink-0" />
        From the founder of Narvi Payments
      </div>
    </div>
  )
}
