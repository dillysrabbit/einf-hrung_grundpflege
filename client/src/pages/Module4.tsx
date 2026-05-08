import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Brain, CheckCircle, HandHeart, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Module4() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const steps = [
    { id: "step1", title: "1. Ressourcen erkennen", desc: "Beobachten Sie genau: Was kann der Bewohner noch selbst? Kann er den Waschlappen halten? Kann er sich selbst das Gesicht waschen?" },
    { id: "step2", title: "2. Kommunikation", desc: "Erklären Sie jeden Schritt. Motivieren Sie mit Worten. 'Versuchen Sie mal, den Arm selbst zu heben.'" },
    { id: "step3", title: "3. Geduld & Zeit", desc: "Selbstständigkeit braucht Zeit. Es geht oft schneller, es selbst zu tun – aber das fördert nicht die Fähigkeiten des Bewohners." },
    { id: "step4", title: "4. Praktische Anleitung: Mundpflege", desc: "Anstatt die Zähne komplett zu putzen, reichen Sie die Zahnbürste an. Führen Sie ggf. die Hand zum Mund, aber lassen Sie die Putzbewegung vom Bewohner ausführen." },
    { id: "step5", title: "5. Praktische Anleitung: Anziehen", desc: "Legen Sie die Kleidung in der richtigen Reihenfolge bereit. Helfen Sie bei schwierigen Knöpfen, aber lassen Sie den Bewohner das Hemd selbst überstreifen." }
  ];

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

        <section className="mb-10">
          <Card className="bg-secondary/20 border-none shadow-sm">
            <CardContent className="pt-6">
              <h3 className="font-serif text-lg font-bold text-primary mb-2">Lernziele</h3>
              <p className="text-sm text-muted-foreground mb-2">Nach Bearbeitung dieses Moduls können Sie …</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                <li>aktivierende Pflege als Haltung beschreiben und im Alltag anwenden.</li>
                <li>die Konzepte Kinästhetik, basale Stimulation und Validation grob unterscheiden.</li>
                <li>Menschen mit Demenz wertschätzend begleiten.</li>
                <li>Ressourcen erkennen und gezielt nutzen statt Aufgaben vorschnell zu übernehmen.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12 text-center">
          <h2 className="font-serif text-2xl font-bold text-primary mb-4">Hilfe zur Selbsthilfe</h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto">
            Das Konzept der aktivierenden Pflege ist der Kern moderner Altenpflege. Es ist mehr als eine Technik – es ist eine Haltung.
            Ziel ist es, die Eigenständigkeit zu maximieren und nur dort zu unterstützen, wo es nötig ist.
          </p>
        </section>

        <Tabs defaultValue="principles" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="principles">Die 3 Säulen</TabsTrigger>
            <TabsTrigger value="concepts">Konzepte</TabsTrigger>
            <TabsTrigger value="practice">Praxis-Anleitung</TabsTrigger>
          </TabsList>
          
          <TabsContent value="principles">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <Brain className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Ressourcen erkennen</h3>
                <p className="text-sm text-muted-foreground">
                  Beobachten Sie genau: Was kann der Bewohner noch selbst? Nutzen Sie diese Fähigkeiten gezielt.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Kommunikation</h3>
                <p className="text-sm text-muted-foreground">
                  Erklären Sie jeden Schritt. Motivieren Sie mit Worten. Kommunikation ist der Schlüssel zur Kooperation.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <HandHeart className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Geduld & Zeit</h3>
                <p className="text-sm text-muted-foreground">
                  Selbstständigkeit braucht Zeit. Es geht oft schneller, es selbst zu tun – aber das fördert nicht die Fähigkeiten.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="concepts">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-bold text-primary mb-2">Kinästhetik (Hatch & Maietta)</h4>
                  <p className="text-sm text-muted-foreground">
                    Bewegungslehre, die das eigene Körpergefühl der bewohnenden Person nutzt.
                    „Führen" der Bewegung statt Heben/Tragen – schont die Pflegekraft und aktiviert die Person.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-bold text-primary mb-2">Basale Stimulation (Fröhlich/Bienstein)</h4>
                  <p className="text-sm text-muted-foreground">
                    Förderung der Wahrnehmung über Berührung, Bewegung, Lagerung. Belebende Waschung
                    (herzwärts) versus beruhigende Waschung (zentrumswärts) – z. B. beim Einschlafen.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-bold text-primary mb-2">Validation (Naomi Feil)</h4>
                  <p className="text-sm text-muted-foreground">
                    Umgang mit Menschen mit Demenz: nicht korrigieren, sondern in die emotionale Welt eingehen.
                    Gefühle ernst nehmen, kurze klare Sätze, Augenkontakt, Berührung mit Erlaubnis.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-bold text-primary mb-2">Personenzentrierte Pflege (Tom Kitwood)</h4>
                  <p className="text-sm text-muted-foreground">
                    Der Mensch steht im Mittelpunkt – mit Biographie, Vorlieben, Beziehungen. Würde und
                    Person-Sein bewahren. Caritas-Leitbild knüpft hier an.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-yellow-900">
              <strong>Demenz im Pflegealltag:</strong> ruhige Stimme, kurze Sätze, eine Aufforderung nach der anderen,
              Augenkontakt, vertraute Worte und Routinen, Berührung mit Erlaubnis. Bei Abwehr keine Konfrontation –
              kurze Pause, später erneut anbieten, Pflegefachkraft informieren.
            </div>
          </TabsContent>

          <TabsContent value="practice">
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

        <section className="mb-10">
          <Card className="bg-secondary/10 border-none">
            <CardContent className="pt-6">
              <h3 className="font-serif text-lg font-bold text-primary mb-2">Auch bei aktivierender Pflege: Nachbereitung gehört dazu</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Wenn die bewohnende Person mehr selbst macht, übernehmen Sie zwar weniger Handgriffe –
                die <strong>Nachbereitung</strong> bleibt aber Ihre Aufgabe und ist Teil der Pflegehandlung:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                <li>Einmalmaterial entsorgen, Müllbeutel leeren, wenn voll</li>
                <li>Schmutzige Wäsche in den Wäschesack, frische Wäsche separat</li>
                <li>Personenbezogene Utensilien (Zahnbürste, Kamm, Hautpflege) zurück in den persönlichen Schrank</li>
                <li>Waschschüssel und gemeinsam genutzte Hilfsmittel reinigen und wischdesinfizieren</li>
                <li>Hände desinfizieren, Eintrag im Berichteblatt bei Auffälligkeiten</li>
              </ul>
              <p className="text-sm text-muted-foreground italic mt-2">
                Aktivierende Pflege bedeutet nicht weniger Verantwortung – sondern eine andere Verteilung der Tätigkeiten.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-10">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="font-serif text-lg font-bold text-primary mb-2">Reflexion für den Alltag</h3>
              <p className="text-sm text-muted-foreground italic">
                „An welcher Stelle habe ich heute Aufgaben übernommen, die die bewohnende Person eigentlich
                noch selbst hätte tun können? Was würde sich ändern, wenn ich morgen an gleicher Stelle 2 Minuten
                länger Geduld habe?"
              </p>
            </CardContent>
          </Card>
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
