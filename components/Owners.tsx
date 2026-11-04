"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { COMPANY, IMAGES } from "@/lib/data";

export default function Owners() {
  return (
    <section className="relative bg-bone py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-14 items-center">
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full max-w-sm sm:max-w-md mx-auto lg:mx-0">
              <Image src={IMAGES.team} alt="HW Bau Team" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
              <div className="absolute inset-0 border-[14px] border-signal/0 outline outline-ink" style={{ outlineOffset: "-14px" }} />
              <div className="absolute -right-3 sm:-right-4 top-5 sm:top-6 h-16 w-16 sm:h-20 sm:w-20 tape" />
            </div>
          </div>
          <div className="lg:col-span-7 relative order-1 lg:order-2">
            <span className="chip mb-5"><span className="dot" />Geschäftsführung</span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="font-display text-huge text-ink mt-5 sm:mt-6 leading-[0.95]"
            >
              Zwei Chefs.<br />
              <span className="text-signal">Zwei Hände am Werk.</span>
            </motion.h2>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-ink-600 leading-relaxed max-w-xl">
              Was 2011 als Zweimannbetrieb begann, ist heute ein eingespieltes Team mit eigenen Fachkräften,
              moderner Maschinentechnik und einem Anspruch, der jeden Tag neu bewiesen werden muss.
            </p>

            <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-4 sm:gap-5">
              {COMPANY.owners.map((o) => (
                <div key={o.name} className="relative bg-white border border-ink/5 p-5 sm:p-6 hover:border-signal transition-colors">
                  <div className="absolute left-0 top-0 h-full w-1 bg-signal" />
                  <div className="font-display text-lg sm:text-xl text-ink">{o.name}</div>
                  <div className="text-xs sm:text-sm text-ink-500 mt-1">{o.role}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/qualifizierung" className="btn btn-dark justify-center">Qualifizierung ansehen →</Link>
              <Link href="/kontakt" className="btn btn-ghost justify-center">Persönliches Gespräch</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
