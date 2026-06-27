import { Button } from "@/components/ui/button";
import { Printer, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Handbuch() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white">
      {/* Print-Steuerleiste – im Druck ausgeblendet */}
      <div className="print:hidden bg-secondary/20 border-b">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <Link href="/">
            <Button variant="outline" size="sm" className="rounded-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zur Startseite
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground text-center">
            Tipp: Klicken Sie auf „Als PDF speichern" oder drücken Sie <kbd className="px-1.5 py-0.5 bg-white border rounded text-xs">Strg</kbd>/<kbd className="px-1.5 py-0.5 bg-white border rounded text-xs">⌘</kbd>+<kbd className="px-1.5 py-0.5 bg-white border rounded text-xs">P</kbd>, um das Handbuch zu drucken oder als PDF zu speichern.
          </p>
          <Button onClick={handlePrint} size="sm" className="rounded-full">
            <Printer className="mr-2 h-4 w-4" />
            Als PDF speichern / drucken
          </Button>
        </div>
      </div>

      <article className="handbuch-print container mx-auto max-w-4xl px-6 py-12">
        {/* Titelseite */}
        <header className="mb-12 pb-8 border-b-4 border-primary text-center print:break-after-page">
          <div className="mb-8 flex items-center justify-center gap-3">
            <img src="/logo.png" alt="CareConnect" className="h-12 w-auto object-contain" />
            <span className="font-serif text-2xl font-semibold tracking-tight text-foreground">CareConnect</span>
          </div>
          <p className="eyebrow eyebrow-muted mb-3">Schulungshandbuch</p>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">
            Einführung in die Grundpflege
          </h1>
          <p className="text-lg text-muted-foreground mb-2">Fortbildung für Pflegekräfte</p>
          <p className="text-sm text-muted-foreground">CareConnect · Fortbildung Grundpflege</p>
          <p className="text-xs text-muted-foreground mt-8 italic max-w-xl mx-auto">
            Diese Schulung ersetzt weder eine pflegerische Berufsausbildung noch die fachliche Anleitung
            durch eine examinierte Pflegekraft. Inhalte basieren auf den Expertenstandards des DNQP,
            an KRINKO-/RKI-Empfehlungen sowie an gängiger Pflegefachliteratur.
          </p>
        </header>

        {/* Inhaltsverzeichnis */}
        <section className="mb-12 print:break-after-page">
          <h2 className="font-serif text-2xl font-bold text-primary mb-4">Inhalt</h2>
          <ol className="space-y-1 text-sm list-decimal pl-5">
            <li>Vorwort</li>
            <li>Modul 1 – Grundlagen, Rolle &amp; Pflegeprozess</li>
            <li>Modul 2 – Ganzkörperwaschung im Bett</li>
            <li>Modul 3 – Waschung am Waschbecken</li>
            <li>Modul 4 – Anleitung &amp; Aktivierung</li>
            <li>Modul 5 – Mund- &amp; Zahnpflege</li>
            <li>Modul 6 – Ausscheidung &amp; Inkontinenz</li>
            <li>Modul 7 – Ernährung &amp; Trinken</li>
            <li>Modul 8 – Positionierung &amp; Transfer</li>
            <li>Modul 9 – Menschen mit Demenz</li>
            <li>Modul 10 – Sterbebegleitung &amp; palliative Grundpflege</li>
            <li>Anhang: Was muss ich sofort melden?</li>
          </ol>
        </section>

        {/* Vorwort */}
        <section className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-primary mb-4">Vorwort</h2>
          <p className="mb-3 text-base leading-relaxed">
            Willkommen bei CareConnect. Dieses Handbuch begleitet Ihre Fortbildung zur
            „Einführung in die Grundpflege". Unser Ziel ist es, Ihnen nicht nur die technischen Handgriffe
            zu vermitteln, sondern auch die Haltung, die unsere Arbeit prägt: Kompetenz, Empathie und
            Professionalität.
          </p>
          <p className="mb-3 text-base leading-relaxed">
            Die Grundpflege ist weit mehr als nur Waschen. Sie ist Beziehungsarbeit, Gesundheitsförderung
            und oft der intimste Moment im Alltag unserer Bewohner:innen.
          </p>
          <blockquote className="mt-4 border-l-4 border-primary bg-primary/5 p-4 text-sm italic">
            Diese Schulung ersetzt weder eine pflegerische Ausbildung noch eine Pflegefachkraft.
            Bei Unsicherheit gilt immer: Rückfrage an die examinierte Pflegekraft Ihres Wohnbereichs.
          </blockquote>
        </section>

        {/* Modul 1 */}
        <section className="mb-12 print:break-before-page">
          <h2 className="font-serif text-3xl font-bold text-primary mb-2">Modul 1 – Grundlagen, Rolle &amp; Pflegeprozess</h2>
          <p className="text-sm text-muted-foreground mb-6 italic">
            Lernziele: Rolle einordnen · Grundpflege von Behandlungspflege unterscheiden · Pflegeprozess
            nach dem Strukturmodell erklären · Schweigepflicht und Hygiene anwenden · FEM erkennen ·
            erkennen, wann eine Fachkraft hinzugezogen werden muss.
          </p>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Alles beginnt bei der richtigen Haltung</h3>
          <p className="mb-2"><strong>Würde &amp; Intimsphäre.</strong> Grundpflege ist intim. Wir betreten den Lebensraum eines Menschen, wir sehen seinen Körper, wir helfen bei den persönlichsten Verrichtungen. Daher gilt: anklopfen, ankündigen, jeden Schritt erklären, nur so viel Körperfläche aufdecken wie nötig, Tür schließen.</p>
          <p className="mb-2"><strong>Aktivierende Pflege als Haltung.</strong> Unser Leitsatz ist „Hilfe zur Selbsthilfe". Wir nehmen einer Person nicht alles ab, sondern unterstützen sie dort, wo sie es braucht – nicht mehr und nicht weniger.</p>
          <p className="mb-2"><strong>Ihre drei Rollen im Alltag.</strong> Beobachter:in (Veränderungen erkennen und melden) · Vertraute:r (Sicherheit geben, Würde schützen) · Aktivator:in (zur Selbstständigkeit motivieren).</p>
          <p className="mb-2"><strong>Unser Leitbild.</strong> Wir sehen den Menschen mit seiner ganzen Lebensgeschichte, seinen Beziehungen und seinem Glauben. Spirituelle Begleitung, Biographiearbeit und Sterbebegleitung gehören für uns selbstverständlich zur Pflege.</p>

          <h3 className="font-serif text-xl font-bold text-primary mt-8 mb-3">Was darf eine Pflegekraft – und was nicht?</h3>
          <p className="mb-3">In Deutschland sind bestimmte Tätigkeiten Pflegefachkräften vorbehalten (Vorbehaltsaufgaben nach § 4 PflBG).</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
            <div className="border-l-4 border-green-500 bg-green-50 p-3">
              <p className="font-bold text-green-900 mb-1">Typische Aufgaben</p>
              <ul className="list-disc pl-4 space-y-0.5 text-green-900">
                <li>Körperpflege (Waschen, Mund-, Haarpflege)</li>
                <li>Hilfe beim An- und Auskleiden</li>
                <li>Hilfe bei Essen und Trinken</li>
                <li>Positionieren, Mobilisieren, Transfer (nach Anleitung)</li>
                <li>Beobachten und weitergeben</li>
                <li>Begleitung, Zuwendung, Tagesstruktur</li>
              </ul>
            </div>
            <div className="border-l-4 border-red-500 bg-red-50 p-3">
              <p className="font-bold text-red-900 mb-1">Nicht ohne Pflegefachkraft</p>
              <ul className="list-disc pl-4 space-y-0.5 text-red-900">
                <li>Pflegeplanung und -evaluation</li>
                <li>Erst-Anamnese, Pflegediagnose</li>
                <li>Wundversorgung, Verbandwechsel</li>
                <li>Medikamentengabe (außer per Delegation)</li>
                <li>Injektionen, Katheterisieren, Sondenkost</li>
                <li>Behandlungspflege ohne Anordnung</li>
              </ul>
            </div>
          </div>
          <p className="text-sm bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-4"><strong>Goldene Regel:</strong> Bei Unsicherheit nicht durchführen, sondern Pflegefachkraft fragen.</p>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Grundpflege vs. Behandlungspflege</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li><strong>Grundpflege (SGB XI § 14/15):</strong> Aktivitäten des täglichen Lebens (Körperpflege, Ernährung, Mobilität, Ausscheidung). Pflegeversicherung. Hier sind Sie zentral.</li>
            <li><strong>Behandlungspflege (SGB V § 37):</strong> Ärztlich verordnete Maßnahmen (Medikamente, Verbände, Wundversorgung). Krankenkasse. Erfordert Delegation oder Pflegefachkraft.</li>
          </ul>

          <h3 className="font-serif text-xl font-bold text-primary mt-8 mb-3">Pflegeprozess nach dem Strukturmodell – vier Phasen</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-4">
            <li><strong>Strukturierte Informationssammlung (SIS)</strong> – initiale Erhebung und fortlaufende Aktualisierung aus Sicht der bewohnenden Person. Eingangsfrage: „Was bewegt Sie? Was brauchen Sie? Was können wir für Sie tun?". Sechs Themenfelder, die ein Bild von der zu pflegenden Person mit ihren individuellen Ressourcen, Unterstützungsbedarfen und Pflegerisiken zeichnen.</li>
            <li><strong>Individueller Maßnahmenplan</strong> – aus der SIS abgeleitete, individuell zugeschnittene Maßnahmen. Sie lesen den Plan und führen ihn aus.</li>
            <li><strong>Berichteblatt</strong> – ausschließlich Abweichungen vom Maßnahmenplan, neue Beobachtungen und besondere Ereignisse. Nicht jede Routinetätigkeit.</li>
            <li><strong>Evaluation</strong> – anlassbezogen oder in Intervallen. Die Pflegefachkraft prüft anhand des Berichteblatts, ob der Plan angepasst werden muss.</li>
          </ol>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">SIS – sechs Themenfelder</h3>
          <ul className="list-none space-y-1 mb-4 text-sm">
            <li><strong>A</strong> Kognition und Kommunikation</li>
            <li><strong>B</strong> Mobilität und Beweglichkeit</li>
            <li><strong>C</strong> Krankheitsbezogene Anforderungen und Belastungen</li>
            <li><strong>D</strong> Selbstversorgung <em>(Ihr Hauptarbeitsfeld)</em></li>
            <li><strong>E</strong> Leben in sozialen Beziehungen</li>
            <li><strong>F</strong> Wohnen / Haushaltsführung</li>
          </ul>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Risikomatrix – fünf Pflegerisiken</h3>
          <p className="mb-2 text-sm">Im Anschluss an die SIS prüft die Pflegefachkraft anhand der Risikomatrix:</p>
          <ul className="list-disc pl-5 space-y-0.5 mb-4 text-sm">
            <li><strong>Dekubitus</strong> – Hautrötungen, Druckstellen, Positionierung, Mobilität</li>
            <li><strong>Sturz</strong> – Schwindel, Gangbild, Hilfsmittel, Sehkraft</li>
            <li><strong>Inkontinenz</strong> – Urin-/Stuhlausscheidung, Hautzustand</li>
            <li><strong>Schmerz</strong> – verbal und nonverbal (Mimik, Stöhnen, Abwehr)</li>
            <li><strong>Ernährung</strong> – Appetit, Trinkmenge, Schluckstörung, Gewicht</li>
          </ul>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Berichteblatt – nur Abweichungen, kurz und sachlich</h3>
          <p className="mb-2 text-sm">Eingetragen werden ausschließlich:</p>
          <ul className="list-disc pl-5 space-y-0.5 mb-3 text-sm">
            <li>Abweichungen vom Maßnahmenplan</li>
            <li>Neue Beobachtungen mit Bezug zu den fünf Pflegerisiken</li>
            <li>Auffälligkeiten in einem der SIS-Themenfelder</li>
            <li>Ereignisse, Stürze, Schmerzäußerungen, Stimmungsveränderungen</li>
          </ul>
          <p className="text-sm mb-2"><strong>Aufbau jedes Eintrags:</strong> Datum/Uhrzeit · Handzeichen · was beobachtet (Tatsachen, keine Vermutungen) · ggf. an wen weitergegeben.</p>
          <p className="text-sm italic">Beispiel: „08:30 Uhr / KN – beim Waschen 2 cm große, nicht wegdrückbare Hautrötung am Steißbein. PFK Müller informiert, Positionierungsplan ergänzt."</p>

          <h3 className="font-serif text-xl font-bold text-primary mt-8 mb-3">Schweigepflicht &amp; Datenschutz</h3>
          <p className="mb-2 text-sm">Alles, was Sie über Bewohner:innen erfahren, unterliegt <strong>§ 203 StGB</strong> und der <strong>DSGVO</strong>:</p>
          <ul className="list-disc pl-5 space-y-0.5 mb-4 text-sm">
            <li>Keine Weitergabe an Außenstehende, auch nicht an Familienangehörige ohne Erlaubnis</li>
            <li>Keine Gespräche im Aufzug, Bus oder in sozialen Medien</li>
            <li>Pflegedokumentation nicht offen herumliegen lassen</li>
            <li>Fotos nur mit schriftlicher Einwilligung</li>
            <li>Verstöße können arbeits- und strafrechtliche Folgen haben</li>
          </ul>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Freiheitsentziehende Maßnahmen (FEM)</h3>
          <p className="mb-2 text-sm">Die persönliche Freiheit ist ein Grundrecht (Art. 2 GG). Eine Maßnahme, die eine Person <strong>gegen ihren Willen oder ohne Einwilligung in der Bewegung einschränkt</strong>, ist eine FEM. Eine FEM ohne Rechtsgrund erfüllt den Tatbestand der <strong>Freiheitsberaubung (§ 239 StGB)</strong>.</p>
          <p className="mb-2 text-sm"><strong>Typische FEM:</strong> Bettgitter · Bauchgurt · Therapietisch am Rollstuhl · Fixierung · Festhalten · abgeschlossene Tür · Wegnahme von Rollator/Schuhen · sedierende Medikation (chemische FEM).</p>
          <p className="mb-2 text-sm"><strong>Zulässig nur</strong> mit Einwilligung der einsichtsfähigen Person, mit Genehmigung des Betreuungsgerichts (§ 1831 BGB) oder im akuten Notfall (mit nachträglicher Legitimation). Zusätzlich ärztliche Anordnung und lückenlose Dokumentation.</p>
          <p className="mb-2 text-sm"><strong>Alternativen zuerst (Werdenfelser Weg):</strong> Niedrigbett, Sensormatte, Hüftprotektoren, Sturzmatten, Bewegungsmelder, intensive Bezugspflege, Tagesstruktur, validierender Umgang.</p>
          <p className="text-sm bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-2"><strong>Ihre Rolle:</strong> niemals eigenständig anordnen oder einrichten · regelmäßig nach der Person sehen · Beobachtungen ins Berichteblatt · aktiv Alternativen vorschlagen.</p>
          <p className="text-sm bg-red-50 border-l-4 border-red-500 p-3"><strong>Sofort melden:</strong> wenn eine FEM ohne erkennbare Anordnung eingesetzt wird oder sich eine Person dadurch verletzt. Auch „nur Mitmachen" kann strafrechtlich relevant sein.</p>

          <h3 className="font-serif text-xl font-bold text-primary mt-8 mb-3">Keimverschleppung verstehen und verhindern</h3>
          <p className="mb-2 text-sm">Auf jeder Haut, in jeder Wunde, in Stuhl, Urin und Speichel finden sich <strong>Keime</strong>. Keimverschleppung bedeutet, dass Keime von einer Stelle auf eine andere übertragen werden – meist über die <strong>Hände der Pflegekraft</strong>, Pflegehilfsmittel oder die Bewohnerumgebung. Das ist in der stationären Pflege der häufigste Übertragungsweg.</p>
          <p className="mb-2 text-sm font-bold">Fünf Grundmaßnahmen:</p>
          <ul className="list-disc pl-5 space-y-0.5 mb-4 text-sm">
            <li><strong>Hygienische Händedesinfektion</strong> nach den 5 Momenten der WHO</li>
            <li><strong>Persönliche Hygiene:</strong> kurze, saubere Fingernägel, kein Schmuck und keine Uhren an Händen/Unterarmen, keine künstlichen Nägel oder Nagellack, Dienstkleidung täglich wechseln</li>
            <li><strong>Schutzkleidung gezielt einsetzen:</strong> Einmalhandschuhe und Einwegschürze nur bei Kontakt mit Körperflüssigkeiten, Schleimhäuten oder nicht-intakter Haut – unmittelbar danach wechseln</li>
            <li><strong>Saubere von unreinen Tätigkeiten trennen:</strong> getrennte Waschlappen für Gesicht/Körper/Intim, Wasser wechseln vor Intimpflege, immer von „sauber" nach „unrein" arbeiten</li>
            <li><strong>Flächen-, Geräte- und Wäschehygiene:</strong> Wäsche direkt in den Abwurf, gemeinsame Hilfsmittel wischdesinfizieren</li>
          </ul>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Hände­hygiene – die 5 Momente der WHO</h3>
          <p className="mb-2 text-sm">Hygienische Händedesinfektion (3–5 ml, 30 Sekunden einreiben):</p>
          <ol className="list-decimal pl-5 space-y-0.5 mb-3 text-sm">
            <li><strong>Vor</strong> Bewohnerkontakt</li>
            <li><strong>Vor</strong> aseptischer Tätigkeit (z. B. Wundkontakt, Katheterpflege)</li>
            <li><strong>Nach</strong> Kontakt mit potenziell infektiösem Material (Blut, Stuhl, Urin)</li>
            <li><strong>Nach</strong> Bewohnerkontakt</li>
            <li><strong>Nach</strong> Kontakt mit der Bewohnerumgebung</li>
          </ol>
          <p className="text-sm bg-blue-50 border-l-4 border-blue-500 p-3"><strong>Handschuhe ersetzen die Händedesinfektion nicht.</strong> Auch nach dem Ausziehen der Handschuhe: Hände desinfizieren.</p>
        </section>

        {/* Modul 2 */}
        <section className="mb-12 print:break-before-page">
          <h2 className="font-serif text-3xl font-bold text-primary mb-2">Modul 2 – Ganzkörperwaschung im Bett</h2>
          <p className="text-sm text-muted-foreground mb-6 italic">
            Lernziele: Ganzkörperwaschung strukturiert und sicher vorbereiten und durchführen ·
            Wassertemperatur sicher prüfen und Verbrühungsrisiken einschätzen · Intimpflege geschlechtsspezifisch
            korrekt umsetzen · Hautveränderungen erkennen und ins Berichteblatt eintragen.
          </p>
          <p className="mb-4 text-base">
            Diese Form der Waschung ist anspruchsvoll und erfordert Konzentration. Sie kommt zum Einsatz,
            wenn die bewohnende Person bettlägerig oder zu schwach ist, das Bett zu verlassen.
            Sicherheit, Hygiene und Würde haben höchste Priorität.
          </p>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Material &amp; Vorbereitung</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4 text-sm">
            <li>Hygienematerial: Händedesinfektionsmittel · Einmalhandschuhe (für Intimpflege) · Einwegschürze (bei erwartbarer Kontamination) · 3 Waschlappen (Gesicht/Körper/Intim) · Handtücher &amp; Badetuch · Waschschüssel &amp; Abwurf</li>
            <li>Pflegeprodukte: Waschlotion (pH-hautneutral) · Hautcreme/Barrierecreme · Mundpflegemittel · Kamm/Bürste · Frische Kleidung &amp; ggf. Bettwäsche</li>
            <li>Raumtemperatur 22–24 °C, Fenster und Türen schließen</li>
            <li><strong>Wassertemperatur</strong> nach Wunsch der bewohnenden Person; ein empfehlenswerter Richtwert ist 37–43 °C. Immer zuerst mit der Innenseite des eigenen Unterarms prüfen. Bei Diabetes, Demenz oder Sensibilitätsstörung darf die Temperaturkontrolle nie allein der bewohnenden Person überlassen werden – Verbrühungsgefahr.</li>
            <li><strong>Handschuhe nur</strong> bei Kontakt mit Körperflüssigkeiten, Schleimhäuten oder nicht-intakter Haut – nicht routinemäßig.</li>
          </ul>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Ablauf – Schritt für Schritt</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-4 text-sm">
            <li><strong>Vorbereitung.</strong> Material bereitstellen, Händedesinfektion, Wassertemperatur prüfen, Bett auf Arbeitshöhe, Bewohner:in informieren.</li>
            <li><strong>Gesicht, Augen &amp; Hals.</strong> Beim gesunden, nicht entzündeten Auge mit klarem Wasser <strong>vom äußeren zum inneren Augenwinkel</strong> wischen (folgt der natürlichen Tränendrainage). Bei entzündetem oder infiziertem Auge umgekehrt vom inneren zum äußeren Augenwinkel (Schutz des Tränen-Nasen-Gangs). Jeweils frische Stelle des Waschlappens, ein Auge nach dem anderen. Anschließend Gesicht, Ohren, Hals waschen und gut trocknen.</li>
            <li><strong>Oberkörper &amp; Arme.</strong> Belebende Waschung herzwärts (Hand → Schulter), gut abtrocknen. Auf Intertrigo (Hautwolf) in Achseln und unter der Brust achten.</li>
            <li><strong>Rücken &amp; Gesäß.</strong> Bewohner:in zur Seite drehen. Rücken und Gesäß waschen, trocknen, ggf. eincremen. Dekubitus-Kontrolle (Steißbein, Schulterblatt, Ellenbogen) – Fingertest: Lässt sich die Rötung wegdrücken?</li>
            <li><strong>Beine &amp; Füße.</strong> Beine herzwärts waschen. Zehenzwischenräume gründlich trocknen (Pilzgefahr) – keine Watte einlegen (Mazeration). Fersen und Knöchel auf Druckstellen prüfen.</li>
            <li><strong>Vorbereitung Intimpflege.</strong> Wasser wechseln, frischen Waschlappen, jetzt Einmalhandschuhe anziehen. Intimsphäre durch Abdecken wahren.</li>
            <li><strong>Intimpflege Frau.</strong> Beine anstellen. Erst die äußeren, dann mit gespreizten Schamlippen die kleinen Schamlippen reinigen, immer von der Symphyse zum Anus, mit jedem Wisch eine frische Stelle des Waschlappens. So wird die Verschleppung von Darmkeimen in die Harnröhre vermieden.</li>
            <li><strong>Intimpflege Mann.</strong> Vorhaut <em>vorsichtig</em> zurückschieben (bei Phimose nicht erzwingen!), Eichel reinigen, gut abtrocknen, <strong>Vorhaut zwingend wieder vorschieben</strong>.
              <div className="my-2 bg-red-50 border-l-4 border-red-500 p-2 text-red-900 not-italic">
                ⚠ <strong>Warnung:</strong> Eine vergessene oder nicht zurückgeschobene Vorhaut kann zur <strong>Paraphimose</strong> führen – urologischer Notfall. Sofort Pflegefachkraft informieren.
              </div>
            </li>
            <li><strong>Abschluss &amp; Nachbereitung.</strong> Frische Kleidung anziehen, faltenfreie Bettwäsche, bequeme Positionierung. Anschließend Arbeitsplatz aufräumen, reinigen, desinfizieren (siehe Nachbereitung). Beobachtungen ins Berichteblatt.</li>
          </ol>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Beobachtungspunkte</h3>
          <ul className="list-disc pl-5 space-y-0.5 mb-4 text-sm">
            <li><strong>Hautzustand:</strong> Rötungen, Druckstellen, Pilzinfektionen, Trockenheit</li>
            <li><strong>Schmerzen:</strong> auch nonverbal (Mimik, Stöhnen, Abwehr)</li>
            <li><strong>Allgemeinzustand:</strong> Wachheit, Belastbarkeit, Stimmung, Verwirrtheit</li>
            <li><strong>Atmung:</strong> Atemgeräusche, Kurzatmigkeit, Atemfrequenz</li>
            <li><strong>Mobilität:</strong> Mithilfe beim Drehen, Halten, Aufrichten – Vergleich zum Vortag</li>
            <li><strong>Ausscheidungen:</strong> Farbe, Menge, Geruch von Urin/Stuhl, Kontinenzhilfen</li>
          </ul>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Nachbereitung – gehört zur Pflege dazu</h3>
          <ul className="list-disc pl-5 space-y-0.5 mb-4 text-sm">
            <li><strong>Material &amp; Müll:</strong> Einmalmaterial in den Abwurf, Inkontinenzmaterial verschlossen entsorgen, Müllbeutel wechseln</li>
            <li><strong>Wäsche:</strong> Schmutzwäsche direkt in den Wäschesack, infektiöse Wäsche getrennt, frische ≠ benutzte im Wagen</li>
            <li><strong>Waschutensilien &amp; Geräte:</strong> Schüssel reinigen, wischdesinfizieren, trocken aufbewahren; personenbezogene Mund-/Haar-/Hautpflegeutensilien; Pflegewagen, Bettgitter, Nachttisch wischdesinfizieren</li>
            <li><strong>Arbeitsplatz &amp; Abschluss:</strong> Bett auf bewohnersichere Höhe, Klingel und Trinken in Reichweite, lüften, Hände desinfizieren, ggf. Berichteblatt-Eintrag</li>
          </ul>
        </section>

        {/* Modul 3 */}
        <section className="mb-12 print:break-before-page">
          <h2 className="font-serif text-3xl font-bold text-primary mb-2">Modul 3 – Waschung am Waschbecken</h2>
          <p className="text-sm text-muted-foreground mb-6 italic">
            Lernziele: Belastbarkeit für eine Waschung am Waschbecken tagesaktuell einschätzen ·
            Sturzrisiken erkennen und reduzieren · Waschung an die Ressourcen anpassen · rückenschonend
            für sich selbst arbeiten.
          </p>
          <p className="mb-4 text-base">
            Wenn die Mobilität es zulässt, ist dies der ideale Weg zur Förderung der Selbstständigkeit.
            Ihre Rolle wandelt sich vom „Versorger" zum „Anleiter und Begleiter".
            <strong> Die Belastbarkeit muss tagesaktuell beurteilt werden</strong> – wer gestern
            aufstehen konnte, kann heute zu schwach sein.
          </p>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Sicherheit</h3>
          <ul className="list-disc pl-5 space-y-0.5 mb-4 text-sm">
            <li>Rutschfeste Matten, festes Schuhwerk, keine Handtücher auf dem Boden</li>
            <li>Stabile Sitzgelegenheit (Duschhocker oder Stuhl mit Lehne)</li>
            <li>Notrufknopf und Haltegriffe in Reichweite, alles vor der Waschung zurechtlegen</li>
            <li>Wassertemperatur nach Wunsch der bewohnenden Person (Richtwert 37–43 °C); immer zuerst durch die Pflegekraft mit dem eigenen Unterarm geprüft</li>
            <li>Rückenschonendes Arbeiten: Knie beugen, nicht aus dem Rücken heben</li>
          </ul>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Ablauf – Schritt für Schritt</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-4 text-sm">
            <li><strong>Transfer &amp; Sitzposition.</strong> Rückenschonend zum Waschbecken begleiten, stabilen Sitz sicherstellen, Notrufknopf in Reichweite.</li>
            <li><strong>Wasser vorbereiten.</strong> Wassertemperatur nach Bewohnerwunsch, immer zuerst durch die Pflegekraft prüfen.</li>
            <li><strong>Oberkörper (selbstständig).</strong> Bewohner:in wäscht Gesicht, Arme und Oberkörper selbstständig. Pflegekraft unterstützt nur bei Bedarf.</li>
            <li><strong>Rücken (Unterstützung).</strong> Bewohner:in beugt sich vor (Sturzsicherung). Pflegekraft wäscht den schwer erreichbaren Rücken und prüft den Hautzustand.</li>
            <li><strong>Intimpflege (Anleitung).</strong> Pflegekraft leitet an, Bewohner:in führt durch. Frischer Waschlappen, Einmalhandschuhe.</li>
            <li><strong>Beine &amp; Füße.</strong> Zehenzwischenräume gründlich trocknen. Auf Druckstellen, Pilz und Nagelveränderungen achten.</li>
            <li><strong>Abtrocknen, Anziehen &amp; Nachbereitung.</strong> Hautfalten beachten, Auskühlung vermeiden, Bewohner:in zurück begleiten. Anschließend Arbeitsplatz reinigen und desinfizieren.</li>
          </ol>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Nachbereitung</h3>
          <ul className="list-disc pl-5 space-y-0.5 mb-4 text-sm">
            <li>Einmalmaterial in den Abwurf; Inkontinenzmaterial verschlossen entsorgen; Mülleimer leeren</li>
            <li>Wäsche direkt in den Wäschesack; frische ≠ benutzte im Wagen</li>
            <li>Schüssel und gemeinsame Hilfsmittel reinigen + wischdesinfizieren; personenbezogene Utensilien im Schrank verstauen</li>
            <li>Boden trocken wischen (Sturzgefahr!), Matte aufhängen, Hände desinfizieren, ggf. Berichteblatt</li>
          </ul>
        </section>

        {/* Modul 4 */}
        <section className="mb-12 print:break-before-page">
          <h2 className="font-serif text-3xl font-bold text-primary mb-2">Modul 4 – Anleitung &amp; Aktivierung</h2>
          <p className="text-sm text-muted-foreground mb-6 italic">
            Lernziele: aktivierende Pflege als Haltung beschreiben und anwenden · Konzepte Kinästhetik,
            basale Stimulation und Validation grob unterscheiden · Menschen mit Demenz wertschätzend begleiten ·
            Ressourcen erkennen und gezielt nutzen statt vorschnell zu übernehmen.
          </p>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Hilfe zur Selbsthilfe – die 3 Säulen</h3>
          <ol className="list-decimal pl-5 space-y-1 mb-4 text-sm">
            <li><strong>Ressourcen erkennen.</strong> Erst beobachten – Was kann die Person noch selbst, auch wenn es länger dauert?</li>
            <li><strong>Kommunikation.</strong> Motivieren, loben, anleiten. Bei Demenz: kurze, klare Sätze, Augenkontakt, validierender Umgang.</li>
            <li><strong>Geduld.</strong> Selbstständigkeit braucht Zeit. Geben Sie diese Zeit – auch wenn der Dienstplan drückt.</li>
          </ol>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Konzepte (Überblick)</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4 text-sm">
            <li><strong>Kinästhetik (Hatch &amp; Maietta):</strong> Bewegungslehre, die das eigene Körpergefühl der Person nutzt. „Führen" der Bewegung statt Heben/Tragen.</li>
            <li><strong>Basale Stimulation (Fröhlich/Bienstein):</strong> Förderung der Wahrnehmung über Berührung, Bewegung, Positionierung. Belebende Waschung (herzwärts) versus beruhigende Waschung.</li>
            <li><strong>Validation (Naomi Feil):</strong> Umgang mit Menschen mit Demenz – nicht korrigieren, sondern in die emotionale Welt eingehen.</li>
            <li><strong>Personenzentrierte Pflege (Tom Kitwood):</strong> Würde und Person-Sein bewahren, mit Biographie, Vorlieben, Beziehungen.</li>
          </ul>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Demenz im Pflegealltag</h3>
          <p className="mb-3 text-sm">
            Ruhige Stimme, kurze Sätze, eine Aufforderung nach der anderen, Augenkontakt, vertraute Worte
            und Routinen, Berührung mit Erlaubnis. Bei Abwehr keine Konfrontation – kurze Pause, später
            erneut anbieten, Pflegefachkraft informieren.
          </p>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Praxis-Anleitung</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4 text-sm">
            <li><strong>Mundpflege:</strong> Zahnbürste anreichen, ggf. Hand zum Mund führen, aber Putzbewegung selbst ausführen lassen.</li>
            <li><strong>Anziehen:</strong> Kleidung in der richtigen Reihenfolge bereitlegen. Bei schwierigen Knöpfen helfen, das Hemd selbst überstreifen lassen.</li>
            <li><strong>Waschen:</strong> Hand zum Waschlappen führen, eigentliche Bewegung selbst ausführen lassen.</li>
          </ul>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Auch bei aktivierender Pflege: Nachbereitung</h3>
          <p className="text-sm mb-2">Wenn die Person mehr selbst macht, übernehmen Sie weniger Handgriffe – die Nachbereitung bleibt aber Ihre Aufgabe: Einmalmaterial entsorgen, Wäsche separat, personenbezogene Utensilien zurück, Hilfsmittel desinfizieren, Hände desinfizieren, ggf. Berichteblatt.</p>
          <p className="text-sm italic">Aktivierende Pflege bedeutet nicht weniger Verantwortung – sondern eine andere Verteilung der Tätigkeiten.</p>
        </section>

        {/* Modul 5 */}
        <section className="mb-12 print:break-before-page">
          <h2 className="font-serif text-3xl font-bold text-primary mb-2">Modul 5 – Mund- &amp; Zahnpflege</h2>
          <p className="text-sm text-muted-foreground mb-6 italic">
            Lernziele: Bedeutung der Mundgesundheit für Hochbetagte einschätzen · Mundpflege bei eigenen
            Zähnen und mit Prothese durchführen · Soor, Borken, Karies, Aphthen, Druckstellen erkennen
            und melden · Mundpflege im Sterbeprozess.
          </p>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Grundlagen</h3>
          <p className="text-sm mb-2">Mundpflege mindestens 2× täglich; bei Mundatmung, Sauerstofftherapie, Sondenernährung, Fieber oder im Sterbeprozess häufiger. Material: weiche Zahnbürste, fluoridhaltige Zahnpasta, Becher, Nierenschale, Lippenpflege, ggf. Mundpflegestäbchen, Prothesenbürste/-reiniger.</p>
          <p className="text-sm mb-2"><strong>Positionierung:</strong> möglichst aufrecht (Aspirations­schutz). Bei bettlägerigen Personen Oberkörper hochpositionieren, Kopf zur Seite drehen.</p>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Eigene Zähne</h3>
          <ol className="list-decimal pl-5 space-y-1 mb-3 text-sm">
            <li>Hände desinfizieren, ggf. Handschuhe.</li>
            <li>Aufrechte Position, Schutz für Kleidung, Nierenschale.</li>
            <li>Zahnbürste anfeuchten, erbsengroße Menge fluoridhaltiger Zahnpasta.</li>
            <li>Außen-, Innen-, Kauflächen, Zahnfleischrand sanft mitbürsten.</li>
            <li>Zunge sanft reinigen.</li>
            <li>Mundspülen oder mit Mundpflege­stäbchen auswischen (bei Schluckstörung).</li>
            <li>Lippenpflege.</li>
          </ol>
          <p className="text-sm mb-3">Zahnzwischenräume einmal täglich mit <strong>Zahnseide</strong> oder Interdentalbürste reinigen.</p>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Prothese</h3>
          <p className="text-sm mb-2">2× täglich herausnehmen (möglichst durch die Person selbst), über Wasser oder Tuch reinigen (Bruchgefahr). Prothesenbürste + Spülmittel/Prothesenpaste – <strong>keine normale Zahnpasta</strong>. Mundhöhle separat reinigen, Mund spülen. Vor dem Wiedereinsetzen anfeuchten. Über Nacht: trocken oder feucht nach Hausstandard. Druckstellen ins Berichteblatt.</p>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Wichtige Befunde</h3>
          <ul className="list-disc pl-5 space-y-0.5 mb-3 text-sm">
            <li><strong>Soor:</strong> abwischbare weiße Beläge mit gerötetem Grund</li>
            <li><strong>Borken:</strong> eingetrocknete Beläge, oft bei Mundatmung/Sauerstoff/Sterben</li>
            <li><strong>Aphthen / Druckstellen:</strong> schmerzhaft, machen Essen unmöglich</li>
            <li><strong>Karies / lockere Zähne:</strong> Aspirationsgefahr</li>
            <li><strong>Mundtrockenheit (Xerostomie)</strong> und <strong>Mundgeruch</strong> (Foetor ex ore)</li>
          </ul>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Mundpflege im Sterbeprozess</h3>
          <p className="text-sm">Mehrmals stündlich befeuchten, Lieblingsgetränk nutzen, kein Mundspülen mehr (Aspirationsgefahr), Lippen dünn fetten. Siehe auch Modul 10.</p>
        </section>

        {/* Modul 6 */}
        <section className="mb-12 print:break-before-page">
          <h2 className="font-serif text-3xl font-bold text-primary mb-2">Modul 6 – Ausscheidung &amp; Inkontinenz</h2>
          <p className="text-sm text-muted-foreground mb-6 italic">
            Lernziele: Urin und Stuhl systematisch beobachten · Bristol-Stuhlskala anwenden · Inkontinenzformen
            grob unterscheiden · Vorlagen würdevoll und hautschonend wechseln · IAD erkennen und vorbeugen.
          </p>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Beobachtung Urin</h3>
          <ul className="list-disc pl-5 space-y-0.5 mb-3 text-sm">
            <li><strong>Farbe:</strong> hellgelb (gut hydriert) – dunkelgelb (zu wenig getrunken) – rot/braun (Blut!) – milchig-trüb (HWI)</li>
            <li><strong>Menge:</strong> deutlich weniger (Exsikkose? Harnverhalt?) oder mehr (Diabetes, Diuretika)</li>
            <li><strong>Geruch:</strong> stechend bei Infekt, süßlich bei Diabetes</li>
            <li><strong>Beschwerden:</strong> Brennen, Schmerz, häufiger Drang ohne Erfolg → HWI?</li>
          </ul>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Bristol-Stuhlskala</h3>
          <ol className="list-decimal pl-5 space-y-0.5 mb-3 text-sm">
            <li>Einzelne harte Klumpen (starke Verstopfung)</li>
            <li>Wurstartig, klumpig (Verstopfung)</li>
            <li>Wurstförmig mit Rissen (normal)</li>
            <li>Glatte, weiche Wurst (ideal)</li>
            <li>Weiche Klümpchen (eher zu weich)</li>
            <li>Breiige weiche Stücke (Diarrhö)</li>
            <li>Wässrig (schwere Diarrhö)</li>
          </ol>
          <p className="text-sm mb-3"><strong>Sofort melden:</strong> schwarzer (Teerstuhl, Magenbluten), blutiger oder anhaltend wässriger Stuhl; kein Stuhlgang &gt; 3 Tage; Blut im Urin.</p>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Kontinenzförderung &amp; Toilettentraining</h3>
          <ul className="list-disc pl-5 space-y-0.5 mb-3 text-sm">
            <li>Toilettenrhythmus aus dem Maßnahmenplan beachten und tagesaktuell aktiv anbieten.</li>
            <li>Demenz: Bedürfnis wird oft nicht mehr verbalisiert – aktiv begleiten.</li>
            <li>Wege frei, Beleuchtung, Haltegriffe, Toilettensitz­erhöhung.</li>
            <li>Würde wahren, Tür schließen, Klingel in Reichweite.</li>
            <li>Plötzliche Veränderung (z. B. neue Inkontinenz) kann auf HWI oder Delir hinweisen.</li>
          </ul>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Vorlagenwechsel</h3>
          <ol className="list-decimal pl-5 space-y-1 mb-3 text-sm">
            <li>Material vorbereiten, Hände desinfizieren, Handschuhe und ggf. Schürze.</li>
            <li>Bewohner:in informieren, Intimsphäre wahren, Tür schließen.</li>
            <li>Vorlage öffnen, Hautzustand und Stuhl/Urin beobachten.</li>
            <li>Intimreinigung von vorne nach hinten, frische Stelle pro Wisch.</li>
            <li>Haut vollständig trocknen, ggf. dünne Barrierecreme – keine fettenden Salben auf intakte feuchte Haut.</li>
            <li>Frische Vorlage faltenfrei, passende Größe.</li>
            <li>Wechselrhythmus nach Bedarf, nicht nach festem Stunden­takt.</li>
          </ol>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Inkontinenz-assoziierte Dermatitis (IAD)</h3>
          <p className="text-sm mb-2">Flächige Rötung, glänzende Haut, Brennen, kleine Bläschen oder Hautablösungen – meist im Genitalbereich, am Gesäß und in Hautfalten.</p>
          <p className="text-sm mb-2"><strong>IAD vs. Dekubitus:</strong> IAD ist flächig durch Feuchtigkeit, Dekubitus punktuell durch Druck über Knochen­vorsprüngen. Beides kann gemeinsam auftreten – beides ins Berichteblatt.</p>
          <p className="text-sm">Vorbeugung: frühzeitiger Wechsel · pH-neutrale Reinigung, tupfen statt reiben · dünne Schicht Barrierecreme oder Zinkpaste · Hautfalten gut trocknen · keine Watte (Mazeration).</p>
        </section>

        {/* Modul 7 */}
        <section className="mb-12 print:break-before-page">
          <h2 className="font-serif text-3xl font-bold text-primary mb-2">Modul 7 – Ernährung &amp; Trinken</h2>
          <p className="text-sm text-muted-foreground mb-6 italic">
            Lernziele: Mahlzeiten würdevoll begleiten · Schluckstörung erkennen · Aspirationsrisiken reduzieren ·
            Trinkmenge fördern und Exsikkose erkennen · Mangelernährung beobachten und melden.
          </p>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Mahlzeiten</h3>
          <ul className="list-disc pl-5 space-y-0.5 mb-3 text-sm">
            <li>Aufrechte Sitzposition (mind. 60–90°), Sehhilfen/Hörgeräte/Prothese einsetzen.</li>
            <li>Speisen ansprechend, Bezeichnungen nennen, Auswahl anbieten.</li>
            <li>Beim Anreichen auf Augenhöhe, Tempo der Person folgen, kleine Bissen, Schlucken abwarten.</li>
            <li>Selbstständigkeit fördern: Löffel oder Tasse in die Hand, Fingerfood.</li>
            <li>Konsistenz nach Maßnahmenplan beachten (passierte Kost, weiche Kost, angedickte Flüssigkeiten).</li>
          </ul>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Schluckstörung (Dysphagie)</h3>
          <p className="text-sm mb-2"><strong>Anzeichen:</strong> Husten/Räuspern beim Schlucken, gurgelnde Stimme, Speichelfluss, Speisereste im Mund, Atemnot, wiederholte Lungenentzündungen.</p>
          <p className="text-sm mb-2"><strong>Aspirationsprophylaxe:</strong> aufrechte Position, Kinn zur Brust, reizarme Umgebung, kleine Mengen langsam, ggf. angedickte Flüssigkeit, niemals im Liegen anreichen, nach der Mahlzeit 30 Min. aufrecht bleiben, Mundpflege nach dem Essen.</p>
          <p className="text-sm bg-red-50 border-l-4 border-red-500 p-2"><strong>Notfall:</strong> Bei Verschlucken mit Atemnot/Blauverfärbung: aufrecht setzen, zwischen Schulterblätter klopfen, ggf. Heimlich-Manöver, sofort Pflegefachkraft / Notruf 112.</p>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Trinken &amp; Exsikkose</h3>
          <p className="text-sm mb-2">Empfehlung mindestens 1,5 l/Tag (sofern medizinisch nicht begrenzt). Aktiv anbieten, Lieblingsgetränke berücksichtigen, Trinkprotokoll wenn vorgegeben.</p>
          <p className="text-sm mb-2"><strong>Anzeichen Exsikkose:</strong> stehende Hautfalten am Handrücken, trockene Schleimhäute/Zunge, eingesunkene Augen, dunkler/wenig Urin, plötzliche Verwirrtheit, Schwäche, Stürze, niedriger Blutdruck/schneller Puls.</p>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Mangelernährung</h3>
          <p className="text-sm">Ungewollter Gewichtsverlust, Appetitverlust, Schwäche, schlechte Wundheilung. Beobachtungen ins Berichteblatt; im Haus wird in der Regel ein <strong>PEMU-Bogen</strong> oder vergleichbares Instrument geführt.</p>
        </section>

        {/* Modul 8 */}
        <section className="mb-12 print:break-before-page">
          <h2 className="font-serif text-3xl font-bold text-primary mb-2">Modul 8 – Positionierung &amp; Transfer</h2>
          <p className="text-sm text-muted-foreground mb-6 italic">
            Lernziele: Bedeutung der Positionierung für Dekubitus-, Pneumonie- und Kontrakturprophylaxe · einfache
            Positionswechsel und Mikropositionierungen durchführen · Transfers ressourcenorientiert begleiten ·
            Kinästhetik und Bobath als Begriffe kennen · rückenschonend für sich selbst arbeiten.
          </p>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Positionierung</h3>
          <ul className="list-disc pl-5 space-y-0.5 mb-3 text-sm">
            <li><strong>30°-Schräglage:</strong> Standard zur Dekubitusprophylaxe, Becken/Schulter unterlegt, Gesäß frei.</li>
            <li><strong>Mikropositionierung:</strong> kleine Verschiebungen (2–5 cm) durch Tuch – wirksam, wenig belastend.</li>
            <li><strong>V-A-T-I-Positionierung</strong> zur Atemunterstützung; <strong>Hochpositionierung</strong> bei Atemnot oder nach Mahlzeiten; <strong>Beine hoch</strong> bei Ödemen.</li>
            <li>Faltenfreie Unterlage; Positionswechsel-Intervall individuell, nicht starr „alle 2 h".</li>
            <li>Bei jedem Wechsel: Hautinspektion (Fingertest), Inkontinenz, Komfort.</li>
          </ul>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Transfer Bett → Stuhl</h3>
          <ol className="list-decimal pl-5 space-y-1 mb-3 text-sm">
            <li>Schuhe statt Strümpfe, Bremsen feststellen, Wege frei, Bewohner:in informieren.</li>
            <li>Bett auf Höhe absenken (Füße haben Bodenkontakt).</li>
            <li>An die Bettkante setzen, Beine nach unten.</li>
            <li>„Nase über Knie" – Gewicht nach vorne verlagern.</li>
            <li>Pflegekraft seitlich, Knie an Knie, gemeinsam aufstehen.</li>
            <li>Drehung um 90°, langsam absetzen.</li>
          </ol>
          <p className="text-sm mb-3">Wenn nicht selbstständig: <strong>Lifter</strong> einsetzen – niemals zu zweit „heben".</p>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Kinästhetik &amp; Bobath</h3>
          <p className="text-sm mb-2"><strong>Kinästhetik (Hatch &amp; Maietta):</strong> Bewegungslehre, die das Körpergefühl der Person nutzt – Bewegung führen statt heben.</p>
          <p className="text-sm mb-3"><strong>Bobath:</strong> ursprünglich nach Schlaganfall – die betroffene Seite einbeziehen, nicht „wegpacken"; Wahrnehmungsförderung, symmetrische Positionierung.</p>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Eigenschutz</h3>
          <ul className="list-disc pl-5 space-y-0.5 mb-3 text-sm">
            <li>Bett/Arbeitshöhe immer anpassen (Pflegekraft-Hüfthöhe).</li>
            <li>Aus den Beinen heben, Knie beugen.</li>
            <li>Niemals heben, wenn schieben/ziehen/rollen geht.</li>
            <li>Hilfsmittel nutzen (Rutschbrett, Drehscheibe, Lifter).</li>
            <li>Lasten nahe am Körper, gerader Rücken, keine Drehbewegungen mit Last.</li>
            <li>Eigene Erschöpfung ernst nehmen, Pause oder zweite Person.</li>
          </ul>
        </section>

        {/* Modul 9 */}
        <section className="mb-12 print:break-before-page">
          <h2 className="font-serif text-3xl font-bold text-primary mb-2">Modul 9 – Menschen mit Demenz</h2>
          <p className="text-sm text-muted-foreground mb-6 italic">
            Lernziele: Demenz von normaler Vergesslichkeit und Delir unterscheiden · validierende Kommunikation
            anwenden · Biographiewissen nutzen · mit herausforderndem Verhalten deeskalierend umgehen ·
            plötzliche Verhaltens­änderungen als Frühzeichen erkennen.
          </p>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Grundlagen</h3>
          <p className="text-sm mb-2">Demenz: schleichend, fortschreitend, betrifft Gedächtnis, Denken, Sprache, Persönlichkeit.</p>
          <p className="text-sm bg-yellow-50 border-l-4 border-yellow-400 p-2 mb-3">
            <strong>Delir:</strong> akute Verwirrtheit innerhalb Stunden bis Tagen, meist medizinische Ursache
            (Infekt, Medikamente, Exsikkose, Schmerzen). <strong>Sofort melden!</strong> Ist KEINE
            „Verschlechterung der Demenz".
          </p>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Validation (Naomi Feil)</h3>
          <p className="text-sm mb-2">Das Gefühl der Person ernst nehmen, nicht die Realität korrigieren. In die Welt der Person eingehen, ohne zu lügen.</p>
          <ul className="list-disc pl-5 space-y-0.5 mb-3 text-sm">
            <li>Augenhöhe, Augenkontakt, mit Namen ansprechen, sich vorstellen.</li>
            <li>Kurze einfache Sätze, eine Aufforderung nach der anderen, langsam sprechen.</li>
            <li>Ruhige Stimme, freundlicher Gesichtsausdruck, Berührung mit Erlaubnis.</li>
            <li>Gefühle spiegeln statt korrigieren: „Sie vermissen Ihre Mutter, das verstehe ich."</li>
            <li>Routinen und Rituale geben Sicherheit.</li>
          </ul>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Biographiearbeit</h3>
          <p className="text-sm mb-2">Werkzeug für sichere Pflege: Beruf, Familie, Glaube, Vorlieben, was beruhigt – was triggert?</p>
          <p className="text-sm mb-3">Quellen: Biographiebogen (Pflichtteil im Strukturmodell), Gespräche mit Angehörigen, persönliche Gegenstände, genaues Hinhören im Alltag.</p>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Herausforderndes Verhalten</h3>
          <p className="text-sm mb-2">Verhalten ist Kommunikation. Erste Frage: Was ist die Ursache?</p>
          <p className="text-sm mb-2"><strong>Häufige Ursachen prüfen:</strong> Schmerzen · Harn-/Stuhldrang · Hunger/Durst · Über-/Unterzuckerung · zu warm/kalt · Reizüberflutung · Langeweile · Angst · akute Erkrankung (Delir).</p>
          <p className="text-sm mb-2"><strong>Deeskalation:</strong> ruhig atmen, Stimme senken, Abstand wahren, nicht von oben beugen, ablenken, Pflege bei Bedarf abbrechen und später wieder anbieten, dokumentieren, Pflegefachkraft informieren.</p>
          <p className="text-sm">Bei Selbst-/Fremdgefährdung sofort Hilfe holen – niemals alleine festhalten oder fixieren (siehe FEM in Modul 1).</p>
        </section>

        {/* Modul 10 */}
        <section className="mb-12 print:break-before-page">
          <h2 className="font-serif text-3xl font-bold text-primary mb-2">Modul 10 – Sterbebegleitung &amp; palliative Grundpflege</h2>
          <p className="text-sm text-muted-foreground mb-6 italic">
            Lernziele: Haltung der palliativen Pflege beschreiben · Anzeichen des nahenden
            Sterbens erkennen · palliative Grundpflege (Mund, Positionierung, Atmung, Schmerz) umsetzen ·
            Angehörige einfühlsam begleiten · eigene Gefühle wahrnehmen.
          </p>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Anzeichen des nahenden Sterbens</h3>
          <ul className="list-disc pl-5 space-y-0.5 mb-3 text-sm">
            <li>Deutlich nachlassendes Trinken und Essen, viel Schlaf, Rückzug</li>
            <li>Veränderte Atmung: flach, unregelmäßig, „rasselnd"</li>
            <li>Kalt werdende Hände/Füße, Marmorierung der Haut</li>
            <li>Eingefallenes Gesicht, verminderte Urinausscheidung, dunkler Urin</li>
            <li>Kürzere oder fehlende Reaktion auf Ansprache</li>
          </ul>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Palliative Grundpflege</h3>
          <p className="text-sm mb-2"><strong>Mundpflege</strong> – das Wichtigste: mehrmals stündlich befeuchten, Lieblingsgetränk, kein Spülen mehr (Aspiration), Lippen dünn fetten.</p>
          <p className="text-sm mb-2"><strong>Positionierung</strong> sehr behutsam, Mikropositionierungen, Komfort wichtiger als „idealer" Positionswechsel; bei rasselnder Atmung Oberkörper hoch.</p>
          <p className="text-sm mb-2"><strong>Atmung &amp; Schmerz:</strong> bei Atemnot Fenster auf / Ventilator, Oberkörper hoch; rasselnde Atmung der Pflegefachkraft melden, Absaugen meist nicht hilfreich; Schmerzen auch nonverbal ernst nehmen.</p>
          <p className="text-sm mb-3"><strong>Würde &amp; Sinneserfahrung:</strong> vertraute Stimmen, leise Musik, gedämpftes Licht, warme Hand, vertrauter Geruch, spirituelle Begleitung – Hören bleibt am längsten.</p>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Angehörige</h3>
          <ul className="list-disc pl-5 space-y-0.5 mb-3 text-sm">
            <li>Vorstellen, Namen merken, mit Ruhe begegnen, aktiv informieren ohne dramatische Worte.</li>
            <li>Einbeziehen anbieten (Hand halten, Mund befeuchten, Stirn streichen).</li>
            <li>Übernachtungsmöglichkeit, Getränke, ruhige Ecke nach Hausstandard.</li>
            <li>Schweigepflicht beachten; medizinische Fragen an PFK / Hausarzt / Seelsorge weiterleiten.</li>
          </ul>

          <h3 className="font-serif text-xl font-bold text-primary mt-6 mb-3">Sie selbst</h3>
          <p className="text-sm mb-2">Sterbebegleitung ist intensiv. Trauer, Erschöpfung, Hilflosigkeit gehören dazu. Pausen, Austausch im Team, bewusster Abschluss am Bett, ggf. Supervision.</p>
          <p className="text-sm italic">„Ich kann nicht heilen. Aber ich kann dabei sein."</p>
        </section>

        {/* Anhang */}
        <section className="mb-12 print:break-before-page">
          <h2 className="font-serif text-3xl font-bold text-primary mb-4">Anhang: Was muss ich sofort melden?</h2>
          <p className="mb-3 text-sm">Bestimmte Beobachtungen gehören <strong>unverzüglich</strong> an die zuständige Pflegefachkraft – nicht erst am Schichtende und nicht nur ins Berichteblatt:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Plötzliche Verwirrtheit, einseitige Lähmung, hängender Mundwinkel, Sprachstörung (<strong>FAST</strong> – Schlaganfall-Verdacht)</li>
            <li>Atemnot, blaue Lippen, Brustschmerz</li>
            <li>Sturz – auch wenn die Person scheinbar unverletzt ist</li>
            <li>Neue, nicht-wegdrückbare Hautrötung oder offene Wunde</li>
            <li>Zittern, kalter Schweiß, Bewusstseinstrübung (Hypoglykämie?)</li>
            <li>Neue oder ungewöhnlich starke Schmerzäußerungen</li>
            <li>Verweigerung von Essen/Trinken über mehrere Mahlzeiten</li>
            <li>Schwarzer/blutiger Stuhl, Blut im Urin, anhaltender Durchfall</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-6 border-t-2 border-primary text-center text-xs text-muted-foreground">
          <p className="font-bold text-primary">CareConnect · Fortbildung Grundpflege</p>
          <p>Fortbildung Grundpflege · für interne Schulungszwecke</p>
          <p className="mt-2 italic">
            Inhalte basieren auf Expertenstandards des DNQP, an KRINKO-/RKI-Empfehlungen
            sowie an gängiger Pflegefachliteratur.
          </p>
        </footer>
      </article>
    </div>
  );
}
