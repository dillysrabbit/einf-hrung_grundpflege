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
                <li className="flex items-start gap-2 text-muted-foreground"><CheckCircle className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" /> Den 4-phasigen Pflegeprozess nach dem Strukturmodell (Beikirch) erklären.</li>
                <li className="flex items-start gap-2 text-muted-foreground"><CheckCircle className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" /> SIS, Maßnahmenplan und Berichteblatt voneinander abgrenzen.</li>
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
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="rolle">Rolle & Haltung</TabsTrigger>
            <TabsTrigger value="prozess">Pflegeprozess</TabsTrigger>
            <TabsTrigger value="recht">Recht & Hygiene</TabsTrigger>
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

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-serif text-xl font-bold text-primary mb-3">Haltung im Alltag</h3>
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
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tab 2: Pflegeprozess */}
          <TabsContent value="prozess">
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-serif text-xl font-bold text-primary mb-2">Der Pflegeprozess nach dem Strukturmodell</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Wir arbeiten nach dem <strong>Strukturmodell</strong>. Es umfasst <strong>vier Phasen</strong>.
                    Pflegehilfskräfte arbeiten vor allem in der Beobachtung (SIS-Aktualisierung), bei der
                    Durchführung des Maßnahmenplans und beim Eintrag im Berichteblatt.
                  </p>

                  <ol className="space-y-3 mt-6">
                    {[
                      { n: 1, t: "Strukturierte Informationssammlung (SIS)", d: "Initiale Erhebung und fortlaufende Aktualisierung – aus Sicht der bewohnenden Person. Zentrale Eingangsfrage: „Was bewegt Sie? Was brauchen Sie? Was können wir für Sie tun?\". Sechs Themenfelder, die ein Bild von der zu pflegenden Person mit ihren individuellen Ressourcen, Unterstützungsbedarfen und Pflegerisiken zeichnen. Sie liefern Beobachtungen für die SIS." },
                      { n: 2, t: "Individueller Maßnahmenplan", d: "Aus der SIS werden konkrete, individuelle Maßnahmen abgeleitet (nicht standardisierte Listen). Sie lesen den Maßnahmenplan und führen ihn aus – Pflegeplanung selbst ist Vorbehalt der Fachkraft." },
                      { n: 3, t: "Berichteblatt", d: "Hier werden ausschließlich ABWEICHUNGEN vom Maßnahmenplan, besondere Ereignisse und neue Beobachtungen dokumentiert – nicht jeder Routinevorgang. Das ist Ihr wichtigstes Dokumentationsinstrument." },
                      { n: 4, t: "Evaluation", d: "Anlassbezogen oder in festgelegten Intervallen prüft die Pflegefachkraft anhand des Berichteblatts, ob der Maßnahmenplan angepasst werden muss. Ihre Berichteblatt-Einträge sind dafür unverzichtbar." }
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

                  <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-900">
                    <strong>Berichteblatt-Logik:</strong> Im Berichteblatt wird <em>nicht alles</em>
                    aufgeschrieben, was wir gemacht haben. Wenn der Maßnahmenplan durchgeführt wurde wie
                    vorgesehen, ist <strong>kein Eintrag</strong> nötig. Eingetragen werden Abweichungen,
                    Auffälligkeiten und neue Informationen.
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-serif text-xl font-bold text-primary mb-3">SIS – die Themenfelder</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Die <strong>Strukturierte Informationssammlung (SIS)</strong> ist in <strong>sechs
                    Themenfelder</strong> gegliedert. Ihre Beobachtungen aus der Grundpflege fließen genau
                    hier ein.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    {[
                      { k: "A", t: "Kognition und Kommunikation", e: "Wahrnehmung, Orientierung, Sprache, Verständnis, Demenz." },
                      { k: "B", t: "Mobilität und Beweglichkeit", e: "Aufstehen, Gehen, Transfers, Lagewechsel, Sturzrisiko." },
                      { k: "C", t: "Krankheitsbezogene Anforderungen und Belastungen", e: "Diagnosen, Medikamente, Schmerzen, Therapien." },
                      { k: "D", t: "Selbstversorgung", e: "Körperpflege, Essen/Trinken, Kleiden, Ausscheidung – Ihr Hauptarbeitsfeld." },
                      { k: "E", t: "Leben in sozialen Beziehungen", e: "Angehörige, Tagesstruktur, Aktivitäten, Beschäftigung." },
                      { k: "F", t: "Wohnen / Haushaltsführung", e: "Umgebung, Hilfsmittel, im Heim Sicherheit und Orientierung im Wohnbereich." }
                    ].map((f) => (
                      <div key={f.k} className="bg-secondary/20 rounded-lg p-3 flex gap-3">
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm">{f.k}</div>
                        <div>
                          <div className="font-bold">{f.t}</div>
                          <div className="text-xs text-muted-foreground">{f.e}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-serif text-xl font-bold text-primary mb-3">Risikomatrix – die fünf Pflegerisiken</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Im Anschluss an die SIS prüft die Pflegefachkraft mithilfe der <strong>Risikomatrix</strong>
                    fünf pflegerelevante Risikobereiche. Für die Einschätzung sind Ihre Beobachtungen
                    aus dem Pflegealltag entscheidend.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 text-sm">
                    {[
                      { t: "Dekubitus", b: "Hautrötungen, Druckstellen, Lagerung, Mobilität" },
                      { t: "Sturz", b: "Schwindel, Gangbild, Hilfsmittel, Sehkraft" },
                      { t: "Inkontinenz", b: "Urin-/Stuhlausscheidung, Hautzustand, Hilfsmittel" },
                      { t: "Schmerz", b: "Verbal und nonverbal: Mimik, Stöhnen, Abwehr" },
                      { t: "Ernährung", b: "Appetit, Trinkmenge, Schluckstörung, Gewicht" }
                    ].map((r, i) => (
                      <div key={i} className="bg-primary/5 rounded-lg p-3 border border-primary/10">
                        <div className="font-bold text-primary mb-1">{r.t}</div>
                        <div className="text-xs text-muted-foreground">{r.b}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-serif text-xl font-bold text-primary mb-3">Berichteblatt – nur Abweichungen, kurz und sachlich</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Im Berichteblatt wird <strong>nicht jede Routinetätigkeit</strong> dokumentiert.
                    Eingetragen werden ausschließlich:
                  </p>
                  <ul className="text-sm space-y-1.5 list-disc pl-5 text-muted-foreground mb-3">
                    <li>Abweichungen vom Maßnahmenplan (z. B. Bewohnerin lehnt Waschung ab)</li>
                    <li>Neue Beobachtungen mit Bezug zu den fünf Pflegerisiken</li>
                    <li>Auffälligkeiten in einem der SIS-Themenfelder</li>
                    <li>Ereignisse, Stürze, Schmerzäußerungen, Stimmungsveränderungen</li>
                    <li>Ergebnisse von durchgeführten Maßnahmen, wenn sie für die Evaluation relevant sind</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mb-2"><strong>Aufbau jedes Eintrags:</strong> Datum/Uhrzeit · Handzeichen · was beobachtet (Tatsachen, keine Vermutungen) · ggf. an wen weitergegeben.</p>
                  <p className="text-sm text-muted-foreground italic">
                    Beispiel: „08:30 Uhr / KN – beim Waschen 2 cm große, nicht wegdrückbare Hautrötung am Steißbein.
                    PFK Müller informiert, Lagerungsplan ergänzt."
                  </p>
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
                    nicht erst am Schichtende und nicht nur ins Berichteblatt:
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

            </div>
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
                <h3 className="font-bold mb-2">Beobachtung & Berichteblatt</h3>
                <p className="text-sm text-muted-foreground">Auffälligkeiten erkennen, kurz im Berichteblatt eintragen, an die Pflegefachkraft weitergeben.</p>
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
                wem sage ich es bis wann, und welchen Eintrag schreibe ich konkret ins Berichteblatt?"
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
