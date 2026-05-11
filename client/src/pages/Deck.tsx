import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Droplets,
  ExternalLink,
  Heart,
  HeartHandshake,
  Info,
  Laptop,
  Maximize2,
  Move,
  Printer,
  ShieldCheck,
  Smile,
  Sparkles,
  Users,
  Utensils,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Slide = {
  id: string;
  title: string;
  render: () => React.ReactNode;
};

const modules = [
  { n: 1, title: "Grundlagen, Rolle & Pflegeprozess", icon: Info, desc: "Vorbehaltsaufgaben, SIS, FEM, Hygiene." },
  { n: 2, title: "Waschung im Bett", icon: Heart, desc: "9-Schritte-Ablauf, Vor- und Nachbereitung." },
  { n: 3, title: "Waschung am Waschbecken", icon: Users, desc: "Selbstständigkeit & Sturzprävention." },
  { n: 4, title: "Anleitung & Aktivierung", icon: BookOpen, desc: "Hilfe zur Selbsthilfe, Kinästhetik, Validation." },
  { n: 5, title: "Mund- & Zahnpflege", icon: Smile, desc: "Prothese, Soor, Mundpflege im Sterbeprozess." },
  { n: 6, title: "Ausscheidung & Inkontinenz", icon: Droplets, desc: "Bristol-Skala, IAD-Prophylaxe." },
  { n: 7, title: "Ernährung & Trinken", icon: Utensils, desc: "Dysphagie, Aspirations- & Exsikkose-Prophylaxe." },
  { n: 8, title: "Positionierung & Transfer", icon: Move, desc: "Dekubitusprophylaxe, rückenschonend arbeiten." },
  { n: 9, title: "Menschen mit Demenz", icon: Brain, desc: "Validation, Biographie, Deeskalation." },
  { n: 10, title: "Sterbebegleitung", icon: HeartHandshake, desc: "Palliative Grundpflege, Begleitung mit Würde." },
];

function SlideShell({
  eyebrow,
  children,
  className,
}: {
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative w-full h-full flex flex-col p-10 md:p-16", className)}>
      <div className="flex items-center justify-between mb-8">
        <img
          src="/images/caritas-logo.png"
          alt="Caritas"
          className="h-10 md:h-12 object-contain"
        />
        {eyebrow && (
          <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-primary font-bold">
            {eyebrow}
          </span>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-center min-h-0">{children}</div>
    </div>
  );
}

const slides: Slide[] = [
  // 1 — Titel
  {
    id: "title",
    title: "Titel",
    render: () => (
      <div className="relative w-full h-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-care-hands.jpg"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/70" />
        </div>
        <div className="relative z-10 h-full flex flex-col p-10 md:p-16">
          <div className="flex items-center justify-between">
            <img
              src="/images/caritas-logo.png"
              alt="Caritas"
              className="h-12 md:h-14 object-contain bg-white rounded-md px-3 py-1.5 shadow-lg"
            />
            <span className="text-xs md:text-sm uppercase tracking-[0.25em] font-bold text-white/80">
              Maria-Hötte-Stift
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-center max-w-4xl">
            <span className="inline-flex items-center gap-2 self-start bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" /> Digitale Fortbildung für Pflegekräfte
            </span>
            <h1 className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
              Einführung in die <br />
              <span className="italic font-serif text-white/95">Grundpflege.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
              Kompetenz, Empathie und Professionalität – als interaktive
              Lernplattform für unser Team.
            </p>
          </div>

          <div className="flex items-end justify-between">
            <div className="text-white/80">
              <p className="text-sm uppercase tracking-widest mb-1">Vorstellung</p>
              <p className="font-bold text-lg">Fortbildungs-Website</p>
            </div>
            <div className="text-right text-white/70 text-sm">
              <p>Caritas-Verband · {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // 2 — Warum
  {
    id: "why",
    title: "Warum?",
    render: () => (
      <SlideShell eyebrow="01 · Ausgangslage">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Pflege braucht
              <span className="block text-primary">verlässliches Wissen.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Neue Kolleg:innen, Quereinsteiger:innen und langjährige
              Mitarbeitende stehen täglich vor anspruchsvollen Situationen
              in der Grundpflege.
            </p>
            <ul className="space-y-3">
              {[
                "Hoher Einarbeitungsbedarf bei neuen Pflegekräften",
                "Wissen veraltet schneller, als Präsenzschulungen folgen",
                "Würde und Aktivierung müssen im Alltag spürbar bleiben",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-base">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/images/communication-care.jpg"
                alt="Pflege im Dialog"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-xl max-w-[260px]">
              <p className="font-serif text-2xl leading-snug">
                „Würde ist das Maß, an dem wir uns messen lassen."
              </p>
            </div>
          </div>
        </div>
      </SlideShell>
    ),
  },

  // 3 — Was ist es
  {
    id: "what",
    title: "Was ist es?",
    render: () => (
      <SlideShell eyebrow="02 · Die Lösung">
        <div className="max-w-5xl mx-auto w-full">
          <p className="text-sm uppercase tracking-widest text-primary font-bold mb-3">
            Unsere Fortbildungs-Website
          </p>
          <h2 className="font-sans font-bold text-4xl md:text-6xl leading-[1.1] mb-10">
            Eine interaktive Lernplattform –
            <span className="text-primary"> jederzeit, überall, im Caritas-Stil.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Laptop,
                title: "Digital & interaktiv",
                text: "10 Module mit Schritt-für-Schritt-Anleitungen, Quizzen und Praxisbeispielen.",
              },
              {
                icon: BookOpen,
                title: "Schulungshandbuch",
                text: "Druckbares PDF-Handbuch für die Tasche, das Stationszimmer und die Einarbeitung.",
              },
              {
                icon: ClipboardCheck,
                title: "Wissenscheck",
                text: "Interaktiver Quiz-Bereich zur Selbstüberprüfung und Lernsicherung.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="border-t-4 border-primary bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </SlideShell>
    ),
  },

  // 4 — Module Übersicht
  {
    id: "modules",
    title: "Module",
    render: () => (
      <SlideShell eyebrow="03 · Curriculum">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-sans font-bold text-4xl md:text-5xl leading-tight">
                10 Module. <span className="text-primary">Ein durchdachter Lernpfad.</span>
              </h2>
              <p className="text-muted-foreground mt-3 text-lg">
                Von Grundlagen und Körperpflege bis hin zur würdevollen Sterbebegleitung.
              </p>
            </div>
            <div className="hidden md:block text-right text-primary/80 font-serif text-5xl leading-none">
              10
              <span className="block text-sm uppercase tracking-widest text-muted-foreground font-sans">
                Module
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {modules.map(({ n, title, icon: Icon }) => (
              <div
                key={n}
                className="bg-white border border-border rounded-lg p-4 hover:border-primary hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-serif text-2xl text-primary font-bold">
                    {String(n).padStart(2, "0")}
                  </span>
                  <Icon className="h-5 w-5 text-primary/70" />
                </div>
                <p className="font-bold text-sm leading-snug">{title}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-between text-sm text-muted-foreground">
            <span className="uppercase tracking-widest font-bold">
              Modul 1–4 · Grundlagen & Körperpflege
            </span>
            <span className="uppercase tracking-widest font-bold">
              Modul 5–10 · Vertiefende Pflegethemen
            </span>
          </div>
        </div>
      </SlideShell>
    ),
  },

  // 5 — Modul-Aufbau
  {
    id: "structure",
    title: "Modul-Aufbau",
    render: () => (
      <SlideShell eyebrow="04 · So lernt es sich">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="font-sans font-bold text-4xl md:text-5xl mb-3">
            Jedes Modul folgt einem
            <span className="text-primary"> klaren Rhythmus.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Pflegekräfte wissen jederzeit, wo sie stehen — und was als Nächstes kommt.
          </p>

          <div className="relative grid md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Einstieg", text: "Lernziele & Praxisbezug auf einen Blick." },
              { step: "02", title: "Theorie", text: "Fundiertes Wissen, gut verdaulich aufbereitet." },
              { step: "03", title: "Praxis", text: "Schritt-für-Schritt-Anleitungen mit Bildern." },
              { step: "04", title: "Sicherung", text: "Checklisten, Merksätze, Quiz-Fragen." },
            ].map(({ step, title, text }) => (
              <div
                key={step}
                className="relative bg-secondary/40 rounded-lg p-6 border-l-4 border-primary"
              >
                <p className="font-serif text-primary text-3xl font-bold mb-1">{step}</p>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-primary text-white rounded-lg p-6 flex items-start gap-4">
            <ShieldCheck className="h-8 w-8 shrink-0" />
            <div>
              <p className="font-bold text-lg mb-1">Qualität nach Standards.</p>
              <p className="text-white/90 leading-relaxed">
                Alle Inhalte orientieren sich an den Expertenstandards des DNQP,
                an KRINKO-/RKI-Empfehlungen sowie an gängiger Pflegefachliteratur.
              </p>
            </div>
          </div>
        </div>
      </SlideShell>
    ),
  },

  // 6 — Features / USPs
  {
    id: "features",
    title: "Features",
    render: () => (
      <SlideShell eyebrow="05 · Was sie kann">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="font-sans font-bold text-4xl md:text-5xl mb-10 leading-tight">
            Eine Plattform –
            <span className="text-primary"> viele Lernwege.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: Laptop,
                title: "Selbstgesteuertes Lernen",
                text: "Im eigenen Tempo, am Smartphone, Tablet oder PC.",
              },
              {
                icon: ClipboardCheck,
                title: "Wissenscheck mit Sofort-Feedback",
                text: "Quiz pro Modul und großer Abschluss-Check.",
              },
              {
                icon: Printer,
                title: "Druckbares Handbuch",
                text: "PDF-Export für die Akte oder das Stationszimmer.",
              },
              {
                icon: HeartHandshake,
                title: "Aktivierung & Würde im Fokus",
                text: '"Hilfe zur Selbsthilfe" durchzieht alle Module.',
              },
              {
                icon: ShieldCheck,
                title: "Hygiene & Recht inklusive",
                text: "Vorbehaltsaufgaben, FEM, Schweigepflicht klar erklärt.",
              },
              {
                icon: Brain,
                title: "Demenz & Palliativ-Themen",
                text: "Validation, Biographiearbeit, Begleitung am Lebensende.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex items-start gap-4 p-5 bg-white border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary text-white flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SlideShell>
    ),
  },

  // 7 — Zielgruppe
  {
    id: "audience",
    title: "Für wen",
    render: () => (
      <SlideShell eyebrow="06 · Zielgruppe">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <h2 className="font-sans font-bold text-4xl md:text-5xl mb-6 leading-tight">
              Für alle, die täglich
              <span className="block text-primary">Würde in Pflege verwandeln.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Die Plattform unterstützt unsere Pflegekräfte im Maria-Hötte-Stift –
              vom ersten Tag bis ins zwanzigste Berufsjahr.
            </p>
            <ul className="space-y-3">
              {[
                "Neue Pflegekräfte in der Einarbeitung",
                "Quereinsteiger:innen & Pflegehilfskräfte",
                "Examinierte Fachkräfte zur Wissensauffrischung",
                "Praxisanleiter:innen als Schulungsgrundlage",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-base">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/bed-bath-preparation.jpg"
                alt="Pflegekräfte"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </SlideShell>
    ),
  },

  // 8 — Nutzen
  {
    id: "value",
    title: "Nutzen",
    render: () => (
      <SlideShell eyebrow="07 · Der Nutzen">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="font-sans font-bold text-4xl md:text-5xl mb-10 leading-tight">
            Was die Einrichtung
            <span className="text-primary"> davon hat.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                kpi: "10",
                label: "Module",
                text: "Strukturiert von Grundlagen bis Palliativpflege.",
              },
              {
                kpi: "24/7",
                label: "Verfügbar",
                text: "Lernen ohne Termin, an jedem Endgerät.",
              },
              {
                kpi: "100 %",
                label: "Caritas-Stil",
                text: "Werte, Würde und Aktivierung in jedem Modul.",
              },
            ].map(({ kpi, label, text }) => (
              <div
                key={label}
                className="bg-primary text-white rounded-lg p-8 text-center shadow-lg"
              >
                <p className="font-serif text-6xl md:text-7xl font-bold leading-none mb-2">
                  {kpi}
                </p>
                <p className="uppercase tracking-widest text-sm font-bold text-white/80 mb-4">
                  {label}
                </p>
                <p className="text-white/90 leading-relaxed text-sm">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {[
              "Einheitliche Qualität in allen Schichten",
              "Entlastung von Praxisanleitung & PDL",
              "Schnellere Einarbeitung neuer Kolleg:innen",
              "Dokumentierbare Wissenssicherung über Quizze",
            ].map((t) => (
              <div
                key={t}
                className="flex items-center gap-3 bg-secondary/40 rounded-lg p-4"
              >
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </SlideShell>
    ),
  },

  // 9 — Live-Demo
  {
    id: "demo",
    title: "Demo",
    render: () => (
      <SlideShell eyebrow="08 · Jetzt erleben">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto w-full">
          <div>
            <h2 className="font-sans font-bold text-4xl md:text-5xl mb-6 leading-tight">
              Sehen Sie selbst –
              <span className="text-primary"> klicken Sie sich durch.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Die Fortbildung ist live und kann sofort genutzt werden.
              Öffnen Sie ein Modul, blättern Sie durch das Handbuch oder
              starten Sie direkt mit dem Wissenscheck.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                  Zur Startseite <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/module-1">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 rounded-full px-6"
                >
                  Modul 1 öffnen
                </Button>
              </Link>
              <Link href="/quiz">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 rounded-full px-6"
                >
                  Wissenscheck
                </Button>
              </Link>
            </div>
            <a
              href="https://grundpfleg-kjo4ntg9.manus.space/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              grundpfleg-kjo4ntg9.manus.space
            </a>
          </div>
          <div className="relative">
            <div className="bg-foreground rounded-t-xl p-2 flex items-center gap-1.5 shadow-2xl">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-white/60 text-xs font-mono truncate">
                grundpfleg-kjo4ntg9.manus.space
              </span>
            </div>
            <div className="border-x-4 border-b-4 border-foreground rounded-b-xl overflow-hidden bg-white">
              <div className="bg-primary text-white p-4 flex items-center gap-3">
                <Heart className="h-5 w-5" />
                <span className="font-bold">Einführung in die Grundpflege</span>
              </div>
              <div className="p-6 space-y-3">
                <div className="h-3 bg-secondary rounded w-3/4" />
                <div className="h-3 bg-secondary rounded w-full" />
                <div className="h-3 bg-secondary rounded w-5/6" />
                <div className="grid grid-cols-3 gap-2 pt-3">
                  <div className="h-16 bg-primary/10 rounded border-t-2 border-primary" />
                  <div className="h-16 bg-primary/10 rounded border-t-2 border-primary" />
                  <div className="h-16 bg-primary/10 rounded border-t-2 border-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideShell>
    ),
  },

  // 10 — Schluss / Danke
  {
    id: "thanks",
    title: "Danke",
    render: () => (
      <div className="relative w-full h-full overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/images/hero-care-hands.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 h-full flex flex-col p-10 md:p-16">
          <div className="flex items-center justify-between">
            <img
              src="/images/caritas-logo.png"
              alt="Caritas"
              className="h-12 object-contain bg-white rounded-md px-3 py-1.5 shadow-lg"
            />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-white/80">
              Maria-Hötte-Stift
            </span>
          </div>
          <div className="flex-1 flex flex-col justify-center max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] font-bold text-white/80 mb-4">
              Vielen Dank
            </p>
            <h2 className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6">
              Gemeinsam für eine <br />
              <span className="italic font-serif">würdevolle Pflege.</span>
            </h2>
            <p className="text-lg md:text-2xl text-white/90 font-light max-w-2xl">
              Fragen, Feedback oder Wünsche? Sprechen Sie die Pflegedienstleitung an –
              oder starten Sie direkt mit Modul 1.
            </p>
            <div className="mt-10">
              <Link href="/">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-bold rounded-full px-8 shadow-xl"
                >
                  Zur Fortbildung <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-end justify-between text-white/70 text-sm">
            <p>© {new Date().getFullYear()} Caritas Maria-Hötte-Stift</p>
            <p className="italic">"Mensch sein. Mensch bleiben."</p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Deck() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((next: number) => {
    setIndex((prev) => {
      const clamped = Math.max(0, Math.min(slides.length - 1, next));
      setDirection(clamped >= prev ? 1 : -1);
      return clamped;
    });
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        goTo(0);
      } else if (e.key === "End") {
        goTo(slides.length - 1);
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, goTo]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }, []);

  const current = slides[index];

  const slideVariants = useMemo(
    () => ({
      enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
      center: { x: 0, opacity: 1 },
      exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
    }),
    []
  );

  return (
    <div className="fixed inset-0 z-50 bg-foreground flex items-center justify-center">
      {/* Slide stage */}
      <div className="relative w-full h-full max-w-[1600px] max-h-[900px] md:m-8 bg-background shadow-2xl md:rounded-lg overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            {current.render()}
          </motion.div>
        </AnimatePresence>

        {/* Top-right utility bar */}
        <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
          <button
            onClick={toggleFullscreen}
            title="Vollbild (F)"
            className="h-9 w-9 rounded-full bg-white/80 hover:bg-white backdrop-blur flex items-center justify-center text-foreground shadow"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
          <Link href="/">
            <button
              title="Deck schließen"
              className="h-9 w-9 rounded-full bg-white/80 hover:bg-white backdrop-blur flex items-center justify-center text-foreground shadow"
            >
              <X className="h-4 w-4" />
            </button>
          </Link>
        </div>

        {/* Bottom controls */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          <button
            onClick={prev}
            disabled={index === 0}
            className="h-10 w-10 rounded-full bg-white/90 hover:bg-white backdrop-blur flex items-center justify-center text-foreground shadow disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-1.5 px-3">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === index ? "w-8 bg-primary" : "w-2 bg-white/60 hover:bg-white"
                )}
              />
            ))}
          </div>
          <button
            onClick={next}
            disabled={index === slides.length - 1}
            className="h-10 w-10 rounded-full bg-white/90 hover:bg-white backdrop-blur flex items-center justify-center text-foreground shadow disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Page indicator */}
        <div className="absolute bottom-4 right-6 z-20 text-xs font-mono text-foreground/60 bg-white/70 backdrop-blur px-2 py-1 rounded">
          {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}
