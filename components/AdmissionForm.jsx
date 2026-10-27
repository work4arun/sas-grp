"use client";

import { useState } from "react";

// Every programme across the Sasurie Group of Institutions (sasurie.com)
export const PROGRAMME_OPTIONS = [
  "B.E. Computer Science and Engineering",
  "B.Tech. Artificial Intelligence and Data Science",
  "B.E. CSE (Cyber Security)",
  "B.Tech. Information Technology",
  "B.E. Electronics and Communication Engineering",
  "B.E. Electrical and Electronics Engineering",
  "B.E. Mechanical Engineering",
  "B.E. Civil Engineering",
  "B.Sc. Computer Science (AI & DS) with IBM",
  "B.Sc. Artificial Intelligence & Machine Learning",
  "B.Sc. Costume Design and Fashion (CDF)",
  "B.Sc. Visual Communication (VisCom)",
  "BCA (Data Science & AI / Cloud Computing)",
  "B.Com (Finance / Accounting / CA / PA / Fintech)",
  "BBA (Aviation & AI / Logistics & Supply Chain)",
  "B.Pharm (Bachelor of Pharmacy)",
  "B.Sc. Nursing",
  "B.Ed. (Bachelor of Education)",
  "M.E. Computer Science and Engineering",
  "MBA (Digital Marketing / Logistics / Aviation / Finance / HR)",
  "M.Sc. Computer Science / Mathematics",
];

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
        We use these details only to contact you about admissions. You can also call 94425 93828
        or 94888 93333, or apply online at edsolutions360.com/apply/sasurie.
      </p>
    </form>
  );
}
