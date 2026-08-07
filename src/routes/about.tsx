import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink } from "@/components/site/ui";
import { kitchen, ingredients, detail, guests, chefPortrait } from "@/lib/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Atelier Kitchen — A Seasonal Copenhagen Restaurant" },
      {
        name: "description",
        content:
          "The story of Atelier Kitchen: a former sailmaker's workshop turned two-star restaurant, built on coastal produce, wood fire and quiet craftsmanship.",
      },
      { property: "og:title", content: "About Atelier Kitchen" },
      {
        property: "og:description",
        content: "A former sailmaker's workshop turned seasonal restaurant on the Copenhagen waterfront.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    title: "Sourcing",
    body: "Fish landed the same morning, vegetables from a market garden thirty kilometres north, and dairy from a single herd in Funen.",
  },
  {
    title: "Craft",
    body: "Everything preserved, cured, fermented and baked in-house. Nothing arrives finished; nothing leaves the pass unconsidered.",
  },
  {
    title: "Hospitality",
    body: "One team from first call to last glass. A dining room that reads the table rather than following a script.",
  },
];

function About() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Our Story"
        title={
          <>
            Fourteen years on the <span className="italic">waterfront</span>
          </>
        }
        intro="Atelier Kitchen opened in 2011 inside a former sailmaker's workshop. The hearth has not gone cold since."
      />

      <section className="py-20 lg:py-28">
        <div className="shell">
          <Reveal className="img-zoom">
            <img
              src={kitchen}
              alt="Chefs working at the open kitchen pass"
              loading="lazy"
              width={1440}
              height={1024}
              className="aspect-16/9 w-full object-cover"
            />
          </Reveal>

          <div className="mt-20 grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="display-md">
                  A room that asks very little of you, and gives a great deal
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={120}>
                <p className="lede">
                  Lime-washed walls, oak floors worn pale by fourteen years of service, and forty
                  seats arranged so that no table ever feels observed.
                </p>
                <p className="mt-6 text-[0.975rem] leading-[1.85] text-muted-foreground">
                  We kept the building's bones. The rigging hooks are still in the ceiling; the
                  original loading doors now open onto the courtyard where we take aperitifs through
                  summer. What changed is the kitchen — rebuilt in 2018 around a wood-fired hearth
                  that dictates most of what we cook.
                </p>
                <p className="mt-6 text-[0.975rem] leading-[1.85] text-muted-foreground">
                  Our menu is written every fortnight. It is short by design: seven courses, one
                  vegetable-led alternative, and a handful of dishes that have earned the right to
                  stay. We would rather cook a small number of things properly.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-20 lg:py-28">
        <div className="shell grid gap-10 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 120}>
              <div className="border-t border-brass pt-7">
                <h3 className="font-display text-2xl">{v.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="shell grid gap-5 sm:grid-cols-3">
          {[
            { src: ingredients, alt: "Seasonal vegetables on a wooden table" },
            { src: detail, alt: "Table set with linen and brass cutlery" },
            { src: guests, alt: "Guests dining by candlelight" },
          ].map((img, i) => (
            <Reveal key={img.alt} delay={i * 100} className="img-zoom">
              <img src={img.src} alt={img.alt} loading="lazy" className="aspect-3/4 w-full object-cover" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5 img-zoom">
            <img
              src={chefPortrait}
              alt="Head chef Mathias Rovik"
              loading="lazy"
              className="aspect-4/5 w-full object-cover"
            />
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7 lg:self-center">
            <Reveal>
              <span className="eyebrow rule-label">The Kitchen</span>
              <h2 className="display-md mt-6">Led by Mathias Rovik since 2011</h2>
              <p className="mt-7 text-[0.975rem] leading-[1.85] text-muted-foreground">
                A brigade of eighteen, a dining room team of eleven, and a sommelier who has spent
                two decades assembling the cellar. Read more about the chef and the philosophy that
                shapes the menu.
              </p>
              <div className="mt-9">
                <ActionLink to="/chef" variant="outline">
                  Meet the chef
                </ActionLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
