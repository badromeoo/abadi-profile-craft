export function Footer() {
  return (
    <footer className="mx-auto max-w-md md:max-w-3xl lg:max-w-5xl px-6 md:px-10 lg:px-12 py-12 lg:py-16 border-t border-border/60">
      <div className="md:flex md:items-end md:justify-between">
        <div>
          <p className="font-serif-display text-2xl md:text-3xl">Abadi.</p>
          <p className="mt-3 text-xs md:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Toko Kopi Abadi. Diseduh dengan hati.
          </p>
        </div>
      </div>
    </footer>
  );
}
