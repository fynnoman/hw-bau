import Link from "next/link";
import { COMPANY, NAV, SPECIALTIES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-bone pt-16 sm:pt-20 pb-24 sm:pb-10 mt-16 sm:mt-24">
      <div className="h-[6px] tape -mt-16 sm:-mt-20 mb-14 sm:mb-20" />
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 sm:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="h-11 w-11 sm:h-12 sm:w-12 bg-signal flex items-center justify-center">
                <span className="font-display text-ink text-xl sm:text-2xl leading-none">HW</span>
              </div>
              <div>
                <div className="font-display text-lg sm:text-xl">HW Bau GmbH</div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-concrete-300">Meisterbetrieb seit {COMPANY.established}</div>
              </div>
            </div>
            <p className="text-bone-100 text-sm leading-relaxed max-w-md">
              Handwerk mit Qualität, Erfahrung und Leidenschaft. Ihr zuverlässiger Meisterbetrieb für Neubau,
              Sanierung, Kellerabdichtung und Außenanlagen in Dillingen und im gesamten Saarland.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-2">
              {["Meisterhaft 5★","Remmers RSG","Generationenfreundlich","Ausbildungsbetrieb"].map((t)=>(
                <span key={t} className="text-[10px] uppercase tracking-[0.18em] font-semibold px-2.5 py-1.5 border border-bone/20 text-bone-100">{t}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm mb-4 sm:mb-5 text-signal tracking-wider">Navigation</h4>
            <ul className="space-y-2.5">
              {NAV.map((n)=>(
                <li key={n.href}>
                  <Link href={n.href} className="text-bone-100 hover:text-signal text-sm transition-colors">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm mb-4 sm:mb-5 text-signal tracking-wider">Leistungen</h4>
            <ul className="space-y-2.5">
              {SPECIALTIES.slice(0, 8).map((s)=>(
                <li key={s} className="text-bone-100 text-sm">{s}</li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-display text-sm mb-4 sm:mb-5 text-signal tracking-wider">Kontakt</h4>
            <address className="not-italic text-sm text-bone-100 space-y-2">
              <div>{COMPANY.address.street}</div>
              <div>{COMPANY.address.zip} {COMPANY.address.city}</div>
              <div className="pt-3">
                <a href={COMPANY.contact.phoneHref} className="block hover:text-signal transition-colors">Tel. {COMPANY.contact.phone}</a>
                <a href={COMPANY.contact.mobileHref} className="block hover:text-signal transition-colors">Mobil {COMPANY.contact.mobile}</a>
                <a href={COMPANY.contact.emailHref} className="block hover:text-signal transition-colors break-all">{COMPANY.contact.email}</a>
              </div>
              <div className="text-concrete-300 text-xs pt-3">Fax {COMPANY.contact.fax}</div>
            </address>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-bone/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-concrete-300">
          <div>© {new Date().getFullYear()} {COMPANY.name}. Alle Rechte vorbehalten.</div>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-signal transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-signal transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
