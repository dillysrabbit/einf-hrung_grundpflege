import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, ArrowRight, ClipboardList, Utensils } from "lucide-react";
import { Link } from "wouter";

export default function Module7() {
  return (
    <div className="flex flex-col gap-8 pb-12">
      <div className="relative w-full h-[260px] overflow-hidden bg-primary flex items-center justify-center">
        <Utensils className="absolute h-72 w-72 text-white/10" strokeWidth={1} />
        <div className="text-center text-white px-4 relative z-10">
          <span className="uppercase tracking-widest text-sm font-bold mb-2 block opacity-80">Modul 7</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold drop-shadow-md">Ernährung & Trinken</h1>
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
                <li>Mahlzeitenbegleitung würdevoll und ressourcenorientiert gestalten.</li>
                <li>Anzeichen von Schluckstörungen (Dysphagie) erkennen und melden.</li>
                <li>Eine sichere Position zum Essen einnehmen und Aspirationsrisiken reduzieren.</li>
                <li>Die Trinkmenge fördern und Flüssigkeitsmangel (Exsikkose) erkennen.</li>
                <li>Anzeichen von Mangelernährung beobachten und ins Berichteblatt eintragen.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-10">
          <p className="text-base text-muted-foreground leading-relaxed">
            Essen ist mehr als Nahrungsaufnahme – es ist Genuss, Erinnerung, sozialer Moment, Tagesstruktur.
            Im Alter verändern sich Appetit, Geschmack, Schluck- und Kaufunktion. Mangelernährung und
            Flüssigkeitsmangel sind in der stationären Pflege weit verbreitet und werden oft erst spät
            erkannt – Ihre Beobachtung ist hier zentral.
          </p>
        </section>

        <Tabs defaultValue="meals" className="w-full mb-10">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="meals">Mahlzeiten</TabsTrigger>
            <TabsTrigger value="dysphagia">Schluckstörung</TabsTrigger>
            <TabsTrigger value="drinking">Trinken</TabsTrigger>
            <TabsTrigger value="signs">Beobachtung</TabsTrigger>
          </TabsList>

          <TabsContent value="meals">
            <Card>
              <CardContent className="pt-6 space-y-3 text-sm">
                <p><strong>Vorbereitung der Mahlzeit:</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Hände desinfizieren (Bewohner:in und Pflegekraft).</li>
                  <li>Aufrechte Sitzposition – am Tisch oder mit gut positioniertem Oberkörper im Bett (mind. 60–90°).</li>
                  <li>Sehhilfen, Hörgeräte, ggf. Prothese einsetzen.</li>
                  <li>Stoffserviette, Lätzchen vermeiden, soweit es geht (Würde) – stattdessen großes Tuch oder Schürze nach Wunsch.</li>
                  <li>Speisen ansprechend anrichten, Bezeichnungen nennen, ggf. Auswahl anbieten.</li>
                </ul>
                <p className="font-bold mt-2">Beim Anreichen</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Auf Augenhöhe sitzen, nicht stehend füttern.</li>
                  <li>Tempo der bewohnenden Person folgen – nicht hetzen.</li>
                  <li>Kleine Bissen, Löffel von vorne anreichen, abwarten bis geschluckt wurde, bevor der nächste Bissen kommt.</li>
                  <li>Bei Demenz: einfache Zwischen­aufforderungen („Bitte schlucken"), Berührung am Arm, Vorzeigen.</li>
                  <li>Selbstständigkeit fördern: Löffel oder Tasse in die Hand geben, Fingerfood anbieten.</li>
                </ul>
                <p className="bg-blue-50 border-l-4 border-blue-500 p-2 mt-2">
                  <strong>Konsistenz nach Maßnahmenplan</strong> beachten: passierte Kost, weiche Kost, angedickte
                  Flüssigkeiten – Abweichungen vom Plan ins Berichteblatt.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dysphagia">
            <Card>
              <CardContent className="pt-6 space-y-3 text-sm">
                <p>
                  <strong>Dysphagie</strong> (Schluckstörung) ist häufig nach Schlaganfall, bei Demenz,
                  Parkinson oder im fortgeschrittenen Alter. Sie ist gefährlich, weil Speisen oder
                  Flüssigkeiten in die Atemwege gelangen können (Aspiration) – das führt zu
                  <strong> Aspirationspneumonie</strong>, einer häufigen und oft tödlichen Komplikation.
                </p>
                <p className="font-bold">Anzeichen einer Schluckstörung</p>
                <ul className="list-disc pl-5 space-y-0.5">
                  <li>Husten oder Räuspern während oder nach dem Schlucken</li>
                  <li>Gurgelnde, „feuchte" Stimme nach dem Schlucken</li>
                  <li>Speichelfluss aus dem Mund, kauen ohne zu schlucken</li>
                  <li>Speisereste verbleiben im Mund</li>
                  <li>Atemnot, blaue Lippen während der Mahlzeit (Notfall!)</li>
                  <li>Wiederholte Lungenentzündungen</li>
                </ul>
                <p className="font-bold mt-2">Aspirationsprophylaxe – das Wichtigste</p>
                <ul className="list-disc pl-5 space-y-0.5">
                  <li>Aufrechte Sitzposition (mind. 60–90°), Kinn leicht zur Brust geneigt.</li>
                  <li>Reizarme Umgebung – TV aus, Aufmerksamkeit auf das Essen.</li>
                  <li>Kleine Mengen, langsam, vollständig schlucken lassen.</li>
                  <li>Flüssigkeit ggf. andicken (nach Anordnung).</li>
                  <li><strong>Niemals im Liegen anreichen.</strong></li>
                  <li>Nach der Mahlzeit mind. 30 Minuten aufrecht bleiben.</li>
                  <li>Mundpflege nach dem Essen (Speisereste reduzieren Aspirationsrisiko).</li>
                </ul>
                <div className="bg-red-50 border-l-4 border-red-500 p-3 mt-2">
                  <strong>Notfall:</strong> Bei sichtbarem Verschlucken mit Atemnot, Blauverfärbung oder
                  Bewusstseinsverlust sofort aufrecht setzen, kräftig zwischen die Schulterblätter klopfen,
                  ggf. Heimlich-Manöver, sofort Pflegefachkraft / Notruf 112.
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="drinking">
            <Card>
              <CardContent className="pt-6 space-y-3 text-sm">
                <p>
                  Ältere Menschen empfinden weniger Durst. Eine zu geringe Flüssigkeitszufuhr führt zu
                  <strong> Exsikkose (Austrocknung)</strong>, die unter anderem Verwirrtheit, Schwindel,
                  Stürze, Verstopfung und Harnwegsinfekte begünstigt.
                </p>
                <p><strong>Empfehlung:</strong> mindestens 1,5 l Flüssigkeit pro Tag (sofern medizinisch nicht
                  begrenzt) – Wasser, Tee, Saftschorle, Suppen, wasserreiches Obst.</p>
                <p className="font-bold">Trinken aktiv fördern</p>
                <ul className="list-disc pl-5 space-y-0.5">
                  <li>Getränk immer in Reichweite, gut sichtbar, ergonomischer Becher (Schnabelbecher nur, wenn nötig – Würde beachten).</li>
                  <li>Über den Tag verteilt aktiv anbieten („Möchten Sie einen Schluck mit mir?") – nicht nur zur Mahlzeit.</li>
                  <li>Lieblingsgetränke berücksichtigen (Biographie).</li>
                  <li>Bei Schluckstörung: angedickte Flüssigkeit nach Maßnahmenplan.</li>
                  <li>Trinkprotokoll führen, wenn vorgegeben – jede Trinkmenge sofort eintragen.</li>
                </ul>
                <p className="font-bold mt-2">Anzeichen von Exsikkose</p>
                <ul className="list-disc pl-5 space-y-0.5">
                  <li>Stehende Hautfalten am Handrücken, trockene Schleimhäute, trockene Zunge</li>
                  <li>Eingesunkene Augen, dunkler/wenig Urin</li>
                  <li>Plötzliche Verwirrtheit, Schwäche, Stürze</li>
                  <li>Niedriger Blutdruck, schneller Puls</li>
                </ul>
                <p className="bg-yellow-50 border-l-4 border-yellow-400 p-2">
                  Bei Verdacht auf Exsikkose <strong>sofort Pflegefachkraft informieren</strong> – ggf. ärztliche
                  Anordnung von subkutaner Flüssigkeit.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="signs">
            <Card>
              <CardContent className="pt-6 space-y-3 text-sm">
                <p className="font-bold">Was bei jeder Mahlzeit beobachten und ggf. ins Berichteblatt eintragen:</p>
                <ul className="list-disc pl-5 space-y-0.5">
                  <li>Wie viel wurde tatsächlich gegessen / getrunken? (z. B. „1/2 Portion", „2 Schluck Tee")</li>
                  <li>Hat es geschmeckt? Vorlieben/Abneigungen erkennen</li>
                  <li>Husten, Räuspern, „feuchte" Stimme – Hinweis auf Aspiration</li>
                  <li>Schmerzen beim Kauen oder Schlucken (Mund, Zähne, Prothese)</li>
                  <li>Übelkeit, Erbrechen, Sodbrennen</li>
                  <li>Plötzliche Veränderung im Essverhalten – kann ein Frühzeichen für Erkrankung sein</li>
                </ul>
                <p className="font-bold mt-2">Mangelernährung erkennen</p>
                <ul className="list-disc pl-5 space-y-0.5">
                  <li>Ungewollter Gewichtsverlust (lockere Kleidung, schlaffe Haut)</li>
                  <li>Anhaltender Appetitverlust über mehrere Tage</li>
                  <li>Schwäche, Müdigkeit, neue Stürze</li>
                  <li>Schlechte Wundheilung, dünne, leicht verletzliche Haut</li>
                </ul>
                <p>Im Haus wird in der Regel ein <strong>PEMU-Bogen</strong> oder vergleichbares Instrument
                  zur Erfassung der Ernährungssituation geführt. Ihre Beobachtungen fließen dort ein.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <section className="mb-10">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="font-serif text-lg font-bold text-primary mb-2 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" /> Im Sterbeprozess
              </h3>
              <p className="text-sm text-muted-foreground">
                Im Sterbeprozess wird das Bedürfnis nach Essen und Trinken meist sehr gering. Das ist
                <strong> normal</strong> und kein Grund zum Drängen. Nicht mehr essen oder trinken zu wollen
                gehört zum Sterben. Das Wichtigste wird dann gute <Link href="/module-5" className="text-primary underline">Mundpflege</Link>
                . Mehr in <Link href="/module-10" className="text-primary underline">Modul 10</Link>.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-10">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="font-serif text-lg font-bold text-primary mb-2">Reflexion für den Alltag</h3>
              <p className="text-sm text-muted-foreground italic">
                „Wer in meinem Wohnbereich isst und trinkt deutlich weniger als vor zwei Wochen – und habe
                ich das schon ins Berichteblatt eingetragen?"
              </p>
            </CardContent>
          </Card>
        </section>

        <div className="flex justify-between">
          <Link href="/module-6"><Button variant="outline" className="rounded-full px-6">Zurück</Button></Link>
          <Link href="/module-8">
            <Button size="lg" className="rounded-full px-8">
              Weiter zu Modul 8 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
