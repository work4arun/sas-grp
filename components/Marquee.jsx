"use client";

import { useEffect, useRef } from "react";

const fields = [
  "Engineering & Technology", "Arts & Science", "Management & B-School", "Pharmacy & Research",
  "Nursing & Healthcare", "Artificial Intelligence", "Computer Applications", "Commerce & Finance",
  "Education & Teacher Training",
];
const colors = ["#E01F26", "#FDB913", "#3F6BB5", "#94C93D"];

function Row({ reverse = false, outline = false, dir = 1 }) {
  const items = [...fields, ...fields];
  return (
    <div className={`marquee-row${reverse ? " is-reverse" : ""}${outline ? " is-outline" : ""}`} style={{ "--dir": dir }} aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy}>
            {items.map((f, i) => (
              <li key={`${copy}-${i}`}>
                <svg viewBox="0 0 40 28" width="40" height="28">
                  <path d="M3 24L20 5L37 24" fill="none" stroke={colors[i % 4]} strokeWidth="7" strokeLinejoin="miter" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

/** Two tickers. Scrolling pushes them sideways and skews them by scroll speed. */
export default function Marquee() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let last = window.scrollY, vel = 0, raf = 0, active = true;
    const tick = () => {
      const y = window.scrollY;
      vel = vel * 0.88 + (y - last) * 0.12;
      last = y;
      const r = el.getBoundingClientRect();
      if (r.bottom > -200 && r.top < window.innerHeight + 200) {
        el.style.setProperty("--sx", ((r.top - window.innerHeight / 2) * 0.10).toFixed(1));
        el.style.setProperty("--v", Math.max(-4, Math.min(4, vel)).toFixed(2));
      }
      if (active) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { active = false; cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="marquee" aria-label="Fields you can build in" ref={ref}>
      <Row dir={1} />
      <Row reverse outline dir={-1} />
    </section>
  );
}
