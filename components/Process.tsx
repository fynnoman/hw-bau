"use client";

import { motion } from "framer-motion";
import { PROCESS } from "@/lib/data";

export default function Process() {
  return (
    <section className="relative bg-ink text-bone py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 dots opacity-10" />
      <div className="relative mx-auto max-w-9xl px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <span className="text-signal text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-bold">Ablauf</span>
          <h2 className="font-display text-huge mt-5 sm:mt-6 leading-[0.95]">
            Vier Schritte.<br />
            <span className="text-signal">Kein Herumeiern.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative bg-ink-800/60 border border-bone/10 p-6 sm:p-7 lg:p-8 hover:border-signal transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-6 sm:mb-8">
                <span className="font-display text-signal text-5xl sm:text-6xl leading-none">{p.code}</span>
                <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-bone-100/50">Schritt {i + 1}</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl mb-2 sm:mb-3">{p.title}</h3>
              <p className="text-sm text-bone-100/70 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
