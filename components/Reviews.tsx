"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TESTIMONIALS } from "@/lib/data";

export default function Reviews({ compact = false }: { compact?: boolean }) {
  const list = compact ? TESTIMONIALS.slice(0, 6) : TESTIMONIALS;

  return (
    <section className="relative bg-bone py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 sm:gap-6 mb-10 sm:mb-14 lg:mb-20">
          <div>
            <span className="chip mb-5"><span className="dot" />Meinung unserer Kunden</span>
            <h2 className="font-display text-huge text-ink mt-5 sm:mt-6 leading-[0.95]">
              140+ Bewertungen.<br />
              <span className="text-signal">Keine Platzhalter.</span>
            </h2>
          </div>
          <p className="text-ink-600 text-base sm:text-lg max-w-md leading-relaxed">
            Unsere beste Werbung sind Kunden, die uns weiterempfehlen. Alle Bewertungen hier sind echt
            und stammen direkt von unseren Auftraggebern.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {list.map((t, i) => (
            <motion.article
              key={t.name + t.date}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              className="relative bg-white border border-ink/5 p-6 sm:p-7 lg:p-8 group hover:border-signal transition-colors"
            >
              <div className="flex items-center gap-1 text-signal mb-3 sm:mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 20 20" fill="currentColor"><path d="M10 15.27l-5.18 3.73L6.58 12.9 2 8.91l6.24-.54L10 2.5l1.76 5.87 6.24.54-4.58 3.99 1.76 6.1z"/></svg>
                ))}
              </div>
              <p className="text-ink-700 leading-relaxed text-sm sm:text-[15px]">„{t.quote}“</p>
              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-ink/10 flex items-start justify-between gap-3 sm:gap-4">
                <div className="min-w-0">
                  <div className="font-display text-sm sm:text-base text-ink truncate">{t.name}</div>
                  <div className="text-xs text-ink-500 mt-0.5">{t.role}</div>
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-ink-400 text-right flex-shrink-0">{t.date}</div>
              </div>
            </motion.article>
          ))}
        </div>

        {compact && (
          <div className="mt-10 sm:mt-14 flex justify-center">
            <Link href="/kundenstimmen" className="btn btn-dark">Alle Kundenstimmen →</Link>
          </div>
        )}
      </div>
    </section>
  );
}
