import PageHeader from "@/components/PageHeader";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Kundenstimmen · HW Bau GmbH · 140+ Bewertungen",
  description:
    "Was Kunden über die Zusammenarbeit mit HW Bau GmbH schreiben: Sanierung, Umbau, Außenanlagen und mehr. Echte, verifizierbare Bewertungen aus dem Saarland."
};

export default function KundenstimmenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Meinung unserer Kunden"
        title={<>Die beste Werbung sind <span className="text-signal">zufriedene Kunden.</span></>}
        lead="Über 140 persönliche Rückmeldungen – von kleinen Reparaturen bis zu großen Außenanlagen. Hier ein Auszug, den unsere Auftraggeber selbst geschrieben haben."
      />
      <Reviews />
      <CTA />
    </>
  );
}
