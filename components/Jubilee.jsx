"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LAYERS, TOWER_BOX } from "@/lib/layers";
import { SITE_URL } from "@/lib/siteUrl";
import s from "./Jubilee.module.css";

/* ------------------------------------------------------------------ *
 *  Edit the wording here. Nothing else on the page needs to change.   *
 * ------------------------------------------------------------------ */
const CONFIG = {
  since: 2001,
  years: 25,
  now: 2026,
  eyebrow: "Sasurie Group of Institutions",
  title: "Silver Jubilee",
  tagline: "25 years of creating futures",
  launchLabel: "Launch",
  launchHint: "Press to launch the new website",
  storyLine: "Self · Advancement · Success with Significance",
  selfLabel: "Self",
  selfLine: "No title. No profession. No achievement. Only identity, potential and a future waiting to be shaped.",
  towerTitle: ["Every", "Self.", "A", "journey", "of", "Advancement."],
  sigLabel: "Success with Significance",
  sigLine: "Success is what we achieve for ourselves. Significance is the value we create for others.",
  finaleLead: "From Self, through Advancement, to Success with Significance",
  finaleSub: "SAS Group of Institutions · Create Your Future",
  finaleChips: [
    { k: "S", n: "Self", c: "#d5dbea" },
    { k: "A", n: "Advancement", c: "#fdb913" },
    { k: "S", n: "Success with Significance", c: "#d5dbea" },
  ],
  landAfterMs: 9500, // time on the finale before landing on the home page
};

const HOST = (() => {
  try {
    return new URL(SITE_URL).host;
  } catch {
    return "sasurie.com";
  }
})();

const COUNT_MS = 5600;
const SELF_MS = 5200;
const TOWER_MS = 7400;
const SIG_MS = 5200;
const MID_STAGES = ["count", "self", "tower", "sig"];
// the four colours of the A, bottom (level 0) → top (level 3)
const NAMES = [
  { n: "Foundation", d: "Values, fundamentals, confidence" },
  { n: "Skills & Competencies", d: "Knowledge becomes practical skill" },
  { n: "Applied Capability", d: "Real projects and evidence" },
  { n: "Career Direction & Impact", d: "Careers, enterprise, purpose" },
];

/* ============================ canvas engine ============================ */
function createEngine(canvas) {
  const ctx = canvas.getContext("2d");
  const COLORS = ["#fdb913", "#e01f26", "#5b8de0", "#94c93d", "#ffffff", "#d5dbea"];
  const stars = [];
  const rockets = [];
  const sparks = [];
  const confetti = [];
  let w = 0, h = 0, dpr = 1, raf = 0, last = 0, t = 0;
  let party = 0; // seconds of heavy fireworks left
  let nextRocket = 1.2;
  let alive = true;
  const rand = (a, b) => a + Math.random() * (b - a);

  const newStar = () => ({
    x: Math.random() * w, y: Math.random() * h, r: rand(0.4, 1.7),
    vy: rand(2, 9), ph: Math.random() * 6.28, sp: rand(0.8, 2.4),
  });
  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(130, (w * h) / 9500));
    while (stars.length < n) stars.push(newStar());
    stars.length = n;
  };

  function launch(x) {
    const g = 380;
    const ty = h * rand(0.12, 0.45);
    rockets.push({
      x: x ?? rand(w * 0.12, w * 0.88), y: h + 8, vx: rand(-25, 25),
      vy: -Math.sqrt(2 * g * (h - ty)), g, trail: [],
      colors: [COLORS[(Math.random() * 4) | 0], COLORS[4 + ((Math.random() * 2) | 0)]],
    });
  }
  function explode(r) {
    const n = Math.round(rand(60, 96));
    const speed = rand(110, 270);
    const ring = Math.random() < 0.35;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * 6.283 + rand(-0.05, 0.05);
      const v = ring ? speed : speed * rand(0.25, 1);
      sparks.push({
        x: r.x, y: r.y, px: r.x, py: r.y, vx: Math.cos(a) * v, vy: Math.sin(a) * v,
        life: rand(1.0, 1.8), age: 0, c: r.colors[i % 2], w: rand(1.2, 2.4),
      });
    }
    if (sparks.length > 1800) sparks.splice(0, sparks.length - 1800);
  }
  function burstConfetti() {
    const cols = ["#fdb913", "#e01f26", "#3f6bb5", "#94c93d", "#ffffff", "#c9d0de"];
    const add = (x, y, vx, vy) =>
      confetti.push({
        x, y, vx, vy, rot: rand(0, 6.28), vr: rand(-9, 9), cw: rand(5, 10), ch: rand(3, 6),
        c: cols[(Math.random() * cols.length) | 0], ph: rand(0, 6.28), sw: rand(30, 70),
      });
    for (let i = 0; i < 170; i++) add(rand(0, w), rand(-h * 0.25, -10), rand(-30, 30), rand(60, 240));
    for (let i = 0; i < 80; i++) {
      add(0, h * 0.95, rand(160, 520), -rand(520, 980));
      add(w, h * 0.95, -rand(160, 520), -rand(520, 980));
    }
    if (confetti.length > 520) confetti.splice(0, confetti.length - 520);
  }

  function frame(now) {
    if (!alive) return;
    const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
    last = now; t += dt;
    ctx.clearRect(0, 0, w, h);

    // stars
    ctx.globalCompositeOperation = "lighter";
    for (const st of stars) {
      st.y -= st.vy * dt;
      if (st.y < -4) { st.y = h + 4; st.x = Math.random() * w; }
      const a = 0.25 + 0.55 * (0.5 + 0.5 * Math.sin(t * st.sp + st.ph));
      ctx.fillStyle = `rgba(226,232,246,${a})`;
      ctx.beginPath(); ctx.arc(st.x, st.y, st.r, 0, 6.283); ctx.fill();
    }

    // fireworks scheduling
    if (party > 0) party -= dt;
    nextRocket -= dt;
    if (nextRocket <= 0 && (party > 0 || h > 0 && engineMode.ambient)) {
      launch();
      if (party > 0 && Math.random() < 0.45) launch();
      nextRocket = party > 0 ? rand(0.18, 0.5) : rand(1.4, 2.6);
    }

    // rockets
    for (let i = rockets.length - 1; i >= 0; i--) {
      const r = rockets[i];
      r.vy += r.g * dt; r.x += r.vx * dt; r.y += r.vy * dt;
      r.trail.push(r.x, r.y); if (r.trail.length > 18) r.trail.splice(0, 2);
      ctx.strokeStyle = "rgba(255,236,190,.85)"; ctx.lineWidth = 2; ctx.lineCap = "round";
      ctx.beginPath();
      for (let k = 0; k < r.trail.length; k += 2) k ? ctx.lineTo(r.trail[k], r.trail[k + 1]) : ctx.moveTo(r.trail[k], r.trail[k + 1]);
      ctx.stroke();
      if (r.vy >= -35) { explode(r); rockets.splice(i, 1); }
    }
    // sparks
    for (let i = sparks.length - 1; i >= 0; i--) {
      const p = sparks[i];
      p.age += dt;
      if (p.age >= p.life) { sparks.splice(i, 1); continue; }
      p.px = p.x; p.py = p.y;
      p.vx *= 1 - 1.6 * dt; p.vy = p.vy * (1 - 1.6 * dt) + 150 * dt;
      p.x += p.vx * dt; p.y += p.vy * dt;
      const a = 1 - p.age / p.life;
      ctx.globalAlpha = a * a; ctx.strokeStyle = p.c; ctx.lineWidth = p.w;
      ctx.beginPath(); ctx.moveTo(p.px, p.py); ctx.lineTo(p.x, p.y); ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // confetti
    ctx.globalCompositeOperation = "source-over";
    for (let i = confetti.length - 1; i >= 0; i--) {
      const c = confetti[i];
      c.vy += 520 * dt; c.vx *= 1 - 0.9 * dt; c.vy *= 1 - 1.15 * dt;
      c.x += (c.vx + Math.sin(t * 2 + c.ph) * c.sw) * dt; c.y += c.vy * dt; c.rot += c.vr * dt;
      if (c.y > h + 30) { confetti.splice(i, 1); continue; }
      ctx.save(); ctx.translate(c.x, c.y); ctx.rotate(c.rot);
      ctx.scale(1, Math.cos(t * 6 + c.ph));
      ctx.fillStyle = c.c; ctx.fillRect(-c.cw / 2, -c.ch / 2, c.cw, c.ch); ctx.restore();
    }
    raf = requestAnimationFrame(frame);
  }

  const engineMode = { ambient: false };
  const onVis = () => {
    cancelAnimationFrame(raf);
    if (!document.hidden && alive) { last = performance.now(); raf = requestAnimationFrame(frame); }
  };
  resize();
  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", onVis);
  last = performance.now();
  raf = requestAnimationFrame(frame);

  return {
    salvo(n = 3) { for (let i = 0; i < n; i++) setTimeout(() => alive && launch(), i * 220); },
    finale() { engineMode.ambient = true; party = 12; nextRocket = 0; burstConfetti(); },
    reset() { rockets.length = sparks.length = confetti.length = 0; party = 0; engineMode.ambient = false; },
    destroy() {
      alive = false; cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    },
  };
}

/* ============================ small parts ============================ */
function YearRoll() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const from = CONFIG.since, to = CONFIG.now, ms = 2400;
    const t0 = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / ms);
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(from + (to - from) * e));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return <span ref={ref}>{CONFIG.since}</span>;
}

const TICKS = Array.from({ length: CONFIG.years }, (_, i) => i);

function Letters({ text }) {
  return (
    <span className={s.lwrap} aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <span key={i} aria-hidden="true" className={`${s.ltr} ${s.silverBg}`} style={{ "--i": i }}>
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  );
}

function TowerMark({ uid = "jSheen", label = "The four colours of the SAS A" }) {
  const { x, y, w, h } = TOWER_BOX;
  return (
    <svg className={s.tower} viewBox={`${x} ${y} ${w} ${h}`} role="img" aria-label={label}>
      {LAYERS.slice().reverse().map((l, k) => (
        <g key={l.key} className={s.layer} style={{ "--k": k, "--c": l.fill }}>
          <path d={l.right} fill={l.fill} />
          <path d={l.left} fill={l.fill} />
          <path d={l.right} fill={`url(#${uid})`} />
          <path d={l.left} fill={`url(#${uid})`} />
        </g>
      ))}
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".38" />
          <stop offset=".5" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".18" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ================================ page ================================ */
export default function Jubilee() {
  const router = useRouter();
  const [stage, setStage] = useState("intro"); // intro → count → self → tower → sig → finale
  const [prev, setPrev] = useState(null);
  const [open, setOpen] = useState(false); // curtains
  const [run, setRun] = useState(0);
  const [idle, setIdle] = useState(false);
  const [reduced, setReduced] = useState(false);
  const stageRef = useRef("intro");
  const canvasRef = useRef(null);
  const engine = useRef(null);
  const timers = useRef([]);
  const prevT = useRef(null);
  const launchBtn = useRef(null);

  const later = (fn, ms) => { const id = setTimeout(fn, ms); timers.current.push(id); return id; };
  const clearTimers = () => { timers.current.forEach(clearTimeout); timers.current = []; };

  const go = useCallback((next) => {
    setPrev(stageRef.current);
    stageRef.current = next;
    setStage(next);
    clearTimeout(prevT.current);
    prevT.current = setTimeout(() => setPrev(null), 900);
  }, []);

  const land = useCallback(() => {
    clearTimers();
    router.push("/");
  }, [router]);

  const launch = useCallback(() => {
    if (stageRef.current !== "intro") return;
    if (reduced) { router.push("/"); return; }
    setRun((n) => n + 1);
    setOpen(true);
    engine.current?.salvo(3);
    let at = 500;
    MID_STAGES.forEach((st, i) => {
      later(() => go(st), at);
      at += [COUNT_MS, SELF_MS, TOWER_MS, SIG_MS][i];
    });
    later(() => { go("finale"); engine.current?.finale(); }, at);
    later(land, at + CONFIG.landAfterMs);
  }, [go, land, reduced, router]);

  const skip = useCallback(() => {
    const st = stageRef.current;
    if (MID_STAGES.includes(st)) {
      clearTimers();
      go("finale"); engine.current?.finale();
      later(land, CONFIG.landAfterMs);
    }
  }, [go, land]);

  const replay = useCallback(() => {
    clearTimers();
    engine.current?.reset();
    setOpen(false); setPrev(null);
    stageRef.current = "intro"; setStage("intro");
    setRun((n) => n + 1);
  }, []);

  const toggleFs = useCallback(() => {
    try {
      if (document.fullscreenElement) document.exitFullscreen();
      else document.documentElement.requestFullscreen?.();
    } catch {}
  }, []);

  // setup / teardown
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    document.documentElement.style.overflow = "hidden";
    try { router.prefetch("/"); } catch {}
    if (!mq.matches && canvasRef.current) engine.current = createEngine(canvasRef.current);
    launchBtn.current?.focus({ preventScroll: true });
    return () => {
      document.documentElement.style.overflow = "";
      engine.current?.destroy();
      clearTimers();
      clearTimeout(prevT.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key;
      if (k === "f" || k === "F") { toggleFs(); return; }
      if (k === "r" || k === "R") { replay(); return; }
      if (k === "ArrowRight" || k === "n" || k === "N") { skip(); return; }
      if ((k === " " || k === "Enter") && stageRef.current === "intro" && e.target === document.body) {
        e.preventDefault(); launch();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [launch, replay, skip, toggleFs]);

  // auto-hide controls
  useEffect(() => {
    let id;
    const wake = () => { setIdle(false); clearTimeout(id); id = setTimeout(() => setIdle(true), 3200); };
    wake();
    window.addEventListener("mousemove", wake);
    window.addEventListener("touchstart", wake, { passive: true });
    return () => { clearTimeout(id); window.removeEventListener("mousemove", wake); window.removeEventListener("touchstart", wake); };
  }, []);

  // focus the Enter link on the finale
  const enterRef = useRef(null);
  useEffect(() => { if (stage === "finale") enterRef.current?.focus({ preventScroll: true }); }, [stage]);

  const show = (n) => stage === n || prev === n;
  const on = (n) => (stage === n ? "true" : "false");

  return (
    <div className={s.root} data-stage={stage} data-open={open ? "true" : "false"}>
      <div className={s.rays} aria-hidden="true" />
      <div className={s.vignette} aria-hidden="true" />

      {/* ---------- 25 years ---------- */}
      <section className={s.scene} data-on={on("count")} aria-hidden={stage !== "count"}>
        {show("count") && (
          <div className={s.countWrap} key={`c${run}`}>
            <div className={s.dial}>
              <svg viewBox="0 0 400 400" className={s.dialSvg} aria-hidden="true">
                <defs>
                  <linearGradient id="jRing" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#f4f6fb" /><stop offset=".5" stopColor="#8f9ab3" /><stop offset="1" stopColor="#fdb913" />
                  </linearGradient>
                </defs>
                <circle className={s.ringDraw} cx="200" cy="200" r="168" fill="none" stroke="url(#jRing)" strokeWidth="3" />
                <circle className={s.ringDash} cx="200" cy="200" r="186" fill="none" stroke="rgba(214,221,237,.5)" strokeWidth="1.5" strokeDasharray="2 10" />
                {TICKS.map((i) => (
                  <line key={i} className={s.tick} x1="200" y1="6" x2="200" y2="22" stroke={i === 0 ? "#fdb913" : "#dfe5f2"} strokeWidth="3" strokeLinecap="round"
                    transform={`rotate(${(i * 360) / CONFIG.years} 200 200)`} style={{ "--i": i }} />
                ))}
              </svg>
              <span className={s.pulse} style={{ "--d": "2.8s" }} />
              <span className={s.pulse} style={{ "--d": "3.15s" }} />
              <span className={s.pulse} style={{ "--d": "3.5s" }} />
              <div className={s.since}>Since</div>
              <div className={s.year}><YearRoll /></div>
              <div className={s.n25}><span className={s.silver}>{CONFIG.years}</span></div>
              <div className={s.nLabel}>Years</div>
            </div>
            <h2 className={s.jubTitle}><Letters text={CONFIG.title.toUpperCase()} /></h2>
            <p className={s.jubSub}>{CONFIG.tagline}</p>
          </div>
        )}
      </section>

      {/* ---------- S : Self ---------- */}
      <section className={s.scene} data-on={on("self")} aria-hidden={stage !== "self"}>
        {show("self") && (
          <div className={s.storyWrap} key={`s${run}`}>
            <div className={s.bigS} aria-hidden="true"><Letters text="S" /></div>
            <p className={s.sLabel}>{CONFIG.selfLabel}</p>
            <p className={s.sLine}>{CONFIG.selfLine}</p>
          </div>
        )}
      </section>

      {/* ---------- A : Advancement (the four colours) ---------- */}
      <section className={s.scene} data-on={on("tower")} aria-hidden={stage !== "tower"}>
        {show("tower") && (
          <div className={s.towerWrap} key={`t${run}`}>
            <h2 className={s.towerTitle}>
              {CONFIG.towerTitle.map((w, i) => (
                <span key={i} className={s.word} style={{ "--i": i }}>{w}</span>
              ))}
            </h2>
            <div className={s.towerRow}>
              <div className={s.towerBox}>
                <span className={s.halo} aria-hidden="true" />
                <TowerMark />
              </div>
              <ol className={s.names}>
                {NAMES.map((it, lvl) => ({ ...it, lvl })).reverse().map(({ n, d, lvl }) => (
                  <li key={n} className={s.nameItem} style={{ "--k": lvl, "--c": LAYERS.find((l) => l.level === lvl).fill }}>
                    <span className={s.nameNo}>{String(lvl + 1).padStart(2, "0")}</span>
                    <span className={s.nameDot} />
                    <span className={s.nameCol}>
                      <span className={s.nameTxt}>{n}</span>
                      <span className={s.nameSub}>{d}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </section>

      {/* ---------- S : Success with Significance ---------- */}
      <section className={s.scene} data-on={on("sig")} aria-hidden={stage !== "sig"}>
        {show("sig") && (
          <div className={s.storyWrap} key={`g${run}`}>
            <div className={s.bigS} aria-hidden="true"><Letters text="S" /></div>
            <p className={s.sLabel}>{CONFIG.sigLabel}</p>
            <p className={s.sLine}>{CONFIG.sigLine}</p>
          </div>
        )}
      </section>

      {/* ---------- finale ---------- */}
      <section className={s.scene} data-on={on("finale")} data-live={stage === "finale" ? "true" : "false"} aria-hidden={stage !== "finale"}>
        {show("finale") && (
          <div className={s.finale} key={`f${run}`}>
            <span className={s.shock} /><span className={s.shock} style={{ "--d": ".25s" }} /><span className={s.shock} style={{ "--d": ".5s" }} />
            <div className={s.urlbar} style={{ "--n": HOST.length }}>
              <span className={s.lock} aria-hidden="true" />
              <span className={s.urlTxt}>{HOST}</span>
              <span className={s.live}><i /> Now live</span>
            </div>
            <p className={s.fLead}>{CONFIG.finaleLead}</p>
            <h2 className={s.fBrand} aria-label="SAS">
              <span className={s.fMark} aria-hidden="true">
                <span style={{ "--base": "1.2s" }}><Letters text="S" /></span>
                <span className={s.fA}><TowerMark uid="jSheenF" label="" /></span>
                <span style={{ "--base": "3.3s" }}><Letters text="S" /></span>
              </span>
            </h2>
            <p className={s.fSub}>{CONFIG.finaleSub}</p>
            <div className={s.chips}>
              {CONFIG.finaleChips.map((c, i) => (
                <span key={i} className={s.chip} style={{ "--k": i, "--c": c.c }}><b>{c.k}</b> {c.n}</span>
              ))}
            </div>
            <Link href="/" ref={enterRef} className={s.enter} onClick={() => clearTimers()}>
              <span>Enter the website</span>
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <div className={s.landBar} aria-hidden="true"><i style={{ animationDuration: `${CONFIG.landAfterMs - 5400}ms`, animationDelay: "5.4s" }} /></div>
          </div>
        )}
      </section>

      <canvas ref={canvasRef} className={s.canvas} aria-hidden="true" />

      {/* ---------- curtains + launch ---------- */}
      <div className={s.curtains} aria-hidden="true">
        <div className={`${s.curtain} ${s.left}`} />
        <div className={`${s.curtain} ${s.right}`} />
      </div>

      <section className={s.intro} data-on={on("intro")} aria-hidden={stage !== "intro"}>
        <p className={s.iEyebrow}>{CONFIG.eyebrow}</p>
        <h1 className={s.iTitle}><Letters text={CONFIG.title.toUpperCase()} /></h1>
        <p className={s.iSub}>{CONFIG.since} — {CONFIG.now} · {CONFIG.tagline}</p>
        <p className={s.iStory}>{CONFIG.storyLine}</p>
        <button ref={launchBtn} type="button" className={s.launch} onClick={launch} disabled={stage !== "intro"}>
          <span className={s.launchRing} aria-hidden="true" />
          <span className={s.launchRing} aria-hidden="true" style={{ "--d": "1.2s" }} />
          <span className={s.launchCore}>
            <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true"><path d="M12 3c3 2.4 4.6 5.6 4.6 9.2L12 17l-4.6-4.8C7.4 8.6 9 5.4 12 3z M7.4 14.5 5 19l4-1.5 M16.6 14.5 19 19l-4-1.5 M12 17v4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span>{CONFIG.launchLabel}</span>
          </span>
        </button>
        <p className={s.iHint}>{CONFIG.launchHint}</p>
      </section>

      <div className={s.flash} key={`fl${run}`} data-go={open ? "true" : "false"} aria-hidden="true" />

      {/* ---------- presenter controls ---------- */}
      <div className={s.controls} data-idle={idle ? "true" : "false"}>
        {MID_STAGES.includes(stage) && (
          <button type="button" onClick={skip} className={s.ctl} aria-label="Skip to finale">Skip →</button>
        )}
        <button type="button" onClick={toggleFs} className={s.ctl} aria-label="Toggle full screen (F)">⛶</button>
        <button type="button" onClick={replay} className={s.ctl} aria-label="Replay (R)">↻</button>
      </div>
    </div>
  );
}
