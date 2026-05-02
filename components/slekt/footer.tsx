import { SlektLogo } from "./slekt-logo"

export function Footer() {
  return (
    <footer className="bg-midnight py-7 px-5 md:py-10 md:px-[60px] flex flex-col md:flex-row items-start md:items-center justify-between border-t border-mist/10 gap-5 flex-wrap">
      <div className="flex items-center gap-[11px]">
        <div className="w-8 h-8 bg-navy rounded-[7px] flex items-center justify-center shrink-0">
          <SlektLogo className="w-[17px] h-[17px]" variant="light" />
        </div>
        <span className="font-serif text-[19px] font-medium text-white">
          Slekt <em className="font-light italic text-mist/50">Capital</em>
        </span>
      </div>

      <div className="flex gap-[7px]">
        <div className="w-2 h-2 rounded-full bg-royal" />
        <div className="w-2 h-2 rounded-full bg-gold" />
        <div className="w-2 h-2 rounded-full bg-mist" />
      </div>

      <div className="text-[11px] text-mist/40 font-mono tracking-[0.05em] leading-[1.9] text-left md:text-right">
        © 2026 Slekt Capital Oy · Helsinki, Finland
        <br />
        FIN-FSA licence application in progress · MiFID II · Client funds segregated
        <br />
        All investments carry risk. Past performance does not guarantee future returns.
      </div>
    </footer>
  )
}
