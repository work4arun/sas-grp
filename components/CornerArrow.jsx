"use client";

import { useEffect, useRef, useState } from "react";
import { TowerLayers } from "./Tower";

// A small copy of the hero arrow, fixed to the bottom right once the hero has scrolled away. It runs the same
// climb (a hop travelling up the four layers) and links back to the top. It hides again over the footer base.
export default function CornerArrow() {
  const root = useRef(null);
  const [away, setAway] = useState(false);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const end = document.querySelector(".footer-base");
    const ios = [];
    if (hero) {
      const io = new IntersectionObserver(([e]) => setAway(e.intersectionRatio < 0.25), { threshold: [0, 0.1, 0.25, 0.4, 0.6] });
      io.observe(hero);
      ios.push(io);
    }
    if (end) {
      const io = new IntersectionObserver(([e]) => setAtEnd(e.isIntersecting), { threshold: 0 });
      io.observe(end);
      ios.push(io);
    }
    return () => ios.forEach((io) => io.disconnect());
  }, []);

  const on = away && !atEnd;

  // same spring-and-hop as the hero, without the cursor and scroll effects; the loop only runs while the arrow shows
  useEffect(() => {
    const el = root.current;
    if (!el || !on) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const byLevel = [];
    el.querySelectorAll(".tw-par").forEach((n) => (byLevel[Number(n.dataset.level)] = n));
    const K = 80, Z = 0.55, C = 2 * Z * Math.sqrt(K);
    const st = [0, 1, 2, 3].map(() => ({ y: 0, vy: 0, s: 1, vs: 0 }));
    let t = 0, raf = 0, last = performance.now();
    const step = (now) => {
      const dt = Math.min(0.033, (now - last) / 1000);
      last = now;
      t += dt;
      const n = Math.max(1, Math.ceil(dt / (1 / 120)));
      const h = dt / n;
      for (let lv = 0; lv < 4; lv++) {
        const q = st[lv];
        const p = (((t / 4.8 - lv * 0.16) % 1) + 1) % 1;
        const bump = p < 0.45 ? Math.sin((Math.PI * p) / 0.45) ** 2 : 0;
        const ty = -30 * bump;
        const ts = 1 + 0.05 * bump - Math.min(0.06, Math.abs(q.vy) * 0.0004) * (lv === 0 ? 0.2 : 1);
        for (let i = 0; i < n; i++) {
          q.vy += (-K * (q.y - ty) - C * q.vy) * h;
          q.y += q.vy * h;
          q.vs += (-90 * (q.s - ts) - 2 * 0.3 * Math.sqrt(90) * q.vs) * h;
          q.s += q.vs * h;
        }
        if (byLevel[lv]) byLevel[lv].style.transform = `translate(0px, ${q.y.toFixed(2)}px) scale(${(2 - q.s).toFixed(4)}, ${q.s.toFixed(4)})`;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [on]);

  return (
    <a ref={root} href="#top" className={`corner-arrow${on ? " is-on" : ""}`} aria-label="Back to the top" tabIndex={on ? 0 : -1}>
      <svg className="corner-svg" viewBox="-175 -45 350 310" aria-hidden="true">
        <TowerLayers />
      </svg>
    </a>
  );
}
