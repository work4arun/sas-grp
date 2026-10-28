"use client";

import { useEffect, useState } from "react";
import { TowerLayers } from "./Tower";

/** Intro: the four layers assemble, then the screen lifts away. */
export default function Loader() {
  const [phase, setPhase] = useState("build"); // build -> exit -> gone

  useEffect(() => {
    // always open on the hero, even after a refresh or a link with #section
    window.scrollTo(0, 0);
    const done = () => {
      document.documentElement.dataset.loaded = "1";
      window.dispatchEvent(new Event("sas:loaded"));
      window.scrollTo(0, 0);
    };
    let seen = false;
    try {
      seen = sessionStorage.getItem("sas-intro") === "1";
      sessionStorage.setItem("sas-intro", "1");
    } catch {}
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("gone");
      done();
      return;
    }
    document.documentElement.style.overflow = "hidden";
    const t1 = setTimeout(() => {
      setPhase("exit");
      document.documentElement.style.overflow = "";
      setTimeout(done, 350);
    }, 2100);
    const t2 = setTimeout(() => setPhase("gone"), 3300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div className={`loader${phase === "exit" ? " is-exit" : ""}`} aria-hidden="true">
      <div className="loader-inner go">
        <svg viewBox="-170 -6 340 340" className="loader-svg">
          <TowerLayers animate />
        </svg>
        <p className="loader-text">
          {"Create your future".split("").map((c, i) => (
            <span key={i} style={{ "--i": i }}>{c === " " ? " " : c}</span>
          ))}
        </p>
        <span className="loader-bar"><i /></span>
      </div>
    </div>
  );
}
