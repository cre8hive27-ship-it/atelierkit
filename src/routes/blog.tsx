import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ingredients, wine, dish2, kitchen, cocktail, guests } from "@/lib/images";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Notes from Atelier Kitchen" },
      {
        name: "description",
        content:
          "Seasonal menu notes, wine pairings, chef stories and event news from the kitchen and cellar at Atelier Kitchen, Copenhagen.",
      },
      { property: "og:title", content: "The Journal — Atelier Kitchen" },
      { property: "og:description", content: "Seasonal notes, wine pairings and chef stories from Copenhagen." },
    ],
  }),
  component: Blog,
});

const categories = ["All", "Seasonal Menu", "Wine Pairing", "Chef Stories", "Events"];

const featured = {
  category: "Seasonal Menu",
  title: "What Autumn Brings to the Pass",
  excerpt:
    "Chanterelles from Gribskov, the first of the wild ducks, and a return of the fermented plum we started in March. A walk through the fortnight's menu and why each dish earned its place.",
  date: "12 October 2025",
  read: "6 min read",
  image: ingredients,
};

const posts = [
  {
    category: "Wine Pairing",
    title: "Jura, and Why We Keep Coming Back",
    excerpt: "Savagnin, oxidative ageing, and the bottles that changed how we build a pairing.",
    date: "28 September 2025",
    read: "5 min",
    image: wine,
  },
  {
    category: "Chef Stories",
    title: "Eighteen Days: Ageing Duck",
    excerpt: "On patience, humidity, and the moment a bird is finally ready for the fire.",
    date: "05 September 2025",
    read: "4 min",
    image: dish2,
  },
  {
    category: "Chef Stories",
    title: "Rebuilding the Kitchen Around a Fire",
    excerpt: "Why we tore out the range in 2018 and what the hearth changed about the menu.",
    date: "18 August 2025",
    read: "7 min",
    image: kitchen,
  },
  {
    category: "Wine Pairing",
    title: "The Case for a Cocktail Before Dinner",
    excerpt: "Bitterness, temperature and appetite — building an aperitif that does its job.",
    date: "02 August 2025",
    read: "3 min",
    image: cocktail,
  },
  {
    category: "Events",
    title: "Notes from the Long Table",
    excerpt: "Seventy guests, one courtyard and a menu cooked entirely over embers.",
    date: "19 July 2025",
    read: "4 min",
    image: guests,
  },
];

function Blog() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Journal"
        title={
          <>
            Notes from the <span className="italic">kitchen</span>
          </>
        }
        intro="What we are cooking, drinking and thinking about, written by the team between services."
      />

      <section className="py-20 lg:py-28">
        <div className="shell">
          <Reveal>
            <article className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="img-zoom lg:col-span-7">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover"
                />
              </div>
              <div className="lg:col-span-5 lg:self-center">
                <div className="flex items-center gap-3 text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="text-brass">{featured.category}</span>
                  <span aria-hidden="true">·</span>
                  <time>{featured.date}</time>
                  <span aria-hidden="true">·</span>
                  <span>{featured.read}</span>
                </div>
                <h2 className="display-md mt-5">{featured.title}</h2>
                <p className="mt-5 text-[0.975rem] leading-[1.85] text-muted-foreground">
                  {featured.excerpt}
                </p>
                <span className="link-underline mt-7 inline-block text-[0.72rem] font-medium uppercase tracking-[0.16em] text-primary">
                  Read the article
                </span>
              </div>
            </article>
          </Reveal>

          <div className="mt-20 flex flex-wrap gap-x-7 gap-y-3 border-y border-border py-5">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`text-[0.68rem] font-medium uppercase tracking-[0.16em] transition-colors ${
                  active === c ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((post, i) => (
              <Reveal key={post.title} delay={(i % 3) * 110}>
                <article className="h-full">
                  <div className="img-zoom">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="aspect-3/2 w-full object-cover"
                    />
                  </div>
                  <div className="mt-6 flex items-center gap-3 text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground">
                    <span className="text-brass">{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <time>{post.date}</time>
                  </div>
                  <h3 className="mt-3 font-display text-2xl leading-snug">{post.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {post.read}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
