import Image from "next/image";
import Link from "next/link";
import Reveal, { Lines } from "./Reveal";
import { EXPLORE_TABS } from "@/lib/site";

// "Explore SAS: Campus Life": the secondary pages as a photographic mosaic, placed straight after the
// programmes finder. Tile content is EXPLORE_TABS in lib/site.js, so the header "More" menu and this section stay in step.

// Life leads (the large tile); the rest follow the order in EXPLORE_TABS. Copy, images and links come from lib/site.js.
const KEY = { "/life": "life", "/happenings": "happenings", "/facilities": "facilities", "/disclosures": "records" };
const TILES = [...EXPLORE_TABS].sort((a, b) => (a.href === "/life" ? -1 : b.href === "/life" ? 1 : 0));

const Arrow = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

export default function Explore() {
  return (
    <section className="ex section" id="explore">
      <div className="container">
        <div className="ex-head">
          <div>
            <p className="eyebrow">Explore SAS</p>
            <Lines lines={["Campus Life"]} />
          </div>
          <p className="ex-note">Beyond the programmes: how the campus lives, what it offers and what it publishes.</p>
        </div>

        <ul className="ex-grid">
          {TILES.map((t, i) => (
            <Reveal as="li" key={t.href} className={`ex-tile ex-${KEY[t.href] || i}`} delay={i * 0.07} style={{ "--c": t.color }}>
              <Link href={t.href} className="ex-link">
                <Image
                  src={t.image}
                  alt=""
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 45vw"
                  className="ex-img"
                />
                <span className="ex-shade" aria-hidden="true" />
                <span className="ex-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="ex-body">
                  <span className="ex-kicker">{t.kicker}</span>
                  <b className="ex-title">{t.label}</b>
                  <span className="ex-text">{t.text}</span>
                </span>
                <span className="ex-go" aria-hidden="true">
                  <Arrow />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
