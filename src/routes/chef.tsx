import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink } from "@/components/site/ui";
import { chefPortrait, kitchen, dish2, ingredients } from "@/lib/images";

export const Route = createFileRoute("/chef")({
  head: () => ({
    meta: [
      { title: "Mathias Rovik — Head Chef, Atelier Kitchen" },
      {
        name: "description",
        content:
          "Head chef Mathias Rovik on restraint, wood fire and thirteen years with the same fish supplier. Biography, philosophy and awards.",
      },
      { property: "og:title", content: "Mathias Rovik — Head Chef at Atelier Kitchen" },
      {
        property: "og:description",
        content: "Trained in Lyon and Stockholm, cooking a short seasonal menu on the Copenhagen waterfront since 2011.",
      },
    ],
  }),
  component: Chef,
});

const timeline = [
  ["2002", "Begins in the pastry section at a small hotel in Bergen."],
  ["2005", "Four years in Lyon, the last two on meat and sauces."],
  ["2009", "Sous chef in Stockholm; first exposure to hearth cooking."],
  ["2011", "Opens Atelier Kitchen in a former sailmaker's workshop."],
  ["2016", "Second Michelin star, retained every year since."],
  ["2023", "Sustainable Kitchen Award for the market garden programme."],
];

function Chef() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Meet the Chef"
        title={
          <>
            Mathias <span className="italic">Rovik</span>
          </>
        }
        intro="Twenty-three years in kitchens, fourteen of them at the same pass, cooking a menu that gets shorter every year."
      />

      <section className="py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6 img-zoom">
            <img
              src={chefPortrait}
              alt="Portrait of head chef Mathias Rovik"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-4/5 w-full object-cover"
            />
          </Reveal>
          <div className="lg:col-span-5 lg:col-start-8 lg:self-center">
            <Reveal>
              <blockquote className="font-display text-[1.6rem] leading-[1.45] lg:text-[1.9rem]">
                “Cooking well is mostly restraint. Find something grown properly, do three things to
                it, and know when to stop.”
              </blockquote>
              <p className="mt-8 text-[0.975rem] leading-[1.85] text-muted-foreground">
                Mathias grew up on the Norwegian west coast and trained in Lyon before spending four
                years in Stockholm. He returned to Denmark in 2011 to open a room he could run
                himself, and has worked the pass at almost every service since.
              </p>
              <p className="mt-6 text-[0.975rem] leading-[1.85] text-muted-foreground">
                His cooking is built on the hearth: wood fire for everything that benefits from it,
                and nothing for the sake of technique. The menu has shortened each year — seven
                courses now, from thirteen at opening.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow rule-label">Career</span>
              <h2 className="display-md mt-6">Twenty-three years</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ol className="divide-y divide-border border-y border-border">
              {timeline.map(([year, text], i) => (
                <Reveal key={year} as="li" delay={i * 70}>
                  <div className="grid grid-cols-[4.5rem_1fr] gap-6 py-6">
                    <span className="font-display text-xl text-brass">{year}</span>
                    <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="shell grid gap-5 sm:grid-cols-3">
          {[
            { src: kitchen, alt: "Chefs at the pass" },
            { src: dish2, alt: "Aged duck with cherry" },
            { src: ingredients, alt: "Produce from the market garden" },
          ].map((img, i) => (
            <Reveal key={img.alt} delay={i * 100} className="img-zoom">
              <img src={img.src} alt={img.alt} loading="lazy" className="aspect-3/4 w-full object-cover" />
            </Reveal>
          ))}
        </div>
        <Reveal className="shell mt-14">
          <ActionLink to="/reservations">Dine with us</ActionLink>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
