import { COMPANY } from "@/lib/data";

export default function TopBar() {
  return (
    <div className="bg-ink text-bone-50 text-[10px] sm:text-xs tracking-wider">
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-10 py-2 sm:py-2.5 flex items-center justify-between gap-3 sm:gap-6">
        <div className="hidden sm:flex items-center gap-3 min-w-0">
          <span className="inline-block h-1.5 w-1.5 bg-signal rounded-full flex-shrink-0" />
          <span className="uppercase font-semibold whitespace-nowrap">Meisterbetrieb seit {COMPANY.established}</span>
          <span className="opacity-30 hidden md:inline">·</span>
          <span className="uppercase truncate hidden md:inline">{COMPANY.address.street} · {COMPANY.address.zip} {COMPANY.address.city}</span>
        </div>
        {/* Mobile-only compact label */}
        <div className="sm:hidden flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 bg-signal rounded-full" />
          <span className="uppercase font-semibold">Meisterbetrieb Dillingen</span>
        </div>
        <div className="flex items-center gap-3 sm:gap-6 ml-auto flex-shrink-0">
          <a href={COMPANY.contact.phoneHref} className="uppercase font-semibold hover:text-signal transition-colors whitespace-nowrap">
            <span className="hidden sm:inline">Tel. </span>{COMPANY.contact.phone}
          </a>
          <span className="hidden md:inline opacity-30">·</span>
          <a href={COMPANY.contact.mobileHref} className="hidden md:inline uppercase hover:text-signal transition-colors">
            Mobil {COMPANY.contact.mobile}
          </a>
        </div>
      </div>
    </div>
  );
}
