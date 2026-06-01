export function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-md bg-secondary ${className}`}
      aria-label={label}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-foreground/5" />
    </div>
  );
}
