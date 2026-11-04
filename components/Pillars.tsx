"use client";

import { motion } from "framer-motion";
import { PILLARS } from "@/lib/data";

export default function Pillars() {
  return (
    <section className="relative bg-bone py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4 relative">
            <div className="lg:sticky lg:top-32">
              <span className="chip mb-5 sm:mb-6"><span className="dot" />Warum HW Bau</span>
              <h2 className="font-display text-huge text-ink leading-[0.95] mt-5 sm:mt-6">
                Fünf Dinge,<br />die wir <span className="text-signal">beweisen</span>.
              </h2>
              <p className="mt-5 sm:mt-6 text-base sm:text-lg text-ink-600 leading-relaxed max-w-md">
                Siegel sind kein Marketing. Sie werden geprüft, verlängert und auf jeder Baustelle
                verdient. Diese Grundsätze sind der Kern unserer Arbeit.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-5 sm:space-y-6">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.code}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative flex gap-4 sm:gap-6 lg:gap-10 pb-5 sm:pb-6 border-b-2 border-ink/10 last:border-b-0"
              >
                <div className="relative pt-1 flex-shrink-0">
                  <span className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink-100 group-hover:text-signal transition-colors duration-500">
                    {p.code}
                  </span>
                </div>
                <div className="flex-1 pt-1 sm:pt-2 min-w-0">
                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-ink mb-2 sm:mb-3">{p.title}</h3>
                  <p className="text-sm sm:text-base text-ink-600 leading-relaxed max-w-2xl">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
