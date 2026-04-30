/**
 * Statistical background decorators — recreates the "paper técnico estadístico"
 * look from the Figma blueprint: wave curves + floating notation labels.
 */

interface StatBgProps {
  color?: string;        // stroke / text colour (hex, no #)
  labels?: string[];     // e.g. ["σ = 0.21", "R² = 0.88", "n = 1542"]
  opacity?: number;      // wave opacity (default 0.08)
}

/** A single sine-like wave path */
function Wave({ color, w = 100, h = 60, d, opacity = 0.08 }: { color: string; w?: number; h?: number; d: string; opacity?: number }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      fill="none"
    >
      <path d={d} stroke={color} strokeWidth="0.5" opacity={opacity} />
    </svg>
  );
}

export function StatBg({ color = '#00a5a8', labels = ['σ = 0.21', 'R² = 0.88', 'n = 380'], opacity = 0.08 }: StatBgProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      {/* Wave curves */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none" fill="none">
        <path
          d="M0 86C66 86 133 66 200 26C267 -14 334 6 400 86"
          stroke={color}
          strokeWidth="1.5"
          opacity={opacity}
        />
        <path
          d="M0 80C66 80 133 60 200 20C267 -20 334 0 400 80"
          stroke={color}
          strokeWidth="1.1"
          opacity={opacity * 0.7}
        />
        <path
          d="M0 92C66 92 133 72 200 32C267 -8 334 12 400 92"
          stroke={color}
          strokeWidth="1.1"
          opacity={opacity * 0.5}
        />
      </svg>

      {/* Statistical notation labels */}
      {labels.map((label, i) => (
        <span
          key={i}
          className="absolute font-mono text-[9px] opacity-50"
          style={{
            color,
            top: i === 0 ? '8px' : i === 1 ? '8px' : '80%',
            left: i === 0 ? '12px' : undefined,
            right: i === 1 ? '12px' : i === 2 ? '12px' : undefined,
          }}
        >
          {label}
        </span>
      ))}
    </div>
  );
}

/** Tall variant for bigger cards */
export function StatBgTall({ color = '#00a5a8', labels = ['σ = 0.21', 'R² = 0.88', 'n = 380'] }: StatBgProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 260" preserveAspectRatio="none" fill="none">
        <path
          d="M0 198C66 198 133 155 200 69C267 -17 334 27 400 198"
          stroke={color}
          strokeWidth="1.5"
          opacity={0.07}
        />
        <path
          d="M0 185C66 185 133 142 200 56C267 -30 334 14 400 185"
          stroke={color}
          strokeWidth="1.1"
          opacity={0.05}
        />
        <path
          d="M0 210C66 210 133 167 200 81C267 -5 334 39 400 210"
          stroke={color}
          strokeWidth="1.1"
          opacity={0.04}
        />
      </svg>
      {labels.map((label, i) => (
        <span
          key={i}
          className="absolute font-mono text-[9px] opacity-50"
          style={{
            color,
            top: i === 0 ? '8px' : i === 1 ? '8px' : '85%',
            left: i === 0 ? '12px' : undefined,
            right: i === 1 ? '12px' : i === 2 ? '12px' : undefined,
          }}
        >
          {label}
        </span>
      ))}
    </div>
  );
}

/** Wide banner variant */
export function StatBgWide({ color = '#00a5a8', labels = ['σ = 0.21', 'R² = 0.88', 'n = 1542'] }: StatBgProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1214 72" preserveAspectRatio="none" fill="none">
        <path
          d="M0 54C202 54 404 40 607 12C810 -16 1012 8 1214 54"
          stroke={color}
          strokeWidth="2"
          opacity={0.08}
        />
        <path
          d="M0 48C202 48 404 34 607 6C810 -22 1012 2 1214 48"
          stroke={color}
          strokeWidth="1.5"
          opacity={0.055}
        />
        <path
          d="M0 60C202 60 404 46 607 18C810 -10 1012 14 1214 60"
          stroke={color}
          strokeWidth="1.5"
          opacity={0.04}
        />
      </svg>
      {labels.map((label, i) => (
        <span
          key={i}
          className="absolute font-mono text-[9px] opacity-50"
          style={{
            color,
            top: i < 2 ? '8px' : undefined,
            bottom: i === 2 ? '8px' : undefined,
            left: i === 0 ? '12px' : undefined,
            right: i >= 1 ? (i === 1 ? '160px' : '12px') : undefined,
          }}
        >
          {label}
        </span>
      ))}
    </div>
  );
}
