import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Datenschutz · HW Bau GmbH" };

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title={<>Datenschutz</>} />
      <section className="bg-bone py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10 prose prose-neutral max-w-none">
          <p className="text-ink-600">
            Diese Seite ist ein Platzhalter. Eine vollständige Datenschutzerklärung nach Art. 13/14 DSGVO
            wird vom Betrieb bereitgestellt und hier eingefügt.
          </p>
        </div>
      </section>
    </>
  );
}
