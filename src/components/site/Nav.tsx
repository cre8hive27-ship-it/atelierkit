import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const primaryLinks = [
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/chef", label: "Chef" },
  { to: "/private-dining", label: "Private Dining" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Journal" },
];

const allLinks = [
  { to: "/", label: "Home" },
  ...primaryLinks,
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
  { to: "/careers", label: "Careers" },
];

export function Nav({ overHero = false }: { overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const light = overHero && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        light ? "bg-transparent" : "border-b border-border bg-background",
      )}
    >
      <nav
        aria-label="Primary"
        className="shell grid h-[4.75rem] grid-cols-[auto_1fr_auto] items-center gap-6 lg:h-[5.5rem]"
      >
        <Link
          to="/"
          className={cn(
            "font-display text-[1.35rem] leading-none tracking-[0.02em] transition-colors lg:text-[1.5rem]",
            light ? "text-primary-foreground" : "text-foreground",
          )}
        >
          Atelier <span className="italic">Kitchen</span>
        </Link>

        <ul className="hidden min-w-0 items-center justify-center gap-8 lg:flex">
          {primaryLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={cn(
                  "link-underline text-[0.72rem] font-medium uppercase tracking-[0.16em] transition-colors",
                  light ? "text-primary-foreground/85 hover:text-primary-foreground" : "text-muted-foreground hover:text-foreground",
                  pathname === link.to && (light ? "text-primary-foreground" : "text-foreground"),
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            to="/reservations"
            className={cn(
              "hidden rounded-sm px-6 py-3 text-[0.68rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300 sm:inline-flex",
              light
                ? "border border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground hover:text-ink"
                : "bg-primary text-primary-foreground hover:bg-ink",
            )}
          >
            Reserve a Table
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "flex h-11 w-11 items-center justify-center lg:hidden",
              light ? "text-primary-foreground" : "text-foreground",
            )}
          >
            <span className="relative block h-3 w-6">
              <span
                className={cn(
                  "absolute left-0 block h-px w-6 bg-current transition-transform duration-300",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-px w-6 bg-current transition-transform duration-300",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="shell flex flex-col py-4">
            {allLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block border-b border-border py-4 font-display text-2xl text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-5">
              <Link
                to="/reservations"
                className="inline-flex w-full items-center justify-center rounded-sm bg-primary px-6 py-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-primary-foreground"
              >
                Reserve a Table
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
