import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Brain, ClipboardList } from "lucide-react";
import { Link } from "wouter";

export default function Module9() {
  return (
    <div className="flex flex-col gap-8 pb-12">
      <div className="relative w-full h-[260px] overflow-hidden bg-primary flex items-center justify-center">
        <Brain className="absolute h-72 w-72 text-white/10" strokeWidth={1} />
        <div className="text-center text-white px-4 relative z-10">
          <span className="uppercase tracking-widest text-sm font-bold mb-2 block opacity-80">Modul 9</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold drop-shadow-md">Menschen mit Demenz</h1>
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
                <li>Demenz von „normaler Vergesslichkeit" und Delir grob unterscheiden.</li>
                <li>Validierende Kommunikation nach Naomi Feil als Haltung beschreiben.</li>
                <li>Biographiewissen in der Pflege gezielt nutzen.</li>
                <li>Mit herausforderndem Verhalten (Abwehr, Aggression, Weglauftendenz) deeskalierend umgehen.</li>
                <li>Plötzliche Verhaltensänderungen als Frühzeichen erkennen und melden.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-10">
          <p className="text-base text-muted-foreground leading-relaxed">
            Die Mehrheit der Bewohner:innen in der stationären Altenpflege lebt mit einer Demenz.
            Pflege gelingt dann am besten, wenn wir nicht versuchen, die Person an die Welt anzupassen,
            sondern unsere Pflege an ihre Welt. „Verhalten" ist meist <strong>Kommunikation</strong> – ein
            Hinweis auf ein Bedürfnis, das wir noch nicht verstanden haben.
          </p>
        </section>

        <Tabs defaultValue="basics" className="w-full mb-10">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="basics">Grundlagen</TabsTrigger>
            <TabsTrigger value="communication">Kommunikation</TabsTrigger>
            <TabsTrigger value="biography">Biographie</TabsTrigger>
            <TabsTrigger value="challenge">Herausforderndes Verhalten</TabsTrigger>
          </TabsList>

          <TabsContent value="basics">
            <Card>
              <CardContent className="pt-6 space-y-3 text-sm">
                <p>
                  <strong>Demenz</strong> ist ein Sammelbegriff für verschiedene Erkrankungen, die das
                  Gedächtnis, das Denken, die Sprache und die Persönlichkeit betreffen. Sie ist
                  fortschreitend, nicht heilbar – aber gut begleitbar.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="border rounded-lg p-3">
                    <p className="font-bold text-primary mb-1">Normale Vergesslichkeit</p>
                    <p className="text-muted-foreground">Vergisst Dinge, erinnert sich aber später wieder; weiß, dass etwas vergessen wurde.</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <p className="font-bold text-primary mb-1">Demenz</p>
                    <p className="text-muted-foreground">Schleichend, fortschreitend; verliert biografische Inhalte; Sprach-, Orientierungs-, Persönlichkeits­veränderungen.</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <p className="font-bold text-primary mb-1">Delir</p>
                    <p className="text-muted-foreground">Akut, oft über Stunden bis wenige Tage entstanden; meist medizinische Ursache (Infekt, Medikamente, Exsikkose). Sofort melden!</p>
                  </div>
                </div>
                <p className="bg-yellow-50 border-l-4 border-yellow-400 p-2 mt-2">
                  Eine plötzliche, neue Verwirrtheit ist KEINE „Verschlechterung der Demenz", sondern oft
                  ein <strong>Delir</strong> mit medizinisch behandelbarer Ursache (Harnwegsinfekt,
                  Lungenentzündung, Hypoglykämie, Schmerzen). Sofort an die Pflegefachkraft.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="communication">
            <Card>
              <CardContent className="pt-6 space-y-3 text-sm">
                <p>
                  <strong>Validation nach Naomi Feil</strong> bedeutet: das Gefühl der Person ernst nehmen,
                  nicht die Realität korrigieren. Wer mit der Mutter sprechen will (auch wenn die Mutter
                  längst verstorben ist), braucht <em>Sicherheit und Beziehung</em> – nicht eine Zurecht­weisung.
                </p>
                <p className="font-bold">Praktische Kommunikationsregeln</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Augenhöhe und Augenkontakt suchen, mit Namen ansprechen.</li>
                  <li>Sich vorstellen („Ich bin Frau Müller, ich helfe Ihnen heute beim Waschen.") – auch wenn man das gestern schon getan hat.</li>
                  <li>Kurze, einfache Sätze, ein Gedanke pro Satz, langsam sprechen.</li>
                  <li>Eine Aufforderung nach der anderen.</li>
                  <li>Berührung mit Erlaubnis, ruhige Stimme, freundlicher Gesichtsausdruck.</li>
                  <li>Nicht korrigieren, sondern Gefühl spiegeln: „Sie vermissen Ihre Mutter, das verstehe ich."</li>
                  <li>In die Welt der Person eingehen – ohne zu lügen.</li>
                  <li>Routine und Rituale geben Sicherheit (Begrüßung, Reihenfolge in der Pflege, vertraute Gegenstände).</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="biography">
            <Card>
              <CardContent className="pt-6 space-y-3 text-sm">
                <p>
                  <strong>Biographiearbeit</strong> ist nicht nur Erinnerungs­pflege – sie ist Werkzeug
                  zur sicheren Pflege. Wer war die Person? Welcher Beruf, welche Kinder, welcher Glaube,
                  welche Lieblingsmusik? Was beruhigt, was triggert?
                </p>
                <p className="font-bold">Wo finden Sie Biographie-Informationen?</p>
                <ul className="list-disc pl-5 space-y-0.5">
                  <li>Im Biographiebogen / der Biographiekarte des Wohnbereichs (Pflichtteil im Strukturmodell).</li>
                  <li>Im Gespräch mit Angehörigen – aktiv fragen.</li>
                  <li>In persönlichen Gegenständen im Zimmer (Fotos, Bücher).</li>
                  <li>Im Alltag durch genaues Hinhören – auch wenn die Person die Frage nicht mehr beantworten kann, äußert sie oft trotzdem Vertrautes.</li>
                </ul>
                <p className="font-bold mt-2">Beispiele für die Anwendung</p>
                <ul className="list-disc pl-5 space-y-0.5">
                  <li>Eine Bewohnerin, die früher Schneiderin war, beruhigt sich beim Sortieren von Stoffen.</li>
                  <li>Ein Bewohner, der Bauer war, ist morgens früh wach – das ist nicht „pathologisch", sondern Lebensrhythmus.</li>
                  <li>Eine Person, die aus religiöser Familie kommt, freut sich über das Vaterunser oder ein vertrautes Lied.</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="challenge">
            <Card>
              <CardContent className="pt-6 space-y-3 text-sm">
                <p>
                  Verhalten, das wir als „herausfordernd" erleben – Schreien, Schlagen, Weglaufen,
                  Ablehnen der Pflege – ist meist Ausdruck eines Bedürfnisses oder einer Belastung,
                  die wir nicht erkannt haben. Erste Frage: <strong>Was ist die Ursache?</strong>
                </p>
                <p className="font-bold">Häufige Ursachen prüfen</p>
                <ul className="list-disc pl-5 space-y-0.5">
                  <li>Schmerzen (auch nonverbal: Mimik, Stöhnen)</li>
                  <li>Harndrang, Stuhldrang</li>
                  <li>Hunger, Durst, Über- oder Unterzuckerung</li>
                  <li>Zu warm / zu kalt, drückende Kleidung</li>
                  <li>Reizüberflutung (laute Umgebung, viele Personen, Hektik)</li>
                  <li>Unterforderung, Langeweile</li>
                  <li>Angst, fremde Umgebung, fremde Person zu nah</li>
                  <li>Akute Erkrankung (Delir, siehe oben)</li>
                </ul>
                <p className="font-bold mt-2">Deeskalation</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Eigenen Atemrhythmus ruhig halten, Stimme senken.</li>
                  <li>Sicheren Abstand wahren, sich nicht von oben über die Person beugen.</li>
                  <li>Ablenkung anbieten (Lieblingsmusik, vertrautes Foto, kurzer Spaziergang).</li>
                  <li>Wenn Pflege im Moment nicht möglich ist: zurückziehen, später wieder anbieten – dokumentieren und Pflegefachkraft informieren.</li>
                  <li>Bei Selbst- oder Fremdgefährdung: sofort Hilfe holen, niemals alleine festhalten oder fixieren (siehe FEM in <Link href="/module-1" className="text-primary underline">Modul 1</Link>).</li>
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
                „Welches scheinbar ‚schwierige' Verhalten habe ich heute erlebt – und welches ungestillte
                Bedürfnis könnte dahinter gestanden haben?"
              </p>
            </CardContent>
          </Card>
        </section>

        <div className="flex justify-between">
          <Link href="/module-8"><Button variant="outline" className="rounded-full px-6">Zurück</Button></Link>
          <Link href="/module-10">
            <Button size="lg" className="rounded-full px-8">
              Weiter zu Modul 10 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
