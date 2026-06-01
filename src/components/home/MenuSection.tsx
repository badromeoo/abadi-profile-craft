import { Reveal } from "@/components/Reveal";
import { Placeholder } from "./Placeholder";
import { menu } from "@/data/home";

export function MenuSection() {
  return (
    <section
      id="menu"
      className="mx-auto max-w-md md:max-w-3xl lg:max-w-5xl px-6 md:px-10 lg:px-12 py-20 lg:py-28 border-t border-border/60"
    >
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Menu Signature
        </p>
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
                <span className="text-sm md:text-base font-medium text-primary whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              <p className="mt-2 md:mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
