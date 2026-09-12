/**
 * Decorative node graph: static nodes, animated connecting dashes and a couple
 * of pulse rings. Purely ornamental, so it is hidden from assistive tech.
 */
export default function NodeField({ className = "" }: { className?: string }) {
  const nodes = [
    [20, 30],
    [70, 14],
    [116, 46],
    [46, 78],
    [96, 96],
    [148, 84],
    [130, 20],
  ] as const;

  const edges = [
    [0, 1],
    [1, 2],
    [0, 3],
    [3, 4],
    [2, 4],
    [4, 5],
    [1, 6],
    [6, 2],
  ] as const;

  return (
    <svg
      viewBox="0 0 168 112"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="currentColor"
          strokeWidth="1"
          className="dash-flow"
          style={{ animationDelay: `${i * 180}ms`, opacity: 0.45 }}
        />
      ))}

      {nodes.map(([x, y], i) => (
        <g key={i}>
          {i % 3 === 0 && (
            <circle
              cx={x}
              cy={y}
              r="7"
              fill="var(--accent)"
              className="pulse-ring"
              style={{ animationDelay: `${i * 700}ms` }}
            />
          )}
          <rect
            x={x - 3.5}
            y={y - 3.5}
            width="7"
            height="7"
            fill={i % 3 === 0 ? "var(--accent)" : "currentColor"}
          />
        </g>
      ))}
    </svg>
  );
}
