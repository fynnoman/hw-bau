import PageHeader from "@/components/PageHeader";
import Pillars from "@/components/Pillars";
import Process from "@/components/Process";
import Owners from "@/components/Owners";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Qualifizierung · HW Bau GmbH · Meisterhaft 5 Sterne",
  description:
    "Auszeichnungen und Zertifizierungen: Meisterhaft 5 Sterne, Remmers RSG, Generationenfreundlicher Betrieb, Hilti HIT System, Ausbildungsbetrieb."
};

const BADGES = [
  {
    title: "Meisterhaft · 5 Sterne",
    body: "Fachliche Professionalität, exakte Planung, termingerechte und saubere Ausführung. Die Standards werden regelmäßig überprüft.",
    tag: "Deutsche Bauwirtschaft"
  },
  {
    title: "Remmers System Garantie (RSG)",
    body: "10 Jahre Dauerschutz für Bauwerksabdichtung mit Brief und Siegel. Nur fremdüberwachte Produkte nach DIN EN ISO 9001.",
    tag: "RSG Fachbetrieb"
  },
  {
    title: "Generationenfreundlicher Betrieb",
    body: "Service, Beratung und Komfort für jede Generation. Barrierefreie Produkte, Dienstleistungen und Umbaulösungen.",
    tag: "Deutsches Handwerk"
  },
  {
    title: "Hilti HIT System",
    body: "Nachträgliche Bewehrungsanschlüsse mit Europäischer Technischer Zulassung. Für Wandanschlüsse, Fundamenterweiterungen und tragende Verstärkungen.",
    tag: "Statisch zugelassen"
  },
  {
    title: "Asbestsanierung",
    body: "Abbruch, Sanierungs- und Instandhaltungsarbeiten mit asbesthaltigen Gefahrstoffen nach geltenden Vorschriften (TRGS 519).",
    tag: "Sachkunde & Schulung"
  },
  {
    title: "Ausbildungsbetrieb",
    body: "Wir bilden aus. Die Fachkräfte von morgen lernen auf unseren Baustellen – nicht in Prospekten.",
    tag: "Handwerkskammer"
  }
];

export default function QualifizierungPage() {
  return (
    <>
      <PageHeader
        eyebrow="Qualifizierung · Siegel · Zertifikate"
        title={<>Mit uns bauen Sie <span className="text-signal">besser.</span></>}
        lead="Nur wer durch Kompetenz, Engagement, Qualität und permanente Weiterentwicklung überzeugt, wird ausgezeichnet. Diese Auszeichnungen müssen immer wieder aufs Neue bewiesen werden."
      />

      <section className="relative bg-bone py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            {BADGES.map((b, i) => (
              <article key={b.title} className="group relative bg-white border border-ink/5 p-6 sm:p-8 lg:p-10 hover:border-signal transition-colors">
                <div className="flex items-start justify-between mb-5 sm:mb-6 gap-4">
                  <span className="font-display text-ink-100 text-5xl sm:text-6xl leading-none group-hover:text-signal transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-signal text-right flex-shrink-0 max-w-[120px] leading-snug">{b.tag}</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-ink mb-2 sm:mb-3">{b.title}</h3>
                <p className="text-sm sm:text-base text-ink-600 leading-relaxed">{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Pillars />
      <Process />
      <Owners />
      <CTA />
    </>
  );
}
