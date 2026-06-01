import { Reveal } from "@/components/Reveal";
import { gallery } from "@/data/home";

export function GallerySection() {
  return (
    <section className="mx-auto max-w-md md:max-w-3xl lg:max-w-5xl px-6 md:px-10 lg:px-12 py-20 lg:py-28 border-t border-border/60">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Momen Abadi
        </p>
        <h2 className="font-serif-display text-3xl md:text-4xl lg:text-[2.75rem] leading-tight">
          Potongan-potongan hari yang sempat singgah.
        </h2>
      </Reveal>

      <Reveal delay={150}>
        <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {gallery.map((g) => (
            <div key={g.label} className={`overflow-hidden rounded-md ${g.ratio}`}>
              <img
                src={g.img}
                alt={g.label}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
