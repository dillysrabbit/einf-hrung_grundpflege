import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, HandHeart, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function Module4() {
  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* Header Image */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <img 
          src="/images/hero-care-hands.jpg" 
          alt="Anleitung und Unterstützung" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="uppercase tracking-widest text-sm font-bold mb-2 block opacity-80">Modul 4</span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold drop-shadow-md">Anleitung zur Grundpflege</h1>
          </div>
        </div>
      </div>

      <div className="container max-w-4xl mx-auto px-4">
        
        <section className="mb-12 text-center">
          <h2 className="font-serif text-2xl font-bold text-primary mb-4">Hilfe zur Selbsthilfe</h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto">
            Das Konzept der aktivierenden Pflege ist der Kern moderner Altenpflege. Es ist mehr als eine Technik – es ist eine Haltung.
            Ziel ist es, die Eigenständigkeit zu maximieren und Pflege auf das Nötigste zu reduzieren.
          </p>
        </section>

        {/* 3 Pillars */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <Brain className="h-8 w-8" />
            </div>
            <h3 className="font-bold text-lg mb-2">Ressourcen erkennen</h3>
            <p className="text-sm text-muted-foreground">
              Beobachten Sie genau: Was kann der Patient noch selbst? Kann er den Waschlappen halten? Kann er sich selbst das Gesicht waschen?
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <MessageCircle className="h-8 w-8" />
            </div>
            <h3 className="font-bold text-lg mb-2">Kommunikation</h3>
            <p className="text-sm text-muted-foreground">
              Erklären Sie jeden Schritt. Motivieren Sie mit Worten. "Versuchen Sie mal, den Arm selbst zu heben."
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <HandHeart className="h-8 w-8" />
            </div>
            <h3 className="font-bold text-lg mb-2">Geduld & Zeit</h3>
            <p className="text-sm text-muted-foreground">
              Selbstständigkeit braucht Zeit. Es geht oft schneller, es selbst zu tun – aber das fördert nicht die Fähigkeiten des Patienten.
            </p>
          </div>
        </section>

        {/* Practical Examples */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-primary mb-6">Praktische Beispiele</h2>
          <div className="space-y-4">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Sparkles className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Mundpflege</h4>
                    <p className="text-muted-foreground">
                      Anstatt die Zähne komplett zu putzen, reichen Sie die Zahnbürste an. Führen Sie ggf. die Hand zum Mund, 
                      aber lassen Sie die Putzbewegung vom Patienten ausführen.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Sparkles className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Anziehen</h4>
                    <p className="text-muted-foreground">
                      Legen Sie die Kleidung in der richtigen Reihenfolge bereit. Helfen Sie bei schwierigen Knöpfen, 
                      aber lassen Sie den Patienten das Hemd selbst überstreifen.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="flex justify-between">
          <Link href="/module-3">
            <Button variant="outline" className="rounded-full px-6">Zurück</Button>
          </Link>
          <Link href="/quiz">
            <Button size="lg" className="rounded-full px-8 bg-green-700 hover:bg-green-800">
              Zum Wissenscheck <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
