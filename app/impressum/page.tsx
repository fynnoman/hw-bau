import PageHeader from "@/components/PageHeader";
import { COMPANY } from "@/lib/data";

export const metadata = { title: "Impressum · HW Bau GmbH" };

export default function ImpressumPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title={<>Impressum</>} />
      <section className="bg-bone py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10 prose prose-neutral max-w-none">
          <h2 className="font-display text-2xl text-ink">Angaben gemäß § 5 TMG</h2>
          <p>
            {COMPANY.name}<br />
            {COMPANY.address.street}<br />
            {COMPANY.address.zip} {COMPANY.address.city}
          </p>
          <h3 className="font-display text-xl mt-10">Kontakt</h3>
          <p>
            Telefon: {COMPANY.contact.phone}<br />
            Mobil: {COMPANY.contact.mobile}<br />
            Fax: {COMPANY.contact.fax}<br />
            E-Mail: {COMPANY.contact.email}
          </p>
          <p className="text-sm text-ink-500 mt-10">
            Rechtliche Angaben (Handelsregister, USt-ID, Verantwortlicher i. S. d. § 55 Abs. 2 RStV) bitte vom Betrieb ergänzen.
          </p>
        </div>
      </section>
    </>
  );
}
