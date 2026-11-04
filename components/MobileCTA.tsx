"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY } from "@/lib/data";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Don't show on contact page itself
  if (pathname === "/kontakt") return null;

  return (
    <div
      aria-hidden={!visible}
      className={`lg:hidden fixed bottom-0 inset-x-0 z-40 transition-transform duration-500 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="h-[3px] tape-thin" />
      <div className="bg-ink pb-safe">
        <div className="grid grid-cols-2 gap-px bg-bone/10">
          <a
            href={COMPANY.contact.phoneHref}
            className="flex items-center justify-center gap-2 bg-signal text-ink py-3.5 font-bold uppercase tracking-wider text-[11px]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.5.6 3.7.1.4 0 .8-.3 1.1l-2.4 2z"/>
            </svg>
            Anrufen
          </a>
          <Link
            href="/kontakt"
            className="flex items-center justify-center gap-2 bg-ink-800 text-bone py-3.5 font-bold uppercase tracking-wider text-[11px]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M4 4h16v16H4z"/>
              <path d="M4 4l8 8 8-8"/>
            </svg>
            Anfrage
          </Link>
        </div>
      </div>
    </div>
  );
}
