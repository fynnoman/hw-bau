"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV, COMPANY } from "@/lib/data";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bone/95 backdrop-blur shadow-[0_1px_0_rgba(14,14,14,0.08)]" : "bg-bone"
      }`}
    >
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-10 flex items-center justify-between py-4 lg:py-5">
        <Link href="/" className="group flex items-center gap-2.5 sm:gap-3 min-w-0" aria-label="HW Bau GmbH — Startseite">
          <div className="relative flex-shrink-0">
            <div className="h-9 w-9 sm:h-10 sm:w-10 bg-ink flex items-center justify-center">
              <span className="font-display text-signal text-lg sm:text-xl leading-none">HW</span>
            </div>
            <div className="absolute -right-1 -bottom-1 h-2 w-2 bg-signal" />
          </div>
          <div className="leading-tight min-w-0">
            <div className="font-display text-ink text-base sm:text-lg tracking-tight">HW Bau GmbH</div>
            <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-ink-500 font-semibold truncate">Meisterbetrieb · Dillingen</div>
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-semibold uppercase tracking-wider transition-colors ${
                  active ? "text-signal" : "text-ink hover:text-signal"
                }`}
              >
                {item.label}
                {active && <span className="absolute left-0 right-0 -bottom-2 h-[2px] bg-signal" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={COMPANY.contact.phoneHref} className="btn btn-dark text-xs">
            Anrufen
          </a>
          <Link href="/kontakt" className="btn btn-primary text-xs">
            Termin anfragen →
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden h-11 w-11 bg-ink text-bone-50 flex items-center justify-center"
          aria-label="Menu öffnen"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`h-[2px] w-5 bg-bone-50 transition-transform ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`h-[2px] w-5 bg-bone-50 transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`h-[2px] w-5 bg-bone-50 transition-transform ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ease-out ${
          open ? "max-h-[800px]" : "max-h-0"
        }`}
      >
        <div className="bg-ink text-bone px-6 py-8 space-y-6">
          <nav className="flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-display text-3xl tracking-tight ${
                  pathname === item.href ? "text-signal" : "text-bone"
                } hover:text-signal transition-colors`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-6 border-t border-bone/10 space-y-3">
            <a href={COMPANY.contact.phoneHref} className="btn btn-primary w-full justify-center">Jetzt anrufen</a>
            <Link href="/kontakt" className="btn btn-ghost w-full justify-center text-bone border-bone">Termin anfragen</Link>
          </div>
        </div>
      </div>

      {/* Hazard line separator */}
      <div className="h-[6px] tape-thin" />
    </header>
  );
}
