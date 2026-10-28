"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Tower from "./Tower";
import { Lines, Words } from "./Reveal";
import Magnetic from "./Magnetic";
import { LAYERS } from "@/lib/layers";

export const BLUEPRINT_PANELS = [
  {
    key: "foundation",
    level: 0,
    number: "01",
    years: "Years 1 & 2",
    tagline: "Grounded in Foundation",
    title: "Foundation",
    lead: "Master the Fundamentals",
    summary:
      "Rigorous grounding in mathematics, core sciences, and code—ensuring an equal baseline for every student.",
    points: [
      "Programming from Day 1",
      "Core Sciences & Problem Workshops",
      "Equal-Ground Bridge Modules",
      "Technical Communication & Literacy",
    ],
    stats: [
      { value: "Week 1", label: "Code from Day 1" },
      { value: "100%", label: "Equal Baseline" },
      { value: "46k+", label: "Library Volumes" },
    ],
    linkHref: "/departments/science-and-humanities",
    linkLabel: "Explore Science & Humanities",
  },
  {
    key: "competency",
    level: 1,
    number: "02",
    years: "Years 2 & 3",
    tagline: "Forged in Competency",
    title: "Competency",
    lead: "Build Practical Depth",
    summary:
      "Turning concepts into working capability through lab immersion, prototype builds, and industry credentials.",
    points: [
      "Lab-First Applied Pedagogy",
      "Hardware & Software Prototypes",
      "Industry-Standard Certifications",
      "High-Performance Computing Labs",
    ],
    stats: [
      { value: "12+", label: "Advanced Labs" },
      { value: "100+", label: "Working Prototypes" },
      { value: "DELNET", label: "Research Journals" },
    ],
    linkHref: "/departments",
    linkLabel: "Explore Engineering Departments",
  },
  {
    key: "exposure",
    level: 2,
    number: "03",
    years: "Years 3 & 4",
    tagline: "Expanded by Exposure",
    title: "Exposure",
    lead: "Connect with Industry",
    summary:
      "Direct immersion in corporate ecosystems with 350+ active partners, masterclasses, and campus Centres of Excellence.",
    points: [
      "350+ Active Corporate Partners",
      "Live Centres of Excellence (CoE)",
      "Practicing Engineer Mentorship",
      "Industrial Visits & Live Projects",
    ],
    stats: [
      { value: "350+", label: "Corporate Partners" },
      { value: "100+", label: "Active MoUs" },
      { value: "CoE", label: "Centres of Excellence" },
    ],
    linkHref: "/placements",
    linkLabel: "See Industry Partnerships",
  },
  {
    key: "enterprise",
    level: 3,
    number: "04",
    years: "Final Year & Beyond",
    tagline: "Realized in Enterprise",
    title: "Enterprise",
    lead: "Lead, Venture & Achieve",
    summary:
      "Launchpad for top-tier careers, startup venture incubation, and top-tier placement support.",
    points: [
      "Placement Training & Career Support",
      "On-Campus Incubation & Grants",
      "Executive & Interview Coaching",
      "12,000+ Global Alumni Network",
    ],
    stats: [
      { value: "150+", label: "Recruiters" },
      { value: "12k+", label: "Global Alumni" },
      { value: "92%", label: "Placement Rate" },
    ],
    linkHref: "/placements",
    linkLabel: "Explore Placements & Careers",
  },
];

const colorOf = Object.fromEntries(LAYERS.map((l) => [l.key, l.fill]));
const darkColorOf = Object.fromEntries(LAYERS.map((l) => [l.key, l.fillDark]));
const inkOf = Object.fromEntries(LAYERS.map((l) => [l.key, l.ink]));

export default function Story({ isStandalone = false }) {
  const [active, setActive] = useState(0);
  const [hoveredLevel, setHoveredLevel] = useState(null);

  const [isPaused, setIsPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const sectionRef = useRef(null);

  const current = BLUEPRINT_PANELS[active] || BLUEPRINT_PANELS[0];
  const activeColor = colorOf[current.key];
  const activeDarkColor = darkColorOf[current.key];
  const activeInk = inkOf[current.key];

  const goTo = useCallback((idx) => {
    if (idx >= 0 && idx < BLUEPRINT_PANELS.length) {
      setActive(idx);
    }
  }, []);

  const nextSlide = useCallback(() => {
    setActive((prev) => (prev + 1) % BLUEPRINT_PANELS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActive((prev) => (prev - 1 + BLUEPRINT_PANELS.length) % BLUEPRINT_PANELS.length);
  }, []);

  const videoRef = useRef(null);
  const towerCardRef = useRef(null);

  const handleTowerMouseMove = useCallback((e) => {
    const el = towerCardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    el.style.setProperty("--mx", x.toFixed(2));
    el.style.setProperty("--my", y.toFixed(2));
  }, []);

  const handleTowerMouseLeave = useCallback(() => {
    const el = towerCardRef.current;
    if (!el) return;
    el.style.setProperty("--mx", "0");
    el.style.setProperty("--my", "0");
  }, []);

  // The ambient video is optional: skip it for reduced motion and Save-Data, so those visitors never download it.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = navigator.connection?.saveData;
    if (!reduce && !saveData) setPlayVideo(true);
  }, []);

  // Ensure background video plays reliably across all browsers (WebKit/Safari autoplay policy)
  useEffect(() => {
    if (playVideo && videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play?.().catch(() => {
        // Autoplay may be restricted by strict battery saver mode
      });
    }
  }, [playVideo]);

  // Mild automatic loop through Foundation, Competency, Exposure, Enterprise
  useEffect(() => {
    if (isPaused || userPaused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % BLUEPRINT_PANELS.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused, userPaused, active]);

  // Sync with URL hash if provided
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      const idx = BLUEPRINT_PANELS.findIndex((p) => p.key === hash);
      if (idx !== -1) goTo(idx);
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [goTo]);

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
      const tag = e.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || e.target.isContentEditable) return;
      const box = sectionRef.current?.getBoundingClientRect();
      if (!box || box.bottom < 0 || box.top > window.innerHeight) return;
      if (e.key === "ArrowRight") nextSlide();
      else if (e.key === "ArrowLeft") prevSlide();
      else if (e.key >= "1" && e.key <= "4") goTo(Number(e.key) - 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [nextSlide, prevSlide, goTo]);

  // Tower opacities: keep all chevrons rich and vivid, with full spotlight on active
  const effectiveFocus = hoveredLevel !== null ? hoveredLevel : active;
  const opacities = [0, 1, 2, 3].map((lv) => {
    if (lv === effectiveFocus) return 1;
    return 0.85;
  });

  return (
    <section
      ref={sectionRef}
      className={`story section${isStandalone ? " is-standalone" : ""}`}
      id="layers"
      aria-label="The Sasurie Blueprint: Four Layers of Leadership"
    >
      <div id="foundation" className="sr-anchor" aria-hidden="true" />
      <div id="competency" className="sr-anchor" aria-hidden="true" />
      <div id="exposure" className="sr-anchor" aria-hidden="true" />
      <div id="enterprise" className="sr-anchor" aria-hidden="true" />

      {/* Cinematic Ambient Background Video */}
      <div className="story-video-bg" aria-hidden="true">
        {playVideo && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/sasori-poster.webp"
            className="story-video-media"
          >
            <source src="/sasori-lite.mp4" type="video/mp4" />
          </video>
        )}
        <div className="story-video-overlay" />
      </div>

      <div className="container story-container">
        {/* Header Introduction */}
        <div className="section-head story-head">
          <div className="story-head-title-group">
            <div className="story-badge-row">
              <span className="story-badge">
                <span
                  className="story-beacon"
                  aria-hidden="true"
                  style={{ background: activeColor, boxShadow: `0 0 8px ${activeColor}` }}
                />
                THE SASURIE BLUEPRINT
              </span>
              <span className="story-subtitle">Pedagogical Framework · Leadership Model</span>
            </div>
            <Lines lines={["True leaders are", "built in layers."]} />
          </div>
          <Words
            className="lede"
            delay={0.2}
            text="Look at the Sasurie mark and you will see four chevrons stacked into an arrow. That is how we teach: grounded in Foundation, forged in Competency, expanded by Exposure, and realized in Enterprise. Each layer sits on the one below, and none is skipped."
          />
        </div>

        {/* Compact, Open Interactive Stage */}
        <div
          className={`story-mild-grid${isPaused ? " is-paused" : ""}`}
          style={{
            "--active-c": activeColor,
            "--active-dark-c": activeDarkColor,
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          {/* Left Column: 3D Chevron Tower on Transparent Canvas */}
          <div className="story-tower-side">
            <div
              className="story-tower-card"
              ref={towerCardRef}
              onMouseMove={handleTowerMouseMove}
              onMouseLeave={handleTowerMouseLeave}
            >
              <div className="tower-kicker">
                <span className="kicker-dot" style={{ background: activeColor }} />
                <span>Level {current.level} · {current.title} ({current.years})</span>
              </div>

              <div className="tower-container">
                <div className="tower-backdrop-ripples" aria-hidden="true">
                  <span className="tower-ripple r1" />
                  <span className="tower-ripple r2" />
                  <span className="tower-ripple r3" />
                  <span className="tower-ripple r4" />
                </div>
                <Tower
                  opacities={opacities}
                  current={active}
                  onClick={(lv) => goTo(lv)}
                  onEnter={(lv) => setHoveredLevel(lv)}
                  onLeave={() => setHoveredLevel(null)}
                />
              </div>

              <div className="tower-stats-row">
                {current.stats.map((st) => (
                  <div key={st.label} className="tower-stat-item">
                    <strong style={{ color: activeInk }}>{st.value}</strong>
                    <span>{st.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Refined Transparent Story Card */}
          <div className="story-card-side">
            <div className="story-content-card">
              <span className="story-card-bar" style={{ background: activeColor }} aria-hidden="true" />

              {/* Segmented Layer Selector Pills */}
              <div className="story-pills-bar" role="tablist" aria-label="Explore the four layers">
                {BLUEPRINT_PANELS.map((p, i) => {
                  const isActive = i === active;
                  const c = colorOf[p.key];
                  return (
                    <button
                      key={p.key}
                      type="button"
                      role="tab"
                      id={`tab-${p.key}`}
                      aria-controls={isActive ? `panel-${p.key}` : undefined}
                      aria-selected={isActive}
                      className={`story-pill-btn${isActive ? " is-active" : ""}`}
                      onClick={() => goTo(i)}
                      style={{ "--pill-c": c }}
                    >
                      <span className="pill-dot" aria-hidden="true" style={{ background: c }} />
                      <span className="pill-text">{p.number} {p.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Layer Content */}
              <article
                key={current.key}
                id={`panel-${current.key}`}
                role="tabpanel"
                aria-labelledby={`tab-${current.key}`}
                className="story-panel-body"
              >
                <div className="panel-kicker-row">
                  <span className="panel-tag" style={{ color: activeInk }}>
                    {current.tagline}
                  </span>
                  <span className="panel-years-tag">{current.years}</span>
                </div>

                <div className="panel-title-group">
                  <h3 className="panel-heading">{current.title}</h3>
                  <p className="panel-lead-sub">{current.lead}</p>
                </div>

                <p className="panel-summary-text">{current.summary}</p>

                {/* 4 Crisp Core Pillars */}
                <div className="panel-pillars">
                  {current.points.map((pt) => (
                    <div key={pt} className="pillar-row">
                      <span className="pillar-bullet" style={{ background: activeColor }} aria-hidden="true" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Footer Action & Direct Link */}
                <div className="panel-cta-row">
                  {current.linkHref && (
                    <Magnetic>
                      <Link
                        href={current.linkHref}
                        className="btn btn-primary btn-sm"
                      >
                        {current.linkLabel} →
                      </Link>
                    </Magnetic>
                  )}
                  <button type="button" className="story-pause" onClick={() => setUserPaused((v) => !v)}>
                    {userPaused ? "Resume auto-play" : "Pause auto-play"}
                  </button>
                  <span className="story-shortcut-hint">
                    Use <kbd>←</kbd> <kbd>→</kbd> or <kbd>1-4</kbd> keys
                  </span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
