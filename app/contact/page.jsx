import PageShell from "@/components/PageShell";
import FactCards from "@/components/FactCards";
import Tilt from "@/components/Tilt";
import AdmissionForm from "@/components/AdmissionForm";
import { Lines, Words } from "@/components/Reveal";
import { DEPARTMENT_CONTACTS, SITE } from "@/lib/site";

export const metadata = {
  title: "Contact | Sasurie Group of Institutions",
  description:
    "Sasurie Group of Institutions — Vijayamangalam Campus (NH544, Tiruppur) & Coimbatore Campus. Call 94425 93828, 94888 93333, or write to info@sasurie.com.",
};

const MAPS = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(
  "Sasurie Group of Institutions, Coimbatore Bypass NH544, Vijayamangalam, Tiruppur, Tamil Nadu 638056"
);

export default function ContactPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Contact Sasurie", "Group of Institutions."]} />
            <Words
              className="lede"
              delay={0.2}
              text="Telephone, email, campus locations and institutional contacts across our Vijayamangalam and Coimbatore campuses."
            />
          </div>
        </div>

        <FactCards
          minWidth={300}
          items={[
            {
              tag: "Telephone",
              title: "Admissions and general enquiries",
              text: "Call any of the numbers below.",
              color: "var(--red)",
              links: SITE.admissionPhones.map((p) => ({
                label: `Call ${p}`,
                href: `tel:+91${p.replace(/\s/g, "")}`,
              })),
            },
            {
              tag: "Email",
              title: "Email the college",
              text: "General enquiries and the Principal's office.",
              color: "var(--blue)",
              links: SITE.emails.map((e) => ({ label: e, href: `mailto:${e}` })),
            },
            {
              tag: "Visit",
              title: "Campus address",
              text: SITE.addressLines.join(" "),
              color: "var(--green)",
              links: [{ label: "Open in Google Maps ↗", href: MAPS }],
            },
            {
              tag: "Online services",
              title: "Apply, sign in or pay",
              text: "Apply for admission, sign in to the student portal, or pay fees online.",
              color: "var(--gold)",
              links: [
                { label: "Apply online ↗", href: SITE.applyUrl },
                { label: "Student login ↗", href: SITE.studentLogin },
                { label: "Fee payment ↗", href: SITE.feePayment },
              ],
            },
          ]}
        />

        <div className="container" style={{ marginTop: "clamp(48px, 7vw, 96px)" }}>
          <div className="adm-panel">
            <div className="adm-copy">
              <Lines lines={["Request", "a call back."]} />
              <p className="lede">
                Share your details and the admissions desk will call you back to discuss programmes, eligibility and scholarships.
              </p>
            </div>
            <Tilt className="adm-form-wrap" max={5}>
              <AdmissionForm />
            </Tilt>
          </div>
        </div>

        <div className="container" style={{ marginTop: "clamp(48px, 7vw, 96px)" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: 8 }}>Department and office contacts</h3>
          <p className="fine" style={{ maxWidth: "62ch", marginBottom: 24 }}>Each department and office has its own inbox. Writing to the relevant one gets the fastest response.</p>
        </div>
        <FactCards
          minWidth={260}
          items={DEPARTMENT_CONTACTS.map((d, i) => ({
            tag: "Email",
            title: d.name,
            text: d.scope,
            color: ["var(--green)", "var(--blue)", "var(--gold)", "var(--red)"][i % 4],
            links: [{ label: d.email, href: `mailto:${d.email}` }],
          }))}
        />

        <div className="container" style={{ marginTop: "clamp(40px, 6vw, 72px)" }}>
          <h3 style={{ fontSize: "1.3rem", marginBottom: 8 }}>Follow Sasurie Institutions</h3>
          <div className="cta-row">
            {SITE.social.map((s) => (
              <a key={s.label} className="btn btn-ghost" href={s.href} target="_blank" rel="noreferrer">
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
