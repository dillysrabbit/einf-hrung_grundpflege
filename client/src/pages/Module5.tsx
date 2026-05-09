import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, ArrowRight, ClipboardList, Smile } from "lucide-react";
import { Link } from "wouter";

export default function Module5() {
  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* Header */}
      <div className="relative w-full h-[260px] overflow-hidden bg-primary flex items-center justify-center">
        <Smile className="absolute h-72 w-72 text-white/10" strokeWidth={1} />
        <div className="text-center text-white px-4 relative z-10">
          <span className="uppercase tracking-widest text-sm font-bold mb-2 block opacity-80">Modul 5</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold drop-shadow-md">Mund- & Zahnpflege</h1>
        </div>
      </div>

      <div className="container max-w-4xl mx-auto px-4">

        <section className="mb-10">
          <Card className="bg-secondary/20 border-none shadow-sm">
            <CardContent className="pt-6">
              <h3 className="font-serif text-lg font-bold text-primary mb-2 flex items-center gap-2">
                <ClipboardList className="h-5 w-5" /> Lernziele
              </h3>
              <p className="text-sm text-muted-foreground mb-2">Nach Bearbeitung dieses Moduls können Sie …</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                <li>die Bedeutung der Mundgesundheit für hochbetagte Menschen einschätzen.</li>
                <li>eine Mundpflege bei eigenen Zähnen und mit Prothese sicher durchführen oder anleiten.</li>
                <li>typische Mundbefunde (Soor, Borken, Karies, Aphthen, Prothesen-Druckstellen) erkennen und melden.</li>
                <li>eine Prothese fachgerecht reinigen und aufbewahren.</li>
                <li>die Besonderheiten der Mundpflege im Sterbeprozess benennen.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-10">
          <p className="text-base text-muted-foreground leading-relaxed">
            Der Mund ist Eingangstor für Nahrung, Sprache und Beziehung. Im Alter nimmt die Speichel­produktion
            ab, viele Medikamente trocknen den Mund zusätzlich aus – das Risiko für Karies, Pilzinfektionen
            (Soor), Druckstellen unter Prothesen und Aspirationspneumonien steigt. Eine sorgfältige
            Mundpflege ist deshalb keine Kleinigkeit, sondern eine zentrale Aufgabe der Grundpflege.
          </p>
        </section>

        <Tabs defaultValue="basics" className="w-full mb-10">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="basics">Grundlagen</TabsTrigger>
            <TabsTrigger value="natural">Eigene Zähne</TabsTrigger>
            <TabsTrigger value="denture">Prothese</TabsTrigger>
            <TabsTrigger value="signs">Befunde</TabsTrigger>
          </TabsList>

          <TabsContent value="basics">
            <Card>
              <CardContent className="pt-6 space-y-3 text-sm">
                <p>
                  Mundpflege erfolgt mindestens <strong>zweimal täglich</strong> (morgens und abends). Bei
                  Mundatmung, Sauerstofftherapie, Sondenernährung, Fieber oder im Sterbeprozess deutlich
                  häufiger.
                </p>
                <p><strong>Material:</strong> Zahnbürste (weich), fluoridhaltige Zahnpasta, Becher, Nierenschale,
                  Lippenpflege, ggf. Mundpflegestäbchen, Prothesenbürste, Prothesenreiniger, ggf. Mundspüllösung
                  ohne Alkohol. Bei nicht-intaktem Mund: Einmalhandschuhe.</p>
                <p><strong>Positionierung:</strong> möglichst aufrecht (Aspirations­schutz). Bei bettlägerigen Personen
                  Oberkörper hochpositionieren und Kopf zur Seite drehen. Niemals flach liegend Mundpflege durchführen.</p>
                <p><strong>Hilfe zur Selbsthilfe:</strong> Zahnbürste anreichen, ggf. Hand zum Mund führen, die
                  Putzbewegung selbst ausführen lassen. Beobachten, ob alle Bereiche erreicht werden, ggf.
                  nachreinigen.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="natural">
            <Card>
              <CardContent className="pt-6 space-y-2 text-sm">
                <p><strong>Schritt für Schritt – eigene Zähne:</strong></p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Hände desinfizieren, ggf. Einmalhandschuhe anziehen, Bewohner:in informieren.</li>
                  <li>Aufrechte Position, Schutz für Kleidung/Bettwäsche, Nierenschale unter das Kinn.</li>
                  <li>Zahnbürste anfeuchten, erbsengroße Menge fluoridhaltiger Zahnpasta.</li>
                  <li>Außenflächen, Innenflächen, Kauflächen jedes Zahns putzen (KAI-Methode oder Bass-Technik), Zahnfleischrand mitbürsten – nicht zu kräftig.</li>
                  <li>Zunge mit Bürste oder Zungenreiniger sanft reinigen (Mundgeruch, Pilzprophylaxe).</li>
                  <li>Mundspülen mit klarem Wasser; bei Schluckstörung statt Spülen mit Mundpflegestäbchen auswischen.</li>
                  <li>Lippenpflege auftragen (z. B. Vaseline, Dexpanthenol-Salbe).</li>
                </ol>
                <p className="bg-blue-50 border-l-4 border-blue-500 p-2 mt-3">
                  <strong>Zahnzwischenräume</strong> einmal täglich mit <strong>Zahnseide</strong> oder
                  Interdentalbürste reinigen – dort entsteht der meiste Belag und damit Karies.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="denture">
            <Card>
              <CardContent className="pt-6 space-y-2 text-sm">
                <p><strong>Prothesenpflege – mindestens 2× täglich:</strong></p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Prothese vorsichtig herausnehmen (Bewohner:in soll dies möglichst selbst tun).</li>
                  <li>Über einer mit Wasser gefüllten Schüssel oder einem Waschlappen reinigen (Bruchgefahr beim Fallenlassen).</li>
                  <li>Mit Prothesenbürste und Spülmittel oder spezieller Prothesenpaste reinigen – <strong>keine normale Zahnpasta</strong> (zu abrasiv).</li>
                  <li>Mundhöhle separat reinigen: Schleimhaut, Zunge, Gaumen mit weicher Zahnbürste oder Mundpflegestäbchen, Mund spülen.</li>
                  <li>Prothese vor dem Wiedereinsetzen anfeuchten.</li>
                </ol>
                <p><strong>Über Nacht:</strong> Prothese trocken in einer beschrifteten Dose oder feucht in
                  Wasser aufbewahren (nach Hausstandard). Reinigungstabletten max. nach Anleitung verwenden,
                  danach gründlich abspülen.</p>
                <p className="bg-yellow-50 border-l-4 border-yellow-400 p-2 mt-2">
                  <strong>Druckstellen</strong> (Rötung, Schmerz, Aphthen) ins Berichteblatt eintragen und an
                  Pflegefachkraft melden – die Prothese muss ggf. durch den Zahnarzt nachjustiert werden.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="signs">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-3">Diese Befunde gehören ins Berichteblatt
                  und an die Pflegefachkraft:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="border rounded-lg p-3">
                    <p className="font-bold text-primary mb-1">Soor (Mund-Pilz)</p>
                    <p className="text-muted-foreground">Weißliche, abwischbare Beläge auf Zunge/Schleimhaut, darunter geröteter Grund. Häufig nach Antibiotika, bei Diabetes, Sonde, Sauerstoff.</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <p className="font-bold text-primary mb-1">Borken</p>
                    <p className="text-muted-foreground">Eingetrocknete Beläge auf Zunge/Lippen, oft bei Mundatmung, Sauerstofftherapie, im Sterbeprozess. Befeuchten, vorsichtig lösen.</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <p className="font-bold text-primary mb-1">Aphthen / Druckstellen</p>
                    <p className="text-muted-foreground">Schmerzhafte runde Ulzerationen oder gerötete Stellen unter der Prothese. Kann das Essen unmöglich machen.</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <p className="font-bold text-primary mb-1">Karies / lockere Zähne</p>
                    <p className="text-muted-foreground">Dunkle Stellen, Löcher, Lockerung – Aspirationsgefahr bei sehr losen Zähnen. Zahnärztliche Vorstellung notwendig.</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <p className="font-bold text-primary mb-1">Mundtrockenheit (Xerostomie)</p>
                    <p className="text-muted-foreground">Klebrige Schleimhaut, Schwierigkeiten beim Kauen/Sprechen, Mundgeruch. Häufig durch Medikamente.</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <p className="font-bold text-primary mb-1">Mundgeruch (Foetor ex ore)</p>
                    <p className="text-muted-foreground">Hinweis auf schlechte Mundpflege, Soor, Karies oder Erkrankungen (Magen, Diabetes). Nicht überdecken, sondern Ursache klären.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <section className="mb-10">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="font-serif text-lg font-bold text-primary mb-2 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" /> Mundpflege im Sterbeprozess
              </h3>
              <p className="text-sm text-muted-foreground">
                Im Sterbeprozess wird nicht mehr getrunken, der Mund trocknet schnell aus. Hier ist die
                Mundpflege <strong>der wichtigste Beitrag zum Wohlbefinden</strong> – oft mehrmals stündlich:
                Lippen befeuchten, Mundpflege­stäbchen mit Wasser oder dem Lieblingsgetränk (Tee, Kaffee, Bier
                – nach Biographie), kein Mundspülen mehr (Aspirationsgefahr). Lippen mit Pflegestift dünn
                fetten. Genaueres in <Link href="/module-10" className="text-primary underline">Modul 10</Link>.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-10">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="font-serif text-lg font-bold text-primary mb-2">Reflexion für den Alltag</h3>
              <p className="text-sm text-muted-foreground italic">
                „Wann habe ich heute zuletzt in den Mund einer bewohnenden Person geschaut – nicht nur die
                Zähne geputzt, sondern wirklich Schleimhaut, Zunge, Lippen angesehen?"
              </p>
            </CardContent>
          </Card>
        </section>

        <div className="flex justify-between">
          <Link href="/module-4"><Button variant="outline" className="rounded-full px-6">Zurück</Button></Link>
          <Link href="/module-6">
            <Button size="lg" className="rounded-full px-8">
              Weiter zu Modul 6 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
