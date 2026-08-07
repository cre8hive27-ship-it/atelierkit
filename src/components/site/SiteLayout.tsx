import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function SiteLayout({
  children,
  overHero = false,
}: {
  children: ReactNode;
  overHero?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Nav overHero={overHero} />
      <main>{children}</main>
      <Footer />

      {/* Mobile sticky reservation */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-none sm:hidden">
        <Link
          to="/reservations"
          className="flex w-full items-center justify-center rounded-sm bg-primary px-6 py-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-primary-foreground"
        >
          Reserve a Table
        </Link>
      </div>
      <div className="h-20 sm:hidden" />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <section className="border-b border-border bg-surface pt-[7.5rem] pb-16 lg:pt-[11rem] lg:pb-24">
      <div className="shell grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="eyebrow rule-label">{eyebrow}</span>
          <h1 className="display-lg mt-6">{title}</h1>
        </div>
        {intro ? (
          <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="lede">{intro}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
