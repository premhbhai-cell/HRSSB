import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { CalendarDays, Clock, FileText, HandHeart, MapPin, Megaphone, Presentation, Users, X, Youtube, ImageIcon, AlertTriangle, Send } from "lucide-react";
import { photos } from "@/lib/photoUrls";
import { ORG, pageHead } from "@/lib/org";
import { EditableBadge, FollowSection, PageHero, Reveal, SectionHead, btn, field, label } from "@/components/site/ui";
import { AutoImageSlider } from "@/components/site/AutoImageSlider";

export const Route = createFileRoute("/programs")({
  head: () => pageHead(
    "Programs, Events & News | Human Rights Suraksha Sangh–Bharat",
    "Explore programs, upcoming events, news, photos and videos from Human Rights Suraksha Sangh–Bharat.",
  ),
  component: Programs,
});

const gallery = [
  { src: photos.awarenessMeeting, alt: "Community awareness workshop" },
  { src: photos.outreach, alt: "Community outreach and volunteering" },
];

function Lightbox({ i, onClose }: { i: number | null; onClose: () => void }) {
  useEffect(() => {
    if (i === null) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [i, onClose]);
  const img = i === null ? undefined : gallery[i];
  if (!img) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label={img.alt} className="fixed inset-0 z-50 grid place-items-center bg-navy/95 p-4" onClick={onClose}>
      <button type="button" aria-label="Close" autoFocus className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-gold text-navy" onClick={onClose}><X /></button>
      <img src={img.src} alt={img.alt} className="max-h-[85vh] max-w-full rounded-lg object-contain" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

function UpdateForm() {
  const [msg, setMsg] = useState<string | null>(null);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (String(f.get("title")).trim().length < 3 || String(f.get("details")).trim().length < 10) {
      setMsg("Please add a title and at least a short description.");
      return;
    }
    setMsg("Demo mode: your update has not been sent. Please share it with the team on WhatsApp.");
  }
  return (
    <form noValidate onSubmit={onSubmit} className="mx-auto max-w-2xl rounded-2xl border bg-card p-6 shadow-card sm:p-8">
      <div className="mb-5 flex gap-3 rounded-lg border border-dashed border-primary/50 bg-primary/5 p-4 text-sm">
        <AlertTriangle className="h-5 w-5 shrink-0 text-primary" aria-hidden />
        <p>For authorised team members. A working upload system needs secure sign-in and storage; until then, submissions are not saved.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="u-type" className={label}>Type</label><select id="u-type" name="type" className={field}><option>News</option><option>Event</option><option>Photo</option><option>Project update</option></select></div>
        <div><label htmlFor="u-date" className={label}>Date</label><input id="u-date" name="date" type="date" className={field} /></div>
        <div className="sm:col-span-2"><label htmlFor="u-title" className={label}>Title *</label><input id="u-title" name="title" className={field} /></div>
        <div className="sm:col-span-2"><label htmlFor="u-details" className={label}>Details *</label><textarea id="u-details" name="details" rows={4} className={field} /></div>
      </div>
      {msg && <p role="status" className="mt-4 rounded-lg bg-muted p-3 text-sm font-semibold text-navy">{msg}</p>}
      <div className="mt-6 flex flex-wrap gap-3">
        <button type="submit" className={btn.red}><Send className="h-4 w-4" aria-hidden />Submit update</button>
        <a href={ORG.whatsapp} target="_blank" rel="noopener noreferrer" className={btn.wa}>Share on WhatsApp</a>
      </div>
    </form>
  );
}

function Programs() {
  const [lb, setLb] = useState<number | null>(null);
  return (
    <>
      <PageHero title="Programs, Events & News" crumb="Programs & News" image={photos.programsHero} intro="Our awareness campaigns, community activities, upcoming events and latest updates." />

      <AutoImageSlider slider={4} label="Certificates and recognition" title="Certificates & Recognition" description="Add approved certificates, registrations and organisational recognition images to the certificates slider folder." />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <SectionHead eyebrow="Featured" title="Featured Program" />
          <article className="grid overflow-hidden rounded-2xl bg-card shadow-card lg:grid-cols-2">
            <img src={photos.awarenessMeeting} alt="Community members taking part in a public awareness meeting" width={1200} height={912} loading="lazy" className="h-full min-h-64 w-full object-cover" />
            <div className="p-6 sm:p-10">
              <EditableBadge />
              <h3 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Human Rights Awareness Campaign</h3>
              <p className="mt-3 text-muted-foreground">A community-level campaign to share information on fundamental rights, dignity and equality. Final details will be published by the organisation.</p>
              <ul className="mt-5 space-y-2 text-sm text-foreground">
                <li className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary" aria-hidden />Date: to be announced</li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" aria-hidden />Location: to be announced</li>
              </ul>
              <Link to="/contact" className={`${btn.red} mt-6`}>Ask for details</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-gradient-navy py-16 sm:py-20">
        <div className="container-x">
          <SectionHead light eyebrow="What We Do" title="Our Activities" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[{ I: Megaphone, t: "Awareness Campaigns" }, { I: Presentation, t: "Workshops" }, { I: HandHeart, t: "Social Welfare" }, { I: Users, t: "Community Outreach" }].map(({ I, t }) => (
              <div key={t} className="card-lift rounded-xl border border-gold/25 bg-navy-2/60 p-6 text-center">
                <I className="mx-auto h-10 w-10 text-gold" aria-hidden />
                <h3 className="mt-3 font-sans font-bold text-on-dark">{t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AutoImageSlider slider={2} label="Programs and events gallery" />

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHead eyebrow="Calendar" title="Upcoming Events" intro="No confirmed events have been published yet. The cards below are layout samples." />
          <div className="grid gap-5 md:grid-cols-2">
            {[{ t: "Public Awareness Meeting", img: photos.awarenessMeeting }, { t: "Women Safety & Child Protection Awareness", img: photos.womenSafety }].map(({ t, img }) => (
              <article key={t} className="card-lift overflow-hidden rounded-xl bg-card shadow-card sm:grid sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
                <img src={img} alt={t} loading="lazy" className="h-48 w-full object-cover sm:h-full" />
                <div className="p-5 sm:p-6">
                  <EditableBadge />
                  <h3 className="mt-2 font-sans text-lg font-bold text-navy">{t}</h3>
                  <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground"><Clock className="h-4 w-4" aria-hidden />Time: to be announced</p>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" aria-hidden />Location: to be announced</p>
                  <a href={ORG.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-bold text-primary hover:underline">Enquire on WhatsApp →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 sm:py-20">
        <div className="container-x">
          <SectionHead eyebrow="News" title="News & Updates" />
          <div className="grid gap-5 md:grid-cols-3">
            {[{ n: 1, title: "Traffic Safety Awareness", img: photos.trafficSafety }, { n: 2, title: "Women Safety & Rights", img: photos.womenSafety }, { n: 3, title: "Cyber Safety & Child Protection", img: photos.cyberSafety }].map(({ n, title, img }) => (
              <article key={n} className="card-lift overflow-hidden rounded-xl bg-card shadow-card">
                <div className="overflow-hidden"><img src={img} alt={title} loading="lazy" className="aspect-[16/9] w-full object-cover transition-transform duration-500 hover:scale-105" /></div>
                <div className="p-5">
                  <EditableBadge />
                  <p className="mt-3 text-xs font-semibold text-primary">Publication date</p>
                  <h3 className="mt-1 font-sans text-lg font-bold text-navy">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Awareness content based on the organisation's public-safety and community-welfare themes. Event dates will be announced after confirmation.</p>
                  <Link to="/contact" className="mt-3 inline-block text-sm font-bold text-primary hover:underline">Read more →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHead eyebrow="Gallery" title="Photo Gallery" intro="Illustrative images are shown until the organisation's own event photos are added." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <button key={g.alt} type="button" onClick={() => setLb(i)} className="group overflow-hidden rounded-xl shadow-card" aria-label={`Open image: ${g.alt}`}>
                <img src={g.src} alt={g.alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </button>
            ))}
            <div className="grid aspect-[4/3] place-items-center rounded-xl border-2 border-dashed bg-card text-center text-sm text-muted-foreground">
              <div><ImageIcon className="mx-auto h-8 w-8" aria-hidden /><p className="mt-2">More photos coming soon</p></div>
            </div>
          </div>
        </div>
      </section>
      <AutoImageSlider slider={3} label="News and gallery highlights" />

      <Lightbox i={lb} onClose={() => setLb(null)} />

      <section className="bg-gradient-navy py-16 sm:py-20">
        <div className="container-x text-center">
          <SectionHead light eyebrow="Videos" title="Video Gallery" intro="Watch our videos on the official YouTube channel — Janta Ki Awaz." />
          <a href={ORG.social.youtube} target="_blank" rel="noopener noreferrer" className="mx-auto flex max-w-2xl aspect-video flex-col items-center justify-center gap-3 rounded-2xl border-2 border-gold/60 bg-navy-2/60 transition-transform hover:scale-[1.01]">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-youtube text-on-dark"><Youtube className="h-10 w-10" aria-hidden /></span>
            <span className="font-bold text-on-dark">Visit our YouTube channel</span>
          </a>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHead eyebrow="Documents" title="Certificates & Project Work" intro="Authorised certificates, reports and approved documents will be published here once provided by the organisation." />
          <div className="grid gap-5 sm:grid-cols-3">
            {["Certificates", "Project Reports", "Approved Documents"].map((t) => (
              <div key={t} className="rounded-xl border-2 border-dashed bg-card p-8 text-center">
                <FileText className="mx-auto h-10 w-10 text-navy-2" aria-hidden />
                <h3 className="mt-3 font-sans font-bold text-navy">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">Awaiting documents</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 sm:py-20">
        <div className="container-x">
          <SectionHead eyebrow="For Team Members" title="Submit an Update" />
          <Reveal><UpdateForm /></Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20"><div className="container-x"><SectionHead eyebrow="Community Action" title="Focus Areas" intro="Our awareness work can be shaped around the needs raised by local communities."/><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[{t:"Human Rights",d:"Awareness of dignity, equality and civic responsibilities.",img:photos.rights},{t:"Women & Child Safety",d:"Sharing safety information and appropriate support resources.",img:photos.childProtection},{t:"Digital Awareness",d:"Promoting safer online habits and fraud prevention awareness.",img:photos.cyberSafety},{t:"Road Safety",d:"Encouraging responsible road use and traffic-rule awareness.",img:photos.trafficSafety}].map(x=><article key={x.t} className="card-lift group overflow-hidden rounded-xl border bg-card shadow-card"><div className="overflow-hidden"><img src={x.img} alt={x.t} loading="lazy" className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"/></div><div className="p-6"><h3 className="font-sans text-lg font-bold text-navy">{x.t}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.d}</p></div></article>)}</div></div></section>
      <section className="bg-muted py-16 sm:py-20"><div className="container-x"><SectionHead eyebrow="Event Information" title="How to Participate"/><div className="grid gap-5 md:grid-cols-3">{[{n:"01",t:"Follow Updates",d:"Check this page and our official social channels for verified announcements."},{n:"02",t:"Contact the Team",d:"Call or WhatsApp the organisation to ask about participation and local activities."},{n:"03",t:"Join Responsibly",d:"Follow event instructions and share only verified information with others."}].map(x=><article key={x.n} className="card-lift rounded-2xl bg-card p-6 shadow-card"><p className="text-sm font-extrabold text-primary">STEP {x.n}</p><h3 className="mt-2 font-sans text-lg font-bold text-navy">{x.t}</h3><p className="mt-2 text-sm text-muted-foreground">{x.d}</p></article>)}</div></div></section>
      <section className="bg-gradient-red py-14"><div className="container-x flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center"><div><h2 className="text-2xl font-bold text-on-dark">Have a community issue to raise?</h2><p className="mt-2 text-on-dark-muted">Contact the organisation to share information or ask about awareness initiatives.</p></div><Link to="/contact" className={btn.gold}>Contact the Team</Link></div></section>
      <AutoImageSlider slider={5} label="Join Our Mission gallery" title="Join Our Mission" description="Become part of our effort to promote human rights awareness, dignity and community welfare." />

      <FollowSection />
    </>
  );
}
