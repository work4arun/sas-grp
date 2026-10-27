import PageShell from "@/components/PageShell";
import FactCards from "@/components/FactCards";
import PointList from "@/components/PointList";
import Reveal, { Lines, Words } from "@/components/Reveal";
import { DISCLOSURES } from "@/lib/site";
import {
  STATUTORY_COMMITTEES,
  EOA,
  NIRF,
  AQAR_CRITERIA,
  NAAC_DVV,
  IQAC,
  EXAMS,
  CIRCULARS,
  POLICIES,
  ANNUAL_ACCOUNTS,
  COMMITTEES,
} from "@/lib/documents";

export const metadata = {
  title: "Disclosures and documents | Sasurie Group of Institutions",
  description:
    "NAAC documents, NIRF submissions, AQAR reports, AICTE approvals, IQAC, examinations, statutory committees, policies and mandatory circulars across Sasurie Group of Institutions.",
};

const wrap = { display: "grid", gap: "clamp(32px, 5vw, 64px)", marginTop: "clamp(24px, 4vw, 48px)" };
const mist = { background: "var(--mist)", borderBlock: "1px solid var(--line)" };

function Links({ title, links }) {
  return (
    <Reveal>
      {title && <h3 style={{ fontSize: "1.3rem" }}>{title}</h3>}
      <div className="cta-row" style={{ marginTop: 14 }}>
        {links.map((l) => (
          <a key={l.href + l.label} className="btn btn-ghost btn-sm" href={l.href} target="_blank" rel="noreferrer">
            {l.label} ↗
          </a>
        ))}
      </div>
    </Reveal>
  );
}

export default function DisclosuresPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Disclosures and", "statutory documents."]} />
            <Words
              className="lede"
              delay={0.2}
              text="Accreditation and ranking documents, annual quality reports, AICTE approvals and committee records."
            />
          </div>
        </div>

        <FactCards
          minWidth={320}
          items={DISCLOSURES.map((d, i) => ({
            tag: d.group,
            title: d.group,
            text: d.note,
            color: ["var(--green)", "var(--blue)", "var(--gold)", "var(--red)"][i % 4],
            links: [
              ...(d.file ? [d.file] : []),
              ...(d.href
                ? [{
                    label: d.href.endsWith(".pdf") ? "Open the PDF ↗" : "Open the documents ↗",
                    href: d.href,
                  }]
                : []),
            ],
          }))}
        />
      </section>

      <section className="section" style={mist}>
        <div className="container">
          <div className="section-head">
            <Lines lines={["Statutory", "committees."]} />
            <Words
              className="lede"
              delay={0.2}
              text="The bodies that govern the autonomous college: the Governing Body, Academic Council, Standing Committee, Finance Committee, Boards of Study and the Result Passing Board."
            />
          </div>
        </div>
        <FactCards
          minWidth={320}
          items={STATUTORY_COMMITTEES.map((c, i) => ({
            ...c,
            color: ["var(--green)", "var(--blue)", "var(--gold)", "var(--red)"][i % 4],
          }))}
        />
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Approvals and", "accreditation."]} />
            <Words
              className="lede"
              delay={0.2}
              text="AICTE extensions of approval from 2001, NIRF submissions, AQAR criteria and NAAC data-validation clarifications."
            />
          </div>
          <div style={wrap}>
            <Links title="AICTE Extension of Approval, by year" links={EOA} />
            <Links title="NIRF" links={NIRF} />
            <Links title="AQAR criteria" links={AQAR_CRITERIA} />
            {NAAC_DVV.map((g) => (
              <Links key={g.group} title={`NAAC DVV clarifications: ${g.group}`} links={g.links} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={mist}>
        <div className="container">
          <div className="section-head">
            <Lines lines={["Internal Quality", "Assurance Cell."]} />
            <Words className="lede" delay={0.2} text={`Vision: ${IQAC.vision} Mission: ${IQAC.mission}`} />
          </div>
          <div style={wrap}>
            <Reveal>
              <h3 style={{ fontSize: "1.3rem", marginBottom: 6 }}>Functions</h3>
              <PointList items={IQAC.functions} />
            </Reveal>
            {IQAC.documents.map((g) => (
              <Links key={g.group} title={g.group} links={g.links} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Controller of", "Examinations."]} />
            <Words className="lede" delay={0.2} text={EXAMS.lede} />
          </div>
          <div style={wrap}>
            <Reveal>
              <h3 style={{ fontSize: "1.3rem", marginBottom: 6 }}>Officers</h3>
              <PointList items={EXAMS.officers} />
            </Reveal>
            <Reveal>
              <h3 style={{ fontSize: "1.3rem", marginBottom: 6 }}>Functions</h3>
              <PointList items={EXAMS.functions} />
            </Reveal>
            {EXAMS.documents.map((g) => (
              <Links key={g.group} title={g.group} links={g.links} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={mist}>
        <div className="container">
          <div className="section-head">
            <Lines lines={["Policies, circulars", "and accounts."]} />
            <Words
              className="lede"
              delay={0.2}
              text="Institutional policies, circulars and annual accounts published by the college."
            />
          </div>
          <div style={wrap}>
            <Reveal>
              <h3 style={{ fontSize: "1.3rem", marginBottom: 6 }}>Institutional policies</h3>
              <PointList items={POLICIES} />
            </Reveal>
            <Links title="Circulars" links={CIRCULARS} />
            <Links title="Annual accounts" links={ANNUAL_ACCOUNTS} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Committees", "and cells."]} />
            <Words
              className="lede"
              delay={0.2}
              text="Anti-ragging, grievance redressal, internal complaints, equal opportunity and the other committees and cells that the college maintains."
            />
          </div>
          <div style={wrap}>
            <Links links={COMMITTEES} />
          </div>
          <div className="cta-row" style={{ marginTop: "clamp(40px, 6vw, 72px)" }}>
            <a className="btn btn-primary" href="/admissions">Admissions</a>
            <a className="btn btn-ghost" href="/contact">Contact the office</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
