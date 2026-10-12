import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CalendarCheck, CheckCircle2, ClipboardList, FileCheck, Megaphone, Network, Phone, Send, User, Users, AlertTriangle } from "lucide-react";
import logo from "@/assets/logo.png";
import { photos } from "@/lib/photoUrls";
import { WhatsAppIcon } from "@/components/site/ui";
import { INDIAN_STATES, ORG, pageHead } from "@/lib/org";
import { Faq, PageHero, Reveal, SectionHead, btn, field, label, validMobile } from "@/components/site/ui";
import { AutoImageSlider } from "@/components/site/AutoImageSlider";

export const Route = createFileRoute("/membership")({
  head: () => pageHead(
    "Membership & Registration | Human Rights Suraksha Sangh–Bharat",
    "Become a member of Human Rights Suraksha Sangh–Bharat. Learn about participation opportunities, the registration process and apply online.",
  ),
  component: Membership,
});

type Errors = Partial<Record<string, string>>;

function ApplicationForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const f = new FormData(e.currentTarget);
    const g = (k: string) => String(f.get(k) ?? "").trim();
    const err: Errors = {};
    if (g("name").length < 3) err["name"] = "Please enter your full name.";
    if (!validMobile(g("mobile"))) err["mobile"] = "Enter a valid 10-digit Indian mobile number.";
    if (g("whatsapp") && !validMobile(g("whatsapp"))) err["whatsapp"] = "Enter a valid 10-digit WhatsApp number.";
    if (g("email") && !/^\S+@\S+\.\S+$/.test(g("email"))) err["email"] = "Enter a valid email address.";
    if (!g("state")) err["state"] = "Please select your state.";
    if (g("district").length < 2) err["district"] = "Please enter your district.";
    if (g("address").length < 10) err["address"] = "Please enter your full address.";
    if (g("reason").length < 10) err["reason"] = "Please tell us briefly why you want to join.";
    if (!f.get("consent")) err["consent"] = "Please give consent to continue.";
    setErrors(err);
    if (Object.keys(err).length) {
      document.getElementById(`m-${Object.keys(err)[0]}`)?.focus();
      return;
    }
    setStatus("sending");
    setTimeout(() => setStatus("done"), 600);
  }

  if (status === "done")
    return (
      <div role="status" className="rounded-2xl border-2 border-gold bg-card p-8 text-center shadow-card">
        <CheckCircle2 className="mx-auto h-12 w-12 text-whatsapp" aria-hidden />
        <h3 className="mt-3 font-sans text-xl font-bold text-navy">Form checked successfully (demo mode)</h3>
        <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
          Online submission is not yet connected, so your application has <strong>not</strong> been sent. Please send your details on WhatsApp or call the helpline to complete your application.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a href={ORG.whatsapp} target="_blank" rel="noopener noreferrer" className={btn.wa}><WhatsAppIcon className="h-4 w-4" />Send on WhatsApp</a>
          <button type="button" className={btn.outline} onClick={() => setStatus("idle")}>Back to form</button>
        </div>
      </div>
    );

  const Err = ({ k }: { k: string }) => (errors[k] ? <p id={`m-${k}-err`} className="mt-1 text-xs font-semibold text-destructive">{errors[k]}</p> : null);
  const a = (k: string) => ({ id: `m-${k}`, name: k, "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `m-${k}-err` : undefined });

  return (
    <form noValidate onSubmit={onSubmit} className="rounded-2xl border bg-card p-6 shadow-card sm:p-8">
      <div className="mb-6 flex gap-3 rounded-lg border border-dashed border-primary/50 bg-primary/5 p-4 text-sm text-foreground">
        <AlertTriangle className="h-5 w-5 shrink-0 text-primary" aria-hidden />
        <p><strong>Demo mode:</strong> this form checks your details but does not send them yet. Contact us on WhatsApp or phone to apply.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="m-name" className={label}>Full Name *</label><input {...a("name")} className={field} autoComplete="name" /><Err k="name" /></div>
        <div><label htmlFor="m-guardian" className={label}>Father's / Husband's Name</label><input {...a("guardian")} className={field} /></div>
        <div><label htmlFor="m-dob" className={label}>Date of Birth</label><input {...a("dob")} type="date" className={field} /></div>
        <div><label htmlFor="m-occupation" className={label}>Occupation (optional)</label><input {...a("occupation")} className={field} /></div>
        <div><label htmlFor="m-mobile" className={label}>Mobile Number *</label><input {...a("mobile")} type="tel" inputMode="numeric" maxLength={13} className={field} autoComplete="tel" /><Err k="mobile" /></div>
        <div><label htmlFor="m-whatsapp" className={label}>WhatsApp Number</label><input {...a("whatsapp")} type="tel" inputMode="numeric" maxLength={13} className={field} /><Err k="whatsapp" /></div>
        <div className="sm:col-span-2"><label htmlFor="m-email" className={label}>Email Address (optional)</label><input {...a("email")} type="email" className={field} autoComplete="email" /><Err k="email" /></div>
        <div>
          <label htmlFor="m-state" className={label}>State *</label>
          <select {...a("state")} className={field} defaultValue=""><option value="" disabled>Select state</option>{INDIAN_STATES.map((s) => <option key={s}>{s}</option>)}</select>
          <Err k="state" />
        </div>
        <div><label htmlFor="m-district" className={label}>District *</label><input {...a("district")} className={field} /><Err k="district" /></div>
        <div className="sm:col-span-2"><label htmlFor="m-address" className={label}>Full Address *</label><textarea {...a("address")} rows={2} className={field} autoComplete="street-address" /><Err k="address" /></div>
        <div className="sm:col-span-2">
          <label htmlFor="m-category" className={label}>Membership Category</label>
          <select {...a("category")} className={field}><option>General Membership</option></select>
        </div>
        <div className="sm:col-span-2"><label htmlFor="m-reason" className={label}>Why would you like to join? *</label><textarea {...a("reason")} rows={3} className={field} /><Err k="reason" /></div>
        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 text-sm">
            <input {...a("consent")} type="checkbox" className="mt-1 h-5 w-5 accent-[var(--royal)]" />
            <span>I agree that the organisation may use the information I provide to process my membership application. *</span>
          </label>
          <Err k="consent" />
        </div>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">Identity documents and photographs are not collected online. If required, the organisation will tell you how to share them securely.</p>
      <button type="submit" disabled={status === "sending"} className={`${btn.red} mt-6 w-full sm:w-auto`}>
        <Send className="h-4 w-4" aria-hidden />{status === "sending" ? "Checking…" : "Check & Continue"}
      </button>
    </form>
  );
}

function Membership() {
  return (
    <>
      <PageHero title="Become a Member" hindi="संघ से जुड़ें — मानव अधिकारों की रक्षा में भागीदार बनें" crumb="Membership" image={photos.membershipHero} intro="Join Human Rights Suraksha Sangh–Bharat and take part in awareness and community programs.">
        <a href="#apply" className="inline-flex min-h-11 items-center rounded-lg bg-gold px-5 py-2.5 text-sm font-bold text-navy">Apply Now</a>
      </PageHero>

      <AutoImageSlider slider={4} label="Certificates and recognition" title="Certificates & Recognition" description="Add approved certificates, registrations and organisational recognition images to the certificates slider folder." />

      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHead center={false} eyebrow="Why Join Us?" title="Be part of meaningful change" />
            <p className="leading-relaxed text-muted-foreground">
              As a member, you can participate in awareness campaigns, community programs and organisational activities that promote human dignity and equality. Members help carry the message of rights and responsibilities to their own communities.
            </p>
          </Reveal>
          <Reveal className="grid gap-4 sm:grid-cols-2">
            {[{ I: Megaphone, t: "Awareness campaigns", img: photos.awarenessMeeting }, { I: Users, t: "Community programs", img: photos.communitySupport }, { I: Network, t: "Volunteer network", img: photos.teamwork }, { I: CalendarCheck, t: "Organisational events", img: photos.outreach }].map(({ I, t, img }) => (
              <div key={t} className="card-lift group overflow-hidden rounded-xl bg-card shadow-card"><img src={img} alt={t} loading="lazy" className="h-28 w-full object-cover transition-transform duration-500 group-hover:scale-105"/><div className="flex items-center gap-3 p-5"><I className="h-7 w-7 shrink-0 text-primary" aria-hidden /><span className="font-semibold text-navy">{t}</span></div></div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-gradient-navy py-16 sm:py-20">
        <div className="container-x">
          <SectionHead light eyebrow="Benefits" title="Participation Opportunities" intro="General opportunities open to members. Any specific benefits will be confirmed by the organisation." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[{t:"Join awareness drives and public meetings",img:photos.awarenessMeeting},{t:"Volunteer in welfare activities",img:photos.donation},{t:"Learn about human rights topics",img:photos.rights},{t:"Connect with members across India",img:photos.teamwork}].map((b) => (
              <div key={b.t} className="card-lift group overflow-hidden rounded-xl border border-gold/25 bg-navy-2/60"><img src={b.img} alt={b.t} loading="lazy" className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-105"/><div className="p-6"><CheckCircle2 className="h-7 w-7 text-gold" aria-hidden /><p className="mt-3 font-semibold text-on-dark">{b.t}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <AutoImageSlider slider={2} label="Member participation gallery" />

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHead eyebrow="Categories" title="Membership Category" />
          <div className="mx-auto max-w-md rounded-2xl border-2 border-gold bg-card p-8 text-center shadow-card">
            <User className="mx-auto h-10 w-10 text-primary" aria-hidden />
            <h3 className="mt-3 font-sans text-xl font-bold text-navy">General Membership</h3>
            <p className="mt-2 text-sm text-muted-foreground">Open to individuals who support the organisation's objectives. Eligibility, fees (if any) and terms will be communicated by the organisation.</p>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 sm:py-20">
        <div className="container-x">
          <SectionHead eyebrow="How It Works" title="Registration Process" />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[{ I: ClipboardList, t: "Complete the application form" }, { I: FileCheck, t: "Review your information" }, { I: Send, t: "Submit the application" }, { I: CalendarCheck, t: "Wait for confirmation" }, { I: CheckCircle2, t: "Complete any further steps" }].map(({ I, t }, i) => (
              <li key={t} className="rounded-xl bg-card p-6 text-center shadow-card">
                <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-gradient-red font-bold text-primary-foreground">{i + 1}</span>
                <I className="mx-auto mt-3 h-7 w-7 text-navy-2" aria-hidden />
                <p className="mt-2 text-sm font-semibold text-navy">{t}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="apply" className="scroll-mt-28 py-16 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHead center={false} eyebrow="Apply Online" title="Membership Application Form" />
            <ApplicationForm />
          </div>
          <div>
            <SectionHead center={false} eyebrow="Preview" title="Sample ID Card" />
            <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border-2 border-gold bg-card shadow-card">
              <div className="flex items-center gap-3 bg-gradient-navy p-4">
                <img src={logo} alt="" width={64} height={64} loading="lazy" className="h-14 w-14 rounded-full border-2 border-gold bg-white object-contain p-0.5" />
                <div className="min-w-0"><p className="truncate text-sm font-bold text-on-dark">{ORG.name}</p><p lang="hi" className="truncate font-hindi text-xs text-gold">{ORG.hindi}</p></div>
              </div>
              <div className="flex gap-4 p-5">
                <div className="grid h-24 w-20 shrink-0 place-items-center rounded-lg border-2 border-dashed bg-muted"><User className="h-8 w-8 text-muted-foreground" aria-hidden /></div>
                <dl className="space-y-1.5 text-sm">
                  <div><dt className="text-xs text-muted-foreground">Name</dt><dd className="font-semibold text-navy">Member Name</dd></div>
                  <div><dt className="text-xs text-muted-foreground">Member ID</dt><dd className="font-mono text-navy">XXXX-XXXX</dd></div>
                  <div><dt className="text-xs text-muted-foreground">Valid till</dt><dd className="text-navy">DD/MM/YYYY</dd></div>
                </dl>
              </div>
              <p className="bg-gradient-red py-2 text-center text-xs font-bold uppercase tracking-widest text-primary-foreground">Sample ID Card Preview</p>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">Official ID cards are issued only by the organisation after approval.</p>
          </div>
        </div>
      </section>

      <AutoImageSlider slider={3} label="Membership journey gallery" />

      <section className="bg-muted py-16 sm:py-20">
        <div className="container-x">
          <SectionHead eyebrow="FAQs" title="Membership Questions" />
          <Faq items={[
            { q: "How do I apply for membership?", a: "Fill in the form above and then share your details with us on WhatsApp or by phone. The organisation will guide you through the remaining steps." },
            { q: "How will I know my application is approved?", a: "The organisation will contact you on the mobile or WhatsApp number you provide once your application has been reviewed." },
            { q: "Who can become a member?", a: "Individuals who support the organisation's objectives may apply. Exact eligibility criteria will be confirmed by the organisation." },
            { q: "Is there a membership fee?", a: "Any fee or contribution will be communicated directly by the organisation. Please do not pay anyone without confirming through the official helpline." },
            { q: "Whom do I contact for help?", a: `Call ${ORG.primaryPhone} or message us on WhatsApp for membership support.` },
          ]} />
        </div>
      </section>

      <section className="py-16 sm:py-20"><div className="container-x"><SectionHead eyebrow="Getting Started" title="Your Membership Journey"/><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[{n:"01",t:"Complete the Form",d:"Provide accurate contact and location details."},{n:"02",t:"Share Your Interest",d:"Use the official phone or WhatsApp contact for follow-up."},{n:"03",t:"Application Review",d:"The organisation will review the information you submit."},{n:"04",t:"Await Confirmation",d:"Membership is not confirmed until the organisation approves it."}].map(x=><article key={x.n} className="card-lift rounded-xl border bg-card p-6 shadow-card"><span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-sm font-bold text-gold">{x.n}</span><h3 className="mt-4 font-sans font-bold text-navy">{x.t}</h3><p className="mt-2 text-sm text-muted-foreground">{x.d}</p></article>)}</div></div></section>
      <section className="bg-muted py-16 sm:py-20"><div className="container-x"><SectionHead eyebrow="Member Values" title="Participate with Purpose"/><div className="grid gap-5 md:grid-cols-3">{[{t:"Respect Everyone",d:"Treat all community members fairly and respectfully."},{t:"Protect Privacy",d:"Handle personal information with care and do not share it without permission."},{t:"Share Verified Information",d:"Avoid rumours and use reliable sources for public awareness."}].map(x=><article key={x.t} className="card-lift rounded-xl bg-card p-6 shadow-card"><h3 className="font-sans font-bold text-navy">{x.t}</h3><p className="mt-2 text-sm text-muted-foreground">{x.d}</p></article>)}</div></div></section>
      <section className="bg-gradient-navy py-14"><div className="container-x text-center"><h2 className="text-2xl font-bold text-on-dark">Need help with your application?</h2><p className="mx-auto mt-2 max-w-xl text-on-dark-muted">Our official team can explain the next steps and answer membership questions.</p><a href={ORG.waMessage} target="_blank" rel="noopener noreferrer" className={`${btn.gold} mt-5`}>Ask on WhatsApp</a></div></section>

      <section className="bg-gradient-red py-14">
        <div className="container-x text-center">
          <h2 className="text-2xl font-bold text-on-dark sm:text-3xl">Questions about membership?</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={`tel:${ORG.primaryPhone}`} className={btn.gold}><Phone className="h-4 w-4" aria-hidden />Call {ORG.primaryPhone}</a>
            <a href={ORG.whatsapp2} target="_blank" rel="noopener noreferrer" className={btn.wa}><WhatsAppIcon className="h-4 w-4" />WhatsApp 9507679985</a>
          </div>
        </div>
      </section>
      <AutoImageSlider slider={5} label="Join Our Mission gallery" title="Join Our Mission" description="Become part of our effort to promote human rights awareness, dignity and community welfare." />

    </>
  );
}
