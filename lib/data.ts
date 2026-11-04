export const COMPANY = {
  name: "HW Bau GmbH",
  tagline: "Meisterbetrieb für Bau, Sanierung & Außenanlagen",
  established: 2011,
  motto: "Wasser gehört in den Pool – und nicht in den Keller.",
  address: {
    street: "Berliner Straße 6",
    zip: "66763",
    city: "Dillingen",
    region: "Saar"
  },
  contact: {
    phone: "06831 5056581",
    phoneHref: "tel:+4968315056581",
    mobile: "0152 33788750",
    mobileHref: "tel:+4915233788750",
    fax: "06831 5054644",
    email: "hw-bau@kabelmail.de",
    emailHref: "mailto:hw-bau@kabelmail.de"
  },
  owners: [
    { name: "Thomas Hargarter", role: "Geschäftsführung · Planung & Beratung" },
    { name: "Christian Wahl",   role: "Geschäftsführung · Bauleitung & Ausführung" }
  ]
};

export const NAV = [
  { href: "/",              label: "Start" },
  { href: "/leistungen",    label: "Leistungen" },
  { href: "/qualifizierung",label: "Qualifizierung" },
  { href: "/kundenstimmen", label: "Kundenstimmen" },
  { href: "/kontakt",       label: "Kontakt" }
];

export const SERVICE_GROUPS = [
  {
    code: "01",
    title: "Neubau, Umbau & Sanierung",
    lead: "Vom Rohbau bis zur schlüsselfertigen Immobilie. Ein Ansprechpartner, ein Qualitätsanspruch.",
    items: [
      "Neubau Wohnhaus",
      "Umbau & Grundrissänderung",
      "Altbausanierung",
      "Kernsanierung",
      "Gebäudesanierung",
      "Wanddurchbrüche & Mauerwerk"
    ]
  },
  {
    code: "02",
    title: "Kellerabdichtung & Bautenschutz",
    lead: "Unsere Kernkompetenz. Für Häuser, die lange halten sollen.",
    items: [
      "Kellerabdichtung von innen",
      "Kellerabdichtung von außen",
      "Bauwerksabdichtung",
      "Kellertrockenlegung",
      "Horizontalsperre",
      "Drainagearbeiten",
      "Feuchtigkeitsschäden beseitigen"
    ]
  },
  {
    code: "03",
    title: "Riss- & Betonsanierung",
    lead: "Risse sind kein kosmetisches Problem. Wir beheben die Ursache.",
    items: [
      "Rissverpressung",
      "Rissvernadelung mit Spiralanker",
      "Mauerwerkssanierung",
      "Betonsanierung",
      "Balkonsanierung & -abdichtung"
    ]
  },
  {
    code: "04",
    title: "Außenanlagen & Pflaster",
    lead: "Eingänge, Höfe, Einfahrten, Terrassen. Handwerk, das im Alltag überzeugt.",
    items: [
      "Pflasterarbeiten",
      "Verbundstein- & Natursteinverlegung",
      "Terrassen- & Wegebau",
      "Natursteinmauern & Stützmauern",
      "Winkelstützelemente",
      "Sichtschutz & Gabionen",
      "Hangbefestigungen"
    ]
  },
  {
    code: "05",
    title: "Treppen, Terrassen & Eingang",
    lead: "Der erste Schritt zum Haus trägt die Handschrift der ganzen Arbeit.",
    items: [
      "Außentreppen & Eingangsbereiche",
      "Natursteintreppen",
      "Terrassensanierung & -abdichtung",
      "Feinsteinzeug-Terrassenplatten",
      "Steinteppich"
    ]
  },
  {
    code: "06",
    title: "Kanal & Entwässerung",
    lead: "Mit eigener Kanalkamera. Diagnose und Sanierung aus einer Hand.",
    items: [
      "Kanalsanierung",
      "Rückstausicherung",
      "Rückstauklappen (mechanisch & elektronisch)",
      "Klärgrubenkurzschließung",
      "Bodeneinläufe"
    ]
  },
  {
    code: "07",
    title: "Spezialarbeiten",
    lead: "Wenn das Standardgewerk aufhört, fängt unser Job an.",
    items: [
      "Hourdisdecke einbauen",
      "Barrierefreie Rampen",
      "Kernbohrungen (Kabel, Lüftung, Kamin)",
      "Individuelle Bausonderlösungen"
    ]
  }
];

export const PILLARS = [
  {
    code: "01",
    title: "Meisterhaft · 5 Sterne",
    body: "Qualitätssiegel der deutschen Bauwirtschaft für fachliche Kompetenz, Weiterbildung und verantwortungsbewusste Ausführung. Wird regelmäßig geprüft."
  },
  {
    code: "02",
    title: "Remmers RSG Fachbetrieb",
    body: "Zertifizierter Partner der Remmers System Garantie. 10 Jahre Dauerschutz für Bauwerksabdichtung mit Brief und Siegel."
  },
  {
    code: "03",
    title: "Generationenfreundlicher Betrieb",
    body: "Markenzeichen des Deutschen Handwerks. Service, Beratung und Komfort für alle Generationen – vom ersten Termin bis zur Abnahme."
  },
  {
    code: "04",
    title: "Tägliches Baustellenupdate",
    body: "Fotos vom Fortschritt direkt aufs Handy. Transparenz, die unsere Kunden immer wieder hervorheben."
  },
  {
    code: "05",
    title: "Ausbildungsbetrieb",
    body: "Wir bilden aus. Fachkräfte von morgen entstehen auf unseren Baustellen – nicht in Prospekten."
  }
];

export const PROCESS = [
  {
    code: "A",
    title: "Vor-Ort-Termin",
    body: "Thomas Hargarter kommt persönlich. Wir hören zu, messen auf, dokumentieren den Bestand."
  },
  {
    code: "B",
    title: "Festes Angebot",
    body: "Transparent, nachvollziehbar, mit klaren Positionen. Mehrere Varianten auf Wunsch."
  },
  {
    code: "C",
    title: "Terminierte Ausführung",
    body: "Christian Wahl leitet die Baustelle. Pünktlicher Beginn, verlässliche Taktung, täglicher Fotobericht."
  },
  {
    code: "D",
    title: "Übergabe · Sauber",
    body: "Baustelle wird aufgeräumt übergeben. Rechnung deckt sich mit dem Angebot. Fertig."
  }
];

export const SPECIALTIES = [
  "Neubau",
  "Altbausanierung",
  "Kellerabdichtung",
  "Rissverpressung",
  "Pflasterarbeiten",
  "Natursteinarbeiten",
  "Gabionen · Sichtschutz",
  "Außentreppen",
  "Balkonabdichtung",
  "Kanalsanierung",
  "Kernbohrungen",
  "Hangbefestigung"
];

export const TESTIMONIALS = [
  {
    name: "Karin und Manfred",
    date: "04. November 2026",
    role: "Trockenlegung Waschküche",
    quote:
      "So was geht man lange suchen. Kompetent, schnell, sauber und Terminabwicklung wie vereinbart – ohne wenn und aber. Ein dickes Lob an die Mitarbeiter vor Ort. Auf jeden Fall eine Firma, die wir sehr gerne weiterempfehlen."
  },
  {
    name: "Anja und Michael",
    date: "14. September 2026",
    role: "Baumaßnahme 3 · Außenanlage",
    quote:
      "Wie immer eine sehr positive und kreative Erfahrung. Vom Azubi über die Facharbeiter bis zu den beiden Chefs. Kreative Vorschläge, saubere Umsetzung – wir freuen uns schon auf Baumaßnahme 4."
  },
  {
    name: "Markus Peter",
    date: "05. September 2026",
    role: "Rissvernadelung & Verpressung",
    quote:
      "Die vorhandenen Risse wurden vernadelt und verpresst. Die Arbeiten wurden professionell, sauber und termingerecht wie vereinbart ausgeführt. Sehr zufrieden – empfehle gerne weiter."
  },
  {
    name: "Familie John",
    date: "23. Mai 2026",
    role: "Balkonsanierung",
    quote:
      "Pünktlich zum festgesetzten Termin erschien ein freundliches Zwei-Mann-Team. Alle Arbeitsschritte mit äußerster Sorgfalt. Abschlussrechnung deckte sich mit dem Kostenvoranschlag. Trägt zu Recht das Gütesiegel „Meisterhaft“."
  },
  {
    name: "Jens Berwanger",
    date: "16. Januar 2026",
    role: "Wanddurchbrüche · Stahlträger",
    quote:
      "Zwei Wanddurchbrüche, zwei Stahlträger, eine Türöffnung zugemauert. Professionell, sauber und sehr zügig. Preis-Leistung passt vollkommen. Absolut empfehlenswert."
  },
  {
    name: "Familie Braun",
    date: "28. November 2025",
    role: "Mehrere Wanddurchbrüche",
    quote:
      "Von der ersten Kontaktaufnahme bis zur Fertigstellung schlicht Weltklasse. Die Mitarbeiter vor Ort einfach grandios: freundlich, kompetent und mit spürbarem Anspruch an exzellente Arbeit."
  },
  {
    name: "Claudia Roa-Häupl",
    date: "22. November 2025",
    role: "Edelstahlpool · Außenanlage · Poolhaus",
    quote:
      "Edelstahlpool mit toller Außenanlage sowie Poolhaus mit Sauna. Das Team durchweg freundlich, kompetent und äußerst strukturiert. Reibungslose Baustelle. Nur wärmstens weiterempfehlen."
  },
  {
    name: "Martina Scholer",
    date: "10. November 2025",
    role: "Bauvorhaben Wohnhaus",
    quote:
      "Ein großes Kompliment für die hervorragende Ausführung, die saubere Durchführung, das picobello hinterlassen der Baustelle und die freundlichen Mitarbeiter. Preis-Leistung total in Ordnung."
  },
  {
    name: "Andreas K. und Miriam B-K.",
    date: "Saarlouis",
    role: "Generelle Weiterempfehlung",
    quote:
      "Auf die Fa. HW Bau GmbH ist zu 100% Verlass. Die Arbeiten wurden ausgezeichnet durchgeführt. Besonders gefallen hat uns das tägliche Baustellenupdate mit Fotos. Ein besonderer Dank geht an Christian und Dieter."
  },
  {
    name: "Dr. M. Hamentgen",
    date: "13. November 2024",
    role: "Gesamterfahrung",
    quote:
      "Direkt in der Kommunikation, ehrlich im Umgang, zuverlässig in der Ausführung und korrekt in der Abrechnung. Ein richtungsweisendes Leuchtfeuer in der Bauwirtschaft."
  },
  {
    name: "Peter Altmaier",
    date: "10. Oktober 2024",
    role: "Mehrere Projekte · Außenanlage",
    quote:
      "Seit langem Kunde und immer hoch zufrieden. Granitplatten, Keller-Außenwände, Natursteine, Fundamente – individuell, technisch perfekt und ästhetisch herausragend."
  },
  {
    name: "Dominik",
    date: "11. April 2025",
    role: "Zwei statisch relevante Durchbrüche",
    quote:
      "Pünktlichkeit – TOP. Kommunikation – TOP (tägliches Update per WhatsApp). Sorgfalt, Arbeitssicherheit, Sauberkeit – TOP. Statisch sehr relevante Eingriffe, jederzeit das Gefühl mit Profis zu arbeiten."
  }
];

/**
 * Hochwertige Unsplash-Fotos als Platzhalter.
 * Alle für kommerzielle Nutzung lizenziert (Unsplash License).
 * Sollen durch echte Fotos der Firma ersetzt werden.
 */
export const IMAGES = {
  heroPrimary:
    "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=2400&q=80", // concrete + worker, industrial
  heroSecondary:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80", // construction detail
  kellerabdichtung:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80", // construction crane / scaffolding atmosphere
  aussenanlage:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80", // modern paved driveway / outdoor
  altbau:
    "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1800&q=80", // old renovation
  pflaster:
    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1800&q=80", // pavers
  naturstein:
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=80", // natural stone wall
  tools:
    "https://images.unsplash.com/photo-1572297870735-eba08d7e9094?auto=format&fit=crop&w=1800&q=80", // tools
  team:
    "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1800&q=80", // worker portrait w/ helmet
  wall:
    "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1800&q=80", // raw wall
  terrasse:
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=80", // terrasse
  blueprint:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80",
  worker2:
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=80",
  helmet:
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1800&q=80",
  excavator:
    "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1800&q=80"
};
