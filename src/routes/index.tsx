import { createFileRoute } from "@tanstack/react-router";
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

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="mx-auto flex max-w-md items-center justify-between px-6 py-4">
          <span className="font-serif-display text-lg tracking-wide">Abadi</span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Est. Kopi</span>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-md px-6 pt-12 pb-20">
        <div className="animate-fade-up">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Toko Kopi Abadi</p>
          <h1 className="font-serif-display text-5xl leading-[1.05] tracking-tight">
            Secangkir untuk<br />
            <em className="not-italic text-primary">setiap momen</em><br />
            yang abadi.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Tempat sederhana di mana waktu melambat, secangkir kopi menjadi alasan, dan setiap cerita layak untuk didengar.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href="#menu"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
            >
              Lihat Menu
            </a>
            <a
              href="#lokasi"
              className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/20 px-6 text-sm font-medium text-foreground transition-transform duration-300 hover:scale-[1.03]"
            >
              Kunjungi Kami
            </a>
          </div>
        </div>

        <Reveal delay={150} className="mt-12">
          <Placeholder label="Suasana kedai" className="aspect-[4/5]" />
        </Reveal>
      </section>

      {/* About */}
      <section className="mx-auto max-w-md px-6 py-20 border-t border-border/60">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Cerita Abadi</p>
          <h2 className="font-serif-display text-3xl leading-tight">
            Diseduh dengan dedikasi, dinikmati tanpa terburu.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
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
      </section>

      {/* Menu */}
      <section id="menu" className="mx-auto max-w-md px-6 py-20 border-t border-border/60">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Menu Signature</p>
          <h2 className="font-serif-display text-3xl leading-tight">
            Racikan yang telah menemani kami sejak hari pertama.
          </h2>
        </Reveal>

        <div className="mt-10 space-y-8">
          {menu.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <article className="group">
                <Placeholder label={item.name} className="aspect-square mb-5" />
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif-display text-2xl">{item.name}</h3>
                  <span className="text-sm font-medium text-primary whitespace-nowrap">{item.price}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-md px-6 py-20 border-t border-border/60">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Momen Abadi</p>
          <h2 className="font-serif-display text-3xl leading-tight">
            Potongan-potongan hari yang sempat singgah.
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 grid grid-cols-2 gap-3">
            {gallery.map((g) => (
              <Placeholder key={g.label} label={g.label} className={g.ratio} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* Location */}
      <section id="lokasi" className="mx-auto max-w-md px-6 py-20 border-t border-border/60">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Singgah</p>
          <h2 className="font-serif-display text-3xl leading-tight">
            Pintu kami selalu terbuka untuk Anda.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 space-y-8">
            <div className="flex gap-4">
              <Clock className="h-5 w-5 mt-0.5 text-primary shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-medium">Jam Buka</p>
                <p className="mt-1 text-sm text-muted-foreground">Senin – Jumat &nbsp;·&nbsp; 07.00 – 22.00</p>
                <p className="text-sm text-muted-foreground">Sabtu – Minggu &nbsp;·&nbsp; 08.00 – 23.00</p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="h-5 w-5 mt-0.5 text-primary shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-medium">Alamat</p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Jl. Cendana No. 17, Menteng<br />
                  Jakarta Pusat 10310
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Instagram className="h-5 w-5 mt-0.5 text-primary shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-medium">Instagram</p>
                <a href="https://instagram.com" className="mt-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                  @tokokopiabadi
                </a>
              </div>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-transform duration-300 hover:scale-[1.03]"
            >
              Arahkan ke Google Maps
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="mx-auto max-w-md px-6 py-12 border-t border-border/60">
        <p className="font-serif-display text-2xl">Abadi.</p>
        <p className="mt-3 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Toko Kopi Abadi. Diseduh dengan hati.
        </p>
      </footer>
    </main>
  );
}
