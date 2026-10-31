// The four layers of the SAS mark, rebuilt as geometry so the page can animate them.
// Coordinates are centred on x = 0. Each band is a chevron: its top edge rises to an
// apex, its bottom edge follows the top edge of the band beneath it (minus a gap),
// exactly like the stacked arrow in the Sasurie logo.

const GAP = 9;

const bands = [
  // top → bottom, as they appear in the logo: rich, vibrant, high-definition tones
  { key: "enterprise", name: "Career Direction & Impact", level: 3, apex: 0,   slope: 1.5,  w: 62,  inset: 0,  fill: "#E61924", fillDark: "#B80E17", ink: "#B80E17" },
  { key: "exposure",   name: "Applied Capability", level: 2, apex: 43,  slope: 0.95, w: 102, inset: 12, fill: "#FFB500", fillDark: "#E08A00", ink: "#8A5A00" },
  { key: "competency", name: "Skills & Competencies", level: 1, apex: 104, slope: 0.8,  w: 132, inset: 12, fill: "#2B68C8", fillDark: "#1C4E9E", ink: "#1C4E9E" },
  { key: "foundation", name: "Foundation", level: 0, apex: 165, slope: 0.68, w: 162, inset: 12, fill: "#86C729", fillDark: "#6DAF18", ink: "#3F7A0A" },
];

const round = (n) => Math.round(n * 10) / 10;

export const LAYERS = bands.map((b, i) => {
  const next = bands[i + 1];
  // bottom edge: parallel to the next band's top edge, lifted by GAP.
  // the last band gets its own bottom edge, 56 units below its top.
  const bApex = next ? next.apex - GAP : b.apex + 56;
  const bSlope = next ? next.slope : b.slope;
  const topEnd = [b.w, b.apex + b.slope * b.w];
  const botX = b.w - b.inset;
  const botEnd = [botX, bApex + bSlope * botX];
  const right = [[0, b.apex], topEnd, botEnd, [0, bApex]];
  const left = right.map(([x, y]) => [-x, y]);
  const d = (pts) => "M" + pts.map(([x, y]) => `${round(x)} ${round(y)}`).join("L") + "Z";
  return {
    ...b,
    bApex,
    right: d(right),
    left: d(left),
    // where a label should sit: just outside the right-hand end of the band
    anchor: { x: b.w, y: round((topEnd[1] + botEnd[1]) / 2) },
  };
});

export const TOWER_BOX = { x: -170, y: -6, w: 340, h: 340 };
