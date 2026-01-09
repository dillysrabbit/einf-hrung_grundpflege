import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, CheckCircle, CheckSquare, Droplets, Eye } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Module2() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const steps = [
    { id: "step1", title: "1. Vorbereitung", desc: "Materialien bereitstellen, Händedesinfektion, Handschuhe anziehen. Bett auf Arbeitshöhe bringen. Bewohner informieren." },
    { id: "step2", title: "2. Gesicht & Hals", desc: "Handtuch unter Kopf. Augen von außen nach innen mit klarem Wasser reinigen. Gesicht, Ohren, Hals waschen und trocknen." },
    { id: "step3", title: "3. Oberkörper & Arme", desc: "Waschzusatz ins Wasser. Oberkörper waschen (herzwärts), abtrocknen. Auf Intertrigo (Hautwolf) achten." },
    { id: "step4", title: "4. Rücken", desc: "Bewohner zur Seite drehen. Rücken und Gesäß waschen, trocknen, ggf. eincremen. Dekubitus-Kontrolle!" },
    { id: "step5", title: "5. Beine & Füße", desc: "Beine herzwärts waschen. Zehenzwischenräume gründlich trocknen (Pilzgefahr). Fersen auf Druckstellen prüfen." },
    { id: "step6", title: "6. Intimbereich Vorbereitung", desc: "Wasser wechseln, frischen Waschlappen, neue Handschuhe. Intimsphäre wahren!" },
    { id: "step7", title: "7. Intimpflege (Frau)", desc: "Beine anstellen. Von der Schamfuge zum Anus hin reinigen (Keimverschleppung vermeiden)." },
    { id: "step8", title: "8. Intimpflege (Mann)", desc: "Vorhaut zurückschieben, Eichel reinigen, Vorhaut wieder vorschieben. Hoden reinigen." },
    { id: "step9", title: "9. Abschluss", desc: "Frische Kleidung, bequeme Lagerung. Material entsorgen, Dokumentation." },
  ];

  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* Header Image */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <img 
          src="/images/bed-bath-preparation.jpg" 
          alt="Vorbereitung Bettbad" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="uppercase tracking-widest text-sm font-bold mb-2 block opacity-80">Modul 2</span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold drop-shadow-md">Ganzkörperwaschung im Bett</h1>
          </div>
        </div>
      </div>

      <div className="container max-w-4xl mx-auto px-4">
        
        <section className="mb-10">
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            Diese Form der Waschung ist anspruchsvoll und erfordert Konzentration. Sie kommt zum Einsatz, wenn der Bewohner bettlägerig 
            oder zu schwach ist, das Bett zu verlassen. Sicherheit, Hygiene und Würde haben höchste Priorität.
          </p>
        </section>

        <Tabs defaultValue="material" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="material">Material & Vorbereitung</TabsTrigger>
            <TabsTrigger value="steps">Schritt-für-Schritt</TabsTrigger>
          </TabsList>
          
          <TabsContent value="material">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-serif text-2xl text-primary">
                  <CheckSquare className="h-6 w-6" />
                  Checkliste: Haben Sie alles?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-bold text-sm uppercase tracking-wide text-muted-foreground">Hygienematerial</h4>
                    {["Händedesinfektionsmittel", "1-2 Paar Einmalhandschuhe", "Einwegschürze", "2-3 Waschlappen", "Handtücher & Badetuch", "Waschschüssel & Abwurf"].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-primary/40" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-sm uppercase tracking-wide text-muted-foreground">Pflegeprodukte & Sonstiges</h4>
                    {["Waschlotion / Seife", "Hautcreme / Salben", "Mundpflegemittel", "Kamm / Bürste", "Frische Kleidung", "Frische Bettwäsche (ggf.)"].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-primary/40" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-yellow-800">
                  <strong>Wichtig:</strong> Fenster und Türen schließen (Zugluft vermeiden)! Bett auf ergonomische Arbeitshöhe bringen.
                </div>
              </CardContent>
            </Card>
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

        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <Eye className="h-6 w-6" />
            Wichtige Beobachtungspunkte
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Hautzustand", desc: "Rötungen, Druckstellen (Dekubitus), Pilzinfektionen, Trockenheit" },
              { title: "Schmerzen", desc: "Äußert der Bewohner Schmerzen bei Bewegung oder Berührung?" },
              { title: "Allgemeinzustand", desc: "Ist der Bewohner wach? Wie belastbar ist er heute?" },
              { title: "Atmung", desc: "Atemgeräusche, Kurzatmigkeit bei Anstrengung" },
              { title: "Mobilität", desc: "Wie gut kann der Bewohner mithelfen (z.B. drehen)?" },
              { title: "Ausscheidungen", desc: "Farbe, Menge und Geruch von Urin/Stuhl" }
            ].map((item, i) => (
              <Card key={i} className="bg-secondary/10 border-none">
                <CardContent className="pt-6">
                  <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="flex justify-between">
          <Link href="/module-1">
            <Button variant="outline" className="rounded-full px-6">Zurück</Button>
          </Link>
          <Link href="/module-3">
            <Button size="lg" className="rounded-full px-8">
              Weiter zu Modul 3 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
