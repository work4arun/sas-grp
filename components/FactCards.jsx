import Image from "next/image";

/**
 * The card grid used on the seeded inner pages. Same markup, classes and CSS
 * variables as the four facts under the hero, so the inner pages read as the
 * same design rather than a bolt-on.
 */
export default function FactCards({ items, minWidth = 240 }) {
  return (
    <div className="facts-panel">
      <div
        className="container facts-grid"
        style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}px, 1fr))` }}
      >
      {items.map((f, i) => (
        <div
          key={`${f.title}-${i}`}
          className="fact fact-item is-ready"
          style={{
            "--i": i,
            "--delay": `${i * 0.07}s`,
            "--c": f.color || "var(--red)",
            "--rgb": f.rgb || "224, 31, 38",
            "--glow": f.glow || "rgba(224, 31, 38, 0.14)",
          }}
        >
          {f.image && (
            <Image
              src={f.image}
              alt={f.imageAlt || f.title}
              width={1200}
              height={800}
              sizes="(max-width: 700px) 92vw, 420px"
              style={{ width: "100%", height: "auto", borderRadius: 14, marginBottom: 14, display: "block" }}
            />
          )}
          {f.tag && (
            <div className="fact-badge">
              <span className="fact-beacon" aria-hidden="true" />
              <span>{f.tag}</span>
            </div>
          )}
          <h3>{f.title}</h3>
          <p>{f.text}</p>
          {f.links && (
            <p style={{ marginTop: 8, display: "grid", gap: 6 }}>
              {f.links.map((l) => (
                <a key={l.href} className="to-top" href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel={l.href.startsWith("http") ? "noreferrer" : undefined}>
                  {l.label}
                </a>
              ))}
            </p>
          )}
        </div>
      ))}
      </div>
    </div>
  );
}
