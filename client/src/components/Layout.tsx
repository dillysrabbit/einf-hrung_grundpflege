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
    { path: "/module-2", label: "Waschung im Bett", icon: Heart },
    { path: "/module-3", label: "Waschbecken", icon: Heart },
    { path: "/module-4", label: "Anleitung", icon: BookOpen },
    { path: "/quiz", label: "Wissenscheck", icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                {/* Logo Placeholder - Caritas */}
                <div className="h-8 w-8 rounded-sm bg-primary flex items-center justify-center text-primary-foreground">
                  <HeartPulse className="h-5 w-5 fill-current" />
                </div>
                <div className="flex flex-col hidden sm:flex">
                  <span className="font-sans text-xl font-bold text-primary leading-none">
                    Caritas
                  </span>
                  <span className="font-sans text-xs text-muted-foreground leading-none mt-1">
                    Maria-Hötte-Stift
                  </span>
                </div>
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
                  <div className="flex items-center gap-2 cursor-pointer mb-4">
                    <div className="h-8 w-8 rounded-sm bg-primary flex items-center justify-center text-primary-foreground">
                      <HeartPulse className="h-5 w-5 fill-current" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans text-xl font-bold text-primary leading-none">
                        Caritas
                      </span>
                      <span className="font-sans text-xs text-muted-foreground leading-none mt-1">
                        Maria-Hötte-Stift
                      </span>
                    </div>
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
      <footer className="border-t bg-white py-8 mt-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Caritas Maria-Hötte-Stift - Fortbildung Grundpflege</p>
          <div className="flex gap-4">
            <Link href="/impressum"><span className="hover:text-primary cursor-pointer">Impressum</span></Link>
            <Link href="/datenschutz"><span className="hover:text-primary cursor-pointer">Datenschutz</span></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
