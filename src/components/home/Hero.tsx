import { Reveal } from "@/components/Reveal";
import { kopiImg } from "@/data/home";

export function Hero() {
  return (
    <section className="mx-auto max-w-md md:max-w-3xl lg:max-w-5xl px-6 md:px-10 lg:px-12 pt-12 md:pt-16 lg:pt-24 pb-20 lg:pb-28">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div className="animate-fade-up">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Toko Kopi Abadi
          </p>
          <h1 className="font-serif-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Secangkir untuk
            <br />
            <em className="not-italic text-primary">setiap momen</em>
            <br />
            yang abadi.
          </h1>
          <p className="mt-6 md:mt-8 text-base md:text-lg leading-relaxed text-muted-foreground max-w-lg">
            Tempat sederhana di mana waktu melambat, secangkir kopi menjadi alasan, dan setiap
            cerita layak untuk didengar.
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
          <img className="rounded-2xl" src={kopiImg} alt="Toko Kopi Abadi" />
        </Reveal>
      </div>
    </section>
  );
}
