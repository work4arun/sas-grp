"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Reveal, { Lines, Words } from "./Reveal";
import { ALL_GROUP_PROGRAMMES, GOALS, PROGRAMMES } from "@/lib/programmes";
import { DEPARTMENT_BY_PROGRAMME, DEPARTMENT_BY_SLUG } from "@/lib/departments";

const ICONS = {
  all: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
  engineering: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </svg>
  ),
  "computing-arts": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  "commerce-management": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  "healthcare-education": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  pg: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
};

const DOMAIN_TABS = [
  { key: "all", short: "All Streams", color: "var(--ink)", rgb: "22, 20, 77" },
  ...GOALS.map((g) => ({
    key: g.key,
    short: g.short,
    color: g.color,
    rgb: g.rgb,
  })),
];

const ITEMS = ALL_GROUP_PROGRAMMES.map((p) => {
  const dept = p.slug ? DEPARTMENT_BY_SLUG[p.slug] : (p.short ? DEPARTMENT_BY_PROGRAMME[p.short] : null);
  const goalObj = GOALS.find((g) => g.key === p.group) || GOALS[0];
  return {
    ...p,
    slug: dept?.slug || p.slug || null,
    since: dept?.since || p.since || null,
    color: goalObj.color,
    rgb: goalObj.rgb,
    campusLabel: p.campusLabel || (p.campus === "vjm" ? "Vijayamangalam" : "Vijayamangalam & CBE"),
    yearsLabel: p.years || (p.duration ? p.duration.split("·")[0].trim() : "Degree"),
  };
});

const FOUNDATION = PROGRAMMES.find((p) => p.group === "foundation");
const FOUNDATION_DEPT = DEPARTMENT_BY_PROGRAMME[FOUNDATION?.short];

const STATS = [
  { n: "37+", label: "Programmes offered" },
  { n: "5", label: "Specialised faculties" },
  { n: "2", label: "Campuses in VJM & CBE" },
  { n: "Autonomous", label: "UGC & AU Conferred", isText: true },
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const Chevrons = () => (
  <svg className="pf-mark" viewBox="0 0 28 26" width="28" height="26" aria-hidden="true">
    <path d="M2 10L14 2L26 10" />
    <path d="M2 18L14 10L26 18" />
    <path d="M2 26L14 18L26 26" />
  </svg>
);

export default function Programmes({
  isStandalonePage = false,
  initialShowAll = false,
  headingEyebrow = "Programmes & Streams",
  headingTitle = ["Choose the programme", "that fits your goals."],
  headingLede = "Explore undergraduate and postgraduate degrees across Engineering, Computing, Arts, Commerce, Management, Healthcare and Education.",
}) {
  const [search, setSearch] = useState("");
  const [domain, setDomain] = useState("all");
  const [campus, setCampus] = useState("all");
  const [level, setLevel] = useState("all");
  const [showAll, setShowAll] = useState(initialShowAll);

  const handleDomainChange = (key) => {
    setDomain(key);
    setShowAll(false);
  };

  const filteredItems = useMemo(() => {
    const q = search.trim().toLowerCase();
    return ITEMS.filter((p) => {
      // 1. Search query
      if (q) {
        const matchName = p.name.toLowerCase().includes(q);
        const matchShort = p.short ? p.short.toLowerCase().includes(q) : false;
        const matchDegree = p.degree ? p.degree.toLowerCase().includes(q) : false;
        const matchSubcat = p.subcat ? p.subcat.toLowerCase().includes(q) : false;
        if (!matchName && !matchShort && !matchDegree && !matchSubcat) {
          return false;
        }
      }

      // 2. Academic Domain
      if (domain !== "all" && p.group !== domain) {
        return false;
      }

      // 3. Campus
      if (campus !== "all") {
        if (campus === "vjm" && p.campus !== "vjm" && p.campus !== "both") return false;
        if (campus === "cbe" && p.campus !== "cbe" && p.campus !== "both") return false;
      }

      // 4. Degree Level
      if (level !== "all") {
        if (level === "ug" && p.level !== "ug") return false;
        if (level === "pg" && p.level !== "pg") return false;
      }

      return true;
    });
  }, [search, domain, campus, level]);

  const isDefaultView = domain === "all" && !search.trim() && campus === "all" && level === "all";

  // By default, only show the 6 flagship programmes. If user chooses a filter or clicks "View all", show all matches.
  const displayedItems = useMemo(() => {
    if (isDefaultView && !showAll) {
      return filteredItems.filter((p) => p.featured);
    }
    return filteredItems;
  }, [filteredItems, isDefaultView, showAll]);

  const hasActiveFilters = Boolean(search.trim() || domain !== "all" || campus !== "all" || level !== "all");

  const handleResetFilters = () => {
    setSearch("");
    setDomain("all");
    setCampus("all");
    setLevel("all");
    setShowAll(false);
  };

  const activeTab = DOMAIN_TABS.find((t) => t.key === domain) || DOMAIN_TABS[0];

  return (
    <section className="pf section" id="programmes">
      {/* Background Subtle Ripple Lines */}
      <div className="pf-ripples" aria-hidden="true">
        <svg viewBox="-400 -60 800 280" preserveAspectRatio="none">
          {[1, 2, 3, 4, 5, 6].map((k) => {
            const apex = k * 34 - 40;
            return (
              <polyline
                key={k}
                className="ripple"
                points={`-400,${apex + 240} 0,${apex} 400,${apex + 240}`}
                style={{ "--i": k, "--o": (0.6 - k * 0.08).toFixed(2) }}
              />
            );
          })}
        </svg>
      </div>

      <div className="container">
        {/* Simple & Dignified Section Header */}
        <div className="pf-head">
          <div className="pf-title-box">
            <p className="pf-eyebrow">
              <Chevrons />
              {headingEyebrow}
            </p>
            <Lines lines={headingTitle} />
            <Words
              className="lede"
              delay={0.2}
              text={headingLede}
            />
          </div>
          <dl className="pf-stats">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.isText ? s.n : String(s.n).padStart(2, "0")}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Reveal className="pf-finder">
          {/* Stream Segmented Navigation Tabs */}
          <div className="pf-domain-nav" role="tablist" aria-label="Academic streams">
            {DOMAIN_TABS.map((tab) => {
              const count = tab.key === "all" ? ITEMS.length : ITEMS.filter((p) => p.group === tab.key).length;
              const isSelected = domain === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  className="pf-domain-tab"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleDomainChange(tab.key)}
                  style={{ "--c": tab.color, "--rgb": tab.rgb }}
                >
                  <span className="pf-domain-tab-icon" aria-hidden="true">
                    {ICONS[tab.key]}
                  </span>
                  <span className="pf-domain-tab-name">{tab.short}</span>
                  <span className="pf-domain-tab-count">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Simple, Professional Filter Toolbar */}
          <div className="pf-toolbar">
            {/* Search Input */}
            <div className="pf-search-wrap">
              <span className="pf-search-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                type="text"
                className="pf-search-input"
                placeholder="Search programmes (e.g. AI, Cyber, FinTech, MBA, Nursing)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search programmes"
              />
              {search && (
                <button type="button" className="pf-search-clear" onClick={() => setSearch("")} aria-label="Clear search">
                  ✕
                </button>
              )}
            </div>

            {/* Quick Segmented Filters */}
            <div className="pf-filter-group">
              <div className="pf-campus-toggles" role="group" aria-label="Campus filter">
                <span className="pf-filter-label">Campus:</span>
                <div className="pf-segmented">
                  <button type="button" className="pf-seg-btn" aria-pressed={campus === "all"} onClick={() => setCampus("all")}>
                    All
                  </button>
                  <button type="button" className="pf-seg-btn" aria-pressed={campus === "vjm"} onClick={() => setCampus("vjm")}>
                    Vijayamangalam
                  </button>
                  <button type="button" className="pf-seg-btn" aria-pressed={campus === "cbe"} onClick={() => setCampus("cbe")}>
                    Coimbatore
                  </button>
                </div>
              </div>

              <div className="pf-campus-toggles" role="group" aria-label="Level filter">
                <span className="pf-filter-label">Level:</span>
                <div className="pf-segmented">
                  <button type="button" className="pf-seg-btn" aria-pressed={level === "all"} onClick={() => setLevel("all")}>
                    All
                  </button>
                  <button type="button" className="pf-seg-btn" aria-pressed={level === "ug"} onClick={() => setLevel("ug")}>
                    UG
                  </button>
                  <button type="button" className="pf-seg-btn" aria-pressed={level === "pg"} onClick={() => setLevel("pg")}>
                    PG
                  </button>
                </div>
              </div>

              {hasActiveFilters && (
                <button type="button" className="pf-results-clear" onClick={handleResetFilters}>
                  Reset ✕
                </button>
              )}
            </div>
          </div>

          {/* Simple, Clean Status & Context Strip */}
          <div className="pf-status-bar">
            <div className="pf-status-info">
              <span className="pf-status-dot" style={{ background: activeTab.color }} aria-hidden="true" />
              <span>
                {isDefaultView ? (
                  showAll ? (
                    <>Showing <b>all {displayedItems.length} programmes</b> across both campuses</>
                  ) : (
                    <>Showing <b>6 flagship programmes</b> · Select any stream above or explore full catalogue</>
                  )
                ) : (
                  <>
                    Showing <b>{displayedItems.length} {displayedItems.length === 1 ? "programme" : "programmes"}</b>
                    {domain !== "all" && <> in <b>{activeTab.short}</b></>}
                    {campus !== "all" && <> at <b>{campus === "vjm" ? "Vijayamangalam" : "Coimbatore"}</b></>}
                    {level !== "all" && <> (<b>{level.toUpperCase()}</b>)</>}
                    {search.trim() && <> matching &ldquo;<b>{search.trim()}</b>&rdquo;</>}
                  </>
                )}
              </span>
            </div>

            {isDefaultView ? (
              <button
                type="button"
                className="pf-toggle-all-link"
                onClick={() => setShowAll((prev) => !prev)}
              >
                {showAll ? "Show featured only (6)" : `View all ${ITEMS.length} programmes →`}
              </button>
            ) : (
              <button type="button" className="pf-results-clear" onClick={handleResetFilters}>
                Show all streams ✕
              </button>
            )}
          </div>

          {/* Substantive, Highly Professional Course Grid */}
          {displayedItems.length > 0 ? (
            <>
              <ul className="pf-grid">
                {displayedItems.map((p, i) => {
                  const targetHref = p.slug ? `/departments/${p.slug}` : (p.href || "/admissions");
                  return (
                    <li key={p.slug || p.short || p.name} className="pf-item" style={{ "--c": p.color, "--rgb": p.rgb, "--i": i }}>
                      <article className="pf-card">
                        {/* Top Row: Degree Badge & Duration */}
                        <div className="pf-card-top">
                          <span className="pf-degree">
                            {p.degree}
                          </span>
                          <span className="pf-goal-tag">{p.yearsLabel}</span>
                        </div>

                        {/* Programme Name */}
                        <h4 className="pf-name">
                          <Link href={targetHref} className="pf-link">
                            {p.name}
                          </Link>
                        </h4>

                        {/* Bottom Row: Campus & Arrow */}
                        <div className="pf-card-foot">
                          <span className="pf-campus-tag">
                            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            {p.campusLabel}
                          </span>
                          <span className="pf-go" aria-hidden="true">
                            <Arrow />
                          </span>
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ul>

              {/* Bottom Quick-Action Toggle for Default State */}
              {isDefaultView && (
                <div className="pf-expand-row">
                  <button
                    type="button"
                    className="pf-expand-btn"
                    onClick={() => setShowAll((prev) => !prev)}
                  >
                    {showAll ? (
                      <>
                        Collapse to featured programmes (6)
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M18 15l-6-6-6 6" />
                        </svg>
                      </>
                    ) : (
                      <>
                        View all {ITEMS.length} academic programmes
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="pf-empty">
              <h4>No courses found</h4>
              <p>No programmes match your current search or filter combination.</p>
              <button type="button" className="pf-empty-reset" onClick={handleResetFilters}>
                Show all {ITEMS.length} programmes
              </button>
            </div>
          )}
        </Reveal>

        {/* Foundation & Compare CTA Row */}
        <div className="pf-foot-row">
          <Link className="pf-found" href={`/departments/${FOUNDATION_DEPT?.slug || "science-and-humanities"}`}>
            <span className="pf-found-tag">
              <Chevrons />
              First Year Foundation
            </span>
            <b>{FOUNDATION?.name || "Department of Science and Humanities"}</b>
            <span className="pf-found-text">{FOUNDATION?.line || "The common first-year academic foundation for all engineering branches across our group."}</span>
            <span className="pf-found-go" aria-hidden="true">
              <Arrow />
            </span>
          </Link>
          <div className="cta-row">
            {isStandalonePage ? (
              <>
                <Link className="btn btn-primary" href="/admissions">
                  Admissions and eligibility
                </Link>
                <Link className="btn pf-ghost" href="/placements">
                  Placements &amp; recruiters
                </Link>
              </>
            ) : (
              <>
                <Link className="btn btn-primary" href="/departments">
                  Compare all departments
                </Link>
                <Link className="btn pf-ghost" href="/admissions">
                  Admissions and eligibility
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
