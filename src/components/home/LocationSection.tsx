import { Reveal } from "@/components/Reveal";
import { Clock, MapPin, Instagram, ArrowUpRight } from "lucide-react";

export function LocationSection() {
  return (
    <section
      id="lokasi"
      className="mx-auto max-w-md md:max-w-3xl lg:max-w-5xl px-6 md:px-10 lg:px-12 py-20 lg:py-28 border-t border-border/60"
    >
      <div className="lg:grid lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Singgah
            </p>
            <h2 className="font-serif-display text-3xl md:text-4xl lg:text-[2.75rem] leading-tight">
              Pintu kami selalu terbuka untuk Anda
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
                  <p className="mt-1 text-sm md:text-base text-muted-foreground">
                    Setiap Hari &nbsp;·&nbsp; 07.00 – 23.00
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="h-5 w-5 mt-0.5 text-primary shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm md:text-base font-medium">Alamat</p>
                  <p className="mt-1 text-sm md:text-base text-muted-foreground leading-relaxed">
                    Jl. Serma Kawi No.1, Dauh Puri Klod, Kec. Denpasar Barat
                    <br />
                    Kota Denpasar, Bali
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Instagram className="h-5 w-5 mt-0.5 text-primary shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm md:text-base font-medium">Instagram</p>
                  <a
                    href="https://www.instagram.com/tokokopiabadi"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    @tokokopiabadi
                  </a>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/ZzvfuJ3GR4dj5Vmf9"
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
  );
}
