import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowUp, Menu, Phone, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { NAV, ORG } from "@/lib/org";
import { SocialIcons, WhatsAppIcon, btn } from "./ui";
import { cn } from "@/lib/utils";

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <>
      <div className="bg-gradient-red text-on-dark">
        <div className="container-x flex items-center justify-between gap-3 py-1.5 text-xs sm:text-sm">
          <p className="min-w-0 truncate">
            <span className="hidden sm:inline">Helpline: </span>
            <a href={`tel:${ORG.primaryPhone}`} className="font-bold text-gold">{ORG.primaryPhone}</a>
            <span className="hidden md:inline"> · {ORG.phones.slice(1).join(" · ")}</span>
          </p>
          <SocialIcons size="sm" className="hidden shrink-0 sm:flex" />
        </div>
      </div>
      <header className={cn("sticky top-0 z-40 border-b-2 border-gold/70 bg-navy transition-shadow", scrolled && "shadow-card")}>
        <div className="container-x grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-2.5">
          <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
            <img src={logo} alt="Human Rights Suraksha Sangh–Bharat emblem" width={76} height={76} className="h-14 w-14 shrink-0 rounded-full border-2 border-gold bg-white object-contain p-0.5 shadow-gold sm:h-[4.5rem] sm:w-[4.5rem]" />
            <span className="min-w-0">
              <span className="block truncate font-display text-sm font-bold text-on-dark sm:text-base">
                <span className="sm:hidden">{ORG.short}</span><span className="hidden sm:inline">{ORG.name}</span>
              </span>
              <span lang="hi" className="block truncate font-hindi text-xs text-gold sm:text-sm">{ORG.hindi}</span>
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/contact" className={cn(btn.outlineLight, "hidden xl:inline-flex")}>Contact Us</Link>
            <Link to="/membership" className={cn(btn.gold, "hidden sm:inline-flex")}>Join as Member</Link>
            <button type="button" className="grid h-11 w-11 place-items-center rounded-lg text-on-dark lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <nav aria-label="Main" className="hidden border-t border-on-dark/10 lg:block">
          <ul className="container-x flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} activeOptions={{ exact: true }} className="block border-b-2 border-transparent px-4 py-3 text-sm font-semibold text-on-dark-muted hover:text-gold" activeProps={{ className: "!border-gold !text-gold" }}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {open && (
          <nav id="mobile-nav" aria-label="Mobile" className="border-t border-on-dark/10 bg-navy lg:hidden">
            <ul className="container-x py-3">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }} className="block rounded-lg px-3 py-3 font-semibold text-on-dark" activeProps={{ className: "!bg-navy-2 !text-gold" }}>{n.label}</Link>
                </li>
              ))}
              <li className="mt-3 flex flex-wrap items-center gap-3 px-3">
                <Link to="/membership" onClick={() => setOpen(false)} className={btn.gold}>Join as Member</Link>
                <SocialIcons size="sm" />
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-navy pb-16 text-on-dark-muted lg:pb-0">
      <div className="h-1 bg-gradient-to-r from-gold via-primary to-gold" />
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" width={76} height={76} loading="lazy" className="h-16 w-16 rounded-full border-2 border-gold bg-white object-contain p-0.5 shadow-gold sm:h-[4.5rem] sm:w-[4.5rem]" />
            <div>
              <p className="font-display font-bold text-on-dark">{ORG.name}</p>
              <p lang="hi" className="font-hindi text-sm text-gold">{ORG.hindi}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed">A social organisation working for human rights awareness, dignity, equality and community welfare across India.</p>
          <div className="mt-4 space-y-3 text-xs leading-relaxed">{ORG.addresses.map((a) => <p key={a.label}><strong className="block text-gold">{a.label}</strong>{a.value}</p>)}</div>
        </div>
        <div>
          <h2 className="font-sans text-sm font-bold uppercase tracking-widest text-gold">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">{NAV.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-gold">{n.label}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="font-sans text-sm font-bold uppercase tracking-widest text-gold">Helpline</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {ORG.phones.map((p) => <li key={p}><a href={`tel:${p}`} className="inline-flex items-center gap-2 hover:text-gold"><Phone className="h-4 w-4" aria-hidden />{p}</a></li>)}
          </ul>
          <SocialIcons size="sm" className="mt-5" />
        </div>
        <div>
          <h2 className="font-sans text-sm font-bold uppercase tracking-widest text-gold">Identifiers</h2>
          <dl className="mt-4 space-y-1.5 text-xs">
            {ORG.identifiers.map((i) => <div key={i.label}><dt className="inline">{i.label}: </dt><dd className="inline font-mono text-on-dark">{i.value}</dd></div>)}
          </dl>
        </div>
      </div>
      <div className="border-t border-on-dark/10">
        <p className="container-x py-5 text-center text-xs">© {new Date().getFullYear()} {ORG.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

function Floating() {
  const [top, setTop] = useState(false);
  useEffect(() => {
    const f = () => setTop(window.scrollY > 600);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <>
      <div className="fixed bottom-6 right-5 z-40 hidden flex-col gap-3 lg:flex">
        {top && <button type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0 })} className="grid h-12 w-12 place-items-center rounded-full bg-navy-2 text-gold shadow-card"><ArrowUp /></button>}
        <a href={ORG.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-on-dark shadow-card transition-transform hover:scale-110"><WhatsAppIcon className="h-7 w-7" /></a>
      </div>
      <div className="mobile-action-dock fixed inset-x-3 bottom-2 z-40 grid grid-cols-3 overflow-hidden rounded-2xl border border-gold/40 bg-navy/95 shadow-[0_12px_32px_-8px_rgba(0,0,0,.55)] backdrop-blur-md lg:hidden">
        <a href={`tel:${ORG.primaryPhone}`} className="flex min-h-12 flex-row items-center justify-center gap-2 px-2 py-2 text-xs font-bold text-on-dark hover:bg-navy-2"><Phone className="h-4 w-4 text-gold" aria-hidden />Call</a>
        <a href={ORG.whatsapp} target="_blank" rel="noopener noreferrer" className="flex min-h-12 flex-row items-center justify-center gap-2 border-x border-white/10 bg-whatsapp px-2 py-2 text-xs font-bold text-white hover:bg-[#128C7E]"><WhatsAppIcon className="h-4 w-4" />WhatsApp</a>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex min-h-12 flex-row items-center justify-center gap-2 px-2 py-2 text-xs font-bold text-on-dark hover:bg-navy-2"><ArrowUp className="h-4 w-4 text-gold" aria-hidden />Top</button>
      </div>
    </>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-gold focus:p-3 focus:text-navy">Skip to content</a>
      <Header />
      <main id="main" className="flex-1">{children}</main>
      <Footer />
      <Floating />
    </div>
  );
}
