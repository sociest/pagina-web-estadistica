export const MiniBarChart = ({ color = '#00447e', opacity = 0.08 }) => (
  <svg className="absolute bottom-0 right-0 h-40 w-40 pointer-events-none" viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <rect x="10" y="70" width="15" height="40" fill={color} opacity={opacity} rx="2" />
    <rect x="30" y="50" width="15" height="60" fill={color} opacity={opacity * 1.5} rx="2" />
    <rect x="50" y="30" width="15" height="80" fill={color} opacity={opacity * 2} rx="2" />
    <rect x="70" y="45" width="15" height="65" fill={color} opacity={opacity * 1.7} rx="2" />
    <rect x="90" y="25" width="15" height="85" fill={color} opacity={opacity * 2.2} rx="2" />
    <line x1="5" y1="110" x2="115" y2="110" stroke={color} strokeWidth="0.5" opacity={opacity * 0.5} />
    <line x1="5" y1="90" x2="115" y2="90" stroke={color} strokeWidth="0.5" opacity={opacity * 0.3} />
    <line x1="5" y1="70" x2="115" y2="70" stroke={color} strokeWidth="0.5" opacity={opacity * 0.3} />
    <line x1="5" y1="50" x2="115" y2="50" stroke={color} strokeWidth="0.5" opacity={opacity * 0.3} />
  </svg>
)

export const GaussianCurve = ({ color = '#00447e', opacity = 0.08 }) => (
  <svg className="absolute top-0 right-0 h-40 w-48 pointer-events-none" viewBox="0 0 200 100" fill="none" aria-hidden="true">
    <path d="M10 95 Q50 95 70 50 Q90 10 100 5 Q110 10 130 50 Q150 95 190 95" stroke={color} strokeWidth="3" opacity={opacity} fill="none" />
    <path d="M10 95 Q50 95 70 50 Q90 10 100 5 Q110 10 130 50 Q150 95 190 95 L190 100 L10 100 Z" fill={color} opacity={opacity * 0.4} />
    <line x1="70" y1="95" x2="70" y2="50" stroke={color} strokeWidth="1.5" opacity={opacity * 0.7} strokeDasharray="3,2" />
    <line x1="100" y1="95" x2="100" y2="5" stroke={color} strokeWidth="2" opacity={opacity} strokeDasharray="3,2" />
    <line x1="130" y1="95" x2="130" y2="50" stroke={color} strokeWidth="1.5" opacity={opacity * 0.7} strokeDasharray="3,2" />
    <line x1="10" y1="95" x2="190" y2="95" stroke={color} strokeWidth="1" opacity={opacity * 0.5} />
  </svg>
)

export const TrendLineChart = ({ color = '#00447e', opacity = 0.08 }) => (
  <svg className="absolute top-0 left-0 h-40 w-48 pointer-events-none" viewBox="0 0 200 100" fill="none" aria-hidden="true">
    <path d="M10 80 L40 70 L70 55 L100 45 L130 35 L160 20 L190 10" stroke={color} strokeWidth="3" opacity={opacity} strokeLinecap="round" strokeLinejoin="round" />
    {[{x:10,y:80},{x:40,y:70},{x:70,y:55},{x:100,y:45},{x:130,y:35},{x:160,y:20},{x:190,y:10}].map((p) => (
      <circle key={`${p.x}-${p.y}`} cx={p.x} cy={p.y} r="4" fill={color} opacity={opacity * 1.5} />
    ))}
    <line x1="0" y1="90" x2="200" y2="90" stroke={color} strokeWidth="1" opacity={opacity * 0.4} />
    <line x1="0" y1="60" x2="200" y2="60" stroke={color} strokeWidth="1" opacity={opacity * 0.4} />
    <line x1="0" y1="30" x2="200" y2="30" stroke={color} strokeWidth="1" opacity={opacity * 0.4} />
  </svg>
)

export const ScatterPlot = ({ color = '#00447e', opacity = 0.06 }) => (
  <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 200 200" fill="none" aria-hidden="true">
    {[...Array(30)].map((_, i) => {
      const x = 15 + (i % 6) * 30 + (i % 3) * 4
      const y = 15 + Math.floor(i / 6) * 30 + (i % 4) * 3
      return <circle key={i} cx={x} cy={y} r="3" fill={color} opacity={opacity} />
    })}
    {[...Array(6)].map((_, i) => (
      <line key={`v${i}`} x1={i * 33} y1="0" x2={i * 33} y2="200" stroke={color} strokeWidth="0.5" opacity={opacity * 0.3} />
    ))}
    {[...Array(6)].map((_, i) => (
      <line key={`h${i}`} x1="0" y1={i * 33} x2="200" y2={i * 33} stroke={color} strokeWidth="0.5" opacity={opacity * 0.3} />
    ))}
  </svg>
)

export const StatisticalGrid = ({ color = '#00447e', opacity = 0.03 }) => (
  <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 1400 600" preserveAspectRatio="none" fill="none" aria-hidden="true">
    {[...Array(14)].map((_, i) => (
      <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="600" stroke={color} strokeWidth="1" opacity={opacity} />
    ))}
    {[...Array(6)].map((_, i) => (
      <line key={`h${i}`} x1="0" y1={i * 100} x2="1400" y2={i * 100} stroke={color} strokeWidth="1" opacity={opacity} />
    ))}
  </svg>
)
