import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Facebook } from "lucide-react";

const explore = [
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/chef", label: "The Chef" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Journal" },
];

const visit = [
  { to: "/private-dining", label: "Private Dining" },
  { to: "/events", label: "Events" },
  { to: "/reservations", label: "Reservations" },
  { to: "/contact", label: "Contact" },
  { to: "/careers", label: "Careers" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer className="border-t border-border bg-surface">
      <div className="shell py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="font-display text-3xl leading-none">
              Atelier <span className="italic">Kitchen</span>
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A seasonal kitchen and dining room in Copenhagen. Wood fire, coastal produce, and a
              cellar built over two decades.
            </p>
            <div className="mt-7 flex gap-3">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.4} />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.4} />
              </a>
            </div>
          </div>

          <nav className="lg:col-span-2" aria-label="Explore">
            <h2 className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {explore.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="link-underline text-sm text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-2" aria-label="Visit">
            <h2 className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Visit
            </h2>
            <ul className="mt-5 space-y-3">
              {visit.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="link-underline text-sm text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h2 className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Hours &amp; Address
            </h2>
            <dl className="mt-5 space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between gap-6 border-b border-border pb-2">
                <dt>Tuesday — Thursday</dt>
                <dd className="text-foreground">17:30 — 23:00</dd>
              </div>
              <div className="flex justify-between gap-6 border-b border-border pb-2">
                <dt>Friday — Saturday</dt>
                <dd className="text-foreground">17:00 — 00:00</dd>
              </div>
              <div className="flex justify-between gap-6 border-b border-border pb-2">
                <dt>Sunday — Monday</dt>
                <dd className="text-foreground">Closed</dd>
              </div>
            </dl>
            <address className="mt-5 not-italic text-sm leading-relaxed text-muted-foreground">
              Strandgade 42, 1401 Copenhagen K
              <br />
              <a href="tel:+4533120000" className="link-underline text-foreground">
                +45 33 12 00 00
              </a>
            </address>

            <form
              className="mt-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setEmail("");
              }}
            >
              <label
                htmlFor="newsletter"
                className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-muted-foreground"
              >
                Newsletter
              </label>
              <div className="mt-3 flex gap-2">
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full rounded-sm border border-border bg-card px-4 py-3 text-sm outline-hidden transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-sm bg-primary px-5 py-3 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-ink"
                >
                  Join
                </button>
              </div>
              {sent ? (
                <p className="mt-3 text-xs text-muted-foreground">
                  Thank you — we will be in touch with seasonal news.
                </p>
              ) : null}
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Atelier Kitchen. All rights reserved.</p>
          <p>Design &amp; hospitality, Copenhagen</p>
        </div>
      </div>
    </footer>
  );
}
