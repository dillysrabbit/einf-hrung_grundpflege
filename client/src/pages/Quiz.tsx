import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, CheckCircle, RefreshCcw, XCircle } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download } from "lucide-react";
import jsPDF from "jspdf";
import { Link } from "wouter";
import confetti from "canvas-confetti";

type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

const questions: Question[] = [
  {
    id: 1,
    question: "Was ist das oberste Ziel der aktivierenden Pflege?",
    options: [
      "Die Pflege so schnell wie möglich zu erledigen.",
      "Der bewohnenden Person alle Aufgaben abzunehmen, damit sie sich ausruhen kann.",
      "Die Selbstständigkeit zu erhalten und zu fördern ('Hilfe zur Selbsthilfe').",
      "Kosten für Pflegematerial zu sparen."
    ],
    correctAnswer: 2,
    explanation: "Richtig. Aktivierende Pflege nutzt vorhandene Ressourcen und bewahrt die Eigenständigkeit so lange wie möglich."
  },
  {
    id: 2,
    question: "Was gehört zur Vorbereitung einer Ganzkörperwaschung im Bett?",
    options: [
      "Nur frische Kleidung bereitlegen.",
      "Fenster öffnen für frische Luft.",
      "Materialien bereitlegen, Hände desinfizieren, Fenster schließen, Bewohner:in informieren.",
      "Die bewohnende Person sofort ausziehen."
    ],
    correctAnswer: 2,
    explanation: "Eine gute Vorbereitung (Material, Hygiene, Umgebung, Information) ist essenziell für Sicherheit und Wohlbefinden."
  },
  {
    id: 3,
    question: "Warum ist die Beobachtung der Haut während der Waschung wichtig?",
    options: [
      "Um zu prüfen, ob die Person braun geworden ist.",
      "Um frühzeitig Anzeichen von Dekubitus, Pilzinfektionen oder Verletzungen zu erkennen.",
      "Es ist nicht wichtig – das macht die Ärztin.",
      "Um zu prüfen, ob die Seife gut riecht."
    ],
    correctAnswer: 1,
    explanation: "Hautbeobachtung ist eine Kernaufgabe, um Dekubitus, Hautpilz und andere Probleme frühzeitig zu erkennen."
  },
  {
    id: 4,
    question: "In welcher Richtung sollte die Waschung der Arme und Beine erfolgen?",
    options: [
      "Von oben nach unten.",
      "Kreuz und quer.",
      "Herzwärts (von der Hand zur Schulter / vom Fuß zum Oberschenkel).",
      "Vom Körper weg."
    ],
    correctAnswer: 2,
    explanation: "Herzwärts waschen fördert die Wahrnehmung der eigenen Körpergrenzen (basale Stimulation) und unterstützt den venösen Rückfluss."
  },
  {
    id: 5,
    question: "Was ist bei der Intimpflege einer Frau besonders zu beachten?",
    options: [
      "Es gibt keine Besonderheiten.",
      "Immer von der Schamfuge zum Anus hin waschen, mit jedem Wisch frische Lappenstelle.",
      "Immer vom Anus zur Schamfuge hin waschen.",
      "Nur klares Wasser verwenden, ohne Waschlappenwechsel."
    ],
    correctAnswer: 1,
    explanation: "Von vorne nach hinten waschen verhindert Keimverschleppung aus dem Darm in die Harnröhre (Prophylaxe Harnwegsinfekt)."
  },
  {
    id: 6,
    question: "Wie reinigen Sie ein gesundes, nicht entzündetes Auge während der Gesichtswaschung?",
    options: [
      "Mit demselben Lappen für beide Augen, in beliebiger Richtung.",
      "Vom äußeren zum inneren Augenwinkel, mit jeweils frischer Stelle des Waschlappens und ein Auge nach dem anderen.",
      "Mit Seifenwasser kreisend einreiben.",
      "Mit einem trockenen Tuch abwischen."
    ],
    correctAnswer: 1,
    explanation: "Beim gesunden Auge folgt man der natürlichen Tränendrainage von außen nach innen. Pro Wisch und pro Auge eine frische Stelle des Waschlappens. Bei einem entzündeten oder infizierten Auge wird umgekehrt von innen nach außen gewischt, damit keine Keime in den Tränen-Nasen-Gang gelangen."
  },
  {
    id: 7,
    question: "Wie wird die Wassertemperatur beim Waschen festgelegt – und wer prüft sie?",
    options: [
      "Über 50 °C, die Person kann es selbst prüfen.",
      "Nach Wunsch der bewohnenden Person (Richtwert 37–43 °C); immer zuerst die Pflegekraft mit der Innenseite des Unterarms.",
      "Genau 30 °C, gemessen mit dem Finger.",
      "Egal, solange die Person nicht klagt."
    ],
    correctAnswer: 1,
    explanation: "Maßgeblich ist der Wunsch der bewohnenden Person; 37–43 °C ist ein empfehlenswerter Richtwert. Die Pflegekraft prüft, weil bei Diabetes, Demenz oder Sensibilitätsstörung die Eigenwahrnehmung unzuverlässig sein kann (Verbrühungsgefahr)."
  },
  {
    id: 8,
    question: "Wann ziehen Sie Einmalhandschuhe an?",
    options: [
      "Immer, sobald Sie das Zimmer betreten.",
      "Nur bei Kontakt mit Körperflüssigkeiten, Schleimhäuten oder nicht-intakter Haut.",
      "Bei der gesamten Waschung statt einer Händedesinfektion.",
      "Nie – Handschuhe sind unhygienisch."
    ],
    correctAnswer: 1,
    explanation: "Handschuhe sind kein Routinemittel und ersetzen die Händedesinfektion nicht. Sie kommen gezielt bei Kontakt mit Körperflüssigkeiten, Schleimhäuten oder nicht-intakter Haut zum Einsatz."
  },
  {
    id: 9,
    question: "Was sind die '5 Momente der Händehygiene' der WHO?",
    options: [
      "5 verschiedene Desinfektionsmittel zur Auswahl.",
      "5 Sekunden Einreiben bei der Händedesinfektion.",
      "5 definierte Zeitpunkte: vor Bewohnerkontakt, vor aseptischer Tätigkeit, nach Kontakt mit infektiösem Material, nach Bewohnerkontakt, nach Kontakt mit der Bewohnerumgebung.",
      "5 Fingerstellungen zum Einreiben des Mittels."
    ],
    correctAnswer: 2,
    explanation: "Die 5 Momente sind die wirksamste Einzelmaßnahme zur Infektionsprävention in der Pflege."
  },
  {
    id: 10,
    question: "Was ist nach der Intimpflege beim Mann unbedingt zu beachten?",
    options: [
      "Die Vorhaut zwingend wieder vorschieben.",
      "Eine spezielle Salbe auftragen.",
      "Die Vorhaut bewusst zurückgeschoben lassen, damit es luftiger wird.",
      "Nichts Besonderes – es ist wie bei der Frau."
    ],
    correctAnswer: 0,
    explanation: "Eine vergessene oder dauerhaft zurückgeschobene Vorhaut führt zur Paraphimose ('spanischer Kragen') – ein urologischer Notfall."
  },
  {
    id: 11,
    question: "Was unterscheidet Grundpflege von Behandlungspflege?",
    options: [
      "Es gibt keinen Unterschied.",
      "Grundpflege ist freiwillig, Behandlungspflege ist Pflicht.",
      "Grundpflege deckt Aktivitäten des täglichen Lebens (SGB XI) ab; Behandlungspflege umfasst ärztlich verordnete Maßnahmen (SGB V).",
      "Grundpflege macht der Arzt, Behandlungspflege die Pflegekraft."
    ],
    correctAnswer: 2,
    explanation: "Grundpflege (Waschen, Essen, Mobilität) wird über die Pflegeversicherung finanziert; Behandlungspflege (Wunden, Medikamente, Injektionen) ist ärztlich verordnet und wird über die Krankenkasse finanziert."
  },
  {
    id: 12,
    question: "Welche der folgenden Beobachtungen müssen Sie SOFORT an die Pflegefachkraft melden?",
    options: [
      "Die Bewohnerin hat heute eine andere Lieblingstasse gewählt.",
      "Plötzlicher hängender Mundwinkel und Sprachstörung.",
      "Eine kleine, wegdrückbare Hautrötung am Oberarm.",
      "Die Person möchte nach dem Frühstück noch ein wenig schlafen."
    ],
    correctAnswer: 1,
    explanation: "Hängender Mundwinkel und Sprachstörung sind klassische Schlaganfall-Anzeichen (FAST: Face, Arms, Speech, Time) – sofortige Meldung, Zeit zählt!"
  },
  {
    id: 13,
    question: "Was bedeutet die Schweigepflicht (§ 203 StGB) im Pflegealltag?",
    options: [
      "Mit Bewohnerinnen darf man nicht sprechen.",
      "Informationen über Bewohner:innen dürfen nicht an Außenstehende weitergegeben werden – auch nicht an Familienangehörige ohne Erlaubnis.",
      "Pflegehilfskräfte müssen schweigen, wenn die Pflegefachkraft im Raum ist.",
      "Im Pausenraum darf alles besprochen werden, weil das interner Bereich ist."
    ],
    correctAnswer: 1,
    explanation: "Auch Pflegehilfskräfte unterliegen der Schweigepflicht. Verstöße können arbeits- und strafrechtliche Folgen haben."
  },
  {
    id: 14,
    question: "Sie entdecken am Steißbein eine Hautrötung. Was prüfen Sie zuerst?",
    options: [
      "Ob die Bewohnerin die Stelle selbst sieht.",
      "Ob sich die Rötung mit dem Finger wegdrücken lässt (Fingertest).",
      "Ob die Rötung warm ist – wenn ja, ist alles ok.",
      "Ob die Stelle schmerzt – wenn nicht, ist nichts zu tun."
    ],
    correctAnswer: 1,
    explanation: "Eine wegdrückbare Rötung ist eine 'normale' Hautreaktion. Eine NICHT wegdrückbare Rötung ist ein Dekubitus Kategorie 1 – sofort an die Pflegefachkraft melden."
  },
  {
    id: 15,
    question: "Warum sollten Sie keine Watte zwischen die Zehen legen?",
    options: [
      "Weil Watte zu teuer ist.",
      "Weil Watte Feuchtigkeit zieht und so Mazeration und Pilzwachstum begünstigt.",
      "Weil Watte allergische Reaktionen auslöst.",
      "Watte zwischen die Zehen legen ist eigentlich Standard."
    ],
    correctAnswer: 1,
    explanation: "Feuchte Hautareale zwischen den Zehen sind ideale Brutstätten für Pilze und können die Haut aufweichen (Mazeration). Stattdessen gründlich trocknen."
  },
  {
    id: 16,
    question: "Welche vier Phasen umfasst der Pflegeprozess im Strukturmodell?",
    options: [
      "Anamnese · Pflegediagnose · Pflegeziele · Auswertung",
      "SIS · Maßnahmenplan · Berichteblatt · Evaluation",
      "Aufnahmegespräch · Pflegeplan · Tagesbericht · Abschlussbericht",
      "Waschen · Essen · Schlafen · Beschäftigen"
    ],
    correctAnswer: 1,
    explanation: "Die vier Phasen sind: Strukturierte Informationssammlung (SIS), individueller Maßnahmenplan, Berichteblatt (Abweichungen) und anlassbezogene Evaluation. Pflegeplanung und Evaluation sind Vorbehaltsaufgaben der Pflegefachkraft."
  },
  {
    id: 18,
    question: "Was wird im Berichteblatt nach dem Strukturmodell eingetragen?",
    options: [
      "Jede einzelne durchgeführte Pflegemaßnahme im Detail.",
      "Nur Abweichungen vom Maßnahmenplan, neue Beobachtungen und besondere Ereignisse.",
      "Nur Stürze und keine sonstigen Beobachtungen.",
      "Nichts – das Berichteblatt führt ausschließlich die Pflegefachkraft."
    ],
    correctAnswer: 1,
    explanation: "Kerngedanke der Entbürokratisierung: Routine wird NICHT dokumentiert. Eingetragen werden Abweichungen, Auffälligkeiten in den fünf Pflegerisiken (Dekubitus, Sturz, Inkontinenz, Schmerz, Ernährung) sowie Veränderungen in den SIS-Themenfeldern."
  },
  {
    id: 19,
    question: "Was ist die Strukturierte Informationssammlung (SIS)?",
    options: [
      "Eine Liste aller Medikamente der Bewohnerin/des Bewohners.",
      "Ein Erhebungsinstrument mit sechs Themenfeldern, das Informationen aus Sicht der bewohnenden Person zusammenführt.",
      "Eine Software zur Dienstplanung.",
      "Das Berichteblatt am Ende der Schicht."
    ],
    correctAnswer: 1,
    explanation: "Die SIS ist das zentrale Instrument im Strukturmodell. Sie startet mit der Eingangsfrage „Was bewegt Sie? Was brauchen Sie? Was können wir für Sie tun?\" und gliedert die Informationen in die sechs Themenfelder A bis F (Kognition, Mobilität, krankheitsbezogene Belastungen, Selbstversorgung, soziale Beziehungen, Wohnen)."
  },
  {
    id: 17,
    question: "Eine Bewohnerin mit fortgeschrittener Demenz weigert sich heute morgen, sich waschen zu lassen, und wirkt unruhig. Was tun Sie?",
    options: [
      "Die Waschung trotzdem durchziehen, damit der Tagesplan eingehalten wird.",
      "Die Waschung abbrechen und sie nie wieder versuchen.",
      "Ruhig bleiben, validierend kommunizieren, später erneut anbieten und die Pflegefachkraft informieren.",
      "Die Bewohnerin zurechtweisen, damit sie kooperiert."
    ],
    correctAnswer: 2,
    explanation: "Validation (nach Naomi Feil), Geduld und Anpassung des Zeitpunkts sind zentral. Die Pflegefachkraft prüft, ob Schmerzen, Angst oder ein neues Symptom dahinterstecken."
  }
];

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userName, setUserName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateCertificate = () => {
    if (!userName.trim()) return;

    setIsGenerating(true);

    try {
      const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4"
      });

      // Background
      doc.setFillColor(250, 248, 245);
      doc.rect(0, 0, 297, 210, "F");

      // Border
      doc.setDrawColor(227, 0, 15);
      doc.setLineWidth(2);
      doc.rect(10, 10, 277, 190);
      doc.setLineWidth(0.5);
      doc.rect(12, 12, 273, 186);

      // Title
      doc.setTextColor(227, 0, 15);
      doc.setFontSize(34);
      doc.setFont("helvetica", "bold");
      doc.text("TEILNAHMEBESTÄTIGUNG", 148.5, 38, { align: "center" });

      // Subtitle
      doc.setTextColor(50, 50, 50);
      doc.setFontSize(14);
      doc.setFont("helvetica", "normal");
      doc.text("Hiermit wird bestätigt, dass", 148.5, 60, { align: "center" });

      // Name
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(26);
      doc.setFont("helvetica", "bold");
      doc.text(userName, 148.5, 78, { align: "center" });

      // Course
      doc.setTextColor(50, 50, 50);
      doc.setFontSize(14);
      doc.setFont("helvetica", "normal");
      doc.text("erfolgreich an der internen Fortbildung", 148.5, 95, { align: "center" });

      doc.setTextColor(227, 0, 15);
      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text("Einführung in die Grundpflege", 148.5, 108, { align: "center" });

      doc.setTextColor(50, 50, 50);
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text("teilgenommen und den Wissenscheck bestanden hat.", 148.5, 118, { align: "center" });

      // Inhalte
      doc.setFontSize(10);
      doc.text("Inhalte: Rolle der Pflegehilfskraft & Pflegeprozess · Hygiene & Schweigepflicht ·", 148.5, 132, { align: "center" });
      doc.text("Ganzkörperwaschung im Bett · Waschung am Waschbecken · Aktivierende Pflege", 148.5, 137, { align: "center" });

      // Metadaten-Block (links)
      const today = new Date();
      const todayStr = today.toLocaleDateString("de-DE");
      const certId = `MHS-GP-${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, "0")}${String(today.getDate()).padStart(2, "0")}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
      const passThreshold = Math.ceil(questions.length * 0.8);

      doc.setFontSize(9);
      doc.setTextColor(80, 80, 80);
      doc.text(`Schulungsumfang: ca. 2 Unterrichtseinheiten (Selbstlernformat)`, 30, 155);
      doc.text(`Wissenscheck: ${score} / ${questions.length} richtige Antworten (Bestehensgrenze ${passThreshold} = 80 %)`, 30, 161);
      doc.text(`Datum: ${todayStr}     Zertifikat-ID: ${certId}`, 30, 167);

      // Signaturlinie rechts
      doc.setDrawColor(100, 100, 100);
      doc.setLineWidth(0.4);
      doc.line(190, 175, 265, 175);
      doc.setFontSize(9);
      doc.text("Pflegedienstleitung", 227.5, 180, { align: "center" });
      doc.text("Caritas Maria-Hötte-Stift, Münster", 227.5, 185, { align: "center" });

      // Hinweis
      doc.setFontSize(7.5);
      doc.setTextColor(120, 120, 120);
      doc.text(
        "Diese Bestätigung dokumentiert die Teilnahme an einer einrichtungsinternen Schulung. Sie ersetzt keine pflegerische Berufsausbildung und keine staatliche Anerkennung.",
        148.5,
        198,
        { align: "center", maxWidth: 240 }
      );

      doc.save(`Teilnahmebestaetigung_Grundpflege_${userName.replace(/\s+/g, "_")}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / questions.length) * 100;

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      const passThreshold = Math.ceil(questions.length * 0.8);
      if (score >= passThreshold) {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      }
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    const passThreshold = Math.ceil(questions.length * 0.8);
    const passed = score >= passThreshold;

    return (
      <div className="container max-w-2xl mx-auto px-4 py-12 text-center">
        <Card className="border-none shadow-lg bg-white/50 backdrop-blur-sm">
          <CardContent className="pt-12 pb-8">
            <div className="mb-6 flex justify-center">
              {passed ? (
                <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle className="h-12 w-12" />
                </div>
              ) : (
                <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <RefreshCcw className="h-12 w-12" />
                </div>
              )}
            </div>
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">
              {passed ? "Herzlichen Glückwunsch!" : "Fast geschafft!"}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {passed
                ? "Sie haben den Wissenscheck erfolgreich bestanden."
                : `Zum Bestehen werden mindestens ${passThreshold} von ${questions.length} richtigen Antworten benötigt. Bitte wiederholen Sie das Quiz.`}
            </p>
            <div className="text-4xl font-bold mb-2 text-primary">
              {score} / {questions.length}
            </div>
            <p className="text-muted-foreground mb-8">
              Fragen richtig beantwortet (Bestehensgrenze: {passThreshold} / {questions.length} = 80 %)
            </p>

            {passed && (
              <div className="bg-secondary/20 p-6 rounded-xl mb-8 text-left max-w-md mx-auto border border-border">
                <h3 className="font-bold text-lg mb-4 text-center">Ihr persönliches Zertifikat</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Vor- und Nachname</Label>
                    <Input
                      id="name"
                      placeholder="Max Mustermann"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="bg-white"
                    />
                  </div>
                  <Button
                    onClick={generateCertificate}
                    disabled={!userName.trim() || isGenerating}
                    className="w-full"
                  >
                    {isGenerating ? (
                      <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Download className="mr-2 h-4 w-4" />
                    )}
                    Zertifikat herunterladen
                  </Button>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={restartQuiz} variant="outline" className="rounded-full">
                <RefreshCcw className="mr-2 h-4 w-4" /> Quiz wiederholen
              </Button>
              <Link href="/">
                <Button className="rounded-full px-8" variant={passed ? "outline" : "default"}>
                  Zurück zur Startseite
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl mx-auto px-4 py-12">
      <div className="mb-8">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Frage {currentQuestionIndex + 1} von {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle className="font-serif text-xl md:text-2xl leading-relaxed">
            {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`
                p-4 rounded-lg border-2 cursor-pointer transition-all flex items-center gap-3
                ${selectedOption === index 
                  ? isAnswered 
                    ? index === currentQuestion.correctAnswer 
                      ? "border-green-500 bg-green-50" 
                      : "border-red-500 bg-red-50"
                    : "border-primary bg-primary/5"
                  : "border-transparent bg-secondary/30 hover:bg-secondary/50"
                }
                ${isAnswered && index === currentQuestion.correctAnswer ? "border-green-500 bg-green-50" : ""}
              `}
            >
              <div className={`
                w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0
                ${selectedOption === index || (isAnswered && index === currentQuestion.correctAnswer)
                  ? isAnswered && index === currentQuestion.correctAnswer 
                    ? "border-green-600 bg-green-600 text-white"
                    : isAnswered && selectedOption === index
                      ? "border-red-600 bg-red-600 text-white"
                      : "border-primary bg-primary text-white"
                  : "border-muted-foreground"
                }
              `}>
                {isAnswered && index === currentQuestion.correctAnswer && <CheckCircle className="h-4 w-4" />}
                {isAnswered && selectedOption === index && index !== currentQuestion.correctAnswer && <XCircle className="h-4 w-4" />}
              </div>
              <span className={isAnswered && index === currentQuestion.correctAnswer ? "font-medium text-green-900" : ""}>
                {option}
              </span>
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex flex-col gap-4 pt-2">
          {isAnswered && (
            <div className={`w-full p-4 rounded-lg ${selectedOption === currentQuestion.correctAnswer ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
              <p className="font-bold mb-1">
                {selectedOption === currentQuestion.correctAnswer ? "Richtig!" : "Leider falsch."}
              </p>
              <p className="text-sm">{currentQuestion.explanation}</p>
            </div>
          )}
          
          {!isAnswered ? (
            <Button 
              onClick={handleSubmit} 
              disabled={selectedOption === null} 
              className="w-full rounded-full text-lg py-6"
            >
              Antwort prüfen
            </Button>
          ) : (
            <Button 
              onClick={handleNext} 
              className="w-full rounded-full text-lg py-6"
            >
              {currentQuestionIndex < questions.length - 1 ? "Nächste Frage" : "Ergebnis anzeigen"} <ArrowRight className="ml-2" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
