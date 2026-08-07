import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center rounded-sm px-7 py-3.5 text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants = {
  solid: "bg-primary text-primary-foreground hover:bg-ink",
  outline: "border border-border bg-transparent text-foreground hover:bg-surface",
  ghostLight: "border border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-ink",
} as const;

type Variant = keyof typeof variants;

export function ActionLink({
  to,
  variant = "solid",
  className,
  children,
  ...rest
}: { to: string; variant?: Variant; children: ReactNode } & Omit<
  ComponentProps<typeof Link>,
  "to" | "children"
>) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </Link>
  );
}

export function ActionButton({
  variant = "solid",
  className,
  children,
  ...rest
}: { variant?: Variant } & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}

export function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={cn("eyebrow rule-label", light && "text-primary-foreground/70")}>{children}</span>
  );
}

export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

export const inputClass =
  "w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground outline-hidden transition-colors placeholder:text-muted-foreground/70 focus:border-primary";
