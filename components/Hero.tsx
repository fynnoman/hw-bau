"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { COMPANY, IMAGES, SPECIALTIES } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bone pb-8 lg:pb-0">
      {/* grid background */}
      <div className="absolute inset-0 grid-lines opacity-[0.6] pointer-events-none" />

      <div className="relative mx-auto max-w-9xl px-4 sm:px-6 lg:px-10 pt-10 lg:pt-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-end">
          {/* Left: Headline block */}
          <div className="lg:col-span-7 lg:pr-10 relative z-10 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-6"
            >
              <span className="chip"><span className="dot" />Meisterbetrieb · Dillingen</span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-semibold text-ink-500">Seit {COMPANY.established}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="font-display text-mega text-ink [hyphens:manual]"
            >
              <span className="whitespace-nowrap"><span className="text-signal">Handwerk</span>.</span><br />
              Das <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10">hält</span>
                <span className="absolute inset-x-0 bottom-1 h-3 bg-signal/30 -z-0" />
              </span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-ink-600 max-w-2xl leading-relaxed"
            >
              Neubau, Sanierung, Kellerabdichtung und Außenanlagen aus einer Hand.
              Persönlich beraten. Pünktlich ausgeführt. Sauber übergeben. Mit täglichem Foto-Update aufs Handy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <Link href="/kontakt" className="btn btn-primary justify-center">
                Projekt besprechen
                <span>→</span>
              </Link>
              <a href={COMPANY.contact.phoneHref} className="btn btn-ghost justify-center">
                <span className="h-2 w-2 bg-signal rounded-full" />
                {COMPANY.contact.phone}
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl"
            >
              {[
                { k: "5★", v: "Meisterhaft Siegel" },
                { k: "10J", v: "Remmers RSG Garantie" },
                { k: "140+", v: "Kundenstimmen" },
                { k: "2011", v: "Gründungsjahr" }
              ].map((item) => (
                <div key={item.k} className="border-t border-ink/15 pt-3">
                  <div className="font-display text-2xl sm:text-3xl text-ink leading-none">{item.k}</div>
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-500 mt-2 leading-tight">{item.v}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: image stack */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none lg:translate-y-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.5)]"
            >
              <Image
                src={IMAGES.heroPrimary}
                alt="HW Bau GmbH · Meisterbetrieb Dillingen"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              {/* framed badge */}
              <div className="absolute right-3 bottom-3 sm:-right-4 sm:-bottom-5 lg:-right-5 lg:-bottom-6 bg-ink text-bone px-4 py-3 sm:px-5 sm:py-4 max-w-[200px] sm:max-w-[220px] shadow-lg">
                <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-signal font-bold">Spezialität</div>
                <div className="font-display text-base sm:text-xl mt-1 leading-tight">Keller&shy;abdichtung von innen & außen</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="mt-14 sm:mt-20 lg:mt-24 border-y-2 border-ink bg-ink overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-3 sm:py-4">
          {[...SPECIALTIES, ...SPECIALTIES, ...SPECIALTIES].map((t, i) => (
            <span key={i} className="flex items-center gap-4 sm:gap-6 px-4 sm:px-6 font-display text-bone text-base sm:text-xl lg:text-2xl">
              {t}
              <span className="inline-block h-1.5 w-1.5 sm:h-2 sm:w-2 bg-signal rounded-full" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
