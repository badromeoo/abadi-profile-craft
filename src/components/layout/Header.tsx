export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto flex max-w-md md:max-w-3xl lg:max-w-5xl items-center justify-between px-6 md:px-10 lg:px-12 py-4">
        <span className="font-serif-display text-lg lg:text-xl tracking-wide">Abadi</span>
        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Est. Kopi
        </span>
      </div>
    </header>
  );
}
