const AutoresStatisticalOverlay = ({ color = '#001d3d', opacity = '0.04' }) => (
  <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden" style={{ opacity }} aria-hidden="true">
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" fill="none" preserveAspectRatio="none">
      <path d="M0 150 Q100 50 200 150 T400 150" stroke={color} strokeWidth="2" />
      <path d="M0 170 Q100 70 200 170 T400 170" stroke={color} strokeWidth="1.5" opacity="0.6" />
      {[...Array(10)].map((_, index) => (
        <line key={`v-${index}`} x1={index * 40} y1="0" x2={index * 40} y2="300" stroke={color} strokeWidth="0.5" opacity="0.3" />
      ))}
      {[...Array(8)].map((_, index) => (
        <line key={`h-${index}`} x1="0" y1={index * 37.5} x2="400" y2={index * 37.5} stroke={color} strokeWidth="0.5" opacity="0.3" />
      ))}
    </svg>
  </div>
)

export default AutoresStatisticalOverlay
