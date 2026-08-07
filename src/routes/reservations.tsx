import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ActionButton, Field, inputClass } from "@/components/site/ui";
import { heroDining, detail } from "@/lib/images";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations — Atelier Kitchen, Copenhagen" },
      {
        name: "description",
        content:
          "Reserve a table at Atelier Kitchen. Bookings open sixty days in advance; chef's table and large parties by arrangement.",
      },
      { property: "og:title", content: "Reserve a Table — Atelier Kitchen" },
      { property: "og:description", content: "Bookings open sixty days in advance on the Copenhagen waterfront." },
    ],
  }),
  component: Reservations,
});

function Reservations() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Reservations"
        title={
          <>
            Reserve your <span className="italic">table</span>
          </>
        }
        intro="Bookings open sixty days ahead. For parties over eight, or the chef's table, write to us and we will build the evening with you."
      />

      <section className="py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <form
              className="border border-border bg-card p-8 lg:p-10"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Date">
                  <input required type="date" className={inputClass} />
                </Field>
                <Field label="Time">
                  <select required defaultValue="19:00" className={inputClass}>
                    {["17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"].map(
                      (t) => (
                        <option key={t}>{t}</option>
                      ),
                    )}
                  </select>
                </Field>
                <Field label="Guests">
                  <select required defaultValue="2" className={inputClass}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Seating">
                  <select defaultValue="Dining room" className={inputClass}>
                    <option>Dining room</option>
                    <option>Chef's table</option>
                    <option>Courtyard</option>
                  </select>
                </Field>
                <Field label="Full name">
                  <input required type="text" placeholder="Your name" className={inputClass} />
                </Field>
                <Field label="Email">
                  <input required type="email" placeholder="you@email.com" className={inputClass} />
                </Field>
                <Field label="Phone">
                  <input required type="tel" placeholder="+45" className={inputClass} />
                </Field>
                <Field label="Occasion">
                  <select defaultValue="None" className={inputClass}>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Business</option>
                  </select>
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Special requests">
                    <textarea
                      rows={5}
                      placeholder="Allergies, celebrations, seating preferences"
                      className={inputClass}
                    />
                  </Field>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <ActionButton type="submit">Request Reservation</ActionButton>
                {sent ? (
                  <p className="text-sm text-muted-foreground">
                    Thank you — we will confirm by email within the hour.
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>

          <aside className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={120} className="img-zoom">
              <img
                src={detail}
                alt="Table set with linen, brass cutlery and a candle"
                loading="lazy"
                className="aspect-4/5 w-full object-cover"
              />
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 space-y-6 border-t border-border pt-8 text-sm text-muted-foreground">
                <div>
                  <h2 className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-foreground">
                    Good to know
                  </h2>
                  <p className="mt-3 leading-relaxed">
                    Tables are held for fifteen minutes. The tasting menu is served to the whole
                    table. Children over ten are welcome.
                  </p>
                </div>
                <div>
                  <h2 className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-foreground">
                    Cancellations
                  </h2>
                  <p className="mt-3 leading-relaxed">
                    Free until 48 hours before your booking. After that a fee of 500 kr per guest
                    applies.
                  </p>
                </div>
                <div>
                  <h2 className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-foreground">
                    Prefer to speak with us
                  </h2>
                  <p className="mt-3 leading-relaxed">
                    <a href="tel:+4533120000" className="link-underline text-foreground">
                      +45 33 12 00 00
                    </a>
                    , daily from 10:00.
                  </p>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="border-t border-border">
        <Reveal className="img-zoom">
          <img
            src={heroDining}
            alt="The dining room at Atelier Kitchen"
            loading="lazy"
            className="h-[45vh] w-full object-cover"
          />
        </Reveal>
      </section>
    </SiteLayout>
  );
}
