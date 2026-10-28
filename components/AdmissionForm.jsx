"use client";

import { useState } from "react";
import { ALL_GROUP_PROGRAMMES } from "@/lib/programmes";

// Every programme in the catalogue, so the form can never drift from the programmes finder.
export const PROGRAMME_OPTIONS = ALL_GROUP_PROGRAMMES.map((p) => (p.name.startsWith(p.degree) ? p.name : `${p.degree} ${p.name}`));

// Where a request goes.
const ENDPOINT = process.env.NEXT_PUBLIC_ADMISSION_ENDPOINT || "";
const WHATSAPP = process.env.NEXT_PUBLIC_ADMISSION_WHATSAPP || "919442593828";

/** The call-back form, shared by both page styles. */
export default function AdmissionForm() {
  // idle | sending | done | handoff
  const [state, setState] = useState("idle");
  const [waHref, setWaHref] = useState(`https://wa.me/${WHATSAPP}`);

  const submit = async (e) => {
    e.preventDefault();
    if (state === "sending") return;

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
      `Admission enquiry\nName: ${data.name}\nMobile: ${data.phone}\nProgramme: ${data.programme}`
    )}`;
    setWaHref(href);
    setState("sending");

    if (ENDPOINT) {
      try {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, source: "sasurie-landing" }),
        });
        if (res.ok) {
          setState("done");
          return;
        }
      } catch {
        // endpoint unreachable — hand the details to the admissions desk instead
      }
    }

    window.open(href, "_blank", "noopener");
    setState("handoff");
  };

  if (state === "done" || state === "handoff") {
    return (
      <div className="done" role="status">
        <svg viewBox="0 0 80 80" width="80" height="80" aria-hidden="true">
          <circle cx="40" cy="40" r="36" />
          <path d="M24 42L35 53L57 29" />
        </svg>
        <h3>{state === "done" ? "Request received" : "Message ready"}</h3>
        <p>
          {state === "done"
            ? "Thank you. A counsellor will call you back to talk through your options."
            : "WhatsApp has opened with your details. Press send there and the admissions desk will call you back."}
          {state === "handoff" && (
            <>
              {" "}
              <a className="to-top" href={waHref} target="_blank" rel="noreferrer">
                Open WhatsApp again
              </a>
            </>
          )}
        </p>
        <button className="btn btn-ghost" onClick={() => setState("idle")}>Send another request</button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit}>
      <h3>Request a call back</h3>
      <label className="field">
        <span>Student name</span>
        <input name="name" type="text" autoComplete="name" required placeholder="Full name" />
      </label>
      <label className="field">
        <span>Mobile number</span>
        <input name="phone" type="tel" inputMode="tel" autoComplete="tel" required pattern="[0-9+\s\-]{10,15}" placeholder="10-digit number" />
      </label>
      <label className="field">
        <span>Programme</span>
        <select name="programme" defaultValue="" required>
          <option value="" disabled>Choose a programme</option>
          {PROGRAMME_OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>
      <button className={`btn btn-primary btn-block${state === "sending" ? " is-sending" : ""}`} type="submit" disabled={state === "sending"}>
        <span className="btn-label">{state === "sending" ? "Sending" : "Request call back"}</span>
        <i className="spinner" aria-hidden="true" />
      </button>
      <p className="fine">
        By submitting, you agree that the admissions team may contact you by phone or WhatsApp about admissions. We use these
        details only for that. You can also call 94425 93828 or 94888 93333, or apply online at admissions.sasurie.com.
      </p>
    </form>
  );
}
