import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section className="mx-auto max-w-md md:max-w-3xl lg:max-w-5xl px-6 md:px-10 lg:px-12 py-20 lg:py-28 border-t border-border/60">
      <div className="lg:grid lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Cerita Abadi
            </p>
            <h2 className="font-serif-display text-3xl md:text-4xl lg:text-[2.75rem] leading-tight">
              Diseduh dengan dedikasi, dinikmati tanpa terburu.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <div className="mt-8 lg:mt-0 space-y-5 md:space-y-6 text-[15px] md:text-base leading-relaxed text-muted-foreground">
              <p>
                Toko Kopi Abadi lahir dari satu keyakinan sederhana: bahwa secangkir kopi yang baik
                mampu mengubah hari biasa menjadi ruang yang hangat untuk bertukar cerita.
              </p>
              <p>
                Setiap biji kami pilih dengan teliti dari petani Nusantara, diseduh oleh
                tangan-tangan yang mencintai prosesnya. Tidak ada yang dikejar, semua diberi waktu.
              </p>
              <p>
                Karena bagi kami, kopi bukan sekadar minuman — ia adalah alasan untuk berhenti
                sejenak, dan membuat momen ini terasa abadi.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
