import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown, ChevronRight, Facebook, Instagram, Phone, Youtube, Radio, ShieldCheck } from "lucide-react";
import { ORG } from "@/lib/org";
import { cn } from "@/lib/utils";


export function WhatsAppIcon({ className = "h-5 w-5", "aria-hidden": _ariaHidden = true }: { className?: string; "aria-hidden"?: boolean }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden={_ariaHidden} focusable="false">
      <path d="M16 3.1a12.5 12.5 0 0 0-10.7 19L3.7 28l6.1-1.6A12.5 12.5 0 1 0 16 3.1Z" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M12.1 10.1c-.3-.7-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.3 3.5 1.5 3.8c.2.2 2.6 4.2 6.5 5.7 3.2 1.3 3.9 1 4.6.9.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.9-.6s-2.3-1.1-2.7-1.2c-.4-.1-.6-.2-.9.2-.3.5-1 1.2-1.2 1.5-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-.9-.8-1.5-1.8-1.7-2.2-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7-.1-.2-.9-2.2-1.2-2.9Z" fill="currentColor" />
    </svg>
  );
}

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && (setV(true), io.disconnect()), { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={cn("reveal", v && "is-visible", className)}>{children}</div>;
}

export function SectionHead({ eyebrow, title, intro, light, center = true }: { eyebrow?: string; title: string; intro?: string; light?: boolean; center?: boolean }) {
  return (
    <div className={cn("mb-10 max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow && <p className={cn("mb-2 text-xs font-bold uppercase tracking-[0.2em]", light ? "text-gold" : "text-primary")}>{eyebrow}</p>}
      <h2 className={cn("text-2xl font-bold leading-tight sm:text-4xl", light ? "text-on-dark" : "text-navy")}>{title}</h2>
      <div className={cn("gold-rule mt-4", center && "mx-auto")} />
      {intro && <p className={cn("mt-4 text-base leading-relaxed", light ? "text-on-dark-muted" : "text-muted-foreground")}>{intro}</p>}
    </div>
  );
}

const btnBase = "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/60 disabled:opacity-60";
export const btn = {
  red: cn(btnBase, "bg-gradient-red text-primary-foreground shadow-card hover:brightness-110"),
  gold: cn(btnBase, "bg-gold text-navy shadow-gold hover:brightness-105"),
  outlineLight: cn(btnBase, "border-2 border-gold/70 text-on-dark hover:bg-gold hover:text-navy"),
  outline: cn(btnBase, "border-2 border-navy-2 text-navy hover:bg-navy hover:text-on-dark"),
  wa: cn(btnBase, "bg-whatsapp text-on-dark hover:brightness-110"),
};

export function PageHero({ title, hindi, intro, crumb, image, children }: { title: string; hindi?: string; intro?: string; crumb: string; image?: string; children?: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-navy py-12 sm:py-20">
      {image && <img src={image} alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/55" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border-[24px] border-gold/10" />
      <div className="container-x relative">
        <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1 text-sm text-on-dark-muted">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight className="h-4 w-4" aria-hidden />
          <span className="text-gold" aria-current="page">{crumb}</span>
        </nav>
        <h1 className="max-w-4xl text-[clamp(1.75rem,5vw,3.25rem)] font-bold leading-tight text-on-dark">{title}</h1>
        {hindi && <p lang="hi" className="mt-3 font-hindi text-lg text-gold sm:text-xl">{hindi}</p>}
        {intro && <p className="mt-4 max-w-2xl text-on-dark-muted">{intro}</p>}
        {children && <div className="mt-7 flex flex-wrap gap-3">{children}</div>}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold via-primary to-gold" />
    </section>
  );
}

export function SocialIcons({ size = "md", className }: { size?: "sm" | "md"; className?: string }) {
  const s = size === "sm" ? "h-8 w-8" : "h-11 w-11";
  const items = [
    { href: ORG.social.whatsappChannel, label: "WhatsApp Channel", Icon: WhatsAppIcon, c: "bg-whatsapp" },
    { href: ORG.social.facebook, label: "Facebook", Icon: Facebook, c: "bg-facebook" },
    { href: ORG.social.youtube, label: "YouTube", Icon: Youtube, c: "bg-youtube" },
    { href: ORG.social.instagram, label: "Instagram", Icon: Instagram, c: "bg-instagram" },
  ];
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {items.map(({ href, label, Icon, c }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in new tab)`}
          className={cn("grid place-items-center rounded-full text-on-dark transition-transform hover:scale-110", s, c)}>
          <Icon className={size === "sm" ? "h-4 w-4" : "h-5 w-5"} aria-hidden />
        </a>
      ))}
    </div>
  );
}

export function FollowSection() {
  const cards = [
    { href: ORG.social.whatsappChannel, name: "WhatsApp Channel", text: "Get organisation updates directly on WhatsApp.", Icon: Radio, c: "bg-whatsapp" },
    { href: ORG.social.facebook, name: "Facebook", text: "Follow our page for announcements and activities.", Icon: Facebook, c: "bg-facebook" },
    { href: ORG.social.youtube, name: "YouTube — Janta Ki Awaz", text: "Watch videos and awareness messages.", Icon: Youtube, c: "bg-youtube" },
    { href: ORG.social.instagram, name: "Instagram", text: "See photos and short updates.", Icon: Instagram, c: "bg-instagram" },
  ];
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container-x">
        <SectionHead eyebrow="Stay Connected" title="Follow Our Organization" intro="Join us on our official social media channels." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ href, name, text, Icon, c }) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="card-lift group rounded-xl border bg-card p-6 shadow-card">
              <span className={cn("grid h-12 w-12 place-items-center rounded-full text-on-dark", c)}><Icon className="h-6 w-6" aria-hidden /></span>
              <h3 className="mt-4 font-sans text-lg font-bold text-navy">{name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              <span className="mt-3 inline-block text-sm font-bold text-primary group-hover:underline">Follow →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IdentifiersPanel({ dark }: { dark?: boolean }) {
  return (
    <div className={cn("rounded-2xl border-2 border-gold/60 p-6 sm:p-8", dark ? "bg-navy/40" : "bg-card shadow-card")}>
      <div className="flex items-center gap-3">
        <ShieldCheck className="h-7 w-7 shrink-0 text-gold" aria-hidden />
        <h3 className={cn("font-sans text-lg font-bold", dark ? "text-on-dark" : "text-navy")}>Organization Identifiers</h3>
      </div>
      <dl className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {ORG.identifiers.map((i) => (
          <div key={i.label} className={cn("rounded-lg border-l-4 border-primary p-4", dark ? "bg-navy-2/60" : "bg-muted")}>
            <dt className={cn("text-xs font-semibold uppercase tracking-wider", dark ? "text-on-dark-muted" : "text-muted-foreground")}>{i.label}</dt>
            <dd className={cn("mt-1 break-all font-mono text-base font-bold", dark ? "text-gold" : "text-navy")}>{i.value}</dd>
          </div>
        ))}
      </dl>
      <p className={cn("mt-5 text-xs", dark ? "text-on-dark-muted" : "text-muted-foreground")}>
        These identifiers are supplied by the organization for reference. For clarification on registration or status, please contact the organization directly.
      </p>
      <Link to="/contact" className={cn("mt-4", dark ? btn.gold : btn.outline)}>Contact for clarification</Link>
    </div>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y rounded-xl border bg-card shadow-card">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <h3 className="font-sans">
              <button type="button" aria-expanded={isOpen} aria-controls={`faq-${i}-${it.q.length}`} onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-navy">
                {it.q}
                <ChevronDown className={cn("h-5 w-5 shrink-0 text-primary transition-transform", isOpen && "rotate-180")} aria-hidden />
              </button>
            </h3>
            <div id={`faq-${i}-${it.q.length}`} hidden={!isOpen} className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{it.a}</div>
          </div>
        );
      })}
    </div>
  );
}

export function EditableBadge({ children = "Sample — replace before publishing" }: { children?: ReactNode }) {
  return <span className="inline-block rounded-full border border-dashed border-primary/60 bg-primary/5 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-primary">{children}</span>;
}

export function ContactCta() {
  return (
    <section className="bg-gradient-red py-14">
      <div className="container-x flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <div>
          <h2 className="text-2xl font-bold text-on-dark sm:text-3xl">Need guidance or want to get involved?</h2>
          <p className="mt-2 text-on-dark-muted">Helpline: <a href={`tel:${ORG.primaryPhone}`} className="font-bold text-gold">{ORG.primaryPhone}</a> · <a href="tel:9507679985" className="font-bold text-gold">9507679985</a></p>
          <p className="mt-2 max-w-2xl text-xs leading-relaxed text-on-dark-muted">{ORG.addresses.map((a) => `${a.label}: ${a.value}`).join(" | ")}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={`tel:${ORG.primaryPhone}`} className={btn.gold}><Phone className="h-4 w-4" aria-hidden />Call Now</a>
          <a href={ORG.whatsapp} target="_blank" rel="noopener noreferrer" className={btn.wa}><WhatsAppIcon className="h-4 w-4" />WhatsApp</a>
          <Link to="/membership" className={btn.outlineLight}>Membership Enquiry</Link>
        </div>
      </div>
    </section>
  );
}

export const field = "w-full min-h-11 rounded-lg border border-input bg-card px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/50 aria-[invalid=true]:border-destructive";
export const label = "mb-1.5 block text-sm font-semibold text-navy";
export const validMobile = (v: string) => /^[6-9]\d{9}$/.test(v.replace(/\D/g, "").replace(/^91(?=\d{10}$)/, ""));
