import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import {
  kitchen,
  cocktail,
  detail,
  guests,
  dish1,
  dish2,
  dish3,
  privateDining,
  wine,
  ingredients,
  heroDining,
  chefPortrait,
} from "@/lib/images";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Atelier Kitchen, Copenhagen" },
      {
        name: "description",
        content:
          "Photography from the dining room, the open kitchen, the cellar and the pass at Atelier Kitchen in Copenhagen.",
      },
      { property: "og:title", content: "Gallery — Atelier Kitchen" },
      { property: "og:description", content: "The room, the fire and the plates at Atelier Kitchen." },
    ],
  }),
  component: Gallery,
});

const images = [
  { src: heroDining, alt: "Candlelit dining room at dusk", tall: false },
  { src: dish1, alt: "Hand-dived scallop with herb oil", tall: true },
  { src: kitchen, alt: "Chefs plating at the open kitchen pass", tall: false },
  { src: cocktail, alt: "Handcrafted cocktail on a marble bar", tall: true },
  { src: privateDining, alt: "The Stone Room set for a private dinner", tall: false },
  { src: dish2, alt: "Aged duck with morello cherry", tall: true },
  { src: detail, alt: "Linen and brass cutlery on marble", tall: false },
  { src: wine, alt: "Sommelier pouring in the cellar", tall: true },
  { src: guests, alt: "Guests dining by candlelight", tall: false },
  { src: ingredients, alt: "Seasonal produce from the market garden", tall: false },
  { src: chefPortrait, alt: "Head chef Mathias Rovik", tall: true },
  { src: dish3, alt: "Chocolate dessert on white marble", tall: false },
];

function Gallery() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Gallery"
        title={
          <>
            The room, the fire, the <span className="italic">plates</span>
          </>
        }
        intro="Photographed across a single season, in natural and candle light, without styling."
      />

      <section className="py-20 lg:py-28">
        <div className="shell columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {images.map((img, i) => (
            <Reveal key={img.alt} delay={(i % 3) * 100} className="img-zoom break-inside-avoid">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover ${img.tall ? "aspect-4/5" : "aspect-3/2"}`}
              />
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
