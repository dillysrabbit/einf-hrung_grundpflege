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
    { id: "step1", title: "1. Vorbereitung", desc: "Material bereitstellen (getrennte Waschlappen für Gesicht / Körper / Intim). Hygienische Händedesinfektion. Wassertemperatur so wählen, wie die bewohnende Person es wünscht – ein empfehlenswerter Richtwert ist 37–43 °C; selbst mit dem Unterarm prüfen. Bett auf Arbeitshöhe. Bewohner:in informieren." },
    { id: "step2", title: "2. Gesicht, Augen & Hals", desc: "Beim gesunden, nicht entzündeten Auge mit klarem Wasser vom äußeren zum inneren Augenwinkel wischen (folgt der natürlichen Tränendrainage), bei entzündetem oder infiziertem Auge umgekehrt vom inneren zum äußeren Augenwinkel (Schutz des Tränen-Nasen-Gangs). Jeweils frische Stelle des Waschlappens, ein Auge nach dem anderen. Anschließend Gesicht, Ohren, Hals waschen und gut trocknen." },
    { id: "step3", title: "3. Oberkörper & Arme", desc: "Waschlotion ins Wasser. Belebende Waschung herzwärts (Hand → Schulter), gut abtrocknen. Auf Intertrigo (Hautwolf) in Achseln und unter der Brust achten." },
    { id: "step4", title: "4. Rücken & Gesäß", desc: "Bewohner:in zur Seite drehen. Rücken und Gesäß waschen, trocknen, ggf. eincremen. Dekubitus-Kontrolle (Steißbein, Schulterblatt, Ellenbogen) – Fingertest: Lässt sich die Rötung wegdrücken?" },
    { id: "step5", title: "5. Beine & Füße", desc: "Beine herzwärts waschen. Zehenzwischenräume gründlich trocknen (Pilzgefahr) – keine Watte einlegen (Mazeration). Fersen und Knöchel auf Druckstellen prüfen." },
    { id: "step6", title: "6. Intimbereich Vorbereitung", desc: "Wasser wechseln, frischen Waschlappen, jetzt Einmalhandschuhe anziehen. Intimsphäre durch Abdecken wahren." },
    { id: "step7", title: "7. Intimpflege (Frau)", desc: "Beine anstellen. Erst äußere, dann mit gespreizten Schamlippen die kleinen Schamlippen reinigen – immer von der Symphyse zum Anus, mit jedem Wisch frische Lappenstelle. Verhindert Keimverschleppung in die Harnröhre." },
    { id: "step8", title: "8. Intimpflege (Mann)", desc: "Vorhaut vorsichtig zurückschieben (bei Phimose nicht erzwingen!), Eichel reinigen, gut abtrocknen, Vorhaut ZWINGEND wieder vorschieben (sonst Paraphimose-Gefahr → Notfall). Hoden reinigen." },
    { id: "step9", title: "9. Abschluss & Nachbereitung", desc: "Frische Kleidung, faltenfreie Bettwäsche, bequeme Lagerung. Anschließend Arbeitsplatz und Material aufräumen, reinigen, desinfizieren (siehe Nachbereitung unten). Beobachtungen ins Berichteblatt." },
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
          <Card className="bg-secondary/20 border-none shadow-sm mb-6">
            <CardContent className="pt-6">
              <h3 className="font-serif text-lg font-bold text-primary mb-2">Lernziele</h3>
              <p className="text-sm text-muted-foreground mb-2">Nach Bearbeitung dieses Moduls können Sie …</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                <li>eine Ganzkörperwaschung im Bett strukturiert und sicher vorbereiten und durchführen.</li>
                <li>die Wassertemperatur sicher prüfen und Verbrühungsrisiken einschätzen.</li>
                <li>die Schritte der Intimpflege geschlechtsspezifisch korrekt umsetzen.</li>
                <li>Hautveränderungen erkennen und sachlich dokumentieren.</li>
              </ul>
            </CardContent>
          </Card>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            Diese Form der Waschung ist anspruchsvoll und erfordert Konzentration. Sie kommt zum Einsatz, wenn die bewohnende Person bettlägerig
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
                    {["Händedesinfektionsmittel", "Einmalhandschuhe (für Intimpflege)", "Einwegschürze (bei erwartbarer Kontamination)", "3 Waschlappen (Gesicht / Körper / Intim)", "Handtücher & Badetuch", "Waschschüssel & Abwurf"].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-primary/40" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-sm uppercase tracking-wide text-muted-foreground">Pflegeprodukte & Sonstiges</h4>
                    {["Waschlotion (pH-hautneutral)", "Hautcreme / ggf. Barrierecreme", "Mundpflegemittel", "Kamm / Bürste", "Frische Kleidung", "Frische Bettwäsche (ggf.)"].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-primary/40" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-yellow-800">
                  <strong>Wichtig:</strong> Raumtemperatur 22–24 °C, Fenster und Türen schließen (Auskühlung vermeiden). Bett auf ergonomische Arbeitshöhe bringen (Eigenschutz Rücken).
                </div>
                <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-900">
                  <strong>Handschuhe – wann?</strong> Einmalhandschuhe nur bei Kontakt mit Körperflüssigkeiten, Schleimhäuten oder nicht-intakter Haut (Intimpflege, Stuhl, Wunden). Beim Waschen intakter Haut ist die hygienische Händedesinfektion der Standard – Handschuhe ersetzen sie nicht.
                </div>
                <div className="mt-4 bg-orange-50 border-l-4 border-orange-500 p-4 text-sm text-orange-900">
                  <strong>Wassertemperatur:</strong> richtet sich nach dem Wunsch der bewohnenden Person. 37–43 °C ist ein empfehlenswerter Richtwert. Immer zuerst mit der Innenseite des eigenen Unterarms prüfen. Bei Diabetes, Demenz oder Sensibilitätsstörung darf die Temperaturkontrolle nie allein der bewohnenden Person überlassen werden – Verbrühungsgefahr.
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
          <h2 className="font-serif text-2xl font-bold text-primary mb-4">Nachbereitung – gehört zur Pflege dazu</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Eine Pflegehandlung ist erst beendet, wenn auch der Arbeitsplatz wieder hergestellt ist.
            Die Nachbereitung verhindert Keimverschleppung, schützt nachfolgende Bewohner:innen und Kolleg:innen
            und ist ausdrücklich Teil Ihrer Tätigkeit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-secondary/10 border-none">
              <CardContent className="pt-6">
                <h4 className="font-bold text-primary mb-2">Material & Müll</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                  <li>Einmalmaterial (Handschuhe, Schürze, Einmalwaschlappen) direkt in den Abwurf</li>
                  <li>Inkontinenzmaterial im verschlossenen Beutel entsorgen</li>
                  <li>Müllbeutel aus dem Eimer wechseln, wenn voll oder verschmutzt</li>
                  <li>Spitze/scharfe Gegenstände in den Sicherheitsabwurf (Sharps-Container)</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-secondary/10 border-none">
              <CardContent className="pt-6">
                <h4 className="font-bold text-primary mb-2">Wäsche</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                  <li>Schmutzwäsche direkt in den Wäschesack, nicht auf den Boden oder die eigene Kleidung</li>
                  <li>Sichtbar verschmutzte oder infektiöse Wäsche in den dafür vorgesehenen Sack (z. B. wasserlösliche Säcke nach Hausstandard)</li>
                  <li>Frische Wäsche nicht mit benutzter im selben Wagen transportieren</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-secondary/10 border-none">
              <CardContent className="pt-6">
                <h4 className="font-bold text-primary mb-2">Waschutensilien & Geräte</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                  <li>Waschschüssel ausleeren, mit Spülmittel reinigen, wischdesinfizieren, trocken aufbewahren (Schimmelgefahr!)</li>
                  <li>Mehrwegwaschlappen und -handtücher in die Wäsche</li>
                  <li>Mund-, Haar- und Hautpflegeutensilien sind <strong>personenbezogen</strong> – nicht für andere Bewohner:innen verwenden</li>
                  <li>Pflegewagen, Bettgitter, Nachttisch, Türklinke nach Bewohnerkontakt wischdesinfizieren</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-secondary/10 border-none">
              <CardContent className="pt-6">
                <h4 className="font-bold text-primary mb-2">Arbeitsplatz & Abschluss</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                  <li>Bett auf bewohnersichere Höhe absenken, Klingel und Trinken in Reichweite</li>
                  <li>Fenster lüften (Stoßlüftung), Raumtemperatur prüfen</li>
                  <li>Hände desinfizieren – auch nach dem Ausziehen der Handschuhe</li>
                  <li>Eintrag im Berichteblatt, falls Auffälligkeiten</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <Eye className="h-6 w-6" />
            Wichtige Beobachtungspunkte
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Hautzustand", desc: "Rötungen, Druckstellen (Dekubitus, Fingertest), Pilzinfektionen, Trockenheit" },
              { title: "Schmerzen", desc: "Schmerzäußerungen bei Bewegung oder Berührung – auch nonverbal (Mimik, Stöhnen, Abwehr)" },
              { title: "Allgemeinzustand", desc: "Wachheit, Belastbarkeit, Stimmung, Verwirrtheit?" },
              { title: "Atmung", desc: "Atemgeräusche, Kurzatmigkeit bei Anstrengung, Atemfrequenz" },
              { title: "Mobilität", desc: "Mithilfe beim Drehen, Halten, Aufrichten – Vergleich zum Vortag" },
              { title: "Ausscheidungen", desc: "Farbe, Menge und Geruch von Urin/Stuhl, Kontinenzhilfen voll/trocken" }
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

        <section className="mb-10">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <h3 className="font-serif text-lg font-bold text-blue-900 mb-2">Auch wichtig – wird in Folgemodulen vertieft</h3>
              <p className="text-sm text-blue-900">
                Eine vollständige Grundpflege umfasst auch <strong>Mund-, Zahn- und Prothesenpflege</strong>,
                <strong> Inkontinenzversorgung mit Hautschutz</strong>, <strong>Hilfe bei Essen und Trinken</strong>
                {" "}(inkl. Aspirations­prophylaxe) sowie <strong>Lagerung und Mobilisation</strong> nach den Konzepten der
                Kinästhetik und Bobath. Diese Themen folgen in vertiefenden Schulungen –
                bei Unsicherheit immer Pflegefachkraft hinzuziehen.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-10">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="font-serif text-lg font-bold text-primary mb-2">Reflexion für den Alltag</h3>
              <p className="text-sm text-muted-foreground italic">
                „Welcher Schritt der Ganzkörperwaschung fällt mir am schwersten? Welcher Person in meinem Wohnbereich
                könnte heute eine besonders ruhige, kommunikative Waschung guttun?"
              </p>
            </CardContent>
          </Card>
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
