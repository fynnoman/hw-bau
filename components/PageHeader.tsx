"use client";

import { motion } from "framer-motion";

export default function PageHeader({
  eyebrow,
  title,
  lead
}: { eyebrow: string; title: React.ReactNode; lead?: string }) {
  return (
    <section className="relative bg-bone pt-8 sm:pt-12 lg:pt-20 pb-12 sm:pb-16 lg:pb-24">
      <div className="absolute inset-0 grid-lines opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-9xl px-4 sm:px-6 lg:px-10">
        <span className="chip mb-5 sm:mb-6"><span className="dot" />{eyebrow}</span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-huge text-ink leading-[0.95] max-w-5xl mt-5 sm:mt-6"
        >
          {title}
        </motion.h1>
        {lead && <p className="mt-6 sm:mt-8 text-ink-600 text-base sm:text-lg max-w-2xl leading-relaxed">{lead}</p>}
      </div>
      <div className="relative mt-10 sm:mt-12 h-[5px] sm:h-[6px] tape-thin" />
    </section>
  );
}
