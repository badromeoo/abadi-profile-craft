import { createFileRoute } from "@tanstack/react-router";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { MenuSection } from "@/components/home/MenuSection";
import { GallerySection } from "@/components/home/GallerySection";
import { LocationSection } from "@/components/home/LocationSection";
import { Footer } from "@/components/layout/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Toko Kopi Abadi — Secangkir untuk Setiap Momen" },
      {
        name: "description",
        content:
          "Kedai kopi tempat cerita-cerita kecil menjadi abadi. Diseduh dengan dedikasi, dinikmati tanpa terburu.",
      },
      { property: "og:title", content: "Toko Kopi Abadi" },
      { property: "og:description", content: "Secangkir untuk setiap momen." },
    ],
  }),
  component: Index,
});

function Index() {
  useSmoothScroll();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <MenuSection />
      <GallerySection />
      <LocationSection />
      <Footer />
    </main>
  );
}
