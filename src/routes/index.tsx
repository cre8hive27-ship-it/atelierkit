import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Star, MapPin, Clock, Car, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink, ActionButton, Field, inputClass } from "@/components/site/ui";
import {
  heroDining,
  dish1,
  dish2,
  dish3,
  chefPortrait,
  privateDining,
  kitchen,
  cocktail,
  ingredients,
  wine,
  detail,
  guests,
} from "@/lib/images";

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Atelier Kitchen",
  servesCuisine: ["Nordic", "Contemporary European"],
  priceRange: "$$$$",
  telephone: "+45 33 12 00 00",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Strandgade 42",
    addressLocality: "Copenhagen",
    postalCode: "1401",
    addressCountry: "DK",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
      opens: "17:30",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "17:00",
      closes: "00:00",
    },
  ],
  acceptsReservations: true,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atelier Kitchen — Seasonal Fine Dining in Copenhagen" },
      {
        name: "description",
        content:
          "Exceptional dining crafted with passion. Seasonal cuisine, handcrafted cocktails and unforgettable evenings at Atelier Kitchen, Copenhagen.",
      },
      { property: "og:title", content: "Atelier Kitchen — Exceptional Dining, Crafted with Passion" },
      {
        property: "og:description",
        content:
          "Seasonal cuisine, handcrafted cocktails and an atmosphere designed for exceptional dining in Copenhagen.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(restaurantSchema),
      },
    ],
  }),
  component: Home,
});

const signatureDishes = [
  {
    name: "Hand-dived Scallop",
    description: "Grilled over embers, herb oil, fermented gooseberry, sea vegetables.",
    price: "285",
    image: dish1,
  },
  {
    name: "Aged Duck, Cherry",
    description: "Dry-aged eighteen days, morello cherry, sweet garlic, dark jus.",
    price: "395",
    image: dish2,
  },
  {
    name: "Chocolate, Sea Salt",
    description: "Single-origin cremeux, brown butter ice cream, malted crumb.",
    price: "165",
    image: dish3,
  },
];

const experiences = [
  {
    label: "Private Dining",
    title: "The Stone Room",
    body: "A vaulted room for twelve to twenty-four guests, with its own service team, bespoke menus and a dedicated entrance from the courtyard.",
    image: privateDining,
    to: "/private-dining",
    cta: "Explore private dining",
  },
  {
    label: "Chef's Table",
    title: "Six Seats at the Pass",
    body: "The closest view of the kitchen. Eleven courses served by the chefs who cook them, paced across three unhurried hours.",
    image: kitchen,
    to: "/reservations",
    cta: "Reserve the chef's table",
  },
  {
    label: "Wine Collection",
    title: "Twelve Hundred Labels",
    body: "A cellar of low-intervention growers and classic estates, curated by head sommelier Lise Halvorsen and poured by the glass whenever possible.",
    image: wine,
    to: "/menu",
    cta: "See the wine list",
  },
  {
    label: "Seasonal Menu",
    title: "Written Every Fortnight",
    body: "The menu follows the coast and the market garden. Nothing travels far, and nothing stays on the card longer than the season allows.",
    image: ingredients,
    to: "/menu",
    cta: "View the current menu",
  },
];

const galleryImages = [
  { src: kitchen, alt: "Chefs plating dishes at the open kitchen pass", span: "lg:row-span-2" },
  { src: cocktail, alt: "Handcrafted cocktail on a dark marble bar", span: "" },
  { src: detail, alt: "Linen napkin and brass cutlery on a marble table", span: "" },
  { src: guests, alt: "Guests dining together by candlelight", span: "lg:col-span-2" },
  { src: dish3, alt: "Chocolate dessert plated on white marble", span: "" },
];

const testimonials = [
  {
    quote:
      "The most complete dining room in Scandinavia right now — precise cooking, but generous with it. We stayed four hours and would have stayed longer.",
    name: "Marianne Holt",
    role: "Nordic Table Review",
  },
  {
    quote:
      "Every plate felt considered rather than clever. The duck is worth the flight, and the service never once broke its rhythm.",
    name: "Julien Ferrand",
    role: "Guest since 2019",
  },
  {
    quote:
      "We hosted twenty for our anniversary in the Stone Room. Faultless from the first call to the last glass of Chartreuse.",
    name: "Amara Okonkwo",
    role: "Private dining guest",
  },
];

const journal = [
  {
    category: "Seasonal Menu",
    title: "What Autumn Brings to the Pass",
    excerpt: "Chanterelles from Gribskov, the first of the wild ducks, and a return of the fermented plum.",
    date: "12 October",
    image: ingredients,
  },
  {
    category: "Wine Pairing",
    title: "Jura, and Why We Keep Coming Back",
    excerpt: "Lise on savagnin, oxidative ageing, and the bottles that changed how we build a pairing.",
    date: "28 September",
    image: wine,
  },
  {
    category: "Chef Stories",
    title: "Eighteen Days: Ageing Duck",
    excerpt: "A short essay on patience, humidity, and the moment a bird is finally ready for the fire.",
    date: "05 September",
    image: dish2,
  },
];

function Home() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout overHero>
      {/* 1 — Hero */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img
          src={heroDining}
          alt="Candlelit dining room at Atelier Kitchen"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />
        <div className="shell relative w-full pb-20 pt-40 lg:pb-28">
          <div className="max-w-3xl">
            <Reveal>
              <span className="eyebrow rule-label text-primary-foreground/75">
                Copenhagen · Est. 2011
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="display-xl mt-7 text-primary-foreground">
                Exceptional Dining.
                <br />
                Crafted with <span className="italic">Passion.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-primary-foreground/80 lg:text-lg">
                Experience seasonal cuisine, handcrafted cocktails, and unforgettable moments in an
                atmosphere designed for exceptional dining.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-11 flex flex-wrap gap-3">
                <ActionLink to="/reservations">Reserve a Table</ActionLink>
                <ActionLink to="/menu" variant="ghostLight">
                  Explore Menu
                </ActionLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2 — About */}
      <section className="py-24 lg:py-36">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow rule-label">Our Story</span>
              <h2 className="display-lg mt-6">
                A kitchen built around the <span className="italic">seasons</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="lede mt-8">
                Atelier Kitchen began in a former sailmaker's workshop on the Copenhagen waterfront.
                The room has changed little since — lime-washed walls, oak floors, and a hearth that
                has not gone cold in fourteen years.
              </p>
              <p className="mt-6 text-[0.975rem] leading-[1.85] text-muted-foreground">
                We cook with what the coast and our market garden give us that week. Fish arrives
                whole each morning; vegetables are grown thirty kilometres north; everything else is
                preserved, cured or fermented in-house. It is a quiet philosophy, and a demanding one.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  ["14", "Years open"],
                  ["2", "Michelin stars"],
                  ["30km", "Average sourcing"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <dt className="font-display text-4xl text-primary">{value}</dt>
                    <dd className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-5 gap-5">
              <Reveal className="col-span-3 img-zoom">
                <img
                  src={detail}
                  alt="Marble table set with linen, brass cutlery and a candle"
                  loading="lazy"
                  width={1440}
                  height={1024}
                  className="aspect-4/5 w-full object-cover"
                />
              </Reveal>
              <Reveal delay={140} className="col-span-2 self-end img-zoom">
                <img
                  src={ingredients}
                  alt="Seasonal vegetables and herbs on a wooden table"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-3/4 w-full object-cover"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Signature dishes */}
      <section className="border-y border-border bg-surface py-24 lg:py-36">
        <div className="shell">
          <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow rule-label">Signature Dishes</span>
              <h2 className="display-lg mt-6">From the current menu</h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="lede">
                Three plates that return each year, refined a little further every season.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {signatureDishes.map((dish, i) => (
              <Reveal key={dish.name} delay={i * 120}>
                <article className="group h-full border border-border bg-card">
                  <div className="img-zoom">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="aspect-4/5 w-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-2xl">{dish.name}</h3>
                      <span className="shrink-0 text-sm text-brass">{dish.price} kr</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {dish.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <ActionLink to="/menu" variant="outline">
              View the full menu
            </ActionLink>
          </Reveal>
        </div>
      </section>

      {/* 4 — Chef */}
      <section className="py-24 lg:py-36">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5 img-zoom">
            <img
              src={chefPortrait}
              alt="Head chef Mathias Rovik in the kitchen"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-4/5 w-full object-cover"
            />
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7 lg:self-center">
            <Reveal>
              <span className="eyebrow rule-label">Meet the Chef</span>
              <h2 className="display-lg mt-6">Mathias Rovik</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="lede mt-8">
                "Cooking well is mostly restraint. Find something grown properly, do three things to
                it, and know when to stop."
              </p>
              <p className="mt-6 text-[0.975rem] leading-[1.85] text-muted-foreground">
                Mathias trained in Lyon and Stockholm before returning to Denmark to open Atelier
                Kitchen in 2011. He cooks a short menu, works the pass every service, and has kept
                the same fish supplier for thirteen years.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-10 divide-y divide-border border-y border-border">
                {[
                  ["Two Michelin stars", "Retained since 2016"],
                  ["Nordic Chef of the Year", "2021"],
                  ["Sustainable Kitchen Award", "2023"],
                ].map(([title, meta]) => (
                  <li key={title} className="flex items-baseline justify-between gap-6 py-4">
                    <span className="text-sm">{title}</span>
                    <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {meta}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <ActionLink to="/chef" variant="outline">
                  Read the full story
                </ActionLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5 — Experiences */}
      <section className="border-y border-border bg-surface py-24 lg:py-36">
        <div className="shell">
          <Reveal>
            <span className="eyebrow rule-label">Dining Experiences</span>
            <h2 className="display-lg mt-6 max-w-2xl">Five ways to spend an evening with us</h2>
          </Reveal>

          <div className="mt-20 space-y-24 lg:space-y-32">
            {experiences.map((item, i) => (
              <Reveal key={item.title}>
                <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                  <div
                    className={`img-zoom lg:col-span-7 ${i % 2 === 1 ? "lg:order-2 lg:col-start-6" : ""}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      width={1440}
                      height={1024}
                      className="aspect-4/3 w-full object-cover"
                    />
                  </div>
                  <div className={`lg:col-span-4 ${i % 2 === 1 ? "lg:order-1" : "lg:col-start-9"}`}>
                    <span className="eyebrow">{item.label}</span>
                    <h3 className="display-md mt-4">{item.title}</h3>
                    <p className="mt-5 text-[0.95rem] leading-[1.85] text-muted-foreground">
                      {item.body}
                    </p>
                    <Link
                      to={item.to}
                      className="link-underline mt-7 inline-block text-[0.72rem] font-medium uppercase tracking-[0.16em] text-primary"
                    >
                      {item.cta}
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Gallery */}
      <section className="py-24 lg:py-36">
        <div className="shell">
          <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow rule-label">Gallery</span>
              <h2 className="display-lg mt-6">The room, the fire, the people</h2>
            </div>
            <div className="lg:col-span-3 lg:col-start-10 lg:text-right">
              <Link
                to="/gallery"
                className="link-underline text-[0.72rem] font-medium uppercase tracking-[0.16em] text-primary"
              >
                View full gallery
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-5 lg:auto-rows-[280px] lg:grid-cols-4">
            {galleryImages.map((img, i) => (
              <Reveal key={img.alt} delay={i * 90} className={`img-zoom ${img.span}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Testimonials */}
      <section className="border-y border-border bg-surface py-24 lg:py-36">
        <div className="shell">
          <Reveal>
            <span className="eyebrow rule-label">Guest Notes</span>
            <h2 className="display-lg mt-6 max-w-xl">What our guests remember</h2>
          </Reveal>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 120}>
                <figure className="flex h-full flex-col border border-border bg-card p-9">
                  <div className="flex gap-1 text-brass" aria-label="Five out of five stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="mt-6 grow font-display text-[1.35rem] leading-[1.5]">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-8 border-t border-border pt-5">
                    <span className="block text-sm">{t.name}</span>
                    <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {t.role}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — Journal */}
      <section className="py-24 lg:py-36">
        <div className="shell">
          <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow rule-label">Latest News</span>
              <h2 className="display-lg mt-6">From the journal</h2>
            </div>
            <div className="lg:col-span-3 lg:col-start-10 lg:text-right">
              <Link
                to="/blog"
                className="link-underline text-[0.72rem] font-medium uppercase tracking-[0.16em] text-primary"
              >
                All articles
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {journal.map((post, i) => (
              <Reveal key={post.title} delay={i * 120}>
                <article className="group h-full">
                  <Link to="/blog" className="block">
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
                      <span>{post.date}</span>
                    </div>
                    <h3 className="mt-3 font-display text-2xl leading-snug">{post.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9 — Reservation */}
      <section className="bg-primary py-24 text-primary-foreground lg:py-36">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow rule-label text-primary-foreground/70">Reservations</span>
              <h2 className="display-lg mt-6 text-primary-foreground">Reserve Your Table</h2>
              <p className="mt-7 max-w-md text-[0.975rem] leading-[1.85] text-primary-foreground/75">
                Bookings open sixty days in advance. For parties larger than eight, or for the
                chef's table, please write to us directly and we will arrange the evening with you.
              </p>
              <p className="mt-8 text-sm text-primary-foreground/70">
                <a href="tel:+4533120000" className="link-underline">
                  +45 33 12 00 00
                </a>
                <span className="mx-3" aria-hidden="true">
                  ·
                </span>
                <a href="mailto:reservations@atelierkitchen.dk" className="link-underline">
                  reservations@atelierkitchen.dk
                </a>
              </p>
            </Reveal>
          </div>

          <Reveal delay={140} className="lg:col-span-6 lg:col-start-7">
            <form
              className="border border-primary-foreground/15 bg-card p-8 text-foreground lg:p-10"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Date">
                  <input type="date" required className={inputClass} />
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
                <Field label="Full name">
                  <input type="text" required placeholder="Your name" className={inputClass} />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Special requests">
                  <textarea
                    rows={4}
                    placeholder="Allergies, celebrations, seating preferences"
                    className={inputClass}
                  />
                </Field>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <ActionButton type="submit">Request Reservation</ActionButton>
                {submitted ? (
                  <p className="text-sm text-muted-foreground">
                    Thank you — we will confirm by email within the hour.
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      {/* 10 — Location */}
      <section className="py-24 lg:py-36">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow rule-label">Find Us</span>
              <h2 className="display-lg mt-6">Strandgade 42</h2>
            </Reveal>
            <Reveal delay={120}>
              <ul className="mt-10 space-y-7">
                {[
                  {
                    icon: MapPin,
                    title: "Address",
                    body: "Strandgade 42, 1401 Copenhagen K, Denmark",
                  },
                  {
                    icon: Clock,
                    title: "Opening hours",
                    body: "Tue–Thu 17:30–23:00 · Fri–Sat 17:00–00:00 · Sun–Mon closed",
                  },
                  {
                    icon: Car,
                    title: "Parking",
                    body: "Valet from 17:00 on the courtyard side. Public garage at Wilders Plads, 3 min walk.",
                  },
                  {
                    icon: Phone,
                    title: "Contact",
                    body: "+45 33 12 00 00 · hello@atelierkitchen.dk",
                  },
                ].map(({ icon: Icon, title, body }) => (
                  <li key={title} className="flex gap-4">
                    <Icon className="mt-1 h-4 w-4 shrink-0 text-brass" strokeWidth={1.4} />
                    <div className="min-w-0">
                      <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-foreground">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-7 lg:col-start-6">
            <div className="h-[420px] w-full border border-border bg-surface lg:h-full lg:min-h-[460px]">
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
    </SiteLayout>
  );
}
