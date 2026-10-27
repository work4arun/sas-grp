import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import FactCards from "@/components/FactCards";
import PointList from "@/components/PointList";
import Reveal, { Lines, Words } from "@/components/Reveal";
import { DEPARTMENTS, DEPARTMENT_BY_SLUG } from "@/lib/departments";

export function generateStaticParams() {
  return DEPARTMENTS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const d = DEPARTMENT_BY_SLUG[slug];
  if (!d) return {};
  return {
    title: `${d.name} | Sasurie Group of Institutions`,
    description: `${d.name} at Sasurie Group of Institutions: vision, mission, programme outcomes and laboratories. ${d.credential}.`,
    alternates: { canonical: `/departments/${d.slug}` },
  };
}

const block = { display: "grid", gap: "clamp(32px, 5vw, 64px)" };

export default async function DepartmentPage({ params }) {
  const { slug } = await params;
  const d = DEPARTMENT_BY_SLUG[slug];
  if (!d) notFound();

  const glance = [d.credential, d.since ? `Established ${d.since}` : null].filter(Boolean).join(" · ");

  return (
    <PageShell>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Department of", `${d.name}.`]} />
            <Words className="lede" delay={0.2} text={d.overview} />
          </div>
        </div>

        <FactCards
          minWidth={320}
          items={[
            {
              tag: d.level,
              title: "At a glance",
              text: glance,
              color: "var(--red)",
              rgb: "224, 31, 38",
              links: [
                { label: d.email, href: `mailto:${d.email}` },
                ...(d.newsletter ? [d.newsletter] : []),
              ],
            },
            { tag: "Our Vision", title: "Vision", text: d.vision, color: "var(--green)", rgb: "148, 201, 61" },
          ]}
        />
      </section>

      <section className="section pf-inner-sec">
        <div className="container" style={block}>
          <Reveal>
            <h3 style={{ fontSize: "1.5rem" }}>Mission</h3>
            <PointList items={d.mission} />
          </Reveal>
          {d.peos.length > 0 && (
            <Reveal>
              <h3 style={{ fontSize: "1.5rem" }}>Programme educational objectives</h3>
              <PointList items={d.peos} />
            </Reveal>
          )}
          {d.psos.length > 0 && (
            <Reveal>
              <h3 style={{ fontSize: "1.5rem" }}>Programme specific outcomes</h3>
              <PointList items={d.psos} />
            </Reveal>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container" style={block}>
          <Reveal>
            <h3 style={{ fontSize: "1.5rem" }}>Laboratories</h3>
            <PointList items={d.labs} />
          </Reveal>
          {(d.extras || []).map((x) => (
            <Reveal key={x.title}>
              <h3 style={{ fontSize: "1.5rem" }}>{x.title}</h3>
              <PointList items={x.items} />
            </Reveal>
          ))}
          <div className="cta-row">
            <a className="btn btn-primary" href="/admissions">Admissions and eligibility</a>
            <a className="btn btn-ghost" href="/departments">All departments</a>
            <a className="btn btn-ghost" href={`mailto:${d.email}`}>Write to the department</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
