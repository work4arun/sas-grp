import { LAYERS } from "@/lib/layers";

const DEPTH = { 0: 3, 1: 7, 2: 12, 3: 19 }; // parallax travel per level, in svg units
const DELAY = { 0: 0.15, 1: 0.32, 2: 0.49, 3: 0.66 }; // green lands first, red last

/** The stacked-arrow mark as svg groups. Render inside an <svg>. */
export function TowerLayers({
  opacities = [1, 1, 1, 1],
  animate = false,
  current = -1,
  onEnter,
  onLeave,
  onClick,
}) {
  return (
    <>
      {LAYERS.map((l) => {
        const isCurrent = current === l.level;
        const isInteractive = Boolean(onClick || onEnter);
        return (
          <g
            key={l.key}
            className={`tw-par${isCurrent ? " is-current" : ""}${isInteractive ? " is-interactive" : ""}`}
            data-level={l.level}
            style={{
              "--d": DEPTH[l.level],
              "--lv": l.level,
              opacity: opacities[l.level],
              cursor: onClick ? "pointer" : undefined,
            }}
            onMouseEnter={onEnter ? () => onEnter(l.level) : undefined}
            onMouseLeave={onLeave}
            onClick={onClick ? () => onClick(l.level) : undefined}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={
              onClick
                ? (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onClick(l.level);
                    }
                  }
                : undefined
            }
            aria-label={`Layer ${l.level + 1}: ${l.name}`}
            aria-pressed={onClick ? isCurrent : undefined}
          >
            <g className={animate ? "tw-rise" : undefined} style={{ "--delay": `${DELAY[l.level]}s` }}>
              <g className="tw-float">
                <path d={l.left} fill={l.fill} />
                <path d={l.right} fill={l.fillDark} />
                <line
                  x1="0"
                  y1={l.apex}
                  x2="0"
                  y2={l.bApex}
                  stroke="rgba(255, 255, 255, 0.45)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  pointerEvents="none"
                />
              </g>
            </g>
          </g>
        );
      })}
    </>
  );
}

/** Stand-alone tower used beside the story or within the presentation stage. */
export default function Tower({
  opacities,
  label,
  current,
  onClick,
  onEnter,
  onLeave,
  animate = true,
}) {
  return (
    <svg
      className="tower"
      viewBox="-170 -6 340 340"
      role={onClick ? "group" : "img"}
      aria-label={label || "Four stacked layers: foundation, competency, exposure and enterprise"}
    >
      <TowerLayers
        animate={animate}
        opacities={opacities}
        current={current}
        onClick={onClick}
        onEnter={onEnter}
        onLeave={onLeave}
      />
    </svg>
  );
}

