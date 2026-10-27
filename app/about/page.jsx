import PageShell from "@/components/PageShell";
import FactCards from "@/components/FactCards";
import PointList from "@/components/PointList";
import Reveal, { Lines, Words } from "@/components/Reveal";
import { ABOUT, GOVERNING_COUNCIL } from "@/lib/site";

export const metadata = {
  title: "About | Sasurie Group of Institutions",
  description:
    "Sasurie Group of Institutions, Vijayamangalam & Coimbatore — founded in 2001 by the Ponmudi Muthusamy Gounder Trust. Vision, mission, leadership, campuses and governing council.",
};

const LEADERSHIP = ABOUT.leadership.map((l) => ({
  tag: l.role,
  title: l.name,
  text: l.text,
}));

export default function AboutPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["About Sasurie Group", "of Institutions."]} />
            <Words className="lede" delay={0.2} text={ABOUT.lede} />
          </div>
        </div>
        <FactCards items={ABOUT.facts} minWidth={250} />

        <div className="container" style={{ marginTop: "clamp(48px, 7vw, 96px)" }}>
          <div className="cta-row">
            <a className="btn btn-primary" href="/departments">See the departments</a>
            <a className="btn btn-ghost" href="/disclosures">Disclosures and documents</a>
            <a className="btn btn-ghost" href="/contact">Contact us</a>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--mist)", borderBlock: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head">
            <Lines lines={["Vision", "and mission."]} />
            <Words className="lede" delay={0.2} text="What the college is working towards, and the principles that guide its work." />
          </div>
        </div>
        <FactCards
          minWidth={340}
          items={[
            { tag: "Our Vision", title: "Vision", text: ABOUT.vision, color: "var(--green)", rgb: "148, 201, 61" },
            { tag: "Our Mission", title: "Mission", text: ABOUT.mission, color: "var(--blue)", rgb: "63, 107, 181" },
            { tag: "Quality policy", title: "Quality policy", text: ABOUT.qualityPolicy, color: "var(--gold)", rgb: "253, 185, 19" },
          ]}
        />
        <div className="container" style={{ marginTop: "clamp(40px, 6vw, 72px)" }}>
          <Reveal>
            <h3 style={{ fontSize: "1.3rem", marginBottom: 6 }}>Core values</h3>
            <PointList items={ABOUT.values} />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Leadership", "and management."]} />
            <Words className="lede" delay={0.2} text="The founding trust, the management and the head of the institution." />
          </div>
        </div>
        <FactCards items={LEADERSHIP} minWidth={320} />
      </section>

      <section className="section" style={{ background: "var(--mist)", borderBlock: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head">
            <Lines lines={["Governing", "council."]} />
            <Words
              className="lede"
              delay={0.2}
              text="The governing body of the autonomous college, chaired by the Chairman of the Sasurie Group of Institutions, with the Principal as Member Secretary."
            />
          </div>
          <div style={{ display: "grid", gap: "clamp(32px, 5vw, 64px)", marginTop: "clamp(24px, 4vw, 48px)" }}>
            <Reveal>
              <h3 style={{ fontSize: "1.3rem", marginBottom: 6 }}>Members</h3>
              <PointList items={GOVERNING_COUNCIL.members} />
            </Reveal>
            <Reveal>
              <h3 style={{ fontSize: "1.3rem", marginBottom: 6 }}>Role of the Governing Council</h3>
              <PointList items={GOVERNING_COUNCIL.roles} />
            </Reveal>
            <Reveal>
              <p className="fine" style={{ maxWidth: "62ch" }}>
                The Academic Council, Standing Committee, Finance Committee, Board of Studies and Result Passing Board are described on the{" "}
                <a className="to-top" href="/disclosures">Disclosures</a> page.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <h3 style={{ fontSize: "1.3rem", marginBottom: 6 }}>The campuses at a glance</h3>
            <PointList
              items={[
                "Vijayamangalam Campus on the Coimbatore Bypass (NH544), Tiruppur, hosting Engineering, Arts & Science, B-School, Pharmacy, and Nursing.",
                "Coimbatore Campus hosting Arts, Science & Research, Academy of Engineering, Pharmacy, and Nursing.",
                "Advanced departmental laboratories, research centres, and Centre for Research & Development (CFRD).",
                "Centres of Excellence in Industry 4.0, IoT, Automation, and IBM collaborative labs.",
                "Central libraries with over 46,000 volumes, DELNET subscriptions, and online digital libraries.",
                "Separate on-campus hostels for boys and girls, 600-seat cafeteria, sports grounds, and 24-hour ATM.",
                "Health dispensary with ambulance on standby and 12 GPS-enabled campus buses.",
                "Barrier-free campus with ramps, rails and washrooms for differently-abled students.",
              ]}
            />
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
