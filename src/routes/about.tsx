import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, Handshake, HeartHandshake, Scale, Search, ShieldCheck, Target, Users, UserCheck, Lightbulb, Compass, RefreshCw } from "lucide-react";
import community from "@/assets/community.jpg";
import { ORG, pageHead } from "@/lib/org";
import { photos } from "@/lib/photoUrls";
import { IdentifiersPanel, PageHero, Reveal, SectionHead, btn } from "@/components/site/ui";
import { AutoImageSlider } from "@/components/site/AutoImageSlider";

export const Route = createFileRoute("/about")({
  head: () => pageHead(
    "About Us | Human Rights Suraksha Sangh–Bharat",
    "Learn about Human Rights Suraksha Sangh–Bharat — our mission, vision, core values, objectives and working approach for human rights awareness.",
  ),
  component: About,
});

const values = [
  { Icon: Scale, t: "Equality", d: "Every person deserves equal respect and opportunity." },
  { Icon: ShieldCheck, t: "Dignity", d: "Human dignity is at the heart of everything we do." },
  { Icon: Eye, t: "Transparency", d: "We aim to be open and honest in our work." },
  { Icon: HeartHandshake, t: "Social Responsibility", d: "We care for the wellbeing of society." },
  { Icon: Handshake, t: "Respect", d: "We listen and treat everyone with courtesy." },
  { Icon: Users, t: "Community Participation", d: "Change happens when communities act together." },
];
const objectives = [
  "Spread awareness of human rights and constitutional values.",
  "Encourage respect for dignity and equality in society.",
  "Support social welfare activities for those in need.",
  "Organise public awareness meetings, campaigns and workshops.",
  "Share general information on where people can seek appropriate guidance.",
  "Build a network of committed members and volunteers.",
];
const steps = [
  { Icon: Lightbulb, t: "Awareness" },
  { Icon: Users, t: "Community Participation" },
  { Icon: Search, t: "Identification of Needs" },
  { Icon: Compass, t: "Appropriate Guidance" },
  { Icon: RefreshCw, t: "Follow-up" },
];

function About() {
  return (
    <>
      <PageHero title={`About ${ORG.name}`} hindi={ORG.hindi} crumb="About Us" image={photos.aboutHero} />

      <AutoImageSlider slider={4} label="Certificates and recognition" title="Certificates & Recognition" description="Add approved certificates, registrations and organisational recognition images to the certificates slider folder." />

      <section className="py-16 sm:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHead center={false} eyebrow="Who We Are" title="A voice for dignity and awareness" />
            <p className="leading-relaxed text-muted-foreground">
              {ORG.name} is a social organisation dedicated to human rights awareness and community welfare. We believe that informed citizens build a fairer society, and we work at the grassroots to help people understand their rights and responsibilities.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Through awareness campaigns, community meetings and welfare initiatives, we bring people together to promote equality, respect and social responsibility.
            </p>
          </Reveal>
          <Reveal>
            <img src={community} alt="Illustrative image: villagers attending an awareness session" width={1200} height={912} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card" />
          </Reveal>
        </div>
      </section>

      <section className="bg-gradient-red py-16">
        <div className="container-x mx-auto max-w-4xl text-center">
          <Target className="mx-auto h-10 w-10 text-gold" aria-hidden />
          <h2 className="mt-3 text-sm font-bold uppercase tracking-[0.25em] text-gold">Our Mission</h2>
          <p className="mt-4 font-display text-xl leading-relaxed text-on-dark sm:text-3xl">
            To promote awareness of human rights, uphold human dignity and equality, and support communities through social welfare and public participation.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid items-center gap-8 rounded-2xl border-2 border-gold/50 bg-card p-8 shadow-card md:grid-cols-[auto_1fr] sm:p-12">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-navy text-gold"><Eye className="h-10 w-10" aria-hidden /></span>
          <div>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">Our Vision</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We envision a society founded on dignity, equality, awareness and justice — where every individual knows their rights, is treated with respect, and has the opportunity to live a life of freedom and fairness.
            </p>
          </div>
        </div>
      </section>

      <AutoImageSlider slider={2} label="Mission and values gallery" />

      <section className="bg-gradient-navy py-16 sm:py-24">
        <div className="container-x">
          <SectionHead light eyebrow="What Guides Us" title="Core Values" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ Icon, t, d }, i) => (
              <div key={t} className="card-lift overflow-hidden rounded-xl border border-gold/25 bg-navy-2/60">
                <img src={[photos.rights, photos.communitySupport, photos.guidance, photos.outreach, photos.education, photos.legalAid][i]} alt={t} loading="lazy" className="h-36 w-full object-cover" />
                <div className="p-6"><Icon className="h-8 w-8 text-gold" aria-hidden />
                <h3 className="mt-3 font-sans text-lg font-bold text-on-dark">{t}</h3>
                <p className="mt-1 text-sm text-on-dark-muted">{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <SectionHead eyebrow="Goals" title="Our Objectives" />
          <ol className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            {objectives.map((o, i) => (
              <li key={o} className="card-lift overflow-hidden rounded-xl bg-card shadow-card sm:grid sm:grid-cols-[140px_1fr]">
                <img src={[photos.rights, photos.womenSafety, photos.childProtection, photos.communitySupport, photos.legalAid, photos.outreach][i % 6]} alt={o} loading="lazy" className="h-36 w-full object-cover sm:h-full" />
                <div className="flex items-start gap-4 p-5"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-red font-bold text-primary-foreground">{i + 1}</span><p className="pt-2 text-foreground">{o}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <AutoImageSlider slider={3} label="Objectives and community work gallery" />

      <section className="bg-muted py-16 sm:py-24">
        <div className="container-x">
          <SectionHead eyebrow="How We Work" title="Our Working Approach" intro="This is the approach we intend to follow. Outcomes depend on each situation and are not guaranteed." />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map(({ Icon, t }, i) => (
              <li key={t} className="relative rounded-xl border-b-4 border-gold bg-card p-6 text-center shadow-card">
                <span className="text-xs font-bold text-primary">Step {i + 1}</span>
                <Icon className="mx-auto mt-2 h-9 w-9 text-navy-2" aria-hidden />
                <h3 className="mt-3 font-sans font-bold text-navy">{t}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-x"><IdentifiersPanel /></div>
      </section>

      <section className="py-16 sm:py-20"><div className="container-x"><SectionHead eyebrow="Our Principles" title="What People Can Expect" intro="We aim to approach community work with respect, care and responsible communication."/><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[{t:"Respectful Listening",d:"Treat each person and concern with dignity.",img:photos.communitySupport},{t:"Clear Communication",d:"Explain information in accessible, straightforward language.",img:photos.education},{t:"Responsible Guidance",d:"Encourage people to use appropriate official channels.",img:photos.legalAid},{t:"Community Partnership",d:"Work with citizens and volunteers toward positive change.",img:photos.outreach}].map(x=><article key={x.t} className="card-lift group overflow-hidden rounded-xl border bg-card shadow-card"><div className="overflow-hidden"><img src={x.img} alt={x.t} loading="lazy" className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"/></div><div className="p-6"><h3 className="font-sans font-bold text-navy">{x.t}</h3><p className="mt-2 text-sm text-muted-foreground">{x.d}</p></div></article>)}</div></div></section>
      <section className="bg-muted py-16 sm:py-20"><div className="container-x"><SectionHead eyebrow="Our Commitment" title="Awareness to Action"/><div className="grid gap-5 md:grid-cols-3">{[{n:"01",t:"Understand",d:"Build awareness of rights, responsibilities and available resources."},{n:"02",t:"Connect",d:"Help community members identify suitable support channels."},{n:"03",t:"Participate",d:"Encourage constructive, peaceful and informed community action."}].map(x=><article key={x.n} className="card-lift rounded-2xl bg-card p-7 shadow-card"><span className="text-sm font-black text-primary">{x.n}</span><h3 className="mt-2 text-xl font-bold text-navy">{x.t}</h3><p className="mt-2 text-sm text-muted-foreground">{x.d}</p></article>)}</div></div></section>
      <section className="bg-gradient-red py-14"><div className="container-x flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div><h2 className="text-2xl font-bold text-on-dark">Want to work with us?</h2><p className="mt-2 text-on-dark-muted">Learn how you can participate in awareness and community initiatives.</p></div><Link to="/membership" className={btn.gold}>Explore Membership</Link></div></section>

      <section className="bg-gradient-navy py-16">
        <div className="container-x text-center">
          <UserCheck className="mx-auto h-10 w-10 text-gold" aria-hidden />
          <h2 className="mt-3 text-3xl font-bold text-on-dark">Join Our Mission</h2>
          <p className="mx-auto mt-3 max-w-xl text-on-dark-muted">Become a member or reach out to learn how you can contribute.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/membership" className={btn.gold}>Become a Member</Link>
            <Link to="/contact" className={btn.outlineLight}>Contact Us</Link>
          </div>
        </div>
      </section>
      <AutoImageSlider slider={5} label="Join Our Mission gallery" title="Join Our Mission" description="Become part of our effort to promote human rights awareness, dignity and community welfare." />

    </>
  );
}
