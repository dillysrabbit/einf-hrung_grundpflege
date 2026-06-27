import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Brain, CheckCircle, Droplets, Heart, HeartHandshake, Move, Smile, Users, Utensils } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Hero Section — editorial paper & ink, single berry accent */}
      <section className="border-b border-border">
        <div className="container px-4 py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Text column */}
            <div className="max-w-xl">
              <span className="eyebrow mb-5 block">Fortbildung · CareConnect</span>
              <h1 className="display text-foreground text-[clamp(2.5rem,6vw,4.5rem)]">
                Einführung in die <span className="accent-word">Grundpflege</span>.
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                Kompetenz, Empathie und Professionalität für Pflegekräfte –
                im eigenen Tempo. Gemeinsam für eine würdevolle Pflege.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link href="/module-1">
                  <Button size="lg" className="group rounded-full px-7 py-6 text-base">
                    Fortbildung starten
                    <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/handbuch">
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 rounded-full border-border bg-card px-6 py-6 text-base hover:border-foreground"
                  >
                    <Download className="h-4 w-4" />
                    Schulungshandbuch
                  </Button>
                </Link>
              </div>
              <p className="eyebrow eyebrow-muted mt-10">Nach DNQP-Expertenstandards</p>
            </div>

            {/* Image column — tall 4/5 crop with gold corner brackets + floating badge */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative overflow-hidden rounded-[var(--radius)] border border-border">
                <img
                  src="/images/hero-care-hands.jpg"
                  alt="Würdevolle Pflege im Alltag"
                  className="aspect-[4/5] w-full object-cover"
                />
                {/* gold corner brackets */}
                <span className="pointer-events-none absolute left-3 top-3 h-7 w-7 border-l-2 border-t-2 border-gold" />
                <span className="pointer-events-none absolute bottom-3 right-3 h-7 w-7 border-b-2 border-r-2 border-gold" />
              </div>
              {/* floating credential badge */}
              <div className="absolute -bottom-5 -left-5 hidden rounded-full border border-border bg-card px-5 py-3 shadow-[0_18px_40px_-22px_rgba(33,27,24,0.4)] sm:block">
                <span className="block font-serif text-2xl font-medium text-gold num leading-none">
                  10<span className="text-gold-dark">.</span>
                </span>
                <span className="text-xs text-muted-foreground">Lernmodule</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="mx-auto max-w-3xl px-4 text-center">
        <span className="eyebrow eyebrow-muted mb-4 block">Willkommen</span>
        <h2 className="display text-foreground text-3xl md:text-4xl mb-6">
          Pflegefachlichkeit <span className="accent-word">stärken</span>.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Diese interaktive Fortbildung richtet sich an alle Pflegekräfte. Unser Ziel ist es, Ihnen
          das nötige Basiswissen und die Sicherheit für den Pflegealltag zu geben. Wir legen besonderen Wert auf die
          aktivierende Pflege und die Wahrung der Würde der Bewohner:innen.
        </p>
      </section>

      {/* Module Overview – Grundlagen & Körperpflege */}
      <section className="container px-4">
        <h3 className="display text-3xl text-foreground mb-2 text-center">Ihre Lernmodule</h3>
        <p className="eyebrow eyebrow-muted text-center mb-8">Grundlagen & Körperpflege</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <Link href="/module-1">
            <Card className="h-full cursor-pointer border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_22px_44px_-26px_rgba(33,27,24,0.42)] group">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <InfoIcon className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="font-serif text-xl">1 · Grundlagen, Rolle & Pflegeprozess</CardTitle>
                <CardDescription>Ihre Verantwortung, Vorbehaltsaufgaben und der Pflegeprozess nach dem Strukturmodell.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Rolle & Vorbehaltsaufgaben</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> SIS, Maßnahmenplan, Berichteblatt</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Schweigepflicht, FEM, Hygiene</li>
                </ul>
              </CardContent>
            </Card>
          </Link>

          <Link href="/module-2">
            <Card className="h-full cursor-pointer border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_22px_44px_-26px_rgba(33,27,24,0.42)] group">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Heart className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="font-serif text-xl">2 · Waschung im Bett</CardTitle>
                <CardDescription>Schritt-für-Schritt-Anleitung für die Ganzkörperwaschung im Bett.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Vorbereitung & Material</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> 9-Schritte-Ablauf</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Nachbereitung</li>
                </ul>
              </CardContent>
            </Card>
          </Link>

          <Link href="/module-3">
            <Card className="h-full cursor-pointer border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_22px_44px_-26px_rgba(33,27,24,0.42)] group">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Users className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="font-serif text-xl">3 · Waschung am Waschbecken</CardTitle>
                <CardDescription>Förderung der Selbstständigkeit und Mobilität am Waschbecken.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Sturzprävention</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Anleiten & Unterstützen</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Nachbereitung</li>
                </ul>
              </CardContent>
            </Card>
          </Link>

          <Link href="/module-4">
            <Card className="h-full cursor-pointer border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_22px_44px_-26px_rgba(33,27,24,0.42)] group">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <BookOpen className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="font-serif text-xl">4 · Anleitung & Aktivierung</CardTitle>
                <CardDescription>Das Konzept „Hilfe zur Selbsthilfe" in der Praxis.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> 3 Säulen der Aktivierung</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Konzepte (Kinästhetik, Validation)</li>
                </ul>
              </CardContent>
            </Card>
          </Link>

        </div>
      </section>

      {/* Module Overview – Vertiefende Pflegethemen */}
      <section className="container px-4">
        <p className="eyebrow eyebrow-muted text-center mb-8">Vertiefende Pflegethemen</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <Link href="/module-5">
            <Card className="h-full cursor-pointer border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_22px_44px_-26px_rgba(33,27,24,0.42)] group">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Smile className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="font-serif text-xl">5 · Mund- & Zahnpflege</CardTitle>
                <CardDescription>Eigene Zähne, Prothese, Mundbefunde, Mundpflege im Sterbeprozess.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Soor, Borken, Druckstellen</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Prothesenpflege</li>
                </ul>
              </CardContent>
            </Card>
          </Link>

          <Link href="/module-6">
            <Card className="h-full cursor-pointer border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_22px_44px_-26px_rgba(33,27,24,0.42)] group">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Droplets className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="font-serif text-xl">6 · Ausscheidung & Inkontinenz</CardTitle>
                <CardDescription>Beobachtung, Toilettentraining, Vorlagenwechsel, IAD-Prophylaxe.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Bristol-Stuhlskala</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Hautschutz bei IAD</li>
                </ul>
              </CardContent>
            </Card>
          </Link>

          <Link href="/module-7">
            <Card className="h-full cursor-pointer border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_22px_44px_-26px_rgba(33,27,24,0.42)] group">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Utensils className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="font-serif text-xl">7 · Ernährung & Trinken</CardTitle>
                <CardDescription>Anreichen, Schluckstörung, Aspirationsprophylaxe, Trinkförderung.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Dysphagie erkennen</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Mangelernährung & Exsikkose</li>
                </ul>
              </CardContent>
            </Card>
          </Link>

          <Link href="/module-8">
            <Card className="h-full cursor-pointer border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_22px_44px_-26px_rgba(33,27,24,0.42)] group">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Move className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="font-serif text-xl">8 · Positionierung & Transfer</CardTitle>
                <CardDescription>Dekubitusprophylaxe, sicherer Transfer, Kinästhetik, Eigenschutz.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> 30°-Position, Mikropositionierung</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Rückenschonend arbeiten</li>
                </ul>
              </CardContent>
            </Card>
          </Link>

          <Link href="/module-9">
            <Card className="h-full cursor-pointer border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_22px_44px_-26px_rgba(33,27,24,0.42)] group">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Brain className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="font-serif text-xl">9 · Menschen mit Demenz</CardTitle>
                <CardDescription>Validation, Biographie, Umgang mit herausforderndem Verhalten.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Demenz vs. Delir</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Deeskalation</li>
                </ul>
              </CardContent>
            </Card>
          </Link>

          <Link href="/module-10">
            <Card className="h-full cursor-pointer border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_22px_44px_-26px_rgba(33,27,24,0.42)] group">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <HeartHandshake className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="font-serif text-xl">10 · Sterbebegleitung</CardTitle>
                <CardDescription>Palliative Grundpflege, Mund/Positionierung/Atmung am Lebensende, Angehörige.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Anzeichen erkennen</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Begleitung mit Würde</li>
                </ul>
              </CardContent>
            </Card>
          </Link>

        </div>
      </section>

      {/* Call to Action — the one full-bleed berry band */}
      <section className="container px-4 mt-8">
        <div className="flex flex-col items-start justify-between gap-8 rounded-[var(--radius)] bg-primary p-8 text-primary-foreground md:flex-row md:items-center md:p-12">
          <div className="max-w-xl">
            <span className="eyebrow mb-3 block text-white/70">Wissenscheck</span>
            <h3 className="display text-3xl mb-4 text-white">
              Bereit, Ihr Wissen zu <span className="italic">testen</span>?
            </h3>
            <p className="text-white/85">
              Am Ende der Module wartet ein interaktiver Wissenscheck auf Sie.
              Überprüfen Sie Ihr Verständnis und sichern Sie die Qualität der Pflege.
            </p>
          </div>
          <Link href="/quiz">
            <Button
              size="lg"
              className="group rounded-full bg-white px-8 text-primary hover:bg-white/90"
            >
              Zum Wissenscheck
              <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}
