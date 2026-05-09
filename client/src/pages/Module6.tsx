import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, ClipboardList, Droplets } from "lucide-react";
import { Link } from "wouter";

export default function Module6() {
  return (
    <div className="flex flex-col gap-8 pb-12">
      <div className="relative w-full h-[260px] overflow-hidden bg-primary flex items-center justify-center">
        <Droplets className="absolute h-72 w-72 text-white/10" strokeWidth={1} />
        <div className="text-center text-white px-4 relative z-10">
          <span className="uppercase tracking-widest text-sm font-bold mb-2 block opacity-80">Modul 6</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold drop-shadow-md">Ausscheidung & Inkontinenz</h1>
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
                <li>Urin und Stuhl systematisch beobachten und ins Berichteblatt eintragen.</li>
                <li>Die Bristol-Stuhlskala in eigenen Worten anwenden.</li>
                <li>Inkontinenzformen grob unterscheiden und ressourcenorientiert begleiten (Toilettentraining).</li>
                <li>Eine Inkontinenzvorlage würdevoll und hautschonend wechseln.</li>
                <li>Eine Inkontinenz-assoziierte Dermatitis (IAD) erkennen und vorbeugen.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-10">
          <p className="text-base text-muted-foreground leading-relaxed">
            Ausscheidung ist ein Grundbedürfnis und gleichzeitig ein sehr schambesetzter Bereich.
            Würdevolle Begleitung beginnt damit, dass wir nicht stillschweigend „die Windel wechseln",
            sondern Toilettengänge ermöglichen, Ressourcen erkennen und nur dort hygienisch versorgen, wo
            es notwendig ist. Die Beobachtung von Urin und Stuhl ist außerdem ein wichtiges Frühwarn­system.
          </p>
        </section>

        <Tabs defaultValue="observe" className="w-full mb-10">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="observe">Beobachten</TabsTrigger>
            <TabsTrigger value="continence">Kontinenz fördern</TabsTrigger>
            <TabsTrigger value="change">Vorlagenwechsel</TabsTrigger>
            <TabsTrigger value="iad">IAD vermeiden</TabsTrigger>
          </TabsList>

          <TabsContent value="observe">
            <Card>
              <CardContent className="pt-6 space-y-3 text-sm">
                <div>
                  <p className="font-bold mb-1">Urin – Was beobachten?</p>
                  <ul className="list-disc pl-5 space-y-0.5">
                    <li><strong>Farbe</strong>: hellgelb (gut hydriert) – dunkelgelb / bernsteinfarben (zu wenig getrunken) – rot/braun (Blut, Hämaturie, an PFK melden) – milchig-trüb (möglicher Harnwegsinfekt)</li>
                    <li><strong>Menge</strong>: deutlich weniger als sonst (Exsikkose? Harnverhalt?) oder mehr (Diabetes, Diuretika?)</li>
                    <li><strong>Geruch</strong>: streng-stechend bei Infekt, süßlich bei Diabetes</li>
                    <li><strong>Beschwerden</strong>: Brennen, Schmerz, häufiger Drang ohne Erfolg → Hinweis auf HWI</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-1">Stuhl – Bristol-Stuhlskala</p>
                  <ol className="list-decimal pl-5 space-y-0.5">
                    <li>Einzelne, harte Klumpen (starke Verstopfung)</li>
                    <li>Wurstartig, klumpig (Verstopfung)</li>
                    <li>Wurstförmig mit Rissen an der Oberfläche (normal)</li>
                    <li>Glatte, weiche Wurst (ideal)</li>
                    <li>Weiche Klümpchen mit klaren Rändern (eher zu weich)</li>
                    <li>Breiige, weiche Stücke mit zackigen Rändern (Diarrhö)</li>
                    <li>Wässrig, ohne feste Bestandteile (schwere Diarrhö)</li>
                  </ol>
                </div>
                <p><strong>Sofort melden:</strong> schwarzer (Teerstuhl, mögliches Magenbluten), blutiger oder anhaltend wässriger Stuhl; kein Stuhlgang über 3 Tage; sichtbares Blut im Urin.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="continence">
            <Card>
              <CardContent className="pt-6 space-y-3 text-sm">
                <p>Inkontinenz ist <strong>kein Schicksal</strong>, sondern oft beeinflussbar. Ziel ist
                  immer: so viel Selbstständigkeit wie möglich.</p>
                <div>
                  <p className="font-bold mb-1">Häufige Formen (grob)</p>
                  <ul className="list-disc pl-5 space-y-0.5">
                    <li><strong>Dranginkontinenz:</strong> plötzlicher, kaum unterdrückbarer Harndrang</li>
                    <li><strong>Belastungsinkontinenz:</strong> Urinverlust beim Husten, Lachen, Heben</li>
                    <li><strong>Mischinkontinenz:</strong> Drang + Belastung gemeinsam</li>
                    <li><strong>Funktionelle Inkontinenz:</strong> Toilette wird wegen Mobilität, Demenz, fehlender Hilfen nicht erreicht</li>
                    <li><strong>Stuhlinkontinenz:</strong> verschiedene Ursachen, oft tabuisiert</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-1">Toilettentraining / Toilettenbegleitung</p>
                  <ul className="list-disc pl-5 space-y-0.5">
                    <li>Individuellen Toilettenrhythmus aus dem Maßnahmenplan beachten und tagesaktuell anbieten (z. B. nach jeder Mahlzeit, vor dem Schlafengehen).</li>
                    <li>Aktiv anbieten – nicht warten, bis es gefragt wird; Demenz bedeutet oft, dass das Bedürfnis nicht mehr verbalisiert wird.</li>
                    <li>Wege zur Toilette frei halten, Beleuchtung, Haltegriffe, Toilettensitzerhöhung.</li>
                    <li>Nicht hetzen – Würde wahren, Tür schließen, Klingel in Reichweite.</li>
                    <li>Erfolge ins Berichteblatt; eine plötzliche Veränderung kann auf einen HWI oder Delir hinweisen.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="change">
            <Card>
              <CardContent className="pt-6 space-y-3 text-sm">
                <p><strong>Vorlagenwechsel mit Würde – Schritt für Schritt:</strong></p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Hände desinfizieren, Material bereitlegen (passende Vorlage/Pants, Reinigungstücher oder Waschlappen, Barrierecreme/Hautschutz, Abwurfbeutel), Einmalhandschuhe und ggf. Einwegschürze anziehen.</li>
                  <li>Bewohner:in informieren, Tür/Vorhang schließen, Intimsphäre durch Abdecken wahren.</li>
                  <li>Vorlage öffnen, vorsichtig herausziehen; auf Hautzustand und Stuhl-/Urinbefund achten.</li>
                  <li>Intimbereich gründlich reinigen – bei der Frau immer von vorne nach hinten, mit jedem Wisch frische Lappenstelle. Hautfalten besonders berücksichtigen.</li>
                  <li>Haut <strong>vollständig trocknen</strong>; bei intakter, leicht feuchter Haut keine fettenden Salben verwenden – nur dünn Hautschutz/Barrierecreme bei Bedarf.</li>
                  <li>Frische Vorlage faltenfrei und in der richtigen Größe anlegen – zu kleine Vorlage läuft aus, zu große drückt und scheuert.</li>
                  <li>Benutzte Vorlage im verschlossenen Beutel entsorgen, Handschuhe ausziehen, Hände desinfizieren.</li>
                  <li>Beobachtung im Berichteblatt: Hautbefund, Stuhl-/Urinbefund, Auffälligkeiten, durchgeführter Wechsel.</li>
                </ol>
                <p className="bg-blue-50 border-l-4 border-blue-500 p-2 mt-2">
                  <strong>Wechselrhythmus</strong> richtet sich nach dem Maßnahmenplan und nach dem Sättigungs­grad
                  – nicht nach festen „Stunden­takten". Eine durchnässte Vorlage gehört sofort gewechselt.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="iad">
            <Card>
              <CardContent className="pt-6 space-y-3 text-sm">
                <p>
                  <strong>Inkontinenz-assoziierte Dermatitis (IAD)</strong> entsteht, wenn die Haut
                  länger Urin oder Stuhl ausgesetzt ist. Sie zeigt sich als <strong>flächige Rötung,
                  glänzende Haut, Brennen, kleine Bläschen oder Hautablösungen</strong> – meist im
                  Genitalbereich, am Gesäß und in den Hautfalten.
                </p>
                <p className="font-bold">Unterschied IAD und Dekubitus</p>
                <ul className="list-disc pl-5 space-y-0.5">
                  <li>IAD: <em>flächig</em>, durch Feuchtigkeit, eher symmetrisch, häufig in Hautfalten.</li>
                  <li>Dekubitus: <em>punktuell</em> über knöchernen Vorsprüngen (Steiß, Ferse), durch Druck.</li>
                  <li>Beides kann gleichzeitig auftreten – immer beides ins Berichteblatt.</li>
                </ul>
                <p className="font-bold mt-2">Vorbeugung und Pflege</p>
                <ul className="list-disc pl-5 space-y-0.5">
                  <li>Frühzeitiger Wechsel nasser/verschmutzter Vorlagen.</li>
                  <li>Sanfte Reinigung mit pH-neutralem Waschlotion oder Inkontinenz-Reinigungstüchern – nicht reiben, sondern tupfen.</li>
                  <li>Hautschutz mit dünner Schicht <strong>Barrierecreme</strong> oder zinkhaltiger Paste; <em>keine</em> dicke Salbenschicht (verschließt die Haut, mindert Vorlagenaufnahme).</li>
                  <li>Hautfalten gut trocknen, ggf. mit Mullkompressen aufpolstern – keine Watte (Mazeration).</li>
                  <li>Bei Pilzinfektion (rote Hautfalten mit Satellitenpusteln): Pflegefachkraft informieren – ärztliche Verordnung antimykotischer Creme nötig.</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <section className="mb-10">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="font-serif text-lg font-bold text-primary mb-2">Reflexion für den Alltag</h3>
              <p className="text-sm text-muted-foreground italic">
                „Wem habe ich heute die Toilette aktiv angeboten – und wer hat ‚nur eine Vorlage' bekommen,
                obwohl ein Toilettengang möglich gewesen wäre?"
              </p>
            </CardContent>
          </Card>
        </section>

        <div className="flex justify-between">
          <Link href="/module-5"><Button variant="outline" className="rounded-full px-6">Zurück</Button></Link>
          <Link href="/module-7">
            <Button size="lg" className="rounded-full px-8">
              Weiter zu Modul 7 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
