import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, CheckCircle, Heart, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-care-hands.jpg" 
            alt="Pflegende Hände" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 text-white text-center max-w-3xl px-4">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            Einführung in die Grundpflege
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 font-light leading-relaxed drop-shadow-md">
            Kompetenz, Empathie und Professionalität für unsere Pflegehilfskräfte.
            Gemeinsam für eine würdevolle Pflege.
          </p>
          <Link href="/module-1">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 rounded-full shadow-xl transition-transform hover:scale-105">
              Fortbildung starten <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
        <section className="text-center mb-16 max-w-3xl mx-auto px-4">
        <h2 className="font-sans text-3xl font-bold text-primary mb-6">Willkommen im Maria-Hötte-Stift</h2>
        <p className="text-xl text-muted-foreground leading-relaxed font-light mb-8">
          Diese interaktive Fortbildung richtet sich an alle Pflegehilfskräfte unserer Einrichtung. Unser Ziel ist es, Ihnen 
          das nötige Basiswissen und die Sicherheit für den Pflegealltag zu geben. Wir legen besonderen Wert auf die 
          aktivierende Pflege und die Wahrung der Würde unserer Bewohner.
        </p>
        
        <div className="flex justify-center">
          <a href="/downloads/Schulungshandbuch_Grundpflege.pdf" download>
            <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary/5">
              <Download className="h-4 w-4" />
              Schulungshandbuch herunterladen (PDF)
            </Button>
          </a>
        </div>
      </section>

      {/* Module Overview */}
      <section className="container px-4">
        <h3 className="font-serif text-2xl font-bold text-primary mb-8 text-center">Ihre Lernmodule</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Modul 1 */}
          <Link href="/module-1">
            <Card className="h-full hover:shadow-lg transition-all cursor-pointer border-t-4 border-t-primary group">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <InfoIcon className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="font-serif text-xl">Grundlagen, Rolle & Pflegeprozess</CardTitle>
                <CardDescription>Ihre Verantwortung, Vorbehaltsaufgaben und der Pflegeprozess in 6 Schritten.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Rolle & Vorbehaltsaufgaben</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Pflegeprozess & AEDL</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Schweigepflicht & Hygiene</li>
                </ul>
              </CardContent>
            </Card>
          </Link>

          {/* Modul 2 */}
          <Link href="/module-2">
            <Card className="h-full hover:shadow-lg transition-all cursor-pointer border-t-4 border-t-primary group">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Heart className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="font-serif text-xl">Waschung im Bett</CardTitle>
                <CardDescription>Schritt-für-Schritt Anleitung für die Ganzkörperwaschung im Bett.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Vorbereitung & Material</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> 9-Schritte-Ablauf</li>
                </ul>
              </CardContent>
            </Card>
          </Link>

          {/* Modul 3 */}
          <Link href="/module-3">
            <Card className="h-full hover:shadow-lg transition-all cursor-pointer border-t-4 border-t-primary group">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Users className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="font-serif text-xl">Waschung am Waschbecken</CardTitle>
                <CardDescription>Förderung der Selbstständigkeit und Mobilität am Waschbecken.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Sturzprävention</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Anleiten & Unterstützen</li>
                </ul>
              </CardContent>
            </Card>
          </Link>

          {/* Modul 4 */}
          <Link href="/module-4">
            <Card className="h-full hover:shadow-lg transition-all cursor-pointer border-t-4 border-t-primary group">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <BookOpen className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="font-serif text-xl">Anleitung & Teilübernahme</CardTitle>
                <CardDescription>Das Konzept "Hilfe zur Selbsthilfe" in der Praxis.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Ressourcen erkennen</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" /> Kommunikation</li>
                </ul>
              </CardContent>
            </Card>
          </Link>

        </div>
      </section>

      {/* Call to Action */}
      <section className="container px-4 mt-8">
        <div className="bg-secondary/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Bereit, Ihr Wissen zu testen?</h3>
            <p className="text-muted-foreground mb-6">
              Am Ende der Module wartet ein interaktiver Wissenscheck auf Sie. 
              Überprüfen Sie Ihr Verständnis und sichern Sie die Qualität unserer Pflege.
            </p>
          </div>
          <Link href="/quiz">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-full px-8">
              Zum Wissenscheck
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
