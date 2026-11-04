"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IMAGES, COMPANY } from "@/lib/data";

export default function KellerSpotlight() {
  return (
    <section className="relative bg-ink text-bone overflow-hidden">
      {/* vertical stripes left */}
      <div className="absolute inset-y-0 left-0 w-1.5 sm:w-2 tape" aria-hidden />
      <div className="relative mx-auto max-w-9xl px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-14 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-bold text-signal">Kernkompetenz</span>
              <span className="h-px w-10 sm:w-16 bg-signal/50" />
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="font-display text-huge leading-[0.95]"
            >
              „Wasser gehört in den Pool.<br />
              <span className="text-signal">Nicht in den Keller.“</span>
            </motion.h2>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-bone-100 leading-relaxed max-w-xl">
              Feuchte Keller, eindringendes Wasser oder Risse im Mauerwerk brauchen Erfahrung und ein
              Sanierungskonzept, das zur Ursache passt. Nicht irgendeine Abdichtung.
            </p>

            <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-5 sm:gap-6">
              {[
                {
                  title: "Abdichtung von innen",
                  body: "Wenn außen nicht aufgegraben werden kann oder soll. Mit systemgeprüften Produkten von Remmers."
                },
                {
                  title: "Abdichtung von außen",
                  body: "Vollbad-Abdichtung bis zur Sohle. Die dauerhafte Lösung für Gebäude im Grundwasserbereich."
                },
                {
                  title: "Rissverpressung & Vernadelung",
                  body: "Statische Risse schließen und tragend verbinden. Mit Injektionen und Spiralankersystemen."
                },
                {
                  title: "Horizontalsperre",
                  body: "Gegen aufsteigende Feuchte. Mechanisch oder chemisch – je nach Mauerwerk und Bestand."
                }
              ].map((item) => (
                <div key={item.title} className="border-t-2 border-signal/30 pt-4">
                  <div className="font-display text-lg sm:text-xl text-bone mb-2">{item.title}</div>
                  <div className="text-sm text-bone-100/80 leading-relaxed">{item.body}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/leistungen#kellerabdichtung" className="btn btn-primary justify-center">Kellerabdichtung Details →</Link>
              <a href={COMPANY.contact.phoneHref} className="btn btn-ghost justify-center text-bone border-bone/40 hover:bg-bone hover:text-ink">
                Kostenlose Einschätzung
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
              <Image src={IMAGES.kellerabdichtung} alt="Kellerabdichtung" fill className="object-cover grayscale contrast-125" sizes="(max-width: 1024px) 100vw, 40vw" />
              <div className="absolute inset-0 bg-signal/30 mix-blend-multiply" />
              <div className="absolute inset-0 border-[14px] border-signal/0 outline outline-signal" style={{ outlineOffset: "-14px" }} />
            </div>
            {/* RSG badge */}
            <div className="absolute left-3 bottom-3 sm:-left-4 sm:-bottom-4 bg-bone text-ink px-4 py-3 sm:px-5 sm:py-4 max-w-[200px] sm:max-w-[240px] shadow-xl">
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] font-bold text-signal">Zertifiziert</div>
              <div className="font-display text-base sm:text-xl mt-1 leading-tight">Remmers RSG · 10 Jahre Garantie</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
