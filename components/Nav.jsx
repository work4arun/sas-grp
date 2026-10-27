"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Magnetic from "./Magnetic";
import { NAV_PRIMARY, NAV_MORE } from "@/lib/site";

const Chevron = () => (
  <svg viewBox="0 0 12 8" width="11" height="8" aria-hidden="true">
    <path d="M1.5 1.75 6 6.25l4.5-4.5" />
  </svg>
);

export default function Nav({
  links = NAV_PRIMARY,
  more = NAV_MORE,
  logoHref = "/",
  ctaHref = "/admissions",
  ctaLabel = "Apply now",
}) {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // Close the "More" panel on outside click, Escape, or navigation.
  useEffect(() => {
    if (!moreOpen) return;
    const away = (e) => moreRef.current && !moreRef.current.contains(e.target) && setMoreOpen(false);
    const esc = (e) => e.key === "Escape" && setMoreOpen(false);
    document.addEventListener("pointerdown", away);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("pointerdown", away);
      document.removeEventListener("keydown", esc);
    };
  }, [moreOpen]);

  useEffect(() => {
    setMoreOpen(false);
    setOpen(false);
  }, [pathname]);

  const isActive = (href) => pathname === href || pathname.startsWith(href + "/");
  const moreActive = more.some((l) => isActive(l.href));

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>

      <div className="container nav-row">
        <Link className="nav-logo" href={logoHref} aria-label="Sasurie Group of Institutions, home">
          <Image src="/brand/group-clear.png" alt="Sasurie Group of Institutions" width={1100} height={241} priority />
        </Link>

        <nav className="nav-links" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined}>
              {l.label}
            </Link>
          ))}

          <div
            className={`nav-more${moreOpen ? " is-open" : ""}`}
            ref={moreRef}
            onPointerEnter={(e) => e.pointerType === "mouse" && setMoreOpen(true)}
            onPointerLeave={(e) => e.pointerType === "mouse" && setMoreOpen(false)}
          >
            <button
              type="button"
              className={`nav-more-btn${moreActive ? " is-current" : ""}`}
              aria-expanded={moreOpen}
              aria-controls="nav-more-panel"
              onClick={() => setMoreOpen((v) => !v)}
            >
              More
              <Chevron />
            </button>
            <div className="nav-more-panel" id="nav-more-panel">
              <ul>
                {more.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} aria-current={isActive(l.href) ? "page" : undefined} onClick={() => setMoreOpen(false)}>
                      <b>{l.label}</b>
                      <small>{l.note}</small>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        <div className="nav-actions">
          <Magnetic>
            <Link className="btn btn-primary btn-sm" href={ctaHref}>
              {ctaLabel}
            </Link>
          </Magnetic>
          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="mobile-menu" id="mobile-menu">
        <Link href={logoHref} style={{ "--i": 0 }} onClick={() => setOpen(false)}>
          Home
        </Link>
        {links.map((l, i) => (
          <Link key={l.href} href={l.href} style={{ "--i": i + 1 }} aria-current={isActive(l.href) ? "page" : undefined} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <p className="mobile-menu-label" style={{ "--i": links.length + 1 }}>Explore SAS</p>
        <div className="mobile-menu-more" style={{ "--i": links.length + 2 }}>
          {more.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
        <Link className="btn btn-primary" href={ctaHref} style={{ "--i": links.length + 3 }} onClick={() => setOpen(false)}>
          {ctaLabel}
        </Link>
      </div>
    </header>
  );
}
