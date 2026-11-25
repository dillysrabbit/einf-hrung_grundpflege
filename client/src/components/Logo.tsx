import { cn } from "@/lib/utils";

/**
 * Caritas-Logo (Bildmarke mit Claim „Für Menschen. Für Münster.").
 * Das Logo steht immer frei auf Weiß und wird nicht eingefärbt.
 */
export default function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/images/caritas-logo.png"
      alt="Caritas Maria-Hötte-Stift"
      className={cn("h-10 w-auto object-contain", className)}
    />
  );
}
