import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, ArrowRight, CheckCircle, ClipboardList, Heart, Lock, Scale, Shield, UserCheck } from "lucide-react";
import { Link } from "wouter";

export default function Module1() {
  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* Header Image */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <img
          src="/images/communication-care.jpg"
          alt="Kommunikation in der Pflege"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="uppercase tracking-widest text-sm font-bold mb-2 block opacity-80">Modul 1</span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold drop-shadow-md">Grundlagen, Rolle & Pflegeprozess</h1>
          </div>
        </div>
      </div>

      <div className="container max-w-4xl mx-auto px-4">

        {/* Lernziele */}
        <section className="mb-10">
          <Card className="bg-secondary/20 border-none shadow-sm">
            <CardContent className="pt-6">
              <h3 className="font-serif text-xl font-bold text-primary mb-3 flex items-center gap-2">
                <ClipboardList className="h-5 w-5" />
                Lernziele
              </h3>
              <p className="text-sm text-muted-foreground mb-3">Nach Bearbeitung dieses Moduls können Sie …</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start gap-2 text-muted-foreground"><CheckCircle className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" /> Ihre Rolle als Pflegehilfskraft im Pflegeteam einordnen.</li>
                <li className="flex items-start gap-2 text-muted-foreground"><CheckCircle className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" /> Grundpflege von Behandlungspflege unterscheiden.</li>
                <li className="flex items-start gap-2 text-muted-foreground"><CheckCircle className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" /> Den Pflegeprozess (6 Schritte) in eigenen Worten erklären.</li>
                <li className="flex items-start gap-2 text-muted-foreground"><CheckCircle className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" /> Schweigepflicht und Hygieneregeln im Alltag anwenden.</li>
                <li className="flex items-start gap-2 text-muted-foreground"><CheckCircle className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" /> Erkennen, wann Sie eine Pflegefachkraft hinzuziehen müssen.</li>
                <li className="flex items-start gap-2 text-muted-foreground"><CheckCircle className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" /> Aktivierende Pflege als Haltung beschreiben.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Einführung */}
        <section className="mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed font-light mb-6">
            Die Grundpflege ist weit mehr als Waschen und Anziehen. Sie ist die Basis für das Wohlbefinden unserer Bewohner:innen,
            ein zentraler Moment für Beziehungsaufbau – und sie hat einen klaren rechtlichen Rahmen.
            In diesem Modul lernen Sie, wo Ihre Rolle beginnt und wo sie endet.
          </p>
        </section>

        {/* Hauptinhalt mit Tabs */}
        <Tabs defaultValue="rolle" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="rolle">Ihre Rolle</TabsTrigger>
            <TabsTrigger value="prozess">Pflegeprozess</TabsTrigger>
            <TabsTrigger value="recht">Recht & Hygiene</TabsTrigger>
            <TabsTrigger value="haltung">Haltung</TabsTrigger>
          </TabsList>

          {/* Tab 1: Rolle */}
          <TabsContent value="rolle">
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-serif text-xl font-bold text-primary mb-3 flex items-center gap-2">
                    <UserCheck className="h-5 w-5" />
                    Was darf eine Pflegehilfskraft – und was nicht?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    In Deutschland sind bestimmte Tätigkeiten ausgebildeten Pflegefachkräften vorbehalten
                    (sogenannte <strong>Vorbehaltsaufgaben</strong> nach § 4 Pflegeberufegesetz). Andere Tätigkeiten dürfen
                    Pflegehilfskräfte nach Anleitung und schriftlicher Delegation übernehmen.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Typische Aufgaben
                      </h4>
                      <ul className="text-sm text-green-900 space-y-1 list-disc pl-5">
                        <li>Körperpflege (Waschen, Mund-, Haarpflege)</li>
                        <li>Hilfe beim An- und Auskleiden</li>
                        <li>Hilfe bei Nahrungs- und Flüssigkeitsaufnahme</li>
                        <li>Lagern, Mobilisieren, Transfer (nach Anleitung)</li>
                        <li>Beobachten und Beobachtungen weitergeben</li>
                        <li>Begleitung, Zuwendung, Tagesstruktur</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        Nicht ohne Pflegefachkraft
                      </h4>
                      <ul className="text-sm text-red-900 space-y-1 list-disc pl-5">
                        <li>Pflegeplanung und -evaluation (Vorbehalt)</li>
                        <li>Erst-Anamnese, Pflegediagnose</li>
                        <li>Wundversorgung, Verbandwechsel</li>
                        <li>Medikamentengabe (außer per Delegation)</li>
                        <li>Injektionen, Katheterisieren, Sondenkost</li>
                        <li>Behandlungspflege ohne Anordnung</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-yellow-900">
                    <strong>Goldene Regel:</strong> Wenn Sie unsicher sind, ob Sie eine Tätigkeit übernehmen dürfen –
                    fragen Sie die zuständige Pflegefachkraft. Nicht durchführen ist immer besser als unsicher durchführen.
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-serif text-xl font-bold text-primary mb-3 flex items-center gap-2">
                    <Scale className="h-5 w-5" />
                    Grundpflege vs. Behandlungspflege
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-bold mb-2">Grundpflege (SGB XI § 14/15)</h4>
                      <p className="text-sm text-muted-foreground">
                        Unterstützung in den <strong>Aktivitäten des täglichen Lebens</strong>:
                        Körperpflege, Ernährung, Mobilität, Ausscheidung. Wird über die Pflegeversicherung
                        finanziert. Pflegehilfskräfte sind hier zentrale Akteure.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-bold mb-2">Behandlungspflege (SGB V § 37)</h4>
                      <p className="text-sm text-muted-foreground">
                        <strong>Ärztlich verordnete</strong> Maßnahmen: Medikamentengabe, Injektionen, Verbände,
                        Wundversorgung, Blutzucker- und Blutdruckmessung. Wird über die Krankenkasse
                        finanziert. Erfordert Delegation oder Pflegefachkraft.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab 2: Pflegeprozess */}
          <TabsContent value="prozess">
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-serif text-xl font-bold text-primary mb-4">Der Pflegeprozess in 6 Schritten</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Pflege geschieht nicht zufällig. Sie folgt einem systematischen Prozess
                    (nach Fiechter / Meier). Pflegehilfskräfte arbeiten besonders in Schritt&nbsp;1
                    (Beobachtung) und Schritt&nbsp;5 (Durchführung) – die Steuerung liegt bei der Pflegefachkraft.
                  </p>

                  <ol className="space-y-3 mt-6">
                    {[
                      { n: 1, t: "Informationssammlung", d: "Wer ist die Person? Biografie, Bedürfnisse, Vorlieben, Vorerkrankungen, aktuelle Situation. Hier helfen Pflegehilfskräfte mit ihren Beobachtungen mit." },
                      { n: 2, t: "Probleme & Ressourcen erkennen", d: "Was ist schwierig (Probleme), was kann die Person noch (Ressourcen)? Beides ist gleich wichtig." },
                      { n: 3, t: "Pflegeziele festlegen", d: "Was wollen wir erreichen? – Vorbehaltsaufgabe der Pflegefachkraft." },
                      { n: 4, t: "Maßnahmen planen", d: "Wer macht was, wann, wie? Steht im Pflegeplan – Sie lesen ihn und führen ihn aus." },
                      { n: 5, t: "Maßnahmen durchführen", d: "Hier sind Sie aktiv: Körperpflege, Aktivierung, Begleitung, Beobachtung." },
                      { n: 6, t: "Evaluation", d: "Hat es gewirkt? Müssen wir den Plan anpassen? Ihre Rückmeldungen sind dafür unverzichtbar." }
                    ].map((s) => (
                      <li key={s.n} className="flex items-start gap-4 border rounded-xl p-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mt-0.5">{s.n}</div>
                        <div>
                          <h4 className="font-bold">{s.t}</h4>
                          <p className="text-sm text-muted-foreground">{s.d}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-serif text-xl font-bold text-primary mb-3">AEDL – die 13 Aktivitäten</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    In der deutschen Altenpflege wird häufig nach den <strong>Aktivitäten und existenziellen
                    Erfahrungen des Lebens (AEDL/ABEDL) nach Monika Krohwinkel</strong> gearbeitet.
                    Der Pflegebogen Ihres Wohnbereichs ist meist danach aufgebaut. Die 13 Aktivitäten:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                    {[
                      "Kommunizieren können",
                      "Sich bewegen können",
                      "Vitale Funktionen aufrechterhalten",
                      "Sich pflegen können",
                      "Essen und Trinken",
                      "Ausscheiden können",
                      "Sich kleiden können",
                      "Ruhen und Schlafen",
                      "Sich beschäftigen",
                      "Sich als Frau/Mann fühlen",
                      "Sichere Umgebung sicherstellen",
                      "Soziale Bereiche sichern",
                      "Mit existenziellen Erfahrungen umgehen"
                    ].map((a, i) => (
                      <div key={i} className="bg-secondary/20 rounded-lg p-2 flex items-center gap-2">
                        <span className="text-primary font-bold w-5 text-right flex-shrink-0">{i + 1}.</span>
                        <span>{a}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-serif text-xl font-bold text-primary mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Was muss ich sofort melden?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Bestimmte Beobachtungen gehören <strong>unverzüglich</strong> an die zuständige Pflegefachkraft –
                    nicht erst am Schichtende:
                  </p>
                  <ul className="text-sm space-y-1.5 list-disc pl-5 text-muted-foreground">
                    <li>Plötzliche Verwirrtheit, einseitige Lähmung, hängender Mundwinkel, Sprachstörung (<strong>FAST</strong> – Schlaganfall-Verdacht)</li>
                    <li>Atemnot, blaue Lippen, Brustschmerz</li>
                    <li>Sturz – auch wenn die Person scheinbar unverletzt ist</li>
                    <li>Neue, nicht-wegdrückbare Hautrötung oder offene Wunde</li>
                    <li>Zittern, kalter Schweiß, Bewusstseinstrübung (Hypoglykämie?)</li>
                    <li>Neue oder ungewöhnlich starke Schmerzäußerungen</li>
                    <li>Verweigerung von Essen/Trinken über mehrere Mahlzeiten</li>
                    <li>Schwarzer/blutiger Stuhl, Blut im Urin, anhaltender Durchfall</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab 3: Recht & Hygiene */}
          <TabsContent value="recht">
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-serif text-xl font-bold text-primary mb-3 flex items-center gap-2">
                    <Lock className="h-5 w-5" />
                    Schweigepflicht & Datenschutz
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Alles, was Sie über Bewohner:innen erfahren – Diagnosen, Lebensumstände, Beobachtungen –
                    unterliegt der <strong>Schweigepflicht (§ 203 StGB)</strong> und der <strong>DSGVO</strong>.
                  </p>
                  <ul className="text-sm space-y-2 list-disc pl-5 text-muted-foreground">
                    <li>Keine Weitergabe an Außenstehende, auch nicht an Familienangehörige ohne ausdrückliche Erlaubnis.</li>
                    <li>Keine Gespräche über Bewohner:innen im Aufzug, im Bus oder in sozialen Medien.</li>
                    <li>Pflegedokumentation gehört nicht offen herumzuliegen – auch nicht im Pausenraum.</li>
                    <li>Fotos nur mit schriftlicher Einwilligung.</li>
                    <li>Verstöße können arbeitsrechtliche und strafrechtliche Folgen haben.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-serif text-xl font-bold text-primary mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Hände­hygiene – die 5 Momente der WHO
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Die wichtigste Einzelmaßnahme zur Infektionsprävention ist die <strong>hygienische
                    Händedesinfektion</strong> (3–5 ml, 30 Sekunden einreiben). Sie ist immer dann durchzuführen:
                  </p>
                  <ol className="text-sm space-y-1.5 list-decimal pl-5 text-muted-foreground">
                    <li><strong>Vor</strong> Bewohnerkontakt</li>
                    <li><strong>Vor</strong> aseptischer Tätigkeit (z. B. Wundkontakt, Katheterpflege)</li>
                    <li><strong>Nach</strong> Kontakt mit potenziell infektiösem Material (Blut, Stuhl, Urin)</li>
                    <li><strong>Nach</strong> Bewohnerkontakt</li>
                    <li><strong>Nach</strong> Kontakt mit der Bewohnerumgebung (Bett, Nachttisch, Türgriff)</li>
                  </ol>
                  <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-3 text-sm text-blue-900">
                    <strong>Handschuhe ersetzen die Händedesinfektion nicht.</strong> Sie kommen nur bei Kontakt mit
                    Körperflüssigkeiten, Schleimhäuten oder nicht-intakter Haut zum Einsatz – nicht routinemäßig
                    bei der Waschung intakter Haut.
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-serif text-xl font-bold text-primary mb-3">Dokumentation – kurz, klar, sachlich</h3>
                  <ul className="text-sm space-y-2 list-disc pl-5 text-muted-foreground">
                    <li><strong>Was</strong> haben Sie beobachtet? (Tatsachen, keine Vermutungen)</li>
                    <li><strong>Wann</strong> ist es aufgetreten? (Datum, Uhrzeit)</li>
                    <li><strong>Wie</strong> hat die Bewohner:in reagiert?</li>
                    <li>Welche Maßnahmen haben Sie ergriffen oder veranlasst?</li>
                    <li>An wen haben Sie es weitergegeben?</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3 italic">
                    Beispiel: „08:30 Uhr – beim Waschen 2 cm große, nicht wegdrückbare Hautrötung am Steißbein
                    festgestellt. Pflegefachkraft Frau Müller informiert."
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab 4: Haltung */}
          <TabsContent value="haltung">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">Würde & Intimsphäre</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Grundpflege ist intim. Wir betreten den Lebensraum eines Menschen, wir sehen seinen Körper,
                  wir helfen bei den persönlichsten Verrichtungen. Daher gilt: anklopfen, ankündigen, jeden Schritt
                  erklären, nur so viel Körperfläche aufdecken wie nötig, Tür schließen, Mitbewohner:innen
                  aus dem Raum bitten. Auch bei Menschen mit Demenz oder reduzierter Bewusstseinslage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">Aktivierende Pflege als Haltung</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Unser Leitsatz ist „Hilfe zur Selbsthilfe". Wir nehmen einer Person nicht alles ab, sondern
                  unterstützen sie dort, wo sie es braucht – nicht mehr und nicht weniger. Das erhält Fähigkeiten
                  und stärkt das Selbstwertgefühl. Eine Person, die sich noch selbst das Gesicht waschen kann,
                  sollte das auch dürfen – auch wenn es länger dauert. Vertieft wird dies in <Link href="/module-4" className="text-primary underline">Modul 4</Link>.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">Ihre drei Rollen im Alltag</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Sie sind <strong>Beobachter:in</strong>: Sie erkennen Veränderungen am Hautzustand, Verhalten, Allgemeinzustand und melden sie weiter.</li>
                    <li>Sie sind <strong>Vertraute:r</strong>: Sie geben Sicherheit, hören zu und schützen die Würde.</li>
                    <li>Sie sind <strong>Aktivator:in</strong>: Sie motivieren zur Selbstständigkeit und nutzen Ressourcen.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium">Caritas-Leitbild</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Als Einrichtung der Caritas sehen wir den Menschen mit seiner ganzen Lebensgeschichte,
                  seinen Beziehungen und seinem Glauben. Spirituelle Begleitung, Biographiearbeit und
                  Sterbebegleitung gehören für uns selbstverständlich zur Pflege.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>

        {/* Kernkompetenzen-Karten */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-primary mb-6">Kernkompetenzen im Überblick</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Sicherheit & Hygiene</h3>
                <p className="text-sm text-muted-foreground">5 Momente der Händedesinfektion. Schutzkleidung gezielt einsetzen.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <UserCheck className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Würde & Respekt</h3>
                <p className="text-sm text-muted-foreground">Intimsphäre wahren, vor jedem Handgriff informieren.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <Heart className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Beobachtung & Meldung</h3>
                <p className="text-sm text-muted-foreground">Auffälligkeiten erkennen und an die Pflegefachkraft weitergeben.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <Lock className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Schweigepflicht</h3>
                <p className="text-sm text-muted-foreground">Vertrauliche Informationen schützen – innerhalb und außerhalb der Einrichtung.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Reflexionsfrage */}
        <section className="mb-12">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="font-serif text-lg font-bold text-primary mb-2">Zum Mitnehmen in den Alltag</h3>
              <p className="text-sm text-muted-foreground italic">
                „Wenn ich heute bei einer Bewohnerin/einem Bewohner eine ungewöhnliche Hautstelle entdecke –
                wem sage ich es bis wann, und wie dokumentiere ich es?"
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Next Step */}
        <div className="flex justify-end">
          <Link href="/module-2">
            <Button size="lg" className="rounded-full px-8">
              Weiter zu Modul 2 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
