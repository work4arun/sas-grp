import Link from "next/link";
import PageShell from "@/components/PageShell";
import Happenings from "@/components/Happenings";
import Reveal, { Lines, Words } from "@/components/Reveal";
import { CHAPTERS, EVENTS, RECORDS } from "@/lib/happenings";
import { LAYERS } from "@/lib/layers";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Happenings at SAS | Sasurie Group of Institutions",
  description:
    "What is happening across Sasurie Group of Institutions: festivals, sport, national symposiums, hackathons, industry research, and milestones across our campuses.",
  alternates: { canonical: "/happenings" },
};

const COLOR = Object.fromEntries(LAYERS.map((l) => [l.level, l.fill]));
const youtube = SITE.social.find((s) => s.label === "YouTube");
const instagram = SITE.social.find((s) => s.label === "Instagram");

export default function HappeningsPage() {
  return (
    <PageShell>
      <section className="hp-intro">
        <div className="container hp-intro-grid">
          <div>
            <Lines lines={["Happenings", "at SAS."]} />
            <Words
              className="lede"
              delay={0.2}
              text="Festivals and sport, workshops and research, industry and enterprise, and the milestones that move our institutions forward. Scroll, and watch the Sasurie arrow climb with them."
            />
          </div>
          <ul className="hp-legend" aria-label="The four layers the happenings are grouped under">
            {CHAPTERS.map((c) => (
              <li key={c.level} style={{ "--c": COLOR[c.level] }}>
                <i aria-hidden="true" />
                <span>
                  <b>{c.name}</b>
                  <small>{c.layer} layer</small>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Happenings />

      <section className="section hp-records">
        <div className="container">
          <div className="section-head">
            <Lines lines={["Every happening,", "in one place."]} />
            <Words
              className="lede"
              delay={0.2}
              text="The animation shows highlights. This is the full list, with the group's own published records for those who want the detail."
            />
          </div>

          <div className="hp-records-grid">
            <Reveal as="ol" className="hp-list">
              {EVENTS.map((e, i) => (
                <li key={e.id} style={{ "--c": COLOR[e.level] }}>
                  <span className="hp-list-n">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <b>{e.title}</b>
                    <small>
                      {e.kicker} · {e.when}
                    </small>
                  </span>
                </li>
              ))}
            </Reveal>

            <Reveal className="hp-docs">
              <h3>Published records</h3>
              <ul>
                {RECORDS.map((r) => (
                  <li key={r.href}>
                    <a href={r.href} target="_blank" rel="noreferrer">
                      <span>
                        <b>{r.label}</b>
                        <small>{r.note}</small>
                      </span>
                      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" /></svg>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="cta-row hp-cta">
            <Link className="btn btn-primary" href="/life">See life at SAS</Link>
            <Link className="btn btn-ghost" href="/admissions">Join the next one: admissions</Link>
            {youtube && <a className="btn btn-ghost" href={youtube.href} target="_blank" rel="noreferrer">Watch on YouTube</a>}
            {instagram && <a className="btn btn-ghost" href={instagram.href} target="_blank" rel="noreferrer">Follow on Instagram</a>}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
