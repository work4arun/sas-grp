import PageShell from "@/components/PageShell";
import FactCards from "@/components/FactCards";
import PointList from "@/components/PointList";
import Reveal, { Lines, Words } from "@/components/Reveal";
import { PLACEMENT } from "@/lib/site";

export const metadata = {
  title: "Placements | Sasurie Group of Institutions",
  description:
    "Placements at Sasurie Group of Institutions: 150+ recruiting companies, 1500+ students placed, 93.12% placement rate, ₹48 LPA highest package, aptitude & soft-skills training.",
};

const STATS_CARDS = PLACEMENT.stats.map((s, i) => ({
  tag: "Track record",
  title: s.value,
  text: s.label,
  color: ["var(--red)", "var(--gold)", "var(--green)", "var(--blue)", "var(--gold)", "var(--green)"][i % 6],
}));

const CDC = {
  lede: "The Career Development Centre (CDC) supports students' professional growth through skill development, career guidance, industry exposure, training, internships and mentorship, and works to close the gap between academics and industry.",
  corporate:
    "Industry interactions, expert sessions and career events, including technical events, recognition of academic achievers and interaction sessions, show students what industry expects and where it is heading.",
  experiential:
    "Practical exposure, real-world experience and industry engagement opportunities that build communication, technical, aptitude and leadership skills.",
  training: [
    "Aptitude and problem-solving preparation.",
    "Full-stack and emerging technology skill development.",
    "Soft-skills coaching and communication mastery.",
    "Resume writing and professional portfolio building.",
    "Mock interview practice with corporate HR leaders.",
    "Competitive coding and algorithmic problem solving.",
    "Group discussion practice and leadership simulations.",
  ],
  team: ["Naveen Kumar C, Executive, Career Development Centre.", "Haripriya P, Executive, Corporate Relations."],
};

export default function PlacementsPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Placement and", "career development."]} />
            <Words className="lede" delay={0.2} text={PLACEMENT.lede} />
          </div>
        </div>

        <FactCards items={STATS_CARDS} minWidth={220} />

        <div className="container" style={{ marginTop: "clamp(36px, 5vw, 64px)" }}>
          <FactCards
            minWidth={320}
            items={[
              {
                tag: "The office",
                title: "Dedicated placement block",
                text: PLACEMENT.overview[0],
                color: "var(--blue)",
                rgb: "63, 107, 181",
              },
              {
                tag: "The focus",
                title: "Recruitment training",
                text: PLACEMENT.overview[1],
                color: "var(--green)",
                rgb: "148, 201, 61",
              },
              {
                tag: "Contact",
                title: "Contact the DPCD",
                text: "Reach the placement office directly, including for campus recruitment enquiries from companies.",
                color: "var(--gold)",
                rgb: "253, 185, 19",
                links: [
                  { label: "sceplacement@sasurie.com", href: "mailto:sceplacement@sasurie.com" },
                  { label: "Call +91 94425 93803", href: "tel:+919442593803" },
                ],
              },
            ]}
          />
        </div>

        <div
          className="container"
          style={{ marginTop: "clamp(48px, 7vw, 96px)", display: "grid", gap: "clamp(32px, 5vw, 64px)" }}
        >
          <Reveal>
            <h3 style={{ fontSize: "1.5rem" }}>Objectives</h3>
            <PointList items={PLACEMENT.objectives} />
          </Reveal>
          <Reveal>
            <h3 style={{ fontSize: "1.5rem" }}>Training and activities</h3>
            <PointList items={PLACEMENT.highlights} />
          </Reveal>
          <Reveal>
            <p className="fine" style={{ maxWidth: "62ch" }}>{PLACEMENT.note}</p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: "var(--mist)", borderBlock: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head">
            <Lines lines={["Career", "Development Centre."]} />
            <Words className="lede" delay={0.2} text={CDC.lede} />
          </div>
        </div>
        <FactCards
          minWidth={320}
          items={[
            {
              tag: "Corporate connect",
              title: "Industry interaction",
              text: CDC.corporate,
              color: "var(--blue)",
              rgb: "63, 107, 181",
            },
            {
              tag: "Industry connect",
              title: "Experiential learning",
              text: CDC.experiential,
              color: "var(--green)",
              rgb: "148, 201, 61",
            },
            {
              tag: "Contact",
              title: "Reach the CDC",
              text: "The Career Development Centre team can be reached by email or telephone.",
              color: "var(--gold)",
              rgb: "253, 185, 19",
              links: [
                { label: "sceplacement@sasurie.com", href: "mailto:sceplacement@sasurie.com" },
                { label: "Call 94425 93811", href: "tel:+919442593811" },
              ],
            },
          ]}
        />
        <div
          className="container"
          style={{ marginTop: "clamp(48px, 7vw, 96px)", display: "grid", gap: "clamp(32px, 5vw, 64px)" }}
        >
          <Reveal>
            <h3 style={{ fontSize: "1.5rem" }}>Training programmes</h3>
            <PointList items={CDC.training} />
          </Reveal>
          <Reveal>
            <h3 style={{ fontSize: "1.5rem" }}>The team</h3>
            <PointList items={CDC.team} />
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
