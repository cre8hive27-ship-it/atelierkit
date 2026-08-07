import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ActionButton, Field, inputClass } from "@/components/site/ui";
import { privateDining, guests, detail, kitchen } from "@/lib/images";

export const Route = createFileRoute("/private-dining")({
  head: () => ({
    meta: [
      { title: "Private Dining & Events — Atelier Kitchen" },
      {
        name: "description",
        content:
          "The Stone Room seats twelve to twenty-four. Corporate dinners, birthdays, wedding receptions and chef experiences at Atelier Kitchen, Copenhagen.",
      },
      { property: "og:title", content: "Private Dining at Atelier Kitchen" },
      {
        property: "og:description",
        content: "A vaulted private room for twelve to twenty-four guests, with bespoke menus and a dedicated team.",
      },
    ],
  }),
  component: PrivateDining,
});

const occasions = [
  {
    title: "Corporate Dining",
    body: "Board dinners and client hosting with discreet service, a private entrance and screens on request.",
    image: privateDining,
  },
  {
    title: "Birthdays & Anniversaries",
    body: "Menus written around the guest of honour, with cellar selections chosen from their birth year.",
    image: guests,
  },
  {
    title: "Wedding Receptions",
    body: "Up to seventy standing across the courtyard and dining room, or twenty-four seated in the Stone Room.",
    image: detail,
  },
  {
    title: "Chef Experiences",
    body: "A hands-on afternoon at the pass with Mathias, followed by the menu you helped prepare.",
    image: kitchen,
  },
];

function PrivateDining() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Private Dining"
        title={
          <>
            The <span className="italic">Stone Room</span>
          </>
        }
        intro="A vaulted room beneath the old sail loft, with its own service team, bespoke menus and an entrance from the courtyard."
      />

      <section className="py-20 lg:py-28">
        <div className="shell">
          <Reveal className="img-zoom">
            <img
              src={privateDining}
              alt="Private dining room with a long linen-covered table"
              loading="lazy"
              width={1440}
              height={1024}
              className="aspect-16/9 w-full object-cover"
            />
          </Reveal>

          <div className="mt-16 grid gap-10 border-y border-border py-10 sm:grid-cols-3">
            {[
              ["12 — 24", "Seated guests"],
              ["70", "Standing reception"],
              ["From 1.850 kr", "Per guest"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-3xl text-primary">{value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-20 lg:py-28">
        <div className="shell">
          <Reveal>
            <span className="eyebrow rule-label">Occasions</span>
            <h2 className="display-lg mt-6 max-w-xl">Evenings we host well</h2>
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {occasions.map((o, i) => (
              <Reveal key={o.title} delay={i * 110}>
                <article className="h-full border border-border bg-card">
                  <div className="img-zoom">
                    <img
                      src={o.image}
                      alt={o.title}
                      loading="lazy"
                      className="aspect-3/2 w-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-2xl">{o.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow rule-label">Enquiries</span>
              <h2 className="display-md mt-6">Tell us about your evening</h2>
              <p className="mt-6 text-[0.95rem] leading-[1.85] text-muted-foreground">
                Our events manager replies within one working day with availability, menu drafts and
                a full quotation. For dates inside two weeks, please call us.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                <a href="tel:+4533120001" className="link-underline text-foreground">
                  +45 33 12 00 01
                </a>
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-7 lg:col-start-6">
            <form
              className="border border-border bg-card p-8 lg:p-10"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name">
                  <input required type="text" placeholder="Your name" className={inputClass} />
                </Field>
                <Field label="Email">
                  <input required type="email" placeholder="you@company.com" className={inputClass} />
                </Field>
                <Field label="Preferred date">
                  <input required type="date" className={inputClass} />
                </Field>
                <Field label="Number of guests">
                  <input required type="number" min={8} max={70} defaultValue={16} className={inputClass} />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Type of event">
                    <select defaultValue="Corporate dining" className={inputClass}>
                      {occasions.map((o) => (
                        <option key={o.title}>{o.title}</option>
                      ))}
                      <option>Something else</option>
                    </select>
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Field label="Details">
                    <textarea
                      rows={5}
                      placeholder="Timings, dietary needs, budget, anything we should know"
                      className={inputClass}
                    />
                  </Field>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <ActionButton type="submit">Send enquiry</ActionButton>
                {sent ? (
                  <p className="text-sm text-muted-foreground">
                    Thank you — our events manager will be in touch shortly.
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
