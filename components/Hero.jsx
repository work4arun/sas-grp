"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LAYERS } from "@/lib/layers";
import { TowerLayers } from "./Tower";
import Magnetic from "./Magnetic";
import { Lines, Words } from "./Reveal";
import { onLoaded } from "@/lib/loaded";
import { heroBoldVar } from "@/lib/heroFont";
import Facts from "./Facts";

const RIPPLES = Array.from({ length: 8 }, (_, i) => i + 1);

// Soft rays that fan up from the top edge of the logo card. x is the position along the edge (%), a the lean (deg),
// d the delay: the middle rays start first and the rest follow outward.
const RAYS = [8, 20, 32, 44, 56, 68, 80, 92].map((x, i) => ({
  x,
  a: Math.round((x - 50) * 0.85),
  c: ["var(--red)", "var(--gold)", "var(--blue)"][i % 3],
  d: (2.4 + (Math.abs(x - 50) / 42) * 1.4).toFixed(2),
}));



export default function Hero() {
  const root = useRef(null);
  const visual = useRef(null);
  const [ready, setReady] = useState(false);
  const [focus, setFocus] = useState(null);

  useEffect(() => {
    return onLoaded(() => setReady(true));
  }, []);

  const focusRef = useRef(focus);
  focusRef.current = focus;

  // Smooth fluid levitation & harmonic wave:
  // An ascending wave glides continuously up through the four layers with
  // fluid zero-gravity buoyancy, smooth mouse parallax depth, and interactive hover response.
  useEffect(() => {
    const sec = root.current;
    const vis = visual.current;
    if (!sec || !vis) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const byLevel = [];
    vis.querySelectorAll(".tw-par").forEach((el) => (byLevel[Number(el.dataset.level)] = el));

    let t = 0;
    let inView = true;
    let raf = 0;
    let last = 0;
    let targetMx = 0, targetMy = 0;
    let mx = 0, my = 0;
    let sy = 0;
    const focusLifts = [0, 0, 0, 0];

    const step = (now) => {
      const dt = Math.min(0.05, Math.max(0.001, (now - last) / 1000));
      last = now;
      t += dt;

      // Smooth damped lerp for mouse parallax
      const lerpSpeed = 1 - Math.exp(-4 * dt);
      mx += (targetMx - mx) * lerpSpeed;
      my += (targetMy - my) * lerpSpeed;

      const currentFocus = focusRef.current;

      for (let lv = 0; lv < 4; lv++) {
        // Continuous ascending harmonic wave (wave propagates from foundation lv:0 up to enterprise lv:3)
        const wave = Math.sin(t * 1.5 - lv * 0.72) * 8.5 + Math.cos(t * 0.8 - lv * 0.4) * 3.5;

        // Subtle 3D mouse parallax based on layer depth
        const depth = 1 + lv * 0.35;
        const px = mx * 10 * depth;
        const py = my * 7 * depth;

        // Interactive focus lift when hovered
        const targetLift = currentFocus === lv ? -9 : (currentFocus !== null ? 2 : 0);
        focusLifts[lv] += (targetLift - focusLifts[lv]) * (1 - Math.exp(-7 * dt));

        // Scroll separation: layers gracefully expand on scroll
        const scrollSep = (lv - 1.5) * sy * -42 * (lv === 0 ? 0.35 : 1);

        const x = px;
        const y = wave + py + focusLifts[lv] + scrollSep;

        if (byLevel[lv]) {
          byLevel[lv].style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`;
        }
      }
      raf = inView ? requestAnimationFrame(step) : 0;
    };

    const run = () => {
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(step);
      }
    };

    const onMove = (e) => {
      const rect = sec.getBoundingClientRect();
      const cx = rect.left + rect.width * 0.5;
      const cy = rect.top + rect.height * 0.5;
      targetMx = Math.max(-1, Math.min(1, (e.clientX - cx) / (rect.width * 0.5)));
      targetMy = Math.max(-1, Math.min(1, (e.clientY - cy) / (rect.height * 0.5)));
    };

    const onLeave = () => {
      targetMx = 0;
      targetMy = 0;
    };

    const onScroll = () => {
      sy = Math.max(0, Math.min(1, window.scrollY / ((sec.offsetHeight || 1) * 0.9)));
      if (inView) run();
    };

    const io = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting;
      if (inView) run();
    });
    io.observe(sec);

    sec.addEventListener("pointermove", onMove);
    sec.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    run();

    return () => {
      sec.removeEventListener("pointermove", onMove);
      sec.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const opacities = [0, 1, 2, 3].map((lv) => (focus === null || focus === lv ? 1 : 0.22));

  return (
    <section className={`hero ${heroBoldVar}`} id="top" ref={root}>
      <div className="container hero-grid">
        <div className="hero-copy">
          <Lines as="h1" className="hero-title" waitForLoad lines={["Every Self.", "A Journey of Advancement.", "A Life of Significance."]} />
          <Words
            className="lede"
            waitForLoad
            delay={0.55}
            text="At Sasurie Group of Institutions, we turn core fundamentals into thriving careers—layer by layer, right on the Coimbatore–Tiruppur–Erode corridor."
          />
          <div className={`cta-row hero-in${ready ? " go" : ""}`} style={{ "--delay": "1s" }}>
            <Magnetic>
              <a className="btn btn-primary" href="#admissions">
                Apply now
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn btn-ghost" href="#programmes">
                Explore programmes
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="hero-side">
        <div className={`hero-brand hero-in${ready ? " go" : ""}`} style={{ "--delay": "1.6s" }}>
          {RAYS.map((r, i) => (
            <span className="ray" key={i} aria-hidden="true" style={{ "--x": `${r.x}%`, "--a": `${r.a}deg`, "--c": r.c, "--d": `${r.d}s` }} />
          ))}
          <Image src="/brand/group-clear.png" alt="Sasurie Group of Institutions" width={1100} height={241} priority />
        </div>
        <div className={`hero-visual${ready ? " go" : ""}`} ref={visual}>
          <svg
            className="hero-svg"
            viewBox="-300 -300 600 640"
            role="img"
            aria-label="Four stacked layers rising like an arrow: foundation, skills and competencies, applied capability, and career direction and impact"
          >
            <defs>
              <clipPath id="ripple-clip">
                <rect x="-300" y="-300" width="600" height="294" />
              </clipPath>
            </defs>
            <g clipPath="url(#ripple-clip)" aria-hidden="true">
              {RIPPLES.map((k) => {
                const apex = -k * 44 - 6;
                return (
                  <polyline
                    key={k}
                    className="ripple"
                    points={`-300,${apex + 270} 0,${apex} 300,${apex + 270}`}
                    style={{ "--i": k, "--o": (1 - k / 9).toFixed(2) }}
                  />
                );
              })}
            </g>
            <TowerLayers
              animate
              opacities={opacities}
              onEnter={setFocus}
              onLeave={() => setFocus(null)}
            />
          </svg>

          <ul className="hero-labels">
            {LAYERS.map((l) => (
              <li
                key={l.key}
                style={{
                  left: `${((l.anchor.x + 16 + 300) / 600) * 100}%`,
                  top: `${((l.anchor.y + 300) / 640) * 100}%`,
                  "--c": l.fill,
                  "--i": 3 - l.level,
                }}
              >
                <a
                  href={`#${l.key}`}
                  onMouseEnter={() => setFocus(l.level)}
                  onMouseLeave={() => setFocus(null)}
                  onFocus={() => setFocus(l.level)}
                  onBlur={() => setFocus(null)}
                >
                  <i aria-hidden="true" />
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`hero-blueprint-quote hero-in${ready ? " go" : ""}`}
          style={{ "--delay": "1.65s" }}
        >
          <div className="hero-blueprint-eyebrow">
            <span className="hero-blueprint-dot" aria-hidden="true" />
            <span>The Sasurie Blueprint</span>
          </div>
          <p className="hero-blueprint-statement">
            “True leaders are built in layers: grounded in{" "}
            <a
              href="#foundation"
              className={`blueprint-term term-foundation${focus === 0 ? " is-focused" : ""}`}
              onMouseEnter={() => setFocus(0)}
              onMouseLeave={() => setFocus(null)}
              onFocus={() => setFocus(0)}
              onBlur={() => setFocus(null)}
            >
              Foundation
            </a>
            , forged in{" "}
            <a
              href="#competency"
              className={`blueprint-term term-competency${focus === 1 ? " is-focused" : ""}`}
              onMouseEnter={() => setFocus(1)}
              onMouseLeave={() => setFocus(null)}
              onFocus={() => setFocus(1)}
              onBlur={() => setFocus(null)}
            >
              Skills &amp; Competencies
            </a>
            , expanded by{" "}
            <a
              href="#exposure"
              className={`blueprint-term term-exposure${focus === 2 ? " is-focused" : ""}`}
              onMouseEnter={() => setFocus(2)}
              onMouseLeave={() => setFocus(null)}
              onFocus={() => setFocus(2)}
              onBlur={() => setFocus(null)}
            >
              Applied Capability
            </a>
            , and realized in{" "}
            <a
              href="#enterprise"
              className={`blueprint-term term-enterprise${focus === 3 ? " is-focused" : ""}`}
              onMouseEnter={() => setFocus(3)}
              onMouseLeave={() => setFocus(null)}
              onFocus={() => setFocus(3)}
              onBlur={() => setFocus(null)}
            >
              Career Direction &amp; Impact
            </a>
            .”
          </p>
          <a
            href="#layers"
            className="hero-blueprint-explore"
            aria-label="Explore the Blueprint below"
          >
            <span>Explore the Blueprint</span>
            <svg
              viewBox="0 0 16 16"
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M8 2.5v11M3.5 9l4.5 4.5 4.5-4.5" />
            </svg>
          </a>
        </div>

        </div>

        <ul className="legend">
          {LAYERS.map((l) => (
            <li key={l.key} style={{ "--c": l.fill }}>
              <a href={`#${l.key}`}>{l.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <Facts ready={ready} />
    </section>
  );
}
