import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, Heart, Shield, UserCheck } from "lucide-react";
import { Link } from "wouter";

export default function Module1() {
  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* Header Image */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <img 
          src="/images/communication-care.jpg" 
          alt="Kommunikation in der Pflege" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="uppercase tracking-widest text-sm font-bold mb-2 block opacity-80">Modul 1</span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold drop-shadow-md">Grundlagen der Grundpflege</h1>
          </div>
        </div>
      </div>

      <div className="container max-w-4xl mx-auto px-4">
        
        {/* Introduction */}
        <section className="mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed font-light mb-6">
            Die Grundpflege ist weit mehr als nur Waschen und Anziehen. Sie ist die Basis für das Wohlbefinden unserer Bewohner 
            und ein zentraler Moment für Beziehungsaufbau und Beobachtung.
          </p>
          <Card className="bg-secondary/20 border-none shadow-sm">
            <CardContent className="pt-6">
              <h3 className="font-serif text-xl font-bold text-primary mb-3 flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Kernkompetenzen
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle className="h-4 w-4 text-primary" /> Hygiene & Infektionsprävention</li>
                <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle className="h-4 w-4 text-primary" /> Wahrung der Intimsphäre</li>
                <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle className="h-4 w-4 text-primary" /> Kommunikation & Vertrauen</li>
                <li className="flex items-center gap-2 text-muted-foreground"><CheckCircle className="h-4 w-4 text-primary" /> Aktivierende Pflege</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Main Content Accordion */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-primary mb-6">Wichtige Konzepte verstehen</h2>
          <Accordion type="single" collapsible className="w-full">
            
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">Was ist Prozessqualität?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Prozessqualität bedeutet, dass wir unsere Arbeit nicht zufällig, sondern systematisch und nach festgelegten Standards durchführen. 
                Dazu gehört eine gewissenhafte Vorbereitung, die Einhaltung von Hygieneregeln und eine lückenlose Dokumentation. 
                Nur so können wir Sicherheit für Bewohner und Pflegende gewährleisten.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">Ihre Rolle als Pflegehilfskraft</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Sie sind oft die engste Bezugsperson für die Bewohner. Ihre Rolle geht über die reine Versorgung hinaus:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Sie sind <strong>Beobachter</strong>: Sie erkennen Veränderungen am Hautzustand oder Verhalten.</li>
                  <li>Sie sind <strong>Vertrauter</strong>: Sie geben Sicherheit und hören zu.</li>
                  <li>Sie sind <strong>Förderer</strong>: Sie motivieren zur Selbstständigkeit.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">Aktivierende Pflege</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Unser Leitsatz ist "Hilfe zur Selbsthilfe". Wir nehmen dem Bewohner nicht alles ab, sondern unterstützen ihn dort, 
                wo er es braucht. Das erhält Fähigkeiten und stärkt das Selbstwertgefühl. Ein Bewohner, der sich selbst das Gesicht waschen kann, 
                sollte dies auch tun dürfen – auch wenn es etwas länger dauert.
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </section>

        {/* Key Principles Grid */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-primary mb-6">Unsere Prinzipien</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Sicherheit & Hygiene</h3>
                <p className="text-sm text-muted-foreground">Händedesinfektion und Schutzkleidung sind unser Standard zum Schutz aller.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <UserCheck className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Würde & Respekt</h3>
                <p className="text-sm text-muted-foreground">Wir schützen die Intimsphäre und informieren vor jedem Handgriff.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Next Step */}
        <div className="flex justify-end">
          <Link href="/module-2">
            <Button size="lg" className="rounded-full px-8">
              Weiter zu Modul 2 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
