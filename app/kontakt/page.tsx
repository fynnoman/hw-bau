import PageHeader from "@/components/PageHeader";
import { COMPANY } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Kontakt · HW Bau GmbH · Dillingen",
  description:
    "Rufen Sie an oder schreiben Sie uns. HW Bau GmbH, Berliner Straße 6, 66763 Dillingen. Tel. 06831 5056581."
};

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt · Dillingen · Saar"
        title={<>Rufen Sie an.<br /><span className="text-signal">Wir sind da.</span></>}
        lead="Vor-Ort-Termin, Rückruf, erste Einschätzung: Thomas Hargarter und Christian Wahl sind persönlich erreichbar."
      />

      <section className="relative bg-bone py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              <div>
                <div className="font-display text-xs sm:text-sm text-signal uppercase tracking-wider mb-2">Anschrift</div>
                <div className="font-display text-xl sm:text-2xl text-ink leading-tight">
                  {COMPANY.name}<br />
                  {COMPANY.address.street}<br />
                  {COMPANY.address.zip} {COMPANY.address.city}
                </div>
              </div>

              <div className="space-y-1">
                <div className="font-display text-xs sm:text-sm text-signal uppercase tracking-wider mb-2">Telefon</div>
                <a href={COMPANY.contact.phoneHref} className="block font-display text-xl sm:text-2xl text-ink hover:text-signal transition-colors">
                  {COMPANY.contact.phone}
                </a>
                <a href={COMPANY.contact.mobileHref} className="block text-ink-600 hover:text-signal transition-colors">
                  Mobil {COMPANY.contact.mobile}
                </a>
                <div className="text-ink-500 text-sm">Fax {COMPANY.contact.fax}</div>
              </div>

              <div>
                <div className="font-display text-xs sm:text-sm text-signal uppercase tracking-wider mb-2">E-Mail</div>
                <a href={COMPANY.contact.emailHref} className="font-display text-lg sm:text-xl text-ink hover:text-signal transition-colors break-all">
                  {COMPANY.contact.email}
                </a>
              </div>

              <div className="pt-5 sm:pt-6 border-t-2 border-ink/10">
                <div className="font-display text-xs sm:text-sm text-signal uppercase tracking-wider mb-3">Direkt ansprechen</div>
                {COMPANY.owners.map((o) => (
                  <div key={o.name} className="mb-3">
                    <div className="font-display text-base text-ink">{o.name}</div>
                    <div className="text-sm text-ink-500">{o.role}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="h-[6px] tape" />
        <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          <div>
            <div className="font-display text-signal text-sm uppercase tracking-wider mb-3">Einzugsgebiet</div>
            <div className="font-display text-xl">Saarland · Dillingen · Saarlouis · Lebach · Merzig · Saarbrücken</div>
          </div>
          <div>
            <div className="font-display text-signal text-sm uppercase tracking-wider mb-3">Auch für Kleinaufträge</div>
            <div className="text-bone-100 leading-relaxed">Vom Wanddurchbruch bis zur Komplettsanierung. Wir melden uns verbindlich zurück.</div>
          </div>
          <div>
            <div className="font-display text-signal text-sm uppercase tracking-wider mb-3">Antwortzeit</div>
            <div className="text-bone-100 leading-relaxed">In der Regel innerhalb von 1 bis 2 Werktagen. Bei Notfällen: direkt anrufen.</div>
          </div>
        </div>
      </section>
    </>
  );
}
