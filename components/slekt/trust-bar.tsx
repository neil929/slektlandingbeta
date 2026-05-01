export function TrustBar() {
  return (
    <div className="bg-lapis border-b border-white/[0.06] py-[15px] px-5 md:px-[60px] flex items-center gap-4 md:gap-0 flex-wrap">
      <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-white/[0.68] flex items-center gap-2.5 md:pr-8">
        <span>🇫🇮</span> Finnish EMI licence in progress
      </div>
      <span className="hidden md:block w-px h-4 bg-white/[0.1] shrink-0" />
      <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-white/[0.68] flex items-center gap-2.5 md:px-8">
        <span className="w-[5px] h-[5px] rounded-full bg-teal shrink-0" />
        Client funds segregated at tier-1 banks
      </div>
      <span className="hidden md:block w-px h-4 bg-white/[0.1] shrink-0" />
      <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-white/[0.68] flex items-center gap-2.5 md:px-8">
        <span className="w-[5px] h-[5px] rounded-full bg-teal shrink-0" />
        From the founder of Narvi Payments
      </div>
      <span className="hidden md:block w-px h-4 bg-white/[0.1] shrink-0" />
      <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-white/[0.68] flex items-center gap-2.5 md:pl-8">
        <span className="w-[5px] h-[5px] rounded-full bg-teal shrink-0" />
        MiFID II Compliant
      </div>
    </div>
  )
}
