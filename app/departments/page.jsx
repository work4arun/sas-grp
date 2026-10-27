import PageShell from "@/components/PageShell";
import FactCards from "@/components/FactCards";
import PointList from "@/components/PointList";
import Reveal, { Lines, Words } from "@/components/Reveal";
import Programmes from "@/components/Programmes";
import { DEPARTMENT_BY_SLUG } from "@/lib/departments";

export const metadata = {
  title: "Academic Programmes & Departments | Sasurie Group of Institutions",
  description:
    "Explore 37+ academic programmes across Engineering, Computing, Arts, Commerce, Management, Healthcare, and Postgraduate studies with state-of-the-art laboratories and autonomous curriculum.",
};

const detailLink = (d) => ({ label: "Vision, mission and laboratories", href: `/departments/${d.slug}` });

const pgCard = (slug, color, text) => {
  const d = DEPARTMENT_BY_SLUG[slug];
  return {
    tag: `${d.credential}${d.since ? ` · since ${d.since}` : ""}`,
    title: d.name,
    text,
    color,
    links: [detailLink(d), { label: d.email, href: `mailto:${d.email}` }, { label: "View eligibility", href: "/admissions" }],
  };
};

const PG = [
  pgCard(
    "me-computer-science-and-engineering",
    "var(--green)",
    "A two-year postgraduate programme. The department regularly hosts lectures by academicians and industry professionals on emerging technologies, and works with IIT Bombay on a laboratory, workshops and seminars."
  ),
  pgCard(
    "mba",
    "var(--gold)",
    "A two-year, four-semester programme with specialisations in HR, Finance, Marketing and Business Analytics. Learning includes lectures by academicians, industrial tours, personality development programmes, case studies and guest lectures from industry."
  ),
];

const sh = DEPARTMENT_BY_SLUG["science-and-humanities"];
const SH = [
  {
    tag: "Foundation year",
    title: "Science and Humanities",
    text: "The department that teaches the first-year foundation courses shared by every branch: Chemistry, English, Mathematics and Physics, supported by counselling, seminars and personality development programmes.",
    color: "var(--blue)",
    links: [detailLink(sh), { label: sh.email, href: `mailto:${sh.email}` }],
  },
];

const CFAC_ACTIVITIES = [
  "Formation of regulations.",
  "Formation of curriculum and syllabus.",
  "Approval of special electives for Ph.D. students.",
  "Handling break of study, rejoining and withdrawal from end-semester examinations.",
  "Issue of eligibility certificates.",
  "Approval of addition or exemption of courses for transfer and break-of-study candidates.",
  "Approval of internships, online study, self-study and foreign exchange programmes.",
  "Facilitating the Academic Council, Standing Committee and Boards of Studies for regulations, curriculum and syllabus.",
  "Formation of the Department Consultative Committee and fixing the academic schedule.",
  "Issue of attested copies of the syllabus to students.",
];

export default function DepartmentsPage() {
  return (
    <PageShell>
      {/* 1. Primary Interactive Course Catalogue in Silver Textured Theme */}
      <Programmes
        isStandalonePage={true}
        initialShowAll={false}
        headingEyebrow="Academic Programmes & Courses"
        headingTitle={["Academic Programmes", "and departments."]}
        headingLede="Explore 37+ undergraduate and postgraduate degrees across Engineering, Computing, Arts, Commerce, Management, Healthcare and Education with direct faculty contacts and modern curriculum."
      />

      {/* 2. Postgraduate Departments in Silver Frosted Glass Container */}
      <section className="section pf-inner-sec" id="postgraduate">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Postgraduate", "programmes."]} />
            <Words
              className="lede"
              delay={0.2}
              text="Postgraduate admission is through TANCET or the Consortium Common Entrance Test, or through the college office for management-quota seats."
            />
          </div>
        </div>
        <FactCards items={PG} minWidth={340} />
      </section>

      {/* 3. First-Year Foundation */}
      <section className="section pf-inner-sec" id="foundation">
        <div className="container">
          <div className="section-head">
            <Lines lines={["First-year", "foundation."]} />
            <Words className="lede" delay={0.2} text="The department that teaches the first year of every engineering branch." />
          </div>
        </div>
        <FactCards items={SH} minWidth={340} />
      </section>

      {/* 4. Centre for Academic Courses (CFAC) in Frosted Glass Container */}
      <section className="section pf-inner-sec" id="cfac">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Centre for", "Academic Courses."]} />
            <Words
              className="lede"
              delay={0.2}
              text="The centre administers all academic matters of the institute. It organises meetings of the Boards of Studies, Standing Committees and Academic Council, and prepares lesson plans and the academic schedule for all UG and PG programmes."
            />
          </div>
          <div className="pf-cfac-grid">
            <Reveal className="pf-glass-box">
              <div className="pf-card-top" style={{ marginBottom: 14 }}>
                <span className="fact-beacon" style={{ background: "var(--red)" }} aria-hidden="true" />
                <span className="pf-degree" style={{ color: "var(--red)", borderColor: "var(--red-line, var(--line))" }}>
                  Autonomous Academic Affairs
                </span>
              </div>
              <h3 style={{ fontSize: "1.45rem", marginBottom: 14, color: "var(--ink)" }}>What the centre handles</h3>
              <PointList items={CFAC_ACTIVITIES} />
            </Reveal>
            <Reveal className="pf-glass-box">
              <div className="pf-card-top" style={{ marginBottom: 14 }}>
                <span className="fact-beacon" style={{ background: "var(--blue)" }} aria-hidden="true" />
                <span className="pf-degree" style={{ color: "var(--blue)", borderColor: "var(--blue-line, var(--line))" }}>
                  Curriculum &amp; Syllabi
                </span>
              </div>
              <h3 style={{ fontSize: "1.45rem", marginBottom: 14, color: "var(--ink)" }}>Regulations and curriculum</h3>
              <PointList
                items={[
                  "Undergraduate regulations: Anna University 2021 and 2025, and Autonomous 2026.",
                  "Postgraduate (M.E. and MBA) regulations: Anna University 2021 and 2025, and Autonomous 2026.",
                  "The Autonomous (R-2026) curriculum covers every undergraduate programme except B.E. Civil Engineering, together with M.E. Computer Science and Engineering and MBA.",
                  "B.E. Civil Engineering follows the Anna University curriculum (R-2025 and R-2021 revised), as do the other undergraduate programmes for students admitted under those regulations.",
                ]}
              />
            </Reveal>
          </div>
          <div className="cta-row" style={{ marginTop: "clamp(36px, 5vw, 60px)" }}>
            <a className="btn btn-primary" href="/admissions">Admissions and eligibility</a>
            <a className="btn btn-ghost" href="/placements">Placements</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
