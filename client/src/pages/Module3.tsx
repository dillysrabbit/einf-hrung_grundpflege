import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Footprints, HeartHandshake, Thermometer } from "lucide-react";
import { Link } from "wouter";

export default function Module3() {
  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* Header Image */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <img 
          src="/images/washbasin-setup.jpg" 
          alt="Waschbecken Vorbereitung" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="uppercase tracking-widest text-sm font-bold mb-2 block opacity-80">Modul 3</span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold drop-shadow-md">Waschung am Waschbecken</h1>
          </div>
        </div>
      </div>

      <div className="container max-w-4xl mx-auto px-4">
        
        <section className="mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed font-light mb-6">
            Die Waschung am Waschbecken ist die bevorzugte Methode, wenn die Mobilität des Patienten es zulässt. 
            Sie fördert die Selbstständigkeit massiv. Ihre Rolle wandelt sich hier vom "Versorger" zum "Anleiter und Begleiter".
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
              <HeartHandshake className="h-5 w-5" />
              Entscheidungsfindung
            </h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              Zunächst muss geklärt werden: Ist der Patient heute in der Lage aufzustehen? 
              Da die Belastbarkeit schwanken kann, muss diese Beurteilung <strong>tagesaktuell</strong> erfolgen.
            </p>
          </div>
        </section>

        {/* Safety First */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-primary mb-6">Sicherheit geht vor</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-md transition-all">
              <CardContent className="pt-6">
                <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-600">
                  <Footprints className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Sturzgefahr minimieren</h3>
                <p className="text-sm text-muted-foreground">Rutschfeste Matten nutzen. Stabile Haltegriffe prüfen. Keine Handtücher am Boden.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-md transition-all">
              <CardContent className="pt-6">
                <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600">
                  <Thermometer className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Temperatur & Klima</h3>
                <p className="text-sm text-muted-foreground">Badezimmer vorwärmen. Wassertemperatur prüfen lassen (Verbrühungsschutz!).</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-md transition-all">
              <CardContent className="pt-6">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Hilfsmittel bereitstellen</h3>
                <p className="text-sm text-muted-foreground">Duschhocker oder Stuhl bereitstellen. Alle Utensilien in Griffweite legen.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-primary mb-8">Der Ablauf</h2>
          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 space-y-8 pb-4">
            
            {[
              { title: "Transfer & Sitzposition", desc: "Patienten zum Waschbecken begleiten. Stabilen Sitz auf Hocker/Stuhl sicherstellen." },
              { title: "Wasser vorbereiten", desc: "Wasser in Waschschüssel geben. Patient Temperatur prüfen lassen. Waschlappen bereitstellen." },
              { title: "Oberkörper (Selbstständig)", desc: "Patient wäscht Gesicht, Arme und Brust selbstständig. Pfleger unterstützt nur bei Bedarf." },
              { title: "Rücken (Unterstützung)", desc: "Patient beugt sich vor. Pfleger wäscht den schwer erreichbaren Rücken." },
              { title: "Intimpflege (Anleitung)", desc: "Pfleger leitet an, Patient führt durch. Nur bei Bedarf übernehmen." },
              { title: "Beine & Füße", desc: "Beine aufstellen oder anheben. Bei der Reinigung der Zehenzwischenräume helfen." },
              { title: "Abtrocknen & Anziehen", desc: "Unterstützung beim Abtrocknen und Anziehen. Auskühlung vermeiden." }
            ].map((step, i) => (
              <div key={i} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-white border-4 border-primary" />
                <h3 className="font-bold text-lg text-primary mb-1">{i + 1}. {step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}

          </div>
        </section>

        <div className="flex justify-between">
          <Link href="/module-2">
            <Button variant="outline" className="rounded-full px-6">Zurück</Button>
          </Link>
          <Link href="/module-4">
            <Button size="lg" className="rounded-full px-8">
              Weiter zu Modul 4 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
