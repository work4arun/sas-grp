const facts = [
  {
    title: "Autonomous Status",
    tag: "Conferred by UGC & AU",
    color: "#000000",
    rgb: "0, 0, 0",
    glow: "rgba(0, 0, 0, 0.05)",
    text: "Conferred the prestigious status of AUTONOMOUS by UGC, New Delhi & Anna University, Chennai.",
  },
  {
    title: "12,000+ Alumni",
    tag: "12K+ Top Graduates · 25+ Awards",
    color: "#000000",
    rgb: "0, 0, 0",
    glow: "rgba(0, 0, 0, 0.05)",
    text: "Proud global alumni network of over 12,000 professionals and recipient of 25+ prestigious excellence awards.",
  },
  {
    title: "92% Graduation Rate",
    tag: "93.12% Placement Record",
    color: "#000000",
    rgb: "0, 0, 0",
    glow: "rgba(0, 0, 0, 0.05)",
    text: "High academic success with timely graduation, and 150+ recruiting partners.",
  },
  {
    title: "2,500+ Students",
    tag: "2 Campuses · Since 2001",
    color: "#000000",
    rgb: "0, 0, 0",
    glow: "rgba(0, 0, 0, 0.05)",
    text: "Over 2,500 students enrolled across Vijayamangalam & Coimbatore campuses with world-class infrastructure.",
  },
];

export default function Facts({ ready = true }) {
  return (
    <div
      className={`hero-facts hero-in${ready ? " go" : ""}`}
      style={{ "--delay": "0.95s" }}
      id="facts"
      aria-label="About the college"
    >
      <div className="container facts-grid">
        {facts.map((f, i) => (
          <div
            key={f.title}
            className={`fact fact-item${ready ? " is-ready" : ""}`}
            style={{
              "--i": i,
              "--delay": `${1.05 + i * 0.12}s`,
              "--c": f.color,
              "--rgb": f.rgb,
              "--glow": f.glow,
            }}
          >
            <div className="fact-badge">
              <span className="fact-beacon" aria-hidden="true" />
              <span>{f.tag}</span>
            </div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
