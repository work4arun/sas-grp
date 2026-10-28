import Link from "next/link";
import PageShell from "@/components/PageShell";
import FactCards from "@/components/FactCards";
import PointList from "@/components/PointList";
import Reveal, { Lines, Words } from "@/components/Reveal";
import { ADMISSION, SITE } from "@/lib/site";

export const metadata = {
  alternates: { canonical: "/admissions" },
  title: "Admissions | Sasurie Group of Institutions",
  description:
    "Admissions at Sasurie Group of Institutions: Engineering, Arts & Science, Management, Pharmacy, Nursing, and Education. Merit scholarships up to 100% fee waiver, sports quota, and application details.",
};

const sentence = (t) => t.replace(/\.+$/, "") + ".";

export default function AdmissionsPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Admissions are open.", "Here is how to apply."]} />
            <Words className="lede" delay={0.2} text={ADMISSION.lede} />
          </div>
        </div>

        <div className="container">
          <ol className="steps">
            {ADMISSION.steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={0.15 + i * 0.12}>
                <span
                  className="step-n"
                  aria-hidden="true"
                  style={i >= 3 ? { background: "var(--red)", color: "#fff" } : undefined}
                >
                  {i + 1}
                </span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <div className="cta-row" style={{ marginTop: "clamp(28px, 4vw, 44px)" }}>
            <a className="btn btn-primary" href={SITE.applyUrl} target="_blank" rel="noreferrer">
              Apply online ↗
            </a>
            <a className="btn btn-ghost" href="tel:+919442593828">Call 94425 93828</a>
            <a className="btn btn-ghost" href={ADMISSION.brochureUrl} target="_blank" rel="noreferrer">Admission brochure ↗</a>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--mist)", borderBlock: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head">
            <Lines lines={["Undergraduate", "eligibility."]} />
            <Words
              className="lede"
              delay={0.2}
              text="B.E. and B.Tech. admission is through Anna University TNEA counselling, based on Class 12 marks. Minimum eligibility marks by category are listed below."
            />
          </div>
        </div>
        <FactCards
          minWidth={280}
          items={ADMISSION.ugEligibility.map((r, i) => ({
            tag: r.category,
            title: r.category,
            text: [sentence(r.hsc), /lateral/i.test(r.diploma) ? sentence(r.diploma) : null].filter(Boolean).join(" "),
            color: ["var(--green)", "var(--blue)", "var(--gold)", "var(--red)"][i % 4],
          }))}
        />
        <div className="container" style={{ marginTop: "clamp(32px, 5vw, 56px)" }}>
          <p className="fine" style={{ maxWidth: "70ch" }}>{ADMISSION.ugNote}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Postgraduate", "eligibility."]} />
            <Words
              className="lede"
              delay={0.2}
              text="M.E. and MBA admission is through TANCET or the Consortium Common Entrance Test. Eligibility for each programme is listed below."
            />
          </div>
        </div>
        <FactCards
          minWidth={340}
          items={ADMISSION.pgEligibility.map((r, i) => ({
            tag: r.course.startsWith("MBA") ? "MBA" : "M.E.",
            title: r.course,
            text: r.requirement,
            color: i === 0 ? "var(--green)" : "var(--gold)",
          }))}
        />
      </section>

      <section className="section" style={{ background: "var(--mist)", borderBlock: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head">
            <Lines lines={["Scholarships", "and refunds."]} />
            <Words
              className="lede"
              delay={0.2}
              text="Scholarship options for eligible students, and the refund policy for withdrawals."
            />
          </div>
        </div>
        <FactCards
          minWidth={300}
          items={ADMISSION.scholarships.map((s, i) => ({
            tag: "Scholarship",
            title: s.title,
            text: s.text,
            color: ["var(--gold)", "var(--red)", "var(--blue)", "var(--green)"][i % 4],
          }))}
        />
        <div className="container" style={{ marginTop: "clamp(32px, 5vw, 56px)" }}>
          <Reveal>
            <h3 style={{ fontSize: "1.3rem", marginBottom: 6 }}>Fee refund policy</h3>
            <PointList items={[ADMISSION.refund]} />
            <div className="cta-row" style={{ marginTop: 18 }}>
              <a className="btn btn-ghost" href={ADMISSION.refundPolicyUrl} target="_blank" rel="noreferrer">
                Fee refund policy 2024-25 (PDF) ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Admission", "enquiries."]} />
            <Words
              className="lede"
              delay={0.2}
              text={`Call ${SITE.admissionPhones.join(", ")} or email ${SITE.emails[0]}. You can also use the call-back form on the contact page.`}
            />
          </div>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/contact">Contact and call-back</Link>
            <Link className="btn btn-ghost" href="/disclosures">Policies and documents</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
