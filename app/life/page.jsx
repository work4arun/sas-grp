import Image from "next/image";
import PageShell from "@/components/PageShell";
import LifeGallery from "@/components/LifeGallery";
import VideoReel from "@/components/VideoReel";
import Reveal, { Lines, Words } from "@/components/Reveal";
import { DAY, VIDEO } from "@/lib/life";

export const metadata = {
  title: "Life at SAS | Sasurie Group of Institutions",
  description:
    "What student life across Sasurie Group of Institutions looks like: photographs and video of the campuses, classrooms and labs, festivals, sports, hostels and transport fleet.",
  alternates: { canonical: "/life" },
};

export default function LifePage() {
  return (
    <PageShell>
      <section className="lf-intro">
        <div className="container lf-intro-grid">
          <div>
            <Lines lines={["Life", "at SAS."]} />
            <Words
              className="lede"
              delay={0.2}
              text="Education thrives both inside and outside the lecture hall. These are the places and people you spend your journey with: state-of-the-art labs, libraries, sports grounds, modern hostels and connected transport."
            />
            <div className="cta-row">
              <a className="btn btn-primary" href="#gallery">Browse the photographs</a>
              <a className="btn btn-ghost" href="#video">Watch the videos</a>
            </div>
          </div>
          <div className="lf-collage" aria-hidden="true">
            <Image src="/life/life-notebooks.webp" alt="" width={1600} height={901} sizes="(max-width: 1000px) 60vw, 28vw" priority />
            <Image src="/life/sports-team.webp" alt="" width={709} height={473} sizes="20vw" />
            <Image src="/life/campus-avenue.webp" alt="" width={1600} height={901} sizes="24vw" />
          </div>
        </div>
      </section>

      <section className="lf-day">
        <div className="container">
          <div className="section-head">
            <Lines lines={["A day, in", "six places."]} />
            <Words
              className="lede"
              delay={0.2}
              text="From the first morning bus to the evening bells, explore vibrant campus life across Sasurie Group of Institutions."
            />
          </div>
          <ol className="lf-day-grid">
            {DAY.map((d, i) => (
              <Reveal as="li" key={d.n} delay={(i % 3) * 0.08} className="lf-step">
                <div className="lf-step-img">
                  <Image src={d.image} alt={d.alt} fill sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 30vw" />
                  <span>{d.n}</span>
                </div>
                <h3>{d.place}</h3>
                <p>{d.text}</p>
              </Reveal>
            ))}
          </ol>
          <div className="cta-row">
            <a className="btn btn-ghost" href="/facilities">All facilities</a>
          </div>
        </div>
      </section>

      <section className="lf-gallery" id="gallery">
        <div className="container">
          <div className="section-head">
            <Lines lines={["The gallery."]} />
            <Words className="lede" delay={0.2} text="Photographs from the college's own gallery. Choose a theme, then open any picture to see it larger." />
          </div>
          <LifeGallery />
        </div>
      </section>

      <section className="lf-video" id="video">
        <div className="container lf-video-grid">
          <div className="lf-video-copy">
            <Lines lines={["See it", "in motion."]} />
            <Words
              className="lede"
              delay={0.2}
              text="Photographs only go so far. Press play for the latest videos from the Sasurie Institutions channel: events, celebrations and campus days."
            />
            <p className="lf-fine">The player loads from YouTube only when you press play.</p>
            <div className="cta-row">
              {VIDEO.channel && <a className="btn btn-primary" href={VIDEO.channel} target="_blank" rel="noreferrer">Open the channel on YouTube</a>}
              {VIDEO.instagram && <a className="btn btn-ghost" href={VIDEO.instagram} target="_blank" rel="noreferrer">Follow on Instagram</a>}
            </div>
          </div>
          <Reveal variant="scale">
            <VideoReel />
          </Reveal>
        </div>
      </section>

      <section className="section lf-end">
        <div className="container">
          <div className="lf-end-panel">
            <div>
              <h2>Come and see it for yourself.</h2>
              <p>The campus is on the Coimbatore Bypass (NH544) at Vijayamangalam, Tiruppur district. Call the admissions desk to arrange a visit.</p>
            </div>
            <div className="cta-row">
              <a className="btn btn-primary" href="/contact">Plan a visit</a>
              <a className="btn pf-ghost" href="/happenings">Happenings at SAS</a>
              <a className="btn pf-ghost" href="/admissions">Admissions</a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
