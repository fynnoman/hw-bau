"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Anfrage von ${data.get("name") || "Website"}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nE-Mail: ${data.get("email")}\nTelefon: ${data.get("phone")}\nLeistung: ${data.get("service")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:hw-bau@kabelmail.de?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={onSubmit} className="relative bg-white border border-ink/5 p-8 lg:p-10">
      <div className="absolute left-0 top-0 h-full w-1 bg-signal" />
      <div className="font-display text-sm text-signal uppercase tracking-wider mb-6">Anfrageformular</div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field name="name" label="Name *" required />
        <Field name="email" label="E-Mail *" type="email" required />
        <Field name="phone" label="Telefon" />
        <Field name="service" label="Leistung / Bereich" placeholder="z.B. Kellerabdichtung" />
      </div>

      <div className="mt-5">
        <label className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-500 mb-2">Nachricht *</label>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full border-2 border-ink/10 bg-bone-50 px-4 py-3 focus:outline-none focus:border-signal transition-colors resize-none"
          placeholder="Was planen Sie? Wann soll es losgehen?"
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
        <div className="text-xs text-ink-500 max-w-xs">
          Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zur Kontaktaufnahme zu.
        </div>
        <button type="submit" className="btn btn-primary">
          {status === "sent" ? "E-Mail geöffnet ✓" : "Anfrage senden →"}
        </button>
      </div>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
  placeholder
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-500 mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border-2 border-ink/10 bg-bone-50 px-4 py-3 focus:outline-none focus:border-signal transition-colors"
      />
    </div>
  );
}
