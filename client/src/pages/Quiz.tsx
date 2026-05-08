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
      "Dem Bewohner alle Aufgaben abzunehmen, damit er sich ausruhen kann.",
      "Die Selbstständigkeit des Bewohners zu erhalten und zu fördern ('Hilfe zur Selbsthilfe').",
      "Kosten für Pflegematerial zu sparen."
    ],
    correctAnswer: 2,
    explanation: "Richtig! Aktivierende Pflege zielt darauf ab, vorhandene Ressourcen zu nutzen und die Eigenständigkeit so lange wie möglich zu bewahren."
  },
  {
    id: 2,
    question: "Was gehört zur Vorbereitung einer Ganzkörperwaschung im Bett?",
    options: [
      "Nur frische Kleidung bereitlegen.",
      "Fenster öffnen für frische Luft.",
      "Materialien bereitlegen, Hände desinfizieren, Fenster schließen, Bewohner informieren.",
     "Den Bewohner sofort ausziehen."
    ],
    correctAnswer: 2,
    explanation: "Genau. Eine gute Vorbereitung (Material, Hygiene, Umgebung, Information) ist essenziell für einen reibungslosen Ablauf und das Wohlbefinden."
  },
  {
    id: 3,
    question: "Warum ist die Beobachtung der Haut während der Waschung so wichtig?",
    options: [
      "Um zu sehen, ob der Bewohner braun geworden ist.",
      "Um frühzeitig Anzeichen von Dekubitus (Druckstellen), Pilzinfektionen oder Verletzungen zu erkennen.",
      "Es ist nicht wichtig, das macht der Arzt.",
      "Um zu prüfen, ob die Seife gut riecht."
    ],
    correctAnswer: 1,
    explanation: "Korrekt. Die Hautbeobachtung ist eine zentrale Aufgabe, um gesundheitliche Probleme wie Dekubitus frühzeitig zu erkennen und zu behandeln."
  },
  {
    id: 4,
    question: "In welcher Richtung sollte die Waschung der Extremitäten (Arme/Beine) erfolgen?",
    options: [
      "Von oben nach unten.",
      "Kreuz und quer.",
      "Herzwärts (von der Hand zur Schulter / vom Fuß zum Oberschenkel).",
      "Vom Körper weg."
    ],
    correctAnswer: 2,
    explanation: "Richtig. Die Waschung erfolgt 'herzwärts', um den venösen Rückfluss des Blutes zum Herzen zu fördern."
  },
  {
    id: 5,
    question: "Was ist bei der Intimpflege einer Frau besonders zu beachten?",
    options: [
      "Es gibt keine Besonderheiten.",
      "Immer von der Schamfuge zum Anus hin waschen.",
      "Immer vom Anus zur Schamfuge hin waschen.",
      "Nur klares Wasser verwenden."
    ],
    correctAnswer: 1,
    explanation: "Wichtig! Um eine Keimverschleppung vom Darm in die Harnröhre (und damit Blasenentzündungen) zu vermeiden, muss immer von vorne nach hinten gewaschen werden."
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
      doc.setFillColor(250, 248, 245); // Light cream background
      doc.rect(0, 0, 297, 210, "F");
      
      // Border
      doc.setDrawColor(227, 0, 15); // Caritas Red
      doc.setLineWidth(2);
      doc.rect(10, 10, 277, 190);
      doc.setLineWidth(0.5);
      doc.rect(12, 12, 273, 186);

      // Title
      doc.setTextColor(227, 0, 15);
      doc.setFontSize(36);
      doc.setFont("helvetica", "bold");
      doc.text("ZERTIFIKAT", 148.5, 50, { align: "center" });

      // Subtitle
      doc.setTextColor(50, 50, 50);
      doc.setFontSize(16);
      doc.setFont("helvetica", "normal");
      doc.text("Hiermit wird bestätigt, dass", 148.5, 75, { align: "center" });

      // Name
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(28);
      doc.setFont("helvetica", "bold");
      doc.text(userName, 148.5, 95, { align: "center" });

      // Course
      doc.setTextColor(50, 50, 50);
      doc.setFontSize(16);
      doc.setFont("helvetica", "normal");
      doc.text("erfolgreich an der Fortbildung", 148.5, 115, { align: "center" });
      
      doc.setTextColor(227, 0, 15);
      doc.setFontSize(20);
      doc.setFont("helvetica", "bold");
      doc.text("Einführung in die Grundpflege", 148.5, 130, { align: "center" });

      // Date
      const today = new Date().toLocaleDateString("de-DE");
      doc.setTextColor(50, 50, 50);
      doc.setFontSize(14);
      doc.setFont("helvetica", "normal");
      doc.text(`Münster, den ${today}`, 148.5, 155, { align: "center" });

      // Signature line
      doc.setDrawColor(100, 100, 100);
      doc.setLineWidth(0.5);
      doc.line(100, 180, 197, 180);
      doc.setFontSize(12);
      doc.text("Caritas Maria-Hötte-Stift", 148.5, 186, { align: "center" });

      // Save
      doc.save(`Zertifikat_Grundpflege_${userName.replace(/\s+/g, "_")}.pdf`);
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
      if (currentQuestionIndex === questions.length - 1) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
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
    return (
      <div className="container max-w-2xl mx-auto px-4 py-12 text-center">
        <Card className="border-none shadow-lg bg-white/50 backdrop-blur-sm">
          <CardContent className="pt-12 pb-8">
            <div className="mb-6 flex justify-center">
              {score === questions.length ? (
                <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle className="h-12 w-12" />
                </div>
              ) : (
                <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <CheckCircle className="h-12 w-12" />
                </div>
              )}
            </div>
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">Herzlichen Glückwunsch!</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Sie haben das Quiz abgeschlossen.
            </p>
            <div className="text-4xl font-bold mb-2 text-primary">
              {score} / {questions.length}
            </div>
            <p className="text-muted-foreground mb-8">Fragen richtig beantwortet</p>
            
            {score === questions.length && (
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
                <Button className="rounded-full px-8" variant={score === questions.length ? "outline" : "default"}>
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
