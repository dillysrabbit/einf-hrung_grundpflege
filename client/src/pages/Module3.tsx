import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, CheckCircle, CheckSquare, Footprints, HeartHandshake, Thermometer } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Module3() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const steps = [
    { id: "step1", title: "1. Transfer & Sitzposition", desc: "Bewohner zum Waschbecken begleiten. Stabilen Sitz auf Hocker/Stuhl sicherstellen." },
    { id: "step2", title: "2. Wasser vorbereiten", desc: "Wasser in Waschschüssel geben. Bewohner Temperatur prüfen lassen. Waschlappen bereitstellen." },
    { id: "step3", title: "3. Oberkörper (Selbstständig)", desc: "Bewohner wäscht Gesicht, Arme und Brust selbstständig. Pfleger unterstützt nur bei Bedarf." },
    { id: "step4", title: "4. Rücken (Unterstützung)", desc: "Bewohner beugt sich vor. Pfleger wäscht den schwer erreichbaren Rücken." },
    { id: "step5", title: "5. Intimpflege (Anleitung)", desc: "Pfleger leitet an, Bewohner führt durch. Nur bei Bedarf übernehmen." },
    { id: "step6", title: "6. Beine & Füße", desc: "Beine aufstellen oder anheben. Bei der Reinigung der Zehenzwischenräume helfen." },
    { id: "step7", title: "7. Abtrocknen & Anziehen", desc: "Unterstützung beim Abtrocknen und Anziehen. Auskühlung vermeiden." }
  ];

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
            Die Waschung am Waschbecken ist die bevorzugte Methode, wenn die Mobilität des Bewohners es zulässt. 
            Sie fördert die Selbstständigkeit massiv. Ihre Rolle wandelt sich hier vom "Versorger" zum "Anleiter und Begleiter".
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
              <HeartHandshake className="h-5 w-5" />
              Entscheidungsfindung
            </h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              Zunächst muss geklärt werden: Ist der Bewohner heute in der Lage aufzustehen? 
              Da die Belastbarkeit schwanken kann, muss diese Beurteilung <strong>tagesaktuell</strong> erfolgen.
            </p>
          </div>
        </section>

        <Tabs defaultValue="safety" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="safety">Sicherheit & Vorbereitung</TabsTrigger>
            <TabsTrigger value="steps">Schritt-für-Schritt</TabsTrigger>
          </TabsList>
          
          <TabsContent value="safety">
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
          </TabsContent>
          
          <TabsContent value="steps">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div 
                  key={step.id} 
                  className={cn(
                    "border rounded-xl p-4 transition-all cursor-pointer hover:shadow-md",
                    checkedItems[step.id] ? "bg-green-50 border-green-200" : "bg-white border-border"
                  )}
                  onClick={() => toggleCheck(step.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mt-1 transition-colors",
                      checkedItems[step.id] ? "bg-green-600 text-white" : "bg-primary/10 text-primary"
                    )}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className={cn("font-bold text-lg mb-1", checkedItems[step.id] && "text-green-800")}>{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                    </div>
                    <div className="ml-auto pt-1">
                      {checkedItems[step.id] ? <CheckCircle className="h-6 w-6 text-green-600" /> : <div className="w-6 h-6 rounded-full border-2 border-muted" />}
                    </div>
                  </div>
                </div>
              ))}
              <p className="text-center text-sm text-muted-foreground mt-4 italic">Klicken Sie auf die Schritte, um sie als "gelernt" zu markieren.</p>
            </div>
          </TabsContent>
        </Tabs>

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
