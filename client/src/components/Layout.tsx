import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { BookOpen, Heart, HeartPulse, Home, Info, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Start", icon: Home },
    { path: "/module-1", label: "Grundlagen", icon: Info },
    { path: "/handbuch", label: "Handbuch", icon: BookOpen },
    { path: "/quiz", label: "Wissenscheck", icon: BookOpen },
  ];

  const moduleNavItems = [
    { path: "/module-1", label: "1 · Grundlagen, Rolle & Pflegeprozess" },
    { path: "/module-2", label: "2 · Waschung im Bett" },
    { path: "/module-3", label: "3 · Waschung am Waschbecken" },
    { path: "/module-4", label: "4 · Anleitung & Aktivierung" },
    { path: "/module-5", label: "5 · Mund- & Zahnpflege" },
    { path: "/module-6", label: "6 · Ausscheidung & Inkontinenz" },
    { path: "/module-7", label: "7 · Ernährung & Trinken" },
    { path: "/module-8", label: "8 · Lagerung & Transfer" },
    { path: "/module-9", label: "9 · Menschen mit Demenz" },
    { path: "/module-10", label: "10 · Sterbebegleitung" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm print:hidden">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <img src="/images/caritas-logo.png" alt="Caritas Maria-Hötte-Stift" className="h-10 object-contain" />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                    location === item.path
                      ? "text-primary font-bold border-b-2 border-primary pb-1"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menü öffnen</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-6">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <div className="flex items-center cursor-pointer mb-4">
                    <img src="/images/caritas-logo.png" alt="Caritas Maria-Hötte-Stift" className="h-10 object-contain" />
                  </div>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link key={item.path} href={item.path} onClick={() => setIsOpen(false)}>
                      <div
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors cursor-pointer",
                          location === item.path
                            ? "bg-primary/10 text-primary font-bold"
                            : "hover:bg-muted text-muted-foreground"
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        {item.label}
                      </div>
                    </Link>
                  ))}
                </nav>
                <div className="mt-2 border-t pt-4">
                  <p className="px-4 text-xs uppercase tracking-wider text-muted-foreground mb-2">Module</p>
                  <nav className="flex flex-col gap-1">
                    {moduleNavItems.map((item) => (
                      <Link key={item.path} href={item.path} onClick={() => setIsOpen(false)}>
                        <div
                          className={cn(
                            "px-4 py-2 rounded-lg transition-colors cursor-pointer text-sm",
                            location === item.path
                              ? "bg-primary/10 text-primary font-bold"
                              : "hover:bg-muted text-muted-foreground"
                          )}
                        >
                          {item.label}
                        </div>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-8 mt-12 print:hidden">
        <div className="container flex flex-col gap-4 text-sm text-muted-foreground">
          <p className="text-xs italic max-w-3xl">
            Hinweis: Diese Fortbildung dient der einrichtungsinternen Schulung von Pflegehilfskräften.
            Sie ersetzt weder eine pflegerische Berufsausbildung noch die fachliche Anleitung durch eine examinierte
            Pflegekraft. Die Inhalte orientieren sich an den Expertenstandards des DNQP, an KRINKO-/RKI-Empfehlungen
            sowie an gängiger Pflegefachliteratur.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-2 border-t border-border/50">
            <p>© 2025 Caritas Maria-Hötte-Stift – Fortbildung Grundpflege</p>
            <div className="flex gap-4">
              <Link href="/impressum"><span className="hover:text-primary cursor-pointer">Impressum</span></Link>
              <Link href="/datenschutz"><span className="hover:text-primary cursor-pointer">Datenschutz</span></Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
