"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICE_GROUPS, IMAGES } from "@/lib/data";

const serviceImages: Record<string, string> = {
  "01": IMAGES.altbau,
  "02": IMAGES.wall,
  "03": IMAGES.blueprint,
  "04": IMAGES.pflaster,
  "05": IMAGES.terrasse,
  "06": IMAGES.excavator,
  "07": IMAGES.tools
};

export default function Services() {
  return (
    <section id="leistungen" className="relative bg-bone py-16 sm:py-24 lg:py-36">
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <span className="chip mb-5"><span className="dot" />Was wir machen</span>
            <h2 className="font-display text-huge text-ink mt-5 sm:mt-6 leading-[0.95]">
              Sieben Bereiche.<br />
              <span className="text-signal">Ein Anspruch.</span>
            </h2>
          </div>
          <p className="text-ink-600 text-base sm:text-lg max-w-md leading-relaxed">
            Die HW Bau GmbH deckt den Großteil aller Bauaufgaben rund ums Haus mit dem eigenen Team ab. Weniger Schnittstellen. Mehr Verantwortung bei einem Ansprechpartner.
          </p>
        </div>

        <div className="space-y-3">
          {SERVICE_GROUPS.map((group, idx) => (
            <ServiceRow key={group.code} group={group} image={serviceImages[group.code]} reversed={idx % 2 === 1} />
          ))}
        </div>

        <div className="mt-14 sm:mt-20 flex justify-center">
          <Link href="/leistungen" className="btn btn-dark">Alle Leistungen →</Link>
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  group,
  image,
  reversed
}: {
  group: typeof SERVICE_GROUPS[number];
  image: string;
  reversed: boolean;
}) {
  // Direction flip only applies on lg+
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="group relative bg-white border border-ink/5 hover:border-signal transition-colors duration-500"
    >
      <div className={`grid lg:grid-cols-[1fr_1.5fr_1fr] ${reversed ? "lg:[direction:rtl]" : ""}`}>
        <div className="relative aspect-[16/10] sm:aspect-[5/4] lg:aspect-auto lg:min-h-[320px] overflow-hidden lg:[direction:ltr]">
          <Image
            src={image}
            alt={group.title}
            fill
            className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 30vw"
          />
          <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/0 transition-colors duration-500" />
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-signal text-ink h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center">
            <span className="font-display text-lg sm:text-xl">{group.code}</span>
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-12 lg:[direction:ltr] flex flex-col justify-center">
          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink leading-tight">{group.title}</h3>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink-600 leading-relaxed">{group.lead}</p>
        </div>

        <div className="px-6 pb-6 sm:px-8 sm:pb-8 lg:p-12 pt-0 border-t-0 lg:border-l border-ink/5 lg:[direction:ltr]">
          <div className="hidden lg:block h-6" aria-hidden />
          <ul className="space-y-2 sm:space-y-2.5 text-sm">
            {group.items.map((it) => (
              <li key={it} className="flex items-start gap-3 text-ink-700">
                <span className="mt-[9px] inline-block h-1.5 w-1.5 bg-signal flex-shrink-0" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
