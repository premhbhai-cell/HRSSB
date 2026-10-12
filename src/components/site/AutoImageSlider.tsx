import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Add images to src/assets/slider1 through slider5. Vite includes them automatically at build time.
const slider1Files = import.meta.glob<string>("/src/assets/slider1/*.{jpg,jpeg,png,webp,avif,gif}", { eager: true, query: "?url", import: "default" });
const slider2Files = import.meta.glob<string>("/src/assets/slider2/*.{jpg,jpeg,png,webp,avif,gif}", { eager: true, query: "?url", import: "default" });
const slider3Files = import.meta.glob<string>("/src/assets/slider3/*.{jpg,jpeg,png,webp,avif,gif}", { eager: true, query: "?url", import: "default" });
const slider4Files = import.meta.glob<string>("/src/assets/slider4/*.{jpg,jpeg,png,webp,avif,gif}", { eager: true, query: "?url", import: "default" });
const slider5Files = import.meta.glob<string>("/src/assets/slider5/*.{jpg,jpeg,png,webp,avif,gif}", { eager: true, query: "?url", import: "default" });

type SliderNumber = 1 | 2 | 3 | 4 | 5;
const imagesBySlider: Record<SliderNumber, string[]> = {
  1: Object.entries(slider1Files).sort(([a], [b]) => a.localeCompare(b)).map(([, src]) => src),
  2: Object.entries(slider2Files).sort(([a], [b]) => a.localeCompare(b)).map(([, src]) => src),
  3: Object.entries(slider3Files).sort(([a], [b]) => a.localeCompare(b)).map(([, src]) => src),
  4: Object.entries(slider4Files).sort(([a], [b]) => a.localeCompare(b)).map(([, src]) => src),
  5: Object.entries(slider5Files).sort(([a], [b]) => a.localeCompare(b)).map(([, src]) => src),
};

export function AutoImageSlider({ slider, label, title, description }: { slider: SliderNumber; label?: string; title?: string; description?: string }) {
  const images = imagesBySlider[slider];
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % images.length), 4000);
    return () => window.clearInterval(timer);
  }, [images.length]);

  if (images.length === 0) return null;
  const move = (direction: number) => setActive((current) => (current + direction + images.length) % images.length);

  return (
    <section style={{ width: "100%", maxWidth: "1280px", margin: "0 auto", position: "relative" }} className="hrssb-slider relative bg-background px-4 py-6 sm:px-6 sm:py-8 lg:px-8" aria-label={label ?? `Image slider ${slider}`}>
      <div className="mx-auto w-full max-w-[1200px]">
        {title && <div className="mb-5 text-center"><h2 className="font-display text-2xl font-extrabold text-navy sm:text-3xl">{title}</h2>{description && <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>}{slider === 5 && <div className="mt-4 flex flex-wrap justify-center gap-3"><a href="/membership" className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow transition hover:opacity-90">Become a Member</a><a href="/contact" className="inline-flex items-center justify-center rounded-lg border border-navy px-5 py-3 text-sm font-bold text-navy transition hover:bg-muted">Contact Us</a></div>}</div>}
        <div className="group relative isolate w-full overflow-hidden rounded-xl border border-gold/30 bg-muted shadow-card sm:rounded-2xl">
          <div className="relative h-[42vh] min-h-[260px] w-full sm:h-[360px] sm:min-h-[360px] lg:h-[440px] lg:min-h-[440px] xl:h-[500px] xl:min-h-[500px]">
            {images.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`${label ?? `Gallery slider ${slider}`} — image ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${index === active ? "opacity-100" : "pointer-events-none opacity-0"}`}
                aria-hidden={index !== active}
              />
            ))}
            {images.length > 1 && (
              <>
                <button type="button" onClick={() => move(-1)} aria-label="Previous slide" className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/50 bg-navy/75 text-white shadow-lg transition hover:bg-primary sm:left-5 sm:h-12 sm:w-12">
                  <ChevronLeft className="h-6 w-6" aria-hidden />
                </button>
                <button type="button" onClick={() => move(1)} aria-label="Next slide" className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/50 bg-navy/75 text-white shadow-lg transition hover:bg-primary sm:right-5 sm:h-12 sm:w-12">
                  <ChevronRight className="h-6 w-6" aria-hidden />
                </button>
                <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 bg-gradient-to-t from-black/60 to-transparent px-4 pb-4 pt-8" aria-label="Choose slide">
                  {images.map((src, index) => (
                    <button key={src} type="button" onClick={() => setActive(index)} aria-label={`Show slide ${index + 1}`} aria-current={index === active} className={`h-2.5 rounded-full border border-white/80 transition-all ${index === active ? "w-7 bg-gold" : "w-2.5 bg-white/70 hover:bg-white"}`} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
