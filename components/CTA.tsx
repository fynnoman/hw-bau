"use client";

import Link from "next/link";
import { COMPANY } from "@/lib/data";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="h-[6px] sm:h-[8px] tape" />
      <div className="relative bg-signal">
        <div className="absolute inset-0 dots opacity-20" />
        <div className="relative mx-auto max-w-9xl px-4 sm:px-6 lg:px-10 py-14 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-8">
              <h2 className="font-display text-huge text-ink leading-[0.9]">
                Reden wir über<br />Ihr Projekt.
              </h2>
              <p className="mt-5 sm:mt-6 text-ink/80 text-base sm:text-lg max-w-xl leading-relaxed">
                Vor-Ort-Termin, transparentes Angebot, festgelegter Start. Wir kommen auch für Kleinaufträge.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a href={COMPANY.contact.phoneHref} className="btn btn-dark justify-center">Tel. {COMPANY.contact.phone}</a>
              <Link href="/kontakt" className="btn btn-ghost justify-center border-ink text-ink hover:bg-ink hover:text-bone">
                Anfrage senden →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[6px] sm:h-[8px] tape" />
    </section>
  );
}
