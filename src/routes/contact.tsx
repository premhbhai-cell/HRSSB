import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { photos } from "@/lib/photoUrls";
import { AlertTriangle, Building2, CheckCircle2, HandHeart, Landmark, MapPin, Phone, QrCode, Send } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/ui";
import { ORG, pageHead } from "@/lib/org";
import { ContactCta, Faq, FollowSection, PageHero, SectionHead, btn, field, label, validMobile } from "@/components/site/ui";
import { AutoImageSlider } from "@/components/site/AutoImageSlider";

export const Route = createFileRoute("/contact")({
  head: () => pageHead(
    "Contact Us & Donation Information | Human Rights Suraksha Sangh–Bharat",
    "Contact Human Rights Suraksha Sangh–Bharat on 7488043880 or WhatsApp. Find helpline numbers, a contact form and donation information.",
  ),
  component: Contact,
});

function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const g = (k: string) => String(f.get(k) ?? "").trim();
    const err: Record<string, string> = {};
    if (g("name").length < 2) err["name"] = "Please enter your name.";
    if (!validMobile(g("mobile"))) err["mobile"] = "Enter a valid 10-digit mobile number.";
    if (g("email") && !/^\S+@\S+\.\S+$/.test(g("email"))) err["email"] = "Enter a valid email.";
    if (g("subject").length < 3) err["subject"] = "Please add a subject.";
    if (g("message").length < 10) err["message"] = "Please write a short message.";
    if (!f.get("consent")) err["consent"] = "Please give consent to continue.";
    setErrors(err);
    if (Object.keys(err).length) return;
    setDone(true);
  }
  const Err = ({ k }: { k: string }) => (errors[k] ? <p id={`c-${k}-err`} className="mt-1 text-xs font-semibold text-destructive">{errors[k]}</p> : null);
  const a = (k: string) => ({ id: `c-${k}`, name: k, "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `c-${k}-err` : undefined });
  return (
    <form noValidate onSubmit={onSubmit} className="rounded-2xl border bg-card p-6 shadow-card sm:p-8">
      <div className="mb-5 flex gap-3 rounded-lg border border-dashed border-primary/50 bg-primary/5 p-4 text-sm">
        <AlertTriangle className="h-5 w-5 shrink-0 text-primary" aria-hidden />
        <p><strong>Demo mode:</strong> messages are not delivered yet. For a quick response, call or WhatsApp us.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="c-name" className={label}>Name *</label><input {...a("name")} className={field} autoComplete="name" /><Err k="name" /></div>
        <div><label htmlFor="c-mobile" className={label}>Mobile Number *</label><input {...a("mobile")} type="tel" inputMode="numeric" maxLength={13} className={field} /><Err k="mobile" /></div>
        <div><label htmlFor="c-email" className={label}>Email (optional)</label><input {...a("email")} type="email" className={field} /><Err k="email" /></div>
        <div><label htmlFor="c-subject" className={label}>Subject *</label><input {...a("subject")} className={field} /><Err k="subject" /></div>
        <div className="sm:col-span-2"><label htmlFor="c-message" className={label}>Message *</label><textarea {...a("message")} rows={4} className={field} /><Err k="message" /></div>
        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 text-sm"><input {...a("consent")} type="checkbox" className="mt-1 h-5 w-5 accent-[var(--royal)]" /><span>I agree that the organisation may use these details to respond to me. *</span></label>
          <Err k="consent" />
        </div>
      </div>
      {done && (
        <p role="status" className="mt-5 flex gap-2 rounded-lg bg-muted p-3 text-sm text-navy">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-whatsapp" aria-hidden />
          Your details look good, but this form is in demo mode and the message was not sent. Please use WhatsApp or call {ORG.primaryPhone}.
        </p>
      )}
      <button type="submit" className={`${btn.red} mt-6`}><Send className="h-4 w-4" aria-hidden />Check message</button>
    </form>
  );
}

function Contact() {
  return (
    <>
      <PageHero title={`Contact ${ORG.name}`} hindi="हमसे संपर्क करें" crumb="Contact & Donate" image={photos.contactHero} intro="We are here to listen. Call, WhatsApp or write to us.">
        <a href={`tel:${ORG.primaryPhone}`} className={btn.gold}><Phone className="h-4 w-4" aria-hidden />Call {ORG.primaryPhone}</a>
        <a href={ORG.waMessage} target="_blank" rel="noopener noreferrer" className={btn.wa}><WhatsAppIcon className="h-4 w-4" />WhatsApp</a>
      </PageHero>

      <AutoImageSlider slider={4} label="Certificates and recognition" title="Certificates & Recognition" description="Add approved certificates, registrations and organisational recognition images to the certificates slider folder." />

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHead eyebrow="Helpline" title="Contact Information" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {ORG.phones.map((p, i) => (
              <div key={p} className={`rounded-xl bg-card p-6 shadow-card ${i === 0 ? "border-2 border-gold" : "border"}`}>
                <p className="text-xs font-bold uppercase tracking-wider text-primary">{i === 0 ? "Primary Helpline" : "Additional Contact"}</p>
                <p className="mt-2 font-mono text-2xl font-bold text-navy">{p}</p>
                <div className="mt-4 flex gap-2">
                  <a href={`tel:${p}`} aria-label={`Call ${p}`} className="inline-flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-lg bg-navy px-3 text-sm font-semibold text-on-dark"><Phone className="h-4 w-4" aria-hidden />Call</a>
                  <a href={`https://wa.me/91${p}`} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp ${p}`} className="inline-flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-lg bg-whatsapp px-3 text-sm font-semibold text-on-dark"><WhatsAppIcon className="h-4 w-4" />Chat</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHead center={false} eyebrow="Write to Us" title="Send a Message" />
            <ContactForm />
          </div>
          <div className="flex flex-col justify-center rounded-2xl bg-whatsapp p-8 text-on-dark shadow-card">
            <WhatsAppIcon className="h-12 w-12" />
            <h2 className="mt-4 text-2xl font-bold">Chat with us on WhatsApp</h2>
            <p className="mt-2 opacity-90">Tap below to start a chat with a ready message:</p>
            <p className="mt-3 rounded-lg bg-on-dark/15 p-3 text-sm italic">"Namaste, mujhe Human Rights Suraksha Sangh–Bharat ke baare mein jaankari chahiye."</p>
            <a href={ORG.waMessage} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-on-dark px-5 font-bold text-navy">Start WhatsApp Chat</a>
          </div>
        </div>
      </section>

      <AutoImageSlider slider={2} label="Contact and support gallery" />

      <section className="bg-gradient-navy py-16 sm:py-24">
        <div className="container-x">
          <SectionHead light eyebrow="Support Our Work" title="Donation Information" intro="Contributions help fund awareness programs and community welfare activities." />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border-2 border-gold/60 bg-navy-2/60 shadow-card">
              <img src={photos.donation} alt="Community support and charitable assistance" loading="lazy" className="h-44 w-full object-cover sm:h-52" />
              <div className="p-6 sm:p-8"><HandHeart className="h-10 w-10 text-gold" aria-hidden />
              <h3 className="mt-3 font-sans text-xl font-bold text-on-dark">Why donate?</h3>
              <ul className="mt-3 space-y-2 text-on-dark-muted">
                <li>• Human rights awareness campaigns</li>
                <li>• Community outreach and welfare activities</li>
                <li>• Public meetings and workshops</li>
              </ul>
              <p className="mt-5 rounded-lg border border-gold/40 bg-navy/50 p-4 text-sm text-gold">
                Official donation details will be published after verification. Please contact the organization for current donation information.
              </p>
              <p className="mt-3 text-xs text-on-dark-muted">Receipt and any tax-related information are subject to the organisation's actual process.</p>
              <a href={`tel:${ORG.primaryPhone}`} className={`${btn.gold} mt-5`}><Phone className="h-4 w-4" aria-hidden />Donation enquiry: {ORG.primaryPhone}</a></div>
            </div>
            <div className="grid gap-4 sm:grid-cols-[auto_1fr]">
              <div className="grid h-44 w-44 place-items-center justify-self-center rounded-xl border-2 border-dashed border-gold/50 bg-navy/40 text-center text-on-dark-muted">
                <div><QrCode className="mx-auto h-12 w-12" aria-hidden /><p className="mt-2 text-xs">Official QR<br />awaiting verification</p></div>
              </div>
              <dl className="space-y-2 rounded-xl border border-gold/25 bg-navy/40 p-5 text-sm">
                {["Account holder name", "Bank name", "Account number", "IFSC", "UPI ID"].map((k) => (
                  <div key={k} className="flex flex-wrap justify-between gap-2 border-b border-on-dark/10 pb-2 last:border-0">
                    <dt className="text-on-dark-muted">{k}</dt><dd className="font-semibold text-gold">Awaiting verified details</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <AutoImageSlider slider={3} label="Community support gallery" />

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHead eyebrow="FAQs" title="Frequently Asked Questions" />
          <Faq items={[
            { q: "What is the best way to contact the organisation?", a: `Call our primary helpline ${ORG.primaryPhone} or message us on WhatsApp for the quickest response.` },
            { q: "How do I enquire about membership?", a: "Visit the Membership page or call/WhatsApp us. Our team will explain the process." },
            { q: "How can I donate?", a: "Verified donation details are not yet published. Please call the helpline for current information, and never pay anyone without confirming through official numbers." },
            { q: "How can I learn about upcoming events?", a: "Check the Programs page and follow our WhatsApp Channel and social media for announcements." },
          ]} />
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-card p-8 shadow-card">
            <Building2 className="h-9 w-9 text-primary" aria-hidden />
            <h2 className="mt-3 font-sans text-xl font-bold text-navy">Office Address</h2>
            <div className="mt-3 space-y-3 text-muted-foreground">{ORG.addresses.map((a) => <p key={a.label}><strong className="block text-navy">{a.label}</strong><span className="flex gap-2"><MapPin className="mt-1 h-5 w-5 shrink-0" aria-hidden />{a.value}</span></p>)}</div>
          </div>
          <div className="rounded-2xl bg-card p-8 shadow-card">
            <Landmark className="h-9 w-9 text-primary" aria-hidden />
            <h2 className="mt-3 font-sans text-xl font-bold text-navy">Command Office</h2>
            <p className="mt-2 text-muted-foreground">{ORG.addresses[1]?.value}</p>
            <p className="mt-3 text-muted-foreground">Please call before visiting so our team can guide you. <Link to="/about" className="font-semibold text-primary hover:underline">Learn about us</Link>.</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20"><div className="container-x"><SectionHead eyebrow="Before You Visit" title="A Few Helpful Notes"/><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{[{t:"Call Ahead",d:"Please call the official helpline before visiting an office so the team can guide you.",img:photos.guidance},{t:"Protect Your Information",d:"Share personal documents only when necessary and through a channel you trust.",img:photos.cyberSafety},{t:"Verify Donation Details",d:"Confirm all donation or bank details directly with the organisation before making any payment.",img:photos.donation}].map(x=><article key={x.t} className="card-lift group overflow-hidden rounded-xl border bg-card shadow-card"><div className="overflow-hidden"><img src={x.img} alt={x.t} loading="lazy" className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"/></div><div className="p-6"><h3 className="font-sans font-bold text-navy">{x.t}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.d}</p></div></article>)}</div></div></section>
      <section className="bg-muted py-16"><div className="container-x"><SectionHead eyebrow="Quick Contact" title="Choose How to Reach Us"/><div className="grid gap-5 sm:grid-cols-2">{ORG.phones.map((p,i)=><article key={p} className="card-lift overflow-hidden rounded-xl border bg-card shadow-card"><img src={i===0?photos.guidance:photos.communitySupport} alt="Contact and community support" loading="lazy" className="h-32 w-full object-cover"/><div className="p-6"><p className="text-xs font-bold uppercase tracking-widest text-primary">{i===0?"Primary Helpline":"Additional Helpline"}</p><p className="mt-2 font-mono text-2xl font-bold text-navy">{p}</p><div className="mt-4 flex flex-wrap gap-3"><a href={`tel:${p}`} className={btn.red}>Call now</a><a href={`https://wa.me/91${p}`} target="_blank" rel="noopener noreferrer" className={btn.wa}>WhatsApp</a></div></div></article>)}</div></div></section>
      <section className="bg-gradient-red py-14"><div className="container-x flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"><div><h2 className="text-2xl font-bold text-on-dark">Your voice matters</h2><p className="mt-2 text-on-dark-muted">Reach out with questions about human rights awareness or community programs.</p></div><Link to="/programs" className={btn.gold}>Explore Programs</Link></div></section>
      <AutoImageSlider slider={5} label="Join Our Mission gallery" title="Join Our Mission" description="Become part of our effort to promote human rights awareness, dignity and community welfare." />

      <FollowSection />
      <ContactCta />
    </>
  );
}
