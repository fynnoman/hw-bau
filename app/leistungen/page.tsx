import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import KellerSpotlight from "@/components/KellerSpotlight";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Leistungen · HW Bau GmbH · Dillingen",
  description:
    "Vollständiges Leistungsspektrum: Neubau, Altbausanierung, Kellerabdichtung, Rissverpressung, Pflaster, Naturstein, Gabionen, Außentreppen und mehr im Saarland."
};

export default function LeistungenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leistungen · Dillingen · Saarland"
        title={<>Vom Keller bis zur <span className="text-signal">Einfahrt.</span></>}
        lead="Neubau, Umbau, Sanierung, Bautenschutz und Außenanlagen. Mit eigenen Mitarbeitern, moderner Maschinentechnik und einem Meistertitel, der jedes Jahr neu bestätigt wird."
      />
      <Services />
      <div id="kellerabdichtung">
        <KellerSpotlight />
      </div>
      <CTA />
    </>
  );
}
