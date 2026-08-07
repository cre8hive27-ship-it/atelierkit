import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink } from "@/components/site/ui";
import { dish1, dish2, cocktail } from "@/lib/images";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Atelier Kitchen, Copenhagen" },
      {
        name: "description",
        content:
          "Starters, mains, seafood, steak, vegetarian, desserts, cocktails and wine. The current seasonal menu at Atelier Kitchen, rewritten every fortnight.",
      },
      { property: "og:title", content: "The Menu — Atelier Kitchen" },
      {
        property: "og:description",
        content: "A short seasonal menu rewritten every fortnight, built on coastal produce and wood fire.",
      },
    ],
  }),
  component: Menu,
});

type Item = { name: string; description: string; price: string };
type Section = { id: string; title: string; note?: string; items: Item[] };

const sections: Section[] = [
  {
    id: "starters",
    title: "Starters",
    note: "Served with sourdough baked at 15:00 and cultured butter.",
    items: [
      { name: "Oysters, Elderflower", description: "Limfjord oysters, elderflower vinegar, dill oil. Per piece.", price: "48" },
      { name: "Smoked Eel, Beetroot", description: "Hearth-smoked eel, roasted beetroot, horseradish cream.", price: "185" },
      { name: "Jerusalem Artichoke", description: "Charred and raw, hazelnut, aged cheese, brown butter.", price: "165" },
      { name: "Cured Trout, Buttermilk", description: "Sea trout cured in juniper, buttermilk, cucumber, rye.", price: "195" },
    ],
  },
  {
    id: "seafood",
    title: "Seafood",
    items: [
      { name: "Hand-dived Scallop", description: "Grilled over embers, herb oil, fermented gooseberry, sea vegetables.", price: "285" },
      { name: "Turbot on the Bone", description: "Aged four days, beurre blanc, salted lemon, chard.", price: "425" },
      { name: "Blue Mussels, Saffron", description: "Steamed in cider, saffron, leek, garden thyme.", price: "245" },
    ],
  },
  {
    id: "mains",
    title: "Main Courses",
    items: [
      { name: "Aged Duck, Cherry", description: "Dry-aged eighteen days, morello cherry, sweet garlic, dark jus.", price: "395" },
      { name: "Hearth-roasted Chicken", description: "Poulet de Bresse for two, morels, vin jaune, spring onion.", price: "690" },
      { name: "Slow-cooked Lamb", description: "Shoulder from Lammefjorden, wild garlic, new potato, whey.", price: "375" },
    ],
  },
  {
    id: "steak",
    title: "Steak",
    note: "All beef aged in-house a minimum of forty days. Served with hearth potatoes.",
    items: [
      { name: "Danish Ribeye, 300g", description: "Grass-fed, forty-day dry age, bone marrow, watercress.", price: "465" },
      { name: "Côte de Boeuf, 900g", description: "For two. Coal-roasted, béarnaise, burnt onion salt.", price: "980" },
      { name: "Fillet, 220g", description: "Charred over oak, pepper sauce, pickled shallot.", price: "445" },
    ],
  },
  {
    id: "vegetarian",
    title: "Vegetarian",
    items: [
      { name: "Celeriac Baked in Salt", description: "Whole celeriac, hay cream, black truffle, chervil.", price: "295" },
      { name: "Barley, Wild Mushroom", description: "Aged barley risotto, chanterelle, cured yolk, parsley.", price: "265" },
      { name: "Garden Vegetables", description: "Whatever came up this week, dressed in its own juices.", price: "245" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { name: "Chocolate, Sea Salt", description: "Single-origin cremeux, brown butter ice cream, malted crumb.", price: "165" },
      { name: "Plum, Almond", description: "Fermented plum, almond milk ice, toasted kernel.", price: "145" },
      { name: "Cheese from Funen", description: "Three cheeses, walnut bread, spiced apple.", price: "185" },
    ],
  },
  {
    id: "cocktails",
    title: "Cocktails",
    items: [
      { name: "Strandgade Martini", description: "Aquavit, dry vermouth, dill, lemon oil.", price: "145" },
      { name: "Smoked Old Fashioned", description: "Rye, birch syrup, oak smoke, orange.", price: "155" },
      { name: "Sea Buckthorn Sour", description: "Gin, sea buckthorn, honey, egg white.", price: "140" },
      { name: "Non-alcoholic Aperitif", description: "Fermented rhubarb, verbena, sparkling water.", price: "95" },
    ],
  },
  {
    id: "wine",
    title: "Wine",
    note: "Twelve hundred labels in the cellar. Pairings from 695 kr, or ask for the full list.",
    items: [
      { name: "Pairing, Seven Glasses", description: "Chosen the same evening to follow the tasting menu.", price: "895" },
      { name: "Pairing, Four Glasses", description: "A shorter flight for the à la carte table.", price: "695" },
      { name: "Non-alcoholic Pairing", description: "Ferments, infusions and pressed juices from the garden.", price: "545" },
    ],
  },
];

function Menu() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="The Menu"
        title={
          <>
            Written every <span className="italic">fortnight</span>
          </>
        }
        intro="Prices in Danish kroner. Please tell us about allergies when you book and the kitchen will write around them."
      />

      <section className="border-b border-border bg-surface py-6">
        <nav aria-label="Menu sections" className="shell flex flex-wrap gap-x-7 gap-y-3">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="link-underline text-[0.68rem] font-medium uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </section>

      <section className="py-20 lg:py-28">
        <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-20 lg:col-span-7">
            {sections.map((section) => (
              <Reveal key={section.id} as="section" id={section.id} className="scroll-mt-28">
                <h2 className="display-md">{section.title}</h2>
                {section.note ? (
                  <p className="mt-3 max-w-lg text-sm text-muted-foreground">{section.note}</p>
                ) : null}
                <ul className="mt-9 divide-y divide-border border-y border-border">
                  {section.items.map((item) => (
                    <li key={item.name} className="py-6">
                      <div className="flex items-baseline gap-4">
                        <h3 className="font-display text-xl">{item.name}</h3>
                        <span
                          className="h-px grow border-b border-dotted border-border"
                          aria-hidden="true"
                        />
                        <span className="shrink-0 text-sm text-brass">{item.price}</span>
                      </div>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="lg:sticky lg:top-32">
              <Reveal className="img-zoom">
                <img
                  src={dish1}
                  alt="Hand-dived scallop plated on dark ceramic"
                  loading="lazy"
                  className="aspect-4/5 w-full object-cover"
                />
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-8 border border-border bg-card p-8">
                  <h2 className="font-display text-2xl">Tasting Menu</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Seven courses drawn from the week's best produce, served to the whole table.
                    Approximately three hours.
                  </p>
                  <p className="mt-5 font-display text-3xl text-primary">1.450 kr</p>
                  <div className="mt-7">
                    <ActionLink to="/reservations">Reserve a table</ActionLink>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={200} className="mt-8 img-zoom hidden lg:block">
                <img
                  src={cocktail}
                  alt="Handcrafted cocktail on a marble bar"
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </Reveal>
              <Reveal delay={260} className="mt-8 img-zoom hidden lg:block">
                <img
                  src={dish2}
                  alt="Aged duck with cherry"
                  loading="lazy"
                  className="aspect-4/5 w-full object-cover"
                />
              </Reveal>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
