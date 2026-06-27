import { cn } from "@/lib/utils";

/**
 * CareConnect brand lockup — the berry "CC" mark plus a two-line wordmark,
 * per the CareConnect design system (guidelines/brand-logo).
 */
export default function Logo({
  subtitle = "Fortbildung Grundpflege",
  className,
}: {
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img
        src="/logo.png"
        alt="CareConnect"
        className="h-9 w-auto object-contain"
      />
      <div className="leading-none">
        <span className="block font-serif text-[17px] font-semibold tracking-tight text-foreground">
          CareConnect
        </span>
        {subtitle && (
          <span className="mt-0.5 block text-[11px] text-muted-foreground">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}
