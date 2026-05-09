import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, ClipboardList, Move } from "lucide-react";
import { Link } from "wouter";

export default function Module8() {
  return (
    <div className="flex flex-col gap-8 pb-12">
      <div className="relative w-full h-[260px] overflow-hidden bg-primary flex items-center justify-center">
        <Move className="absolute h-72 w-72 text-white/10" strokeWidth={1} />
        <div className="text-center text-white px-4 relative z-10">
          <span className="uppercase tracking-widest text-sm font-bold mb-2 block opacity-80">Modul 8</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold drop-shadow-md">Positionierung & Transfer</h1>
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
                <li>die Bedeutung der Positionierung für Dekubitus-, Pneumonie- und Kontrakturprophylaxe erklären.</li>
                <li>einfache Positionswechsel und Mikropositionierungen nach Maßnahmenplan durchführen.</li>
                <li>Transfers (Bett – Stuhl – Toilette) ressourcenorientiert begleiten.</li>
                <li>die Konzepte Kinästhetik und Bobath grob unterscheiden.</li>
                <li>rückenschonend für sich selbst arbeiten und Ihren eigenen Körper schützen.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-10">
          <p className="text-base text-muted-foreground leading-relaxed">
            Bewegung ist Leben. Wer liegt, bekommt Druckstellen, weniger Lungenbelüftung, steifere Gelenke
            und verliert Muskulatur. Gleichzeitig schützt richtiges Bewegen <strong>auch Sie</strong> –
            Pflegekräfte gehören zu den Berufsgruppen mit der höchsten Rückenbelastung. Die Prinzipien
            aus Kinästhetik und Bobath helfen beidseitig: dem bewohnenden Menschen und Ihnen.
          </p>
        </section>

        <Tabs defaultValue="position" className="w-full mb-10">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="position">Positionierung</TabsTrigger>
            <TabsTrigger value="transfer">Transfer</TabsTrigger>
            <TabsTrigger value="concepts">Kinästhetik & Bobath</TabsTrigger>
            <TabsTrigger value="self">Eigenschutz</TabsTrigger>
          </TabsList>

          <TabsContent value="position">
            <Card>
              <CardContent className="pt-6 space-y-3 text-sm">
                <p>
                  Positionierung ist <strong>Vorbehalt der Pflegefachkraft</strong> in der Planung. Sie führen
                  die im Maßnahmenplan vorgegebene Positionierung durch und beobachten dabei.
                </p>
                <p className="font-bold">Wichtige Positionierungsformen (Überblick)</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>30°-Schräglage:</strong> Standardlage zur Dekubitusprophylaxe – Becken und Schulter werden mit Kissen unterlegt, das Gesäß bleibt frei.</li>
                  <li><strong>Mikropositionierung:</strong> kleine Verschiebungen (2–5 cm) durch Tuch oder Hand­tuch – sehr wirksam, wenig belastend, häufig anwendbar.</li>
                  <li><strong>V-A-T-I-Positionierung:</strong> mit Kissen geformte Buchstaben unter dem Rücken zur Atemunterstützung.</li>
                  <li><strong>Hochpositionierung des Oberkörpers</strong> bei Atemnot, nach den Mahlzeiten (Aspirations­schutz).</li>
                  <li><strong>Beine hoch</strong> bei Ödemen.</li>
                </ul>
                <p className="font-bold mt-2">Grundprinzipien</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Faltenfreie Unterlage (Knitter erzeugt Druckstellen).</li>
                  <li>Knöcherne Vorsprünge (Steiß, Fersen, Ellenbogen, Schulterblatt) beobachten und entlasten.</li>
                  <li>Positionswechsel-Intervall ist <em>individuell</em> – nicht starr „alle 2 Stunden", sondern nach Risikoeinschätzung der Pflegefachkraft.</li>
                  <li>Bei jedem Positionswechsel: Hautinspektion (Fingertest), Kontrolle der Inkontinenzversorgung, Komfort.</li>
                  <li>Eintrag im Positionierungsplan/Berichteblatt nach Hausstandard.</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transfer">
            <Card>
              <CardContent className="pt-6 space-y-3 text-sm">
                <p className="font-bold">Vorbereitung jedes Transfers</p>
                <ul className="list-disc pl-5 space-y-0.5">
                  <li>Was kann die Person noch selbst? – Beobachten, fragen, ausprobieren.</li>
                  <li>Schuhe statt Strümpfe (Rutschgefahr), Bremsen feststellen, Wege frei.</li>
                  <li>Hilfsmittel bereit: Drehscheibe, Rutschbrett, Lifter, Bettleiter.</li>
                  <li>Bewohner:in informieren, Tempo abstimmen, Kommando vereinbaren („Auf 3 …").</li>
                </ul>
                <p className="font-bold mt-2">Sicherer Stand-Transfer (Bett → Stuhl)</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Bett auf Höhe absenken, sodass die Füße der bewohnenden Person sicheren Bodenkontakt haben.</li>
                  <li>Bewohner:in bittet sich an die Bettkante zu setzen (oder anleiten); Beine nach unten.</li>
                  <li>Bewohner:in macht „Nase über Knie" – das verlagert das Gewicht nach vorne und erleichtert das Aufstehen.</li>
                  <li>Pflegekraft steht seitlich, Knie an Knie als Gegenhalt; gemeinsam aufstehen.</li>
                  <li>Drehung um 90°, langsam absetzen, Arm- und Sitzhaltung prüfen.</li>
                </ol>
                <p className="bg-blue-50 border-l-4 border-blue-500 p-2 mt-2">
                  Wenn die Person nicht selbstständig stehen kann: <strong>Lifter</strong> einsetzen –
                  niemals zu zweit „heben". Bei Unsicherheit Pflegefachkraft hinzuziehen.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="concepts">
            <Card>
              <CardContent className="pt-6 space-y-3 text-sm">
                <div>
                  <p className="font-bold text-primary">Kinästhetik (Hatch & Maietta)</p>
                  <p className="text-muted-foreground">
                    Bewegungslehre, die das eigene Körpergefühl der bewohnenden Person nutzt. Statt zu
                    heben oder zu tragen, wird die Bewegung in kleinen Schritten <em>geführt</em> –
                    durch Druck und Zug, nicht durch Hochheben. Das aktiviert die Person und schont
                    Ihren Rücken.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-primary">Bobath-Konzept</p>
                  <p className="text-muted-foreground">
                    Ursprünglich für Menschen nach Schlaganfall entwickelt. Die <em>betroffene Seite</em>
                    wird bewusst einbezogen, nicht „weggepackt". Wahrnehmungsförderung, symmetrische
                    Positionierung, Mitnahme der schwächeren Seite bei Bewegungen.
                  </p>
                </div>
                <p className="bg-yellow-50 border-l-4 border-yellow-400 p-2 mt-2">
                  Diese Konzepte sind komplex und werden im Hause durch Praxis­anleitungen vermittelt.
                  In dieser Schulung geht es darum, die <strong>Begriffe und Grundideen</strong> zu kennen.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="self">
            <Card>
              <CardContent className="pt-6 space-y-2 text-sm">
                <p>Pflegekräfte haben eines der höchsten Risiken für Rückenleiden – Eigenschutz ist
                  kein Egoismus, sondern Teil professioneller Pflege.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Bett und Arbeitshöhe immer anpassen (Pflegekraft-Hüfthöhe).</li>
                  <li>Aus den Beinen, nicht aus dem Rücken arbeiten – Knie beugen.</li>
                  <li>Niemals heben, wenn schieben, ziehen oder rollen geht (Kinästhetik!).</li>
                  <li>Hilfsmittel nutzen: Rutschbrett, Drehscheibe, Lifter, Aufrichtsystem im Bett.</li>
                  <li>Lasten nahe am Körper, gerader Rücken, Drehbewegungen vermeiden.</li>
                  <li>Bei zwei Personen: gemeinsames Kommando, Aufgaben absprechen.</li>
                  <li>Eigene Erschöpfung ernst nehmen – lieber Pause oder zweite Person hinzuziehen.</li>
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
                „Bei welchem Transfer heute habe ich aus dem Rücken gehoben, obwohl ich aus den Beinen
                hätte arbeiten können – und welches Hilfsmittel hätte ich nutzen können?"
              </p>
            </CardContent>
          </Card>
        </section>

        <div className="flex justify-between">
          <Link href="/module-7"><Button variant="outline" className="rounded-full px-6">Zurück</Button></Link>
          <Link href="/module-9">
            <Button size="lg" className="rounded-full px-8">
              Weiter zu Modul 9 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
