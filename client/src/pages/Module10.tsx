import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, ClipboardList, HeartHandshake } from "lucide-react";
import { Link } from "wouter";

export default function Module10() {
  return (
    <div className="flex flex-col gap-8 pb-12">
      <div className="relative w-full h-[260px] overflow-hidden bg-primary flex items-center justify-center">
        <HeartHandshake className="absolute h-72 w-72 text-white/10" strokeWidth={1} />
        <div className="text-center text-white px-4 relative z-10">
          <span className="uppercase tracking-widest text-sm font-bold mb-2 block opacity-80">Modul 10</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold drop-shadow-md">Sterbebegleitung & palliative Grundpflege</h1>
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
                <li>die Haltung der palliativen Pflege beschreiben.</li>
                <li>Anzeichen des nahenden Sterbens erkennen und ins Berichteblatt eintragen.</li>
                <li>palliative Grundpflege in den Bereichen Mund, Positionierung, Atmung, Schmerz angemessen umsetzen.</li>
                <li>Angehörige einfühlsam begleiten.</li>
                <li>Ihre eigenen Gefühle wahrnehmen und Unterstützung im Team annehmen.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-10">
          <p className="text-base text-muted-foreground leading-relaxed">
            Sterben gehört zum Leben – und in der Pflege fest verankert. Palliative Pflege heißt:
            wir heilen nicht mehr, aber wir lassen niemanden allein. Die Würde des Menschen, die Linderung
            von Beschwerden und die Begleitung der Angehörigen stehen im Mittelpunkt. Das Konzept ist
            <strong> Hospiz- und Palliativkultur</strong> – nicht eine Spezialaufgabe, sondern eine Haltung.
          </p>
        </section>

        <Tabs defaultValue="signs" className="w-full mb-10">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="signs">Anzeichen</TabsTrigger>
            <TabsTrigger value="care">Palliative Pflege</TabsTrigger>
            <TabsTrigger value="family">Angehörige</TabsTrigger>
            <TabsTrigger value="self">Sie selbst</TabsTrigger>
          </TabsList>

          <TabsContent value="signs">
            <Card>
              <CardContent className="pt-6 space-y-3 text-sm">
                <p className="font-bold">Mögliche Anzeichen, dass das Sterben naht</p>
                <ul className="list-disc pl-5 space-y-0.5">
                  <li>Deutlich nachlassendes Trinken und Essen über Tage</li>
                  <li>Zunehmende Schwäche, viel Schlaf, Rückzug</li>
                  <li>Veränderte Atmung: flach, unregelmäßig, „rasselnd" (kann beunruhigend klingen, ist für die sterbende Person meist nicht belastend)</li>
                  <li>Kalt werdende Hände und Füße, Marmorierung der Haut (livide Flecken)</li>
                  <li>Veränderte Gesichtszüge (eingefallenes Gesicht, „Facies hippocratica")</li>
                  <li>Verminderte Urinausscheidung, dunkler Urin</li>
                  <li>Zunehmend kürzere oder fehlende Reaktion auf Ansprache</li>
                </ul>
                <p className="bg-blue-50 border-l-4 border-blue-500 p-2 mt-2">
                  Eintrag im Berichteblatt: was wann beobachtet, ggf. Pflegefachkraft, Hausarzt, ambulanter
                  Hospizdienst und Angehörige informieren – nach Hausstandard.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="care">
            <Card>
              <CardContent className="pt-6 space-y-3 text-sm">
                <p>Die Pflege wird sanfter, kleiner, individueller. Was die Person gerade braucht, ist
                  wichtiger als jeder Plan.</p>

                <p className="font-bold">Mundpflege – das Wichtigste am Lebensende</p>
                <ul className="list-disc pl-5 space-y-0.5">
                  <li>Mehrmals stündlich anbieten: Lippen befeuchten, Mund mit Wattestäbchen oder Mundpflegestäbchen feucht halten.</li>
                  <li>Lieblingsgetränk nutzen (Tee, Kaffee, Bier, Wein – nach Biographie).</li>
                  <li>Kein Mundspülen mehr (Aspirationsgefahr) – nur befeuchten.</li>
                  <li>Lippen mit Pflegestift dünn fetten.</li>
                  <li>Mehr in <Link href="/module-5" className="text-primary underline">Modul 5</Link>.</li>
                </ul>

                <p className="font-bold mt-2">Positionierung</p>
                <ul className="list-disc pl-5 space-y-0.5">
                  <li>Sehr behutsam, nur wenn nötig – jede Bewegung kann anstrengen.</li>
                  <li>Mikropositionierungen mit Tüchern oder Kissen statt großer Wendungen.</li>
                  <li>Druckstellen weiter beobachten, aber Komfort wichtiger als „idealer" Positionswechsel.</li>
                  <li>Erhöhter Oberkörper bei rasselnder Atmung kann erleichtern.</li>
                </ul>

                <p className="font-bold mt-2">Atmung & Schmerz</p>
                <ul className="list-disc pl-5 space-y-0.5">
                  <li>Bei Atemnot: Fenster öffnen / leichten Luftzug erzeugen, Oberkörper hoch, ggf. Ventilator – nicht panisch werden.</li>
                  <li>„Rasselnde" Atmung – Pflegefachkraft informieren (ggf. medikamentöse Anpassung); meist hilft Positionswechsel; Absaugen vermeiden, da meist mehr belastend als hilfreich.</li>
                  <li>Schmerzen ernst nehmen, auch nonverbale Anzeichen (Mimik, Stöhnen, Anspannung) – sofort an die Pflegefachkraft.</li>
                </ul>

                <p className="font-bold mt-2">Würde & Sinneserfahrung</p>
                <ul className="list-disc pl-5 space-y-0.5">
                  <li>Vertraute Stimme, leise Musik, gedämpftes Licht – Hören ist oft der Sinn, der am längsten bleibt.</li>
                  <li>Berührung mit warmen Händen, Hand halten.</li>
                  <li>Vertrauter Geruch (Lieblingscreme, Kissen von Zuhause).</li>
                  <li>Spirituelle Begleitung anbieten – bei Bedarf Seelsorge informieren.</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="family">
            <Card>
              <CardContent className="pt-6 space-y-3 text-sm">
                <p>
                  Angehörige sind in dieser Phase oft erschöpft, ängstlich, manchmal überfordert. Sie sind
                  keine „Störung", sondern Teil der Begleitung.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Sich vorstellen, Namen merken, mit Ruhe begegnen.</li>
                  <li>Aktiv informieren, was passiert (auch ohne dramatische Worte: „Frau M. atmet im Moment ruhig.").</li>
                  <li>Anbieten, einbezogen zu werden: Hand halten, Mund befeuchten, Stirn streichen – das tut beiden gut.</li>
                  <li>Übernachtungsmöglichkeit, Getränke, eine ruhige Ecke nach Hausstandard anbieten.</li>
                  <li>Schweigepflicht: nicht über Diagnosen oder andere Bewohner:innen sprechen.</li>
                  <li>Eigene Grenzen kennen – was Angehörige fragen, das nicht in Ihre Zuständigkeit fällt, an die Pflegefachkraft, den Hausarzt oder die Seelsorge weiterleiten.</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="self">
            <Card>
              <CardContent className="pt-6 space-y-3 text-sm">
                <p>
                  Sterbebegleitung ist intensiv. Es ist normal, traurig zu sein, sich erschöpft zu fühlen
                  oder hilflos. Diese Gefühle gehören dazu – sie sind kein Zeichen mangelnder Professionalität.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Pausen bewusst nehmen, kurz raus, durchatmen.</li>
                  <li>Mit dem Team sprechen – nicht alles allein tragen.</li>
                  <li>Nach einem Sterbefall ein bewusster Abschluss: kurzer Moment am Bett, Hände waschen, ggf. ein Gebet, eine Kerze, ein Eintrag in das Erinnerungs- oder Kondolenzbuch (Hausstandard).</li>
                  <li>Bei wiederkehrender Belastung: Supervision oder Gespräch mit der Pflegedienstleitung – das ist kein Versagen, sondern Selbstfürsorge.</li>
                </ul>
                <p className="bg-primary/5 border-l-4 border-primary p-2 mt-2 italic">
                  „Ich kann nicht heilen. Aber ich kann dabei sein."
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <section className="mb-10">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="font-serif text-lg font-bold text-primary mb-2">Reflexion für den Alltag</h3>
              <p className="text-sm text-muted-foreground italic">
                „Was war für mich bisher der prägendste Moment in der Begleitung eines sterbenden Menschen –
                und was hat mir selbst dabei geholfen?"
              </p>
            </CardContent>
          </Card>
        </section>

        <div className="flex justify-between">
          <Link href="/module-9"><Button variant="outline" className="rounded-full px-6">Zurück</Button></Link>
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
