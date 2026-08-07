import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink } from "@/components/site/ui";
import { wine, kitchen, guests, cocktail, privateDining, dish3 } from "@/lib/images";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Wine Tastings & Chef Nights | Atelier Kitchen" },
      {
        name: "description",
        content:
          "Upcoming events at Atelier Kitchen: cellar tastings, chef nights, live music evenings and holiday dinners in Copenhagen.",
      },
      { property: "og:title", content: "Events at Atelier Kitchen" },
      {
        property: "og:description",
        content: "Cellar tastings, chef nights, live music and holiday dinners on the Copenhagen waterfront.",
      },
    ],
  }),
  component: Events,
});

const events = [
  {
    date: "14 November",
    time: "18:30",
    category: "Wine Tasting",
    title: "Jura, Uncorked",
    body: "Nine wines from Arbois and Château-Chalon with Lise Halvorsen, poured alongside six small plates from the hearth.",
    price: "895 kr",
    image: wine,
  },
  {
    date: "22 November",
    time: "17:00",
    category: "Chef Night",
    title: "Four Hands with Ana Duarte",
    body: "Mathias cooks alongside the chef of Lisbon's Casa Duas for one evening only. Ten courses, one seating.",
    price: "1.850 kr",
    image: kitchen,
  },
  {
    date: "06 December",
    time: "19:00",
    category: "Live Music",
    title: "Winter Sessions: Trio Halden",
    body: "Nordic jazz in the courtyard room, with a supper menu of hearth breads, cured fish and mulled cider.",
    price: "650 kr",
    image: guests,
  },
  {
    date: "13 December",
    time: "18:00",
    category: "Cocktails",
    title: "Aquavit Masterclass",
    body: "Two hours behind the bar learning our house infusions, followed by three cocktails and canapés.",
    price: "495 kr",
    image: cocktail,
  },
  {
    date: "24 December",
    time: "16:00",
    category: "Holiday Dinner",
    title: "Christmas Eve at the Atelier",
    body: "A single seating of the traditional Danish table, reworked over the fire. Families welcome.",
    price: "1.450 kr",
    image: privateDining,
  },
  {
    date: "31 December",
    time: "19:30",
    category: "Holiday Dinner",
    title: "New Year's Eve",
    body: "Eleven courses, champagne from midnight, and the courtyard braziers lit until two.",
    price: "2.450 kr",
    image: dish3,
  },
];

function Events() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Events"
        title={
          <>
            Evenings worth <span className="italic">planning for</span>
          </>
        }
        intro="Tastings, collaborations and seasonal dinners. Places are limited and released to our newsletter first."
      />

      <section className="py-20 lg:py-28">
        <div className="shell grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={(i % 3) * 110}>
              <article className="flex h-full flex-col border border-border bg-card">
                <div className="img-zoom">
                  <img
                    src={e.image}
                    alt={e.title}
                    loading="lazy"
                    className="aspect-3/2 w-full object-cover"
                  />
                </div>
                <div className="flex grow flex-col p-8">
                  <div className="flex items-center gap-3 text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground">
                    <span className="text-brass">{e.category}</span>
                    <span aria-hidden="true">·</span>
                    <time>{e.date}</time>
                  </div>
                  <h2 className="mt-3 font-display text-2xl leading-snug">{e.title}</h2>
                  <p className="mt-3 grow text-sm leading-relaxed text-muted-foreground">{e.body}</p>
                  <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
                    <span className="text-sm text-brass">{e.price}</span>
                    <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      From {e.time}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="shell mt-16">
          <ActionLink to="/reservations">Book an event seat</ActionLink>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
