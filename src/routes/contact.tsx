import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Clock, Car, Phone, Mail } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ActionButton, Field, inputClass } from "@/components/site/ui";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Atelier Kitchen, Copenhagen" },
      {
        name: "description",
        content:
          "Find Atelier Kitchen at Strandgade 42, Copenhagen K. Opening hours, parking, phone, email and press enquiries.",
      },
      { property: "og:title", content: "Contact Atelier Kitchen" },
      { property: "og:description", content: "Strandgade 42, 1401 Copenhagen K. Hours, parking and enquiries." },
    ],
  }),
  component: Contact,
});

const details = [
  { icon: MapPin, title: "Address", body: "Strandgade 42, 1401 Copenhagen K, Denmark" },
  { icon: Clock, title: "Opening hours", body: "Tue–Thu 17:30–23:00 · Fri–Sat 17:00–00:00 · Sun–Mon closed" },
  { icon: Car, title: "Parking", body: "Valet from 17:00 on the courtyard side. Public garage at Wilders Plads, 3 min walk." },
  { icon: Phone, title: "Telephone", body: "+45 33 12 00 00, daily from 10:00" },
  { icon: Mail, title: "Email", body: "hello@atelierkitchen.dk · press@atelierkitchen.dk" },
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Find Us"
        title={
          <>
            Strandgade <span className="italic">42</span>
          </>
        }
        intro="On the Christianshavn waterfront, five minutes from Knippelsbro and the metro at Christianshavn St."
      />

      <section className="py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <ul className="space-y-7">
                {details.map(({ icon: Icon, title, body }) => (
                  <li key={title} className="flex gap-4">
                    <Icon className="mt-1 h-4 w-4 shrink-0 text-brass" strokeWidth={1.4} />
                    <div className="min-w-0">
                      <h2 className="text-[0.7rem] font-medium uppercase tracking-[0.18em]">{title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-7 lg:col-start-6">
            <div className="h-[380px] w-full border border-border bg-surface lg:h-[460px]">
              <iframe
                title="Map showing Atelier Kitchen in Copenhagen"
                src="https://www.openstreetmap.org/export/embed.html?bbox=12.585%2C55.668%2C12.615%2C55.684&layer=mapnik&marker=55.676%2C12.600"
                className="h-full w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow rule-label">Write to us</span>
              <h2 className="display-md mt-6">Questions, press, feedback</h2>
              <p className="mt-6 text-[0.95rem] leading-[1.85] text-muted-foreground">
                For reservations please use the booking form — it reaches the dining room directly.
                Everything else lands here.
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
                  <input required type="email" placeholder="you@email.com" className={inputClass} />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Subject">
                    <select defaultValue="General enquiry" className={inputClass}>
                      <option>General enquiry</option>
                      <option>Press</option>
                      <option>Suppliers</option>
                      <option>Feedback</option>
                    </select>
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Field label="Message">
                    <textarea rows={5} placeholder="How can we help?" className={inputClass} />
                  </Field>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <ActionButton type="submit">Send message</ActionButton>
                {sent ? (
                  <p className="text-sm text-muted-foreground">Thank you — we will reply shortly.</p>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
