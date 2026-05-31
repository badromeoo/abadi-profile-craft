import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Reveal } from "@/components/Reveal";
import { Instagram, MapPin, Clock, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Toko Kopi Abadi — Secangkir untuk Setiap Momen" },
      { name: "description", content: "Kedai kopi tempat cerita-cerita kecil menjadi abadi. Diseduh dengan dedikasi, dinikmati tanpa terburu." },
      { property: "og:title", content: "Toko Kopi Abadi" },
      { property: "og:description", content: "Secangkir untuk setiap momen." },
    ],
  }),
  component: Index,
});

const menu = [
  { name: "Kopi Tubruk Abadi", desc: "Robusta klasik, pekat dan membumi. Diseduh sederhana, seperti hari yang tak terburu.", price: "Rp 18K" },
  { name: "Susu Aren Senja", desc: "Espresso, susu segar, dan gula aren cair. Manis hangat yang menemani senja.", price: "Rp 25K" },
  { name: "Manual Brew V60", desc: "Single origin Gayo, dipetik di ketinggian. Asam buah yang bersih, aftertaste cokelat.", price: "Rp 32K" },
  { name: "Es Kopi Lama", desc: "Resep yang tak pernah berubah sejak hari pertama kami membuka pintu.", price: "Rp 22K" },
];

const gallery = [
  { ratio: "aspect-[4/5]", label: "Sudut jendela pagi" },
  { ratio: "aspect-square", label: "Tangan dan cangkir" },
  { ratio: "aspect-square", label: "Biji kopi pilihan" },
  { ratio: "aspect-[4/5]", label: "Obrolan sore" },
  { ratio: "aspect-[4/5]", label: "Latte art" },
  { ratio: "aspect-square", label: "Meja kayu tua" },
];

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-md bg-secondary ${className}`}
      aria-label={label}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-foreground/5" />
    </div>
  );
}

function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const id = anchor.getAttribute('href');
      if (!id || id === '#') return;

      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', id);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
}

function Index() {
  useSmoothScroll();

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="mx-auto flex max-w-md md:max-w-3xl lg:max-w-5xl items-center justify-between px-6 md:px-10 lg:px-12 py-4">
          <span className="font-serif-display text-lg lg:text-xl tracking-wide">Abadi</span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Est. Kopi</span>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-md md:max-w-3xl lg:max-w-5xl px-6 md:px-10 lg:px-12 pt-12 md:pt-16 lg:pt-24 pb-20 lg:pb-28">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="animate-fade-up">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Toko Kopi Abadi</p>
            <h1 className="font-serif-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Secangkir untuk<br />
              <em className="not-italic text-primary">setiap momen</em><br />
              yang abadi.
            </h1>
            <p className="mt-6 md:mt-8 text-base md:text-lg leading-relaxed text-muted-foreground max-w-lg">
              Tempat sederhana di mana waktu melambat, secangkir kopi menjadi alasan, dan setiap cerita layak untuk didengar.
            </p>
            <div className="mt-8 md:mt-10 flex flex-col md:flex-row gap-3 md:gap-4">
              <a
                href="#menu"
                className="inline-flex h-12 md:h-14 items-center justify-center rounded-full bg-primary px-6 md:px-8 text-sm md:text-base font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
              >
                Lihat Menu
              </a>
              <a
                href="#lokasi"
                className="inline-flex h-12 md:h-14 items-center justify-center rounded-full border border-foreground/20 px-6 md:px-8 text-sm md:text-base font-medium text-foreground transition-transform duration-300 hover:scale-[1.03]"
              >
                Kunjungi Kami
              </a>
            </div>
          </div>

          <Reveal delay={150} className="mt-12 lg:mt-0">
            <Placeholder label="Suasana kedai" className="aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]" />
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-md md:max-w-3xl lg:max-w-5xl px-6 md:px-10 lg:px-12 py-20 lg:py-28 border-t border-border/60">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Cerita Abadi</p>
              <h2 className="font-serif-display text-3xl md:text-4xl lg:text-[2.75rem] leading-tight">
                Diseduh dengan dedikasi, dinikmati tanpa terburu.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <div className="mt-8 lg:mt-0 space-y-5 md:space-y-6 text-[15px] md:text-base leading-relaxed text-muted-foreground">
                <p>
                  Toko Kopi Abadi lahir dari satu keyakinan sederhana: bahwa secangkir kopi yang baik mampu mengubah hari biasa menjadi ruang yang hangat untuk bertukar cerita.
                </p>
                <p>
                  Setiap biji kami pilih dengan teliti dari petani Nusantara, diseduh oleh tangan-tangan yang mencintai prosesnya. Tidak ada yang dikejar, semua diberi waktu.
                </p>
                <p>
                  Karena bagi kami, kopi bukan sekadar minuman — ia adalah alasan untuk berhenti sejenak, dan membuat momen ini terasa abadi.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="mx-auto max-w-md md:max-w-3xl lg:max-w-5xl px-6 md:px-10 lg:px-12 py-20 lg:py-28 border-t border-border/60">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Menu Signature</p>
          <h2 className="font-serif-display text-3xl md:text-4xl lg:text-[2.75rem] leading-tight max-w-2xl">
            Racikan yang telah menemani kami sejak hari pertama.
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {menu.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <article className="group">
                <Placeholder label={item.name} className="aspect-square mb-5 md:mb-6" />
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif-display text-2xl md:text-[1.75rem]">{item.name}</h3>
                  <span className="text-sm md:text-base font-medium text-primary whitespace-nowrap">{item.price}</span>
                </div>
                <p className="mt-2 md:mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-md md:max-w-3xl lg:max-w-5xl px-6 md:px-10 lg:px-12 py-20 lg:py-28 border-t border-border/60">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Momen Abadi</p>
          <h2 className="font-serif-display text-3xl md:text-4xl lg:text-[2.75rem] leading-tight">
            Potongan-potongan hari yang sempat singgah.
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {gallery.map((g) => (
              <Placeholder key={g.label} label={g.label} className={g.ratio} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* Location */}
      <section id="lokasi" className="mx-auto max-w-md md:max-w-3xl lg:max-w-5xl px-6 md:px-10 lg:px-12 py-20 lg:py-28 border-t border-border/60">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Singgah</p>
              <h2 className="font-serif-display text-3xl md:text-4xl lg:text-[2.75rem] leading-tight">
                Pintu kami selalu terbuka untuk Anda.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <div className="mt-10 lg:mt-0 space-y-8 md:space-y-10">
                <div className="flex gap-4">
                  <Clock className="h-5 w-5 mt-0.5 text-primary shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm md:text-base font-medium">Jam Buka</p>
                    <p className="mt-1 text-sm md:text-base text-muted-foreground">Senin – Jumat &nbsp;·&nbsp; 07.00 – 22.00</p>
                    <p className="text-sm md:text-base text-muted-foreground">Sabtu – Minggu &nbsp;·&nbsp; 08.00 – 23.00</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="h-5 w-5 mt-0.5 text-primary shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm md:text-base font-medium">Alamat</p>
                    <p className="mt-1 text-sm md:text-base text-muted-foreground leading-relaxed">
                      Jl. Cendana No. 17, Menteng<br />
                      Jakarta Pusat 10310
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Instagram className="h-5 w-5 mt-0.5 text-primary shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm md:text-base font-medium">Instagram</p>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="mt-1 text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                      @tokokopiabadi
                    </a>
                  </div>
                </div>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full md:w-auto h-12 md:h-14 items-center justify-center gap-2 rounded-full bg-foreground px-6 md:px-8 text-sm md:text-base font-medium text-background transition-transform duration-300 hover:scale-[1.03]"
                >
                  Arahkan ke Google Maps
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

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
    </main>
  );
}
