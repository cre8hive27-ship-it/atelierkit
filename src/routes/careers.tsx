import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { kitchen, guests } from "@/lib/images";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join the Team at Atelier Kitchen" },
      {
        name: "description",
        content:
          "Open positions in the kitchen, dining room and cellar at Atelier Kitchen, Copenhagen. Four-day weeks, shared service charge and paid stages.",
      },
      { property: "og:title", content: "Careers at Atelier Kitchen" },
      { property: "og:description", content: "Open roles in the kitchen, dining room and cellar in Copenhagen." },
    ],
  }),
  component: Careers,
});

const roles = [
  { title: "Chef de Partie — Fish", type: "Full time", team: "Kitchen" },
  { title: "Pastry Commis", type: "Full time", team: "Kitchen" },
  { title: "Sommelier", type: "Full time", team: "Cellar" },
  { title: "Head Waiter", type: "Full time", team: "Dining room" },
  { title: "Bartender", type: "Part time", team: "Bar" },
];

const benefits = [
  ["Four-day week", "Forty hours across four days, with two consecutive days off in every rota."],
  ["Shared service charge", "Distributed evenly across kitchen and floor, paid monthly."],
  ["Paid stages", "Every trial shift is paid at full rate, including travel within Denmark."],
  ["Language support", "Danish lessons covered for international team members."],
];

function Careers() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Careers"
        title={
          <>
            Work with <span className="italic">us</span>
          </>
        }
        intro="We hire for temperament first. Skill can be taught across a season; a good kitchen cannot."
      />

      <section className="py-20 lg:py-28">
        <div className="shell">
          <Reveal className="img-zoom">
            <img
              src={kitchen}
              alt="The brigade working at the pass"
              loading="lazy"
              className="aspect-16/9 w-full object-cover"
            />
          </Reveal>

          <div className="mt-20 grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <h2 className="display-md">Open positions</h2>
                <p className="mt-6 text-[0.95rem] leading-[1.85] text-muted-foreground">
                  Send a short note and your CV to{" "}
                  <a href="mailto:people@atelierkitchen.dk" className="link-underline text-foreground">
                    people@atelierkitchen.dk
                  </a>
                  . We reply to every application.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ul className="divide-y divide-border border-y border-border">
                {roles.map((role, i) => (
                  <Reveal key={role.title} as="li" delay={i * 70}>
                    <a
                      href="mailto:people@atelierkitchen.dk"
                      className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-6"
                    >
                      <div className="min-w-0">
                        <h3 className="font-display text-2xl">{role.title}</h3>
                        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                          {role.team} · {role.type}
                        </p>
                      </div>
                      <span className="shrink-0 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-primary">
                        Apply
                      </span>
                    </a>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5 img-zoom">
            <img
              src={guests}
              alt="An evening in the dining room"
              loading="lazy"
              className="aspect-4/5 w-full object-cover"
            />
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7 lg:self-center">
            <Reveal>
              <span className="eyebrow rule-label">How we work</span>
              <h2 className="display-md mt-6">A kitchen you can stay in</h2>
            </Reveal>
            <dl className="mt-10 divide-y divide-border border-y border-border">
              {benefits.map(([title, body], i) => (
                <Reveal key={title} delay={i * 70}>
                  <div className="py-6">
                    <dt className="text-sm">{title}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
