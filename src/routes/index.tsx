import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, CalendarDays, CheckCircle2, HandHeart, Megaphone, Scale, School, Sprout, Users, UsersRound, Landmark, HeartHandshake, Eye, Target } from "lucide-react";
import hero from "@/assets/hero.jpg";
import community from "@/assets/community.jpg";
import logo from "@/assets/logo.png";
import trafficImg from "@/assets/traffic-awareness.jpg";
import womenImg from "@/assets/women-safety.jpg";
import cyberImg from "@/assets/cyber-safety.jpg";
import childImg from "@/assets/child-helpline.jpg";
import orgBanner from "@/assets/org-banner.jpg";
import { photos } from "@/lib/photoUrls";
import { ORG, pageHead } from "@/lib/org";
import { ContactCta, FollowSection, IdentifiersPanel, Reveal, SectionHead, btn } from "@/components/site/ui";
import { AutoImageSlider } from "@/components/site/AutoImageSlider";

export const Route = createFileRoute("/")({
  head: () => pageHead(
    "Human Rights Suraksha Sangh–Bharat | मानव अधिकार सुरक्षा संघ–भारत",
    "Human Rights Suraksha Sangh–Bharat works for human rights awareness, dignity, equality and social welfare. Join as a member or contact our helpline 7488043880.",
  ),
  component: Home,
});

const objectives = [
  { img: trafficImg, t: "Traffic Awareness & Public Safety", d: "Promoting road safety, traffic-rule awareness and responsible behaviour on the road." },
  { img: womenImg, t: "Women Safety & Rights", d: "Spreading awareness about women's safety, dignity, equal rights and support resources." },
  { img: cyberImg, t: "Cyber Crime Prevention", d: "Encouraging safe digital habits and awareness of OTP, fraud links and online scams." },
  { img: childImg, t: "Child Protection & Helpline 1098", d: "Sharing awareness about child safety, protection and the child helpline 1098." },
];

const programs = [
  { Icon: Megaphone, t: "Human Rights Awareness Campaigns", d: "Campaigns that help people understand their rights and responsibilities." },
  { Icon: Users, t: "Community Outreach", d: "Reaching villages and neighbourhoods to listen and connect." },
  { Icon: School, t: "Educational Awareness Programs", d: "Sessions for students and youth on rights and civic values." },
  { Icon: HeartHandshake, t: "Social Welfare Initiatives", d: "Efforts to support people facing hardship." },
  { Icon: CalendarDays, t: "Public Meetings & Workshops", d: "Open forums to discuss community issues together." },
  { Icon: Sprout, t: "Community Development", d: "Activities that strengthen local participation and wellbeing." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy">
        <img src={hero} alt="Community members gathered for a village awareness meeting" width={1600} height={912} className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]" />
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="container-x grid min-h-[78vh] items-center py-16 sm:py-24">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="mb-5 flex items-center gap-3">
              <img src={logo} alt="" width={88} height={88} className="h-20 w-20 rounded-full border-2 border-gold bg-white object-contain p-0.5 shadow-gold sm:h-24 sm:w-24" />
              <div className="h-12 w-px bg-gold/60" />
              <p lang="hi" className="font-hindi text-lg font-semibold text-gold sm:text-xl">{ORG.hindi}</p>
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">{ORG.name}</p>
            <h1 className="mt-3 text-[clamp(2rem,5.5vw,3.75rem)] font-black leading-[1.1] text-on-dark">
              Protecting Human Rights, Dignity, Equality & Justice
            </h1>
            <p className="mt-5 max-w-xl text-base text-on-dark-muted sm:text-lg">
              Together we raise awareness, support communities and stand for the dignity of every citizen of Bharat.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/membership" className={btn.red}>Become a Member</Link>
              <Link to="/contact" className={btn.outlineLight}>Contact Our Team</Link>
            </div>
          </div>
        </div>
        <div className="h-1.5 bg-gradient-to-r from-gold via-primary to-gold" />
      </section>

      <AutoImageSlider slider={4} label="Certificates and recognition" title="Certificates & Recognition" description="Add approved certificates, registrations and organisational recognition images to the certificates slider folder." />

      {/* Intro */}
      <section className="py-16 sm:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative">
            <img src={community} alt="Students and community members taking part in a child-safety awareness workshop" width={1200} height={912} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card transition-transform duration-500 hover:scale-[1.025]" />
            <div className="absolute -bottom-5 -right-3 hidden rounded-xl border-2 border-gold bg-navy p-4 sm:block">
              <p lang="hi" className="font-hindi text-sm text-gold">मानव अधिकार · सम्मान · समानता</p>
            </div>
          </Reveal>
          <Reveal>
            <SectionHead center={false} eyebrow="Who We Are" title={`About ${ORG.name}`} />
            <p className="leading-relaxed text-muted-foreground">
              {ORG.name} is a social organisation committed to human rights awareness and community welfare. We work to help people understand their rights, encourage respect for human dignity and bring communities together for positive change.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border-l-4 border-primary bg-card p-5 shadow-card">
                <Target className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-2 font-sans font-bold text-navy">Our Mission</h3>
                <p className="mt-1 text-sm text-muted-foreground">To promote awareness of human rights and support dignity and equality for all.</p>
              </div>
              <div className="rounded-xl border-l-4 border-gold bg-card p-5 shadow-card">
                <Eye className="h-6 w-6 text-navy-2" aria-hidden />
                <h3 className="mt-2 font-sans font-bold text-navy">Our Vision</h3>
                <p className="mt-1 text-sm text-muted-foreground">A just society where every person lives with respect, awareness and equal opportunity.</p>
              </div>
            </div>
            <Link to="/about" className={`${btn.outline} mt-7`}>Learn more about us</Link>
          </Reveal>
        </div>
      </section>

      <AutoImageSlider slider={1} label="Who We Are gallery" />

      {/* Founder / National President */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="container-x grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal className="relative">
            <img src={orgBanner} alt="Official Human Rights Suraksha Sangh–Bharat identity banner" width={1425} height={390} loading="lazy" className="w-full rounded-2xl border-4 border-gold object-cover shadow-card transition-transform duration-500 hover:scale-[1.02]" />
            <div className="absolute -bottom-4 left-4 rounded-xl bg-navy px-4 py-2 text-sm font-bold text-gold shadow-card">मानव अधिकार · सुरक्षा · सम्मान</div>
          </Reveal>
          <Reveal>
            <SectionHead center={false} eyebrow="Our Leadership" title="संस्थापक एवं राष्ट्रीय अध्यक्ष" />
            <p lang="hi" className="font-hindi text-2xl font-extrabold text-navy sm:text-3xl">डॉ. एस. हुसैन</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">मानव अधिकार सुरक्षा संघ–भारत के संस्थापक एवं राष्ट्रीय अध्यक्ष डॉ. एस. हुसैन के नेतृत्व में संगठन मानव अधिकारों, सामाजिक जागरूकता, महिला सुरक्षा, बाल संरक्षण और जनहित से जुड़े विषयों पर जागरूकता बढ़ाने के लिए प्रतिबद्ध है।</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">संगठन का उद्देश्य नागरिकों को उनके अधिकारों और जिम्मेदारियों के प्रति जागरूक करना तथा समुदायों में सुरक्षा, समानता और सम्मान की भावना को मजबूत करना है।</p>
            <div className="mt-6 flex flex-wrap gap-3"><Link to="/about" className={btn.red}>हमारे बारे में</Link><a href={ORG.waMessage} target="_blank" rel="noopener noreferrer" className={btn.outline}>संपर्क करें</a></div>
          </Reveal>
        </div>
      </section>

      <AutoImageSlider slider={5} label="Join Our Mission gallery" title="Join Our Mission" description="Become part of our effort to promote human rights awareness, dignity and community welfare." />

      {/* Objectives */}
      <section className="bg-gradient-navy py-16 sm:py-24">
        <div className="container-x">
          <SectionHead light eyebrow="What We Stand For" title="Our Mission & Objectives" intro="हमारा उद्देश्य लोगों को उनके अधिकारों और जिम्मेदारियों के प्रति जागरूक करना, समानता और मानवीय गरिमा को बढ़ावा देना तथा सुरक्षित और जिम्मेदार समुदायों के निर्माण में सहयोग करना है।" />
          <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-on-dark-muted sm:text-base">We focus on practical public awareness, safer communities, respect for every individual and helping people identify reliable sources of support. Activities and campaigns are shared as they are confirmed by the organisation.</p>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {objectives.map(({ img, t, d }) => (
              <Reveal key={t}>
                <article className="card-lift group h-full overflow-hidden rounded-2xl border border-gold/30 bg-card shadow-card">
                  <div className="overflow-hidden"><img src={img} alt={t} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110" /></div>
                  <div className="p-5"><h3 className="font-sans text-lg font-extrabold text-navy">{t}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AutoImageSlider slider={2} label="Mission and objectives gallery" />

      {/* Programs */}
      <section className="py-16 sm:py-24">
        <div className="container-x">
          <SectionHead eyebrow="Our Work" title="Our Programs" intro="Activities we organise to serve communities." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map(({ Icon, t, d }) => (
              <Reveal key={t}>
                <article className="card-lift flex h-full flex-col rounded-xl border-t-4 border-primary bg-card p-6 shadow-card">
                  <Icon className="h-9 w-9 text-primary" aria-hidden />
                  <h3 className="mt-4 font-sans text-lg font-bold text-navy">{t}</h3>
                  <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{d}</p>
                  <Link to="/programs" className="mt-4 text-sm font-bold text-primary hover:underline">View programs →</Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AutoImageSlider slider={3} label="Programs and community work gallery" />

      {/* Rights and support pathways */}
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHead eyebrow="Awareness to Action" title="Know Your Rights. Know Where to Get Help." intro="Simple, practical awareness can help families make safer choices and find the right support." />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { img: photos.rights, title: "Know Your Fundamental Rights", copy: "Learn about equality, dignity, freedom and the responsibilities that help communities live together respectfully.", link: "/about", action: "Explore our mission" },
              { img: photos.guidance, title: "Find Trusted Guidance", copy: "When a concern arises, write down key details and seek guidance from appropriate official services or a qualified professional.", link: "/contact", action: "Contact the team" },
              { img: photos.womenSafety, title: "Safety for Women & Children", copy: "Support safe environments, listen without blame and reach verified local authorities or protection services when needed.", link: "/programs", action: "Explore awareness" },
              { img: photos.childProtection, title: "Child Protection & Help Resources", copy: "Know the child protection resources available in your area, listen carefully to children and contact verified child-protection services if a child may be at risk.", link: "/contact", action: "Get in touch" },
            ].map((item) => (
              <article key={item.title} className="card-lift group h-full overflow-hidden rounded-2xl border bg-card shadow-card">
                <div className="overflow-hidden bg-muted"><img src={item.img} alt={item.title} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
                <div className="flex h-full flex-col p-5"><h3 className="text-lg font-bold text-navy">{item.title}</h3><p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.copy}</p><Link to={item.link as "/about" | "/contact" | "/programs"} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary transition-all group-hover:gap-3">{item.action} <span aria-hidden>→</span></Link></div>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-gold/30 bg-card/10 p-4 text-sm leading-relaxed text-on-dark-muted"><strong className="text-gold">Need urgent help?</strong> For immediate danger, contact local emergency services. For child protection in India, Child Helpline 1098 is available; verify service availability and details with official sources.</div>
        </div>
      </section>

      {/* Membership */}
      <section className="relative overflow-hidden bg-gradient-red py-16 sm:py-20">
        <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full border-[20px] border-gold/15" />
        <div className="container-x relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Join the Movement</p>
            <h2 className="mt-2 text-3xl font-bold text-on-dark sm:text-4xl">Why become a member?</h2>
            <p lang="hi" className="mt-3 font-hindi text-lg text-gold">सदस्य बनें, बदलाव का हिस्सा बनें</p>
          </div>
          <div className="rounded-2xl border-2 border-gold/60 bg-navy/30 p-6 sm:p-8">
            <ul className="space-y-3">
              {["Take part in awareness campaigns", "Participate in community programs", "Connect with like-minded volunteers", "Contribute to organisational activities"].map((b) => (
                <li key={b} className="flex gap-3 text-on-dark"><CheckCircle2 className="h-5 w-5 shrink-0 text-gold" aria-hidden />{b}</li>
              ))}
            </ul>
            <Link to="/membership" className={`${btn.gold} mt-6`}>Apply for Membership</Link>
            <p className="mt-4 text-xs text-on-dark-muted">Membership approval and benefits are subject to the organisation's rules.</p>
          </div>
        </div>
      </section>

      {/* Identifiers */}
      <section className="py-16 sm:py-24">
        <div className="container-x">
          <SectionHead eyebrow="Transparency" title="Organization Information" />
          <IdentifiersPanel />
        </div>
      </section>

      {/* News */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="container-x">
          <SectionHead eyebrow="Updates" title="Latest News & Upcoming Events" intro="Sample entries below show the layout — they will be replaced with verified updates from the organisation." />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { t: "Public Awareness & Community Updates", d: "Share verified announcements, community guidance and information about the organisation's work.", img: photos.awarenessMeeting, tag: "Organisation Update" },
              { t: "Community Outreach & Events", d: "Publish confirmed activity dates, locations and event summaries here once details are approved.", img: photos.outreach, tag: "Upcoming Event" },
              { t: "Rights Education & Public Resources", d: "Feature practical educational resources on dignity, equality, safety and responsible civic participation.", img: photos.legalAid, tag: "Awareness Resource" },
            ].map((n) => (
              <article key={n.t} className="card-lift group overflow-hidden rounded-xl bg-card shadow-card">
                <div className="overflow-hidden"><img src={n.img} alt={n.t} loading="lazy" className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-110" /></div>
                <div className="p-5">
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">{n.tag}</span>
                  <p className="mt-3 text-xs font-semibold text-primary">Date: to be announced</p>
                  <h3 className="mt-1 font-sans text-lg font-bold text-navy">{n.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{n.d}</p>
                  <Link to="/programs" className="mt-3 inline-block text-sm font-bold text-primary hover:underline">Read more →</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center"><Link to="/programs" className={btn.red}>View All Updates</Link></div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHead eyebrow="Our Commitment" title="How We Support Communities" intro="We focus on awareness, listening and connecting people with reliable information and appropriate support." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[{n:"01",t:"Listen to People",d:"Make space for community concerns and questions."},{n:"02",t:"Spread Awareness",d:"Share accessible information on rights and responsibilities."},{n:"03",t:"Encourage Participation",d:"Invite volunteers and citizens to contribute positively."},{n:"04",t:"Guide Responsibly",d:"Help people identify appropriate official support channels."}].map(x=><article key={x.n} className="card-lift rounded-2xl border border-border bg-card p-6 shadow-card"><span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-red font-bold text-on-dark">{x.n}</span><h3 className="mt-4 font-sans text-lg font-bold text-navy">{x.t}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.d}</p></article>)}
          </div>
        </div>
      </section>
      <section className="bg-muted py-16 sm:py-20"><div className="container-x"><SectionHead eyebrow="For Everyone" title="Know Your Rights, Take Informed Steps" intro="Awareness can help people make informed decisions and seek the right assistance when needed."/><div className="grid gap-5 md:grid-cols-3">{[{t:"Know the facts",d:"Use trustworthy information and understand the basic rights and responsibilities relevant to your situation."},{t:"Keep records",d:"Where appropriate, keep copies of important documents, dates and communications safely."},{t:"Contact official support",d:"For emergencies or specialised issues, reach the appropriate government service or qualified professional."}].map(x=><article key={x.t} className="card-lift rounded-xl border-t-4 border-gold bg-card p-6 shadow-card"><h3 className="font-sans text-lg font-bold text-navy">{x.t}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.d}</p></article>)}</div></div></section>
      <section className="bg-gradient-red py-14 sm:py-16"><div className="container-x grid items-center gap-6 md:grid-cols-[1fr_auto]"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-gold">Be part of the change</p><h2 className="mt-2 text-2xl font-black text-on-dark sm:text-3xl">Your time and voice can make a difference.</h2><p className="mt-2 max-w-2xl text-on-dark-muted">Join awareness activities, share verified information and help build a safer, more respectful community.</p></div><div className="flex flex-wrap gap-3"><Link to="/membership" className={btn.gold}>Join the Sangh</Link><Link to="/contact" className={btn.outlineLight}>Get in touch</Link></div></div></section>
      <FollowSection />
      <ContactCta />
    </>
  );
}
